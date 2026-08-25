import crypto from 'crypto';

/**
 * تكامل مباشر مع بوابة مصرف الراجحي / NeoLeap عبر نمط Hosted Checkout.
 *
 * التشفير المعتمد: AES-256-CBC مع IV ثابت = 'PGKEYENCDECIVSPC'
 * ومفتاح Resource Key بطول 32 بايت (أو 16/24 حسب التهيئة).
 */

export interface NeoleapCredentials {
  gatewayUrl: string; // https://securepayments.alrajhibank.com.sa/pg/payment/hosted.htm
  tranportalId: string;
  tranportalPassword: string;
  resourceKey: string;
  terminalId?: string;
  merchantId?: string;
}

export function isNeoleapConfigured(): boolean {
  return Boolean(
    process.env.NEOLEAP_TRANPORTAL_ID &&
      (process.env.NEOLEAP_TRANPORTAL_PASSWORD || process.env.NEOLEAP_TRANPORTAL_PASSWORD_B64) &&
      process.env.NEOLEAP_RESOURCE_KEY,
  );
}

function decodeSecret(direct?: string, b64?: string): string {
  if (b64) {
    try {
      return Buffer.from(b64, 'base64').toString('utf8');
    } catch {
      /* ignore */
    }
  }
  return direct || '';
}

export function creds(): NeoleapCredentials {
  const tranportalPassword = decodeSecret(
    process.env.NEOLEAP_TRANPORTAL_PASSWORD,
    process.env.NEOLEAP_TRANPORTAL_PASSWORD_B64,
  );
  const resourceKey = decodeSecret(
    process.env.NEOLEAP_RESOURCE_KEY,
    process.env.NEOLEAP_RESOURCE_KEY_B64,
  );

  const c: NeoleapCredentials = {
    gatewayUrl:
      process.env.NEOLEAP_GATEWAY_URL ||
      'https://securepayments.alrajhibank.com.sa/pg/payment/hosted.htm',
    tranportalId: process.env.NEOLEAP_TRANPORTAL_ID || '',
    tranportalPassword,
    resourceKey,
    terminalId: process.env.NEOLEAP_TERMINAL_ID || '',
    merchantId: process.env.NEOLEAP_MERCHANT_ID || '',
  };

  if (!c.tranportalId || !c.tranportalPassword || !c.resourceKey) {
    throw new Error('NEOLEAP_CREDENTIALS_MISSING');
  }
  return c;
}

const STATIC_IV = Buffer.from('PGKEYENCDECIVSPC', 'utf8'); // 16 bytes

function resolveKeyIv(rawKey: string): { alg: string; key: Buffer; iv: Buffer } {
  let raw = Buffer.from(rawKey, 'utf8');
  if (raw.length !== 16 && raw.length !== 24 && raw.length !== 32) {
    if (/^[0-9a-fA-F]+$/.test(rawKey) && (rawKey.length === 32 || rawKey.length === 48 || rawKey.length === 64)) {
      raw = Buffer.from(rawKey, 'hex');
    }
  }
  if ([16, 24, 32].includes(raw.length)) {
    return {
      alg: `aes-${raw.length * 8}-cbc`,
      key: raw,
      iv: STATIC_IV,
    };
  }
  throw new Error(`INVALID_RESOURCE_KEY_LENGTH: ${raw.length} bytes (expected 16, 24, or 32)`);
}

export function encryptTrandata(plainText: string, c: NeoleapCredentials): string {
  const { alg, key, iv } = resolveKeyIv(c.resourceKey);
  const cipher = crypto.createCipheriv(alg, key, iv);
  cipher.setAutoPadding(true);
  const encrypted = Buffer.concat([cipher.update(plainText, 'utf8'), cipher.final()]);
  return encrypted.toString('hex').toUpperCase();
}

export function decryptTrandata(hexCipher: string, c: NeoleapCredentials): string {
  const { alg, key, iv } = resolveKeyIv(c.resourceKey);
  const decipher = crypto.createDecipheriv(alg, key, iv);
  decipher.setAutoPadding(true);
  const input = Buffer.from(hexCipher.trim(), 'hex');
  const decrypted = Buffer.concat([decipher.update(input), decipher.final()]);
  return decrypted.toString('utf8');
}

/* -------------------------- إنشاء جلسة دفع -------------------------- */

export interface CreateCheckoutParams {
  amountSar: number;
  trackId: string;
  responseUrl: string;
  errorUrl: string;
  lang?: 'ar' | 'en';
  udf1?: string; // معرّف الفاتورة لدينا
  udf2?: string; // مرجع العميل
  udf3?: string;
  udf4?: string;
  udf5?: string;
}

export interface HostedCheckoutResult {
  ok: boolean;
  paymentId?: string;
  paymentUrl?: string;
  rawStatus?: string;
  error?: string;
}

export async function createHostedCheckout(
  params: CreateCheckoutParams,
): Promise<HostedCheckoutResult> {
  let c: NeoleapCredentials;
  try {
    c = creds();
  } catch (e) {
    return { ok: false, error: (e as Error).message };
  }

  const payload = [
    {
      id: c.tranportalId,
      password: c.tranportalPassword,
      action: '1', // Purchase
      amt: params.amountSar.toFixed(2),
      currencyCode: '682', // SAR
      trackId: params.trackId,
      responseURL: params.responseUrl,
      errorURL: params.errorUrl,
      langid: (params.lang || 'ar').toUpperCase() === 'EN' ? 'USA' : 'ARA',
      udf1: params.udf1 || '',
      udf2: params.udf2 || '',
      udf3: params.udf3 || '',
      udf4: params.udf4 || '',
      udf5: params.udf5 || 'omneraone',
    },
  ];

  const plainJson = JSON.stringify(payload);
  const trandata = encryptTrandata(plainJson, c);

  const reqBody = [
    {
      id: c.tranportalId,
      trandata,
      errorURL: params.errorUrl,
      responseURL: params.responseUrl,
    },
  ];

  let res: Response;
  try {
    res = await fetch(c.gatewayUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json, text/plain, */*',
        'User-Agent': 'OmneraOne-Payment-Client/1.0',
      },
      body: JSON.stringify(reqBody),
      cache: 'no-store',
    });
  } catch (err) {
    return { ok: false, error: `fetch_failed: ${(err as Error).message}` };
  }

  const text = await res.text();
  try {
    const data = JSON.parse(text);
    const first = Array.isArray(data) ? data[0] : data;
    if (first && typeof first.result === 'string') {
      const parts = first.result.split(':');
      if (parts.length >= 2) {
        const paymentId = parts[0];
        let paymentUrl = parts.slice(1).join(':');
        if (paymentId && !paymentUrl.includes('PaymentID=')) {
          const sep = paymentUrl.includes('?') ? '&' : '?';
          paymentUrl = `${paymentUrl}${sep}PaymentID=${paymentId}`;
        }
        return {
          ok: true,
          paymentId,
          paymentUrl,
          rawStatus: String(first.status ?? ''),
        };
      }
    }
    return {
      ok: false,
      error: 'unexpected_gateway_payload',
      rawStatus: `${res.status} ${JSON.stringify(first).slice(0, 200)}`,
    };
  } catch {
    const m = text.trim().match(/^([^:\s]+):(https?:\/\/.+)$/i);
    if (m) {
      const paymentId = m[1];
      let paymentUrl = m[2];
      if (paymentId && !paymentUrl.includes('PaymentID=')) {
        const sep = paymentUrl.includes('?') ? '&' : '?';
        paymentUrl = `${paymentUrl}${sep}PaymentID=${paymentId}`;
      }
      return { ok: true, paymentId, paymentUrl };
    }
    return { ok: false, error: 'invalid_gateway_response', rawStatus: `${res.status} ${text.slice(0, 200)}` };
  }
}

/* -------------------------- قراءة النتيجة -------------------------- */

export interface CallbackResult {
  success: boolean;
  trackId?: string;
  paymentId?: string;
  auth?: string;
  ref?: string;
  amount?: string;
  udf1?: string;
  udf2?: string;
  rawResult?: string;
}

const SUCCESS_RESULTS = new Set(['CAPTURED', 'APPROVED', 'SUCCESS']);

/** يفك trandata الوارد في POST البوابة ويستخرج النتيجة */
export function parseCallbackTrandata(trandataHex: string): CallbackResult {
  let c: NeoleapCredentials;
  try {
    c = creds();
  } catch {
    return { success: false, rawResult: 'not_configured' };
  }
  try {
    const json = decryptTrandata(trandataHex, c);
    let arr: unknown;
    try {
      arr = JSON.parse(json);
    } catch {
      arr = [Object.fromEntries(new URLSearchParams(json))];
    }
    const rec = (Array.isArray(arr) ? arr[0] : arr) as Record<string, string> | undefined;
    if (!rec || typeof rec !== 'object') return { success: false };
    const rawResult = String(rec.result ?? rec.status ?? '');
    return {
      success: SUCCESS_RESULTS.has(rawResult.trim().toUpperCase()),
      trackId: rec.trackId,
      paymentId: rec.paymentid ?? rec.paymentId,
      auth: rec.auth,
      ref: rec.ref,
      amount: rec.amt,
      udf1: rec.udf1,
      udf2: rec.udf2,
      rawResult,
    };
  } catch (e) {
    return { success: false, rawResult: `decrypt_failed: ${String(e).slice(0, 80)}` };
  }
}
