import React from 'react';
import Hero3D from './components/Hero3D';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Experience from './components/Experience';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-slate-800/70 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2 text-white">
            <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            <span className="font-medium">Your Name</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#stack" className="hover:text-white">Stack</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#contact" className="rounded-lg bg-emerald-500 px-3 py-1.5 font-medium text-slate-950 hover:bg-emerald-400">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero3D />
        <div id="stack"><TechStack /></div>
        <div id="projects"><Projects /></div>
        <div id="experience"><Experience /></div>
      </main>

      {/* Footer / Contact */}
      <footer id="contact" className="border-t border-slate-800/70 bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="text-lg font-semibold text-white">Let’s build something great</h3>
              <p className="mt-1 text-slate-300">Open to full‑time roles and select freelance projects.</p>
            </div>
            <div className="flex gap-3">
              <a
                href="mailto:hello@yourdomain.dev"
                className="rounded-lg bg-emerald-500 px-4 py-2 font-medium text-slate-950 transition hover:bg-emerald-400"
              >
                Email Me
              </a>
              <a
                href="/resume.pdf"
                className="rounded-lg border border-slate-700/70 bg-slate-900/60 px-4 py-2 font-medium text-white transition hover:bg-slate-900"
              >
                Download Resume
              </a>
            </div>
          </div>
          <p className="mt-6 text-xs text-slate-500">© {new Date().getFullYear()} Your Name — Built with React & Tailwind</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
