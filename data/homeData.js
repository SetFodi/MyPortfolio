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

  // Database skills
  { name: 'MongoDB', category: 'database', color: '#47A248' },
  { name: 'MySQL', category: 'database', color: '#4479A1' },
  { name: 'PostgreSQL', category: 'database', color: '#336791' },

  // Tools & Deployment
  { name: 'Git', category: 'tools', color: '#F05032' },
  { name: 'Vercel', category: 'tools', color: '#000000' },
  { name: 'Netlify', category: 'tools', color: '#00C7B7' },
  { name: 'Render', category: 'tools', color: '#46E3B7' }
]

// Project data with enhanced details
export const projects = [
  {
    title: 'AndCook',
    description: 'Recipe sharing platform where users can discover, save, and create recipes. Features user profiles, favorites, and personalized collections.',
    longDescription: 'AndCook is a comprehensive recipe platform that allows users to browse, save, and share their favorite recipes. Users can create profiles, add recipes to favorites, and build personalized collections. The platform features a modern, responsive design with intuitive navigation.',
    image: '/images/AndCook.jpg',
    link: 'https://andcook.vercel.app',
    github: 'https://github.com/SetFodi/andcook',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    features: [
      'User authentication',
      'Recipe creation and sharing',
      'Favorites and collections',
      'User profiles',
      'Responsive design'
    ],
    category: 'Full Stack',
    status: 'Live'
  },
  {
    title: 'AndCode',
    description: 'Interactive coding challenge platform with progressive difficulty levels, real-time code execution, and comprehensive learning resources.',
    longDescription: 'AndCode is an interactive platform designed to help developers improve their coding skills through practical challenges. The application offers a wide range of programming problems across different difficulty levels and domains.',
    image: '/images/andcode.jpg',
    link: 'https://andcode.vercel.app/',
    github: 'https://github.com/SetFodi/andcode',
    technologies: ['Next.js', 'Node.js', 'API Integration', 'Tailwind CSS'],
    features: [
      'Interactive code challenges',
      'Real-time code execution',
      'Multiple difficulty levels',
      'Learning resources',
      'Progress tracking'
    ],
    category: 'Education',
    status: 'Live'
  },
  {
    title: 'AndWatch',
    description: 'Comprehensive media tracking platform for movies and anime with personalized recommendations, watch history, and community reviews.',
    longDescription: 'AndWatch is a sophisticated media tracking platform that helps users discover, track, and organize their favorite movies and anime. The application integrates with multiple media databases to provide comprehensive information.',
    image: '/images/andwatch.jpg',
    link: 'https://andwatch.vercel.app/',
    github: 'https://github.com/SetFodi/andwatch',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    features: [
      'Media tracking',
      'Personalized recommendations',
      'Watch history',
      'User collections',
      'Community reviews'
    ],
    category: 'Entertainment',
    status: 'Live'
  },
  {
    title: 'DevConnect',
    description: 'Developer collaboration network designed to connect programmers for pair programming, mentorship, and project collaboration.',
    longDescription: 'DevConnect is a social platform that brings developers together for collaboration, mentorship, and knowledge sharing. It matches developers based on skills, interests, and availability to facilitate meaningful connections.',
    image: '/images/devconnect.jpg',
    link: 'https://github.com/SetFodi/devconnect',
    github: 'https://github.com/SetFodi/devconnect',
    technologies: ['React', 'JavaScript', 'MongoDB', 'Express', 'Socket.io', 'Tailwind CSS'],
    features: [
      'Skill-based matching',
      'Real-time messaging',
      'Project collaboration tools',
      'Mentorship program',
      'Code review system'
    ],
    category: 'Social Platform',
    status: 'Completed'
  },
  {
    title: 'PortfolioX',
    description: 'Modern portfolio template for developers and designers with customizable sections, themes, and project showcases.',
    longDescription: 'PortfolioX is a highly customizable portfolio template designed specifically for developers and designers. It features a modern design, multiple theme options, and easy project management.',
    image: '/images/andcode.jpg',
    link: 'https://github.com/SetFodi/portfoliox',
    github: 'https://github.com/SetFodi/portfoliox',
    technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'Three.js'],
    features: [
      'Customizable sections',
      'Multiple theme options',
      'Responsive design',
      '3D elements',
      'Animation effects'
    ],
    category: 'Template',
    status: 'Completed'
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
