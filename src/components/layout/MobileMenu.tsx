import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Disclosure } from "@heroui/react";
import { mobileNavLinks } from "@/data/headerNav";
import logo from "@/assets/logo.svg";
import { ArrowUpRight, X } from "lucide-react";

interface MobileMenuProps {
  onClose: () => void;
  isOpen: boolean;
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const panelVariants = {
  hidden: { opacity: 0, y: -16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: { duration: 0.25 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 + index * 0.04, duration: 0.35 },
  }),
};

function MobileMenu({ onClose, isOpen }: MobileMenuProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[60] lg:hidden"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={overlayVariants}
        >
          <button
            type="button"
            aria-label="Закрыть меню"
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            className="absolute inset-x-3 top-3 bottom-3 flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-[#F9FAFD] shadow-2xl sm:inset-x-4 sm:top-4 sm:bottom-4"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex items-center justify-between border-b border-black/10 px-4 py-4 sm:px-5">
              <Link to="/" onClick={onClose} className="flex items-center">
                <img src={logo} alt="iPool" className="h-8 w-auto" />
              </Link>

              <button
                type="button"
                aria-label="Закрыть меню"
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 bg-white text-[#2E2E2E] transition hover:border-[#687C96] hover:text-[#687C96]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-5 hide-scrollbar sm:px-5">
              <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.3em] text-[#687C96]">
                Навигация
              </p>

              <ul className="space-y-3">
                {mobileNavLinks.map((link, index) => (
                  <motion.li
                    key={`${link.label}-${link.to}`}
                    custom={index}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {link.dropdown ? (
                      <div className="overflow-hidden rounded-xl border border-black/10 bg-white">
                        <Disclosure className="mobile-nav-disclosure w-full">
                          <Disclosure.Heading className="flex items-center justify-between gap-3 px-4 py-4">
                            <Link
                              to={link.to}
                              onClick={onClose}
                              className="text-base font-semibold uppercase tracking-wide text-[#2E2E2E] transition hover:text-[#687C96] sm:text-lg"
                            >
                              {link.label}
                            </Link>
                            <Disclosure.Trigger
                              aria-label={`Раскрыть ${link.label}`}
                              className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#E5E8EB] bg-[#F4F7FA] text-[#687C96] transition hover:border-[#687C96] hover:bg-[#687C96]/10"
                            >
                              <Disclosure.Indicator className="ml-0" />
                            </Disclosure.Trigger>
                          </Disclosure.Heading>

                          <Disclosure.Content>
                            <Disclosure.Body className="border-t border-black/10 bg-[#F4F7FA] px-3 py-3">
                              <div className="flex flex-col gap-2">
                                {link.dropdown.map((sublink) => (
                                  <Link
                                    key={sublink.to}
                                    to={sublink.to}
                                    onClick={onClose}
                                    className="rounded-lg px-3 py-2.5 text-sm font-medium uppercase text-[#4B4B4B] transition hover:bg-white hover:text-[#687C96] sm:text-base"
                                  >
                                    {sublink.label}
                                  </Link>
                                ))}
                              </div>
                            </Disclosure.Body>
                          </Disclosure.Content>
                        </Disclosure>
                      </div>
                    ) : (
                      <Link
                        to={link.to}
                        onClick={onClose}
                        className={`flex items-center justify-between rounded-xl border px-4 py-4 text-base font-semibold uppercase tracking-wide transition sm:text-lg ${
                          link.label === "Главная" || link.label === "контакты"
                            ? "border-[#687C96]/30 bg-[#687C96]/10 text-[#687C96]"
                            : "border-black/10 bg-white text-[#2E2E2E] hover:border-[#687C96]/30 hover:bg-[#F4F7FA] hover:text-[#687C96]"
                        }`}
                      >
                        {link.label}
                        <ArrowUpRight className="h-4 w-4 opacity-50" />
                      </Link>
                    )}
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.div
              custom={mobileNavLinks.length}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="border-t border-black/10 p-4 sm:p-5"
            >
              <div className="rounded-2xl border border-[#687C96]/25 bg-white p-5">
                <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#687C96]">
                  Связаться с нами
                </p>
                <div className="mt-3 space-y-1.5 text-sm text-[#4B4B4B] sm:text-base">
                  <a
                    href="tel:78632838281"
                    className="block transition hover:text-[#687C96]"
                  >
                    +7 863 283-82-81
                  </a>
                  <a
                    href="tel:79185538734"
                    className="block transition hover:text-[#687C96]"
                  >
                    +7 918 553-87-34
                  </a>
                  <a
                    href="mailto:info@ipool.ru"
                    className="block uppercase transition hover:text-[#687C96]"
                  >
                    info@ipool.ru
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MobileMenu;
