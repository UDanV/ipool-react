import Gallery from "@/components/sections/gallery";
import HeroSectionSpa from "./heroSection";
import OfferSection from "./offerSection";
import roomImage from "@/assets/room-image.png";
import { spaBoxImg } from "@/data/photoLibrary";
import croxenIcon from "@/assets/spaBoxIcons/croxen-icon.svg";
import DesignSection from "./designSection";

const CroxenSaunaPage = () => {
  return (
    <>
      <HeroSectionSpa title="Сауна Кроксен" icon={croxenIcon} />
      <OfferSection title="Сауна кроксен" image={spaBoxImg} />
      <div className="w-full mt-120 mb-96">
        <img className="m-auto" src={roomImage} alt="" />
      </div>
      <DesignSection />
      <Gallery />
    </>
  );
};

export default CroxenSaunaPage;
