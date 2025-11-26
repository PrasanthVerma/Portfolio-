import { motion } from 'framer-motion'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="sticky top-0 z-40 border-b border-slate-800/70 bg-slate-950/70 backdrop-blur-xl"
    >
      <div className="section-container flex items-center justify-between py-3">
        <a href="#hero" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-tr from-cyan-500 to-emerald-400 text-sm font-semibold shadow-glow">
            PV
          </div>
          <div className="hidden text-sm font-medium text-slate-200 sm:block">
            <span className="block leading-none">Prashant Verma</span>
            <span className="text-[11px] text-slate-400">BCA • Web & Data Enthusiast</span>
          </div>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative font-medium transition hover:text-cyan-300"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-cyan-400 transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full border border-cyan-400/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200 shadow-glow transition hover:-translate-y-0.5 hover:bg-cyan-500/10 sm:inline-flex"
          >
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </motion.header>
  )
}
