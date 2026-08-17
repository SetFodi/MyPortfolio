import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Logo from '../components/Logo'
import EditorialProjectCard from '../components/EditorialProjectCard'
import { featuredProjects, conceptProjects } from '../data/homeData'

const capabilities = [
  {
    number: '01',
    title: 'Product thinking',
    copy: 'Turning a rough goal into clear flows, useful features, and a scope that can actually ship.',
    tags: ['Discovery', 'UX structure', 'Prototyping'],
  },
  {
    number: '02',
    title: 'Interface craft',
    copy: 'Building responsive interfaces with a distinct visual voice, precise motion, and accessible interaction.',
    tags: ['UI systems', 'Motion', 'Frontend'],
  },
  {
    number: '03',
    title: 'Full-stack delivery',
    copy: 'Connecting the interface to reliable data, APIs, content systems, analytics, and deployment.',
    tags: ['Next.js', 'Databases', 'Integrations'],
  },
]

export default function Home() {
  const leadProject = featuredProjects[0]
  const secondProject = featuredProjects[1]

  return (
    <div className="portfolio-page">
      <Head>
        <title>Luka Partenadze — Product-minded Full-Stack Developer</title>
        <meta
          name="description"
          content="Portfolio of Luka Partenadze, a product-minded full-stack developer in Tbilisi building client websites, web products, and interaction concepts."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Logo />
      <Navbar />

      <main>
        <section className="editorial-hero">
          <div className="editorial-hero__grid">
            <motion.div
              className="editorial-hero__copy"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className="availability-pill">
                <span /> Available for selected projects
              </div>
              <p className="eyebrow">Independent developer · Tbilisi, Georgia</p>
              <h1>
                Digital products,<br />
                <em>built with intent.</em>
              </h1>
              <p className="editorial-hero__intro">
                I’m Luka, a product-minded full-stack developer. I shape ideas into fast, expressive websites and web applications—from first interface to production.
              </p>
              <div className="hero-actions">
                <Link href="/projects" className="button button--solid">
                  Explore selected work <ArrowUpRight size={18} />
                </Link>
                <a href="#selected-work" className="button button--quiet">
                  Scroll to work <ArrowDown size={17} />
                </a>
              </div>
            </motion.div>

            <motion.div
              className="hero-stage"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <a href={leadProject.link} target="_blank" rel="noopener noreferrer" className="hero-stage__main">
                <div className="hero-stage__toolbar">
                  <span>{leadProject.kind} / {leadProject.year}</span>
                  <span className="hero-stage__lights"><i /><i /><i /></span>
                </div>
                <div className="hero-stage__image">
                  <Image
                    src={leadProject.image}
                    alt={`${leadProject.title} website`}
                    fill
                    priority
                    sizes="(max-width: 900px) 100vw, 54vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="hero-stage__caption">
                  <span>{leadProject.title}</span>
                  <span>{leadProject.category} ↗</span>
                </div>
              </a>

              <a href={secondProject.link} target="_blank" rel="noopener noreferrer" className="hero-stage__float">
                <div className="hero-stage__float-image">
                  <Image
                    src={secondProject.image}
                    alt={`${secondProject.title} website`}
                    fill
                    sizes="(max-width: 900px) 42vw, 18vw"
                    className="object-cover object-top"
                  />
                </div>
                <div><span>Latest ship</span><strong>{secondProject.title}</strong></div>
                <ArrowUpRight size={17} />
              </a>
            </motion.div>
          </div>

          <div className="hero-index" aria-label="Areas of work">
            <span>Client websites</span>
            <span>Product systems</span>
            <span>Creative prototypes</span>
            <span>2026 portfolio refresh</span>
          </div>
        </section>

        <section className="content-section" id="selected-work">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Selected work · 2025—2026</p>
              <h2>Recent things<br /><em>out in the world.</em></h2>
            </div>
            <div className="section-heading__aside">
              <span className="section-count">04</span>
              <p>Real client work across medical, services, e-commerce, and interactive products.</p>
              <Link href="/projects">View the full archive <ArrowUpRight size={16} /></Link>
            </div>
          </div>

          <div className="featured-grid">
            {featuredProjects.map((project, index) => (
              <EditorialProjectCard
                key={project.slug}
                project={project}
                index={index}
                large={index === 0 || index === 3}
                priority={index === 0}
              />
            ))}
          </div>
        </section>

        <section className="capability-section">
          <div className="capability-section__intro">
            <p className="eyebrow">How I contribute</p>
            <h2>From fuzzy brief<br />to finished product.</h2>
            <p>I work across strategy, interface, and implementation, keeping the same idea intact from the first sketch to the production build.</p>
          </div>
          <div className="capability-list">
            {capabilities.map((capability) => (
              <motion.article
                key={capability.number}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
              >
                <span>{capability.number}</span>
                <div>
                  <h3>{capability.title}</h3>
                  <p>{capability.copy}</p>
                  <div>{capability.tags.map((tag) => <small key={tag}>{tag}</small>)}</div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="content-section concept-section">
          <div className="section-heading section-heading--compact">
            <div>
              <p className="eyebrow">Concept lab</p>
              <h2>Ideas need room<br /><em>to misbehave.</em></h2>
            </div>
            <p>Self-directed studies where I test bolder art direction, interaction, and product mood without a client brief.</p>
          </div>
          <div className="concept-grid">
            {conceptProjects.map((project, index) => (
              <EditorialProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
