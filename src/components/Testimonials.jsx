import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote:
      'Ade elevates every interface with thoughtful motion and immaculate polish. Our conversion rates jumped after launch.',
    name: 'Maya R.',
    role: 'Product Lead, Lumina Labs',
  },
  {
    quote:
      'Pixel-perfect, fast, and accessible. Working with Ade felt like having a design system come alive.',
    name: 'Jon K.',
    role: 'CTO, NovaFrame',
  },
];

const Testimonials = () => {
  return (
    <section className="relative w-full bg-[#0b1224] py-20 text-white">
      <div className="absolute inset-0 -z-0">
        <div className="pointer-events-none absolute inset-0 mx-auto max-w-6xl blur-2xl">
          <div className="mx-6 h-64 rounded-3xl bg-gradient-to-r from-[#7930d1]/20 to-[#38bdf8]/20" />
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-3xl font-semibold tracking-tight md:text-4xl"
        >
          Testimonials
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/10 p-6 text-white/90 backdrop-blur-xl"
            >
              <span className="pointer-events-none absolute -top-1 -left-1 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
              <p className="mb-4 text-white/90">“{t.quote}”</p>
              <div className="text-sm text-white/70">
                <span className="font-medium text-white">{t.name}</span> — {t.role}
              </div>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
