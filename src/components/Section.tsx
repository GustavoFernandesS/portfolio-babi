import type { ReactNode } from "react";
import "./Section.css";

interface Props {
  id: string;
  eyebrow: string;
  title: string;
  lede?: string;
  children: ReactNode;
}

/**
 * Cada seção abre com uma aba de arquivo carregando o rótulo — a mesma
 * lógica de um dossiê separado por divisórias.
 */
export function Section({ id, eyebrow, title, lede, children }: Props) {
  return (
    <section className="section" id={id}>
      <div className="shell">
        <div className="section__tab">
          <span className="label">{eyebrow}</span>
        </div>

        <header className="section__head reveal">
          <h2 className="section__title">{title}</h2>
          {lede ? <p className="lede section__lede">{lede}</p> : null}
        </header>

        {children}
      </div>
    </section>
  );
}
