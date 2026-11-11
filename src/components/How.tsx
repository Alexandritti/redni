const steps = [
  "Выбрать прокладку или мини-пакет.",
  "Оплатить удобным способом.",
  "Получить продукцию из автомата.",
];

export function How() {
  return (
    <section id="kak-rabotaet" className="bg-poster py-20 text-white lg:py-28" aria-labelledby="how-title">
      <div data-reveal className="mx-auto max-w-[1200px] px-5 lg:px-8">
        <h2 id="how-title" className="text-[clamp(2.5rem,6vw,4.6rem)] leading-[0.88] font-extrabold tracking-[-0.045em] uppercase">
          Как это работает
        </h2>
        <ol className="mt-12 grid items-stretch gap-x-6 gap-y-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step} className="flex min-w-0 flex-col">
              <span className="block text-[clamp(4.5rem,10vw,7rem)] leading-none font-extrabold tracking-[-0.06em]" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="lozenge lozenge-block mt-4 flex-1 text-center">{step}</p>
            </li>
          ))}
        </ol>
        <p className="lozenge mt-8 inline-flex md:mt-10">Без скачивания приложения и создания аккаунта</p>
      </div>
    </section>
  );
}
