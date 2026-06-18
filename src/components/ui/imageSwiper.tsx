import { useId } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Keyboard, Navigation } from "swiper/modules";

import "swiper/css";

interface ImageSwiperProps {
  images: string[];
  variant?: "section" | "modal";
  className?: string;
  initialSlide?: number;
  onSlideChange?: (index: number) => void;
  onImageClick?: (index: number) => void;
}

const sectionBreakpoints = {
  0: { slidesPerView: 1, spaceBetween: 12 },
  640: { slidesPerView: 1.35, spaceBetween: 14 },
  768: { slidesPerView: 2, spaceBetween: 16 },
  1024: { slidesPerView: 3, spaceBetween: 20 },
  1280: { slidesPerView: 3, spaceBetween: 24 },
};

const ImageSwiper = ({
  images,
  variant = "section",
  className = "",
  initialSlide = 0,
  onSlideChange,
  onImageClick,
}: ImageSwiperProps) => {
  const uid = useId().replace(/:/g, "");
  const prevClass = `ipool-swiper-prev-${uid}`;
  const nextClass = `ipool-swiper-next-${uid}`;

  const navClass =
    variant === "modal" ? "ipool-swiper-nav-modal" : "ipool-swiper-nav-section";

  const isSection = variant === "section";

  return (
    <div className={`ipool-swiper ${isSection ? "" : "ipool-swiper-modal-root"} ${className}`}>
      <div className={isSection ? "relative" : "relative ipool-swiper-modal-wrapper"}>
        {images.length > 1 && (
          <>
            <button
              type="button"
              className={`${prevClass} ipool-swiper-nav ipool-swiper-nav-prev ${navClass}`}
            >
              <ChevronLeft className="h-8 w-8 md:h-10 md:w-10" />
            </button>

            <button
              type="button"
              className={`${nextClass} ipool-swiper-nav ipool-swiper-nav-next ${navClass}`}
            >
              <ChevronRight className="h-8 w-8 md:h-10 md:w-10" />
            </button>
          </>
        )}

        <Swiper
          modules={[Navigation, Keyboard, A11y]}
          onBeforeInit={(swiper) => {
            if (typeof swiper.params.navigation !== "boolean") {
              swiper.params.navigation!.prevEl = `.${prevClass}`;
              swiper.params.navigation!.nextEl = `.${nextClass}`;
            }
          }}
          navigation={{
            prevEl: `.${prevClass}`,
            nextEl: `.${nextClass}`,
          }}
          keyboard={{ enabled: true }}
          grabCursor={isSection}
          speed={500}
          watchOverflow
          slidesPerGroup={1}
          initialSlide={initialSlide}
          onSlideChange={(swiper) => onSlideChange?.(swiper.activeIndex)}
          spaceBetween={isSection ? 12 : 0}
          slidesPerView={isSection ? 1 : 1}
          breakpoints={isSection ? sectionBreakpoints : undefined}
          className={isSection ? "ipool-swiper-main" : "ipool-swiper-modal"}
        >
          {images.map((src, index) => (
            <SwiperSlide key={`${src}-${index}`}>
              {isSection && onImageClick ? (
                <button
                  type="button"
                  aria-label={`Открыть изображение ${index + 1}`}
                  className="ipool-swiper-slide-frame ipool-swiper-slide-button w-full cursor-zoom-in border-0 bg-transparent p-0"
                  onClick={() => onImageClick(index)}
                >
                  <img
                    src={src}
                    alt={`Изображение ${index + 1}`}
                    className="ipool-swiper-slide-image"
                    loading="lazy"
                    draggable={false}
                  />
                </button>
              ) : (
                <div
                  className={isSection ? "ipool-swiper-slide-frame" : "h-full"}
                >
                  <img
                    src={src}
                    alt={`Изображение ${index + 1}`}
                    className={
                      isSection
                        ? "ipool-swiper-slide-image"
                        : "h-full w-full object-contain"
                    }
                    loading="lazy"
                  />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImageSwiper;
