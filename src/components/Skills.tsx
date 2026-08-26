import type { Content } from "../content";
import { RichText } from "./RichText";
import { Section } from "./Section";
import "./Skills.css";

const LEVELS = 5;

export function Skills({ content }: { content: Content }) {
  const { skills } = content;

  return (
    <Section id="competencias" eyebrow={skills.eyebrow} title={skills.title}>
      <div className="skills">
        {skills.groups.map((group, i) => (
          <div
            className="skills__group reveal"
            key={group.title}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <h3 className="skills__group-title">{group.title}</h3>
            <ul className="skills__list">
              {group.items.map((item) => (
                <li className="skills__tag" key={item}>
                  <RichText text={item} />
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="skills__group skills__group--lang reveal" style={{ transitionDelay: "240ms" }}>
          <h3 className="skills__group-title">{skills.languagesTitle}</h3>
          <ul className="langs">
            {skills.languages.map((language) => (
              <li className="lang" key={language.name}>
                <span className="lang__name">{language.name}</span>
                <span className="lang__scale" aria-hidden="true">
                  {Array.from({ length: LEVELS }, (_, n) => (
                    <span className={`lang__dot${n < language.value ? " is-on" : ""}`} key={n} />
                  ))}
                </span>
                <span className="lang__level">{language.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
