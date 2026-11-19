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

const experience = [
  {
    role: 'Full-Stack Developer',
    company: 'DnD Solutions · Remote',
    dates: 'Jan 2026 — Present',
    bullets: [
      'Primary developer of Lusara, a real-estate workflow platform (Next.js, TypeScript, Supabase): property search, deal rooms with party roles, required documents per office, organization admin, Stripe billing, Gmail/Outlook OAuth, Twilio SMS with consent capture, and AI-assisted email replies and document reading, covered by Vitest.',
      'Co-develop Dealer Space, a multi-tenant dealership SaaS (Next.js and NestJS) in a two-developer team: inventory, CRM, billing, role-based permissions and organization-scoped data; built lead intake across provider email formats, DealerCenter import, a communications inbox, lead-source reporting and an AI question box.',
      'Primary developer of ShopOwl, a Next.js and Supabase system for a two-location automotive repair group built around Tekmetric, replacing separate CRM, booking, analytics and loaner tools, with operator MFA, audit logging and a NIST CSF 2.0 control register.',
      'Primary developer of Current, an AI-first client and project tracker where a Gemini agent turns unstructured updates and attachments into audited record changes, with Supabase Storage row-level security and private resumable uploads.',
      'Primary developer of Nuviz (lead-finding SaaS with lead scoring and Stripe credits) and of a production e-commerce store on Next.js 16 and Medusa 2; contributed marketplace and DocuSeal signing features to PerfectPPI, a vehicle inspection platform.',
      'Work daily with Claude Code and Codex configured through project instructions, reusable skills and MCP; scope tasks, review generated code and verify changes with tests.',
    ],
  },
  {
    role: 'Odoo Developer',
    company: 'Fostral · Remote',
    dates: 'Jul 2025 — Present',
    bullets: [
      'Built an Odoo to Microsoft SQL Server sync for quality certificates and manufacturing (MRP) data, with QWeb reports and queued AI digitization of supplier certificates; added Claude-based certificate parsing.',
      'Implemented per-bill-of-lading financial allocation and vendor-bill validation in a freight accounting module, plus demo-trial provisioning and website-lead-to-CRM modules.',
    ],
  },
  {
    role: 'Freelance Web Developer',
    company: 'Independent · Tbilisi',
    dates: '2022 — Present',
    bullets: [
      'Design, build and maintain commercial websites and product catalogues for Georgian businesses, from requirements to responsive, multilingual interfaces, admin tools, pricing calculators, enquiry integrations and deployment.',
    ],
  },
]

const projects = [
  {
    number: '01',
    name: 'Lusara',
    type: 'Real-estate SaaS · Primary developer',
    url: 'https://lusara.ai/',
    displayUrl: 'lusara.ai',
    description:
      'Agent workspace for search, conversations and deals: listing search, Gmail/Outlook email, CRM and deal rooms, brokerage document rules, Stripe billing, Twilio SMS with consent, and AI-assisted replies and document reading.',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Stripe', 'Twilio'],
  },
  {
    number: '02',
    name: 'ShopOwl',
    type: 'Auto-repair ops · Primary developer',
    url: 'https://shopowl.io/',
    displayUrl: 'shopowl.io',
    description:
      'Operating layer for multi-location repair shops around Tekmetric: CRM, online booking, customer messaging, loaner fleet, payments and owner reporting, with operator MFA and audit logging.',
    stack: ['Next.js', 'Supabase', 'Stripe', 'Twilio', 'Playwright'],
  },
  {
    number: '03',
    name: 'Dealer Space',
    type: 'Dealership SaaS · Co-developer',
    url: 'https://dealer.space/',
    displayUrl: 'dealer.space',
    description:
      'Multi-tenant CRM and websites for DealerCenter dealerships: lead intake across provider formats, calls, texts and email in one shared inbox, inventory import and lead-source reporting.',
    stack: ['Next.js', 'NestJS', 'Supabase', 'Turborepo'],
  },
  {
    number: '04',
    name: 'AndSpace',
    type: 'macOS developer app',
    url: 'https://andspace.app/',
    displayUrl: 'andspace.app',
    description:
      'Terminal-first macOS app for local development with project context, command safety, local AI CLI handoff and read-only Git inspection. Public beta releases.',
    stack: ['Tauri', 'React', 'TypeScript', 'xterm.js', 'Zustand'],
  },
  {
    number: '05',
    name: 'Comfort Building',
    type: 'Real estate · 3D',
    url: 'https://comfortbuilding.ge/',
    displayUrl: 'comfortbuilding.ge',
    description:
      'Apartment and floor selection with a production 3D apartment viewer: code-modelled interiors, first-person walkthrough with a touch joystick on phones, and per-floor plans.',
    stack: ['Next.js', 'TypeScript', 'Three.js'],
  },
  {
    number: '06',
    name: 'Gzad',
    type: 'Ad-tech platform',
    url: 'https://gzadvertisement.ge/',
    displayUrl: 'gzadvertisement.ge',
    description:
      'Co-built platform for LED ad screens on Tbilisi taxis: advertiser and fleet portals, admin tools, live playback monitoring on a map, and hourly billing from a prepaid balance.',
    stack: ['Next.js', 'Supabase', 'Express realtime', 'Leaflet'],
  },
  {
    number: '07',
    name: 'Nuviz',
    type: 'Lead-finding SaaS',
    url: 'https://nuviz.io/',
    displayUrl: 'nuviz.io',
    description:
      'Lead discovery with industry-aware scoring, buyer-intent signals, ROI-based pricing and Stripe credit checkout.',
    stack: ['Next.js', 'Supabase', 'Stripe', 'Playwright'],
  },
  {
    number: '08',
    name: 'Andromeda',
    type: 'macOS browser',
    url: 'https://github.com/SetFodi',
    displayUrl: 'github.com/SetFodi',
    description:
      'Calm macOS browser with spaces, network-level ad and tracker blocking, reader mode, split view and Chrome import. Released 0.4.0.',
    stack: ['Electron', 'React', 'TypeScript'],
  },
  {
    number: '09',
    name: 'DecoConcept · SEA LLC',
    type: 'Client websites',
    url: 'https://decoconcept.ge/',
    displayUrl: 'decoconcept.ge · sea.com.ge',
    description:
      'Trilingual product catalogue with search, filters and authenticated content management; bilingual industrial equipment catalogue with project galleries.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
  },
]

const skillGroups = [
  {
    label: 'Frontend',
    items: 'React · Next.js App Router · TypeScript · Tailwind CSS · Zustand · TanStack Query · Three.js',
  },
  {
    label: 'Backend & data',
    items: 'Node.js · NestJS · Express · PostgreSQL · Supabase (Auth, Storage, RLS) · Medusa · Zod · Python/Odoo',
  },
  {
    label: 'Integrations',
    items: 'Stripe · Twilio · Resend · Gmail/Outlook OAuth · Tekmetric · SQL Server',
  },
  {
    label: 'Delivery',
    items: 'Vitest · Jest · Playwright · Git · Turborepo · Vercel · Railway',
  },
  {
    label: 'Desktop',
    items: 'Tauri · Electron',
  },
  {
    label: 'AI',
    items: 'Gemini agents in production · Claude Code · Codex · MCP · reusable skills',
  },
]

const languages = [
  { name: 'Georgian', level: 'Native' },
  { name: 'Russian', level: 'Fluent' },
  { name: 'English', level: 'C1' },
]

export default function Cv() {
  return (
    <div className={styles.page}>
      <Head>
        <title>CV | Luka Partenadze — Full-Stack Developer</title>
        <meta
          name="description"
          content="Luka Partenadze is a full-stack developer in Tbilisi shipping production Next.js, React, Node.js and PostgreSQL/Supabase products, AI features and desktop apps."
        />
        <meta property="og:title" content="Luka Partenadze — Full-Stack Developer" />
        <meta
          property="og:description"
          content="Production SaaS with Next.js, NestJS and Supabase, LLM features, integrations and desktop apps."
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
            <span>Full-stack · TypeScript</span>
            <span>Tbilisi (UTC+4) · Remote</span>
          </div>

          <h1 id="cv-title" className={styles.name}>
            Luka <em>Partenadze</em>
          </h1>

          <div className={styles.roleRow}>
            <h2>
              Full-Stack
              <br />
              Developer
            </h2>
            <p>
              I ship production SaaS with Next.js, NestJS and PostgreSQL/Supabase: primary
              developer of Lusara, ShopOwl and Current, co-developer of Dealer Space, with LLM
              features in production, Odoo and SQL Server integrations, and desktop apps in Tauri
              and Electron.
            </p>
          </div>

          <div className={styles.fitStrip} aria-label="Core capabilities">
            {['Multi-tenant SaaS', 'AI features & agents', 'Integrations', 'Desktop apps'].map(
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
                <span>Since 2022</span>
              </div>

              <article className={styles.experience}>
                {experience.map((job) => (
                  <div className={styles.roleEntry} key={job.company}>
                    <div className={styles.experienceHeading}>
                      <div>
                        <h4>{job.role}</h4>
                        <p>{job.company}</p>
                      </div>
                      <time>{job.dates}</time>
                    </div>
                    <ul>
                      {job.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </article>
            </section>

            <section className={styles.section} aria-labelledby="projects-heading">
              <div className={styles.headingRow}>
                <h3 id="projects-heading" className={styles.sectionLabel}>
                  Products & selected work
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
                  <strong>Open to remote full-stack roles</strong>
                  <span>Available immediately · US or European hours overlap</span>
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
          <span>Luka Partenadze · Full-Stack Developer</span>
          <span>TypeScript / Next.js / Node.js / PostgreSQL</span>
          <span>Updated November 2026</span>
        </footer>
      </main>
    </div>
  )
}
