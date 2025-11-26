import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

export default function About() {
  return (
    <section id="about" className="border-b border-slate-800 bg-slate-950/90">
      <div className="section-container py-16 sm:py-20">
        <SectionHeader
          eyebrow="About"
          title="Who I am in a few lines"
          description="I&apos;m a BCA student who loves mixing clean frontend development with practical data skills and digital marketing. I enjoy understanding how things work end-to-end — from writing APIs to designing the posts that promote them."
        />

        <div className="grid gap-8 lg:grid-cols-[3fr,2fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 text-sm leading-relaxed text-slate-300 sm:text-base"
          >
            <p>
              Over the last few semesters, I&apos;ve spent a lot of time building projects
              instead of just reading theory. That includes a MovieLens-style recommendation
              system, DOM-based mini apps, and a basic Flask backend. These projects helped me
              connect concepts like APIs, routing, and cosine similarity with real code.
            </p>
            <p>
              Parallelly, I explored the digital marketing side — especially Meta ads and social
              media strategy. I&apos;ve ideated content and campaigns for local brands: clothing
              stores, baby shops, automotive studios, medical stores, and more. This gives me a
              unique angle of thinking about products from both tech and user perspectives.
            </p>
            <p>
              Right now I&apos;m actively deepening my skills in Python, data engineering
              workflows, and React. I&apos;m looking for opportunities (internships or entry-level
              roles) where I can contribute to real products, learn from experienced engineers, and
              grow quickly.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-panel h-fit rounded-3xl p-5 text-sm text-slate-200 sm:text-[15px]"
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
              Snapshot
            </h3>
            <dl className="mt-4 space-y-3">
              <div className="flex justify-between gap-3">
                <dt className="text-slate-400">Name</dt>
                <dd className="font-medium text-slate-100">Prashant Verma</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-slate-400">Location</dt>
                <dd className="font-medium text-slate-100">India (IST)</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-slate-400">Education</dt>
                <dd className="font-medium text-slate-100">BCA, 5th Semester</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-slate-400">Interests</dt>
                <dd className="text-right text-slate-100">
                  Data Engineering, Frontend Dev, Digital Marketing, UI Ideas
                </dd>
              </div>
            </dl>

            <div className="mt-5 border-t border-slate-800 pt-4 text-xs text-slate-300">
              <p className="font-semibold text-slate-100">
                What I&apos;m aiming for
              </p>
              <p className="mt-1">
                A role where I can work with data pipelines or frontend systems, collaborate with
                a strong team, and keep pushing my skills in React, Python, SQL, and cloud tools.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
