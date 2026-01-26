'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Send, CheckCircle2, AlertCircle } from 'lucide-react'
import siteMetadata from '@/data/siteMetadata'

const appleEase = [0.25, 0.1, 0.25, 1] as const

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-12">{children}</div>
}

function Reveal({
  children,
  delay = 0,
  y = 18,
}: {
  children: React.ReactNode
  delay?: number
  y?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: appleEase, delay }}
    >
      {children}
    </motion.div>
  )
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    // TODO: Implement actual form submission logic
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 3000)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <main className="relative w-full bg-white text-gray-900 dark:bg-black dark:text-white">
      {/* Hero Section */}
      <section className="relative bg-white pt-28 pb-20 dark:bg-black sm:pt-32">
        {/* background soft blobs */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-200/25 blur-3xl dark:bg-cyan-500/10" />
          <div className="absolute top-40 right-[-120px] h-[420px] w-[420px] rounded-full bg-blue-200/20 blur-3xl dark:bg-blue-500/10" />
        </div>

        <Container>
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Contactez-nous
              </h1>
              <p className="mt-5 max-w-xl mx-auto text-base leading-relaxed text-gray-600 sm:text-lg dark:text-gray-300">
                Discutons de vos projets d'infrastructure, de cybersécurité ou de toute question technique
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-20 dark:bg-black">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <Reveal>
              <div className="space-y-8">
                <div>
                  <h2 className="mb-6 text-3xl font-extrabold text-gray-900 dark:text-white">
                    Informations de contact
                  </h2>
                  <p className="mb-8 text-base leading-relaxed text-gray-600 dark:text-gray-300">
                    N'hésitez pas à nous contacter pour discuter de vos besoins en infrastructure, cybersécurité ou développement.
                  </p>
                </div>

                <div className="space-y-6">
                  {siteMetadata.email && (
                    <motion.a
                      href={`mailto:${siteMetadata.email}`}
                      className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:border-cyan-500 hover:shadow-lg dark:border-gray-800 dark:bg-gray-950 dark:hover:border-cyan-400"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-400">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white">Email</h3>
                        <p className="text-gray-600 dark:text-gray-300">{siteMetadata.email}</p>
                      </div>
                    </motion.a>
                  )}

                  {siteMetadata.github && (
                    <motion.a
                      href={siteMetadata.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:border-cyan-500 hover:shadow-lg dark:border-gray-800 dark:bg-gray-950 dark:hover:border-cyan-400"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-400">
                        <Github className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white">GitHub</h3>
                        <p className="text-gray-600 dark:text-gray-300">Voir nos projets</p>
                      </div>
                    </motion.a>
                  )}

                  {siteMetadata.linkedin && (
                    <motion.a
                      href={siteMetadata.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:border-cyan-500 hover:shadow-lg dark:border-gray-800 dark:bg-gray-950 dark:hover:border-cyan-400"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-400">
                        <Linkedin className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white">LinkedIn</h3>
                        <p className="text-gray-600 dark:text-gray-300">Connectez-vous avec nous</p>
                      </div>
                    </motion.a>
                  )}
                </div>
              </div>
            </Reveal>

            {/* Contact Form */}
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg dark:border-gray-800 dark:bg-gray-950 sm:p-10">
                <h2 className="mb-6 text-3xl font-extrabold text-gray-900 dark:text-white">
                  Envoyer un message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Nom
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:focus:border-cyan-400"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:focus:border-cyan-400"
                      placeholder="votre@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:focus:border-cyan-400"
                      placeholder="Votre message..."
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={status === 'sending'}
                    className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-4 font-bold text-white shadow-lg transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: status !== 'sending' ? 1.02 : 1 }}
                    whileTap={{ scale: status !== 'sending' ? 0.98 : 1 }}
                  >
                    {status === 'sending' ? (
                      <>
                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        <span>Envoi en cours...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Envoyer le message</span>
                      </>
                    )}
                  </motion.button>
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 rounded-xl bg-green-50 p-4 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                    >
                      <CheckCircle2 className="h-5 w-5" />
                      <p className="font-semibold">Message envoyé avec succès !</p>
                    </motion.div>
                  )}
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 rounded-xl bg-red-50 p-4 text-red-700 dark:bg-red-900/20 dark:text-red-400"
                    >
                      <AlertCircle className="h-5 w-5" />
                      <p className="font-semibold">Échec de l'envoi. Veuillez réessayer.</p>
                    </motion.div>
                  )}
                </form>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </main>
  )
}
