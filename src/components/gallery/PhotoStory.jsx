// Every story occupies the same grid cell, so the block is always as tall as
// the longest one and switching photos never shifts the rail below it.
function PhotoStory({ photos, activeIndex }) {
  return (
    <div className="gallery-story">
      {photos.map((photo, index) => (
        <p
          key={photo.src}
          className={index === activeIndex ? "" : "is-hidden"}
          aria-hidden={index !== activeIndex}
        >
          {photo.story}
        </p>
      ))}
    </div>
  );
}

export default PhotoStory;
