import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Description,
  Dropdown,
  Label,
} from "@heroui/react";
import type { NavDropdownItem } from "@/data/headerNav";

interface HeaderDropdownProps {
  label: string;
  triggerTo?: string;
  items: NavDropdownItem[];
  className?: string;
  delay?: number;
}

const HeaderDropdown = ({
  label,
  triggerTo,
  items,
  className,
  delay = 0,
}: HeaderDropdownProps) => {
  const navigate = useNavigate();

  return (
    <motion.li
      className={`relative ${className ?? ""}`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
    >
      <div className="flex items-center gap-1">
        {triggerTo ? (
          <NavLink
            to={triggerTo}
            className={({ isActive }) =>
              `cursor-pointer transition-colors duration-200 hover:text-[#687C96] ${
                isActive ? "text-[#687C96]" : ""
              }`
            }
          >
            {label}
          </NavLink>
        ) : (
          <span>{label}</span>
        )}

        <Dropdown>
          <Dropdown.Trigger
            aria-label={`Подменю ${label}`}
            className="inline-flex cursor-pointer items-center rounded-full border border-transparent p-1.5 text-[#2E2E2E] transition hover:border-black/10 hover:bg-[#F4F7FA] hover:text-[#687C96]"
          >
            <ChevronDown className="h-4 w-4" />
          </Dropdown.Trigger>

          <Dropdown.Popover className="min-w-[15rem] rounded-xl border border-black/10 bg-white p-1 shadow-lg">
            <Dropdown.Menu
              onAction={(key) => navigate(String(key))}
              className="py-1"
            >
              {items.map((item) => (
                <Dropdown.Item
                  key={item.to}
                  id={item.to}
                  textValue={item.label}
                  className="uppercase"
                >
                  <Label>{item.label}</Label>
                  {item.sublabel && (
                    <Description>{item.sublabel}</Description>
                  )}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown.Popover>
        </Dropdown>
      </div>
    </motion.li>
  );
};

export default HeaderDropdown;
