import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Mail, Github } from 'lucide-react';

const Hero3D = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-10 md:pt-28">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-800/40 px-3 py-1 text-xs text-slate-300 backdrop-blur">
              <Rocket size={14} className="text-emerald-400" />
              Available for full‑stack roles
            </div>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white md:text-6xl">
              JavaScript Full‑Stack Developer
            </h1>
            <p className="mt-4 max-w-xl text-slate-300">
              I craft delightful, scalable web apps using React, Node.js, and cloud‑native tooling. I love turning complex problems into elegant, performant experiences.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="mailto:hello@yourdomain.dev"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 font-medium text-white shadow-sm transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-300"
              >
                <Mail size={18} />
                Contact Me
              </a>
              <a
                href="https://github.com/yourhandle"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700/70 bg-slate-800/40 px-4 py-2 font-medium text-slate-200 transition hover:bg-slate-800/70 focus:outline-none focus:ring-2 focus:ring-slate-600"
              >
                <Github size={18} />
                GitHub
              </a>
            </div>
          </div>

          <div className="h-[420px] w-full rounded-2xl border border-slate-800 bg-slate-900/60 p-1 shadow-inner">
            <div className="h-full w-full overflow-hidden rounded-xl">
              <Spline
                scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* subtle gradient glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-emerald-500/10 via-transparent to-transparent" />
    </section>
  );
};

export default Hero3D;
