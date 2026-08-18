import Head from 'next/head'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Github,
  Globe2,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Printer,
} from 'lucide-react'
import styles from '../styles/Cv.module.css'

const projects = [
  {
    number: '01',
    name: 'DecoConcept',
    type: 'Product catalogue',
    url: 'https://decoconcept.ge/',
    displayUrl: 'decoconcept.ge',
    description:
      'A premium, responsive catalogue experience for paint and finishing materials, with structured product discovery and clear enquiry paths.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    number: '02',
    name: 'Comfort Building',
    type: 'Real estate',
    url: 'https://comfortbuilding.ge/',
    displayUrl: 'comfortbuilding.ge',
    description:
      'A multilingual property website presenting residential projects in Batumi and Tbilisi through an editorial, mobile-ready interface.',
    stack: ['React', 'Vite', 'GSAP'],
  },
  {
    number: '03',
    name: 'SEA LLC',
    type: 'B2B platform',
    url: 'https://sea.com.ge/',
    displayUrl: 'sea.com.ge',
    description:
      'A bilingual technical catalogue organizing water-treatment services, industrial equipment, references, and direct contact routes.',
    stack: ['Next.js', 'TypeScript', 'i18n'],
  },
]

const skillGroups = [
  {
    label: 'Core',
    items: 'HTML5 · CSS3 · JavaScript ES6+ · Responsive design',
  },
  {
    label: 'Frontend',
    items: 'React · Next.js · Tailwind CSS · Framer Motion',
  },
  {
    label: 'Backend',
    items: 'PHP · Laravel · Node.js · REST APIs',
  },
  {
    label: 'Delivery',
    items: 'Git · Vercel · Forms · Integrations · Responsive QA',
  },
]

const languages = [
  { name: 'Georgian', level: 'Native' },
  { name: 'Russian', level: 'Fluent' },
  { name: 'English', level: 'Fluent' },
]

export default function Cv() {
  return (
    <div className={styles.page}>
      <Head>
        <title>CV | Luka Partenadze — Front-End Developer</title>
        <meta
          name="description"
          content="Luka Partenadze is a front-end developer in Tbilisi building responsive websites with HTML, CSS, JavaScript, React, Next.js, and PHP."
        />
        <meta property="og:title" content="Luka Partenadze — Front-End Developer" />
        <meta
          property="og:description"
          content="Responsive websites, landing pages, and polished commercial frontend development."
        />
      </Head>

      <div className={styles.ambient} aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <header className={styles.toolbar}>
        <Link href="/" className={styles.backLink}>
          <ArrowLeft size={16} aria-hidden="true" />
          Portfolio
        </Link>
        <span className={styles.documentLabel}>Application profile · 2026</span>
        <button className={styles.printButton} type="button" onClick={() => window.print()}>
          <Printer size={16} aria-hidden="true" />
          Print / Save PDF
        </button>
      </header>

      <main className={styles.sheet}>
        <div className={styles.cornerMark} aria-hidden="true">
          LP <span>/</span> 26
        </div>

        <section className={styles.hero} aria-labelledby="cv-title">
          <div className={styles.heroTopline}>
            <span>Front-end specialist</span>
            <span>Tbilisi · Remote</span>
          </div>

          <h1 id="cv-title" className={styles.name}>
            Luka <em>Partenadze</em>
          </h1>

          <div className={styles.roleRow}>
            <h2>
              Front-End
              <br />
              Developer
            </h2>
            <p>
              I build responsive landing pages and commercial websites that feel considered,
              load quickly, and turn business requirements into clear user journeys.
            </p>
          </div>

          <div className={styles.fitStrip} aria-label="Core capabilities">
            {['Landing pages', 'Responsive adaptation', 'Forms & scripts', 'UI animation'].map(
              (item) => (
                <span key={item}>
                  <Check size={13} aria-hidden="true" />
                  {item}
                </span>
              )
            )}
          </div>
        </section>

        <div className={styles.contentGrid}>
          <aside className={styles.sidebar}>
            <section className={styles.section} aria-labelledby="contact-heading">
              <h3 id="contact-heading" className={styles.sectionLabel}>
                Contact
              </h3>
              <div className={styles.contactList}>
                <a href="tel:+995557100020">
                  <Phone size={15} aria-hidden="true" />
                  <span>+995 557 100 020</span>
                </a>
                <a href="mailto:lukafartenadze2004@gmail.com">
                  <Mail size={15} aria-hidden="true" />
                  <span>lukafartenadze2004@gmail.com</span>
                </a>
                <span>
                  <MapPin size={15} aria-hidden="true" />
                  <span>Tbilisi, Georgia</span>
                </span>
                <a href="https://lukapartenadze.vercel.app/" target="_blank" rel="noreferrer">
                  <Globe2 size={15} aria-hidden="true" />
                  <span>lukapartenadze.vercel.app</span>
                </a>
              </div>
              <div className={styles.socialRow}>
                <a
                  href="https://github.com/SetFodi"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Luka Partenadze on GitHub"
                >
                  <Github size={16} aria-hidden="true" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/luka-partenadze-394675348/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Luka Partenadze on LinkedIn"
                >
                  <Linkedin size={16} aria-hidden="true" />
                  LinkedIn
                </a>
              </div>
            </section>

            <section className={styles.section} aria-labelledby="skills-heading">
              <h3 id="skills-heading" className={styles.sectionLabel}>
                Technical profile
              </h3>
              <div className={styles.skillList}>
                {skillGroups.map((group) => (
                  <div key={group.label}>
                    <h4>{group.label}</h4>
                    <p>{group.items}</p>
                  </div>
                ))}
              </div>
              <p className={styles.note}>
                Additional familiarity: Bootstrap. Strongest PHP experience is with Laravel.
              </p>
            </section>

            <section className={styles.section} aria-labelledby="languages-heading">
              <h3 id="languages-heading" className={styles.sectionLabel}>
                Languages
              </h3>
              <div className={styles.languageList}>
                {languages.map((language) => (
                  <div key={language.name}>
                    <span>{language.name}</span>
                    <strong>{language.level}</strong>
                  </div>
                ))}
              </div>
            </section>

            <section className={styles.section} aria-labelledby="education-heading">
              <h3 id="education-heading" className={styles.sectionLabel}>
                Education
              </h3>
              <div className={styles.education}>
                <span>2022 — 2026 · Completed</span>
                <h4>Bachelor of Computer Science</h4>
                <p>Georgian American University</p>
              </div>
            </section>
          </aside>

          <div className={styles.mainColumn}>
            <section className={styles.section} aria-labelledby="experience-heading">
              <div className={styles.headingRow}>
                <h3 id="experience-heading" className={styles.sectionLabel}>
                  Experience
                </h3>
                <span>04+ years</span>
              </div>

              <article className={styles.experience}>
                <div className={styles.roleEntry}>
                  <div className={styles.experienceHeading}>
                    <div>
                      <h4>Developer</h4>
                      <p>DnD Solutions</p>
                    </div>
                    <time>Feb 2026 — Present</time>
                  </div>
                  <ul>
                    <li>
                      Develop management systems and frontend functionality for active product
                      requirements.
                    </li>
                  </ul>
                </div>

                <div className={styles.roleEntry}>
                  <div className={styles.experienceHeading}>
                    <div>
                      <h4>Odoo Developer</h4>
                      <p>Fostral</p>
                    </div>
                    <time>2025 — Present</time>
                  </div>
                  <ul>
                    <li>
                      Develop and customize Odoo modules that support real business workflows.
                    </li>
                  </ul>
                </div>

                <div className={styles.roleEntry}>
                  <div className={styles.experienceHeading}>
                    <div>
                      <h4>Independent Front-End / Full-Stack Developer</h4>
                      <p>Projects since 2022 · Freelance since 2023</p>
                    </div>
                    <time>2022 — Present</time>
                  </div>
                  <ul>
                    <li>
                      Deliver responsive websites for Georgian businesses across real estate,
                      interiors, construction, and industrial services.
                    </li>
                    <li>
                      Translate briefs into landing pages, catalogues, backend functionality,
                      integrations, and clear enquiry flows.
                    </li>
                    <li>
                      Manage implementation, responsive QA, optimization, and deployment
                      independently alongside two developer roles.
                    </li>
                  </ul>
                </div>
              </article>
            </section>

            <section className={styles.section} aria-labelledby="projects-heading">
              <div className={styles.headingRow}>
                <h3 id="projects-heading" className={styles.sectionLabel}>
                  Selected commercial work
                </h3>
                <span>Live projects</span>
              </div>

              <div className={styles.projectList}>
                {projects.map((project) => (
                  <a
                    className={styles.project}
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    key={project.name}
                  >
                    <span className={styles.projectNumber}>{project.number}</span>
                    <div className={styles.projectBody}>
                      <div className={styles.projectTitleRow}>
                        <div>
                          <h4>{project.name}</h4>
                          <span>{project.type}</span>
                        </div>
                        <ArrowUpRight size={18} aria-hidden="true" />
                      </div>
                      <p>{project.description}</p>
                      <div className={styles.projectMeta}>
                        <span>{project.displayUrl}</span>
                        <span>{project.stack.join(' · ')}</span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </section>

            <section className={styles.availability} aria-label="Availability">
              <div>
                <span className={styles.statusDot} />
                <p>
                  <strong>Open to remote front-end work</strong>
                  <span>Flexible schedule · Clear communication · Independent delivery</span>
                </p>
              </div>
              <a href="mailto:lukafartenadze2004@gmail.com">
                Start a conversation
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </section>
          </div>
        </div>

        <footer className={styles.footer}>
          <span>Luka Partenadze · Front-End Developer</span>
          <span>HTML / CSS / JavaScript</span>
          <span>Updated August 2026</span>
        </footer>
      </main>
    </div>
  )
}
