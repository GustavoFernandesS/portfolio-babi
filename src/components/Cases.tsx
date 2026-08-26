import type { Content } from "../content";
import { RichText } from "./RichText";
import { Section } from "./Section";
import "./Cases.css";

export function Cases({ content }: { content: Content }) {
  const { cases } = content;

  return (
    <Section id="entregas" eyebrow={cases.eyebrow} title={cases.title} lede={cases.lede}>
      <div className="cases">
        {cases.items.map((item, i) => (
          <article
            className="case reveal"
            key={`${item.label}-${i}`}
            style={{ transitionDelay: `${i * 90}ms` }}
          >
            <p className="case__label">{item.label}</p>
            <h3 className="case__title">
              <RichText text={item.title} />
            </h3>

            <dl className="case__fields">
              <div className="case__field">
                <dt>{cases.fields.context}</dt>
                <dd>
                  <RichText text={item.context} />
                </dd>
              </div>
              <div className="case__field">
                <dt>{cases.fields.action}</dt>
                <dd>
                  <RichText text={item.action} />
                </dd>
              </div>
              <div className="case__field case__field--result">
                <dt>{cases.fields.result}</dt>
                <dd>
                  <RichText text={item.result} />
                </dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </Section>
  );
}
