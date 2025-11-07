import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! Your message has been sent.');
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="relative w-full bg-[#0f172a] py-20 text-white">
      <div className="mx-auto max-w-4xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-3xl font-semibold tracking-tight md:text-4xl"
        >
          Contact
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div className="relative">
              <input
                className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none backdrop-blur focus:ring-2 focus:ring-[#7930d1]/60"
                placeholder="Your name"
                type="text"
                required
              />
            </div>
            <div className="relative">
              <input
                className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none backdrop-blur focus:ring-2 focus:ring-[#38bdf8]/60"
                placeholder="Email address"
                type="email"
                required
              />
            </div>
          </div>
          <div className="relative">
            <textarea
              className="min-h-[140px] w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none backdrop-blur focus:ring-2 focus:ring-white/30"
              placeholder="Your message"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="relative inline-flex items-center justify-center overflow-hidden rounded-full px-6 py-3 font-medium text-white"
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#7930d1] to-[#38bdf8]" />
              <span className="relative">Send Message</span>
              <span className="pointer-events-none absolute -inset-1 rounded-full bg-gradient-to-r from-[#7930d1]/40 to-[#38bdf8]/40 blur-lg" />
            </button>
          </div>
          {status && <div className="text-sm text-white/70">{status}</div>}
        </motion.form>
      </div>

      <div className="mx-auto mt-20 max-w-6xl px-6">
        <footer className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b1224] p-6 text-white/70">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <span>© {new Date().getFullYear()} Ade Nova Wiguna</span>
            <nav className="flex items-center gap-6">
              <a href="#about" className="hover:text-white">About</a>
              <a href="#projects" className="hover:text-white">Projects</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </nav>
          </div>
          {/* animated edge light strip */}
          <span className="pointer-events-none absolute inset-x-0 -bottom-1 h-px w-full bg-gradient-to-r from-transparent via-[#7930d1] to-transparent" />
        </footer>
      </div>
    </section>
  );
};

export default Contact;
