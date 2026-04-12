import { useState } from 'react';
import Container from './Container';
import SectionHeading from './SectionHeading';
import { supabase } from '../lib/supabaseClient';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!supabase) {
      setSubmitError('Unable to send your message right now. Please try again shortly or contact via WhatsApp.');
      setSubmitted(false);
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: formData.get('name')?.toString().trim() || '',
      email: formData.get('email')?.toString().trim() || '',
      message: formData.get('message')?.toString().trim() || '',
    };

    const { error } = await supabase.functions.invoke('send-contact-email', {
      body: payload,
    });

    if (error) {
      console.error('send-contact-email error:', error);

      let detailedMessage = error.message || 'Unable to send your message right now. Please try again shortly or contact via WhatsApp.';

      if (error.context && typeof error.context.json === 'function') {
        try {
          const errorBody = await error.context.json();
          if (errorBody?.error) {
            detailedMessage = errorBody.error;
          }
        } catch {
        }
      }

      setSubmitError(detailedMessage);
      setSubmitted(false);
      setIsSubmitting(false);
      return;
    }

    setSubmitted(true);
    event.currentTarget.reset();
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-16 sm:py-20">
      <Container>
        <div data-reveal className="reveal grid gap-8 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Let’s design your next competitive advantage"
              description="Share your context and goals. I will help you translate strategy into a high-performing digital roadmap."
            />
            <a
              href="https://wa.me/61491706580"
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full border border-green-400/60 px-5 py-3 text-sm font-semibold text-green-300 transition hover:bg-green-400/10"
            >
              Start on WhatsApp
            </a>
          </div>

          <form className="grid gap-4" aria-label="Contact Form" onSubmit={handleSubmit}>
            <label className="text-sm text-slate-300" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="rounded-xl border border-white/15 bg-midnight/60 px-4 py-3 text-sm text-pearl outline-none ring-accent/60 transition focus:ring"
              placeholder="Your full name"
            />

            <label className="text-sm text-slate-300" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="rounded-xl border border-white/15 bg-midnight/60 px-4 py-3 text-sm text-pearl outline-none ring-accent/60 transition focus:ring"
              placeholder="you@company.com"
            />

            <label className="text-sm text-slate-300" htmlFor="message">
              Project Brief
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="rounded-xl border border-white/15 bg-midnight/60 px-4 py-3 text-sm text-pearl outline-none ring-accent/60 transition focus:ring"
              placeholder="Tell me about your challenge, audience, and goals."
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-midnight transition hover:bg-accentSoft"
            >
              {isSubmitting ? 'Sending...' : 'Send Inquiry'}
            </button>
            {submitError && <p className="text-sm text-rose-300">{submitError}</p>}
            {submitted && (
              <p className="text-sm text-accentSoft">
                Message sent successfully.
              </p>
            )}
          </form>

          <img
            src="https://qlpbnqdeyenbdkyqftia.supabase.co/storage/v1/object/public/media/logo%20white2.png"
            alt="Helio Woi icon"
            className="h-16 w-16 justify-self-center object-contain md:col-start-2"
            loading="lazy"
          />
        </div>
      </Container>
    </section>
  );
};

export default Contact;
