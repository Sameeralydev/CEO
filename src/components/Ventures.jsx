import { useMemo, useState } from 'react';
import { siteContent } from '../data/content';
import SectionReveal from './SectionReveal';

function Ventures() {
  const [industry, setIndustry] = useState('All');
  const filters = useMemo(() => ['All', ...new Set(siteContent.ventures.map((venture) => venture.industry))], []);
  const filteredVentures = useMemo(
    () => siteContent.ventures.filter((venture) => industry === 'All' || venture.industry === industry),
    [industry],
  );

  return (
    <section id="ventures" className="snap-section py-16 md:py-24" aria-labelledby="ventures-heading">
      <SectionReveal className="section-shell space-y-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-gold/90">Portfolio</p>
            <h3 id="ventures-heading" className="mt-3 font-display text-4xl text-ivory">
              Venture Portfolio
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((chip) => (
              <button
                key={chip}
                type="button"
                onClick={() => setIndustry(chip)}
                className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                  industry === chip
                    ? 'border-gold bg-gold text-noir'
                    : 'border-white/20 text-ivory/75 hover:border-gold hover:text-gold'
                }`}
              >
                {chip}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredVentures.map((venture) => (
            <article
              key={venture.name}
              className="group rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition duration-300 hover:-translate-y-1 hover:border-gold/45 hover:shadow-glow"
            >
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
              <dl className="mb-6 grid grid-cols-3 gap-2 text-xs">
                {Object.entries(venture.kpis).map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-ivory/50">{label}</dt>
                    <dd className="mt-1 font-semibold text-ivory">{value}</dd>
                  </div>
                ))}
              </dl>
              <a
                href={venture.url}
                className="inline-flex rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-ivory transition group-hover:border-gold group-hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                {venture.cta}
              </a>
            </article>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}

export default Ventures;
