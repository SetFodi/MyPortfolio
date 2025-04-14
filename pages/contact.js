'use client'
import Head from 'next/head'
import { useForm } from 'react-hook-form'
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from 'framer-motion'
import { useState, useRef } from 'react'
import Navbar from '../components/Navbar' // Assuming Navbar is in components
import Footer from '../components/Footer' // Assuming Footer is in components
import {
  EnvelopeIcon,
  MapPinIcon,
  ShareIcon,
  PaperAirplaneIcon,
  ExclamationCircleIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link' // Import Link for social icons if needed

// --- Variants for Animations ---
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

// --- Enhanced Particles (Subtle floating dots) ---
const FloatingParticles = () => {
  const particleCount = 25 // Reduced count for subtlety
  const particles = Array.from({ length: particleCount }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2.5 + 1, // Smaller size range
    duration: Math.random() * 5 + 8, // Longer, varied duration
    delay: Math.random() * 3,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-br from-blue-400 to-purple-400 dark:from-blue-600 dark:to-purple-600 opacity-10 dark:opacity-15" // Gradient dots
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, Math.random() * 40 - 20, 0], // Random vertical drift
            x: [0, Math.random() * 30 - 15, 0], // Random horizontal drift
            scale: [1, 1.1, 1], // Subtle pulse
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  )
}

// --- Enhanced Form Input ---
const FormInput = ({
  label,
  type = 'text',
  register,
  name,
  rules,
  errors,
  placeholder = '',
  isFocused,
  setIsFocused,
}) => {
  const hasError = !!errors[name]

  return (
    <motion.div
      className="mb-6 relative"
      variants={fadeIn} // Use fadeIn variant from parent stagger
    >
      <label
        htmlFor={name}
        className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2 transition-colors duration-300"
      >
        {label}
      </label>
      <div className="relative">
        {type === 'textarea' ? (
          <textarea
            id={name}
            {...register(name, rules)}
            rows="5"
            placeholder={placeholder}
            onFocus={() => setIsFocused(name)}
            onBlur={() => setIsFocused(null)}
            className={`w-full px-4 py-3 rounded-lg border-2 bg-white dark:bg-gray-800/50 
                        text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500
                        focus:outline-none transition-all duration-300 ease-in-out
                        ${
                          hasError
                            ? 'border-red-400 focus:border-red-500 focus:ring-red-500/30'
                            : 'border-gray-200 dark:border-gray-600 focus:border-purple-500 focus:ring-purple-500/30'
                        }
                        focus:ring-2`} // Added focus:ring
          />
        ) : (
          <input
            id={name}
            type={type}
            {...register(name, rules)}
            placeholder={placeholder}
            onFocus={() => setIsFocused(name)}
            onBlur={() => setIsFocused(null)}
            className={`w-full px-4 py-3 rounded-lg border-2 bg-white dark:bg-gray-800/50 
                        text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500
                        focus:outline-none transition-all duration-300 ease-in-out
                        ${
                          hasError
                            ? 'border-red-400 focus:border-red-500 focus:ring-red-500/30'
                            : 'border-gray-200 dark:border-gray-600 focus:border-purple-500 focus:ring-purple-500/30'
                        }
                        focus:ring-2`} // Added focus:ring
          />
        )}

        {/* Animated Underline/Border Effect */}
        <motion.div
          className={`absolute bottom-0 left-0 h-0.5 bg-purple-500 ${
            hasError ? 'bg-red-500' : 'bg-purple-500'
          }`}
          initial={{ width: '0%' }}
          animate={{ width: isFocused === name ? '100%' : '0%' }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
      </div>

      {/* Error message */}
      <AnimatePresence>
        {hasError && (
          <motion.p
            initial={{ opacity: 0, y: -5, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -5, height: 0 }}
            transition={{ duration: 0.3 }}
            className="text-red-500 text-xs mt-1 flex items-center"
          >
            <ExclamationCircleIcon className="w-4 h-4 mr-1" />
            {errors[name].message}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// --- Enhanced Status Message ---
const StatusMessage = ({ success, error }) => {
  const isVisible = success || error
  const message = success || error
  const isSuccess = !!success

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className={`mt-6 p-4 rounded-lg border ${
            isSuccess
              ? 'bg-green-50 border-green-300 dark:bg-green-900/30 dark:border-green-700'
              : 'bg-red-50 border-red-300 dark:bg-red-900/30 dark:border-red-700'
          }`}
        >
          <div className="flex items-center">
            {isSuccess ? (
              <CheckCircleIcon className="w-5 h-5 mr-3 text-green-500" />
            ) : (
              <ExclamationCircleIcon className="w-5 h-5 mr-3 text-red-500" />
            )}
            <p
              className={`text-sm font-medium ${
                isSuccess
                  ? 'text-green-700 dark:text-green-300'
                  : 'text-red-700 dark:text-red-300'
              }`}
            >
              {message}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// --- Enhanced Contact Info Card ---
const ContactInfoCard = ({ icon: Icon, title, value, link, index }) => {
  const cardContent = (
    <motion.div
      whileHover={{
        y: -6,
        boxShadow: '0 15px 30px rgba(0, 0, 0, 0.12)',
      }}
      className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg p-6 rounded-xl shadow-lg flex flex-col items-center text-center transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 h-full" // Added h-full
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 + index * 0.15, duration: 0.5 }} // Staggered delay
    >
      <div className="p-3 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 rounded-full mb-4 shadow-inner">
        <Icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
        {title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 break-words">
        {value}
      </p>
    </motion.div>
  )

  // If it's a link (like email), wrap in an anchor tag
  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block h-full">
        {cardContent}
      </a>
    )
  }
  // Otherwise, just render the div
  return cardContent
}

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onTouched' }) // Validate on blur

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState('')
  const [submitError, setSubmitError] = useState('')
  const [focusedField, setFocusedField] = useState(null) // Track focused field

  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]) // Background scale effect

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
        const errorData = await res.json().catch(() => ({})) // Try to parse error
        throw new Error(
          errorData.message ||
            'Failed to send message. Please check your details or try again later.'
        )
      }

      setSubmitSuccess(
        "Message sent successfully! I'll be in touch soon. ✨"
      )
      reset()
      setFocusedField(null) // Reset focus state
    } catch (error) {
      console.error('Contact form error:', error)
      setSubmitError(
        error.message || 'An unexpected error occurred. Please try again.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      title: 'Email Me',
      value: 'lukafartenadze2004@gmail.com',
      icon: EnvelopeIcon,
      link: 'mailto:lukafartenadze2004@gmail.com',
    },
    {
      title: 'Location',
      value: 'Tbilisi, Georgia',
      icon: MapPinIcon,
    },
    {
      title: 'Socials',
      value: 'Connect on LinkedIn/GitHub', // Or list icons directly
      icon: ShareIcon,
      // Optional: Add a link to a specific profile or keep it general
      // link: "https://www.linkedin.com/in/luka-partenadze-394675348/"
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black relative overflow-hidden transition-colors duration-500">
      <Head>
        <title>Contact - Luka Partenadze</title>
        <meta
          name="description"
          content="Get in touch with Luka Partenadze, Junior Full Stack Developer. Let's discuss your project or ideas."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Background Elements */}
      <motion.div
        style={{ scale }}
        className="absolute inset-0 -z-10 opacity-50 dark:opacity-70"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-blue-900/30 dark:via-purple-900/40 dark:to-gray-900/50" />
      </motion.div>
      <FloatingParticles />

      <Navbar />

      <main className="py-24 md:py-32">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-4 md:mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              Let's Connect
            </motion.h1>
            <motion.p
              className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            >
              Have a project in mind, a question, or just want to say hello?
              Drop me a line!
            </motion.p>
          </div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="max-w-xl mx-auto"
          >
            <motion.div
              className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg p-8 md:p-10 rounded-2xl shadow-xl relative z-10 border border-gray-200 dark:border-gray-700"
              whileHover={{ boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)' }}
              transition={{ duration: 0.3 }}
            >
              {/* Form Header Deco */}
              <div className="mb-8 flex items-center justify-center space-x-2">
                <div className="w-10 h-1.5 bg-blue-500 rounded-full"></div>
                <div className="w-10 h-1.5 bg-purple-500 rounded-full"></div>
                <div className="w-10 h-1.5 bg-pink-500 rounded-full"></div>
              </div>

              <motion.form
                onSubmit={handleSubmit(onSubmit)}
                variants={staggerContainer} // Apply stagger to form inputs
                initial="hidden"
                animate="visible"
              >
                <FormInput
                  label="Full Name"
                  register={register}
                  name="name"
                  rules={{ required: 'Please enter your name' }}
                  errors={errors}
                  placeholder="e.g., Jane Doe"
                  isFocused={focusedField === 'name'}
                  setIsFocused={setFocusedField}
                />

                <FormInput
                  label="Email Address"
                  type="email"
                  register={register}
                  name="email"
                  rules={{
                    required: 'An email address is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Please enter a valid email address',
                    },
                  }}
                  errors={errors}
                  placeholder="your.email@example.com"
                  isFocused={focusedField === 'email'}
                  setIsFocused={setFocusedField}
                />

                <FormInput
                  label="Your Message"
                  type="textarea"
                  register={register}
                  name="message"
                  rules={{
                    required: 'Please write a message',
                    minLength: {
                      value: 10,
                      message: 'Message should be at least 10 characters',
                    },
                    maxLength: {
                      value: 1000, // Add a max length
                      message: 'Message cannot exceed 1000 characters',
                    },
                  }}
                  errors={errors}
                  placeholder="What's on your mind?"
                  isFocused={focusedField === 'message'}
                  setIsFocused={setFocusedField}
                />

                <motion.button
                  whileHover={{
                    scale: 1.03,
                    boxShadow: '0 10px 25px rgba(124, 58, 237, 0.3)',
                  }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 
                                text-white py-3 px-6 rounded-lg font-semibold text-lg transition-all duration-300 ease-in-out 
                                flex items-center justify-center space-x-2
                                ${
                                  isSubmitting
                                    ? 'opacity-70 cursor-not-allowed'
                                    : 'hover:shadow-lg'
                                }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <PaperAirplaneIcon className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>

                {/* Status message */}
                <StatusMessage success={submitSuccess} error={submitError} />
              </motion.form>
            </motion.div>
          </motion.div>

          {/* Contact info cards */}
          <div className="mt-16 md:mt-20 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-8 text-center">
                Other Ways to Reach Me
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {contactInfo.map((item, index) => (
                  <ContactInfoCard
                    key={index}
                    icon={item.icon}
                    title={item.title}
                    value={item.value}
                    link={item.link}
                    index={index} // Pass index for stagger
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Contact
