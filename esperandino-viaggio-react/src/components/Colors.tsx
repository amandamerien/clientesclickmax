import { useState } from 'react'
import { colors } from '../content/site'
import SectionHead from './SectionHead'
import darkBlueGray from '../assets/images/cor-dark-blue-gray.webp'
import ivoryWhite from '../assets/images/cor-ivory-white.webp'
import video from '../assets/video/mala-aeroporto.mp4'
import VideoModal, { useVideoModal } from './VideoModal'
import s from './Colors.module.css'

const IMAGES: Record<string, string> = {
  'dark-blue-gray': darkBlueGray,
  'ivory-white': ivoryWhite,
}

export default function Colors() {
  const [active, setActive] = useState(colors.options[0].id)
  const modal = useVideoModal()

  return (
    <section className={s.colors} data-section="colors">
      <div className={`wrap ${s.grid}`}>
        <div className={s.plate} data-reveal="zoom">
          {colors.options.map((o) => (
            <img
              key={o.id}
              src={IMAGES[o.id]}
              width={1066}
              height={1250}
              alt={`Mala na cor ${o.name}`}
              loading="lazy"
              decoding="async"
              className={`${s.plateImg} ${active === o.id ? s.on : ''}`}
            />
          ))}
          <button type="button" className={`btn btn--ghost-w ${s.plateCta}`} onClick={modal.open}>Ver vídeo</button>
          <VideoModal src={video} {...modal} />
        </div>
        <div>
          <SectionHead eyebrow={colors.eyebrow} title={colors.title} />
          <p className={`lead ${s.lead}`} data-reveal>{colors.lead}</p>
          <div className={s.swatches} role="radiogroup" aria-label="Cor da mala" data-reveal data-stagger>
            {colors.options.map((o) => (
              <button
                key={o.id}
                type="button"
                role="radio"
                aria-checked={active === o.id}
                className={`${s.sw} ${active === o.id ? s.swOn : ''}`}
                style={{ '--sw': o.hex } as React.CSSProperties}
                onClick={() => setActive(o.id)}
              >
                <i aria-hidden="true" />
                <b>{o.name}</b>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
