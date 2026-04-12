import Container from './Container';

const Hero = () => {
  const heroBannerDesktopUrl =
    'https://qlpbnqdeyenbdkyqftia.supabase.co/storage/v1/object/public/media/hero%20banner.jpg';
  const heroBannerMobileUrl =
    'https://qlpbnqdeyenbdkyqftia.supabase.co/storage/v1/object/public/media/hero%20banner%20mobile%20v2.jpg';

  return (
    <section id="home" className="relative overflow-hidden bg-black pb-10 pt-0 sm:py-14 md:bg-transparent md:py-16">
      <div
        className="absolute inset-0 bg-contain bg-top bg-no-repeat md:hidden"
        style={{ backgroundImage: `url(${heroBannerMobileUrl})`, backgroundPosition: 'center top' }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 hidden bg-cover bg-center md:block"
        style={{ backgroundImage: `url(${heroBannerDesktopUrl})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/28 via-black/38 to-black/62" aria-hidden="true" />

      <Container className="relative z-10">
        <div className="flex min-h-[78vh] items-end justify-end pb-10 md:min-h-[76vh] md:items-center md:pb-0">
          <div
            data-reveal
            className="reveal w-full max-w-lg rounded-sm border border-white/15 bg-black/75 p-5 backdrop-blur-sm sm:p-6 md:bg-[#060f2a]/86 md:p-7"
          >
            <p className="mb-5 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.14em] text-accentSoft sm:text-xs sm:tracking-[0.18em]">
              Marketing, Design & AI Product Development
            </p>
            <h1 className="text-3xl font-semibold leading-[1.08] text-pearl sm:text-4xl md:text-5xl">
              Creative ideas, crafted into digital experiences that perform.
            </h1>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-slate-100 sm:text-base">
              I combine brand clarity, visual craft, and product thinking to transform vision into elegant work people
              remember.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-midnight transition hover:bg-accentSoft"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/35 px-5 py-2.5 text-sm font-semibold text-pearl transition hover:border-accentSoft"
              >
                Start a Project
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
