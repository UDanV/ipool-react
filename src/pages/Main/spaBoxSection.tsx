import { motion } from "framer-motion";
import beachCircle from "@/assets/inflatable_ring.png";
import spaBox from "@/assets/office/IMG_3871-HDR.jpg";
import SharpButton from "@/components/ui/sharpButton";

const SpaBoxSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8 }}
      className="relative mt-32 overflow-hidden lg:mt-48"
    >
      <div className="mx-auto flex max-w-[90dvw] items-center gap-4 pt-8">
        <div className="h-px flex-1 bg-black/15" />
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#687C96]">
          Spa-box
        </span>
      </div>

      <div className="relative mx-auto mt-12 max-w-[90dvw] lg:mt-16">
        <p
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[clamp(5rem,20vw,16rem)] font-black uppercase leading-none text-black/[0.04]"
        >
          SPA BOX
        </p>

        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 xl:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <img
              src={spaBox}
              className="w-full object-cover"
            />
            <motion.img
              initial={{ opacity: 0, scale: 0.5, rotate: -18 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 140, delay: 0.35 }}
              src={beachCircle}
              alt=""
              className="absolute -bottom-5 -right-3 w-20 sm:w-24 lg:-right-6 lg:w-32 xl:w-40"
            />
          </motion.div>

          <div className="flex flex-col gap-6 lg:gap-8">

            <div className="flex flex-wrap items-end gap-x-3 gap-y-1 sm:gap-x-5">
              <motion.h2
                initial={{ opacity: 0, x: -32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
                className="font-bold text-[clamp(3.5rem,12vw,7.5rem)] leading-none"
              >
                SPA
              </motion.h2>
              <motion.h2
                initial={{ opacity: 0, x: 32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35 }}
                className="font-bold text-[clamp(3.5rem,12vw,7.5rem)] leading-none text-[#687C96]"
              >
                BOX
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45 }}
              className="max-w-md text-base font-light leading-relaxed text-[#4B4B4B] lg:text-xl"
            >
              Готовые модули для сауны, хамама и релакса - все это здесь.
            </motion.p>

          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.65 }}
        className="mx-auto mt-14 max-w-[90dvw] border-t border-black lg:mt-20"
      >
        <SharpButton title="К Spa-box" className="w-full" href="/spa-box" />
      </motion.div>
    </motion.section>
  );
};

export default SpaBoxSection;
