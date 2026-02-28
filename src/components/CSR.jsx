import { siteContent } from '../data/content';
import SectionReveal from './SectionReveal';

function CSR() {
  return (
    <section id="what-i-do" className="snap-section py-16 md:py-24" aria-labelledby="what-i-do-heading">
      <SectionReveal className="section-shell space-y-8">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-gold/90">Expertise</p>
          <h3 id="what-i-do-heading" className="mt-3 font-display text-4xl text-ivory">
            What I Do
          </h3>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {siteContent.whatIDo.map((item) => (
            <article key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <h4 className="font-display text-xl text-ivory">{item.title}</h4>
              <p className="mt-2 text-sm text-ivory/70">{item.text}</p>
            </article>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}

export default CSR;
