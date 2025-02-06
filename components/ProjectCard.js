'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function ProjectCard({ title, description, image, link, technologies }) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-transparent hover:border-blue-300 transition-all duration-300"
    >
      {/* Image Section */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 transform group-hover:scale-105"
        />
        {/* Hover Overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"
        />
      </div>

      {/* Content Section */}
      <div className="p-6">
        <motion.h3
          whileHover={{ scale: 1.05 }}
          className="text-xl font-bold text-gray-900 mb-2"
        >
          {title}
        </motion.h3>
        <p className="text-gray-700 mb-4">{description}</p>
        
        {/* Technologies */}
        {technologies && (
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Call to Action */}
        <Link href={link} legacyBehavior>
          <motion.a
            whileHover={{ x: 5 }}
            className="inline-flex items-center text-blue-600 font-medium hover:underline"
          >
            Visit Site
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.a>
        </Link>
      </div>
    </motion.div>
  )
}
