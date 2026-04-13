import { useEffect, useState } from 'react';

const WorkGallery = ({ images, onClose }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        if (activeIndex !== null) {
          setActiveIndex(null);
          return;
        }

        onClose();
      }

      if (activeIndex === null) {
        return;
      }

      if (event.key === 'ArrowRight') {
        setActiveIndex((prev) => (prev + 1) % images.length);
      }

      if (event.key === 'ArrowLeft') {
        setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeIndex, images.length, onClose]);

  return (
    <section className="min-h-screen bg-[#02050c] px-4 py-5 sm:px-6 sm:py-6">
      <button
        type="button"
        aria-label="Close gallery"
        onClick={onClose}
        className="fixed right-4 top-4 z-40 rounded-full border border-white/20 bg-black/60 px-3 py-1.5 text-xl text-white/90 transition hover:border-accentSoft hover:text-accentSoft"
      >
        ×
      </button>

      <div className="mx-auto max-w-[1400px] columns-1 gap-4 pt-8 sm:columns-2 lg:columns-3">
        {images.map((image, index) => (
          <button
            type="button"
            key={`${image}-${index}`}
            onClick={() => setActiveIndex(index)}
            className="group mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl border border-white/10 bg-black/30"
            aria-label={`Open image ${index + 1}`}
          >
            <img
              src={image}
              alt="Portfolio work"
              loading="lazy"
              className="h-auto w-full object-cover transition duration-300 ease-out group-hover:scale-[1.03]"
            />
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 px-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveIndex(null)}
        >
          <button
            type="button"
            aria-label="Previous image"
            onClick={(event) => {
              event.stopPropagation();
              setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
            }}
            className="absolute left-3 rounded-full border border-white/20 bg-black/60 px-3 py-2 text-white/90 transition hover:border-accentSoft hover:text-accentSoft sm:left-6"
          >
            ←
          </button>

          <img
            src={images[activeIndex]}
            alt="Selected portfolio work"
            className="max-h-[90vh] max-w-[95vw] rounded-2xl object-contain"
            onClick={(event) => event.stopPropagation()}
          />

          <button
            type="button"
            aria-label="Next image"
            onClick={(event) => {
              event.stopPropagation();
              setActiveIndex((prev) => (prev + 1) % images.length);
            }}
            className="absolute right-3 rounded-full border border-white/20 bg-black/60 px-3 py-2 text-white/90 transition hover:border-accentSoft hover:text-accentSoft sm:right-6"
          >
            →
          </button>
        </div>
      )}
    </section>
  );
};

export default WorkGallery;
