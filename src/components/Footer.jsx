import { siteContent } from '../data/content';

function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="section-shell flex flex-col gap-4 text-sm text-ivory/60 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Umer Riaz. All rights reserved.</p>
        <div className="flex gap-4">
          {siteContent.contact.socials.map((social) => (
            <a
              key={social.label}
              href={social.url}
              className="transition hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
