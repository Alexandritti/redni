const points = [
  {
    title: "Компактный формат",
    text: "Настенный корпус для туалета общественной площадки.",
  },
  {
    title: "Брендирование REDNI",
    text: "Корпус и мини-пакет оформлены как один сервис REDNI.",
  },
  {
    title: "Пополнение и обслуживание",
    text: "Пополнение и обслуживание идут по процессу, который согласуется с площадкой.",
  },
  {
    title: "Модель доступа",
    text: "Платная выдача или бесплатно для посетителей, если сервис оплачивает площадка.",
  },
];

export function ForSites() {
  return (
    <section id="ploshchadkam" className="bg-paper py-20 text-ink lg:py-28" aria-labelledby="sites-title">
      <div data-reveal className="mx-auto max-w-[1200px] px-5 lg:px-8">
        <h2
          id="sites-title"
          className="max-w-3xl text-[clamp(2.6rem,6.4vw,4.8rem)] leading-[0.88] font-extrabold tracking-[-0.045em] uppercase"
        >
          Для площадок
        </h2>
        <ul className="mt-12 max-w-3xl border-t border-line">
          {points.map((point) => (
            <li key={point.title} className="border-b border-line py-8">
              <h3 className="text-[clamp(1.6rem,3vw,2.2rem)] leading-tight font-extrabold tracking-[-0.03em]">{point.title}</h3>
              <p className="mt-3 max-w-2xl text-xl leading-relaxed">{point.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
