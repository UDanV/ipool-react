import RoundedButton from "./roundedButton";
import type { FilterTab } from "@/data/projects";

const tabs: { id: FilterTab; label: string }[] = [
  { id: "all", label: "Всё" },
  { id: "pools", label: "Бассейны" },
  { id: "saunas", label: "Сауны" },
];

interface FilterProps {
  className?: string;
  value?: FilterTab;
  onChange?: (tab: FilterTab) => void;
}

const Filter = ({ className = "", value = "all", onChange }: FilterProps) => {
  return (
    <div
      className={`${className} flex w-full flex-wrap gap-2 rounded-2xl bg-[#EDEDED] p-1.5 sm:gap-3 sm:p-2`}
    >
      {tabs.map((tab) => (
        <RoundedButton
          key={tab.id}
          className={`flex-1 px-4 py-2.5 text-center text-sm font-semibold transition-all duration-200 sm:min-w-[120px] sm:text-base lg:text-lg ${
            value === tab.id
              ? "border-[#687C96] bg-[#687C96] text-white shadow-sm"
              : "border-transparent bg-transparent text-[#2E2E2E] hover:bg-white/70"
          }`}
          onClick={() => onChange?.(tab.id)}
        >
          {tab.label}
        </RoundedButton>
      ))}
    </div>
  );
};

export default Filter;
