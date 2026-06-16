export type NavDropdownItem = {
  label: string;
  to: string;
  sublabel?: string;
};

export type NavLinkItem = {
  label: string;
  to: string;
  dropdown?: NavDropdownItem[];
};

export const spaBoxDropdownItems: NavDropdownItem[] = [
  { label: "Сауна Кроксен", to: "/spa-box/saunaCraxen" },
  { label: "Дорожка Кнейпа", to: "/spa-box/kneipPath" },
  { label: "Массажный кабинет", to: "/spa-box/massageRoom" },
  { label: "Инфракрасная кабина", to: "/spa-box/infraredCabin" },
  { label: "Ледогенератор", to: "/spa-box/iceGenerator" },
  { label: "Хамам", to: "/spa-box/hamam" },
  { label: "Травяная сауна", to: "/spa-box/herbalSauna" },
  { label: "Душ впечатлений", to: "/spa-box/impressionShower" },
  { label: "Соляная комната", to: "/spa-box/saltRoom" },
  { label: "Бассейны", to: "/spa-box/pools" },
  { label: "Сауны", to: "/spa-box/saunas" },
];

export const poolsDropdownItems: NavDropdownItem[] = [
  { label: "Композитные", to: "/pools/composite" },
  { label: "Бетонные", to: "/pools/concrete" },
];

export const headerMenuItems: NavLinkItem[] = [
  { label: "Наши работы", to: "/works" },
  { label: "spa-box", to: "/spa-box", dropdown: spaBoxDropdownItems },
  { label: "бассейны", to: "/pools", dropdown: poolsDropdownItems },
  { label: "сауны", to: "/saunas" },
  { label: "как мы работаем", to: "/activity" },
  { label: "о компании", to: "/about" },
];

export const mobileNavLinks: NavLinkItem[] = [
  { label: "Главная", to: "/" },
  ...headerMenuItems,
  { label: "контакты", to: "/contacts" },
];
