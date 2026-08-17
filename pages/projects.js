import { useMemo, useState } from 'react'
import Head from 'next/head'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Logo from '../components/Logo'
import EditorialProjectCard from '../components/EditorialProjectCard'
import { projects } from '../data/homeData'

const filters = ['All', 'Client', 'Product', 'Concept']

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const filteredProjects = useMemo(
    () => filter === 'All' ? projects : projects.filter((project) => project.kind === filter),
    [filter],
  )

  return (
    <div className="portfolio-page work-archive">
      <Head>
        <title>Selected Work — Luka Partenadze</title>
        <meta
          name="description"
          content="Selected client work, independent products, and interface concepts by Luka Partenadze."
        />
      </Head>

      <Logo />
      <Navbar />

      <main>
        <header className="archive-hero">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="eyebrow">Archive · 2024—2026</p>
            <h1>Shipped work<br /><em>& useful experiments.</em></h1>
          </motion.div>
          <div className="archive-hero__aside">
            <p>A living collection of client sites, products, and self-directed concepts. Concepts are labeled plainly; shipped work links to the live product where available.</p>
            <a href="#project-grid">Browse all projects <ArrowDown size={16} /></a>
          </div>
        </header>

        <section className="archive-controls" aria-label="Project filters">
          <div className="archive-controls__filters">
            {filters.map((item) => {
              const count = item === 'All' ? projects.length : projects.filter((project) => project.kind === item).length
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setFilter(item)}
                  className={filter === item ? 'is-active' : ''}
                  aria-pressed={filter === item}
                >
                  {item} <sup>{String(count).padStart(2, '0')}</sup>
                </button>
              )
            })}
          </div>
          <p><span>{String(filteredProjects.length).padStart(2, '0')}</span> projects shown</p>
        </section>

        <section className="archive-grid" id="project-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.slug}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35 }}
                className={(index === 0 || index % 5 === 0) ? 'archive-grid__wide' : ''}
              >
                <EditorialProjectCard
                  project={project}
                  index={index}
                  large={index === 0 || index % 5 === 0}
                  priority={index < 2}
                  showDetails
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </section>

        <section className="archive-note">
          <p className="eyebrow">Still making</p>
          <h2>This archive keeps moving.</h2>
          <p>Some work stays private, some turns into a public product, and some exists simply to test a better idea.</p>
        </section>
      </main>

      <Footer />
    </div>
  )
}
