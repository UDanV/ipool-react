import { useEffect, useState } from "react";
import { Modal } from "@heroui/react";
import ImageSwiper from "@/components/ui/imageSwiper";

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  initialIndex?: number;
}

export default function GalleryModal({
  isOpen,
  onClose,
  images,
  initialIndex = 0,
}: GalleryModalProps) {
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  useEffect(() => {
    if (isOpen) setActiveIndex(initialIndex);
  }, [isOpen, initialIndex]);

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <Modal.Backdrop variant="blur" className="bg-black/70">
        <Modal.Container className="p-3 sm:p-6" placement="center">
          <Modal.Dialog className="relative max-w-5xl overflow-hidden rounded-2xl bg-transparent p-0 shadow-none sm:rounded-3xl">
            <Modal.Header className="absolute right-3 top-3 z-10 border-0 bg-transparent p-0 sm:right-4 sm:top-4">
              <Modal.CloseTrigger className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white backdrop-blur-sm transition hover:border-white hover:bg-black/60" />
            </Modal.Header>

            {images.length > 1 && (
              <div className="absolute left-1/2 top-3 z-10 -translate-x-1/2 sm:top-4">
                <span className="rounded-full bg-white px-3 py-1 text-sm font-semibold text-[#687C96] ring-1 ring-[#E5E8EB]">
                  {activeIndex + 1} / {images.length}
                </span>
              </div>
            )}

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
  );
}
