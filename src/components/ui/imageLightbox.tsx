import { Modal } from '@heroui/react'

interface ImageLightboxProps {
  isOpen: boolean
  onClose: () => void
  image: string | null
  alt?: string
}

export default function ImageLightbox({
  isOpen,
  onClose,
  image,
  alt = 'Изображение',
}: ImageLightboxProps) {
  if (!image) return null

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={(open) => {
        if (!open) onClose()
      }}
    >
      <Modal.Backdrop variant="blur" className="bg-black/80">
        <Modal.Container className="p-3 sm:p-6" placement="center">
          <Modal.Dialog className="max-w-6xl overflow-hidden rounded-2xl bg-transparent p-0 shadow-none sm:rounded-3xl">
            <Modal.Header className="absolute right-3 top-3 z-10 border-0 bg-transparent p-0 sm:right-4 sm:top-4">
              <Modal.CloseTrigger className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white backdrop-blur-sm transition hover:border-white hover:bg-black/60" />
            </Modal.Header>

            <Modal.Body className="image-lightbox-body p-0">
              <img
                src={image}
                alt={alt}
                className="mx-auto max-h-[85dvh] w-full object-contain"
              />
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  )
}
