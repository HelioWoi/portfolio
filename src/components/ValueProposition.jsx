import { valuePoints } from '../data/content';
import Container from './Container';
import SectionHeading from './SectionHeading';

const ValueProposition = () => {
  return (
    <section id="value" className="py-16 sm:py-20">
      <Container>
        <div data-reveal className="reveal rounded-3xl border border-accent/30 bg-gradient-to-r from-accent/15 via-accentSoft/10 to-transparent p-6 sm:p-8">
          <SectionHeading
            eyebrow="Value Proposition"
            title="Why teams choose to work with me"
            description="A strategic partner who can think at executive level and execute with product-grade precision."
          />
          <ul className="grid gap-3 sm:grid-cols-2">
            {valuePoints.map((point) => (
              <li key={point} className="rounded-xl border border-white/10 bg-midnight/30 px-4 py-3 text-sm text-slate-100">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default ValueProposition;
