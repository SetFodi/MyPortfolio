'use client'
import Head from 'next/head'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

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

      setSubmitSuccess('Your message has been sent successfully!')
      reset() // reset the form fields
    } catch (error) {
      setSubmitError(error.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black relative overflow-hidden">
      <Head>
        <title>Contact - Luka</title>
        <meta name="description" content="Contact SetFodi, Full Stack Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Animated Gradient Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-900 -z-10"
      />

      <Navbar />

      <main className="py-20">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-2xl mx-auto text-center mb-12">
            <motion.h1
              className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
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

          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-xl mx-auto bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-2xl"
          >
            <div className="mb-6">
              <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                Full Name
              </label>
              <input
                {...register('name', { required: 'Name is required' })}
                className={`w-full px-4 py-2 rounded-lg border focus:outline-none transition-colors ${errors.name ? 'border-red-500' : 'border-gray-200 dark:border-gray-700 focus:border-blue-500'
                  }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
                className={`w-full px-4 py-2 rounded-lg border focus:outline-none transition-colors ${errors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-700 focus:border-blue-500'
                  }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                {...register('message', {
                  required: 'Message is required',
                  minLength: {
                    value: 20,
                    message: 'Message must be at least 20 characters'
                  }
                })}
                rows="5"
                className={`w-full px-4 py-2 rounded-lg border focus:outline-none transition-colors ${errors.message ? 'border-red-500' : 'border-gray-200 dark:border-gray-700 focus:border-blue-500'
                  }`}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
              )}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-blue-600 text-white py-3 rounded-lg font-medium transition-colors ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-blue-700'
                }`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>

            {/* Display success or error message */}
            {submitSuccess && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 text-green-600 text-center font-medium"
              >
                {submitSuccess}
              </motion.p>
            )}
            {submitError && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 text-red-600 text-center font-medium"
              >
                {submitError}
              </motion.p>
            )}
          </motion.form>
        </motion.section>
      </main>

      <Footer />
    </div>
  )
}

export default Contact
