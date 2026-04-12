import { projects } from '../data/content';
import Container from './Container';
import SectionHeading from './SectionHeading';

const Projects = () => {
  return (
    <section id="projects" className="py-16 sm:py-20">
      <Container>
        <div data-reveal className="reveal">
          <SectionHeading
            eyebrow="Featured Projects"
            title="Selected strategic case studies"
            description="Placeholder case studies representing the type of high-impact transformation work delivered across sectors."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/50"
              >
                <p className="text-xs uppercase tracking-[0.16em] text-accentSoft">{project.category}</p>
                <h3 className="mt-3 text-lg font-semibold text-pearl">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{project.summary}</p>
                <p className="mt-6 text-sm font-medium text-accentSoft">{project.impact}</p>
                <button
                  type="button"
                  className="mt-6 text-sm font-semibold text-pearl transition group-hover:text-accentSoft"
                >
                  View Case Study →
                </button>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
