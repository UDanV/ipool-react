import lineRB from '@/assets/line-right-bottom.svg'
import Card from '@/components/ui/card'
import Filter from '@/components/ui/filter';
import SharpButton from '@/components/ui/sharpButton'
import { cards } from '@/types/CardData';

const ProectsSection = ({
  title = "Проекты",
  showArrow = true,
  gridConfig = [2, 4, 3],
  className = '',
  filterClassName = '',
  showButton = true,
}) => {

  const gridCols:Record<number, string> = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-3",
    4: "sm:grid-cols-4",
  };


  return (
    <div className='mt-48 max-w-[1850px] m-auto border-t border-[#797979]'>
      <div className='flex flex-col justify-between 2xl:flex-row'>
        <div className='flex flex-col sm:flex-row 2xl:items-center 2xl:justify-center'>
          <h1 className={`${ className } font-bold normal-case p-3 lg:p-0 lg:uppercase text-4xl lg:text-[70px]`}>
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
        <div>
            <Filter className={ filterClassName }></Filter>
        </div>
      </div>

      <div className='flex flex-col mt-20 gap-0 sm:gap-11'>
        {gridConfig.map((cols, idx) => (
          <div
            key={idx}
            className={`flex flex-col sm:grid ${gridCols[cols]} sm:p-0 gap-2.5 p-3`}
          >
            {cards.slice(0, cols).map((card, i) => (
              <Card
                key={`card-${cols}-${i}`}
                title={card.title}
                subtitle={card.subtitle}
                image={card.image}
              />
            ))}
          </div>
        ))}
        {showButton && (
            <SharpButton title='Все проекты' />
        )}
      </div>
    </div>
  );
};

export default ProectsSection