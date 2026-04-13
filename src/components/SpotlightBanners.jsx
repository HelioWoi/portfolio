import { useState } from 'react';
import { spotlightBanners } from '../data/content';
import Container from './Container';

const SpotlightBanners = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="hidden py-14 md:block md:py-18" aria-label="Work categories gallery">
      <Container>
        <div data-reveal className="reveal grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {spotlightBanners.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <button
                key={`${item.category}-${index}`}
                type="button"
                className="group relative h-48 overflow-hidden rounded-2xl border border-white/10 bg-black text-left sm:h-52"
                onClick={() => setActiveIndex((prev) => (prev === index ? null : index))}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex((prev) => (prev === index ? null : prev))}
                aria-label={`${item.category} showcase`}
              >
                <img
                  src={item.image}
                  alt={item.category}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-[1.03]"
                />

                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/55 to-black/5 transition-opacity duration-300 ${
                    isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}
                />

                <div
                  className={`absolute inset-x-0 bottom-0 z-10 p-4 transition-all duration-300 ${
                    isActive ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100'
                  }`}
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accentSoft">{item.category}</p>
                  <p className="mt-1 text-sm font-semibold leading-snug text-pearl sm:text-base">{item.title}</p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-200">{item.description}</p>
                </div>
              </button>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default SpotlightBanners;
