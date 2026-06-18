import Gallery from "@/components/sections/gallery";
import HeroSectionSpa from "./heroSection";
import OfferSection from "./offerSection";
import roomImage from "@/assets/room-image.png";
import { spaBoxImg } from "@/data/photoLibrary";
import saltIcon from "@/assets/spaBoxIcons/salt-icon.svg";
import DesignSection from "./designSection";

const SaltRoomPage = () => {
  return (
    <>
      <HeroSectionSpa title="Соляная Комната" icon={saltIcon} />
      <OfferSection title="Соляная Комната" image={spaBoxImg} />
      <div className="w-full mt-120 mb-96">
        <img className="m-auto" src={roomImage} alt="" />
      </div>
      <DesignSection />
      <Gallery />
    </>
  );
};

export default SaltRoomPage;
