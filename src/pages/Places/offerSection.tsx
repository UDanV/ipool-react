import { useState } from 'react';
import { motion } from 'framer-motion';
import buddaImg from '@/assets/budda-image.png';

const OfferSection = ({ title }: { title: string }) => {
  const [textVisibleFirst, setTextVisibleFirst] = useState(false);
  const [textVisibleSecond, setTextVisibleSecond] = useState(false);

  return (
    <div className="flex flex-col gap-96 mt-28 px-4 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        onAnimationComplete={() => setTextVisibleFirst(true)}
      >
        <div className="flex flex-col 2xl:flex-row justify-between items-center gap-12 lg:gap-60 ml-0 lg:ml-40">
          <img
            className="h-auto max-w-[300px] sm:max-w-[400px] lg:max-w-none"
            src={buddaImg}
            alt=""
          />
          <div className="flex flex-col max-w-full lg:max-w-4xl mr-0 lg:mr-30 mt-8 lg:mt-0 px-2">
            {textVisibleFirst && (
              <motion.h2
                initial={{ y: 150, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: 'backOut' }}
              >
                <h2 className="uppercase font-medium text-4xl sm:text-6xl lg:text-8xl mb-[52px] text-center lg:text-left">
                  Что мы предлагаем?
                </h2>
              </motion.h2>
            )}
            {textVisibleFirst && (
              <motion.div
                initial={{ y: 150, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: 'backOut', delay: 0.2 }}
              >
                <p className="uppercase text-lg sm:text-xl lg:text-2xl font-medium mb-6 text-justify">
                  Компания iPool предлагает установку душа впечатлений, который
                  станет идеальным дополнением для вашего пространства отдыха и релаксации.
                </p>
                <p className="uppercase text-lg sm:text-xl lg:text-2xl font-medium indent-12 text-justify">
                  Мы работаем в Ростовской области, а также в других городах
                  Ростовской области и Краснодарского края. Душ впечатлений —
                  это современное решение, которое сочетает в себе стильный
                  дизайн, инновационные технологии и возможность наслаждаться
                  уникальными водными процедурами прямо у себя дома.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        onAnimationComplete={() => setTextVisibleSecond(true)}
      >
        <div className="flex flex-col 2xl:flex-row items-center gap-12 lg:gap-60 ml-0 lg:ml-40">
          <img
            className="h-auto max-w-[300px] sm:max-w-[400px] lg:max-w-none"
            src={buddaImg}
            alt=""
          />
          <div className="flex flex-col gap-9 max-w-full lg:max-w-4xl mr-0 lg:mr-30 mt-8 lg:mt-0 px-2">
            {textVisibleSecond && (
              <motion.h2
                initial={{ y: 150, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: 'backOut' }}
              >
                <h2 className="uppercase font-medium text-4xl sm:text-6xl lg:text-8xl text-center lg:text-left">
                  {title} под ключ
                </h2>
              </motion.h2>
            )}
            {textVisibleSecond && (
              <motion.div
                initial={{ y: 150, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: 'backOut', delay: 0.2 }}
              >
                <p className="uppercase text-lg sm:text-xl lg:text-2xl font-medium mb-6 text-justify">
                  Если вы хотите установить душ впечатлений, мы обеспечим
                  индивидуальный подход и полный комплекс услуг. Компания iPool
                  выполняет проекты под ключ: от выбора оптимального
                  оборудования до его профессионального монтажа и настройки. Мы
                  используем только проверенные системы, которые предлагают
                  разнообразные режимы, включая тропический дождь, водопад,
                  туман и ароматерапию.
                </p>
                <p className="uppercase text-lg sm:text-xl lg:text-2xl font-medium text-justify">
                  Обращайтесь в компанию iPool, и мы создадим для вас уникальный
                  душ впечатлений, который станет важной частью вашего дома или
                  зоны отдыха, наполняя вашу жизнь комфортом и приятными
                  эмоциями!
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default OfferSection