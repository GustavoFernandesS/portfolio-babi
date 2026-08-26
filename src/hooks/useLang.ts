import { useCallback, useEffect, useState } from "react";
import { dictionaries, type Lang } from "../content";

const STORAGE_KEY = "bp:lang";

function initialLang(): Lang {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "pt" || saved === "en") return saved;
  return navigator.language.toLowerCase().startsWith("pt") ? "pt" : "en";
}

/** Language state, persisted, kept in sync with document metadata. */
export function useLang() {
  const [lang, setLang] = useState<Lang>(initialLang);
  const content = dictionaries[lang];

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = content.meta.htmlLang;
    document.title = content.meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", content.meta.description);
  }, [lang, content]);

  const toggle = useCallback(() => setLang((l) => (l === "pt" ? "en" : "pt")), []);

  return { lang, content, setLang, toggle };
}
