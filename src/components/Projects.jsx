import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

const projects = [
  {
    title: 'MovieLens Content-based Recommender',
    tag: 'Python • Data • APIs',
    description:
      'University major project that recommends movies using content-based filtering, custom tags, and cosine similarity. Built with Python, pandas, and a frontend that lets users explore similar movies.',
    highlights: [
      'Preprocessed movie metadata to create combined feature tags.',
      'Used vectorization + cosine similarity to compute similarity scores.',
      'Designed a simple UI to show top-N recommendations for a selected movie.',
    ],
  },
  {
    title: 'DOM Interaction & UI Micro-projects',
    tag: 'JavaScript • Frontend',
    description:
      'A collection of small DOM-based projects like interactive buttons, random color generators, animated shadows, and mini components built to master events and UI feedback.',
    highlights: [
      'Practiced event listeners, state handling, and animations in vanilla JS.',
      'Emphasis on clean code and readable logic.',
      'Used as a playground to try new UI ideas before porting them to React.',
    ],
  },
  {
    title: 'Flask Mini Apps & API Playground',
    tag: 'Flask • Backend basics',
    description:
      'Small experiments with Flask to understand routing, request handling, and running apps locally.',
    highlights: [
      'Created simple routes returning HTML or text content.',
      'Understood how localhost, ports, and environments work.',
      'Base for future APIs to serve ML or data projects.',
    ],
  },
  {
    title: 'Social Media Campaign Concepts',
    tag: 'Marketing • Strategy',
    description:
      'Conceptualized and wrote content ideas for several brands including clothing stores, boutiques, baby stores, automotive customs, medical shops, and more.',
    highlights: [
      'Wrote post copy and ideas tailored to each brand’s audience.',
      'Planned series like product spotlights, festival campaigns, and offer announcements.',
      'Thought through hooks, CTAs, and how to showcase value in a few seconds.',
    ],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="border-b border-slate-800 bg-slate-950/95">
      <div className="section-container py-16 sm:py-20">
        <SectionHeader
          eyebrow="Projects"
          title="Things I&apos;ve built & experimented with"
          description="More than perfect designs, I focus on learning from every project — whether it&apos;s a university assignment, a mini-experiment, or a client idea."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, idx) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="group glass-panel flex flex-col justify-between rounded-3xl p-5 hover:border-cyan-500/60"
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-base font-semibold text-slate-50 sm:text-lg">
                    {project.title}
                  </h3>
                  <span className="tag whitespace-nowrap text-[10px] sm:text-[11px]">
                    {project.tag}
                  </span>
                </div>
                <p className="mt-3 text-sm text-slate-300">{project.description}</p>
                <ul className="mt-3 space-y-1.5 text-sm text-slate-300">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                {/* <span>Repo / demo links can go here later</span> */}
                <span className="opacity-0 transition group-hover:opacity-100">
                  <span className="text-cyan-300">Future live demo</span> ↗
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
