import { useEffect, useState } from "react";
import type { Content, Lang } from "../content";
import "./Nav.css";

interface Props {
  content: Content;
  lang: Lang;
  onToggleLang: () => void;
}

export function Nav({ content, lang, onToggleLang }: Props) {
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav${stuck ? " nav--stuck" : ""}`}>
      <div className="nav__inner shell">
        <a className="nav__mark" href="#top">
          {/* Psi — o símbolo da psicologia, desenhado na mesma linguagem do
              gráfico de perfil: traço fino, ponta arredondada, marcação nos polos. */}
          <svg className="nav__glyph" viewBox="0 0 32 32" aria-hidden="true">
            <path
              d="M7 12 V16.5 C7 20.9 11 24.4 16 24.4 C21 24.4 25 20.9 25 16.5 V12"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <path
              d="M16 7 V28.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <circle cx="7" cy="12" r="2.1" fill="currentColor" />
            <circle cx="25" cy="12" r="2.1" className="nav__glyph-mark" />
          </svg>
          <span className="nav__name">Barbara Paschoalini</span>
        </a>

        <nav className="nav__links" aria-label={lang === "pt" ? "Seções" : "Sections"}>
          {content.nav.items.map((item) => (
            <a className="nav__link" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="nav__lang"
          type="button"
          onClick={onToggleLang}
          aria-label={content.nav.toggleLabel}
        >
          <span className={lang === "pt" ? "is-on" : ""}>PT</span>
          <span className="nav__slash" aria-hidden="true">/</span>
          <span className={lang === "en" ? "is-on" : ""}>EN</span>
        </button>
      </div>
    </header>
  );
}
