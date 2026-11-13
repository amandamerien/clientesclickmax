import { brand, hero } from '../content/site'
import heroImg from '../assets/images/hero.webp'
import { DoubleTick, Slash } from './Icons'
import s from './Hero.module.css'

export default function Hero() {
  return (
    <section className={s.hero} data-section="hero">
      <div className={s.bg}>
        <img
          src={heroImg}
          width={2160}
          height={1317}
          alt=""
          decoding="async"
          // React 18 ainda não tipa fetchpriority; o atributo em minúsculas chega ao DOM como esperado.
          {...{ fetchpriority: 'high' }}
        />
      </div>
      <div className={`wrap ${s.grid}`}>
        <div className={s.copy}>
          <p className={s.kicker}>
            {hero.kicker[0]} <i aria-hidden="true" /> {hero.kicker[1]}
          </p>
          <h1>{hero.title}</h1>
          <p className={s.lead}>{hero.lead}</p>
          <div className={s.cta}>
            <a className="btn btn--accent" href={brand.reserveHref}>{hero.primary}</a>
            <a className="btn btn--ghost-w" href={brand.howHref}>{hero.secondary}</a>
          </div>
          <ul className={s.cells}>
            {hero.cells.map((c) => (
              <li key={c.title} className={s.cell}>
                <DoubleTick className={s.tick} />
                <div>
                  <b>{c.title}</b>
                  {c.text}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <aside className={s.lot} data-follow="lot" aria-label="Status da reserva">
          <p className={s.lotLabel}>{hero.lot.label}</p>
          <p className={s.lotCount}>
            {hero.lot.reserved} <Slash className={s.slash} /> {hero.lot.total}
            <span className="sr-only"> vagas reservadas</span>
          </p>
          <dl className={s.rows}>
            {hero.lot.rows.map((r) => (
              <div key={r.k} className={s.row}>
                <dt>{r.k}</dt>
                <dd>{r.v}</dd>
              </div>
            ))}
          </dl>
          <a className="btn btn--accent" href={brand.reserveHref}>{hero.lot.cta}</a>
          <div className="tricolor" aria-hidden="true" />
        </aside>
      </div>
    </section>
  )
}
