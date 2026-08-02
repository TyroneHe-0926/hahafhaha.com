import { useEffect, useRef } from "react";

function Lightbox({ photo, onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      } else if (event.key === "Tab") {
        // the close button is the only focusable element in the dialog,
        // so keep focus pinned to it rather than letting it escape to
        // the background page
        event.preventDefault();
        closeButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    // move focus into the dialog, remembering what to restore it to on close
    const previouslyFocused = document.activeElement;
    closeButtonRef.current?.focus();

    // stop the page scrolling behind the overlay
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      if (
        previouslyFocused instanceof HTMLElement &&
        document.contains(previouslyFocused)
      ) {
        previouslyFocused.focus();
      }
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
        ref={closeButtonRef}
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
