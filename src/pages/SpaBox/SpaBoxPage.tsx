import Catalog from "@/components/sections/catalog"
import HeroBanner from "@/components/sections/heroBanner"
import { motion } from "framer-motion"
import ProectsSection from "../Main/proectsSection"

const SpaBoxPage = () => {
    return (
        <>
            <div 
                className="flex flex-col items-center text-center justify-center border border-black mt-8 px-4"
                style={{ height: 'calc(100vh - 110px)' }}
            >
                <motion.h1
                    className="text-5xl sm:text-6xl md:text-8xl lg:text-[120px] xl:text-[180px] 2xl:text-[220px] font-bold"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    SPA-BOX
                </motion.h1>

                <motion.p
                    className="mt-6 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl leading-normal"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                >
                    Проектирование, монтаж и сервисное обслуживание. 
                    <br />
                    Ростов-на-Дону и Юг Росcии.
                </motion.p>
            </div>
            
            <HeroBanner 
                title="У нас есть мерч!" 
                subtitle="Подойдите к стойке с мерчём и подберите что-то для своего пользования! у нас Только лучшее. Ipool." 
            />

            <div className="mt-32 px-4">
                <h2 
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[90px] 2xl:text-[110px] 
                            font-bold uppercase 2xl:ml-12"
                >
                    Мерч Spa-Box
                </h2>
                <Catalog />
            </div>

            <ProectsSection 
                title="Все проекты в spa-box"
                showArrow={false}
                gridConfig={[2, 4, 3]}
                className="lg:text-[110px]"
                filterClassName="xl:mt-10 xl:mb-10"
                showButton = {false}
            />
        </>        
    )
}

export default SpaBoxPage