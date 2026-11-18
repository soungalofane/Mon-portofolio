import { useCallback, useEffect, useMemo, useState } from 'react'
import { ArrowDown, ArrowUpRight, Check, Sparkles } from 'lucide-react'
import Header from '../components/Header'
import ProjectDialog from '../components/ProjectDialog'
import SectionLabel from '../components/SectionLabel'
import Hero from '../scenes/Hero'
import {
  expertise,
  education,
  experience,
  interests,
  languages,
  profile,
  projects,
  skillGroups,
  strengths,
  type PortfolioProject,
  type ProjectCategory,
} from '../data/portfolio'

const projectFilters: { label: string; value: 'all' | ProjectCategory }[] = [
  { label: 'Tout voir', value: 'all' },
  { label: 'Publicité & marque', value: 'Publicité & marque' },
  { label: 'Événementiel', value: 'Événementiel' },
  { label: 'Information & société', value: 'Information & société' },
]

const approach = [
  {
    number: '01',
    title: 'Comprendre',
    description:
      'Écouter le besoin, clarifier les objectifs et mieux connaître les publics concernés.',
  },
  {
    number: '02',
    title: 'Donner une direction',
    description:
      'Faire émerger une idée directrice et choisir les bons messages, formats et canaux.',
  },
  {
    number: '03',
    title: 'Créer et faire évoluer',
    description:
      'Donner vie aux idées, observer les retours et améliorer l’expérience au fil du projet.',
  },
]

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<'all' | ProjectCategory>('all')
  const [activeProject, setActiveProject] = useState<PortfolioProject | null>(
    null,
  )
  const visibleProjects = useMemo(
    () =>
      activeFilter === 'all'
        ? projects
        : projects.filter((project) => project.category === activeFilter),
    [activeFilter],
  )
  const closeProject = useCallback(() => setActiveProject(null), [])

  useEffect(() => {
    const revealItems = document.querySelectorAll<HTMLElement>('[data-reveal]')
    if (!('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.14 },
    )

    revealItems.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [activeFilter])

  return (
    <>
      <a className="skip-link" href="#main-content">
        Aller au contenu
      </a>
      <Header />
      <main id="main-content">
        <Hero />

        <div className="ticker" aria-label="Domaines de travail">
          <div className="ticker__track">
            {[0, 1].map((copy) => (
              <span className="ticker__group" key={copy} aria-hidden={copy === 1}>
                <span>STRATÉGIE DIGITALE</span><i>✳</i>
                <span>IDENTITÉ VISUELLE</span><i>✳</i>
                <span>STORYTELLING</span><i>✳</i>
                <span>COMMUNAUTÉS</span><i>✳</i>
                <span>IMPACT</span><i>✳</i>
              </span>
            ))}
          </div>
        </div>

        <section className="about section-wrap" id="about" aria-labelledby="about-title">
          <SectionLabel number="01">QUI SUIS-JE ?</SectionLabel>
          <div className="about__grid" data-reveal>
            <h2 id="about-title">
              La communication
              <br />
              n’est pas qu’un message.
              <br />
              <em>C’est une connexion.</em>
            </h2>
            <div className="about__body">
              <p className="lead">
                Créer du contenu, c’est bien. Créer du contenu à forte valeur
                ajoutée, c’est mieux.
              </p>
              <p>
                Passionné par la communication, le digital et les technologies,
                je mets ma créativité et ma polyvalence au service de projets
                innovants. Curieux et rigoureux, je continue d’apprendre pour
                relever les défis du secteur.
              </p>
              <a className="underlined-link" href="#approach">
                Ma façon de travailler <ArrowDown size={15} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="about__facts" aria-label="Repères">
            <div><span>BASE</span><strong>Bamako, Mali</strong></div>
            <div><span>APPROCHE</span><strong>Curiosité & clarté</strong></div>
            <div><span>INTÉRÊT</span><strong>Les idées en mouvement</strong></div>
          </div>
        </section>

        <section
          className="expertise section-wrap"
          id="expertise"
          aria-labelledby="expertise-title"
        >
          <SectionLabel number="02">CE QUE JE FAIS</SectionLabel>
          <div className="section-heading" data-reveal>
            <h2 id="expertise-title">
              Des idées aux
              <br />
              <em>expériences.</em>
            </h2>
            <p>
              Des compétences complémentaires au service d’une communication
              plus claire, plus humaine et plus utile.
            </p>
          </div>
          <div className="expertise-grid">
            {expertise.map(({ icon: Icon, number, title, description }) => (
              <article className="expertise-card" key={number} data-reveal>
                <div className="expertise-card__top">
                  <span>{number} / 04</span>
                  <Icon size={23} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <span className="card-arrow" aria-hidden="true">
                  <ArrowUpRight size={17} />
                </span>
              </article>
            ))}
          </div>
        </section>

        <section
          className="journey section-wrap"
          id="journey"
          aria-labelledby="journey-title"
        >
          <SectionLabel number="03">MON PARCOURS</SectionLabel>
          <div className="section-heading" data-reveal>
            <h2 id="journey-title">
              Communication,
              <br />
              <em>création & digital.</em>
            </h2>
            <p>
              Des expériences en radio, des apprentissages numériques et une
              formation en communication qui nourrissent ma pratique.
            </p>
          </div>
          <div className="journey-grid">
            <section className="journey-panel" aria-labelledby="experience-title">
              <h3 className="journey-panel__title" id="experience-title">
                Expériences & engagements
              </h3>
              <div className="timeline">
                {experience.map((item) => (
                  <article className="timeline-item" key={item.title} data-reveal>
                    {item.period && (
                      <span className="timeline-item__period">{item.period}</span>
                    )}
                    <h4>{item.title}</h4>
                    <p className="timeline-item__organization">
                      {item.organization}
                      {item.location ? ' · ' + item.location : ''}
                    </p>
                    <ul>
                      {item.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <section className="journey-panel" aria-labelledby="education-title">
              <h3 className="journey-panel__title" id="education-title">
                Formation
              </h3>
              <div className="timeline timeline--education">
                {education.map((item) => (
                  <article className="timeline-item" key={item.title} data-reveal>
                    <span className="timeline-item__period">{item.period}</span>
                    <h4>{item.title}</h4>
                    <p className="timeline-item__organization">
                      {item.organization}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          </div>

          <div className="skills-details">
            <section className="skills-panel" aria-labelledby="skills-title">
              <h3 className="journey-panel__title" id="skills-title">
                Compétences & outils
              </h3>
              <div className="skill-groups">
                {skillGroups.map((group) => (
                  <div className="skill-group" key={group.title}>
                    <h4>{group.title}</h4>
                    <ul className="skill-chips">
                      {group.items.map((skill) => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <div className="profile-extras">
              <section aria-labelledby="languages-title">
                <h3 className="journey-panel__title" id="languages-title">
                  Langues
                </h3>
                <ul className="language-list">
                  {languages.map((language) => (
                    <li key={language.name}>
                      <span>{language.name}</span>
                      <span>{language.level}</span>
                    </li>
                  ))}
                </ul>
              </section>
              <section aria-labelledby="strengths-title">
                <h3 className="journey-panel__title" id="strengths-title">
                  Atouts
                </h3>
                <ul className="strength-list">
                  {strengths.map((strength) => (
                    <li key={strength}>{strength}</li>
                  ))}
                </ul>
              </section>
              <section className="interests-panel" aria-labelledby="interests-title">
                <h3 className="journey-panel__title" id="interests-title">
                  Centres d’intérêt
                </h3>
                <ul className="strength-list">
                  {interests.map((interest) => (
                    <li key={interest}>{interest}</li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </section>

        <section
          className="projects section-wrap"
          id="projects"
          aria-labelledby="projects-title"
        >
          <SectionLabel number="04">CRÉATIONS SÉLECTIONNÉES</SectionLabel>
          <div className="section-heading section-heading--projects" data-reveal>
            <h2 id="projects-title">
              Des idées.
              <br />
              <em>En images.</em>
            </h2>
            <p>
              Une sélection de créations visuelles pour des campagnes,
              événements, marques et contenus d’information.
            </p>
          </div>
          <div className="project-filters" aria-label="Filtrer les projets">
            {projectFilters.map((filter) => (
              <button
                className={
                  activeFilter === filter.value
                    ? 'filter-button is-active'
                    : 'filter-button'
                }
                type="button"
                key={filter.value}
                aria-pressed={activeFilter === filter.value}
                onClick={() => setActiveFilter(filter.value)}
              >
                {activeFilter === filter.value && (
                  <Check size={13} aria-hidden="true" />
                )}
                {filter.label}
              </button>
            ))}
          </div>
          <div className="projects-grid" aria-live="polite">
            {visibleProjects.map((project) => (
              <article
                className={'project-card project-card--' + project.theme}
                key={project.id}
                data-reveal
              >
                <div className="project-card__art">
                  <img
                    src={project.image}
                    alt={project.alt}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="project-number">{project.id}</span>
                  <span className="project-tag">{project.tag}</span>
                </div>
                <div className="project-card__copy">
                  <span className="eyebrow">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <button
                    className="project-open"
                    type="button"
                    onClick={() => setActiveProject(project)}
                    aria-label={'Voir la création : ' + project.title}
                  >
                    Voir la création{' '}
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </button>
                </div>
              </article>
            ))}
          </div>
          <p className="projects-note">
            <Sparkles size={15} aria-hidden="true" />
            Sélection issue de votre dossier « Mes créa ». Les briefs, le rôle
            détaillé et les résultats pourront compléter chaque étude de cas.
          </p>
        </section>

        <section
          className="approach section-wrap"
          id="approach"
          aria-labelledby="approach-title"
        >
          <SectionLabel number="05">MA FAÇON DE TRAVAILLER</SectionLabel>
          <div className="section-heading" data-reveal>
            <h2 id="approach-title">
              De l’écoute
              <br />
              <em>à l’impact.</em>
            </h2>
            <p>
              Un fil conducteur simple pour passer d’une intention à une
              expérience cohérente.
            </p>
          </div>
          <div className="approach-grid">
            {approach.map((step) => (
              <article className="approach-card" key={step.number} data-reveal>
                <span className="approach-card__number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact section-wrap" id="contact" aria-labelledby="contact-title">
          <div className="contact__orb" aria-hidden="true" />
          <SectionLabel number="06">ET MAINTENANT ?</SectionLabel>
          <div className="contact__content" data-reveal>
            <p className="eyebrow">UNE IDÉE, UN PROJET, UNE COLLABORATION ?</p>
            <h2 id="contact-title">
              Faisons quelque
              <br />
              <em>chose de remarquable.</em>
            </h2>
            <a
              className="button button--light"
              href={'mailto:' + profile.email}
            >
              Parlons de votre projet <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
          <div className="contact__side">
            <span>ÉCRIVEZ-MOI</span>
            <a href={'mailto:' + profile.email}>{profile.email}</a>
            <span>TÉLÉPHONE</span>
            <a href={'tel:' + profile.phone}>{profile.phoneDisplay}</a>
            <span>RÉSEAUX & CONVERSATIONS</span>
            <div className="social-links">
              {profile.socials.map((social) => (
                <a
                  href={social.href}
                  key={social.label}
                  target="_blank"
                  rel="noreferrer"
                >
                  {social.label} <ArrowUpRight size={13} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="footer-brand" href="#home">
          {profile.name.toUpperCase()}<span aria-hidden="true">✳</span>
        </a>
        <span>LA COM, C’EST MON AFFAIRE.</span>
        <span>© {new Date().getFullYear()} — DIGITAL JOURNEY</span>
        <a className="footer-top" href="#home">
          RETOUR EN HAUT <ArrowUpRight size={13} aria-hidden="true" />
        </a>
      </footer>

      {activeProject && (
        <ProjectDialog
          project={activeProject}
          totalCount={projects.length}
          onClose={closeProject}
        />
      )}
    </>
  )
}
