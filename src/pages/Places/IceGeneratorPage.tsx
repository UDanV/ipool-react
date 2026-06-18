import Gallery from "@/components/sections/gallery";
import HeroSectionSpa from "./heroSection";
import OfferSection from "./offerSection";
import roomImage from "@/assets/room-image.png";
import { spaBoxImg } from "@/data/photoLibrary";
import icegenIcon from "@/assets/spaBoxIcons/icegen-icon.svg";
import DesignSection from "./designSection";

const IceGeneratorPage = () => {
  return (
    <>
      <HeroSectionSpa title="Ледогенератор" icon={icegenIcon} />
      <OfferSection title="Ледо-генератор" image={spaBoxImg} />
      <div className="w-full mt-120 mb-96">
        <img className="m-auto" src={roomImage} alt="" />
      </div>
      <DesignSection />
      <Gallery />
    </>
  );
};

export default IceGeneratorPage;
