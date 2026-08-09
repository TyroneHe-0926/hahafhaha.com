import { useCallback, useEffect, useRef } from "react";

const MAX_TILT = 8;
const POINTER_QUERY = "(hover: hover) and (pointer: fine)";
const MOTION_QUERY = "(prefers-reduced-motion: reduce)";

/**
 * Tilts an element toward the pointer and tracks a sheen highlight.
 *
 * Values are written straight to CSS custom properties on the node, so moving
 * the mouse never triggers a React render. Updates are coalesced into one
 * animation frame.
 *
 * Inert on touch devices and when the user asks for reduced motion.
 */
function useTilt(maxTilt = MAX_TILT) {
  const ref = useRef(null);
  const frameRef = useRef(0);
  const enabledRef = useRef(false);

  const reset = useCallback(() => {
    const el = ref.current;
    if (!el) return;

    cancelAnimationFrame(frameRef.current);
    el.style.setProperty("--tilt-x", "0deg");
    el.style.setProperty("--tilt-y", "0deg");
    el.style.setProperty("--sheen-opacity", "0");
  }, []);

  useEffect(() => {
    const pointer = window.matchMedia(POINTER_QUERY);
    const motion = window.matchMedia(MOTION_QUERY);

    const sync = () => {
      enabledRef.current = pointer.matches && !motion.matches;
      if (!enabledRef.current) reset();
    };

    sync();
    pointer.addEventListener("change", sync);
    motion.addEventListener("change", sync);

    return () => {
      pointer.removeEventListener("change", sync);
      motion.removeEventListener("change", sync);
      cancelAnimationFrame(frameRef.current);
    };
  }, [reset]);

  const onPointerMove = useCallback(
    (event) => {
      if (!enabledRef.current) return;

      const { clientX, clientY } = event;

      cancelAnimationFrame(frameRef.current);
      frameRef.current = requestAnimationFrame(() => {
        const el = ref.current;
        if (!el) return;

        const rect = el.getBoundingClientRect();
        if (!rect.width || !rect.height) return;

        const px = (clientX - rect.left) / rect.width;
        const py = (clientY - rect.top) / rect.height;

        el.style.setProperty("--tilt-x", `${(0.5 - py) * maxTilt}deg`);
        el.style.setProperty("--tilt-y", `${(px - 0.5) * maxTilt}deg`);
        el.style.setProperty("--sheen-x", `${px * 100}%`);
        el.style.setProperty("--sheen-y", `${py * 100}%`);
        el.style.setProperty("--sheen-opacity", "1");
      });
    },
    [maxTilt]
  );

  return { ref, onPointerMove, onPointerLeave: reset };
}

export default useTilt;
