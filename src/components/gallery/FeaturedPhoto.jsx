function FeaturedPhoto({ photo, index, total, onPrev, onNext, onOpen }) {
  return (
    <div className="gallery-featured">
      <button
        type="button"
        className="gallery-featured-btn"
        onClick={onOpen}
        aria-label={`View ${photo.title} full size`}
      >
        <img
          className="gallery-featured-img"
          src={photo.src}
          alt={photo.title}
          decoding="async"
        />
      </button>

      {total > 1 && (
        <>
          <button
            type="button"
            className="gallery-arrow gallery-arrow-prev"
            onClick={onPrev}
            aria-label="Previous photo"
          >
            <ion-icon name="chevron-back-outline"></ion-icon>
          </button>
          <button
            type="button"
            className="gallery-arrow gallery-arrow-next"
            onClick={onNext}
            aria-label="Next photo"
          >
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </button>
          <p className="gallery-counter">{index + 1} / {total}</p>
        </>
      )}

      <div className="gallery-caption">
        <h4 className="gallery-caption-title">{photo.title}</h4>
        <time className="gallery-caption-date" dateTime={photo.iso}>{photo.date}</time>
      </div>
    </div>
  );
}

export default FeaturedPhoto;
