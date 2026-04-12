import { motion } from 'framer-motion';
import { tools } from '../data/content';

const Tools = () => {
  const marqueeTools = [...tools, ...tools];

  return (
    <section id="tools" className="py-6 sm:py-8">
      <div data-reveal className="reveal relative w-full overflow-hidden px-0">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#03060f] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#03060f] to-transparent" />

        <motion.div
          className="flex w-max items-center gap-8 py-2"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 58, repeat: Infinity, ease: 'linear' }}
        >
          {marqueeTools.map((tool, index) => (
            <span key={`${tool}-${index}`} className="whitespace-nowrap text-sm font-medium tracking-wide text-slate-200 sm:text-base">
              {tool}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Tools;
