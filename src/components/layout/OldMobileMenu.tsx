import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Disclosure } from "@heroui/react";
import { mobileNavLinks } from "@/data/headerNav";
import { X } from "lucide-react";

interface OldMobileMenuProps {
  onClose: () => void;
  isOpen: boolean;
}

function OldMobileMenu({ onClose, isOpen }: OldMobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed left-0 top-0 z-[60] flex h-dvh w-full flex-col justify-between gap-8 overflow-y-auto hide-scrollbar border-t border-black bg-white shadow-md transition-opacity duration-300 ease-in-out ${
        isOpen ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div
        className={`sticky z-10 flex w-full max-w-[90dvw] mx-auto items-center justify-end bg-white transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-y-8 translate-x-[-5px]" : "-translate-y-8 translate-x-0"
        }`}
      >
        <X onClick={onClose} className="w-12 sm:w-15 cursor-pointer" />
      </div>

      <ul className="flex flex-col items-center gap-5 px-4 py-4 text-2xl font-semibold uppercase text-[#2E2E2E] sm:gap-7 sm:text-[32px]">
        {mobileNavLinks.map((link, index) => (
          <li
            key={`${link.label}-${link.to}`}
            className={`w-full transition-transform duration-300 ease-in-out ${
              isOpen ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: `${100 + index * 75}ms` }}
          >
            {link.dropdown ? (
              <Disclosure className="mobile-nav-disclosure w-full">
                <Disclosure.Heading className="flex items-center justify-center gap-3">
                  <Link
                    to={link.to}
                    onClick={onClose}
                    className="hover:text-[#687C96]"
                  >
                    {link.label}
                  </Link>
                  <Disclosure.Trigger
                    aria-label={`Раскрыть ${link.label}`}
                    className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#E5E8EB] text-[#687C96] transition hover:border-[#687C96] hover:bg-[#687C96]/10"
                  >
                    <Disclosure.Indicator className="ml-0" />
                  </Disclosure.Trigger>
                </Disclosure.Heading>

                <Disclosure.Content>
                  <Disclosure.Body className="mt-4 flex flex-col items-center gap-3 border-t border-[#E5E8EB] pt-4 text-base font-bold uppercase sm:text-[20px]">
                    {link.dropdown.map((sublink) => (
                      <Link
                        key={sublink.to}
                        to={sublink.to}
                        onClick={onClose}
                        className="text-[#4B4B4B] transition hover:text-[#687C96]"
                      >
                        {sublink.label}
                      </Link>
                    ))}
                  </Disclosure.Body>
                </Disclosure.Content>
              </Disclosure>
            ) : (
              <div className="text-center">
                <Link
                  to={link.to}
                  onClick={onClose}
                  className={
                    link.label === "Главная"
                      ? "text-[#687C96]"
                      : "hover:text-[#687C96]"
                  }
                >
                  {link.label}
                </Link>
              </div>
            )}
          </li>
        ))}
      </ul>

      <div
        className={`flex flex-col items-center gap-4 px-4 pb-8 transition-transform duration-300 ease-in-out delay-500 sm:flex-row sm:items-end sm:justify-between sm:mt-16 ${
          isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <h2 className="text-5xl font-bold text-[#2E2E2E] sm:text-[66px]">
          IPOOL
        </h2>
        <div className="flex flex-col text-[17px] font-normal items-end">
          <a href="tel:78632838281">+7 863 283-82-81</a>
          <a href="tel:79185538734">+7 918 553-87-34</a>
          <a href="mailto:info@ipool.ru" className="text-[17px] uppercase">
            info@ipool.ru
          </a>
        </div>
      </div>
    </div>
  );
}

export default OldMobileMenu;
