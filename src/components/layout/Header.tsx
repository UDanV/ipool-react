import { useState } from "react";
import { motion } from "framer-motion";
import logo from "@/assets/logo.svg";
import MobileMenu from "./MobileMenu";
import { Link, NavLink } from "react-router-dom";
import HeaderDropdown from "../ui/dropDown";
import { headerMenuItems } from "@/data/headerNav";
import { Menu } from "lucide-react";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `relative transition-colors duration-200 hover:text-[#687C96] ${
    isActive ? "text-[#687C96]" : "text-[#2E2E2E]"
  } after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[#687C96] after:transition-transform hover:after:scale-x-100 ${
    isActive ? "after:scale-x-100" : ""
  }`;

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((open) => !open);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <MobileMenu onClose={closeMenu} isOpen={isMenuOpen} />

      <header className="sticky top-0 z-40 px-3 pt-3 sm:px-4 lg:px-0 lg:pt-5">
        <motion.div
          className="mx-auto flex w-full max-w-[90dvw] items-center justify-between gap-4 rounded-2xl border border-black/10 bg-white/90 px-4 py-3 shadow-sm backdrop-blur-md sm:px-5 lg:px-6 lg:py-4"
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            to="/"
            className="flex shrink-0 items-center py-1 transition-opacity hover:opacity-80"
          >
            <img className="h-8 w-auto sm:h-9 lg:h-10" src={logo} alt="iPool" />
          </Link>

          <nav className="hidden flex-1 justify-center lg:flex">
            <ul className="flex items-center gap-4 whitespace-nowrap text-[clamp(0.78rem,0.9vw,1.05rem)] font-semibold uppercase xl:gap-7 2xl:gap-9">
              {headerMenuItems.map((item, i) => {
                if (item.dropdown) {
                  return (
                    <HeaderDropdown
                      key={item.label}
                      label={item.label}
                      triggerTo={item.to}
                      items={item.dropdown}
                      delay={0.15 + i * 0.05}
                    />
                  );
                }

                return (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.05, duration: 0.35 }}
                  >
                    <NavLink to={item.to} className={navLinkClass}>
                      {item.label}
                    </NavLink>
                  </motion.li>
                );
              })}
            </ul>
          </nav>

          <div className="hidden shrink-0 items-center lg:flex">
            <Link
              to="/contacts"
              className="rounded-full border-2 border-[#687C96] bg-[#687C96] px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-[#5a6d84] hover:border-[#5a6d84] xl:px-7 xl:py-3 xl:text-base"
            >
              Контакты
            </Link>
          </div>

          <button
            type="button"
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
            onClick={toggleMenu}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-black/15 bg-[#F4F7FA] text-[#2E2E2E] transition hover:border-[#687C96]/40 hover:text-[#687C96] lg:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>
        </motion.div>
      </header>
    </>
  );
}

export default Header;
