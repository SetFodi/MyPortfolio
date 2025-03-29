'use client'
import Head from 'next/head'
import { useForm } from 'react-hook-form'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

// Decorative particles component
const Particles = () => {
  const particleCount = 20
  const particles = Array.from({ length: particleCount }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 2
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-blue-400 dark:bg-blue-600 opacity-20"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay
          }}
        />
      ))}
    </div>
  )
}

// Form input component with animations
const FormInput = ({ label, type = "text", register, name, rules, errors, placeholder = "" }) => {
  const inputRef = useRef(null)
  const [isFocused, setIsFocused] = useState(false)

  return (
    <motion.div 
      className="mb-6 relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
        {label}
      </label>
      <div className="relative">
        {type === "textarea" ? (
          <textarea
            {...register(name, rules)}
            ref={inputRef}
            rows="5"
            placeholder={placeholder}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`w-full px-4 py-2 rounded-lg border bg-white dark:bg-gray-700 focus:outline-none transition-all duration-300 ${
              errors[name] 
                ? 'border-red-500' 
                : 'border-gray-200 dark:border-gray-600 focus:border-purple-500'
            }`}
          />
        ) : (
          <input
            type={type}
            {...register(name, rules)}
            ref={inputRef}
            placeholder={placeholder}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`w-full px-4 py-2 rounded-lg border bg-white dark:bg-gray-700 focus:outline-none transition-all duration-300 ${
              errors[name] 
                ? 'border-red-500' 
                : 'border-gray-200 dark:border-gray-600 focus:border-purple-500'
            }`}
          />
        )}
        
        {/* Animated focus ring */}
        <AnimatePresence>
          {isFocused && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 border-2 border-purple-500 rounded-lg pointer-events-none"
              style={{ zIndex: -1 }}
            />
          )}
        </AnimatePresence>
      </div>
      
      {/* Error message */}
      <AnimatePresence>
        {errors[name] && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="text-red-500 text-sm mt-1"
          >
            {errors[name].message}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// Status message component
const StatusMessage = ({ success, error }) => {
  return (
    <AnimatePresence>
      {(success || error) && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className={`mt-6 p-4 rounded-lg ${
            success 
              ? 'bg-green-50 border border-green-200 dark:bg-green-900/20 dark:border-green-800' 
              : 'bg-red-50 border border-red-200 dark:bg-red-900/20 dark:border-red-800'
          }`}
        >
          <div className="flex items-center">
            <div className={`w-3 h-3 rounded-full mr-3 ${success ? 'bg-green-500' : 'bg-red-500'}`} />
            <p className={`text-sm font-medium ${
              success ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400'
            }`}>
              {success || error}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState('')
  const [submitError, setSubmitError] = useState('')

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    setSubmitSuccess('')
    setSubmitError('')

    try {
      // Simulate API call (replace with your actual API call)
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // POST the form data to the API route
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      if (!res.ok) {
        throw new Error('Failed to send the message. Please try again later.')
      }

      setSubmitSuccess('Your message has been sent successfully! I\'ll get back to you soon.')
      reset() // reset the form fields
    } catch (error) {
      setSubmitError(error.message || 'Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black relative overflow-hidden transition-colors duration-500">
      <Head>
        <title>Contact - Luka</title>
        <meta name="description" content="Contact Luka Partenadze, Full Stack Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Decorative elements */}
      <Particles />
      
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-blue-100/80 via-purple-100/80 to-pink-100/80 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          style={{
            backgroundSize: "200% 200%",
          }}
        />
      </div>
      
      {/* Decorative shapes */}
      <motion.div 
        className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-blue-300/10 dark:bg-blue-700/10"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 10, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-purple-300/10 dark:bg-purple-700/10"
        animate={{
          scale: [1.1, 1, 1.1],
          rotate: [0, -10, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <Navbar />

      <main className="py-20">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <motion.h1
              className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Let's Connect
            </motion.h1>
            <motion.p
              className="text-lg text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Have a project in mind or just want to say hello? I'd love to hear from you!
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-xl mx-auto"
          >
            {/* Card with subtle hover effect */}
            <motion.div 
              className="bg-white dark:bg-gray-800 p-8 md:p-10 rounded-2xl shadow-xl relative z-10 border border-gray-100 dark:border-gray-700"
              whileHover={{ boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.3 }}
            >
              {/* Form header */}
              <div className="mb-8 flex items-center justify-center">
                <div className="w-12 h-1 bg-blue-500 rounded-full"></div>
                <div className="w-12 h-1 bg-purple-500 rounded-full mx-2"></div>
                <div className="w-12 h-1 bg-pink-500 rounded-full"></div>
              </div>
              
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormInput 
                  label="Full Name"
                  register={register}
                  name="name"
                  rules={{ required: 'Name is required' }}
                  errors={errors}
                  placeholder="Your name"
                />
                
                <FormInput 
                  label="Email Address"
                  type="email"
                  register={register}
                  name="email"
                  rules={{
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  }}
                  errors={errors}
                  placeholder="your.email@example.com"
                />
                
                <FormInput 
                  label="Message"
                  type="textarea"
                  register={register}
                  name="message"
                  rules={{
                    required: 'Message is required',
                    minLength: {
                      value: 10,
                      message: 'Message must be at least 10 characters'
                    }
                  }}
                  errors={errors}
                  placeholder="What would you like to discuss?"
                />

                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: "0 10px 20px rgba(124, 58, 237, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg font-medium transition-all duration-300 ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </div>
                  ) : 'Send Message'}
                </motion.button>

                {/* Status message */}
                <StatusMessage success={submitSuccess} error={submitError} />
              </form>
            </motion.div>
          </motion.div>
          
          {/* Contact info cards */}
          <div className="mt-16 max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6 text-center">
                Other Ways to Connect
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { title: "Email", value: "lukafartenadze2004@gmail.com", icon: "📧" },
                  { title: "Location", value: "Tbilisi, Georgia", icon: "🌍" },
                  { title: "Social", value: "Follow me on Socials", icon: "💬" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ 
                      y: -5, 
                      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
                      backgroundColor: "rgba(255, 255, 255, 0.8)",
                    }}
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md flex flex-col items-center text-center transition-all duration-300 border border-gray-100 dark:border-gray-700"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + (index * 0.1) }}
                  >
                    <span className="text-3xl mb-3">{item.icon}</span>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {item.value}
                    </p>
                  </motion.div>
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
