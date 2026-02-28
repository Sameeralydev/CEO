import { useState } from 'react';
import { siteContent } from '../data/content';
import SectionReveal from './SectionReveal';

const initialForm = { name: '', email: '', message: '' };

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = 'Name is required.';
    if (!form.email.trim()) nextErrors.email = 'Email is required.';
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = 'Enter a valid email.';
    if (!form.message.trim()) nextErrors.message = 'Message is required.';
    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitted(true);
    setForm(initialForm);
    window.setTimeout(() => setSubmitted(false), 2600);
  };

  return (
    <section id="contact" className="snap-section py-16 md:py-24" aria-labelledby="contact-heading">
      <SectionReveal className="section-shell grid gap-8 xl:grid-cols-[1fr_1.1fr]">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.35em] text-gold/90">Contact</p>
          <h3 id="contact-heading" className="font-display text-4xl text-ivory">
            {siteContent.contact.heading}
          </h3>
          <div className="flex flex-wrap gap-3">
            <a
              href={siteContent.contact.links.whatsapp}
              className="rounded-full border border-gold bg-gold px-5 py-2 text-sm font-semibold text-noir transition hover:bg-transparent hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              WhatsApp
            </a>
            <a
              href={siteContent.contact.links.email}
              className="rounded-full border border-white/25 px-5 py-2 text-sm font-semibold text-ivory transition hover:border-gold hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              Email
            </a>
            <a
              href={siteContent.contact.links.calendly}
              className="rounded-full border border-white/25 px-5 py-2 text-sm font-semibold text-ivory transition hover:border-gold hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              Calendly
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6" noValidate>
          <label className="block text-sm">
            <span className="mb-1 block text-ivory/75">Name</span>
            <input
              value={form.name}
              onChange={(event) => setForm({ ...form, name: event.target.value })}
              className="w-full rounded-xl border border-white/15 bg-noir/70 px-4 py-3 text-ivory placeholder:text-ivory/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              placeholder="Your name"
            />
            {errors.name ? <span className="mt-1 block text-xs text-red-300">{errors.name}</span> : null}
          </label>
          <label className="block text-sm">
            <span className="mb-1 block text-ivory/75">Email</span>
            <input
              type="email"
              value={form.email}
              onChange={(event) => setForm({ ...form, email: event.target.value })}
              className="w-full rounded-xl border border-white/15 bg-noir/70 px-4 py-3 text-ivory placeholder:text-ivory/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              placeholder="you@company.com"
            />
            {errors.email ? <span className="mt-1 block text-xs text-red-300">{errors.email}</span> : null}
          </label>
          <label className="block text-sm">
            <span className="mb-1 block text-ivory/75">Message</span>
            <textarea
              rows="4"
              value={form.message}
              onChange={(event) => setForm({ ...form, message: event.target.value })}
              className="w-full rounded-xl border border-white/15 bg-noir/70 px-4 py-3 text-ivory placeholder:text-ivory/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              placeholder="Tell me about your idea or partnership brief."
            />
            {errors.message ? <span className="mt-1 block text-xs text-red-300">{errors.message}</span> : null}
          </label>
          <button
            type="submit"
            className="rounded-full border border-gold bg-gold px-6 py-3 text-sm font-semibold text-noir transition hover:bg-transparent hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            Send Message
          </button>
          {submitted ? (
            <p role="status" className="rounded-xl border border-gold/35 bg-gold/10 px-4 py-2 text-sm text-gold">
              Message received. I will get back to you shortly.
            </p>
          ) : null}
        </form>
      </SectionReveal>
    </section>
  );
}

export default Contact;
