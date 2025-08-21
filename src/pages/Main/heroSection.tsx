import HeroBanner from '@/components/sections/heroBanner';
import { motion } from 'framer-motion';
import main from '@/assets/main.png';

interface HeroSectionProps {
  title: string;
  className?: string;
  withBackground?: boolean;
  withSideImage?: boolean; 
  sideImageSrc?: string;  
}

const HeroSection = ({
  title,
  className,
  withBackground = true,
  withSideImage = false,
  sideImageSrc,
}: HeroSectionProps) => {
  return (
    <>
      {withBackground ? (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative w-full bg-no-repeat bg-cover mt-8"
          style={{
            backgroundImage: `url(${main})`,
            height: 'calc(100vh - 110px)',
          }}
        >
          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-0 lg:w-120 p-0 mb-10 xl:pl-20 xl:pb-8 xl:m-0">
            <motion.h1
              initial={{ y: 150, visibility: 'hidden' }}
              animate={{ y: 0, visibility: 'visible' }}
              transition={{ duration: 0.5, ease: 'backOut', delay: 1 }}
              className={`${className} text-white font-bold uppercase`}
            >
              {title}
            </motion.h1>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-8 flex flex-col lg:flex-row items-center lg:items-end justify-between lg:border border-black gap-20 lg:gap-52"
          style={{ minHeight: 'calc(100vh - 110px)' }}
        >
            <div className='p-0 mb-10 xl:pl-20 xl:pb-8 xl:m-0'>
                <motion.h1
                  initial={{ y: 150, visibility: 'hidden' }}
                  animate={{ y: 0, visibility: 'visible' }}
                  transition={{ duration: 0.5, ease: 'backOut', delay: 1 }}
                  className={`${className} font-bold uppercase text-[50px] text-center lg:text-start lg:text-8xl lg:max-w-[500px] xl:leading-30`}
                >
                    {title}
                </motion.h1>
            </div>

          {withSideImage && sideImageSrc && (
            <motion.img
                src={sideImageSrc}
                alt="side"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="h-full max-h-[calc(100vh-110px)] w-full lg:max-w-[60%] object-contain self-stretch flex-1 xl:flex-auto"
            />
          )}
        </motion.div>
      )}

      <HeroBanner />
    </>
  );
};

export default HeroSection;