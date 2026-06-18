import type { ReactNode } from "react";
import { motion } from "framer-motion";
import HeroSection from "../Main/heroSection";
import drawnings from "@/assets/drawnings.png";
import object from "@/assets/object.png";
import { officeImg2, poolPhoto as pool, tempImg } from "@/data/photoLibrary";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.55, ease: "easeOut" as const },
};

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="h-px flex-1 bg-black/15" />
      <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#687C96]">
        {children}
      </span>
      <div className="h-px flex-1 bg-black/15" />
    </div>
  );
}

function StepCard({
  step,
  title,
  children,
}: {
  step: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <motion.article
      {...fadeUp}
      className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm sm:p-6 lg:p-7"
    >
      <div className="mb-4 flex items-start gap-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#687C96] text-sm font-bold text-white sm:h-11 sm:w-11 sm:text-base">
          {step}
        </span>
        <h3 className="pt-1 text-xl font-semibold leading-snug text-[#2E2E2E] sm:text-2xl lg:text-3xl">
          {title}
        </h3>
      </div>
      <div className="space-y-4 text-base leading-relaxed text-[#4B4B4B] sm:text-lg lg:pl-[3.75rem]">
        {children}
      </div>
    </motion.article>
  );
}

function ImageFrame({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <motion.div
      {...fadeUp}
      className={`overflow-hidden rounded-2xl border border-black/10 bg-[#F4F7FA] p-2 sm:p-3 ${className}`}
    >
      <img src={src} alt={alt} className="h-full w-full object-cover" />
    </motion.div>
  );
}

const ActivityPage = () => {
  return (
    <div className="pb-24 lg:pb-36">
      <HeroSection title="Как мы работаем" />

      <div className="mx-auto mt-16 max-w-[90dvw] space-y-20 sm:mt-20 lg:mt-28 lg:space-y-28">
        <section className="space-y-10 lg:space-y-14">
          <SectionLabel>Строительство</SectionLabel>

          <motion.div {...fadeUp} className="max-w-4xl">
            <h2 className="text-3xl font-medium leading-tight text-[#2E2E2E] sm:text-4xl lg:text-5xl xl:text-6xl">
              Процесс строительства
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-[#4B4B4B] sm:text-lg lg:text-xl">
              Процесс строительства включает в себя несколько ключевых этапов,
              которые обеспечивают успешную реализацию проекта от начальной
              идеи до окончательной эксплуатации объекта.
            </p>
          </motion.div>

          <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <ImageFrame
              src={tempImg}
              alt="Строительство"
              className="aspect-[4/3] lg:sticky lg:top-28"
            />
            <div className="space-y-5">
              <StepCard step="01" title="Подготовительный этап">
                <p>
                  Строительство начинается с подготовительного этапа, который
                  включает в себя принятие решения о строительстве, выбор
                  земельного участка и его покупку или аренду.
                </p>
                <p>
                  На этом этапе также осуществляется разработка
                  градостроительного плана, который определяет, как будет
                  размещен объект на территории. Важным шагом является
                  проведение публичных слушаний, на которых обсуждаются планы
                  застройки с местными жителями и заинтересованными сторонами.
                </p>
                <p>
                  После этого проводятся инженерные изыскания, включая
                  геологические и экологические исследования, что позволяет
                  оценить условия для строительства.
                </p>
              </StepCard>
            </div>
          </div>

          <div className="grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 xl:gap-16">
            <ImageFrame
              src={drawnings}
              alt="Проектная документация"
              className="aspect-[3/4] max-lg:order-2"
            />
            <div className="space-y-5 max-lg:order-1">
              <motion.h3
                {...fadeUp}
                className="text-2xl font-medium leading-snug text-[#2E2E2E] sm:text-3xl lg:text-4xl"
              >
                Следующий этап — разработка проектной документации
              </motion.h3>
              <StepCard step="02" title="Проектирование и разрешения">
                <p>
                  На этом этапе создаются все необходимые чертежи и схемы,
                  которые детализируют проект.
                </p>
                <p>
                  Важно также установить инженерные системы — водоснабжение,
                  электрику и вентиляцию — на этом этапе.
                </p>
                <p>
                  После получения всех необходимых разрешений начинается
                  непосредственное строительство. Этот этап включает в себя
                  земляные работы, такие как выемка грунта и подготовка
                  фундамента.
                </p>
              </StepCard>
            </div>
          </div>

          <motion.div {...fadeUp} className="overflow-hidden rounded-2xl">
            <img
              src={pool}
              alt="Бассейн"
              className="aspect-[21/9] w-full object-cover"
            />
          </motion.div>

          <StepCard step="03" title="Отделка и благоустройство">
            <p>
              На этом этапе проводятся работы по отделке внутренних помещений,
              установке окон и дверей, а также прокладке коммуникаций.
              Благоустройство включает в себя создание ландшафта вокруг здания:
              озеленение, укладка дорожек и установка освещения.
            </p>
            <p>
              Завершением строительного процесса является ввод объекта в
              эксплуатацию. Для этого необходимо получить заключение о
              соответствии выполненных работ проекту от государственных органов.
              После этого объект регистрируется в государственных учреждениях,
              что подтверждает его законность и готовность к эксплуатации.
            </p>
          </StepCard>
        </section>

        <section className="space-y-10 lg:space-y-14">
          <SectionLabel>Проектирование</SectionLabel>

          <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <ImageFrame
              src={officeImg2}
              alt="Проектирование"
              className="aspect-[4/3] lg:order-2 lg:sticky lg:top-28"
            />
            <div className="space-y-5 lg:order-1">
              <motion.div {...fadeUp}>
                <h2 className="text-3xl font-medium leading-tight text-[#2E2E2E] sm:text-4xl lg:text-5xl xl:text-6xl">
                  Процесс проектирования
                </h2>
                <p className="mt-5 text-base leading-relaxed text-[#4B4B4B] sm:text-lg lg:text-xl">
                  Проектирование — это техническая часть работы, направленная на
                  создание детализированной документации для реализации
                  утвержденного дизайна.
                </p>
              </motion.div>

              <StepCard step="01" title="Техническое задание (ТЗ)">
                <p>
                  Важно учесть не только эстетические предпочтения, но и
                  функциональные задачи, которые должны быть решены в рамках
                  будущего пространства.
                </p>
                <p>
                  Техническое задание служит основой для дальнейшей работы и
                  определяет ключевые параметры, такие как размеры, материалы и
                  инженерные системы.
                </p>
              </StepCard>

              <StepCard step="02" title="Чертежи и инженерия">
                <p>
                  После утверждения технического задания начинается разработка
                  чертежей. Этот этап включает создание обмерного плана, на
                  котором фиксируются точные размеры помещений, расположение
                  окон, дверей и коммуникаций.
                </p>
                <p>
                  На основе этих данных создаются рабочие чертежи, которые
                  детализируют каждый элемент проекта. Чертежи могут включать
                  планы зонирования, схемы размещения оборудования и
                  детализированные планы отделки.
                </p>
                <p>
                  Важно также разработать инженерные решения, которые
                  обеспечивают надежную работу всех систем — от водоснабжения
                  до электрики.
                </p>
              </StepCard>
            </div>
          </div>

          <motion.div {...fadeUp} className="overflow-hidden rounded-2xl">
            <img
              src={pool}
              alt="Реализованный проект"
              className="aspect-[21/9] w-full object-cover"
            />
          </motion.div>

          <div className="grid items-start gap-8 lg:grid-cols-[1fr_0.85fr] lg:gap-12 xl:gap-16">
            <div className="space-y-5">
              <motion.h3
                {...fadeUp}
                className="text-2xl font-medium leading-snug text-[#2E2E2E] sm:text-3xl lg:text-4xl"
              >
                Расчёт необходимых материалов
              </motion.h3>
              <StepCard step="03" title="Спецификация и смета">
                <p>
                  На основе разработанных чертежей составляется спецификация, в
                  которой указываются все используемые материалы и их объемы.
                  Это позволяет не только оценить стоимость проекта, но и
                  обеспечить правильность закупок на этапе реализации.
                </p>
                <p>
                  <span className="font-medium text-[#2E2E2E]">Смета</span>{" "}
                  включает в себя все затраты на материалы, работу специалистов
                  и дополнительные расходы, что помогает избежать непредвиденных
                  ситуаций в процессе строительства.
                </p>
                <p>
                  Важной частью проектирования являются инженерные расчеты.
                  Специалисты оценивают нагрузки на конструкции, проверяют
                  соответствие проекта строительным нормам и правилам (СНиП).
                </p>
                <p>
                  Это гарантирует безопасность и долговечность построенного
                  объекта. Инженерные решения должны быть согласованы с
                  дизайнерскими концепциями, чтобы обеспечить гармоничное
                  сочетание функциональности и эстетики.
                </p>
              </StepCard>
            </div>
            <ImageFrame
              src={object}
              alt="Материалы"
              className="aspect-square lg:sticky lg:top-28"
            />
          </div>

          <motion.article
            {...fadeUp}
            className="rounded-2xl border border-[#687C96]/25 bg-[#F4F7FA] p-6 sm:p-8 lg:p-10"
          >
            <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#687C96] sm:text-xs">
              Итог
            </p>
            <h2 className="mt-3 text-2xl font-medium text-[#2E2E2E] sm:text-3xl lg:text-4xl">
              Что же в итоге?
            </h2>
            <div className="mt-5 max-w-4xl space-y-4 text-base leading-relaxed text-[#4B4B4B] sm:text-lg">
              <p>
                Когда все чертежи и расчеты готовы, происходит подготовка
                итогового проектного пакета.
              </p>
              <p>
                В него входят все необходимые документы: чертежи, спецификации,
                сметы и расчеты. Этот пакет передается строителям для реализации
                проекта. Важно отметить, что успешное проектирование требует
                тесного взаимодействия между дизайнерами и инженерами на всех
                этапах работы.
              </p>
              <p>
                Это сотрудничество позволяет создать гармоничное пространство,
                которое будет не только красивым, но и функциональным.
              </p>
            </div>
          </motion.article>
        </section>
      </div>
    </div>
  );
};

export default ActivityPage;
