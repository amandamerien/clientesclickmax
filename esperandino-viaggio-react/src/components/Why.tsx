import { why } from '../content/site'
import SectionHead from './SectionHead'
import alca from '../assets/images/detalhe-alca.webp'
import cadeado from '../assets/images/detalhe-cadeado.webp'
import s from './Why.module.css'

export default function Why() {
  return (
    <section className={s.why} data-section="why">
      <div className={s.inner}>
        <SectionHead eyebrow={why.eyebrow} title={why.title} />
        <div className={s.photos}>
          <img className={s.left} src={alca} width={422} height={514} alt="Detalhe da alça e do casco escovado" loading="lazy" decoding="async" data-follow="photo-left" />
          <img className={s.right} src={cadeado} width={422} height={476} alt="Detalhe do cadeado TSA" loading="lazy" decoding="async" data-follow="photo-right" />
        </div>
      </div>
    </section>
  )
}
