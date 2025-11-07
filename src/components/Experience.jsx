import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

const roles = [
  {
    icon: Briefcase,
    org: 'Nova Labs',
    title: 'Full‑Stack JavaScript Engineer',
    period: '2023 — Present',
    bullets: [
      'Shipped a micro‑frontend platform serving 100k+ users/month with shared design system.',
      'Reduced page load by 42% via route‑level code‑splitting and image optimization.',
      'Led CI/CD migration to GitHub Actions cutting deployment time to 6 minutes.',
    ],
  },
  {
    icon: Briefcase,
    org: 'Orbit Studio',
    title: 'Frontend Engineer',
    period: '2021 — 2023',
    bullets: [
      'Built component library with accessibility baked in using Radix primitives.',
      'Implemented analytics‑driven A/B tests improving signup conversion by 18%.',
    ],
  },
  {
    icon: GraduationCap,
    org: 'Tech University',
    title: 'B.Sc. in Computer Science',
    period: '2017 — 2021',
    bullets: ['Graduated with honors. Focus on distributed systems and HCI.'],
  },
];

const Item = ({ icon: Icon, org, title, period, bullets }) => (
  <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
    <div className="flex items-start justify-between">
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-emerald-500/10 p-2 text-emerald-400">
          <Icon size={20} />
        </div>
        <div>
          <h3 className="font-semibold text-white">{title}</h3>
          <p className="text-sm text-slate-300">{org}</p>
        </div>
      </div>
      <span className="text-xs text-slate-400">{period}</span>
    </div>
    <ul className="mt-3 list-inside list-disc text-sm text-slate-300">
      {bullets.map((b) => (
        <li key={b}>{b}</li>
      ))}
    </ul>
  </div>
);

const Experience = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-14">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-white md:text-3xl">Experience & education</h2>
        <p className="mt-2 max-w-2xl text-slate-300">
          Impact that recruiters care about: shipped features, performance wins, and measurable outcomes.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {roles.map((r) => (
          <Item key={r.title + r.org} {...r} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
