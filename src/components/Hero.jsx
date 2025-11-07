import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero: React.FC = () => {
  const handleCTAClick = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-[#0f172a] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Glow gradients overlay (non-interactive) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#7930d1]/40 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[#38bdf8]/40 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/70" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 pt-28 pb-24 md:pt-40">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-widest text-white/80 backdrop-blur-md"
        >
          Futuristic • Polished • Interactive
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="text-3xl font-semibold leading-tight text-white drop-shadow md:text-6xl"
        >
          Hi, I’m <span className="bg-gradient-to-r from-[#38bdf8] to-[#7930d1] bg-clip-text text-transparent">Ade Nova Wiguna</span>
          <br />
          <span className="text-white/90">Frontend Developer</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="max-w-2xl text-base text-white/70 md:text-lg"
        >
          I craft sleek, responsive, and visually stunning interfaces with performance, accessibility, and delightful micro-interactions at the core.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-2"
        >
          <button
            onClick={handleCTAClick}
            className="relative inline-flex items-center justify-center overflow-hidden rounded-full px-7 py-3 font-medium text-white shadow-2xl"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#7930d1] via-[#5b37c1] to-[#38bdf8] opacity-90" />
            <span className="relative z-10">View My Work</span>
            <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#7930d1]/40 to-[#38bdf8]/40 blur-xl" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
