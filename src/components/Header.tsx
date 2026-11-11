import { useEffect, useId, useRef, useState } from "react";

const links = [
  { href: "#ploshchadkam", label: "Для площадок" },
  { href: "#kak-rabotaet", label: "Как работает" },
  { href: "#partneram", label: "Партнёрам" },
  { href: "#o-proekte", label: "О проекте" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) return;
    firstLinkRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1080) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  function closeFromLink() {
    setOpen(false);
  }

  return (
    <header id="top" className="sticky top-0 z-40 bg-poster text-white">
      <div className="mx-auto flex max-w-[1200px] items-center gap-3 px-5 py-3 lg:px-8">
        <a href="#top" className="shrink-0 text-[1.65rem] leading-none font-extrabold tracking-[-0.06em] text-white no-underline">
          REDNI
        </a>
        <nav aria-label="Разделы страницы" className="ml-8 hidden items-center gap-6 min-[1080px]:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <a href="#zayavka" className="pill lozenge lozenge-caps lozenge-bar hidden min-[420px]:inline-flex">
            Установить REDNI
          </a>
          <button
            ref={buttonRef}
            type="button"
            className="lozenge lozenge-caps lozenge-sm inline-flex min-[1080px]:hidden"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Закрыть" : "Меню"}
          </button>
        </div>
      </div>
      {open ? (
        <div id={panelId} className="menu-panel border-t border-white/30 px-5 pt-2 pb-5 min-[1080px]:hidden">
          <nav aria-label="Мобильные разделы">
            <ul className="flex flex-col">
              {links.map((link, index) => (
                <li key={link.href}>
                  <a
                    ref={index === 0 ? firstLinkRef : undefined}
                    href={link.href}
                    className="block py-2 text-2xl font-extrabold tracking-[-0.04em] text-white no-underline"
                    onClick={closeFromLink}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a href="#zayavka" className="pill lozenge lozenge-caps lozenge-block mt-3 inline-flex min-[420px]:hidden" onClick={closeFromLink}>
            Установить REDNI
          </a>
        </div>
      ) : null}
    </header>
  );
}
