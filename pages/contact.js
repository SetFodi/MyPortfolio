import { useState, useEffect } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Logo from '../components/Logo'
import FlightButton from '../components/FlightButton'
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaPaperPlane as Send } from 'react-icons/fa'

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
    <div className="bg-transparent text-foreground selection:bg-purple-500/30 selection:text-white min-h-screen flex flex-col transition-colors duration-300">
      <Head>
        <title>Contact | Luka Partenadze</title>
        <meta name="description" content="Get in touch for collaborations or freelance work." />
      </Head>

      <Logo />
      <Navbar />

      <main className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto w-full relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* LEFT COLUMN - TEXT & FORM */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-foreground">
                Get in <span className="text-purple-400">Touch.</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl mb-12">
                Have a project in mind or just want to chat? I'm currently open to new opportunities.
              </p>
            </motion.div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                  <label className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2 block">Name</label>
                  <input
                    {...register('name', { required: 'Name is required' })}
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-transparent border-b dark:border-white/20 border-gray-300 py-3 dark:text-white text-black placeholder:text-muted-foreground/30 focus:outline-none focus:border-purple-500 transition-colors"
                  />
                  {errors.name && <span className="text-red-400 text-sm">{errors.name.message}</span>}
                </div>
                <div className="group">
                  <label className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2 block">Email</label>
                  <input
                    {...register('email', {
                      required: 'Email is required',
                      pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' }
                    })}
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-transparent border-b dark:border-white/20 border-gray-300 py-3 dark:text-white text-black placeholder:text-muted-foreground/30 focus:outline-none focus:border-purple-500 transition-colors"
                  />
                  {errors.email && <span className="text-red-400 text-sm">{errors.email.message}</span>}
                </div>
              </div>

              <div className="group">
                <label className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2 block">Subject</label>
                <select
                  {...register('subject', { required: 'Subject is required' })}
                  className="w-full bg-transparent border-b dark:border-white/20 border-gray-300 py-3 dark:text-white text-black focus:outline-none focus:border-purple-500 transition-colors"
                >
                  <option className="bg-background text-foreground">General Inquiry</option>
                  <option className="bg-background text-foreground">Project Proposal</option>
                  <option className="bg-background text-foreground">Freelance</option>
                  <option className="bg-background text-foreground">Other</option>
                </select>
                {errors.subject && <span className="text-red-400 text-sm">{errors.subject.message}</span>}
              </div>

              <div className="group">
                <label className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2 block">Message</label>
                <textarea
                  {...register('message', { required: 'Message is required' })}
                  rows="4"
                  placeholder="Tell me about your project..."
                  className="w-full bg-transparent border-b dark:border-white/20 border-gray-300 py-3 dark:text-white text-black placeholder:text-muted-foreground/30 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                ></textarea>
                {errors.message && <span className="text-red-400 text-sm">{errors.message.message}</span>}
              </div>

              <FlightButton
                type="submit"
                disabled={isSubmitting}
                text={isSubmitting ? 'Sending...' : 'Send Message'}
                icon={Send}
                className="bg-foreground text-background w-56 border dark:border-white/20 border-gray-300"
              />

              {submitSuccess && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 text-green-400"
                >
                  {submitSuccess}
                </motion.p>
              )}
              {submitError && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 text-red-400"
                >
                  {submitError}
                </motion.p>
              )}
            </form>
          </div>

          {/* RIGHT COLUMN - CONTACT INFO & SOCIALS */}
          <div className="lg:pl-12 flex flex-col justify-between">
            <div className="grid grid-cols-1 gap-6 mb-12">
              {contactMethods.map((method, i) => (
                <a
                  key={i}
                  href={method.link}
                  className="flex items-center gap-6 p-6 rounded-2xl dark:bg-white/5 bg-gray-50 border dark:border-white/5 border-gray-200 hover:dark:border-white/20 hover:border-gray-300 transition-all group"
                >
                  <div className="h-12 w-12 rounded-full dark:bg-white/5 bg-white flex items-center justify-center border dark:border-white/5 border-gray-100">
                    <method.icon className="text-xl text-muted-foreground group-hover:text-purple-400 transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground/50 uppercase tracking-wider mb-1">{method.label}</h3>
                    <p className="text-lg text-foreground">{method.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="p-8 rounded-3xl dark:bg-white/5 bg-gray-50 border dark:border-white/5 border-gray-200">
              <h3 className="text-xl font-bold mb-6 text-foreground">Connect on Social</h3>
              <div className="flex flex-wrap gap-4">
                {[
                  { name: 'GitHub', icon: FaGithub, link: 'https://github.com/SetFodi' },
                  { name: 'LinkedIn', icon: FaLinkedin, link: 'https://www.linkedin.com/in/luka-partenadze-394675348/' },
                  { name: 'Instagram', icon: FaInstagram, link: 'https://www.instagram.com/fartenadzeluka/' },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-5 py-3 rounded-full dark:bg-black/20 bg-white border dark:border-white/10 border-gray-200 hover:dark:bg-white/10 hover:bg-gray-100 transition-all group"
                  >
                    <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors" />
                    <span className="text-foreground group-hover:text-purple-400 transition-colors">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>

      </main>
      <Footer />
    </div>
  )
}
