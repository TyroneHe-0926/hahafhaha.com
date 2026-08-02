import { useEffect, useLayoutEffect, useRef, useState } from "react";

const EDGE_TOLERANCE = 8;

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function ThumbnailRail({ photos, activeIndex, onSelect }) {
  const railRef = useRef(null);
  const itemRefs = useRef([]);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(true);

  const updateEdges = () => {
    const rail = railRef.current;
    if (!rail) return;
    setAtStart(rail.scrollLeft <= EDGE_TOLERANCE);
    setAtEnd(rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - EDGE_TOLERANCE);
  };

  // The rail follows the arrows: the active thumbnail is always centred, so
  // nobody ever has to scroll this themselves.
  useEffect(() => {
    const rail = railRef.current;
    const item = itemRefs.current[activeIndex];
    if (!rail || !item) return;
    rail.scrollTo({
      left: item.offsetLeft - rail.clientWidth / 2 + item.offsetWidth / 2,
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });
  }, [activeIndex]);

  // useLayoutEffect (not useEffect) so the edge flags are correct before the
  // first paint — otherwise the end fade briefly flashes at full opacity on
  // load and then transitions off.
  useLayoutEffect(() => {
    updateEdges();
    window.addEventListener("resize", updateEdges);
    return () => window.removeEventListener("resize", updateEdges);
  }, [photos.length]);

  // A vertical wheel over the rail moves it sideways — but only while the rail
  // can still move. At either end we leave the event alone so the page scrolls
  // normally instead of the gallery swallowing the wheel.
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    const handleWheel = (event) => {
      // let trackpad horizontal swipes through untouched
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;

      // deltaY isn't always pixels: Firefox reports whole "lines"
      // (deltaMode === 1, deltaY ~= ±3) while Chrome/Safari report pixels
      // (deltaMode === 0, deltaY ~= ±100). Applying line counts as if they
      // were pixels barely moves the rail, so scrollLeft keeps "changing" by
      // a few px on every notch, preventDefault() keeps firing, and the page
      // never gets the wheel back — reproducing the exact bug this rail
      // exists to fix. Normalize to pixels before applying.
      const LINE_HEIGHT = 16;
      const delta =
        event.deltaMode === 1 ? event.deltaY * LINE_HEIGHT
        : event.deltaMode === 2 ? event.deltaY * rail.clientWidth
        : event.deltaY;
      const before = rail.scrollLeft;
      rail.scrollLeft += delta;
      if (rail.scrollLeft !== before) event.preventDefault();
    };

    rail.addEventListener("wheel", handleWheel, { passive: false });
    return () => rail.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="gallery-rail-wrap">
      <span
        className={`gallery-rail-fade start${atStart ? " hidden" : ""}`}
        aria-hidden="true"
      />
      <span
        className={`gallery-rail-fade end${atEnd ? " hidden" : ""}`}
        aria-hidden="true"
      />

      <ul className="gallery-rail" ref={railRef} onScroll={updateEdges}>
        {photos.map((photo, index) => (
          <li
            key={photo.src}
            className="gallery-thumb-item"
            ref={(el) => { itemRefs.current[index] = el; }}
          >
            <button
              type="button"
              className={`gallery-thumb${index === activeIndex ? " active" : ""}`}
              onClick={() => onSelect(index)}
              aria-label={photo.title}
              aria-current={index === activeIndex}
            >
              <img src={photo.src} alt="" loading="lazy" decoding="async" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ThumbnailRail;
