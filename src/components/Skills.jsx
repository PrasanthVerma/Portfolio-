import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

const skillGroups = [
  {
    title: 'Programming & Core',
    items: ['JavaScript (ES6+)', 'React basics', 'HTML5 & modern CSS', 'Python', 'Flask fundamentals', 'Git & GitHub'],
  },
  {
    title: 'Data & Analytics',
    items: ['NumPy & broadcasting', 'Pandas (basics)', 'APIs & JSON data', 'Basic SQL'],
  },
  {
    title: 'Product & Marketing',
    items: ['Meta Ads (Facebook & Instagram)', 'Campaign strategy', 'Content planning', 'Copywriting for social media', 'Basic design sense for creatives'],
  },
  {
    title: 'Soft Skills',
    items: ['Curious & fast learner', 'Explaining concepts simply', 'Collaboration & feedback', 'Consistency in self-learning'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="border-b border-slate-800 bg-slate-950/95">
      <div className="section-container py-16 sm:py-20">
        <SectionHeader
          eyebrow="Skills"
          title="Tech stack & strengths"
          description="These are the tools and skills I&apos;ve been actively using in projects, coursework, and real client/problem scenarios."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4 }}
              className="glass-panel rounded-3xl p-5"
            >
              <h3 className="text-sm font-semibold text-slate-50">{group.title}</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-slate-300">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
