import { Cases } from "./components/Cases";
import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import { Method } from "./components/Method";
import { Nav } from "./components/Nav";
import { Repertoire } from "./components/Repertoire";
import { Skills } from "./components/Skills";
import { Timeline } from "./components/Timeline";
import { useLang } from "./hooks/useLang";
import { useReveal } from "./hooks/useReveal";

export default function App() {
  const { lang, content, toggle } = useLang();
  useReveal(lang);

  return (
    <>
      <a className="skip" href="#main">
        {lang === "pt" ? "Ir para o conteúdo" : "Skip to content"}
      </a>

      <Nav content={content} lang={lang} onToggleLang={toggle} />

      <main id="main">
        <Hero content={content} />
        <Method content={content} />
        <Timeline content={content} />
        <Cases content={content} />
        <Repertoire content={content} />
        <Skills content={content} />
      </main>

      <Contact content={content} />
    </>
  );
}
