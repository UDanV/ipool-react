import { useState } from "react";
import { motion } from "framer-motion";
import Gallery from "@/components/sections/gallery";
import { POOL_DATA, type PoolType } from "@/types/CompositePools";
import NumberFlow from "@number-flow/react";
import { ScrollShadow } from "@heroui/react";

const contentTransition = {
  initial: { opacity: 0.72 },
  animate: { opacity: 1 },
  transition: { duration: 0.22, ease: "easeOut" as const },
};

export default function PoolSchemeBlock() {
  const [activeType, setActiveType] = useState<PoolType>("HIIT");
  const [activeVariantId, setActiveVariantId] = useState(
    () => POOL_DATA.HIIT.variants[0]?.id ?? null,
  );

  const handleTypeChange = (type: PoolType) => {
    setActiveType(type);
    setActiveVariantId(POOL_DATA[type].variants[0]?.id ?? null);
  };

  const activePool = POOL_DATA[activeType];
  const activeVariant =
    activePool.variants.find((v) => v.id === activeVariantId) ??
    activePool.variants[0];
  const poolTypes = Object.keys(POOL_DATA) as PoolType[];
  const depthFormat = {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  };
  const depthClass = "text-xl font-bold italic lg:text-1xl";
  const depth = activeVariant.depth;
  const isDepthRange = Array.isArray(depth);
  const showCols = activeVariant.cols != null && activeVariant.cols > 0;

  const typeBtnClass = (active: boolean) =>
    `rounded-lg py-3 px-3 w-full font-semibold text-sm transition-all duration-200 sm:text-base lg:py-3.5 lg:text-lg ${active
      ? "bg-black text-white shadow-sm"
      : "text-[#2E2E2E] hover:bg-white/70"
    }`;

  const variantBtnClass = (active: boolean) =>
    `shrink-0 rounded-full border px-4 py-2.5 font-semibold text-sm transition-all duration-200 sm:px-5 sm:py-3 sm:text-base lg:text-lg ${active
      ? "border-black bg-black text-white shadow-sm"
      : "border-black/15 bg-white text-[#2E2E2E] hover:border-black/40 hover:bg-[#EDEDED]"
    }`;

  return (
    <div className="w-full max-w-[90dvw] m-auto flex flex-col mt-16 lg:mt-20">
      <div className="mt-10 lg:mt-14">
        <div className="mb-10 flex flex-col gap-10 xl:flex-row xl:items-start xl:justify-between xl:gap-16">
          <motion.div
            key={`pool-copy-${activeType}`}
            {...contentTransition}
            className="max-w-3xl flex flex-col gap-6 lg:gap-8 xl:pr-6"
          >
            <div>
              <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.3em] text-[#687C96] sm:text-xs">
                Модельный ряд
              </p>
              <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-tight text-[#2E2E2E] sm:text-5xl lg:text-6xl">
                {activePool.title}
              </h2>
            </div>
            <p className="text-lg font-medium italic leading-snug text-[#4B4B4B] sm:text-xl lg:text-2xl">
              {activePool.subtitle}
            </p>
            <p className="max-w-2xl border-l-2 border-[#687C96]/40 pl-5 text-base leading-relaxed text-[#4B4B4B]/85 sm:text-lg lg:text-xl">
              {activePool.description}
            </p>
          </motion.div>

          <div className="flex w-full flex-col gap-5 xl:max-w-[660px] xl:shrink-0">
            <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm lg:p-6">
              <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.25em] text-[#4B4B4B] sm:text-xs">
                Тип бассейна
              </p>
              <div className="grid grid-cols-2 gap-1.5 rounded-xl bg-[#EDEDED] p-1.5 sm:grid-cols-4">
                {poolTypes.map((t) => (
                  <button
                    key={t}
                    onClick={() => handleTypeChange(t)}
                    className={typeBtnClass(activeType === t)}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm lg:p-6">
              <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.25em] text-[#4B4B4B] sm:text-xs">
                Вариант исполнения
              </p>
              <ScrollShadow
                className="flex min-h-11 gap-2 sm:min-h-12"
                orientation="horizontal"
                hideScrollBar
              >
                {activePool.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setActiveVariantId(variant.id)}
                    className={variantBtnClass(activeVariantId === variant.id)}
                  >
                    {variant.label}
                  </button>
                ))}
              </ScrollShadow>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4">
              <div className="flex flex-col items-start rounded-xl bg-[#EDEDED] p-4 transition-colors duration-200 hover:bg-[#E4E4E4] lg:p-5">
                <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.15em] text-[#4B4B4B]/70 sm:text-xs">
                  Объём
                </p>
                <NumberFlow
                  value={activeVariant.volume}
                  className="text-xl font-bold italic text-[#2E2E2E] lg:text-1xl"
                  suffix="m³"
                />
              </div>
              <div className="flex flex-col items-start rounded-xl bg-[#EDEDED] p-4 transition-colors duration-200 hover:bg-[#E4E4E4] lg:p-5">
                <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.15em] text-[#4B4B4B]/70 sm:text-xs">
                  Ширина
                </p>
                <NumberFlow
                  value={activeVariant.width}
                  className="text-xl font-bold italic text-[#2E2E2E] lg:text-1xl"
                  suffix="m"
                />
              </div>
              <div className="flex flex-col items-start rounded-xl bg-[#EDEDED] p-4 transition-colors duration-200 hover:bg-[#E4E4E4] lg:p-5">
                <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.15em] text-[#4B4B4B]/70 sm:text-xs">
                  Длина
                </p>
                <NumberFlow
                  value={activeVariant.length}
                  className="text-xl font-bold italic text-[#2E2E2E] lg:text-1xl"
                  suffix="m"
                />
              </div>
              <div className="flex flex-col items-start rounded-xl bg-[#EDEDED] p-4 transition-colors duration-200 hover:bg-[#E4E4E4] lg:p-5">
                <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.15em] text-[#4B4B4B]/70 sm:text-xs">
                  Глубина
                </p>
                <div
                  className={`flex flex-wrap items-baseline text-[#2E2E2E] ${depthClass}`}
                >
                  {isDepthRange ? (
                    <>
                      <NumberFlow
                        value={depth[0]}
                        className={depthClass}
                        locales="ru-RU"
                        format={depthFormat}
                      />
                      <span className="mx-0.5">-</span>
                      <NumberFlow
                        value={depth[1]}
                        className={depthClass}
                        locales="ru-RU"
                        format={depthFormat}
                      />
                      {showCols && (
                        <>
                          <NumberFlow
                            value={activeVariant.cols!}
                            className={depthClass}
                            prefix="("
                            suffix=")"
                          />
                        </>
                      )}
                    </>
                  ) : (
                    <NumberFlow
                      value={depth}
                      className={depthClass}
                      locales="ru-RU"
                      format={depthFormat}
                      suffix="m"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {activeVariant.image && activeVariant.image.length > 0 && (
          <Gallery
            key={`gallery-${activeType}`}
            images={activeVariant.image}
            showMore={false}
            className="m-0! w-full"
          />
        )}

        {activePool.schema && (
          <motion.div
            key={`schema-${activeType}`}
            {...contentTransition}
          >
            <div className="mt-10">
              <p className="text-xl italic text-[#2E2E2E] lg:text-2xl">
                Варианты исполнения:
              </p>
            </div>
            <img
              src={activePool.schema}
              alt={`${activeType} schema`}
              className="m-auto mt-10 max-w-full filter invert"
            />
          </motion.div>
        )}
      </div>
    </div>
  );
}
