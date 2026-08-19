"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which section is currently in the reading band beneath the navbar.
 * Returns the id of the active section, or null before any section is reached.
 */
export function useScrollSpy(ids: string[], topOffset = 96) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (ids.length === 0) return;

    const visible = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible.add(entry.target.id);
          } else {
            visible.delete(entry.target.id);
          }
        }

        // Document order wins so the topmost section in the band is the active one.
        const next = ids.find((id) => visible.has(id)) ?? null;
        setActiveId((current) => next ?? current);
      },
      { rootMargin: `-${topOffset}px 0px -55% 0px`, threshold: 0 },
    );

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [ids, topOffset]);

  return activeId;
}
