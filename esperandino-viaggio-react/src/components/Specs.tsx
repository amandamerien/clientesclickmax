import { brand, specs } from '../content/site'
import SectionHead from './SectionHead'
import cadeado from '../assets/images/cadeado.webp'
import s from './Specs.module.css'

export default function Specs() {
  return (
    <section className={s.specs} data-section="specs">
      <div className={s.inner}>
        <div className={`head ${s.head}`}>
          <SectionHead eyebrow={specs.eyebrow} title={specs.title} />
          <p className={s.seal} data-reveal>{specs.seal}</p>
        </div>

        <ul className={s.grid} data-reveal data-stagger>
          {specs.items.map((it) => (
            <li key={it.label} className={`${s.spec} ${it.peek ? s.hasPeek : ''}`}>
              <p className={s.value}>
                {it.value}
                {it.unit && <small>{it.unit}</small>}
              </p>
              <p className={s.label}>{it.label}</p>
              {it.peek && (
                <span className={s.peek} aria-hidden="true">
                  <img src={cadeado} width={422} height={476} alt="" loading="lazy" decoding="async" />
                </span>
              )}
            </li>
          ))}
        </ul>

        <div className={s.cta} data-reveal>
          <a className="btn btn--accent" href={brand.reserveHref}>{specs.cta}</a>
        </div>
      </div>
    </section>
  )
}
