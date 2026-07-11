import { promises as fs } from "fs";
import path from "path";
import crypto from "crypto";

export type LeadStatus = "new" | "contacted" | "won" | "lost";

export type Lead = {
  id: string;
  createdAt: string; // ISO
  name: string;
  company?: string;
  email?: string;
  phone?: string;
  service?: string;
  city?: string;
  preferred?: string;
  message?: string;
  locale?: string;
  source: string;
  status: LeadStatus;
};

export type LeadInput = Omit<Lead, "id" | "createdAt" | "status">;

/** Persistent, deploy-safe store (lives outside the git repo). One JSON object per line. */
const FILE = process.env.LEADS_FILE || "/var/www/omnira-data/leads.jsonl";

async function ensureDir() {
  await fs.mkdir(path.dirname(FILE), { recursive: true });
}

export async function appendLead(input: LeadInput): Promise<Lead> {
  await ensureDir();
  const lead: Lead = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    status: "new",
    ...input,
  };
  await fs.appendFile(FILE, JSON.stringify(lead) + "\n", "utf8");
  return lead;
}

/** Returns leads newest-first. */
export async function readLeads(): Promise<Lead[]> {
  try {
    const raw = await fs.readFile(FILE, "utf8");
    const leads = raw
      .split("\n")
      .filter(Boolean)
      .map((line) => {
        try {
          return JSON.parse(line) as Lead;
        } catch {
          return null;
        }
      })
      .filter((l): l is Lead => l !== null);
    return leads.reverse();
  } catch (e) {
    if ((e as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw e;
  }
}

export async function setLeadStatus(id: string, status: LeadStatus): Promise<boolean> {
  const newestFirst = await readLeads();
  const idx = newestFirst.findIndex((l) => l.id === id);
  if (idx === -1) return false;
  newestFirst[idx] = { ...newestFirst[idx], status };
  const oldestFirst = [...newestFirst].reverse();
  await ensureDir();
  await fs.writeFile(FILE, oldestFirst.map((l) => JSON.stringify(l)).join("\n") + "\n", "utf8");
  return true;
}
