import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

type DropdownItem = {
  label: string;
  to: string;
  sublabel?: string;
};

interface HeaderDropdownProps {
  label: string;
  triggerTo?: string;
  items: DropdownItem[];
  className?: string;
  hideDelayMs?: number;
  delay?: number;
}

const HeaderDropdown: React.FC<HeaderDropdownProps> = ({
  label,
  triggerTo,
  items,
  className,
  hideDelayMs = 180,
  delay = 0,
}) => {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const handleEnter = () => {
    clearTimer();
    setOpen(true);
  };

  const handleLeave = () => {
    clearTimer();
    closeTimer.current = setTimeout(() => setOpen(false), hideDelayMs);
  };

  return (
    <motion.li
      className={`relative ${className ?? ""}`}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onFocus={handleEnter}
      onBlur={handleLeave}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
    >
      {triggerTo ? (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay, duration: 0.4 }}
        >
          <Link to={triggerTo} className="cursor-pointer">
            {label}
          </Link>
        </motion.div>
      ) : (
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay, duration: 0.4 }}
          className="cursor-pointer"
        >
          {label}
        </motion.span>
      )}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="
              absolute left-1/2 top-full -translate-x-1/2 mt-3
              min-w-[12rem] rounded-xl border border-black/10 bg-[#F9FAFD]
              shadow-xl ring-1 ring-black/5 z-[60]
            "
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
          >
            <ul className="py-2">
              {items.map((it) => (
                <li key={it.to}>
                  <Link
                    to={it.to}
                    className="block px-4 py-2.5 text-sm text-gray-800 hover:bg-gray-100"
                  >
                    <div className="font-medium">{it.label}</div>
                    {it.sublabel && (
                      <div className="text-xs text-gray-500">{it.sublabel}</div>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
};

export default HeaderDropdown;