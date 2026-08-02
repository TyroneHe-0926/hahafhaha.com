import { useEffect } from "react";

function Lightbox({ photo, onClose }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    // stop the page scrolling behind the overlay
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <div
      className="gallery-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={photo.title}
    >
      <div className="gallery-lightbox-overlay" onClick={onClose} />

      <button
        type="button"
        className="gallery-lightbox-close"
        onClick={onClose}
        aria-label="Close full size photo"
      >
        <ion-icon name="close-outline"></ion-icon>
      </button>

      <img className="gallery-lightbox-img" src={photo.src} alt={photo.title} />
    </div>
  );
}

export default Lightbox;
