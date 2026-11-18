import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import type { PortfolioProject } from '../data/portfolio'

type Props = {
  project: PortfolioProject
  totalCount: number
  onClose: () => void
}

export default function ProjectDialog({ project, totalCount, onClose }: Props) {
  const dialogRef = useRef<HTMLElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const previousFocus = document.activeElement
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    function handleKeys(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose()
        return
      }

      if (event.key === 'Tab' && dialogRef.current) {
        event.preventDefault()
        closeButtonRef.current?.focus()
      }
    }

    window.addEventListener('keydown', handleKeys)
    return () => {
      window.removeEventListener('keydown', handleKeys)
      document.body.style.overflow = previousOverflow
      if (previousFocus instanceof HTMLElement) previousFocus.focus()
    }
  }, [onClose])

  return (
    <div className="dialog-backdrop">
      <section
        className={'project-dialog project-dialog--' + project.theme}
        role="dialog"
        aria-modal="true"
        aria-labelledby={'project-dialog-title-' + project.id}
        aria-describedby={'project-dialog-description-' + project.id}
        ref={dialogRef}
        tabIndex={-1}
      >
        <button
          className="dialog-close"
          type="button"
          aria-label="Fermer les détails du projet"
          onClick={onClose}
          ref={closeButtonRef}
        >
          <X size={20} aria-hidden="true" />
        </button>
        <div className="dialog-art">
          <img src={project.image} alt={project.alt} />
        </div>
        <div className="dialog-copy">
          <p className="eyebrow">{project.category}</p>
          <span className="dialog-project-number">
            {project.id + ' / ' + String(totalCount).padStart(2, '0')}
          </span>
          <h2 id={'project-dialog-title-' + project.id}>{project.title}</h2>
          <p
            className="dialog-description"
            id={'project-dialog-description-' + project.id}
          >
            {project.summary}
          </p>
          <div className="dialog-status">
            <span className="status-dot" aria-hidden="true" />
            CRÉATION VISUELLE · ÉTUDE DE CAS À DÉTAILLER
          </div>
          <p className="dialog-note">
            Le brief, votre rôle précis, les livrables associés et les résultats
            peuvent être ajoutés à cette fiche.
          </p>
        </div>
      </section>
    </div>
  )
}
