import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import ContactsCard from "@/components/ui/contactsCard";
import YandexMap from "@/components/map/YandexMap";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.55, ease: "easeOut" as const },
};

const MAP_LINK =
  "https://yandex.ru/maps/39/rostov-na-donu/house/zelyonaya_ulitsa_8a/Z0AYcQ5oTUUEQFptfX50eXplZw==/?ll=39.798403%2C47.258663&z=17.11";

function SectionLabel() {
  return (
    <div className="flex items-center gap-4">
      <div className="h-px flex-1 bg-black/15" />
      <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#687C96]">
        Связь с нами
      </span>
      <div className="h-px flex-1 bg-black/15" />
    </div>
  );
}

const Contacts = () => {
  return (
    <div className="pb-20 lg:pb-28">
      <section className="mx-auto mt-12 max-w-[90dvw] px-3 sm:mt-16 lg:mt-20 lg:px-0">
        <SectionLabel />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 lg:mt-10"
        >
          <h1 className="text-center text-4xl font-bold uppercase leading-[0.95] tracking-tight text-[#2E2E2E] sm:text-5xl lg:text-left lg:text-7xl xl:text-8xl">
            Контакты
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-relaxed text-[#4B4B4B] sm:text-lg lg:mx-0 lg:text-left lg:text-xl">
            Свяжитесь с нами по телефону, email или приезжайте в офис в
            Ростове-на-Дону. Работаем по югу России.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-5 lg:mt-14 lg:grid-cols-2 lg:gap-6 xl:gap-8">
          <motion.div {...fadeUp}>
            <ContactsCard
              label="Офис"
              title="Наш адрес"
              link={MAP_LINK}
              subtitle={
                <div className="space-y-4">
                  <p className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#687C96]" />
                    <span>
                      г. Ростов-на-Дону,
                      <br />
                      ул. <span className="font-semibold text-[#2E2E2E]">Зелёная, 8а</span>
                    </span>
                  </p>
                  <p className="text-sm text-[#4B4B4B]/80 sm:text-base">
                    Мы работаем по югу страны. Офис открыт для встреч и
                    консультаций по проектам бассейнов и SPA-зон.
                  </p>
                </div>
              }
              addition={
                <p className="flex items-center gap-3">
                  <Clock className="h-5 w-5 shrink-0 text-[#687C96]" />
                  <span>09:00 — 18:00, без выходных</span>
                </p>
              }
            />
          </motion.div>

          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.08 }}>
            <ContactsCard
              label="Связь"
              title="Наши контакты"
              subtitle={
                <div className="space-y-4">
                  <a
                    href="tel:79185538734"
                    className="flex items-center gap-3 transition hover:text-[#687C96]"
                  >
                    <Phone className="h-5 w-5 shrink-0 text-[#687C96]" />
                    <span className="font-medium text-[#2E2E2E]">
                      +7 918 553-87-34
                    </span>
                  </a>
                  <a
                    href="tel:78632838281"
                    className="flex items-center gap-3 transition hover:text-[#687C96]"
                  >
                    <Phone className="h-5 w-5 shrink-0 text-[#687C96]" />
                    <span className="font-medium text-[#2E2E2E]">
                      +7 863 283-82-81
                    </span>
                  </a>
                </div>
              }
              addition={
                <a
                  href="mailto:info@ipool.ru"
                  className="flex items-center gap-3 transition hover:text-[#687C96]"
                >
                  <Mail className="h-5 w-5 shrink-0 text-[#687C96]" />
                  <span>info@ipool.ru</span>
                </a>
              }
            />
          </motion.div>
        </div>

        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.15 }}
          className="mt-10 overflow-hidden rounded-2xl border border-black/10 bg-white p-2 shadow-sm lg:mt-14 lg:p-3"
        >
          <div className="mb-4 px-2 pt-2 lg:px-3">
            <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#687C96] sm:text-xs">
              На карте
            </p>
            <h2 className="mt-2 text-xl font-semibold text-[#2E2E2E] sm:text-2xl">
              Как нас найти
            </h2>
          </div>
          <div className="overflow-hidden rounded-xl">
            <YandexMap />
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contacts;
