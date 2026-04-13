import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { stickyShowcaseProjects } from '../data/content';
import Container from './Container';

const unmuteOnHover = (event) => {
  const video = event.currentTarget;
  video.muted = false;
  const playPromise = video.play();

  if (playPromise?.catch) {
    playPromise.catch(() => {
      video.muted = true;
    });
  }
};

const muteOnLeave = (event) => {
  event.currentTarget.muted = true;
};

const toggleMuteOnInteract = (event) => {
  const video = event.currentTarget;
  video.muted = !video.muted;
  const playPromise = video.play();

  if (playPromise?.catch) {
    playPromise.catch(() => {
      video.muted = true;
    });
  }
};

const DesktopProjectSlide = ({ project, direction, onVideoEnded, onOpenGallery }) => {
  const desktopImage = project.desktopImage || project.image;
  const desktopVideo = project.desktopVideo || project.video;

  return (
    <motion.article
      className="absolute inset-0"
      initial={{ opacity: 0, x: direction > 0 ? 80 : -80, scale: 0.98, filter: 'blur(6px)' }}
      animate={{ opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, x: direction > 0 ? -80 : 80, scale: 0.98, filter: 'blur(6px)' }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <div className="relative h-full overflow-hidden bg-black/40">
        {desktopVideo ? (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={desktopVideo}
            autoPlay
            loop={false}
            muted
            playsInline
            onMouseEnter={unmuteOnHover}
            onMouseLeave={muteOnLeave}
            onClick={toggleMuteOnInteract}
            onEnded={onVideoEnded}
          />
        ) : (
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${desktopImage})`,
              backgroundSize: 'cover',
              backgroundPosition: project.imagePositionDesktop || '50% 50%',
            }}
          />
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/78 via-black/46 to-black/24" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[56%] bg-gradient-to-r from-black/70 via-black/45 to-transparent" />

        {desktopVideo && (
          <div className="pointer-events-none absolute right-8 top-8 z-10 rounded-full border border-white/30 bg-black/45 px-3 py-1.5 text-xs font-medium text-white/90">
            ▶ Click for sound
          </div>
        )}

        <div className="relative z-10 flex h-full max-w-xl flex-col justify-end p-10 lg:p-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accentSoft">{project.category}</p>
          <h3 className="mt-4 text-4xl font-semibold leading-tight text-pearl lg:text-5xl">{project.title}</h3>
          <p className="mt-4 text-base leading-relaxed text-slate-100">{project.description}</p>

          {project.gallerySlug ? (
            <button
              type="button"
              onClick={() => onOpenGallery(project.gallerySlug)}
              className="mt-8 w-fit rounded-full border border-white/35 bg-black/25 px-5 py-2.5 text-sm font-semibold text-pearl transition hover:border-accentSoft hover:text-accentSoft"
            >
              {project.cta} →
            </button>
          ) : project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="mt-8 w-fit rounded-full border border-white/35 bg-black/25 px-5 py-2.5 text-sm font-semibold text-pearl transition hover:border-accentSoft hover:text-accentSoft"
            >
              {project.cta} →
            </a>
          ) : (
            <button
              type="button"
              className="mt-8 w-fit rounded-full border border-white/35 bg-black/25 px-5 py-2.5 text-sm font-semibold text-pearl transition hover:border-accentSoft hover:text-accentSoft"
            >
              {project.cta} →
            </button>
          )}
        </div>
      </div>
    </motion.article>
  );
};

const StickyProjectShowcase = ({ onOpenGallery }) => {
  const total = stickyShowcaseProjects.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const activeProject = stickyShowcaseProjects[activeIndex];

  useEffect(() => {
    if (activeProject?.desktopVideo || activeProject?.video) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % total);
    }, 7000);

    return () => window.clearInterval(intervalId);
  }, [activeProject, total]);

  const goTo = (index) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const goNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const goPrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  return (
    <section id="projects" className="relative bg-[#03060f] py-8 md:py-0">
      <div className="relative hidden md:block">
        <div className="h-screen overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#03060f] via-[#040a17] to-[#03060f]" />
          <div className="absolute left-1/4 top-20 h-52 w-52 rounded-full bg-accent/10 blur-[110px]" />
          <div className="absolute bottom-20 right-1/4 h-60 w-60 rounded-full bg-cyan-400/10 blur-[120px]" />

          <div className="relative h-full">
            <div className="relative h-full w-full">
              <AnimatePresence mode="wait">
                <DesktopProjectSlide
                  key={stickyShowcaseProjects[activeIndex].title}
                  project={stickyShowcaseProjects[activeIndex]}
                  direction={direction}
                  onVideoEnded={goNext}
                  onOpenGallery={onOpenGallery}
                />
              </AnimatePresence>

              <div className="pointer-events-auto absolute bottom-8 right-8 z-20 flex items-center gap-2">
                <button
                  type="button"
                  onClick={goPrev}
                  className="rounded-full border border-white/25 px-3 py-2 text-xs font-semibold text-slate-100 transition hover:border-accentSoft hover:text-accentSoft"
                >
                  Prev
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  className="rounded-full border border-white/25 px-3 py-2 text-xs font-semibold text-slate-100 transition hover:border-accentSoft hover:text-accentSoft"
                >
                  Next
                </button>
              </div>
            </div>

            <div className="absolute right-8 top-1/2 hidden -translate-y-1/2 lg:flex lg:flex-col lg:gap-3">
              {stickyShowcaseProjects.map((project, index) => (
                <button
                  type="button"
                  key={project.title}
                  onClick={() => goTo(index)}
                  aria-label={`Go to ${project.title}`}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    index === activeIndex ? 'bg-accentSoft shadow-[0_0_14px_rgba(125,207,255,0.9)]' : 'bg-white/25'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Container className="md:hidden">
        <div className="mb-6 max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accentSoft">Featured Projects</p>
          <h2 className="mt-3 text-3xl font-semibold text-pearl">Creative case studies with strategic impact</h2>
        </div>

        <div className="grid gap-5">
          {stickyShowcaseProjects.map((project) => (
            <article key={project.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <div className="relative h-56 overflow-hidden rounded-xl border border-white/10">
                {project.video ? (
                  <>
                    <video
                      className="absolute inset-0 h-full w-full object-cover"
                      src={project.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      onMouseEnter={unmuteOnHover}
                      onMouseLeave={muteOnLeave}
                      onClick={toggleMuteOnInteract}
                    />
                    <div className="pointer-events-none absolute bottom-3 right-3 z-10 rounded-full border border-white/30 bg-black/45 px-2.5 py-1 text-[11px] font-medium text-white/90">
                      ▶ Tap for sound
                    </div>
                  </>
                ) : (
                  <div
                    className="absolute inset-0 bg-cover"
                    style={{
                      backgroundImage: `url(${project.image})`,
                      backgroundPosition: project.imagePositionMobile || '50% 50%',
                    }}
                  />
                )}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-accentSoft">{project.category}</p>
              <h3 className="mt-2 text-xl font-semibold text-pearl">{project.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{project.description}</p>
              {project.gallerySlug ? (
                <button type="button" onClick={() => onOpenGallery(project.gallerySlug)} className="mt-4 text-sm font-semibold text-accentSoft">
                  {project.cta} →
                </button>
              ) : (
                <button type="button" className="mt-4 text-sm font-semibold text-accentSoft">
                  {project.cta} →
                </button>
              )}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default StickyProjectShowcase;
