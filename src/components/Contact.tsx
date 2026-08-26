import type { Content } from "../content";
import { site } from "../site";
import "./Contact.css";

export function Contact({ content }: { content: Content }) {
  const { contact, footer, hero } = content;
  const year = new Date().getFullYear();

  return (
    <section className="contact" id="contato">
      <div className="shell contact__inner">
        <div className="contact__lead reveal">
          <p className="eyebrow contact__eyebrow">{contact.eyebrow}</p>
          <h2 className="contact__title">{contact.title}</h2>
          <p className="contact__body">{contact.body}</p>
          <a
            className="contact__cta"
            href={site.email ? `mailto:${site.email}` : site.linkedinUrl}
            {...(site.email ? {} : { target: "_blank", rel: "noreferrer" })}
          >
            {site.email ? hero.primaryCta : hero.secondaryCta}
          </a>
        </div>

        <dl className="contact__rows reveal">
          <div className="contact__row">
            <dt>{contact.emailLabel}</dt>
            <dd>
              {site.email ? (
                <a href={`mailto:${site.email}`}>{site.email}</a>
              ) : (
                <span className="todo">{contact.pending}</span>
              )}
            </dd>
          </div>
          <div className="contact__row">
            <dt>{contact.linkedinLabel}</dt>
            <dd>
              <a href={site.linkedinUrl} target="_blank" rel="noreferrer">
                {site.linkedinHandle}
              </a>
            </dd>
          </div>
          <div className="contact__row">
            <dt>{contact.locationLabel}</dt>
            <dd>{contact.location}</dd>
          </div>
        </dl>
      </div>

      <div className="shell">
        <div className="contact__foot">
          <p>{footer.note}</p>
          <p>
            {footer.credit} © {year}
          </p>
        </div>
      </div>
    </section>
  );
}
