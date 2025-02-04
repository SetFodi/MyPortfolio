'use client'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import { 
  CodeBracketIcon, 
  LightBulbIcon, 
  ServerIcon, 
  ArrowPathIcon, 
  DevicePhoneMobileIcon,
  DocumentTextIcon  
} from '@heroicons/react/24/outline'

export default function About() {
  return (
    <div className="bg-white dark:bg-black">
      <Head>
        <title>About - SetFodi Portfolio</title>
        <meta name="description" content="About SetFodi, Junior Full Stack Developer" />
      </Head>

      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 overflow-hidden">
          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              About Me
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              I'm SetFodi, a passionate Junior Full Stack Developer who loves turning ideas into elegant, scalable web applications. My journey in coding began with curiosity and has grown into a dedication to building digital experiences that are as innovative as they are user-friendly.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center">
              <img 
                src="/images/profile.jpg" 
                alt="SetFodi Profile" 
                className="w-40 h-40 rounded-full object-cover shadow-xl" 
              />
            </motion.div>
          </div>
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10 pointer-events-none"></div>
        </section>

        {/* Additional Info Section */}
        <section className="py-20 bg-white dark:bg-black">
          <div className="container mx-auto px-6">
            {/* My Journey */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }} 
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">My Journey</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                My coding journey started as a curious exploration into the world of technology. From building small scripts to developing creative projects, every step has been a learning experience that shaped my approach to problem solving and design. Today, I strive to blend functionality with aesthetics, ensuring every project works seamlessly while delighting its users.
              </p>
            </motion.div>
            {/* Skills & Technologies */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }} 
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">Skills & Technologies</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <li className="flex items-center space-x-3">
                  <motion.div whileHover={{ scale: 1.2 }} className="w-8 h-8 text-blue-600">
                    <CodeBracketIcon />
                  </motion.div>
                  <span className="text-lg text-gray-600 dark:text-gray-300">JavaScript (ES6+), TypeScript</span>
                </li>
                <li className="flex items-center space-x-3">
                  <motion.div whileHover={{ scale: 1.2 }} className="w-8 h-8 text-yellow-500">
                    <LightBulbIcon />
                  </motion.div>
                  <span className="text-lg text-gray-600 dark:text-gray-300">React, Next.js & Modern Front-end Libraries</span>
                </li>
                <li className="flex items-center space-x-3">
                  <motion.div whileHover={{ scale: 1.2 }} className="w-8 h-8 text-green-600">
                    <ServerIcon />
                  </motion.div>
                  <span className="text-lg text-gray-600 dark:text-gray-300">Node.js, Express & RESTful API Development</span>
                </li>
                <li className="flex items-center space-x-3">
                  <motion.div whileHover={{ scale: 1.2 }} className="w-8 h-8 text-indigo-600">
                    <ArrowPathIcon />
                  </motion.div>
                  <span className="text-lg text-gray-600 dark:text-gray-300">Version Control with Git</span>
                </li>
                <li className="flex items-center space-x-3">
                  <motion.div whileHover={{ scale: 1.2 }} className="w-8 h-8 text-pink-600">
                    <DevicePhoneMobileIcon />
                  </motion.div>
                  <span className="text-lg text-gray-600 dark:text-gray-300">Responsive Design with Tailwind CSS</span>
                </li>
                <li className="flex items-center space-x-3">
                  <motion.div whileHover={{ scale: 1.2 }} className="w-8 h-8 text-red-600">
                    <DocumentTextIcon />
                  </motion.div>
                  <span className="text-lg text-gray-600 dark:text-gray-300">PHP, Laravel & C#</span>
                </li>
              </ul>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <p className="text-lg text-gray-600 dark:text-gray-300">
                I'm continuously learning and evolving in this fast-paced field, always ready to take on new challenges and collaborate on innovative projects.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
