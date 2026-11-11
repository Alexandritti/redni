import { PackMark } from "./ProductArt.tsx";

const formats = ["Короткая серия", "Спонсорская выдача", "QR на упаковке"];

export function Partners() {
  return (
    <section id="partneram" className="bg-poster py-20 text-white lg:py-28" aria-labelledby="partners-title">
      <div
        data-reveal
        className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.7fr)] lg:px-8"
      >
        <div className="min-w-0">
          <h2
            id="partners-title"
            className="text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.88] font-extrabold tracking-[-0.045em] uppercase"
          >
            Для брендов и партнёров
          </h2>
          <p className="mt-6 max-w-xl text-xl leading-snug font-bold">
            Мини-пакет может выйти вместе с брендом: короткая серия, спонсорская бесплатная выдача или QR на упаковке.
            Это дополнительные форматы. К установке автомата они не обязательны.
          </p>
          <ul className="mt-8 flex flex-col items-start gap-3">
            {formats.map((format) => (
              <li key={format}>
                <span className="lozenge lozenge-caps inline-flex">{format}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="float-y mx-auto w-full max-w-[240px] lg:max-w-[280px]">
          <PackMark />
        </div>
      </div>
    </section>
  );
}
