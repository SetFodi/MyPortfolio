'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function ProjectGallery({ projects }) {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"])

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-[#0f0f0f]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-24 pl-24">
          {/* Title Card */}
          <div className="flex-shrink-0 w-[40vw] flex flex-col justify-center">
            <h2 className="text-8xl font-bold leading-none mb-8">
              SELECTED
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                WORKS
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-md">
              A curated selection of digital experiences crafted with precision and passion.
            </p>
          </div>

          {/* Projects */}
          {projects.map((project, i) => (
            <Link key={i} href={project.link} target="_blank" className="relative group flex-shrink-0 w-[50vw] md:w-[40vw]">
              <div className="relative aspect-[16/9] overflow-hidden rounded-lg mb-8 grayscale group-hover:grayscale-0 transition-all duration-500">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="flex justify-between items-end border-b border-white/20 pb-4">
                <div>
                  <h3 className="text-4xl font-light mb-2">{project.title}</h3>
                  <p className="text-white/50 uppercase tracking-widest text-sm">{project.category}</p>
                </div>
                <span className="text-4xl group-hover:-translate-y-2 group-hover:translate-x-2 transition-transform duration-300">↗</span>
              </div>
            </Link>
          ))}
          
          {/* View All Card */}
          <div className="flex-shrink-0 w-[30vw] flex items-center justify-center">
             <Link href="/projects" className="w-48 h-48 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group">
                <span className="text-lg uppercase tracking-widest group-hover:scale-110 transition-transform">View All</span>
             </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

