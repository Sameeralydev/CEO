import { scrollToSection } from '../utils/scrollToSection';

const navLinks = [
  { label: 'Ventures', id: 'ventures' },
  { label: 'About', id: 'about' },
  { label: 'Media', id: 'media' },
  { label: 'Testimonials', id: 'testimonials' },
  { label: 'CSR', id: 'csr' },
  { label: 'Contact', id: 'contact' },
];

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-noir/75 backdrop-blur-md">
      <nav className="section-shell flex h-16 items-center justify-between gap-4" aria-label="Main navigation">
        <button
          type="button"
          onClick={() => scrollToSection('hero')}
          className="font-display text-xl text-ivory transition hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        >
          Spectrum
        </button>
        <ul className="flex items-center gap-4 overflow-x-auto text-xs text-nowrap pr-1 md:gap-6 md:text-sm">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => scrollToSection(link.id)}
                className="text-ivory/80 transition hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
