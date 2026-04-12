import { useState } from 'react';
import { navLinks } from '../data/content';
import Container from './Container';

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/85 backdrop-blur-xl">
      <Container className="py-3">
        <div className="flex items-center justify-between">
          <a href="#home" className="inline-flex items-center gap-2 text-sm font-light tracking-wider text-pearl font-sans">
            <img
              src="https://qlpbnqdeyenbdkyqftia.supabase.co/storage/v1/object/public/media/logo%20white2.png"
              alt="Helio Woi logo"
              className="h-5 w-5 rounded-sm object-cover"
            />
            <span className="font-light">HELIO</span>
            <span className="font-medium">WOI</span>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-300 transition-colors hover:text-pearl"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded-full border border-accent/60 px-4 py-2 text-xs font-medium text-pearl transition hover:bg-accent/20 sm:inline-flex"
            >
              Book a Call
            </a>
            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              className="inline-flex rounded-md border border-white/15 px-3 py-2 text-xs text-slate-200 md:hidden"
              aria-label="Toggle menu"
            >
              Menu
            </button>
          </div>
        </div>

        {open && (
          <nav className="mt-3 grid gap-2 border-t border-white/10 pt-3 md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-slate-300 transition-colors hover:text-pearl"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="text-sm font-medium text-accentSoft">
              Book a Call
            </a>
          </nav>
        )}
      </Container>
    </header>
  );
};

export default NavBar;
