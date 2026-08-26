import type { Content } from "../content";
import { Section } from "./Section";
import "./Repertoire.css";

export function Repertoire({ content }: { content: Content }) {
  const { repertoire } = content;

  return (
    <Section
      id="repertorio"
      eyebrow={repertoire.eyebrow}
      title={repertoire.title}
      lede={repertoire.lede}
    >
      <ul className="rep">
        {repertoire.items.map((item, i) => (
          <li className="rep__item reveal" key={item.org} style={{ transitionDelay: `${i * 60}ms` }}>
            <div className="rep__who">
              <h3 className="rep__org">{item.org}</h3>
              <p className="rep__meta">{item.meta}</p>
            </div>
            <p className="rep__detail">{item.detail}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
