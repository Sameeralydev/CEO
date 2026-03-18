import DomeGallery from './DomeGallery';
import SectionReveal from './SectionReveal';

const achievementImages = [
  {
    src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    alt: 'Leadership and recognition moment',
  },
  {
    src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    alt: 'Public speaking and achievement event',
  },
  {
    src: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=1200&q=80',
    alt: 'Award and achievement ceremony',
  },
  {
    src: 'https://images.unsplash.com/photo-1503428593586-e225b39bddfe?auto=format&fit=crop&w=1200&q=80',
    alt: 'Education and mentoring achievement',
  },
  {
    src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    alt: 'Business growth and collaboration achievement',
  },
  {
    src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
    alt: 'Team and strategy achievement',
  },
  {
    src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
    alt: 'Professional achievement and media moment',
  },
];

function GalleryPage() {
  return (
    <section className="min-h-screen bg-[linear-gradient(180deg,#000000_0%,#040404_100%)] pb-16 pt-28 md:pt-32">
      <SectionReveal className="section-shell">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-gold/90">Signature Gallery</p>
          <h1 className="mt-4 font-display text-5xl text-ivory sm:text-6xl lg:text-7xl">Achievements</h1>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-ivory/72 md:text-base">
            A visual dome of milestones, leadership moments, recognitions, and impact-driven work across education,
            technology, business, and public engagement.
          </p>
        </div>
      </SectionReveal>

      <SectionReveal className="section-shell mt-12" delay={0.08}>
        <div className="relative overflow-hidden rounded-[2rem] bg-transparent shadow-none">
          <div className="h-[72vh] min-h-[620px] w-full">
            <DomeGallery
              images={achievementImages}
              fit={0.8}
              minRadius={600}
              maxVerticalRotationDeg={0}
              segments={34}
              dragDampening={2}
              grayscale
              overlayBlurColor="#000000"
              openedImageWidth="260px"
              openedImageHeight="360px"
              imageBorderRadius="26px"
              openedImageBorderRadius="26px"
            />
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}

export default GalleryPage;
