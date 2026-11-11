const ink = "#161414";

function Machine() {
  return (
    <g>
      <defs>
        <clipPath id="redni-body">
          <rect x="46" y="18" width="268" height="548" rx="46" />
        </clipPath>
        <clipPath id="redni-pack" clipPathUnits="objectBoundingBox">
          <rect width="1" height="1" rx="0.16" ry="0.12" />
        </clipPath>
      </defs>

      <g clipPath="url(#redni-body)">
        <rect x="46" y="18" width="268" height="548" fill="#fff" />
        <rect x="46" y="412" width="268" height="154" fill={ink} />
      </g>
      <rect x="46" y="18" width="268" height="548" rx="46" fill="none" stroke={ink} strokeWidth="6" />

      <text
        x="180"
        y="108"
        textAnchor="middle"
        fill={ink}
        fontFamily="Montserrat, sans-serif"
        fontWeight="800"
        fontSize="34"
        letterSpacing="-0.8"
      >
        REDNI
      </text>
      <path d="M86 132h188" stroke={ink} strokeWidth="4" strokeLinecap="round" />

      <rect x="78" y="160" width="204" height="68" rx="34" fill="#fff" stroke={ink} strokeWidth="5" />
      <rect x="156" y="181" width="48" height="24" rx="12" fill="none" stroke={ink} strokeWidth="4" />

      <rect x="78" y="246" width="204" height="68" rx="34" fill="#fff" stroke={ink} strokeWidth="5" />
      <rect x="162" y="260" width="36" height="42" rx="10" fill="none" stroke={ink} strokeWidth="4" />
      <path d="M170 260v-6h20v6" fill="none" stroke={ink} strokeWidth="4" strokeLinejoin="round" />

      <circle cx="180" cy="362" r="28" fill="#fff" stroke={ink} strokeWidth="5" />
      <circle cx="180" cy="366" r="3" fill={ink} />
      <path d="M170 360c5-8 15-8 20 0" fill="none" stroke={ink} strokeWidth="4" strokeLinecap="round" />
      <path d="M164 356c8-12 24-12 32 0" fill="none" stroke={ink} strokeWidth="4" strokeLinecap="round" />

      <rect x="112" y="468" width="136" height="30" rx="15" fill="#fff" />
    </g>
  );
}

function Pack({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(-8)`}>
      <g clipPath="url(#redni-pack)">
        <rect width="158" height="214" fill="#fff" />
        <rect y="156" width="158" height="58" fill={ink} />
      </g>
      <rect width="158" height="214" rx="28" fill="none" stroke={ink} strokeWidth="6" />
      <path d="M46 28h66" stroke={ink} strokeWidth="4" strokeLinecap="round" />
      <text
        x="79"
        y="108"
        textAnchor="middle"
        fill={ink}
        fontFamily="Montserrat, sans-serif"
        fontWeight="800"
        fontSize="22"
        letterSpacing="-0.4"
      >
        REDNI
      </text>
    </g>
  );
}

export function ProductScene() {
  return (
    <svg
      viewBox="0 0 520 620"
      role="img"
      aria-label="Макет настенного автомата REDNI и фирменного мини-пакета"
      className="h-auto w-full"
    >
      <Machine />
      <Pack x={292} y={348} />
    </svg>
  );
}

export function PackMark() {
  return (
    <svg
      viewBox="0 0 220 300"
      role="img"
      aria-label="Макет фирменного мини-пакета REDNI"
      className="h-auto w-full"
    >
      <g transform="translate(28 24)">
        <defs>
          <clipPath id="redni-pack-solo" clipPathUnits="objectBoundingBox">
            <rect width="1" height="1" rx="0.16" ry="0.12" />
          </clipPath>
        </defs>
        <g clipPath="url(#redni-pack-solo)">
          <rect width="158" height="214" fill="#fff" />
          <rect y="156" width="158" height="58" fill={ink} />
        </g>
        <rect width="158" height="214" rx="28" fill="none" stroke={ink} strokeWidth="6" />
        <path d="M46 28h66" stroke={ink} strokeWidth="4" strokeLinecap="round" />
        <text
          x="79"
          y="108"
          textAnchor="middle"
          fill={ink}
          fontFamily="Montserrat, sans-serif"
          fontWeight="800"
          fontSize="22"
          letterSpacing="-0.4"
        >
          REDNI
        </text>
      </g>
    </svg>
  );
}
