import { scrollToSection } from '../utils/scrollToSection';

const navLinks = [
  { label: 'About', id: 'about' },
  { label: 'Ventures', id: 'ventures' },
  { label: 'What I Do', id: 'what-i-do' },
  { label: 'Achievements', id: 'achievements' },
  { label: 'Gallery', id: 'gallery-page', isPage: true },
  { label: 'Collaborate', id: 'collaboration' },
  { label: 'Contact', id: 'contact' },
];

function navigateHome(sectionId) {
  const pathname = window.location.pathname || '/';
  const target = sectionId ? `${pathname}#${sectionId}` : pathname;
  window.location.href = target;
}

function navigateGalleryPage() {
  const pathname = window.location.pathname || '/';
  window.location.href = `${pathname}?view=gallery`;
}

function Navbar({ isGalleryPage = false }) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-noir/55 backdrop-blur-md">
      <nav className="section-shell flex h-16 items-center justify-between gap-4" aria-label="Main navigation">
        <button
          type="button"
          onClick={() => {
            if (isGalleryPage) {
              navigateHome('hero');
              return;
            }
            scrollToSection('hero');
          }}
          className="font-display text-xl text-ivory transition hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        >
          Spectrum
        </button>
        <ul className="flex items-center gap-4 overflow-x-auto text-xs text-nowrap pr-1 md:gap-6 md:text-sm">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => {
                  if (link.isPage) {
                    if (!isGalleryPage) {
                      navigateGalleryPage();
                    }
                    return;
                  }

                  if (isGalleryPage) {
                    navigateHome(link.id);
                    return;
                  }

                  scrollToSection(link.id);
                }}
                className={`transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                  link.isPage && isGalleryPage ? 'text-gold' : 'text-ivory/80 hover:text-gold'
                }`}
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
