import Gallery from "@/components/sections/gallery";
import HeroSectionSpa from "./heroSection";
import OfferSection from "./offerSection";
import roomImage from "@/assets/room-image.png";
import { spaBoxImg } from "@/data/photoLibrary";
import hamamIcon from "@/assets/spaBoxIcons/hamam-icon.svg";
import DesignSection from "./designSection";

const HamamPage = () => {
  return (
    <>
      <HeroSectionSpa title="Хамам" icon={hamamIcon} />
      <OfferSection title="Хамам" image={spaBoxImg} />
      <div className="w-full mt-120 mb-96">
        <img className="m-auto" src={roomImage} alt="" />
      </div>
      <DesignSection />
      <Gallery />
    </>
  );
};

export default HamamPage;
