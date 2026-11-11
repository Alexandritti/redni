/** Получатель заявки. Пусто, пока у REDNI нет опубликованного адреса. */
export const LEAD_EMAIL = "";

export type LeadInput = {
  name: string;
  organization: string;
  venue: string;
  city: string;
  phone: string;
  email: string;
  comment: string;
};

export function sanitize(value: string, max: number) {
  let cleaned = "";
  for (const char of value) {
    const code = char.codePointAt(0) ?? 0;
    cleaned += code < 32 || code === 127 ? " " : char;
  }
  return cleaned.replace(/\s+/g, " ").trim().slice(0, max);
}

export function leadBody(input: LeadInput) {
  return [
    `Имя: ${input.name}`,
    `Организация: ${input.organization}`,
    `Тип площадки: ${input.venue}`,
    `Город: ${input.city}`,
    `Телефон: ${input.phone || "—"}`,
    `Email: ${input.email || "—"}`,
    `Комментарий: ${input.comment || "—"}`,
    "Согласие на обработку данных: да",
  ].join("\n");
}

export function leadMailto(input: LeadInput) {
  const subject = `Заявка на установку REDNI — ${input.organization}`.slice(0, 180);
  return `mailto:${LEAD_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(leadBody(input))}`;
}
