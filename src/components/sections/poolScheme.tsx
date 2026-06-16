import { useEffect, useState } from "react";
import maximize from "@/assets/maximize.svg";
import { POOL_DATA, type PoolType } from "@/types/CompositePools";

export default function PoolSchemeBlock() {
  const [activeType, setActiveType] = useState<PoolType>("HIIT");
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeVariantId, setActiveVariantId] = useState<string | null>(null);

  useEffect(() => {
    const firstVariant = POOL_DATA[activeType].variants[0];
    setActiveVariantId(firstVariant?.id ?? null);
  }, [activeType]);

  useEffect(() => {
    setActiveSlide(0);
  }, [activeType]);

  const activePool = POOL_DATA[activeType];
  const activeVariant =
    activePool.variants.find((v) => v.id === activeVariantId) ??
    activePool.variants[0];
  const poolTypes = Object.keys(POOL_DATA) as PoolType[];

  return (
    <div className="w-full max-w-[90dvw] m-auto px-3 flex flex-col max-h-full items-stretch mt-16 sm:px-6 lg:px-15 lg:mt-20">
      <div
        className="rounded-xl text-white h-full relative flex flex-col justify-end bg-cover bg-center transition-all duration-500"
        style={{
          backgroundImage: `url(${activeVariant.image?.[activeSlide] ?? ""})`,
        }}
      >
        <div className="flex justify-end min-h-[360px] items-end gap-3 mb-3.5 mx-3.5 sm:min-h-[460px] lg:min-h-[620px]">
          <button className="bg-white text-black py-4 max-w-[60px] flex w-full justify-center rounded-2xl sm:py-7 sm:max-w-[85px] sm:rounded-3xl">
            <img src={maximize} alt="maximaze" className="w-5 sm:w-auto" />
          </button>
        </div>
      </div>

      <div className="mt-5.5">
        <div className="flex flex-col items-start justify-between gap-8 xl:flex-row">
          <div className="max-w-3xl">
            <p className="text-black/70 leading-relaxed text-base sm:text-xl lg:text-2xl lg:leading-7.5">
              {activePool.description}
            </p>
          </div>

          <div className="flex flex-col gap-6 max-w-[1000px] w-full lg:gap-8.5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4.5">
              <span className="text-lg font-normal text-nowrap sm:text-2xl">
                Тип бассейна:
              </span>

              <div className="grid grid-cols-2 gap-2 w-full sm:flex sm:justify-end">
                {poolTypes.map((t) => (
                  <button
                    key={t}
                    onClick={() => setActiveType(t)}
                    className={`
                      py-3 rounded-xl w-full border transition font-semibold text-base sm:max-w-[156px] sm:text-xl lg:py-3.5 lg:text-2xl
                      ${activeType === t
                        ? "bg-black text-white border-black"
                        : "bg-transparent text-black border-black"
                      }
                    `}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-2 justify-center">
              {activePool.variants.map((variant) => (
                <button
                  key={variant.id}
                  onClick={() => setActiveVariantId(variant.id)}
                  className={`
        py-3 rounded-xl w-full border transition font-semibold text-base sm:text-xl lg:py-3.5 lg:text-2xl
        ${activeVariantId === variant.id ? "bg-black text-white border-black" : "bg-transparent text-black border-black"}
      `}
                >
                  {variant.label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 lg:gap-4">
              <div className="bg-[#EDEDED] rounded-xl p-4 text-center flex flex-col items-start lg:p-5">
                <p className="text-[16px]">ОБЪЕМ БАССЕЙНА</p>
                <p className="text-xl font-bold italic lg:text-2xl">
                  ({activeVariant.volume}) М³
                </p>
              </div>
              <div className="bg-[#EDEDED] rounded-xl p-4 text-center flex flex-col items-start lg:p-5">
                <p className="text-[16px]">ШИРИНА</p>
                <p className="text-xl font-bold italic lg:text-2xl">
                  ({activeVariant.width}) М
                </p>
              </div>
              <div className="bg-[#EDEDED] rounded-xl p-4 text-center flex flex-col items-start lg:p-5">
                <p className="text-[16px]">ДЛИНА</p>
                <p className="text-xl font-bold italic lg:text-2xl">
                  ({activeVariant.length}) М
                </p>
              </div>
              <div className="bg-[#EDEDED] rounded-xl p-4 text-center flex flex-col items-start lg:p-5">
                <p className="text-[16px]">ГЛУБИНА</p>
                <p className="text-xl font-bold italic lg:text-2xl">
                  ({activeVariant.depth}) М
                </p>
              </div>
            </div>
          </div>
        </div>

        {activePool.schema && (
          <img
            src={activePool.schema}
            alt={`${activeType} schema`}
            className="m-auto mt-10 max-w-full filter invert"
          />
        )}
      </div>
    </div>
  );
}
