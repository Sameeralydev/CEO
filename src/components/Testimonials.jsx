import { siteContent } from '../data/content';
import SectionReveal from './SectionReveal';

function Testimonials() {
  return (
    <section id="testimonials" className="snap-section py-16 md:py-24" aria-labelledby="testimonials-heading">
      <SectionReveal className="section-shell space-y-8">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-gold/90">Trust</p>
          <h3 id="testimonials-heading" className="mt-3 font-display text-4xl text-ivory">
            Testimonials & Partners
          </h3>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {siteContent.testimonials.map((testimonial) => (
            <blockquote key={testimonial.name} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <p className="text-ivory/80">&ldquo;{testimonial.quote}&rdquo;</p>
              <footer className="mt-6">
                <p className="font-semibold text-ivory">{testimonial.name}</p>
                <p className="text-sm text-gold/90">{testimonial.company}</p>
              </footer>
            </blockquote>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          {siteContent.partners.map((partner) => (
            <span key={partner} className="rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.14em] text-ivory/70">
              {partner}
            </span>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}

export default Testimonials;
