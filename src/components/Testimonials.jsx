import { siteContent } from '../data/content';
import SectionReveal from './SectionReveal';

function Testimonials() {
  return (
    <section id="collaboration" className="snap-section py-16 md:py-24" aria-labelledby="collaboration-heading">
      <SectionReveal className="section-shell space-y-8">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-gold/90">Partnerships</p>
          <h3 id="collaboration-heading" className="mt-3 font-display text-4xl text-ivory">
            {siteContent.collaboration.heading}
          </h3>
          <p className="mt-3 max-w-3xl text-ivory/70">{siteContent.collaboration.intro}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {siteContent.collaboration.points.map((point) => (
            <article key={point} className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              <p className="font-semibold text-ivory">{point}</p>
            </article>
          ))}
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="max-w-3xl text-ivory/75">{siteContent.collaboration.outro}</p>
          <a
            href={siteContent.collaboration.ctaLink}
            className="inline-flex rounded-full border border-gold bg-gold px-6 py-3 text-sm font-semibold text-noir transition hover:bg-transparent hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            {siteContent.collaboration.cta}
          </a>
        </div>
      </SectionReveal>
    </section>
  );
}

export default Testimonials;
