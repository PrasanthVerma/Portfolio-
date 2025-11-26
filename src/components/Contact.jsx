import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMessage('')
    setStatus('sending')

    const form = e.target
    const name = form.name.value.trim()
    const email = form.email.value.trim()
    const message = form.message.value.trim()

    if (!name || !email || !message) {
      setStatus('error')
      setErrorMessage('Please fill in all fields before sending.')
      return
    }

    try {
      const res = await fetch('https://formspree.io/f/movoqqzr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      })

      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
        setErrorMessage('Something went wrong. Please try again in a moment.')
      }
    } catch (err) {
      console.error(err)
      setStatus('error')
      setErrorMessage('Network error. Please check your connection and try again.')
    }
  }

  return (
    <section id="contact" className="border-b border-slate-800 bg-slate-950">
      <div className="section-container py-16 sm:py-20">
        <SectionHeader
          eyebrow="Contact"
          title="Let&apos;s build something"
          description="If you think I could be a good fit for your team or project, feel free to reach out. I&apos;m open to internships, junior roles, and interesting collaborations."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left info card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
            className="glass-panel rounded-3xl p-5"
          >
            <h3 className="text-sm font-semibold text-slate-50 sm:text-base">
              Quick reach-out
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              You can drop me an email directly or connect via LinkedIn / GitHub. I&apos;ll get
              back as soon as I can.
            </p>

            <div className="mt-4 space-y-3 text-sm">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Email
                </p>
                <a
                  href="mailto:prasanthkverma4676@gmail.com"
                  className="mt-1 inline-flex items-center gap-2 text-slate-100 underline-offset-4 hover:underline"
                >
                  prasanthkverma4676@gmail.com
                </a>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                    GitHub
                  </p>
                  <a
                    href="https://github.com/your-username"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex items-center gap-2 text-slate-100 underline-offset-4 hover:underline"
                  >
                    github.com/your-username
                  </a>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                    LinkedIn
                  </p>
                  <a
                    href="https://linkedin.com/in/your-username"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex items-center gap-2 text-slate-100 underline-offset-4 hover:underline"
                  >
                    linkedin.com/in/your-username
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right form card */}
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="glass-panel rounded-3xl p-5 space-y-4"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-xs font-medium text-slate-200">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none ring-cyan-400/40 transition focus:border-cyan-400 focus:ring-2"
                placeholder="Your name"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-xs font-medium text-slate-200">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none ring-cyan-400/40 transition focus:border-cyan-400 focus:ring-2"
                placeholder="you@example.com"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-xs font-medium text-slate-200">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="resize-none rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none ring-cyan-400/40 transition focus:border-cyan-400 focus:ring-2"
                placeholder="Tell me a bit about what you&apos;re building or looking for."
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className={`inline-flex w-full items-center justify-center rounded-full bg-gradient-to-tr from-cyan-500 to-emerald-400 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-glow transition hover:-translate-y-0.5 hover:brightness-110 ${
                status === 'sending' ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {status === 'sending' ? 'Sending...' : 'Send message'}
            </button>

            {status === 'success' && (
              <p className="text-[11px] text-emerald-400 mt-1">
                ✅ Message sent! I&apos;ll check my inbox shortly.
              </p>
            )}
            {status === 'error' && (
              <p className="text-[11px] text-red-400 mt-1">
                {errorMessage || 'Something went wrong. Please try again.'}
              </p>
            )}
            {status === 'idle' && (
              <p className="text-[11px] text-slate-500">
                This form sends your message directly to my email using Formspree.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
