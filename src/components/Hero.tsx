import { ProductScene } from "./ProductArt.tsx";
import { ScriptWord } from "./ScriptWord.tsx";

const venues = [
  { label: "Торговые центры", cell: "sm:col-start-1 sm:row-start-1" },
  { label: "Фитнес", cell: "sm:col-start-1 sm:row-start-2" },
  { label: "Аэропорты", cell: "sm:col-start-2 sm:row-start-2" },
  { label: "Вокзалы", cell: "sm:col-start-1 sm:row-start-3" },
  { label: "Вузы", cell: "sm:col-start-1 sm:row-start-4" },
  { label: "Офисы", cell: "sm:col-start-2 sm:row-start-4" },
] as const;

export function Hero() {
  return (
    <section className="bg-poster text-white" aria-labelledby="hero-title">
      <div className="mx-auto grid max-w-[1200px] items-start gap-x-8 gap-y-10 px-5 pt-6 pb-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:px-8 lg:pt-4 lg:pb-20">
        <div className="rise min-w-0">
          <p className="lozenge lozenge-caps lozenge-eyebrow inline-flex max-w-full text-left">
            Femtech-инфраструктура для общественных пространств
          </p>
          <h1
            id="hero-title"
            className="mt-6 text-[clamp(2.7rem,7.4vw,5.35rem)] leading-[0.86] font-extrabold tracking-[-0.045em]"
          >
            <span className="block uppercase">Прокладки</span>
            <span className="block uppercase">там, где они</span>
            <span className="mt-1 block leading-[1.05]">
              <ScriptWord>нужны</ScriptWord>
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-2xl leading-snug font-medium">
            Компактные автоматы REDNI в туалетах торговых центров, фитнес-клубов, аэропортов и других пространств. Без
            приложения и регистрации
          </p>
          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap">
            <a href="#zayavka" className="pill lozenge lozenge-caps inline-flex sm:w-auto">
              Установить REDNI
            </a>
            <a href="#kak-rabotaet" className="pill pill-ghost lozenge lozenge-caps inline-flex sm:w-auto">
              Как это работает
            </a>
          </div>
        </div>

        <div className="float-y rise rise-late mx-auto w-full max-w-[340px] min-w-0 lg:row-span-2 lg:mx-0 lg:max-w-none">
          <ProductScene />
        </div>

        <div className="min-w-0">
          <section aria-labelledby="venues-title">
            <h2 id="venues-title" className="text-[clamp(1.7rem,3vw,2.4rem)] leading-none font-extrabold tracking-[-0.04em] uppercase">
              Сценарии размещения
            </h2>
            <ul className="mt-6 grid w-full grid-cols-1 gap-y-3 sm:grid-cols-[max-content_max-content] sm:justify-between sm:gap-x-8">
              {venues.map((venue) => (
                <li key={venue.label} className={`min-w-0 ${venue.cell}`}>
                  <span className="lozenge lozenge-caps inline-flex max-w-full">{venue.label}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
}
