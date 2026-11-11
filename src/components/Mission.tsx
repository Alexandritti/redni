import { ScriptWord } from "./ScriptWord.tsx";

export function Mission() {
  return (
    <section id="o-proekte" className="bg-blush py-20 text-ink lg:py-28" aria-labelledby="mission-title">
      <div data-reveal className="mx-auto max-w-[1200px] px-5 lg:px-8">
        <p className="lozenge lozenge-caps lozenge-poster inline-flex">О проекте</p>
        <h2
          id="mission-title"
          className="mt-6 max-w-4xl text-[clamp(2.5rem,6vw,4.6rem)] leading-[0.9] font-extrabold tracking-[-0.045em]"
        >
          <span className="uppercase">Сервис, который создаёт не только </span>
          <ScriptWord tone="brand">удобство</ScriptWord>
        </h2>
        <p className="mt-8 max-w-2xl text-2xl leading-snug font-medium">
          REDNI развивает гибкую занятость для мам в декрете — пополнение автоматов можно организовать как посильную
          работу с понятными маршрутами и графиком.
        </p>
      </div>
    </section>
  );
}
