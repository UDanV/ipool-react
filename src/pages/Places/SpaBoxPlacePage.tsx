import Gallery from "@/components/sections/gallery";
import HeroSectionSpa from "./heroSection";
import OfferSection from "./offerSection";
import croxenIcon from "@/assets/spaBoxIcons/croxen-icon.svg";
import hamamIcon from "@/assets/spaBoxIcons/hamam-icon.svg";
import herbalIcon1 from "@/assets/spaBoxIcons/herbal-icon1.svg";
import herbalIcon2 from "@/assets/spaBoxIcons/herbal-icon2.svg";
import icegenIcon from "@/assets/spaBoxIcons/icegen-icon.svg";
import impressionIcon1 from "@/assets/spaBoxIcons/impression-icon1.svg";
import impressionIcon2 from "@/assets/spaBoxIcons/impression-icon2.svg";
import infraredIcon from "@/assets/spaBoxIcons/infrared-icon.svg";
import kneipPathIcon from "@/assets/spaBoxIcons/kneipPath-icon.svg";
import massageIcon1 from "@/assets/spaBoxIcons/massage-icon1.svg";
import massageIcon2 from "@/assets/spaBoxIcons/massage-icon2.svg";
import poolIcon from "@/assets/spaBoxIcons/pool-icon.svg";
import saltIcon from "@/assets/spaBoxIcons/salt-icon.svg";
import saunasIcon from "@/assets/spaBoxIcons/saunas-icon.svg";
import { bgSpabox, spaBoxImg } from "@/data/photoLibrary";
import DesignSection from "./designSection";
import { Video } from "@/components/ui/video";

export type SpaBoxPlaceKey =
  | "kneipPath"
  | "massageRoom"
  | "infraredCabin"
  | "iceGenerator"
  | "saunaCraxen"
  | "hamam"
  | "impressionShower"
  | "saltRoom"
  | "pools"
  | "saunas"
  | "herbalSauna";

type SpaBoxPlaceConfig = {
  heroTitle: string;
  offerTitle: string;
  icon: string;
  secondIcon?: string;
  background?: string;
  media: "video" | "image";
};

const SPA_BOX_PLACES: Record<SpaBoxPlaceKey, SpaBoxPlaceConfig> = {
  kneipPath: {
    heroTitle: "Дорожка Кнейпа",
    offerTitle: "Дорожка кнейпа",
    icon: kneipPathIcon,
    media: "video",
  },
  massageRoom: {
    heroTitle: "Массажный Кабинет",
    offerTitle: "Массажный кабинет",
    icon: massageIcon1,
    secondIcon: massageIcon2,
    media: "video",
  },
  infraredCabin: {
    heroTitle: "Инфракрасная Кабина",
    offerTitle: "Инфракрасная кабина",
    icon: infraredIcon,
    media: "video",
  },
  iceGenerator: {
    heroTitle: "Ледогенератор",
    offerTitle: "Ледо-генератор",
    icon: icegenIcon,
    media: "video",
  },
  saunaCraxen: {
    heroTitle: "Сауна Кроксен",
    offerTitle: "Сауна кроксен",
    icon: croxenIcon,
    media: "video",
  },
  hamam: {
    heroTitle: "Хамам",
    offerTitle: "Хамам",
    icon: hamamIcon,
    media: "video",
  },
  impressionShower: {
    heroTitle: "Душ впечатлений",
    offerTitle: "Душ впечатлений",
    icon: impressionIcon1,
    secondIcon: impressionIcon2,
    media: "video",
  },
  saltRoom: {
    heroTitle: "Соляная Комната",
    offerTitle: "Соляная Комната",
    icon: saltIcon,
    media: "video",
  },
  pools: {
    heroTitle: "Бассейны",
    offerTitle: "Разработка бассейнов",
    icon: poolIcon,
    media: "video",
  },
  saunas: {
    heroTitle: "Сауны",
    offerTitle: "Разработка саун",
    icon: saunasIcon,
    media: "video",
  },
  herbalSauna: {
    heroTitle: "Травяная Сауна",
    offerTitle: "Травяная Сауна",
    icon: herbalIcon1,
    secondIcon: herbalIcon2,
    background: bgSpabox,
    media: "video",
  },
};

type SpaBoxPlacePageProps = {
  place: SpaBoxPlaceKey;
};

const SpaBoxPlacePage = ({ place }: SpaBoxPlacePageProps) => {
  const config = SPA_BOX_PLACES[place];

  return (
    <div className="flex flex-col gap-28 lg:gap-48 2xl:gap-96">
      <HeroSectionSpa
        title={config.heroTitle}
        icon={config.icon}
        secondIcon={config.secondIcon}
        background={config.background}
      />
      <OfferSection title={config.offerTitle} image={spaBoxImg} />
      {config.media === "video" ? (
        <Video />
      ) : (
        <Video />
      )}
      <DesignSection />
      <Gallery />
    </div>
  );
};

export default SpaBoxPlacePage;
