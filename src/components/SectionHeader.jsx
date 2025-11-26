import { motion } from 'framer-motion'

export default function SectionHeader({ eyebrow, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      className="mb-8 max-w-2xl"
    >
      {eyebrow && (
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-300/90">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 text-2xl font-semibold text-slate-50 sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
          {description}
        </p>
      )}
    </motion.div>
  )
}
