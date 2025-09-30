// Skill data with categories
export const skillData = [
  // Frontend skills
  { name: 'JavaScript', category: 'frontend', color: '#F7DF1E' },
  { name: 'TypeScript', category: 'frontend', color: '#3178C6' },
  { name: 'React', category: 'frontend', color: '#61DAFB' },
  { name: 'Next.js', category: 'frontend', color: '#000000' },
  { name: 'HTML/CSS', category: 'frontend', color: '#E34F26' },
  { name: 'Angular', category: 'frontend', color: '#DD0031' },

  // Backend skills
  { name: 'Node.js', category: 'backend', color: '#339933' },
  { name: 'Python', category: 'backend', color: '#3776AB' },
  { name: 'PHP', category: 'backend', color: '#777BB4' },
  { name: 'Laravel', category: 'backend', color: '#FF2D20' },
  { name: 'C#', category: 'backend', color: '#512BD4' },
  { name: 'Odoo', category: 'backend', color: '#714B67' },

  // Database skills
  { name: 'MongoDB', category: 'database', color: '#47A248' },
  { name: 'MySQL', category: 'database', color: '#4479A1' },
  { name: 'PostgreSQL', category: 'database', color: '#336791' },

  // Tools & Deployment
  { name: 'Git', category: 'tools', color: '#F05032' },
  { name: 'Docker', category: 'tools', color: '#2496ED' },
{ name: 'Swagger', category: 'tools', color: '#85ea2d' },
  { name: 'Postman', category: 'tools', color: '#FF6C37' },
  { name: 'Shell', category: 'tools', color: '#4EA94B' },]

// Project data with enhanced details
export const projects = [
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
    description: 'IntPrep is a comprehensive interview preparation platform designed to help users prepare for job interviews effectively. The application offers a wide range of interview questions across different domains, including technical, behavioral, and situational questions. Users can track their progress, receive personalized feedback, and practice answering questions in a timed environment.',
    image: '/images/intprep.png',
    link: 'https://github.com/SetFodi/intprep',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB', 'API Integration', 'AI'],
    status: 'Completed',
    category: 'Education',
    githubStats: { stars: 22, forks: 4 },
    longDescription: 'AI-Powered Interview Preparation Platform'
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

// Testimonials data
export const testimonials = [
  {
    name: 'Alex Johnson',
    role: 'CTO at TechVision',
    image: '/images/testimonials/alex.jpg',
    content: 'Luka delivered an exceptional product that exceeded our expectations. His technical expertise and attention to detail made our project a success.',
    rating: 5
  },
  {
    name: 'Sarah Williams',
    role: 'Product Manager at InnovateCorp',
    image: '/images/testimonials/sarah.jpg',
    content: 'Working with Luka was a pleasure. He understood our requirements perfectly and implemented solutions that were both elegant and efficient.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Founder of StartupHub',
    image: '/images/testimonials/michael.jpg',
    content: 'Luka helped us transform our idea into a fully functional application. His problem-solving skills and proactive approach were invaluable.',
    rating: 4.5
  }
]

// Services data
export const services = [
  {
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies and best practices.',
    icon: 'code',
    color: 'blue'
  },
  {
    title: 'Frontend Development',
    description: 'Responsive, interactive user interfaces with React, Next.js, and other modern frameworks.',
    icon: 'layout',
    color: 'purple'
  },
  {
    title: 'Backend Development',
    description: 'Robust server-side applications, APIs, and database solutions for your business needs.',
    icon: 'server',
    color: 'green'
  },
  {
    title: 'Full Stack Solutions',
    description: 'End-to-end development services from concept to deployment and maintenance.',
    icon: 'layers',
    color: 'orange'
  }
]
