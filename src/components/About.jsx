import { siteContent } from '../data/content';
import SectionReveal from './SectionReveal';

function About() {
  return (
    <section id="about" className="snap-section py-16 md:py-24" aria-labelledby="about-heading">
      <SectionReveal className="section-shell grid gap-10 xl:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-gold/90">About</p>
          <h3 id="about-heading" className="mt-3 font-display text-4xl text-ivory">
            Founder Story
          </h3>
          <p className="mt-5 max-w-3xl text-ivory/75">{siteContent.about.story}</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {siteContent.about.values.map((value) => (
              <article key={value.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                <h4 className="font-display text-xl text-ivory">{value.title}</h4>
                <p className="mt-2 text-sm text-ivory/70">{value.text}</p>
              </article>
            ))}
          </div>
        </div>

        <aside className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <h4 className="text-xs uppercase tracking-[0.25em] text-gold/80">Timeline</h4>
          <ol className="mt-5 space-y-5">
            {siteContent.about.timeline.map((milestone) => (
              <li key={milestone.year} className="relative border-l border-gold/30 pl-4">
                <p className="text-sm font-semibold text-gold">{milestone.year}</p>
                <p className="text-sm text-ivory/75">{milestone.event}</p>
              </li>
            ))}
          </ol>
        </aside>
      </SectionReveal>
    </section>
  );
}

export default About;
