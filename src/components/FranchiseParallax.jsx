import Container from './Container';

const FranchiseParallax = () => {
  const franchiseBannerUrl =
    'https://qlpbnqdeyenbdkyqftia.supabase.co/storage/v1/object/public/media/banner%20dentspot%20%20-%20desktop.jpg';

  return (
    <section id="franchise" className="relative overflow-hidden py-16 sm:py-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${franchiseBannerUrl})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/45" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/38 to-black/22" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/38 via-transparent to-transparent" aria-hidden="true" />

      <Container className="relative z-10">
        <div data-reveal className="reveal flex min-h-[44vh] items-end p-2 sm:p-4 md:min-h-[52vh]">
          <div className="max-w-3xl p-4 sm:p-6 lg:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accentSoft">Franchise Project</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-pearl sm:text-4xl md:text-5xl">Structured Expansion</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-100 sm:text-base">
              Creative and marketing assets developed to support franchise growth, aligning brand identity, customer
              experience, and operational communication across multiple locations.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FranchiseParallax;
