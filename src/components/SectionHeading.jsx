const SectionHeading = ({ eyebrow, title, description, align = 'left' }) => {
  return (
    <div className={`mb-10 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-accentSoft">{eyebrow}</p>
      )}
      <h2 className="text-2xl font-semibold text-pearl sm:text-3xl md:text-4xl">{title}</h2>
      {description && <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">{description}</p>}
    </div>
  );
};

export default SectionHeading;
