import Container from './Container';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-8">
      <Container className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-sm text-slate-400">© {new Date().getFullYear()} Helio Woi</p>
        <div className="flex w-full flex-col items-start gap-2 text-sm text-slate-400 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:justify-end sm:gap-4">
          <a href="mailto:heliocwoi@gmail.com" className="break-all transition hover:text-pearl">
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
