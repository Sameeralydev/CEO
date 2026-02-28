import { siteContent } from '../data/content';
import SectionReveal from './SectionReveal';

function Media() {
  return (
    <section id="gallery" className="snap-section py-16 md:py-24" aria-labelledby="gallery-heading">
      <SectionReveal className="section-shell space-y-8">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-gold/90">Visual Story</p>
          <h3 id="gallery-heading" className="mt-3 font-display text-4xl text-ivory">
            {siteContent.gallery.heading}
          </h3>
          <p className="mt-3 max-w-3xl text-ivory/70">{siteContent.gallery.subtitle}</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {siteContent.gallery.images.map((item, index) => (
            <article key={item.alt} className={`${index === 0 ? 'xl:col-span-2' : ''} overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]`}>
              <img src={item.src} alt={item.alt} className="h-64 w-full object-cover transition duration-500 hover:scale-[1.02]" loading="lazy" />
            </article>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}

export default Media;
