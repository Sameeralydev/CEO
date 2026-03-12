import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import { siteContent } from '../data/content';
import SectionReveal from './SectionReveal';

function VentureCard({ venture, onExplore }) {
  return (
    <article className="group h-full rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition duration-300 hover:-translate-y-1 hover:border-gold/45 hover:shadow-glow">
      <img
        src={venture.image}
        alt={venture.name}
        className="mb-5 h-48 w-full rounded-xl object-cover"
        loading="lazy"
      />
      <div className="mb-4 flex items-start justify-between gap-3">
        <h4 className="font-display text-2xl text-ivory">{venture.name}</h4>
        <span className="rounded-full border border-gold/35 px-3 py-1 text-xs text-gold">{venture.industry}</span>
      </div>
      <p className="mb-5 text-sm text-ivory/70">{venture.description}</p>
      {Object.keys(venture.kpis).length > 0 ? (
        <dl className="mb-6 grid grid-cols-3 gap-2 text-xs">
          {Object.entries(venture.kpis).map(([label, value]) => (
            <div key={label}>
              <dt className="text-ivory/50">{label}</dt>
              <dd className="mt-1 font-semibold text-ivory">{value}</dd>
            </div>
          ))}
        </dl>
      ) : null}
      <a
        href={venture.url}
        onClick={(event) => onExplore(event, venture)}
        className="inline-flex rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-ivory transition group-hover:border-gold group-hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
      >
        {venture.cta}
      </a>
    </article>
  );
}

function RowCarousel({ ventures, onExplore }) {
  const trackRef = useRef(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    const track = trackRef.current;

    if (!track) {
      return undefined;
    }

    const updateScrollState = () => {
      const maxScrollLeft = track.scrollWidth - track.clientWidth;
      setCanScrollPrev(track.scrollLeft > 8);
      setCanScrollNext(track.scrollLeft < maxScrollLeft - 8);
    };

    updateScrollState();
    track.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);

    return () => {
      track.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [ventures]);

  const scrollRow = (direction) => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    track.scrollBy({ left: direction * track.clientWidth, behavior: 'smooth' });
  };

  const shouldCarousel = ventures.length > 3;

  if (!shouldCarousel) {
    return (
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {ventures.map((venture) => (
          <VentureCard key={venture.name} venture={venture} onExplore={onExplore} />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-end gap-2">
        <button
          type="button"
          aria-label="Scroll ventures left"
          onClick={() => scrollRow(-1)}
          disabled={!canScrollPrev}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-lg text-ivory/75 transition hover:border-gold hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-white/15 disabled:hover:text-ivory/75"
        >
          &larr;
        </button>
        <button
          type="button"
          aria-label="Scroll ventures right"
          onClick={() => scrollRow(1)}
          disabled={!canScrollNext}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-lg text-ivory/75 transition hover:border-gold hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-white/15 disabled:hover:text-ivory/75"
        >
          &rarr;
        </button>
      </div>

      <div
        ref={trackRef}
        className="scrollbar-hidden flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory"
      >
        {ventures.map((venture) => (
          <div
            key={venture.name}
            className="w-full shrink-0 snap-start md:basis-[calc((100%-24px)/2)] xl:basis-[calc((100%-48px)/3)]"
          >
            <VentureCard venture={venture} onExplore={onExplore} />
          </div>
        ))}
      </div>
    </div>
  );
}

function Ventures() {
  const [activeVenture, setActiveVenture] = useState(null);
  const ventureGroups = useMemo(() => {
    const groups = new Map();

    siteContent.ventures.forEach((venture) => {
      if (!groups.has(venture.industry)) {
        groups.set(venture.industry, []);
      }

      groups.get(venture.industry).push(venture);
    });

    return Array.from(groups.entries()).map(([industry, ventures]) => ({ industry, ventures }));
  }, []);

  useEffect(() => {
    if (!activeVenture) {
      document.body.style.overflow = '';
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveVenture(null);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeVenture]);

  const handleExplore = (event, venture) => {
    if (!venture.fullDescription) {
      return;
    }

    event.preventDefault();
    setActiveVenture(venture);
  };

  return (
    <>
      <section id="ventures" className="snap-section py-16 md:py-24" aria-labelledby="ventures-heading">
        <SectionReveal className="section-shell space-y-8">
          <div>
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-gold/90">My Ventures</p>
              <h3 id="ventures-heading" className="mt-3 font-display text-4xl text-ivory">
                Portfolio of Businesses
              </h3>
            </div>
          </div>

          <div className="space-y-10">
            {ventureGroups.map(({ industry, ventures }) => (
              <div key={industry} className="space-y-5">
                <div className="flex items-center gap-3">
                  <h4 className="font-display text-2xl text-ivory">{industry}</h4>
                  <span className="rounded-full border border-gold/35 px-3 py-1 text-xs text-gold">
                    {ventures.length} {ventures.length === 1 ? 'Venture' : 'Ventures'}
                  </span>
                </div>
                <RowCarousel ventures={ventures} onExplore={handleExplore} />
              </div>
            ))}
          </div>
        </SectionReveal>
      </section>

      <AnimatePresence>
        {activeVenture ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-noir/70 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => setActiveVenture(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="venture-modal-title"
              className="relative w-full max-w-lg rounded-2xl border border-gold/25 bg-noir/95 p-6 shadow-glow"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Close venture details"
                onClick={() => setActiveVenture(null)}
                className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-ivory/75 transition hover:border-gold hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                X
              </button>
              <div className="pr-12">
                <p className="text-xs uppercase tracking-[0.35em] text-gold/90">{activeVenture.industry}</p>
                <h4 id="venture-modal-title" className="mt-3 font-display text-3xl text-ivory">
                  {activeVenture.name}
                </h4>
                {activeVenture.role ? (
                  <p className="mt-3 text-sm font-semibold uppercase tracking-[0.12em] text-ivory/65">
                    {activeVenture.role}
                  </p>
                ) : null}
                <div className="mt-5 space-y-4 text-sm leading-7 text-ivory/75">
                  {activeVenture.fullDescription.split('\n\n').map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

export default Ventures;
