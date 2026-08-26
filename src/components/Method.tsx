import type { Content } from "../content";
import { Section } from "./Section";
import "./Method.css";

export function Method({ content }: { content: Content }) {
  const { method } = content;

  return (
    <Section id="metodo" eyebrow={method.eyebrow} title={method.title} lede={method.lede}>
      <ol className="method">
        {method.steps.map((step, i) => (
          <li className="method__step reveal" key={step.key} style={{ transitionDelay: `${i * 90}ms` }}>
            <span className="method__key">{step.key}</span>
            <h3 className="method__title">{step.title}</h3>
            <p className="method__body">{step.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
