import Gallery from "@/components/sections/gallery";
import HeroSectionSpa from "./heroSection";
import OfferSection from "./offerSection";
import roomImage from "@/assets/room-image.png";
import { spaBoxImg } from "@/data/photoLibrary";
import poolIcon from "@/assets/spaBoxIcons/pool-icon.svg";
import DesignSection from "./designSection";

const PoolsPageSpaBox = () => {
  return (
    <>
      <HeroSectionSpa title="Бассейны" icon={poolIcon} />
      <OfferSection title="Разработка бассейнов" image={spaBoxImg} />
      <div className="w-full mt-120 mb-96">
        <img className="m-auto" src={roomImage} alt="" />
      </div>
      <DesignSection />
      <Gallery />
    </>
  );
};

export default PoolsPageSpaBox;
