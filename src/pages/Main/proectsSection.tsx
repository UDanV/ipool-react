import lineRB from '@/assets/line-right-bottom.svg'
import { useState } from 'react';
import Card from '@/components/ui/card'
import Filter from '@/components/ui/filter';
import SharpButton from '@/components/ui/sharpButton'
import GalleryModal from '@/components/ui/galleryModal';
import { cards, type CardData } from '@/types/CardData';

interface ProectsSectionProps {
  title?: string;
  showArrow?: boolean;
  gridConfig?: number[];
  className?: string;
  filterClassName?: string;
  showButton?: boolean;
  showHeader?: boolean;
  showFilter?: boolean;
  showCards?: number[];
}

const ProectsSection = ({
  title = "Проекты",
  showArrow = true,
  gridConfig = [2, 4, 3],
  className = '',
  filterClassName = '',
  showButton = true,
  showHeader = true,
  showFilter = true,
  showCards,
}: ProectsSectionProps) => {

  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);

  const handleCardClick = (card: CardData) => {
    if (card.title === "Композитные") {
      window.location.href = "/pools/composite";
    } else if (card.title === "Бетонные") {
      window.location.href = "/pools/concrete";
    } else {
      setGalleryImages([card.image]);
      setGalleryOpen(true);
    }
  }

  const gridCols: Record<number, string> = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 xl:grid-cols-3",
    4: "sm:grid-cols-2 xl:grid-cols-4",
  };

  const filteredCards = showCards
    ? cards.filter(card => showCards.includes(card.id))
    : cards;

  return (
    <div className='mt-24 max-w-[90dvw] m-auto lg:mt-48'>
      <div className="mx-auto flex max-w-[90dvw] items-center gap-4">
        <div className="h-px flex-1 bg-black/15" />
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#687C96]">
          проекты
        </span>
      </div>

      {(showHeader || showFilter) && (
        <div className='flex flex-col justify-between 2xl:flex-row'>
          {showHeader && (
            <div className='flex flex-col sm:flex-row 2xl:items-center 2xl:justify-center'>
              <h1 className={`${className} font-bold normal-case p-3 lg:p-0 lg:uppercase text-4xl lg:text-[70px]`}>
                {title}
              </h1>
              {showArrow && (
                <img
                  className='hidden lg:block m-3 w-10 translate-y-1.5 lg:translate-y-2.5 lg:w-20'
                  src={lineRB}
                  alt=""
                />
              )}
            </div>
          )}

          {showFilter && (
            <div>
              <Filter className={filterClassName} />
            </div>
          )}
        </div>
      )}

      <div className='flex flex-col mt-10 gap-8 sm:gap-11 lg:mt-20'>
        {gridConfig.map((cols, idx) => (
          <div
            key={idx}
            className={`flex flex-col sm:grid ${gridCols[cols] ?? "sm:grid-cols-2"} sm:p-0 gap-5 p-3 lg:gap-11`}
          >
            {filteredCards.slice(0, cols).map((card, i) => (
              <Card
                key={`card-${cols}-${i}`}
                title={card.title}
                subtitle={card.subtitle}
                image={card.image}
                onClick={() => handleCardClick(card)}
              />
            ))}
          </div>
        ))}

        {showButton && (
          <SharpButton title='Все проекты' href='/spa-box' />
        )}
      </div>

      <GalleryModal
        isOpen={galleryOpen}
        onClose={() => setGalleryOpen(false)}
        images={galleryImages}
      />
    </div>
  );
};

export default ProectsSection;