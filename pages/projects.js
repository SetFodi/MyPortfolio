'use client'
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: 'Syncrolly',
      description: 'A project that synchronizes data in real time.',
      image: '/syncrolly.jpg',
      link: 'https://syncrolly.com'
    },
    {
      title: 'Typingy',
      description: 'Test your typing speed and accuracy in a fun way.',
      image: '/typingy.jpg',
      link: 'https://typingy.live'
    },
    {
      title: 'Devconnect',
      description: 'Connecting developers around the world.',
      image: '/devconnect.jpg',
      link: 'https://devconnect.com'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Head>
        <title>Projects - SetFodi Portfolio</title>
        <meta name="description" content="Projects by SetFodi, Junior Full Stack Developer" />
      </Head>

      <Navbar />

      <main className="pt-20">
        {/* Hero Header */}
        <section className="relative py-20 bg-gradient-to-b from-white via-gray-100 dark:from-gray-900 dark:via-gray-800 to-white overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="container mx-auto px-6 text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-gray-100 mb-4">
              Our Innovative Projects
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300">
              Discover cutting-edge digital solutions that redefine user experiences.
            </p>
          </motion.div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 bg-white dark:bg-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {projects.map((project, index) => (
                <a
                  key={index}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="relative rounded-3xl overflow-hidden shadow-2xl border border-transparent group-hover:border-blue-400 transition-all duration-300"
                  >
                    {/* Project Image with zoom-on-hover */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-105"
                      />
                      {/* Hover Gradient Overlay */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"
                      />
                    </div>
                    {/* Content Area */}
                    <div className="p-6 bg-white dark:bg-gray-900 relative">
                      <motion.h3
                        whileHover={{ scale: 1.05 }}
                        className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100"
                      >
                        {project.title}
                      </motion.h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                    </div>
                    {/* Hover Call-to-Action Overlay */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <motion.span 
                        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-colors"
                        whileHover={{ scale: 1.05, x: 5 }}
                      >
                        Visit Site
                      </motion.span>
                    </motion.div>
                  </motion.div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
