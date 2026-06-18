import Gallery from "@/components/sections/gallery";
import HeroSectionSpa from "./heroSection";
import OfferSection from "./offerSection";
import roomImage from "@/assets/room-image.png";
import { spaBoxImg } from "@/data/photoLibrary";
import infraredIcon from "@/assets/spaBoxIcons/infrared-icon.svg";
import DesignSection from "./designSection";

const InfraredCabinPage = () => {
  return (
    <>
      <HeroSectionSpa title="Инфракрасная Кабина" icon={infraredIcon} />
      <OfferSection title="Инфракрасная кабина" image={spaBoxImg} />
      <div className="w-full mt-120 mb-96">
        <img className="m-auto" src={roomImage} alt="" />
      </div>
      <DesignSection />
      <Gallery />
    </>
  );
};

export default InfraredCabinPage;
