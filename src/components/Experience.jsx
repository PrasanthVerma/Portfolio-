import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

const experiences = [
  {
    role: 'Social Media Manager (Freelance / Agency)',
    company: 'Local brands across fashion, baby care, automotive & more',
    time: 'Ongoing',
    bullets: [
      'Plan and create Instagram content for multiple local businesses (fashion boutiques, medical stores, baby shops, automotive customization, etc.).',
      'Write short-form copy, choose creatives, and align posts with each brand’s positioning.',
      'Coordinate basic campaign ideas for awareness, offers, and seasonal promotions.',
    ],
  },
  {
    role: 'Founder',
    company: 'Early-stage digital marketing initiative',
    time: 'Ongoing',
    bullets: [
      'Experimenting with building a small digital marketing startup with a focus on Meta ads and content strategy.',
      'Handle client communication, gathering requirements, and translating them into campaigns and posts.',
      'Manage basic reporting on what content worked and what can be improved.',
    ],
  },
  {
    role: 'Student Developer',
    company: 'BCA Program & Personal Learning',
    time: 'Since 5th Semester',
    bullets: [
      'Built a MovieLens-style content-based recommender system as a major project.',
      'Practiced DOM manipulation and small UI projects in vanilla JS and React.',
      'Set up basic Flask apps and experimented with APIs, routes, and local hosting.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="border-b border-slate-800 bg-slate-950/95">
      <div className="section-container py-16 sm:py-20">
        <SectionHeader
          eyebrow="Experience"
          title="Things I&apos;ve been working on"
          description="A mix of client work, self-started initiatives, and academic projects that shaped how I think about products and technology."
        />

        <div className="space-y-5">
          {experiences.map((exp, idx) => (
            <motion.article
              key={exp.role}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.03 }}
              className="glass-panel rounded-3xl p-5"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-sm font-semibold text-slate-50 sm:text-base">
                    {exp.role}
                  </h3>
                  <p className="text-xs font-medium text-cyan-300 sm:text-sm">{exp.company}</p>
                </div>
                <span className="rounded-full bg-slate-900/80 px-3 py-1 text-[11px] text-slate-300">
                  {exp.time}
                </span>
              </div>
              <ul className="mt-3 space-y-1.5 text-sm text-slate-300">
                {exp.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
