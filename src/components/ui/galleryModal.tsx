import { useEffect, useState } from 'react'
import { Modal } from '@heroui/react'
import ImageSwiper from '@/components/ui/imageSwiper'

interface GalleryModalProps {
  isOpen: boolean
  onClose: () => void
  images: string[]
  initialIndex?: number
}

export default function GalleryModal({
  isOpen,
  onClose,
  images,
  initialIndex = 0,
}: GalleryModalProps) {
  const [activeIndex, setActiveIndex] = useState(initialIndex)

  useEffect(() => {
    if (isOpen) setActiveIndex(initialIndex)
  }, [isOpen, initialIndex])

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={(open) => {
        if (!open) onClose()
      }}
    >
      <Modal.Backdrop variant="blur" className="bg-black/70">
        <Modal.Container className="p-3 sm:p-6" placement='center'>
          <Modal.Dialog className="max-w-5xl overflow-hidden rounded-2xl p-0 sm:rounded-3xl">
            <Modal.Header className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-7">
              <div className="flex items-center gap-3">
                {images.length > 1 && (
                  <span className="rounded-full px-3 py-1 text-sm font-semibold text-[#687C96] ring-1 ring-[#E5E8EB]">
                    {activeIndex + 1} / {images.length}
                  </span>
                )}
                <Modal.CloseTrigger className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E8EB] bg-white text-[#111111] transition hover:border-[#687C96] hover:text-[#687C96]" />
              </div>
            </Modal.Header>

            <Modal.Body className="gallery-modal-body">
              <ImageSwiper
                key={`${isOpen}-${initialIndex}`}
                images={images}
                variant="modal"
                initialSlide={initialIndex}
                onSlideChange={setActiveIndex}
              />
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  )
}
