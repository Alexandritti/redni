import { ScriptWord } from "./ScriptWord.tsx";

const points = [
  {
    title: "В месте необходимости",
    text: "Прокладка или мини-пакет доступны прямо в туалете — там, где вопрос возникает.",
  },
  {
    title: "Минимум действий",
    text: "Выбор, оплата и выдача. Отдельное приложение и регистрация не нужны.",
  },
  {
    title: "Инфраструктура площадки",
    text: "Автомат дополняет туалет сервисом, который полезен посетителю в нужный момент.",
  },
];

export function Value() {
  return (
    <section className="bg-paper py-20 text-ink lg:py-28">
      <div data-reveal className="mx-auto max-w-[1200px] px-5 lg:px-8">
        <h2 className="max-w-4xl text-[clamp(2.2rem,7vw,4.6rem)] leading-[0.88] font-extrabold tracking-[-0.045em]">
          <span className="block uppercase">Небольшой</span>
          <span className="block uppercase">автомат.</span>
          <span className="block uppercase">Важная часть</span>
          <span className="mt-1 block leading-[1.05]">
            <ScriptWord tone="brand">заботы</ScriptWord>
          </span>
          <span className="block uppercase">о посетителях</span>
        </h2>
        <ol className="mt-12 max-w-3xl border-t border-line">
          {points.map((point, index) => (
            <li key={point.title} className="grid grid-cols-[auto_minmax(0,1fr)] gap-4 border-b border-line py-7 sm:gap-6">
              <span className="pt-1 text-4xl leading-none font-extrabold tracking-[-0.05em] text-poster sm:text-5xl" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <h3 className="text-2xl leading-tight font-extrabold tracking-[-0.03em]">{point.title}</h3>
                <p className="mt-2 max-w-lg text-lg leading-relaxed">{point.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
