import { testimonials } from '../data/content';
import Container from './Container';
import SectionHeading from './SectionHeading';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 sm:py-20">
      <Container>
        <div data-reveal className="reveal">
          <SectionHeading
            eyebrow="Testimonials"
            title="Trusted by leaders building ambitious digital brands"
          />
          <div className="grid gap-5 md:grid-cols-2">
            {testimonials.map((item) => (
              <blockquote key={item.name} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_16px_40px_rgba(0,0,0,0.25)]">
                <div className="flex items-center gap-4">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={`${item.name} profile`}
                      className="h-12 w-12 rounded-full border border-white/20 object-cover"
                      loading="lazy"
                    />
                  ) : null}
                  <div>
                    <p className="text-sm font-semibold text-pearl">{item.name}</p>
                    {item.role ? <p className="text-xs leading-relaxed text-slate-400">{item.role}</p> : null}
                  </div>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-slate-200">“{item.quote}”</p>
                <footer className="mt-4 border-t border-white/10 pt-3">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-accentSoft">Verified Testimonial</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
