import type { Content } from "../content";
import { site } from "../site";
import { ProfilePlot } from "./ProfilePlot";
import "./Hero.css";

export function Hero({ content }: { content: Content }) {
  const { hero } = content;

  return (
    <section className="hero" id="top">
      <div className="shell">
        <div className="hero__stamp">
          <p className="label">{hero.eyebrow}</p>
          <p className="label">{content.contact.location}</p>
        </div>

        <h1 className="hero__name">Barbara Paschoalini</h1>

        <div className="hero__grid">
          <div className="hero__lead">

            <dl className="record">
              {hero.fields.map((field) => (
                <div className="record__row" key={field.label}>
                  <dt className="label record__label">{field.label}</dt>
                  <dd className="record__value">{field.value}</dd>
                </div>
              ))}
            </dl>

            <div className="hero__actions">
              <a
                className="btn btn--solid"
                href={site.email ? `mailto:${site.email}` : "#contato"}
              >
                {hero.primaryCta}
              </a>
              <a className="btn btn--ghost" href={site.linkedinUrl} target="_blank" rel="noreferrer">
                {hero.secondaryCta}
              </a>
              {site.resumePdf ? (
                <a className="btn btn--plain" href={site.resumePdf} download>
                  {hero.resumeCta}
                </a>
              ) : null}
            </div>

            <p className="hero__status">
              <span className="hero__dot" aria-hidden="true" />
              {hero.status}
            </p>
          </div>

          <div className="hero__sheet">
            <ProfilePlot content={content} />
            <p className="hero__intro">{hero.body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
