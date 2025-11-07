import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Aurora UI Kit',
    desc: 'A glossy, accessible component library with dynamic reflections and motion presets.',
    tech: ['Next.js', 'Tailwind', 'Framer Motion'],
  },
  {
    title: 'Horizon Dashboard',
    desc: 'Realtime analytics dashboard with glassmorphism and fluid charts.',
    tech: ['Vue', 'Vite', 'ECharts'],
  },
  {
    title: 'Velvet Commerce',
    desc: 'Luxury e-commerce storefront optimized for speed and delight.',
    tech: ['Next.js', 'Laravel', 'Stripe'],
  },
];

const Card = ({ title, desc, tech }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur-xl"
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -top-24 left-1/3 h-56 w-56 -translate-x-1/2 rounded-full bg-[#7930d1]/30 blur-3xl" />
        <div className="absolute -bottom-24 right-1/4 h-56 w-56 translate-x-1/2 rounded-full bg-[#38bdf8]/30 blur-3xl" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative">
        <h3 className="mb-2 text-xl font-medium">{title}</h3>
        <p className="mb-4 text-white/70">{desc}</p>
        <div className="flex flex-wrap gap-2 text-xs text-white/70">
          {tech.map((t) => (
            <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* sheen */}
      <span className="pointer-events-none absolute -left-1/3 top-0 h-full w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-[#0f172a] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-3xl font-semibold tracking-tight text-white md:text-4xl"
        >
          Selected Projects
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Card key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
