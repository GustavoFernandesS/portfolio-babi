import type { Content } from "../content";
import { RichText } from "./RichText";
import { Section } from "./Section";
import "./Timeline.css";

export function Timeline({ content }: { content: Content }) {
  const { timeline } = content;

  return (
    <Section
      id="trajetoria"
      eyebrow={timeline.eyebrow}
      title={timeline.title}
      lede={timeline.lede}
    >
      <ol className="track">
        {timeline.entries.map((entry, i) => (
          <li
            className={`track__item reveal${entry.current ? " track__item--current" : ""}`}
            key={`${entry.role}-${i}`}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <span className="track__dot" aria-hidden="true" />
            <p className="track__period">
              <RichText text={entry.period} />
            </p>
            <h3 className="track__role">{entry.role}</h3>
            <p className="track__org">{entry.org}</p>
            <p className="track__body">
              <RichText text={entry.body} />
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
