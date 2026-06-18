import Gallery from "@/components/sections/gallery";
import HeroSectionSpa from "./heroSection";
import OfferSection from "./offerSection";
import roomImage from "@/assets/room-image.png";
import { spaBoxImg } from "@/data/photoLibrary";
import saunasIcon from "@/assets/spaBoxIcons/saunas-icon.svg";
import DesignSection from "./designSection";

const SaunasPageSpaBox = () => {
  return (
    <>
      <HeroSectionSpa title="Сауны" icon={saunasIcon} />
      <OfferSection title="Разработка саун" image={spaBoxImg} />
      <div className="w-full mt-120 mb-96">
        <img className="m-auto" src={roomImage} alt="" />
      </div>
      <DesignSection />
      <Gallery />
    </>
  );
};

export default SaunasPageSpaBox;
