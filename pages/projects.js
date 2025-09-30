'use client'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { XMarkIcon } from '@heroicons/react/24/outline'

const projects = [
    {
      title: 'AndCook',
      description: 'Recipe sharing platform where users can discover, save, and create recipes. Features user profiles, favorites, and personalized collections.',
      image: '/images/AndCook.jpg',
      link: 'https://andcook.vercel.app',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB'],
      status: 'Live',
      category: 'Web App',
      githubStats: { stars: 22, forks: 4 },
      longDescription: 'AndCook is a comprehensive recipe platform that allows users to browse, save, and share their favorite recipes. Users can create profiles, add recipes to favorites, and build personalized collections. The platform features a modern, responsive design with intuitive navigation, recipe search functionality, and detailed cooking instructions.'
    },
    {
      title: 'Syncrolly',
      description: 'A real-time data synchronization platform with collaborative features. Enables seamless data flow between multiple users and devices.',
      image: '/images/syncrolly.jpg',
      link: 'https://syncrolly.com',
      technologies: ['React', 'Node.js', 'WebSocket', 'MongoDB'],
      status: 'Live',
      category: 'Web App',
      githubStats: { stars: 24, forks: 5 },
      longDescription: 'Syncrolly is a powerful real-time data synchronization platform that enables seamless collaboration between team members. Built with a focus on performance and reliability, it leverages WebSocket technology to ensure instant updates across all connected clients. The application features end-to-end encryption, custom data validation, and comprehensive user management.'
    },
    {
      title: 'Typingy',
      description: 'Interactive typing speed test application with multiplayer competitions, custom text challenges, and detailed performance analytics.',
      image: '/images/typingy.jpg',
      link: 'https://typingy.live',
      technologies: ['Next.js', 'JavaScript', 'Tailwind CSS', 'MongoDB'],
      status: 'Live',
      category: 'Web App',
      githubStats: { stars: 18, forks: 3 },
      longDescription: 'Typingy is an engaging typing test platform designed to help users improve their typing speed and accuracy. The application offers various test modes, including timed tests, word count challenges, and custom text inputs. Users can track their progress over time with detailed statistics and compete with friends in real-time multiplayer matches.'
    },
    {
      title: 'Devconnect',
      description: 'Professional networking platform specifically designed for developers. Features project collaboration, skill matching, and community forums.',
      image: '/images/devconnect.jpg',
      link: 'https://github.com/SetFodi/devconnect',
      technologies: ['React', 'JavaScript', 'WebSocket', 'MongoDB', 'Tailwind CSS'],
      status: 'Completed',
      category: 'Web App',
      githubStats: { stars: 12, forks: 2 },
      longDescription: 'Devconnect is a specialized networking platform that connects developers based on their skills, interests, and project needs. The platform facilitates collaboration through project matching, skill endorsements, and community discussions. Users can showcase their portfolio, find mentors, and participate in code reviews.'
    },
    {
      title: 'MoviesProfile',
      description: 'Comprehensive movie database application with personalized recommendations, watchlists, and social sharing capabilities.',
      image: '/MovieApp.jpg',
      link: 'https://github.com/SetFodi/moviesProfile',
      technologies: ['React', 'JavaScript', 'CSS', 'API Integration'],
      status: 'Completed',
      category: 'Web App',
      githubStats: { stars: 8, forks: 1 },
      longDescription: 'MoviesProfile is a feature-rich movie database application that allows users to discover, track, and share their favorite films. The app integrates with popular movie APIs to provide comprehensive information about movies, including cast details, ratings, and reviews. Users can create personalized watchlists, receive recommendations based on their preferences, and share their movie experiences with friends.'
    },
    {
      title: 'Task-Manager',
      description: 'Intuitive task management application with customizable workflows, priority levels, and deadline notifications to boost productivity.',
      image: '/taskmanager.jpg',
      link: 'https://github.com/SetFodi/TaskManger',
      technologies: ['Next.js', 'JavaScript', 'Tailwind CSS', 'MongoDB'],
      status: 'Completed',
      category: 'Productivity',
      githubStats: { stars: 6, forks: 0 },
      longDescription: 'Task-Manager is a streamlined productivity tool designed to help users organize their tasks efficiently. The application features customizable task categories, priority levels, and deadline reminders. Users can create recurring tasks, track their progress with visual indicators, and generate productivity reports to analyze their work patterns.'
    },
    {
      title: 'MusicStreamingService',
      description: 'Feature-rich music streaming platform with playlist creation, artist discovery, and personalized recommendations based on listening habits.',
      image: '/musicstreamingservice.jpg',
      link: 'https://github.com/SetFodi/MusicStreamingService',
      technologies: ['React', 'JavaScript', 'Node.js', 'MongoDB'],
      status: 'Completed',
      category: 'Entertainment',
      githubStats: { stars: 10, forks: 2 },
      longDescription: 'MusicStreamingService is a comprehensive audio streaming platform that offers a vast library of songs across various genres. The application features playlist creation, artist following, and smart recommendations based on user listening patterns. The platform includes social features that allow users to share their favorite tracks and discover music through friends.'
    },
    {
      title: 'SetWord',
      description: 'Enhanced Wordle clone with multiple difficulty levels, daily challenges, and competitive multiplayer mode for word game enthusiasts.',
      image: '/SetWord.jpg',
      link: 'https://setword.vercel.app/',
      technologies: ['Next.js', 'JavaScript', 'API Integration', 'Tailwind CSS'],
      status: 'Live',
      category: 'Game',
      githubStats: { stars: 15, forks: 4 },
      longDescription: 'SetWord is an engaging word puzzle game inspired by Wordle but with additional features and gameplay modes. The game offers multiple difficulty levels, daily challenges, and a competitive multiplayer mode. Players can track their statistics, earn achievements, and compete on global leaderboards.'
    },
    {
      title: 'AndCode',
      description: 'Interactive coding challenge platform with progressive difficulty levels, real-time code execution, and comprehensive learning resources.',
      image: '/andcode.jpg',
      link: 'https://andcode.vercel.app/',
      technologies: ['Next.js', 'Node', 'API Integration', 'Tailwind CSS'],
      status: 'Live',
      category: 'Education',
      githubStats: { stars: 20, forks: 3 },
      longDescription: 'AndCode is an interactive platform designed to help developers improve their coding skills through practical challenges. The application offers a wide range of programming problems across different difficulty levels and domains. Users can write and execute code directly in the browser, receive instant feedback, and learn from detailed explanations of optimal solutions.'
    },
    {
      title: 'AndWatch',
      description: 'Comprehensive media tracking platform for movies and anime with personalized recommendations, watch history, and community reviews.',
      image: '/andwatch.jpg',
      link: 'https://andwatch.vercel.app/',
      technologies: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'API Integration', 'Tailwind CSS'],
      status: 'Live',
      category: 'Entertainment',
      githubStats: { stars: 16, forks: 2 },
      longDescription: 'AndWatch is a sophisticated media tracking platform that helps users discover, track, and organize their favorite movies and anime. The application integrates with multiple media databases to provide comprehensive information, including cast details, episode guides, and release schedules. Users can create custom collections, track their watch progress, and receive personalized recommendations based on their preferences.'
    },
    {
      title: 'Furniture',
      description: 'Modern e-commerce platform for furniture with 3D product visualization, room planning tools, and seamless checkout experience.',
      image: '/furniture.jpeg',
      link: 'https://github.com/SetFodi/furniture-store',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB'],
      status: 'Completed',
      category: 'E-commerce',
      githubStats: { stars: 9, forks: 1 },
      longDescription: 'Furniture is a modern e-commerce platform specializing in home furnishings. The application features high-quality product images, detailed specifications, and customer reviews. Users can visualize products in their space using AR technology, create wishlists, and enjoy a seamless checkout process with multiple payment options.'
    },
	{
  title: 'LocalEvently',
  description: 'Hyperlocal event discovery platform connecting communities through location-based event browsing, creation, and RSVP management.',
  image: '/localevently.png',
  link: 'https://github.com/SetFodi/LocalEvently',
  technologies: ['Next.js 15', 'TypeScript', 'MongoDB', 'Tailwind CSS', 'JWT', 'Nodemailer'],
  status: 'Completed',
  category: 'Social Platform',
      githubStats: { stars: 0, forks: 0 },
  longDescription: 'LocalEvently is a comprehensive community platform that enables users to discover and create local events within their neighborhood. The application features geolocation-based event filtering, interactive map integration, and complete event management capabilities. Users can RSVP to events, create detailed event listings, and manage their social calendar through an intuitive dashboard. The platform includes advanced authentication with JWT tokens, secure password management, comprehensive help documentation, and email notifications. Built with modern web technologies, LocalEvently offers both dark and light themes, responsive design, and seamless user experience across all devices.'
},
{
  title: 'IntPrep',
      description: 'Comprehensive interview preparation platform with AI-powered feedback, mock interviews, and extensive question database across technical and behavioral domains.',
    image: '/images/intprep.png',
  link: 'https://github.com/SetFodi/intprep',
  technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB', 'API Integration', 'AI'],
  status: 'Completed',
  category: 'Education',
  githubStats: { stars: 22, forks: 4 },
      longDescription: 'IntPrep is a comprehensive interview preparation platform designed to help users prepare for job interviews effectively. The application offers a wide range of interview questions across different domains, including technical, behavioral, and situational questions. Users can track their progress, receive personalized AI-powered feedback, and practice answering questions in a timed environment to simulate real interview conditions.'
},
{
  title: 'AndScore',
  description: 'Modern football scores and fixtures platform providing live updates, match details, and league standings for top European competitions.',
      image: '/images/andscore.png',
      link: 'https://andscore.site',
  technologies: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Football-Data API', 'Radix UI'],
  status: 'Live',
  category: 'Sports',
      githubStats: { stars: 0, forks: 0 },
  longDescription: 'AndScore is a clean, fast football platform focused on delivering live scores, fixtures, and standings for the top European leagues including Premier League, LaLiga, Serie A, Bundesliga, Ligue 1, and Champions League. The application features a modern glass-morphism design with smooth animations, real-time match updates, favorite team tracking, and comprehensive filtering options. Users can browse matches by date, league, or status (live, upcoming, finished), view detailed match information in modal popups, and enjoy a fully responsive experience across all devices. Built with performance in mind, AndScore offers both dark and light themes, intuitive navigation, and a football-themed aesthetic that puts the beautiful game first.'
},
{
  title: 'AndLearn',
  description: 'Interactive programming-tutorial platform with live code execution, progress tracking, and multilingual UI.',
      image: '/images/AndLearn.png',
      link: 'https://andlearn-livid.vercel.app/',
  technologies: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Service Worker'],
  status: 'Live',
  category: 'Education',
      githubStats: { stars: 0, forks: 0 },
      longDescription: 'AndLearn is a hands-on learning platform that teaches JavaScript, Python, React, and TypeScript through interactive lessons. It features real-time code execution, bilingual support (English & Georgian), dark/light themes, and dynamic progress tracking, all wrapped in a modern glass-morphism UI.'
    }
]

export default function Projects() {
  const [mounted, setMounted] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const categories = ['All', ...new Set(projects.map(p => p.category))]

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Head>
        <title>Projects - Luka Partenadze</title>
        <meta name="description" content="Explore the projects and work of Luka Partenadze" />
      </Head>

      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <p className="text-sm tracking-widest text-white/40 uppercase mb-4">Portfolio</p>
              <h1 className="text-5xl md:text-7xl font-light mb-6">
                Selected Work
              </h1>
              <p className="text-lg text-white/60 leading-relaxed">
                A collection of projects showcasing my skills in full-stack development,
                UI/UX design, and problem-solving.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-wrap gap-3">
              {categories.map((category, idx) => (
                <motion.button
                  key={category}
                  initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 text-sm tracking-wider transition-colors ${
                    selectedCategory === category
                      ? 'bg-white text-black'
                      : 'border border-white/20 text-white/60 hover:text-white hover:border-white/40'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
          </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, idx) => (
            <motion.div
                  key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="aspect-[4/3] relative overflow-hidden bg-white/5 mb-4">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-sm tracking-wider">VIEW PROJECT</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-light group-hover:text-white/80 transition-colors">
                        {project.title}
                      </h3>
                      <span className={`text-xs tracking-wider ${
                        project.status === 'Live' ? 'text-green-400' : 'text-white/40'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <p className="text-sm text-white/50 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                      key={tech}
                          className="text-xs text-white/40 border border-white/10 px-2 py-1"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs text-white/40">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                </div>
              </div>
            </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/90 z-50"
                onClick={() => setSelectedProject(null)}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="fixed inset-0 z-50 overflow-y-auto"
              >
                <div className="min-h-screen px-4 flex items-center justify-center">
                  <div
                    className="bg-[#0a0a0a] border border-white/10 max-w-4xl w-full"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* Image */}
                    <div className="aspect-[16/9] relative">
                      <Image
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 896px) 100vw, 896px"
                      />
          </div>

                    {/* Content */}
                    <div className="p-8 md:p-12">
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <h2 className="text-3xl md:text-4xl font-light mb-2">
                            {selectedProject.title}
                </h2>
                          <div className="flex items-center gap-4 text-sm text-white/40">
                            <span>{selectedProject.category}</span>
                            <span>•</span>
                            <span className={selectedProject.status === 'Live' ? 'text-green-400' : ''}>
                              {selectedProject.status}
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={() => setSelectedProject(null)}
                          className="text-white/60 hover:text-white transition-colors"
                        >
                          <XMarkIcon className="w-6 h-6" />
                        </button>
              </div>

                      <p className="text-white/60 leading-relaxed mb-8">
                        {selectedProject.longDescription}
                      </p>

                      <div className="space-y-6 pb-8 border-b border-white/10">
                        <div>
                          <h3 className="text-sm tracking-wider text-white/40 mb-3">TECHNOLOGIES</h3>
                          <div className="flex flex-wrap gap-2">
                            {selectedProject.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="text-sm text-white/60 border border-white/20 px-3 py-1"
                              >
                                {tech}
                              </span>
                            ))}
                  </div>
                </div>

                        {selectedProject.githubStats && (
                          <div>
                            <h3 className="text-sm tracking-wider text-white/40 mb-3">GITHUB STATS</h3>
                            <div className="flex gap-6 text-sm text-white/60">
                              <span>★ {selectedProject.githubStats.stars} stars</span>
                              <span>⑂ {selectedProject.githubStats.forks} forks</span>
                </div>
              </div>
                        )}
                      </div>

                      <div className="pt-8 flex gap-4">
                        <a
                          href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                          className="px-8 py-3 bg-white text-black text-sm tracking-wide hover:bg-white/90 transition-colors"
                        >
                          VISIT PROJECT
                        </a>
                        <button
                          onClick={() => setSelectedProject(null)}
                          className="px-8 py-3 border border-white/20 text-sm tracking-wide hover:border-white/40 transition-colors"
                        >
                          CLOSE
                        </button>
                      </div>
                  </div>
                </div>
              </div>
            </motion.div>
            </>
          )}
        </AnimatePresence>

      <Footer />
      </main>
      </div>
  )
}
