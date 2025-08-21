import { useState } from 'react'
import { motion } from 'framer-motion'
import logo from '@/assets/logo.svg'
import RoundedButton from '../ui/roundedButton'
import burger from '@/assets/burger.svg'
import MobileMenu from './MobileMenu'
import { Link } from 'react-router-dom'
import HeaderDropdown from '../ui/dropDown'

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const menuItems = [
        { text: 'Главная', link: '/' },
        { text: 'Наши работы', link: '/works' },
        { text: 'spa-box', link: '/spa-box' },
        { text: 'бани и сауны', link: '/saunas' },
        { text: 'как мы работаем', link: '/activity' },
        { text: 'о компании', link: '/about' },
    ]

    return (
        <>
            <MobileMenu onClose={toggleMenu} isOpen={isMenuOpen} />

            <motion.div
                className="w-full max-w-[1850px] mt-5.5 px-4 flex items-center justify-between lg:px-8 lg:border-y lg:border-black mx-auto"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.17, 0.67, 0.83, 0.67] }}
            >
                <motion.div
                    className="flex-shrink-0 py-5 lg:border-r lg:pr-4 xl:pr-32"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    <img className="w-auto" src={logo} alt="logo" />
                </motion.div>

                <div className="hidden lg:flex flex-1 justify-center">
                    <ul className="flex font-semibold uppercase gap-4 xl:gap-8 2xl:gap-11 text-[#2E2E2E] text-[clamp(0.9rem,1vw,1.25rem)] whitespace-nowrap">
                        {menuItems.map((item, i) => {
                            if (item.text.toLowerCase() === "spa-box") {
                            return (
                                <HeaderDropdown
                                key={item.text}
                                label={item.text}
                                triggerTo={item.link} 
                                items={[
                                    { label: "Сауна Кроксен", to: "/saunaCroxen" },
                                    { label: "Дорожка Кнейпа", to: "/kneipPath" },
                                    { label: "Массажный кабинет", to: "/massageRoom" },
                                    { label: "Инфракрасная кабина", to: "/infraredCabin" },
                                    { label: "Ледогенератор", to: "/iceGenerator" },
                                    { label: "Хамам", to: "/hamam" },
                                    { label: "Травяная сауна", to: "/herbalSauna" },
                                    { label: "Душ впечатлений", to: "/impressionShower" },
                                    { label: "Соляная комната", to: "/saltRoom" },
                                    { label: "Бассейны", to: "/pools" },
                                    { label: "Сауны", to: "/saunas" },
                                ]}
                                className="px-1"
                                hideDelayMs={200} 
                                delay={ 0.2 * i }
                                />
                            );
                            }

                            return (
                            <motion.li
                                key={item.text}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                            >
                                <Link to={item.link}>{item.text}</Link>
                            </motion.li>
                            );
                        })}
                    </ul>
                </div>

                <motion.div
                    className="hidden lg:flex flex-shrink-0 lg:border-l lg:pl-4 2xl:pl-32 self-stretch items-center"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    >
                    <Link to="/contacts">
                        <RoundedButton className="px-6 py-2 xl:px-11 xl:py-4 2xl:px-12 2xl:py-6 uppercase text-xl border-black border-2 font-semibold rounded-full">
                        Контакты
                        </RoundedButton>
                    </Link>
                </motion.div>

                <motion.div
                    className="flex lg:hidden cursor-pointer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                >
                    <img onClick={toggleMenu} src={burger} alt="menu" />
                </motion.div>
            </motion.div>
        </>
    )
}

export default Header