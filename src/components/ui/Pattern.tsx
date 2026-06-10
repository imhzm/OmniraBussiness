/** Subtle Islamic-geometric background pattern for dark sections. */
export function Pattern({ id, className }: { id: string; className?: string }) {
  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <pattern id={id} width="72" height="72" patternUnits="userSpaceOnUse">
          <rect x="22" y="22" width="28" height="28" rx="2" fill="none" stroke="currentColor" strokeWidth="1" />
          <rect
            x="22"
            y="22"
            width="28"
            height="28"
            rx="2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            transform="rotate(45 36 36)"
          />
          <circle cx="36" cy="36" r="2" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
