import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import s from './VideoModal.module.css'

/** Estado compartilhado entre o botão e o modal. */
export function useVideoModal() {
  const [isOpen, setOpen] = useState(false)
  const open = useCallback(() => setOpen(true), [])
  const close = useCallback(() => setOpen(false), [])
  return { isOpen, open, close }
}

type ModalProps = {
  src: string
  isOpen: boolean
  close: () => void
  open?: () => void
}

/** Modal nativo (<dialog>) com o vídeo; só carrega o arquivo quando abre. */
export default function VideoModal({ src, isOpen, close }: ModalProps) {
  const ref = useRef<HTMLDialogElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const dialog = ref.current
    const video = videoRef.current
    if (!dialog || !video) return
    if (isOpen && !dialog.open) {
      dialog.showModal()
      video.src = src
      video.play().catch(() => {})
    } else if (!isOpen && dialog.open) {
      dialog.close()
    }
  }, [isOpen, src])

  function onClose() {
    const video = videoRef.current
    if (video) {
      video.pause()
      video.removeAttribute('src')
      video.load()
    }
    close()
  }

  return (
    <dialog
      ref={ref}
      className={s.modal}
      aria-label="Vídeo"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) onClose()
      }}
    >
      <button type="button" className={s.close} aria-label="Fechar" onClick={onClose}>
        ×
      </button>
      <video ref={videoRef} controls playsInline preload="none" />
    </dialog>
  )
}

type PlayProps = { onClick: () => void; children: ReactNode }

/** Botão centralizado sobre uma foto (o pai precisa ser position: relative). */
export function PlayButton({ onClick, children }: PlayProps) {
  return (
    <button type="button" className={s.play} onClick={onClick}>
      <i className={s.icon} aria-hidden="true" />
      {children}
    </button>
  )
}
