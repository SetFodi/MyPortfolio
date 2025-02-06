'use client'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  CodeBracketIcon,
  LightBulbIcon,
  ServerIcon,
  ArrowPathIcon,
  DevicePhoneMobileIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline'
import Tilt from 'react-parallax-tilt'

const floatingVariants = {
  float: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

const skillItems = [
  { icon: CodeBracketIcon, color: 'blue', text: 'JavaScript (ES6+), TypeScript, Python' },
  { icon: LightBulbIcon, color: 'yellow', text: 'React, Next.js, Angular & Modern Front-end Libraries' },
  { icon: ServerIcon, color: 'green', text: 'Node.js, Express & RESTful API Development' },
  { icon: ArrowPathIcon, color: 'indigo', text: 'Version Control with Git' },
  { icon: DevicePhoneMobileIcon, color: 'pink', text: 'Responsive Design with Tailwind CSS' },
  { icon: DocumentTextIcon, color: 'red', text: 'PHP, Laravel & C#' },
]

export default function About() {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  return (
    <div className="bg-white dark:bg-black transition-colors duration-500">
      <Head>
        <title>About - Luka Portfolio</title>
        <meta name="description" content="About SetFodi, Junior Full Stack Developer" />
      </Head>

      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden">
          <motion.div
            style={{ scale }}
            className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 opacity-20"
          />
          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent mb-6"
            >
              About Me
            </motion.h1>

            <motion.div
              variants={floatingVariants}
              animate="float"
              className="inline-block"
            >
              <Tilt tiltReverse glareEnable glareMaxOpacity={0.2}>
                <div className="relative w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                  <motion.img
                    src="/images/profile.jpg"
                    alt="SetFodi Profile"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                  />
                </div>
              </Tilt>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              My name is <span className="font-semibold text-purple-600 dark:text-purple-400">Luka Partenadze</span>, a passionate Junior Full Stack Developer who loves turning ideas into elegant, scalable web applications. My journey in coding began with curiosity and has grown into a dedication to building digital experiences that are as innovative as they are user-friendly. and by the way I have the most beautiful girlfriend ever.
            </motion.p>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-20 bg-white dark:bg-black">
          <div className="container mx-auto px-6 max-w-5xl">
            {/* My Journey */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20 relative"
            >
              <div className="absolute -left-8 top-3 w-1 h-full bg-gradient-to-b from-purple-500 to-blue-500 rounded-full" />
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent mb-8">
                My Journey
              </h2>
              <motion.p
                className="text-lg text-gray-600 dark:text-gray-300 pl-8 border-l-4 border-purple-100 dark:border-gray-700"
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: -50, opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                My coding journey started as a curious exploration into the world of technology. From building small scripts to developing creative projects, every step has been a learning experience that shaped my approach to problem solving and design. Today, I strive to blend functionality with aesthetics, ensuring every project works seamlessly while delighting its users.
              </motion.p>
            </motion.div>

            {/* Skills & Technologies */}
            <motion.div
              className="mb-20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent mb-12">
                Skills & Technologies
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillItems.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className={`flex items-center space-x-4 text-${item.color}-600 dark:text-${item.color}-400`}>
                      <item.icon className="w-8 h-8 flex-shrink-0" />
                      <span className="text-lg font-medium text-gray-700 dark:text-gray-300">{item.text}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Philosophy */}
            <motion.div
              className="text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 p-12 rounded-3xl"
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
            >
              <motion.p
                className="text-2xl italic text-gray-700 dark:text-gray-300"
                animate={{
                  textShadow: [
                    '0 0 10px rgba(255,255,255,0.3)',
                    '0 0 20px rgba(255,255,255,0.2)',
                    '0 0 10px rgba(255,255,255,0.3)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                "I believe in continuous learning and creating solutions that not only solve problems but also inspire and delight users."
              </motion.p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}