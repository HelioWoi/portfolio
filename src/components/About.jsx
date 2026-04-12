import Container from './Container';
import SectionHeading from './SectionHeading';

const About = () => {
  const aboutProfileImage = 'https://qlpbnqdeyenbdkyqftia.supabase.co/storage/v1/object/public/media/helio%203.png';

  return (
    <section id="about" className="py-16 sm:py-20">
      <Container>
        <div data-reveal className="reveal">
          <SectionHeading
            eyebrow="About"
            title="A multidisciplinary perspective grounded in business outcomes"
            description="I blend strategic marketing, premium design craft, and product-level thinking to help brands create clarity, consistency, and digital momentum."
          />
          <div className="mt-6 grid gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 md:grid-cols-[1.05fr_0.95fr] md:items-stretch">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/30 md:min-h-[520px]">
              <img
                src={aboutProfileImage}
                alt="Helio Woi portrait"
                className="h-full w-full object-cover object-center"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accentSoft">Who I Am</p>
              <h3 className="mt-3 text-2xl font-semibold text-pearl sm:text-3xl">Helio Woi</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                I lead projects where strategy, design, marketing, and AI product development operate as one system.
                I turn complexity into clear direction, creating digital experiences that are elegant, practical, and
                built to perform.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                Working across UX/UI, web and graphic design, I build digital products and scalable systems powered by
                AI and automation.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.16em] text-accentSoft">Experience</p>
                  <p className="mt-1 text-sm font-medium text-pearl">20+ years</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.16em] text-accentSoft">Focus</p>
                  <p className="mt-1 text-sm font-medium text-pearl">Brand, UX, AI Products</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
