import { motion } from '../content/site'
import SectionHead from './SectionHead'
import m1 from '../assets/images/motion-1.webp'
import m2 from '../assets/images/motion-2.webp'
import m3 from '../assets/images/motion-3.webp'
import s from './Motion.module.css'

const IMAGES = [m1, m2, m3]

export default function Motion() {
  return (
    <section className={s.motion} data-section="motion">
      <div className="wrap">
        <div className="head" data-head>
          <SectionHead eyebrow={motion.eyebrow} title={motion.title} />
          <p className={`lead ${s.lead}`} data-reveal>{motion.lead}</p>
        </div>
        <ul className={s.frames} data-reveal data-stagger>
          {motion.frames.map((f, i) => (
            <li key={f.label} className={s.frame}>
              <img src={IMAGES[i]} width={774} height={1004} alt="" loading="lazy" decoding="async" />
              <span className={s.num} aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              <div className={s.caption}>
                <small>{f.label}</small>
                <p>
                  {f.text[0]}
                  <br />
                  {f.text[1]}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
