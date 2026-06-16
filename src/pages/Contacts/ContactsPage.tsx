import ContactsCard from "@/components/ui/contactsCard"
import { motion } from "framer-motion"

const Contacts = () => {
    return (
        <>
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="uppercase font-bold text-[clamp(3rem,16vw,5rem)] lg:text-[160px] text-center 2xl:text-start 2xl:text-[220px] 2xl:ml-40"
            >
                Контакты
            </motion.h1>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
                className="flex justify-between w-full max-w-[90dvw] m-auto flex-col px-3 lg:flex-row lg:px-0 gap-6 lg:gap-10 xl:gap-20"
            >
                <ContactsCard
                    title="Наш адрес"
                    className="p-6 lg:p-10"
                    subtitle={
                        <>
                            Мы работаем по югу страны.
                            <br /> Наш офис находится
                            <br /> в Ростове-на-Дону
                            <br /> по улице - <span className="font-semibold">Зеленая 8а</span>
                        </>
                    }
                    link='https://yandex.ru/maps/39/rostov-na-donu/house/zelyonaya_ulitsa_8a/Z0AYcQ5oTUUEQFptfX50eXplZw==/?ll=39.798403%2C47.258663&z=17.11'
                    addition={
                        <>
                            09:00 — 18:00, <br /> без выходных
                        </>
                    }>
                </ContactsCard>
                <ContactsCard
                    title="Наши контакты"
                    className="p-10 lg:p-20"
                    subtitle={
                        <>
                            <a className="hover:text-[#687C96]" href="tel:79185538734">+7 918 553-87-34 </a>
                            <br />
                            <br />
                            <a className="hover:text-[#687C96]" href="tel:78632838281">+7 863 283-82-81</a>
                        </>
                    }
                    addition={
                        <>
                            <p className="font-semibold">Email: <a className="hover:text-[#687C96] font-light" href="mailto:info@ipool.ru">info@ipool.ru</a></p>
                        </>
                    }>
                </ContactsCard>
            </motion.div>
        </>
    )
}

export default Contacts