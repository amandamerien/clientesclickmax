import { brand, price } from '../content/site'
import SectionHead from './SectionHead'
import photo from '../assets/images/investimento.webp'
import s from './Price.module.css'

export default function Price() {
  return (
    <section className={s.price} data-section="price">
      <img className={s.photo} src={photo} width={1104} height={1227} alt="Fundador sentado ao lado da mala elétrica" loading="lazy" decoding="async" data-reveal="zoom" />
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
