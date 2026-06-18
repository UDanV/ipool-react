import { motion } from "framer-motion";
import HeroSection from "../Main/heroSection";
import AboutCard from "@/components/ui/aboutCard";
import {
  officeImg,
  poolPhoto,
  saunaPhoto,
  officeImg2,
} from "@/data/photoLibrary";

const AboutPage = () => {
  return (
    <>
      <HeroSection
        title="О нашей компании"
        className="text-[clamp(1.75rem,7vw,100px)] sm:text-[clamp(2.25rem,8vw,100px)]"
      />

      <section className="relative mx-auto mt-16 w-full max-w-[90dvw] overflow-hidden sm:mt-24 lg:mt-36 xl:mt-48">
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-black/15" />
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#687C96]">
            О компании
          </span>
          <div className="h-px flex-1 bg-black/15" />
        </div>

        <p
          aria-hidden
          className="pointer-events-none absolute right-0 top-28 hidden select-none text-[clamp(4rem,12vw,9rem)] font-black uppercase leading-none text-black/[0.035] lg:block"
        >
          iPool
        </p>

        <div className="mt-10 grid items-start gap-12 lg:mt-14 lg:grid-cols-[minmax(0,44%)_minmax(0,1fr)] lg:gap-14 xl:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto w-full max-w-[340px] sm:max-w-[400px] lg:mx-0 lg:max-w-none"
          >
            <div className="relative border border-black/10 bg-[#F4F7FA] p-3 sm:p-4">
              <img
                src={officeImg}
                className="w-full object-contain"
                alt="about"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, x: 24, rotate: 8 }}
              whileInView={{ opacity: 1, x: 0, rotate: 4 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.15 }}
              className="absolute -bottom-5 -right-3 w-[52%] border border-black/10 bg-white p-2 shadow-[0_20px_50px_rgba(0,0,0,0.12)] sm:-right-6 sm:-bottom-7 lg:-right-8"
            >
              <img
                src={officeImg2}
                className="w-full object-contain"
                alt="about-detail"
              />
            </motion.div>

            <span className="absolute -left-2 top-6 rounded-full bg-[#687C96] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-lg sm:-left-4 sm:px-5 sm:text-sm">
              10+ лет
            </span>
          </motion.div>

          <div className="flex flex-col gap-6 sm:gap-7 lg:gap-8 lg:border-l lg:border-black/10 lg:pl-10 xl:pl-14">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center text-[clamp(1.5rem,4.5vw,3.5rem)] font-medium leading-tight lg:text-left lg:leading-[1.08]"
            >
              Основной принцип работы компании —{" "}
              <span className="text-[#687C96]">индивидуальный подход</span> к
              каждому клиенту.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="border-black/10 text-center text-[clamp(1rem,2.4vw,1.75rem)] font-light leading-relaxed lg:border-l-4 lg:pl-6 lg:text-left"
            >
              "iPool" — это новое лицо компании, которая более 10 лет удерживает
              прочные позиции на Ростовском рынке услуг по обустройству SPA-зоны
              (бассейны, сауны, бани, SPA).
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center text-[clamp(0.9375rem,2vw,1.25rem)] font-light leading-relaxed text-[#4B4B4B] lg:text-left"
            >
              Компания "iPool" сочетает в себе огромный опыт, европейские
              традиции и успешную историю работы на рынке.
              <br className="hidden sm:block" />
              <br className="hidden sm:block" />
              Для того, чтобы поддерживать высокий статус компании, сотрудники
              изучают новые тенденции рынка, разрабатывают и адаптируют
              современные технологии обслуживания, продажи и продвижения
              бассейнов и SPA-оборудования.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 w-full max-w-[90dvw] px-3 sm:mt-28 sm:px-6 md:mt-32 lg:mt-48 lg:px-0 xl:mt-56">
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 md:gap-6 lg:gap-8 xl:gap-10">
          <AboutCard large bg={poolPhoto} title="Бассейны" link="/pools" />
          <AboutCard large bg={saunaPhoto} title="Сауны" link="/saunas" />
        </div>
      </section>
    </>
  );
};

export default AboutPage;
