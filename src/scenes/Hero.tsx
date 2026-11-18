import { ArrowDown, ArrowUpRight, Aperture, Clapperboard, PenTool, Sparkles } from 'lucide-react'
import type { PointerEvent } from 'react'
import { profile } from '../data/portfolio'

export default function Hero() {
  function tiltScene(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== 'mouse') return
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - bounds.left) / bounds.width - 0.5
    const y = (event.clientY - bounds.top) / bounds.height - 0.5
    event.currentTarget.style.setProperty('--scene-rotate-y', `${x * 9}deg`)
    event.currentTarget.style.setProperty('--scene-rotate-x', `${y * -7}deg`)
  }

  function resetScene(event: PointerEvent<HTMLDivElement>) {
    event.currentTarget.style.setProperty('--scene-rotate-y', '0deg')
    event.currentTarget.style.setProperty('--scene-rotate-x', '0deg')
  }

  return (
    <section className="hero hero--illustrated" id="home" aria-labelledby="hero-title">
      <div className="hero__topline">
        <span>
          <i className="status-dot" aria-hidden="true" />
          {profile.statusLine}
        </span>
        <span>{profile.location.toUpperCase()} · 12° 39′ N</span>
      </div>

      <div className="hero__main">
        <div className="hero__copy" data-reveal>
          <p className="eyebrow"><Sparkles size={14} aria-hidden="true" /> COMMUNICATION DIGITALE · CRÉATIVITÉ · STRATÉGIE</p>
          <h1 id="hero-title">
            Je donne du
            <br />
            <em>sens</em> au<br className="mobile-break" /> digital
            <span className="accent">.</span>
          </h1>
          <p className="hero__intro">
            Je suis {profile.name}, {profile.role.toLowerCase()}. J’imagine des
            stratégies et crée des contenus qui rapprochent les marques de leurs
            publics.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="#projects">
              Explorer mes projets <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a className="text-link" href="#journey">
              Découvrir mon parcours <ArrowDown size={15} aria-hidden="true" />
            </a>
          </div>
          <div className="hero__signature" aria-label="Basé à Bamako, Mali">
            <span className="hero__signature-dot" aria-hidden="true" />
            <span>BAMAKO, MALI</span>
            <span className="hero__signature-line" aria-hidden="true" />
            <span>CRÉER · RACONTER · RELIER</span>
          </div>
        </div>

        <div
          className="hero__stage"
          role="img"
          aria-label={'Illustration 3D animée de ' + profile.name + ', communicant digital créatif'}
          data-reveal
          onPointerMove={tiltScene}
          onPointerLeave={resetScene}
        >
          <div className="hero__scene" aria-hidden="true">
            <div className="stage-sun" />
            <div className="stage-halo stage-halo--one" />
            <div className="stage-halo stage-halo--two" />
            <div className="stage-horizon" />
            <div className="stage-platform stage-platform--back" />
            <div className="stage-platform stage-platform--front" />

            <div className="scene-cube scene-cube--violet">
              <span /><span /><span /><span /><span /><span />
            </div>
            <div className="scene-cube scene-cube--coral">
              <span /><span /><span /><span /><span /><span />
            </div>
            <div className="scene-orb scene-orb--gold" />
            <div className="scene-orb scene-orb--blue" />
            <div className="scene-ring scene-ring--one" />
            <div className="scene-ring scene-ring--two" />

            <div className="scene-card scene-card--idea">
              <PenTool size={18} strokeWidth={1.8} />
              <span>UNE IDÉE</span>
            </div>
            <div className="scene-card scene-card--motion">
              <Clapperboard size={17} strokeWidth={1.8} />
              <span>EN MOUVEMENT</span>
            </div>
            <div className="scene-sticker scene-sticker--spark">
              <Sparkles size={18} />
            </div>
            <div className="scene-sticker scene-sticker--aperture">
              <Aperture size={20} />
            </div>

            <div className="hero__figure">
              <img src="/images/mandela-3d-character.png" alt="" loading="eager" decoding="async" />
            </div>

            <div className="scene-caption">
              <span>MANDELA SENGHOR</span>
              <span>COMMUNICANT · CRÉATIF</span>
            </div>
          </div>
          <span className="stage-index" aria-hidden="true">OBJET 01 — L’IDÉE</span>
        </div>
      </div>

      <div className="hero__footer">
        <span>FAITES DÉFILER POUR EXPLORER</span>
        <div className="scroll-line" aria-hidden="true" />
        <span>STRATÉGIE · STORYTELLING · IMPACT</span>
      </div>
    </section>
  )
}
