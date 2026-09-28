import type { Variants } from "framer-motion";

/** Signature easing used across every entrance and transform. */
export const EASE = [0.22, 1, 0.36, 1] as const;

/** Shared viewport config so reveals fire at the same scroll depth. */
export const VIEWPORT = { once: true, margin: "-60px" } as const;

/** Single element reveal. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

/** Slightly deeper lift for feature blocks. */
export const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: EASE },
  },
};

/** Rows and cards entering from the left edge of a ruled list. */
export const slideIn: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

/** Hairline that draws itself from the left. */
export const drawIn: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.9, ease: EASE },
  },
};

/** Parent that staggers its children's `variants` entrance. */
export function stagger(
  staggerChildren = 0.05,
  delayChildren = 0
): Variants {
  return {
    hidden: {},
    visible: {
      transition: { staggerChildren, delayChildren },
    },
  };
}
