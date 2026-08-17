import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function EditorialProjectCard({
  project,
  index = 0,
  large = false,
  priority = false,
  showDetails = false,
}) {
  const CardTag = project.link ? 'a' : 'div'
  const cardProps = project.link
    ? { href: project.link, target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65, delay: Math.min(index * 0.06, 0.24) }}
      className={`work-card ${large ? 'work-card--large' : ''}`}
    >
      <CardTag className="work-card__link" {...cardProps}>
        <div className="work-card__chrome">
          <span>{String(index + 1).padStart(2, '0')}</span>
          <span className="work-card__line" />
          <span>{project.year}</span>
        </div>

        <div className="work-card__media">
          <Image
            src={project.image}
            alt={`${project.title} project preview`}
            fill
            priority={priority}
            sizes={large ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 100vw, 50vw'}
            className="work-card__image"
          />
          <div className="work-card__wash" />
          <div className="work-card__badge">
            <span className={`work-dot work-dot--${project.kind.toLowerCase()}`} />
            {project.kind}
          </div>
          {project.link && (
            <span className="work-card__arrow" aria-hidden="true">
              <ArrowUpRight size={20} />
            </span>
          )}
        </div>

        <div className="work-card__copy">
          <div>
            <p className="eyebrow">{project.category} · {project.role}</p>
            <h3>{project.title}</h3>
          </div>
          <p className="work-card__description">{project.description}</p>
        </div>

        {showDetails && (
          <div className="work-card__details">
            <p>{project.longDescription}</p>
            <ul aria-label={`${project.title} highlights`}>
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <div className="work-card__tech">
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </div>
        )}
      </CardTag>
    </motion.article>
  )
}
