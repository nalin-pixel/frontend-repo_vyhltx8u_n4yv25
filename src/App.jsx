import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0f172a] text-white">
      <a
        href="#projects"
        className="fixed right-6 top-6 z-50 hidden rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur md:inline-flex"
      >
        View Work
      </a>
      <Hero />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
