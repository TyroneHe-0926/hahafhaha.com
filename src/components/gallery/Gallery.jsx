import { useCallback, useState } from "react";
import "./Gallery.css";
import { photos } from "./photos";
import FeaturedPhoto from "./FeaturedPhoto";
import PhotoStory from "./PhotoStory";
import ThumbnailRail from "./ThumbnailRail";

function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = photos.length;

  const goTo = useCallback(
    (index) => setActiveIndex(((index % total) + total) % total),
    [total]
  );
  const goPrev = useCallback(() => goTo(activeIndex - 1), [goTo, activeIndex]);
  const goNext = useCallback(() => goTo(activeIndex + 1), [goTo, activeIndex]);

  // Arrow keys move between photos while focus is inside the gallery. Focus
  // lands here naturally via the arrow buttons, so this never steals page
  // scrolling from the rest of the site.
  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goPrev();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      goNext();
    }
  };

  if (total === 0) return null;

  const active = photos[activeIndex];

  return (
    <section
      className="gallery"
      aria-roledescription="carousel"
      aria-label="Photo gallery"
      onKeyDown={handleKeyDown}
    >
      <h3 className="h3 gallery-title">Photo Gallery</h3>

      <FeaturedPhoto
        photo={active}
        index={activeIndex}
        total={total}
        onPrev={goPrev}
        onNext={goNext}
        onOpen={() => {}}
      />

      <PhotoStory story={active.story} />

      {total > 1 && (
        <ThumbnailRail
          photos={photos}
          activeIndex={activeIndex}
          onSelect={goTo}
        />
      )}
    </section>
  );
}

export default Gallery;
