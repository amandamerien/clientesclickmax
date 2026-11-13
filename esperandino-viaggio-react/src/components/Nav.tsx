import { brand } from '../content/site'
import { Monogram } from './Icons'
import s from './Nav.module.css'

/** Menu simples sobre a hero; não é fixo, rola com a página. */
export default function Nav() {
  return (
    <nav className={s.nav} aria-label="Principal">
      <div className={`wrap ${s.row}`}>
        <a className={s.brand} href="#" aria-label={`${brand.name} · início`}>
          <Monogram className={s.mono} />
          {brand.name}
        </a>
        <a className={s.link} href={brand.reserveHref}>
          Reservar vaga
        </a>
      </div>
    </nav>
  )
}
