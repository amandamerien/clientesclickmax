import { brand, price } from '../content/site'
import SectionHead from './SectionHead'
import photo from '../assets/images/investimento.webp'
import video from '../assets/video/mala-aeroporto.mp4'
import VideoModal, { PlayButton, useVideoModal } from './VideoModal'
import s from './Price.module.css'

export default function Price() {
  const modal = useVideoModal()
  return (
    <section className={s.price} data-section="price">
      <div className={s.photoWrap}>
        <img className={s.photo} src={photo} width={1104} height={1227} alt="Fundador sentado ao lado da mala elétrica" loading="lazy" decoding="async" data-reveal="zoom" />
        <PlayButton onClick={modal.open}>Ver vídeo</PlayButton>
      </div>
      <VideoModal src={video} {...modal} />
      <div className={s.col}>
        <div className={s.inner}>
          <SectionHead eyebrow={price.eyebrow} title={price.title} />
          <p className={`lead ${s.lead}`} data-reveal>{price.lead}</p>
          <div className={s.box} data-reveal>
            <p className={s.was}>{price.publicPrice}</p>
            <p className={s.now}>
              <sup>{price.currency}</sup>
              {price.value}
            </p>
            <a className="btn btn--accent" href={brand.reserveHref}>{price.cta}</a>
            <p className={s.fine}>{price.fine}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
