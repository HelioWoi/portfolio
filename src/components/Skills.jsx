import Container from './Container';
import SectionHeading from './SectionHeading';

const coreGroups = [
  {
    title: 'Strategy',
    items: ['Marketing Strategy', 'Brand Architecture', 'Product Discovery'],
  },
  {
    title: 'Design & Experience',
    items: ['UX/UI Strategy', 'Web & Graphic Design', 'Visual Content (Photo & Video)'],
  },
  {
    title: 'AI & Systems',
    items: ['Applied AI Workflows', 'No-Code Automation', 'Content Systems'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 sm:py-20">
      <Container>
        <div data-reveal className="reveal">
          <SectionHeading
            eyebrow="Core"
            title="Core capabilities"
          />

          <div className="grid gap-5 md:grid-cols-3">
            {coreGroups.map((group) => (
              <article key={group.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <h3 className="text-lg font-semibold text-pearl">{group.title}</h3>
                <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
