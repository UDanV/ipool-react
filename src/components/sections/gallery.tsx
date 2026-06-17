import { useState } from 'react'
import ImageSwiper from '@/components/ui/imageSwiper'
import ImageLightbox from '@/components/ui/imageLightbox'
import SharpButton from '@/components/ui/sharpButton'

interface GalleryProps {
  images: string[]
  moreHref?: string
  moreTitle?: string
  showMore?: boolean
  className?: string
}

const Gallery = ({
  images,
  moreHref = '/spa-box',
  moreTitle = 'Больше',
  showMore = true,
  className = '',
}: GalleryProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const openModal = (index: number) => {
    setActiveIndex(index)
    setIsModalOpen(true)
  }

  return (
    <div className={`m-auto flex max-w-[90dvw] flex-col gap-8 px-3 lg:gap-12 lg:px-0 ${className}`}>
      <ImageSwiper
        images={images}
        variant="section"
        onImageClick={openModal}
      />

      <ImageLightbox
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        image={images[activeIndex] ?? null}
        alt={`Изображение ${activeIndex + 1}`}
      />

      {showMore && <SharpButton title={moreTitle} href={moreHref} />}
    </div>
  )
}

export default Gallery
