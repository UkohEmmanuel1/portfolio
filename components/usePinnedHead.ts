"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Drives the data-pin state of a .section-head--sticky.
 *
 * The ref goes on a 1px sentinel pinned to the top of the
 * .section-stack, i.e. exactly where the sticky head sits in flow, so
 * the observer's pin line and the CSS `top: var(--nav-h)` are the same
 * line and the two states can never drift.
 *
 * rootMargin pulls the observer's top edge down by the navbar height.
 * `pinned` therefore means: the sentinel has passed under the navbar.
 * The extra top check keeps the sentinel's exit through the BOTTOM of
 * the viewport (section not reached yet) from counting as pinned.
 */
export function usePinnedHead<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    const sentinel = ref.current;
    if (!sentinel) return;

    const readNavH = () => {
      const raw = getComputedStyle(document.documentElement).getPropertyValue(
        "--nav-h"
      );
      const px = parseFloat(raw);
      return Number.isFinite(px) ? px : 80;
    };

    let navH = readNavH();

    const makeObserver = () =>
      new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          setPinned(!entry.isIntersecting && entry.boundingClientRect.top < navH);
        },
        { rootMargin: `-${navH}px 0px 0px 0px` }
      );

    let observer = makeObserver();
    observer.observe(sentinel);

    // --nav-h can be re-pointed by a stylesheet; rebind if it moved.
    const handleResize = () => {
      const next = readNavH();
      if (next === navH) return;
      navH = next;
      observer.disconnect();
      observer = makeObserver();
      observer.observe(sentinel);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { ref, pinned };
}
