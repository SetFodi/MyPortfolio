import { useState, useEffect } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Logo from '../components/Logo'
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'

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

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    setSubmitSuccess("Message sent successfully! I'll be in touch soon.")
    reset()
    setIsSubmitting(false)
  }

  const contactMethods = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'lukafartenadze2004@gmail.com',
      link: 'mailto:lukafartenadze2004@gmail.com',
      action: 'Copy'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Tbilisi, Georgia',
      link: null,
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'SetFodi',
      link: 'https://github.com/SetFodi',
      action: 'Visit'
    }
  ]

  return (
    <div className="bg-transparent text-white selection:bg-purple-500/30 selection:text-white min-h-screen flex flex-col">
      <Head>
        <title>Contact | Luka Partenadze</title>
        <meta name="description" content="Get in touch for collaborations or freelance work." />
      </Head>

      <Logo />
      <Navbar />

      <main className="pt-20 pb-32 flex-grow">
        <div className="px-6 md:px-12 max-w-7xl mx-auto">

          {/* HEADER */}
          <div className="max-w-3xl mb-24">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Let's start a <br />
              <span className="text-purple-400">conversation.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-white/60 leading-relaxed max-w-xl"
            >
              Interested in working together? Feel free to drop me a line about your project.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            {/* LEFT COLUMN - FORM */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/40 uppercase tracking-wider">Name</label>
                      <input
                        {...register('name', { required: 'Name is required' })}
                        className="w-full bg-transparent border-b border-white/20 py-4 text-lg focus:border-purple-500 transition-colors outline-none placeholder-white/20"
                        placeholder="John Doe"
                      />
                      {errors.name && <span className="text-red-400 text-sm">{errors.name.message}</span>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/40 uppercase tracking-wider">Email</label>
                      <input
                        {...register('email', {
                          required: 'Email is required',
                          pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' }
                        })}
                        className="w-full bg-transparent border-b border-white/20 py-4 text-lg focus:border-purple-500 transition-colors outline-none placeholder-white/20"
                        placeholder="john@example.com"
                      />
                      {errors.email && <span className="text-red-400 text-sm">{errors.email.message}</span>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/40 uppercase tracking-wider">Subject</label>
                    <input
                      {...register('subject', { required: 'Subject is required' })}
                      className="w-full bg-transparent border-b border-white/20 py-4 text-lg focus:border-purple-500 transition-colors outline-none placeholder-white/20"
                      placeholder="Project Proposal"
                    />
                    {errors.subject && <span className="text-red-400 text-sm">{errors.subject.message}</span>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/40 uppercase tracking-wider">Message</label>
                    <textarea
                      {...register('message', { required: 'Message is required' })}
                      rows={4}
                      className="w-full bg-transparent border-b border-white/20 py-4 text-lg focus:border-purple-500 transition-colors outline-none resize-none placeholder-white/20"
                      placeholder="Tell me about your project..."
                    />
                    {errors.message && <span className="text-red-400 text-sm">{errors.message.message}</span>}
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-40 h-14 bg-white text-black rounded-full font-medium text-base overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-purple-500/20"
                  >
                    {/* Text State */}
                    <div className={`relative z-10 flex items-center justify-center gap-2 transition-all duration-500 ${isSubmitting ? 'opacity-0' : 'group-hover:translate-y-10 group-hover:opacity-0'}`}>
                      <span>Send Message</span>
                    </div>

                    {/* Hover Flight State */}
                    <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${isSubmitting ? 'opacity-0' : 'translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100'}`}>
                      <FaPaperPlane className="text-2xl animate-float-fly" />
                    </div>

                    {/* Sending State */}
                    {isSubmitting && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <FaPaperPlane className="text-2xl animate-fly-away" />
                      </div>
                    )}
                  </button>

                  {submitSuccess && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 text-green-400"
                    >
                      {submitSuccess}
                    </motion.p>
                  )}
                </div>
              </form>
            </motion.div>

            {/* RIGHT COLUMN - INFO */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-12 lg:pl-12"
            >
              <div className="grid gap-8">
                {contactMethods.map((method, i) => (
                  <div key={i} className="flex items-start gap-6 group">
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-purple-500/50 transition-colors">
                      <method.icon className="text-xl text-white/60 group-hover:text-purple-400 transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-white/40 uppercase tracking-wider mb-1">{method.label}</h3>
                      {method.link ? (
                        <a href={method.link} className="text-xl text-white hover:text-purple-400 transition-colors block">
                          {method.value}
                        </a>
                      ) : (
                        <p className="text-xl text-white">{method.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold mb-4">Socials</h3>
                <div className="flex gap-4">
                  {[
                    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/luka-partenadze-394675348/' },
                    { icon: FaGithub, href: 'https://github.com/SetFodi' },
                    { icon: FaInstagram, href: 'https://www.instagram.com/fartenadzeluka/' }
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 hover:scale-110"
                    >
                      <social.icon className="text-xl" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}
