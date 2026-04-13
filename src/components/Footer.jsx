import Container from './Container';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-8">
      <Container className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-sm text-slate-400">© {new Date().getFullYear()} Helio Woi</p>
        <div className="flex items-center gap-4 text-sm text-slate-400">
          <a href="mailto:heliocwoi@gmail.com" className="transition hover:text-pearl">
            heliocwoi@gmail.com
          </a>
          <a href="https://wa.me/61491706580" target="_blank" rel="noreferrer" className="transition hover:text-pearl">
            WhatsApp: 0491 706 580
          </a>
          <a href="https://www.linkedin.com/in/helio-woicichowski/" target="_blank" rel="noreferrer" className="transition hover:text-pearl">
            LinkedIn
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
