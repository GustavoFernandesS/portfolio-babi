import type { ReactNode } from "react";
import "./Section.css";

interface Props {
  id: string;
  eyebrow: string;
  title: string;
  lede?: string;
  children: ReactNode;
}

export function Section({ id, eyebrow, title, lede, children }: Props) {
  return (
    <section className="section" id={id}>
      <div className="shell">
        <header className="section__head reveal">
          <div className="section__headline">
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="section__title">{title}</h2>
          </div>
          {lede ? <p className="lede section__lede">{lede}</p> : null}
        </header>
        {children}
      </div>
    </section>
  );
}
