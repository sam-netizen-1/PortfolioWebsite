import { useEffect, useState } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function getInitialPreference() {
  return typeof window !== "undefined" && window.matchMedia(QUERY).matches;
}

/** Keeps motion optional without shipping an animation runtime for a few transitions. */
export function useReducedMotionPreference() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(getInitialPreference);

  useEffect(() => {
    const mediaQuery = window.matchMedia(QUERY);
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  return prefersReducedMotion;
}
