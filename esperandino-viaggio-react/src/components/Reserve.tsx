import { useState, type FormEvent } from 'react'
import { reserve } from '../content/site'
import SectionHead from './SectionHead'
import bg from '../assets/images/reserva-fundo.webp'
import s from './Reserve.module.css'

type Status = 'idle' | 'sent'

export default function Reserve() {
  const [status, setStatus] = useState<Status>('idle')

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // TODO: integrar com o checkout do sinal (R$ 100). Por enquanto só confirma na tela.
    setStatus('sent')
  }

  return (
    <section className={s.final} id="reservar" data-section="reserve">
      <img className={s.bg} src={bg} width={2160} height={966} alt="" loading="lazy" decoding="async" />
      <div className={`wrap ${s.grid}`}>
        <SectionHead eyebrow={reserve.eyebrow} title={reserve.title} spaced className={s.copy}>
          <p className={`lead ${s.lead}`} data-reveal>{reserve.lead}</p>
        </SectionHead>

        <form className={s.form} onSubmit={onSubmit} data-reveal noValidate={false}>
          {reserve.fields.map((f) => (
            <div key={f.id} className={s.field}>
              <label htmlFor={f.id}>{f.label}</label>
              <input id={f.id} name={f.id} type={f.type} placeholder={f.placeholder} autoComplete={f.autoComplete} required />
            </div>
          ))}
          <button className="btn btn--accent" type="submit">{reserve.cta}</button>
          <p className={s.fine} aria-live="polite">
            {status === 'sent' ? 'Recebemos seus dados. Próximo passo: checkout do sinal de R$ 100.' : reserve.fine}
          </p>
        </form>
      </div>
    </section>
  )
}
