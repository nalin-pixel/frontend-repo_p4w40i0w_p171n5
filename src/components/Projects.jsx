import React from 'react';
import { ExternalLink, Star } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Chat Platform',
    description:
      'End‑to‑end encrypted messaging with presence, file uploads, and optimistic UI. Built with React, Node.js, Socket.io and MongoDB.',
    tags: ['React', 'Node', 'Socket.io', 'MongoDB'],
    link: '#',
    highlight: true,
  },
  {
    title: 'E‑commerce Starter',
    description:
      'Headless storefront with product search, Stripe checkout, and admin dashboard. API‑first architecture.',
    tags: ['Vite', 'Express', 'Stripe', 'Prisma'],
    link: '#',
  },
  {
    title: 'AI Notes Assistant',
    description:
      'Summarization and semantic search for meeting notes. Vector DB + serverless functions.',
    tags: ['Next.js', 'OpenAI', 'Pinecone'],
    link: '#',
  },
];

const ProjectCard = ({ title, description, tags, link, highlight }) => (
  <a
    href={link}
    className={`group block rounded-2xl border p-5 transition ${
      highlight
        ? 'border-emerald-600/40 bg-emerald-500/5 hover:bg-emerald-500/10'
        : 'border-slate-800 bg-slate-900/60 hover:bg-slate-900'
    }`}
  >
    <div className="flex items-start justify-between gap-3">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      {highlight && (
        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-1 text-xs text-emerald-300">
          <Star size={14} /> Featured
        </span>
      )}
    </div>
    <p className="mt-2 text-slate-300">{description}</p>
    <div className="mt-3 flex flex-wrap gap-2">
      {tags.map((t) => (
        <span
          key={t}
          className="rounded-full border border-slate-700/70 bg-slate-800/60 px-2 py-1 text-xs text-slate-300"
        >
          {t}
        </span>
      ))}
    </div>
    <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-emerald-300">
      View project <ExternalLink size={16} />
    </div>
  </a>
);

const Projects = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-14">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-white md:text-3xl">Selected projects</h2>
        <p className="mt-2 max-w-2xl text-slate-300">
          A few builds that show my approach to DX, performance, and product polish.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
