import { useState } from "react";
import { motion } from "framer-motion";
import logo from "@/assets/logo.svg";
import RoundedButton from "../ui/roundedButton";
import MobileMenu from "./MobileMenu";
import { Link } from "react-router-dom";
import HeaderDropdown from "../ui/dropDown";
import { headerMenuItems } from "@/data/headerNav";
import { Menu } from "lucide-react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <MobileMenu onClose={toggleMenu} isOpen={isMenuOpen} />

      <header className="sticky top-0 z-40 bg-[#F9FAFD]/95 pt-0 lg:pt-5.5 backdrop-blur-sm">
      <motion.div
        className="w-full max-w-[90dvw] flex items-center justify-between 2xl:px-8 lg:border-y lg:border-black mx-auto"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.17, 0.67, 0.83, 0.67] }}
      >
        <motion.div
          className="flex-shrink-0 py-4 lg:border-r lg:border-black lg:pr-4 xl:pr-8 2xl:pr-32"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Link to={"/"}>
            <img className="w-auto" src={logo} alt="logo" />
          </Link>
        </motion.div>

        <div className="hidden lg:flex flex-1 justify-center">
          <ul className="flex font-semibold uppercase gap-3 xl:gap-6 2xl:gap-11 text-[#2E2E2E] text-[clamp(0.78rem,0.9vw,1.25rem)] whitespace-nowrap">
            {headerMenuItems.map((item, i) => {
              if (item.dropdown) {
                return (
                  <HeaderDropdown
                    key={item.label}
                    label={item.label}
                    triggerTo={item.to}
                    items={item.dropdown}
                    className="px-1"
                    delay={0.2 * i}
                  />
                );
              }

              return (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                >
                  <Link to={item.to} className="hover:text-[#687C96]">
                    {item.label}
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </div>

        <motion.div
          className="hidden lg:flex flex-shrink-0 lg:border-l lg:border-black lg:pl-4 xl:pl-8 2xl:pl-17 self-stretch items-center"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Link to="/contacts">
            <RoundedButton className="px-4 py-2 xl:px-8 xl:py-4 uppercase text-sm xl:text-xl border-black border-2 font-semibold rounded-full">
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
          <Menu className="w-12 sm:w-15" onClick={toggleMenu} />
        </motion.div>
      </motion.div>
      </header>
    </>
  );
}

export default Header;
