import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { DSA } from './components/sections/DSA';
import { Education } from './components/sections/Education';
import { GitHubStats } from './components/sections/GitHubStats';
import { Contact } from './components/sections/Contact';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#070a13] text-slate-200 selection:bg-sky-500/30 selection:text-sky-200">
      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content" className="relative">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <DSA />
        <Education />
        <GitHubStats />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
