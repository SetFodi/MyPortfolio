'use client'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import Tilt from 'react-parallax-tilt'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      duration: 0.6
    }
  },
}

const textRevealVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  },
}

// Project Details Modal Component
const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none p-4 sm:p-6"
          >
            <div
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden w-full max-w-4xl max-h-[90vh] pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header with image */}
              <div className="relative h-64 sm:h-80 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />

                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>

                {/* Project title */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === 'Live'
                        ? 'bg-green-500/90 text-white'
                        : project.status === 'In Development'
                        ? 'bg-yellow-500/90 text-white'
                        : 'bg-blue-500/90 text-white'
                    }`}>
                      {project.status}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-600/90 text-white">
                      {project.category}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-white">{project.title}</h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-20rem)]">
                <div className="prose dark:prose-invert max-w-none">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">About this project</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">{project.longDescription}</p>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 text-sm font-medium rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-800 dark:text-indigo-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* GitHub Stats for GitHub projects */}
                  {project.link.includes('github') && (
                    <>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">GitHub Stats</h3>
                      <div className="flex items-center gap-6 mb-6 text-gray-700 dark:text-gray-300">
                        <div className="flex items-center">
                          <svg className="w-5 h-5 mr-2 text-yellow-500" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z" />
                          </svg>
                          <span className="font-medium">{project.githubStats.stars} stars</span>
                        </div>
                        <div className="flex items-center">
                          <svg className="w-5 h-5 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-.878a2.25 2.25 0 111.5 0v.878a2.25 2.25 0 01-2.25 2.25h-1.5v2.128a2.251 2.251 0 11-1.5 0V8.5h-1.5A2.25 2.25 0 013 6.25v-.878a2.25 2.25 0 115 0zM5 3.25a.75.75 0 10-1.5 0 .75.75 0 001.5 0zm6.75.75a.75.75 0 100-1.5.75.75 0 000 1.5zm-3 8.75a.75.75 0 10-1.5 0 .75.75 0 001.5 0z" />
                          </svg>
                          <span className="font-medium">{project.githubStats.forks} forks</span>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Footer with action buttons */}
              <div className="p-6 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-wrap gap-3 justify-end">
                  <button
                    onClick={onClose}
                    className="px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg font-medium transition-colors"
                  >
                    Close
                  </button>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors inline-flex items-center gap-2"
                  >
                    Visit Project
                    <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [activeTech, setActiveTech] = useState(null)
  const [isMobile, setIsMobile] = useState(false)
  const [filteredCount, setFilteredCount] = useState(0)
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState(null)
  const [sortOrder, setSortOrder] = useState('newest')
  const projectsRef = useRef(null)

  // Function to open project modal
  const openProjectModal = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden'
  }

  // Function to close project modal
  const closeProjectModal = () => {
    setIsModalOpen(false)
    // Re-enable body scrolling
    document.body.style.overflow = 'auto'
  }

  // Detect if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

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
  image: '/localevently.jpg',
  link: 'https://github.com/SetFodi/LocalEvently',
  technologies: ['Next.js 15', 'TypeScript', 'MongoDB', 'Tailwind CSS', 'JWT', 'Nodemailer'],
  status: 'Completed',
  category: 'Social Platform',
  githubStats: { stars: 0, forks: 0 }, // Update these when you publish
  longDescription: 'LocalEvently is a comprehensive community platform that enables users to discover and create local events within their neighborhood. The application features geolocation-based event filtering, interactive map integration, and complete event management capabilities. Users can RSVP to events, create detailed event listings, and manage their social calendar through an intuitive dashboard. The platform includes advanced authentication with JWT tokens, secure password management, comprehensive help documentation, and email notifications. Built with modern web technologies, LocalEvently offers both dark and light themes, responsive design, and seamless user experience across all devices.'
},
  ]

  // Generate technology list for filter
  const allTechnologies = [...new Set(projects.flatMap(p => p.technologies))].sort()

  // Generate category list for filter
  const allCategories = [...new Set(projects.map(p => p.category))].sort()

  // Sort projects based on current sort order
  const sortedProjects = [...projects].sort((a, b) => {
    switch(sortOrder) {
      case 'newest':
        // Sort by status (Live first)
        if (a.status !== b.status) return a.status === 'Live' ? -1 : 1;
        return a.title.localeCompare(b.title);
      case 'oldest':
        // Sort by status (Completed first)
        if (a.status !== b.status) return a.status === 'Completed' ? -1 : 1;
        return a.title.localeCompare(b.title);
      case 'az':
        return a.title.localeCompare(b.title);
      case 'za':
        return b.title.localeCompare(a.title);
      default:
        return 0;
    }
  });

  // Update filtered count when filter changes
  useEffect(() => {
    const filtered = sortedProjects.filter(project => {
      // Filter by technology
      const techMatch = activeTech === null || project.technologies.some(tech =>
        tech.toLowerCase().includes(activeTech.toLowerCase()) ||
        activeTech.toLowerCase().includes(tech.toLowerCase())
      );

      // Filter by category
      const categoryMatch = activeCategory === null || project.category === activeCategory;

      return techMatch && categoryMatch;
    });
    setFilteredCount(filtered.length);
  }, [activeTech, activeCategory, sortOrder, sortedProjects])

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-black transition-colors duration-500">
      <Head>
        <title>Projects - Luka Portfolio</title>
        <meta
          name="description"
          content="Projects by SetFodi, Junior Full Stack Developer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Navbar />

      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-24 md:py-40 overflow-hidden">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-pink-500 opacity-70 dark:opacity-50"></div>

          {/* Animated Particles */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full">
              {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-white opacity-70 dark:opacity-40"
                  style={{
                    width: Math.random() * 10 + 5,
                    height: Math.random() * 10 + 5,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, Math.random() * 100 - 50],
                    x: [0, Math.random() * 100 - 50],
                    opacity: [0.7, 0.2, 0.7],
                    scale: [1, Math.random() * 1.5 + 0.5, 1],
                  }}
                  transition={{
                    duration: Math.random() * 10 + 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Animated Blobs */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-1/4 -left-10 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:opacity-20 animate-blob"
            />
            <motion.div
              className="absolute top-1/3 -right-10 w-72 h-72 bg-yellow-300 dark:bg-yellow-900 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:opacity-20 animate-blob animation-delay-2000"
            />
            <motion.div
              className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:opacity-20 animate-blob animation-delay-4000"
            />
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="font-extrabold text-white mb-6 md:mb-8 inline-block">
                <span className="block text-5xl sm:text-6xl md:text-7xl text-shadow-lg">My Innovative Projects</span>
                <motion.div
                  className="h-1 w-0 bg-white mt-2 rounded-full"
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                />
              </h1>
            </motion.div>

            <motion.p
              className="text-xl sm:text-2xl md:text-3xl text-white max-w-3xl mx-auto font-light leading-relaxed text-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Explore a showcase of creative digital solutions that transform ideas into reality.
            </motion.p>

            {/* Scroll indicator */}
            <motion.div
              className="mt-12 animate-bounce cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              onClick={() => projectsRef.current?.scrollIntoView({ behavior: 'smooth' })}
            >
              <svg className="w-8 h-8 text-white mx-auto filter drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </div>

          {/* Wave Divider */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-16 sm:h-24 text-white dark:text-gray-950">
              <path fill="currentColor" d="M0,96L48,112C96,128,192,160,288,154.7C384,149,480,107,576,112C672,117,768,171,864,181.3C960,192,1056,160,1152,144C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
        </section>

        {/* Filter Section */}
        <section ref={projectsRef} className="pt-8 pb-4 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Combined Filter */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">Filter Projects</h2>
              <div className="flex flex-wrap justify-center gap-2">
                <button
                  onClick={() => {
                    setActiveTech(null);
                    setActiveCategory(null);
                  }}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTech === null && activeCategory === null
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-300'
                  }`}
                >
                  All Projects
                </button>

                {/* Show only a few key technologies */}
                {allTechnologies.slice(0, 5).map((tech) => (
                  <button
                    key={tech}
                    onClick={() => {
                      setActiveTech(tech);
                      setActiveCategory(null);
                    }}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeTech === tech
                        ? 'bg-indigo-600 text-white shadow-md'
                        : 'bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-300'
                    }`}
                  >
                    {tech}
                  </button>
                ))}

                {/* Show only a few key categories */}
                {allCategories.slice(0, 3).map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setActiveCategory(category);
                      setActiveTech(null);
                    }}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeCategory === category
                        ? 'bg-purple-600 text-white shadow-md'
                        : 'bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-300'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>



        {/* Projects Grid */}
        <section className="pt-4 pb-20 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 md:mb-0">
                My Projects
              </h2>

              <div className="flex flex-wrap items-center gap-2">
                {/* Sorting Dropdown */}
                <select
                  className="px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                >
                  <option value="newest">Live Projects First</option>
                  <option value="oldest">Completed Projects First</option>
                  <option value="az">A-Z</option>
                  <option value="za">Z-A</option>
                </select>

                {/* View Toggle */}
                <div className="flex rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                  <button className="p-2 bg-indigo-600 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                  <button className="p-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="text-center text-gray-500 text-sm mb-4">
              Showing {filteredCount} {filteredCount === 1 ? 'project' : 'projects'}
              {activeTech ? ` with "${activeTech}" technology` : ''}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {sortedProjects
                .filter(project => {
                  // Filter by technology
                  const techMatch = activeTech === null || project.technologies.some(tech =>
                    tech.toLowerCase().includes(activeTech.toLowerCase()) ||
                    activeTech.toLowerCase().includes(tech.toLowerCase())
                  );

                  // Filter by category
                  const categoryMatch = activeCategory === null || project.category === activeCategory;

                  return techMatch && categoryMatch;
                })
                .map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="relative group"
                    onMouseEnter={() => !isMobile && setHoveredIndex(index)}
                    onMouseLeave={() => !isMobile && setHoveredIndex(null)}
                  >
                    <Tilt
                      tiltMaxAngleX={isMobile ? 0 : 7}
                      tiltMaxAngleY={isMobile ? 0 : 7}
                      glareEnable={!isMobile}
                      glareMaxOpacity={0.15}
                      glareColor="white"
                      glarePosition="all"
                      glareBorderRadius="16px"
                      className="h-full"
                    >
                      <div className="block h-full rounded-2xl overflow-hidden bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl dark:shadow-gray-900/30 dark:hover:shadow-indigo-500/10 border border-gray-100 dark:border-gray-800 hover:border-indigo-300 dark:hover:border-indigo-800/50 transition-all duration-300 transform">
                        {/* Project Image */}
                        <div className="relative h-52 sm:h-60 md:h-64 overflow-hidden">
                          {/* Mobile tap overlay - makes entire image clickable */}
                          {isMobile && (
                            <>
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute inset-0 z-20"
                                aria-label={`View ${project.title} project`}
                              />
                              {/* Visual indicator for mobile users */}
                              <div className="absolute top-3 right-3 z-10 bg-white/90 dark:bg-gray-900/90 p-1.5 rounded-full shadow-md">
                                <ArrowTopRightOnSquareIcon className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                              </div>
                            </>
                          )}

                          <div className="h-full w-full">
                            <div
                              className="w-full h-full bg-cover bg-center transition-transform duration-700"
                              style={{
                                backgroundImage: `url(${project.image})`,
                                transform: hoveredIndex === index ? 'scale(1.08)' : 'scale(1)',
                                transition: 'transform 0.7s cubic-bezier(0.33, 1, 0.68, 1)'
                              }}
                            />
                          </div>

                          {/* Gradient overlay */}
                          <div
                            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300"
                          />

                          {/* Status Badge */}
                          <div className="absolute top-3 left-3">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
                              project.status === 'Live'
                                ? 'bg-green-500/90 text-white'
                                : project.status === 'In Development'
                                ? 'bg-yellow-500/90 text-white'
                                : 'bg-blue-500/90 text-white'
                            }`}>
                              {project.status}
                            </span>
                          </div>



                          {/* Technology badges */}
                          <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5">
                            {project.technologies.slice(0, 3).map((tech, i) => (
                              <span
                                key={i}
                                className={`px-2.5 py-1 text-xs font-medium rounded-full backdrop-blur-sm ${
                                  tech === activeTech
                                    ? 'bg-indigo-600/90 text-white'
                                    : 'bg-black/70 text-white'
                                }`}
                              >
                                {tech}
                              </span>
                            ))}
                            {project.technologies.length > 3 && (
                              <span
                                className="px-2.5 py-1 text-xs font-medium bg-black/70 text-white rounded-full backdrop-blur-sm"
                              >
                                +{project.technologies.length - 3}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-5 sm:p-6 bg-white dark:bg-gray-900 h-full flex flex-col">
                          <div className="flex items-center justify-between mb-2">
                            {isMobile ? (
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300 flex items-center"
                              >
                                {project.title}
                                <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-1.5 text-indigo-500 dark:text-indigo-400" />
                              </a>
                            ) : (
                              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                                {project.title}
                              </h3>
                            )}
                            <span className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                              {project.category}
                            </span>
                          </div>

                          <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow leading-relaxed">
                            {project.description}
                          </p>

                          {/* GitHub Stats for GitHub projects */}
                          {project.link.includes('github') && (
                            <div className="flex items-center gap-3 mb-4 text-xs text-gray-600 dark:text-gray-400">
                              <div className="flex items-center">
                                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 16 16">
                                  <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z" />
                                </svg>
                                {project.githubStats.stars}
                              </div>
                              <div className="flex items-center">
                                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 16 16">
                                  <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-.878a2.25 2.25 0 111.5 0v.878a2.25 2.25 0 01-2.25 2.25h-1.5v2.128a2.251 2.251 0 11-1.5 0V8.5h-1.5A2.25 2.25 0 013 6.25v-.878a2.25 2.25 0 115 0zM5 3.25a.75.75 0 10-1.5 0 .75.75 0 001.5 0zm6.75.75a.75.75 0 100-1.5.75.75 0 000 1.5zm-3 8.75a.75.75 0 10-1.5 0 .75.75 0 001.5 0z" />
                                </svg>
                                {project.githubStats.forks}
                              </div>
                            </div>
                          )}

                          {/* Action Buttons */}
                          <div className="mt-auto flex items-center justify-between gap-2">
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 inline-flex items-center justify-center gap-1 px-3 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors duration-300"
                            >
                              View Project
                              <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                            </a>

                            <button
                              onClick={() => openProjectModal(project)}
                              className="px-3 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg transition-colors duration-300"
                            >
                              Details
                            </button>
                          </div>
                        </div>

                        {/* Hover overlay */}
                        {!isMobile && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute inset-0 flex items-center justify-center bg-indigo-700/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
                            style={{
                              opacity: hoveredIndex === index ? 1 : 0
                            }}
                          >
                            <div className="relative px-6 py-3 bg-white dark:bg-gray-900 text-indigo-600 dark:text-indigo-400 font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2 border border-indigo-200 dark:border-indigo-800">
                              <span>Explore Project</span>
                              <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                              <div className="absolute -inset-[3px] rounded-xl bg-indigo-400/20 -z-10"></div>
                            </div>
                          </a>
                        )}
                      </div>
                    </Tilt>
                  </motion.div>
                ))}
            </div>

            {/* CTA Section */}
            <div className="mt-20 text-center">
              <div className="max-w-3xl mx-auto rounded-3xl shadow-2xl overflow-hidden">
                <div className="p-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl">
                  <div className="bg-gradient-to-r from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 p-8 sm:p-10 rounded-[calc(1.5rem-2px)]">
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900 dark:text-white">
                      Looking for more?
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-8">
                      Check out my GitHub repository for additional projects and code samples.
                    </p>

                    <a
                      href="https://github.com/SetFodi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-medium rounded-full transition-all duration-300 shadow-lg shadow-indigo-500/20 hover:shadow-xl hover:shadow-indigo-600/30"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      <span>Visit GitHub Profile</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeProjectModal}
      />

      {/* CSS animations */}
      <style jsx global>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .text-shadow {
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        .text-shadow-lg {
          text-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
        }

        .bg-grid-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
      `}</style>
    </div>
  )
}
