import { useState } from "react";
import type { FormEvent } from "react";
import { LEAD_EMAIL, leadBody, leadMailto, sanitize } from "../leadMail.ts";
import type { LeadInput } from "../leadMail.ts";
import { ScriptWord } from "./ScriptWord.tsx";

const venues = [
  "Торговый центр",
  "Фитнес-центр",
  "Аэропорт",
  "Вокзал",
  "Вуз",
  "Школа",
  "Офис или бизнес-центр",
  "Городской WC",
  "Другое",
];

type Errors = Partial<
  Record<"name" | "organization" | "venue" | "city" | "phone" | "email" | "contact" | "consent", string>
>;

const empty = {
  name: "",
  organization: "",
  venue: "",
  city: "",
  phone: "",
  email: "",
  comment: "",
  consent: false,
};

function digits(value: string) {
  return value.replace(/\D/g, "");
}

function validate(fields: typeof empty): Errors {
  const errors: Errors = {};
  const name = sanitize(fields.name, 80);
  const organization = sanitize(fields.organization, 120);
  const city = sanitize(fields.city, 80);
  const phone = sanitize(fields.phone, 40);
  const email = sanitize(fields.email, 120);
  const phoneDigits = digits(phone);

  if (name.length < 2) errors.name = "Укажите имя";
  if (organization.length < 2) errors.organization = "Укажите организацию";
  if (!fields.venue) errors.venue = "Выберите тип площадки";
  if (city.length < 2) errors.city = "Укажите город";

  if (!phone && !email) {
    errors.contact = "Укажите телефон или email";
  } else {
    if (phone && (phoneDigits.length < 10 || phoneDigits.length > 15 || /[^\d+\s()-]/.test(phone))) {
      errors.phone = "Проверьте телефон";
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      errors.email = "Проверьте email";
    }
  }

  if (!fields.consent) errors.consent = "Нужно согласие на обработку данных";
  return errors;
}

function toLead(fields: typeof empty): LeadInput {
  return {
    name: sanitize(fields.name, 80),
    organization: sanitize(fields.organization, 120),
    venue: fields.venue,
    city: sanitize(fields.city, 80),
    phone: sanitize(fields.phone, 40),
    email: sanitize(fields.email, 120),
    comment: sanitize(fields.comment, 500),
  };
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-2 text-sm font-bold text-danger">
      {message}
    </p>
  );
}

export function LeadForm() {
  const [fields, setFields] = useState(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [draftReady, setDraftReady] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);

  function update<K extends keyof typeof empty>(key: K, value: (typeof empty)[K]) {
    setFields((current) => ({ ...current, [key]: value }));
    setDraftReady(false);
    setErrors((current) => {
      const next = { ...current };
      delete next[key as keyof Errors];
      if (key === "phone" || key === "email") delete next.contact;
      return next;
    });
  }

  function openDraft(lead: LeadInput) {
    const anchor = document.createElement("a");
    anchor.href = leadMailto(lead);
    anchor.rel = "nofollow";
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(fields);
    setErrors(nextErrors);
    setCopied(false);
    setCopyFailed(false);
    if (Object.keys(nextErrors).length > 0) {
      setDraftReady(false);
      const order = ["name", "organization", "venue", "city", "contact", "phone", "email", "consent"] as const;
      const first = order.find((key) => nextErrors[key]);
      const focusId =
        first === "contact" || first === "phone"
          ? "lead-phone"
          : first === "email"
            ? "lead-email"
            : first === "consent"
              ? "lead-consent"
              : first === "name"
                ? "lead-name"
                : first === "organization"
                  ? "lead-org"
                  : first === "venue"
                    ? "lead-venue"
                    : "lead-city";
      document.getElementById(focusId)?.focus();
      return;
    }

    const lead = toLead(fields);
    setDraftReady(true);
    openDraft(lead);
  }

  async function copyDraft() {
    try {
      await navigator.clipboard.writeText(leadBody(toLead(fields)));
      setCopied(true);
      setCopyFailed(false);
    } catch {
      setCopied(false);
      setCopyFailed(true);
    }
  }

  return (
    <section id="zayavka" className="bg-poster py-20 text-white lg:py-28" aria-labelledby="lead-title">
      <div
        data-reveal
        className="mx-auto grid max-w-[1200px] items-start gap-12 px-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:px-8"
      >
        <div className="min-w-0 lg:sticky lg:top-28">
          <h2 id="lead-title" className="text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.9] font-extrabold tracking-[-0.045em]">
            <span className="uppercase">Сделаем REDNI частью вашей </span>
            <span className="whitespace-nowrap"><ScriptWord>площадки</ScriptWord><span className="uppercase">?</span></span>
          </h2>
          <p className="mt-6 max-w-md text-xl leading-snug font-bold">
            Напишите, где должен стоять автомат. Письмо собирается на вашем устройстве.
          </p>
        </div>

        <form className="min-w-0 rounded-[2rem] bg-white p-5 text-ink sm:p-8" noValidate onSubmit={onSubmit}>
          <div className="grid gap-5">
            <div>
              <label htmlFor="lead-name" className="mb-2 block text-sm font-bold tracking-[0.08em] uppercase">
                Имя
              </label>
              <input
                id="lead-name"
                name="name"
                autoComplete="name"
                maxLength={80}
                className="field"
                value={fields.name}
                aria-invalid={errors.name ? true : undefined}
                aria-describedby={errors.name ? "lead-name-error" : undefined}
                onChange={(event) => update("name", event.target.value)}
              />
              <FieldError id="lead-name-error" message={errors.name} />
            </div>

            <div>
              <label htmlFor="lead-org" className="mb-2 block text-sm font-bold tracking-[0.08em] uppercase">
                Организация
              </label>
              <input
                id="lead-org"
                name="organization"
                autoComplete="organization"
                maxLength={120}
                className="field"
                value={fields.organization}
                aria-invalid={errors.organization ? true : undefined}
                aria-describedby={errors.organization ? "lead-org-error" : undefined}
                onChange={(event) => update("organization", event.target.value)}
              />
              <FieldError id="lead-org-error" message={errors.organization} />
            </div>

            <div>
              <label htmlFor="lead-venue" className="mb-2 block text-sm font-bold tracking-[0.08em] uppercase">
                Тип площадки
              </label>
              <select
                id="lead-venue"
                name="venue"
                className="field"
                value={fields.venue}
                aria-invalid={errors.venue ? true : undefined}
                aria-describedby={errors.venue ? "lead-venue-error" : undefined}
                onChange={(event) => update("venue", event.target.value)}
              >
                <option value="">Выберите тип</option>
                {venues.map((venue) => (
                  <option key={venue} value={venue}>
                    {venue}
                  </option>
                ))}
              </select>
              <FieldError id="lead-venue-error" message={errors.venue} />
            </div>

            <div>
              <label htmlFor="lead-city" className="mb-2 block text-sm font-bold tracking-[0.08em] uppercase">
                Город
              </label>
              <input
                id="lead-city"
                name="city"
                autoComplete="address-level2"
                maxLength={80}
                className="field"
                value={fields.city}
                aria-invalid={errors.city ? true : undefined}
                aria-describedby={errors.city ? "lead-city-error" : undefined}
                onChange={(event) => update("city", event.target.value)}
              />
              <FieldError id="lead-city-error" message={errors.city} />
            </div>

            <fieldset>
              <legend className="mb-3 text-sm font-bold tracking-[0.08em] uppercase">Телефон или email</legend>
              <div className="grid gap-3">
                <div>
                  <label htmlFor="lead-phone" className="sr-only">
                    Телефон
                  </label>
                  <input
                    id="lead-phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="Телефон"
                    maxLength={40}
                    className="field"
                    value={fields.phone}
                    aria-invalid={errors.phone || errors.contact ? true : undefined}
                    aria-describedby={errors.phone || errors.contact ? "lead-contact-error" : undefined}
                    onChange={(event) => update("phone", event.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="lead-email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="lead-email"
                    name="email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    placeholder="Email"
                    maxLength={120}
                    className="field"
                    value={fields.email}
                    aria-invalid={errors.email || errors.contact ? true : undefined}
                    aria-describedby={errors.email || errors.contact ? "lead-contact-error" : undefined}
                    onChange={(event) => update("email", event.target.value)}
                  />
                </div>
              </div>
              <FieldError id="lead-contact-error" message={errors.contact || errors.phone || errors.email} />
            </fieldset>

            <div>
              <label htmlFor="lead-comment" className="mb-2 block text-sm font-bold tracking-[0.08em] uppercase">
                Комментарий
              </label>
              <textarea
                id="lead-comment"
                name="comment"
                maxLength={500}
                rows={4}
                className="field field-area"
                value={fields.comment}
                onChange={(event) => update("comment", event.target.value)}
              />
            </div>

            <div>
              <label htmlFor="lead-consent" className="flex items-start gap-3 text-base leading-snug font-medium">
                <input
                  id="lead-consent"
                  name="consent"
                  type="checkbox"
                  className="mt-1 size-5 shrink-0 accent-poster"
                  checked={fields.consent}
                  aria-invalid={errors.consent ? true : undefined}
                  aria-describedby={errors.consent ? "lead-consent-error" : undefined}
                  onChange={(event) => update("consent", event.target.checked)}
                />
                <span>Соглашаюсь на обработку указанных данных, чтобы со мной связались по этой заявке.</span>
              </label>
              <FieldError id="lead-consent-error" message={errors.consent} />
            </div>
          </div>

          <button type="submit" className="pill pill-ink lozenge lozenge-caps lozenge-block mt-6 inline-flex">
            Обсудить установку
          </button>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            По кнопке откроется черновик письма в почтовой программе. Сайт не хранит и не отправляет заявку.
            {LEAD_EMAIL
              ? ""
              : " Адрес получателя на сайте не опубликован — укажите его в письме."}
          </p>

          <div role="status" aria-live="polite" className="mt-4">
            {draftReady ? (
              <div className="grid gap-3">
                <p className="text-base leading-relaxed font-bold">
                  Черновик открыт в почтовой программе. Проверьте текст и отправьте письмо сами. Это ещё не отправленная
                  заявка.
                </p>
                <button type="button" className="pill pill-ink lozenge lozenge-caps inline-flex" onClick={copyDraft}>
                  {copied ? "Текст скопирован" : "Скопировать текст заявки"}
                </button>
                {copyFailed ? (
                  <p className="text-sm font-bold text-danger">Не удалось скопировать. Текст остаётся в полях формы.</p>
                ) : null}
              </div>
            ) : null}
          </div>
        </form>
      </div>
    </section>
  );
}
