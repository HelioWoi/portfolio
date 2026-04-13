import { useState } from 'react';
import Container from './Container';

const photoAiVideos = [
  {
    label: 'Video 01',
    title: 'Food Campaign Motion',
    src: 'https://qlpbnqdeyenbdkyqftia.supabase.co/storage/v1/object/public/videos/1.mp4',
  },
  {
    label: 'Video 02',
    title: 'Product Story Motion',
    src: 'https://qlpbnqdeyenbdkyqftia.supabase.co/storage/v1/object/public/videos/2.mp4',
  },
];

const PhotoAiBanner = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const renderVideoCard = (video, index) => {
    const isActive = activeIndex === index;

    return (
      <button
        key={video.src}
        type="button"
        className="group relative mx-auto w-full max-w-[280px] overflow-hidden rounded-3xl border border-white/20 bg-[#081331]/95 p-3 text-left shadow-[0_28px_65px_-40px_rgba(13,35,97,0.95)]"
        onClick={() => setActiveIndex((prev) => (prev === index ? null : index))}
        onMouseEnter={() => setActiveIndex(index)}
        onMouseLeave={() => setActiveIndex((prev) => (prev === index ? null : prev))}
        aria-label={`${video.label} showcase`}
      >
        <div className="mb-3 flex items-center justify-between px-1">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accentSoft">Photo + AI</p>
          <span className="rounded-full border border-white/20 bg-white/5 px-2 py-0.5 text-[9px] uppercase tracking-[0.14em] text-slate-200">
            Campaign
          </span>
        </div>

        <div className="relative mx-auto aspect-[9/16] w-full overflow-hidden rounded-[1.1rem] bg-black">
          <video
            src={video.src}
            className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-[1.03]"
            autoPlay
            muted
            loop
            playsInline
          />
          <div
            className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/10 transition-opacity duration-300 ${
              isActive ? 'opacity-100' : 'opacity-30 group-hover:opacity-100'
            }`}
          />
          <div
            className={`absolute inset-x-0 bottom-0 z-10 p-4 transition-all duration-300 ${
              isActive
                ? 'translate-y-0 opacity-100'
                : 'translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100'
            }`}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accentSoft">{video.label}</p>
            <p className="mt-1 text-sm font-semibold leading-snug text-pearl sm:text-base">{video.title}</p>
          </div>
        </div>
      </button>
    );
  };

  return (
    <section className="py-12 sm:py-14" aria-label="Photo and AI animation service">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-[#2b4ea1]/35 bg-[radial-gradient(circle_at_top,_rgba(52,95,193,0.24),_rgba(8,18,54,0.92)_45%,_rgba(5,11,33,0.98))] px-5 py-8 sm:px-8 sm:py-10">
          <div className="pointer-events-none absolute -left-16 -top-16 h-44 w-44 rounded-full bg-[#4f79e8]/20 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-20 -right-16 h-52 w-52 rounded-full bg-[#1f3b8a]/25 blur-3xl" aria-hidden="true" />

          <div data-reveal className="reveal relative z-10 mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accentSoft">Creative Service</p>
            <h2 className="mt-3 text-2xl font-semibold leading-tight text-pearl sm:text-3xl md:text-4xl">
              Photography + AI Animation
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-base">
              Built for modern campaigns: polished photography and AI-driven motion crafted together for consistent,
              high-impact content.
            </p>
          </div>

          <div data-reveal className="reveal relative z-10 mt-8 grid grid-cols-1 items-center gap-5 md:grid-cols-2">
            {renderVideoCard(photoAiVideos[0], 0)}

            {renderVideoCard(photoAiVideos[1], 1)}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PhotoAiBanner;
