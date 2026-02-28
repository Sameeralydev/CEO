import { siteContent } from '../data/content';
import SectionReveal from './SectionReveal';

function Stats() {
  return (
    <section id="achievements" className="snap-section py-16 md:py-24" aria-labelledby="quick-stats-heading">
      <SectionReveal className="section-shell">
        <h3 id="quick-stats-heading" className="mb-8 text-sm uppercase tracking-[0.3em] text-gold/85">
          {siteContent.stats.heading}
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {siteContent.stats.items.map((stat) => (
            <article key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <p className="mb-2 text-xs uppercase tracking-[0.2em] text-ivory/55">{stat.label}</p>
              <p className="font-display text-xl text-ivory md:text-2xl">{stat.value}</p>
            </article>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}

export default Stats;
