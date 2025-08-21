import ContactsCard from "@/components/ui/contactsCard"
import YandexPanorama from "@/components/map/YandexPanoram"

const Contacts = () => {
    return (
        <>
            <h1 className="uppercase font-bold text-[80px] lg:text-[160px] text-center 2xl:text-start 2xl:text-[220px] 2xl:ml-40">Контакты</h1>
            <div className="flex justify-between w-full max-w-[1800px] m-auto flex-col lg:flex-row gap-10 xl:gap-20">
                <ContactsCard 
                    title="Наш адрес" 
                    className="p-10" 
                    subtitle={
                        <>
                            Мы работаем по югу страны. 
                            <br /> Наш офис находится 
                            <br /> в Ростове-на-Дону 
                            <br /> по улице - <span className="font-semibold">Зеленая 8а</span>
                        </>
                    }
                    addition={
                        <>
                            10:00 — 19:00, <br /> без выходных
                        </>
                    }>
                </ContactsCard>
                <ContactsCard 
                    title="Наши контакты" 
                    className="p-10 lg:p-20"
                    subtitle={
                        <>
                            <a href="tel:79185538734">+7 918 553-87-34 </a>
                            <br />
                            <br />
                            <a href="tel:78632838281">+7 863 283-82-81</a>
                        </>
                    }
                    addition={
                        <>
                            <p className="font-semibold">Email: <a href="mailto:info@ipool.ru" className="font-light">info@ipool.ru</a></p>
                        </>
                    }>
                </ContactsCard>
            </div>
            <div className="mt-32 w-full max-w-[1800px] m-auto">
                <YandexPanorama height="850px"></YandexPanorama>
            </div>
        </>
    )  
}

export default Contacts