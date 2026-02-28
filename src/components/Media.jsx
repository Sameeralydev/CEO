import { siteContent } from '../data/content';
import SectionReveal from './SectionReveal';

function Media() {
  return (
    <section id="media" className="snap-section py-16 md:py-24" aria-labelledby="media-heading">
      <SectionReveal className="section-shell space-y-8">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-gold/90">Press</p>
          <h3 id="media-heading" className="mt-3 font-display text-4xl text-ivory">
            Media / Press / Speaking
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
          {siteContent.media.logos.map((logo) => (
            <div
              key={logo}
              className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-5 text-center text-sm font-semibold text-ivory/80"
            >
              {logo}
            </div>
          ))}
        </div>

        <div className="space-y-3">
          {siteContent.media.items.map((item) => (
            <article
              key={item.title}
              className="flex flex-col justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 md:flex-row md:items-center"
            >
              <div>
                <h4 className="font-semibold text-ivory">{item.title}</h4>
                <p className="mt-1 text-sm text-ivory/65">
                  {item.outlet} | {item.year}
                </p>
              </div>
              <a
                href={item.url}
                className="inline-flex rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-ivory transition hover:border-gold hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                {item.type}
              </a>
            </article>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}

export default Media;
