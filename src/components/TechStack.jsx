import React from 'react';
import { Code2, Server, Database, Cloud } from 'lucide-react';

const tech = [
  { icon: Code2, title: 'Frontend', items: ['React', 'Vite', 'TypeScript', 'Tailwind CSS'] },
  { icon: Server, title: 'Backend', items: ['Node.js', 'Express', 'FastAPI (Python)', 'REST & Webhooks'] },
  { icon: Database, title: 'Database', items: ['MongoDB', 'PostgreSQL', 'Prisma', 'Mongoose'] },
  { icon: Cloud, title: 'DevOps', items: ['Vercel', 'Docker', 'GitHub Actions', 'CI/CD'] },
];

const Card = ({ icon: Icon, title, items }) => (
  <div className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-5 transition hover:border-emerald-600/40 hover:bg-slate-900">
    <div className="flex items-center gap-3">
      <div className="rounded-xl bg-emerald-500/10 p-2 text-emerald-400">
        <Icon size={20} />
      </div>
      <h3 className="text-lg font-medium text-white">{title}</h3>
    </div>
    <ul className="mt-3 list-inside list-disc text-sm text-slate-300">
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  </div>
);

const TechStack = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-14">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-white md:text-3xl">Full‑stack expertise</h2>
        <p className="mt-2 max-w-2xl text-slate-300">
          Modern JavaScript from frontend to backend, with production‑ready tooling and clean architecture.
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {tech.map((t) => (
          <Card key={t.title} {...t} />
        ))}
      </div>
    </section>
  );
};

export default TechStack;
