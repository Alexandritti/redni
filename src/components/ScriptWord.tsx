type ScriptWordProps = {
  children: string;
  tone?: "light" | "brand";
};

export function ScriptWord({ children, tone = "light" }: ScriptWordProps) {
  const color = tone === "brand" ? "text-poster" : "text-white";
  return (
    <span
      className={`relative inline-block px-[0.06em] pb-[0.14em] font-script text-[1.08em] leading-none font-normal tracking-normal normal-case ${color}`}
    >
      {children}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute top-[58%] left-[-2%] h-3 w-[104%] overflow-visible"
        viewBox="0 0 200 12"
        fill="none"
      >
        <path
          d="M2 7C28 2 48 11 90 6C128 2 158 10 198 5"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </span>
  );
}
