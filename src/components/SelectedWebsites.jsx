import Container from './Container';
import SectionHeading from './SectionHeading';
import { selectedWebsites } from '../data/content';

const SelectedWebsites = () => {
  return (
    <section className="py-14 sm:py-18" aria-label="Selected websites">
      <Container>
        <div data-reveal className="reveal">
          <SectionHeading
            eyebrow="Selected Websites"
            title="Live projects built and launched"
            description="Two recent websites with distinct brand direction, conversion-ready structure, and responsive execution."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            {selectedWebsites.map((site) => (
              <article
                key={site.name}
                className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-accentSoft/40"
              >
                <div className="border-b border-white/10 p-3">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-black/40">
                    <img
                      src={site.mockups[0]}
                      alt={`${site.name} website mockup`}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                <div className="p-6">
                  <p className="rounded-full border border-white/20 bg-black/30 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-accentSoft w-fit">
                    {site.category}
                  </p>
                  <h3 className="text-xl font-semibold text-pearl">{site.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">{site.summary}</p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-200">
                    {site.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accentSoft" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={site.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center rounded-full border border-white/30 bg-black/25 px-4 py-2 text-sm font-semibold text-pearl transition hover:border-accentSoft hover:text-accentSoft"
                  >
                    Visit Site →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SelectedWebsites;
