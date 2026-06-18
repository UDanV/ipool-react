import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

interface ContactsCardProps {
  title: string;
  label?: string;
  link?: string;
  subtitle: ReactNode;
  addition?: ReactNode;
  className?: string;
}

const ContactsCard = ({
  title,
  label,
  subtitle,
  addition,
  link,
  className = "",
}: ContactsCardProps) => {
  return (
    <article
      className={`flex h-full flex-col justify-between gap-8 rounded-2xl border border-black/10 bg-white p-6 shadow-sm sm:p-8 lg:p-10 ${className}`}
    >
      <div className="flex flex-col gap-5 lg:gap-6">
        {label && (
          <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#687C96] sm:text-xs">
            {label}
          </p>
        )}
        <h2 className="text-2xl font-semibold leading-tight text-[#2E2E2E] sm:text-3xl lg:text-4xl">
          {title}
        </h2>
        <div className="max-w-xl text-base leading-relaxed text-[#4B4B4B] sm:text-lg lg:text-xl">
          {subtitle}
        </div>
        {addition && (
          <div className="rounded-xl bg-[#F4F7FA] px-4 py-3 text-sm font-medium text-[#2E2E2E] sm:text-base lg:text-lg">
            {addition}
          </div>
        )}
      </div>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Открыть ${title}`}
          className="ml-auto flex h-11 w-11 items-center justify-center rounded-full border border-black/15 text-[#2E2E2E] transition hover:border-[#687C96] hover:bg-[#687C96] hover:text-white sm:h-12 sm:w-12"
        >
          <ArrowUpRight className="h-5 w-5" />
        </a>
      )}
    </article>
  );
};

export default ContactsCard;
