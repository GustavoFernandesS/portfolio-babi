/**
 * Content model for the site.
 *
 * Text fields accept an inline marker for content Barbara still has to supply:
 *   "Conduzi {{PREENCHER: nome do projeto}} para o cliente"
 * Anything inside {{ }} renders highlighted so it is impossible to ship by accident.
 */

export type Lang = "pt" | "en";

export interface ProfileRow {
  /** Left-hand pole of the bipolar scale. */
  left: string;
  /** Right-hand pole. */
  right: string;
  /** Marker position, 1 (fully left) to 7 (fully right). */
  value: number;
}

export interface Step {
  key: string;
  title: string;
  body: string;
}

export interface TimelineEntry {
  role: string;
  org: string;
  period: string;
  body: string;
  current?: boolean;
}

export interface CaseStudy {
  label: string;
  title: string;
  context: string;
  action: string;
  result: string;
}

export interface RepertoireItem {
  /** Quem ensinou: pessoa, empresa ou evento. */
  org: string;
  /** Quando ou em que contexto. */
  meta: string;
  /** O que ela tirou dali. */
  detail: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface LanguageSkill {
  name: string;
  level: string;
  /** 1 to 5. */
  value: number;
}

export interface Content {
  meta: { title: string; description: string; htmlLang: string };
  nav: { items: { href: string; label: string }[]; toggleLabel: string };
  hero: {
    eyebrow: string;
    name: string;
    /** Campos da ficha, rotulados. Ordem importa: cargo primeiro. */
    fields: { label: string; value: string }[];
    thesis: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    resumeCta: string;
    status: string;
  };
  profile: { title: string; note: string; rows: ProfileRow[]; caption: string };
  method: { eyebrow: string; title: string; lede: string; steps: Step[] };
  timeline: { eyebrow: string; title: string; lede: string; entries: TimelineEntry[] };
  cases: {
    eyebrow: string;
    title: string;
    lede: string;
    fields: { context: string; action: string; result: string };
    items: CaseStudy[];
  };
  repertoire: {
    eyebrow: string;
    title: string;
    lede: string;
    items: RepertoireItem[];
  };
  skills: {
    eyebrow: string;
    title: string;
    groups: SkillGroup[];
    languagesTitle: string;
    languages: LanguageSkill[];
  };
  contact: {
    eyebrow: string;
    title: string;
    body: string;
    emailLabel: string;
    linkedinLabel: string;
    locationLabel: string;
    location: string;
    /** Shown in place of a contact detail that is not filled in yet. */
    pending: string;
  };
  footer: { note: string; credit: string };
}
