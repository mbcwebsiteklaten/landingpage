"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { photos } from "../../lib/photos";

export default function PhotoGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const activePhoto = activeIndex === null ? null : photos[activeIndex];

  useEffect(() => {
    if (activeIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowRight") setActiveIndex((current) => current === null ? null : (current + 1) % photos.length);
      if (event.key === "ArrowLeft") setActiveIndex((current) => current === null ? null : (current - 1 + photos.length) % photos.length);
      if (event.key === "Tab") {
        const controls = Array.from(document.querySelectorAll<HTMLButtonElement>(".photo-lightbox button"));
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex]);

  function closeLightbox() {
    setActiveIndex(null);
    requestAnimationFrame(() => triggerRef.current?.focus());
  }

  return (
    <>
      <div className="activity-gallery">
        {photos.map((photo, index) => (
          <figure className="activity-photo" key={photo.src}>
            <button
              className="activity-photo-frame"
              type="button"
              onClick={(event) => {
                triggerRef.current = event.currentTarget;
                setActiveIndex(index);
              }}
              aria-label={`Perbesar foto: ${photo.title}`}
            >
              <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw" />
              <span className="photo-zoom-hint" aria-hidden="true">Lihat foto ↗</span>
            </button>
            <figcaption><strong>{photo.title}</strong><span>{photo.category}</span></figcaption>
          </figure>
        ))}
      </div>

      {activePhoto && activeIndex !== null && (
        <div className="photo-lightbox" role="presentation" onMouseDown={(event) => {
          if (event.target === event.currentTarget) closeLightbox();
        }}>
          <div className="photo-lightbox-panel" role="dialog" aria-modal="true" aria-label={`Foto ${activePhoto.title}`}>
            <div className="photo-lightbox-toolbar">
              <span>{activeIndex + 1} / {photos.length}</span>
              <button ref={closeButtonRef} type="button" onClick={closeLightbox} aria-label="Tutup foto">✕</button>
            </div>
            <div className="photo-lightbox-content">
              <button type="button" className="photo-lightbox-nav" onClick={() => setActiveIndex((activeIndex - 1 + photos.length) % photos.length)} aria-label="Foto sebelumnya">←</button>
              <div className="photo-lightbox-image"><Image src={activePhoto.src} alt={activePhoto.alt} fill sizes="(max-width: 700px) 90vw, 80vw" /></div>
              <button type="button" className="photo-lightbox-nav" onClick={() => setActiveIndex((activeIndex + 1) % photos.length)} aria-label="Foto berikutnya">→</button>
            </div>
            <div className="photo-lightbox-caption"><strong>{activePhoto.title}</strong><span>{activePhoto.category}</span></div>
          </div>
        </div>
      )}
    </>
  );
}