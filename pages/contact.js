'use client'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact() {
  const [mounted, setMounted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState('')
  const [submitError, setSubmitError] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    setSubmitSuccess('')
    setSubmitError('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        throw new Error('Failed to send message')
      }

      setSubmitSuccess("Message sent successfully! I'll be in touch soon.")
      reset()
    } catch (error) {
      setSubmitError('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      label: 'Email',
      value: 'lukafartenadze2004@gmail.com',
      href: 'mailto:lukafartenadze2004@gmail.com'
    },
    {
      label: 'Location',
      value: 'Tbilisi, Georgia'
    },
    {
      label: 'GitHub',
      value: 'github.com/SetFodi',
      href: 'https://github.com/SetFodi'
    }
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Head>
        <title>Contact - Luka Partenadze</title>
        <meta name="description" content="Get in touch with Luka Partenadze" />
      </Head>

      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <p className="text-sm tracking-widest text-white/40 uppercase mb-4">Get in Touch</p>
              <h1 className="text-5xl md:text-7xl font-light mb-6">
                Let's Talk
              </h1>
              <p className="text-lg text-white/60 leading-relaxed">
                Have a project in mind or just want to chat? 
                Drop me a message and I'll get back to you as soon as possible.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label className="block text-sm tracking-wider text-white/60 mb-2">
                      NAME
                    </label>
                    <input
                      {...register('name', { required: 'Name is required' })}
                      type="text"
                      className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors"
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm tracking-wider text-white/60 mb-2">
                      EMAIL
                    </label>
                    <input
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address',
                        },
                      })}
                      type="email"
                      className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors"
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm tracking-wider text-white/60 mb-2">
                      MESSAGE
                    </label>
                    <textarea
                      {...register('message', {
                        required: 'Message is required',
                        minLength: {
                          value: 10,
                          message: 'Message must be at least 10 characters',
                        },
                      })}
                      rows="6"
                      className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors resize-none"
                      placeholder="Your message..."
                    />
                    {errors.message && (
                      <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-white text-black text-sm tracking-wide hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                  </motion.button>

                  {submitSuccess && (
                    <p className="text-green-400 text-sm">{submitSuccess}</p>
                  )}
                  {submitError && (
                    <p className="text-red-400 text-sm">{submitError}</p>
                  )}
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-12"
              >
                <div>
                  <h2 className="text-2xl font-light mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    {contactInfo.map((info, idx) => (
                      <div key={idx}>
                        <p className="text-sm tracking-wider text-white/40 mb-1">
                          {info.label}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/80 hover:text-white transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-white/80">{info.value}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 border-t border-white/10">
                  <h3 className="text-sm tracking-wider text-white/40 mb-4">SOCIAL LINKS</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/SetFodi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white transition-colors"
                    >
                      GitHub
                    </a>
                    <a
                      href="https://www.linkedin.com/in/luka-partenadze-394675348/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white transition-colors"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://www.instagram.com/fartenadzeluka/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white transition-colors"
                    >
                      Instagram
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  )
}