import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { siteContent } from '../data/content';
import { scrollToSection } from '../utils/scrollToSection';

function Hero() {
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const imageY = useTransform(scrollYProgress, [0, 0.2], [0, reducedMotion ? 0 : 40]);
  const textY = useTransform(scrollYProgress, [0, 0.2], [0, reducedMotion ? 0 : -30]);

  return (
    <section id="hero" className="snap-section min-h-[120vh] pt-16">
      <div className="sticky top-16 flex min-h-[calc(100vh-4rem)] items-center">
        <div className="section-shell grid gap-12 py-16 lg:grid-cols-2 lg:items-center">
          <motion.div style={{ y: textY }} className="space-y-7">
            <p className="text-xs uppercase tracking-[0.35em] text-gold/90">Personal Brand</p>
            <h1 className="font-display text-4xl leading-tight text-ivory sm:text-5xl lg:text-6xl">{siteContent.profile.name}</h1>
            <h2 className="text-lg font-semibold text-ivory/90 md:text-xl">{siteContent.profile.title}</h2>
            <p className="max-w-xl text-base text-ivory/75 md:text-lg">{siteContent.profile.tagline}</p>
            <p className="max-w-xl text-sm text-ivory/70 md:text-base">{siteContent.profile.subTagline}</p>
            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => scrollToSection('ventures')}
                className="rounded-full border border-gold bg-gold px-6 py-3 text-sm font-semibold text-noir transition hover:bg-transparent hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                {siteContent.profile.ctaPrimary}
              </button>
              <a
                href="#contact"
                className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-ivory transition hover:border-gold hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                {siteContent.profile.ctaSecondary}
              </a>
            </div>
          </motion.div>

          <motion.div style={{ y: imageY }} className="relative">
            <img
              src={siteContent.profile.image}
              alt={`${siteContent.profile.name} portrait`}
              className="h-[420px] w-full rounded-3xl border border-white/10 object-cover object-top shadow-2xl sm:h-[500px] lg:h-[560px]"
              fetchPriority="high"
            />
            <div className="mt-5 flex flex-wrap gap-3">
              {siteContent.profile.chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-gold/50 bg-noir/85 px-4 py-2 text-xs font-semibold tracking-wide text-gold"
                >
                  {chip}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
