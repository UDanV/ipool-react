import React, { useRef } from 'react';
import SharpButton from '@/components/ui/sharpButton';

interface GalleryProps {
  images: string[];
  imageWidth?: number;
}

const Gallery: React.FC<GalleryProps> = ({ images, imageWidth = 600 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  const onMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    isDown = true;
    startX = e.pageX - containerRef.current.offsetLeft;
    scrollLeft = containerRef.current.scrollLeft;
  };

  const onMouseLeave = () => {
    isDown = false;
  };

  const onMouseUp = () => {
    isDown = false;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className='max-w-[1800px] m-auto flex flex-col gap-12'>
        <div
        ref={containerRef}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        className="
          flex gap-4
          overflow-x-scroll 
          cursor-grab 
          select-none 
          scrollbar-hide
          snap-x snap-mandatory
          scroll-smooth
        "
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
          {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Изображение ${index + 1}`}
            style={{ width: `${imageWidth}px`, height: 'auto' }}
            className="
              object-cover 
              flex-shrink-0 
              pointer-events-none 
              snap-start
            "
          />
        ))}
      </div>
      <SharpButton
        title="Больше"
        icon=''
      />
    </div>
  );
};

export default Gallery;