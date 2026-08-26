import type { Content } from "../content";
import { site } from "../site";
import { ProfilePlot } from "./ProfilePlot";
import "./Hero.css";

export function Hero({ content }: { content: Content }) {
  const { hero } = content;

  return (
    <section className="hero" id="top">
      <div className="hero__inner shell">
        <div className="hero__lead">
          <p className="eyebrow hero__eyebrow">{hero.eyebrow}</p>

          <h1 className="hero__name">
            Barbara
            <br />
            Paschoalini
          </h1>

          <p className="hero__role">{hero.role}</p>

          <p className="hero__thesis">{hero.thesis}</p>

          <p className="lede hero__body">{hero.body}</p>

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
            <span className="hero__pulse" aria-hidden="true" />
            {hero.status}
          </p>
        </div>

        <div className="hero__sheet">
          <ProfilePlot content={content} />
        </div>
      </div>
    </section>
  );
}
