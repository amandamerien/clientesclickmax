import { faq } from '../content/site'
import SectionHead from './SectionHead'
import s from './Faq.module.css'

export default function Faq() {
  return (
    <section className={s.faq} data-section="faq">
      <div className={`wrap ${s.grid}`}>
        <SectionHead eyebrow={faq.eyebrow} title={faq.title} spaced className={s.head} />
        <div data-reveal data-stagger>
          {faq.items.map((it, i) => (
            <details key={it.q} className={s.item} open={i === 0}>
              <summary className={s.q}>{it.q}</summary>
              <p className={s.a}>{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
