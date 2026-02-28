import { siteContent } from '../data/content';
import SectionReveal from './SectionReveal';

function CSR() {
  return (
    <section id="csr" className="snap-section py-16 md:py-24" aria-labelledby="csr-heading">
      <SectionReveal className="section-shell space-y-8">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-gold/90">Impact</p>
          <h3 id="csr-heading" className="mt-3 font-display text-4xl text-ivory">
            CSR / Community
          </h3>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {siteContent.csr.map((item) => (
            <article key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <h4 className="font-display text-2xl text-ivory">{item.title}</h4>
              <p className="mt-2 text-sm text-ivory/70">{item.text}</p>
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-gold">{item.metric}</p>
            </article>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}

export default CSR;
