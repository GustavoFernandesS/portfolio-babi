import { useEffect } from "react";

/**
 * Reveals every `.reveal` element once it scrolls into view.
 * Re-runs whenever `key` changes so language swaps re-arm the observer.
 */
export function useReveal(key: unknown) {
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

    if (!("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-in"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );

    targets.forEach((el) => {
      el.classList.remove("is-in");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [key]);
}
