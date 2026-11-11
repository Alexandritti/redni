const links = [
  { href: "#ploshchadkam", label: "Для площадок" },
  { href: "#kak-rabotaet", label: "Как работает" },
  { href: "#partneram", label: "Партнёрам" },
  { href: "#o-proekte", label: "О проекте" },
  { href: "#zayavka", label: "Обсудить установку" },
];

export function Footer() {
  return (
    <footer className="bg-burgundy text-white">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-14 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] lg:px-8">
        <div className="min-w-0">
          <p className="text-3xl font-extrabold tracking-[-0.05em]">REDNI</p>
          <p className="mt-4 max-w-md text-lg leading-relaxed">
            Компактные автоматы с прокладками и мини-пакетами для туалетов общественных пространств.
          </p>
        </div>
        <nav aria-label="Навигация внизу страницы">
          <ul className="grid gap-2">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-lg font-bold text-white no-underline hover:underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
