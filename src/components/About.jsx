import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Next.js', color: 'from-[#111827] to-[#111827]' },
  { name: 'Vue.js', color: 'from-[#1f2937] to-[#1f2937]' },
  { name: 'Laravel', color: 'from-[#0f172a] to-[#0f172a]' },
  { name: 'Tailwind CSS', color: 'from-[#111827] to-[#0f172a]' },
];

const About = () => {
  return (
    <section id="about" className="relative w-full bg-[#0b1224] py-20 text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px w-11/12 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-3xl font-semibold tracking-tight md:text-4xl"
        >
          About
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <div className="pointer-events-none absolute -top-24 -left-24 h-56 w-56 rounded-full bg-[#7930d1]/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-[#38bdf8]/20 blur-3xl" />
            <h3 className="mb-2 text-xl font-medium text-white">Ade Nova Wiguna</h3>
            <p className="text-white/70">
              Frontend Developer focused on crafting sleek, responsive, and accessible interfaces. I love blending high-end aesthetics with
              performance-driven architectures, translating complex ideas into elegant user experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <h3 className="mb-4 text-xl font-medium text-white">Core Stack</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((s) => (
                <span
                  key={s.name}
                  className={`relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/10 px-4 py-2 text-sm text-white/90`}
                >
                  <span className={`absolute inset-0 rounded-full bg-gradient-to-br ${s.color} opacity-60`} />
                  <span className="relative">{s.name}</span>
                </span>
              ))}
            </div>
            <div className="mt-6 text-sm text-white/60">
              Background: 5+ years building rich interfaces across startups and agencies. Obsessed with details, motion, and craft.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
