import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative gradient-bg border-b border-slate-800/60 bg-slate-950/90"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid bg-grid-size opacity-40 mix-blend-soft-light" />
      <div className="section-container relative flex flex-col gap-12 py-16 lg:flex-row lg:items-center lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative z-10 flex-1 space-y-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1 text-xs text-slate-200 shadow shadow-slate-950/60">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            Open to internships & fresh roles
          </div>

          <div>
            <h1 className="text-balance text-3xl font-semibold leading-tight text-slate-50 sm:text-4xl lg:text-5xl">
              Hi, I&apos;m <span className="bg-gradient-to-tr from-cyan-300 via-sky-400 to-emerald-300 bg-clip-text text-transparent">Prashant</span> —
              <span className="block text-slate-300">
                BCA student, budding Data Engineer & Frontend Developer.
              </span>
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
              I love building clean interfaces, experimenting with DOM projects, and turning data into
              useful products. Recently, I&apos;ve been working on a MovieLens-style recommendation
              system and sharpening my skills in React, Python, NumPy, and Flask — while also
              exploring the world of digital marketing and Meta ads.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-slate-950 shadow-glow transition hover:-translate-y-0.5 hover:bg-cyan-400"
            >
              View Projects
              <span className="text-lg">↗</span>
            </a>
            <a
              href="public\Prashant_Verma_Resume.pdf"
              download
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-5 py-2 text-sm font-medium text-slate-100 transition hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-100"
            >
              Download CV
            </a>

          </div>

          <div className="grid gap-3 text-xs text-slate-300 sm:grid-cols-3 sm:text-sm">
            <div className="glass-panel rounded-2xl p-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                Core Stack
              </p>
              <p className="mt-1 text-sm font-medium text-slate-100">
                React • JavaScript • Python • Flask
              </p>
            </div>
            <div className="glass-panel rounded-2xl p-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                Data & Tools
              </p>
              <p className="mt-1 text-sm font-medium text-slate-100">
                NumPy • Pandas • APIs • Git & GitHub
              </p>
            </div>
            <div className="glass-panel rounded-2xl p-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                Plus
              </p>
              <p className="mt-1 text-sm font-medium text-slate-100">
                Social Media Strategy • Meta Ads • Content Design
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          className="relative z-10 flex-1"
        >
          <div className="relative mx-auto max-w-sm rounded-3xl border border-slate-800/80 bg-slate-900/80 p-5 shadow-2xl shadow-cyan-900/40">
            <div className="absolute -left-6 -top-6 h-20 w-20 rounded-full bg-cyan-500/10 blur-2xl" />
            <div className="absolute -bottom-8 -right-4 h-24 w-24 rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="relative space-y-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                    Current Focus
                  </p>
                  <p className="text-sm font-medium text-slate-50">
                    Data Engineering & Frontend Dev
                  </p>
                </div>
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300">
                  Actively Up-skilling
                </span>
              </div>

              <div className="grid gap-3 text-xs text-slate-300">
                <div className="rounded-2xl bg-slate-900/70 p-3">
                  <p className="font-semibold text-slate-100">
                    MovieLens Recommender
                  </p>
                  <p className="mt-1 text-[13px] text-slate-300">
                    Content-based system using cosine similarity, built as a major academic project.
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-900/70 p-3">
                  <p className="font-semibold text-slate-100">
                    DOM & UI Experiments
                  </p>
                  <p className="mt-1 text-[13px] text-slate-300">
                    Small interactive projects in vanilla JS & React to practice event handling,
                    animations, and clean component structure.
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-900/70 p-3">
                  <p className="font-semibold text-slate-100">
                    Social Media Campaigns
                  </p>
                  <p className="mt-1 text-[13px] text-slate-300">
                    Hands-on experience creating content and strategies for brands in fashion,
                    medical, electronics, and automotive niches.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
