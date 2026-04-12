import { services } from '../data/content';
import Container from './Container';
import SectionHeading from './SectionHeading';

const Services = () => {
  return (
    <section id="services" className="py-16 sm:py-20">
      <Container>
        <div data-reveal className="reveal">
          <SectionHeading
            eyebrow="Services"
            title="Strategic services built for business traction"
            description="Flexible consulting and project-based partnerships to help teams move from fragmented execution to aligned digital growth."
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/50"
              >
                <h3 className="text-lg font-semibold text-pearl">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Services;
