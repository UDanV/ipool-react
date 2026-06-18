import Gallery from "@/components/sections/gallery";
import HeroSectionSpa from "./heroSection";
import OfferSection from "./offerSection";
import roomImage from "@/assets/room-image.png";
import { spaBoxImg } from "@/data/photoLibrary";
import impressionIcon1 from "@/assets/spaBoxIcons/impression-icon1.svg";
import impressionIcon2 from "@/assets/spaBoxIcons/impression-icon2.svg";
import DesignSection from "./designSection";

const ImpressionShowerPage = () => {
  return (
    <>
      <HeroSectionSpa
        title="Душ впечатлений"
        icon={impressionIcon1}
        secondIcon={impressionIcon2}
      />
      <OfferSection title="Душ впечатлений" image={spaBoxImg} />
      <div className="w-full mt-120 mb-96">
        <img className="m-auto" src={roomImage} alt="" />
      </div>
      <DesignSection />
      <Gallery />
    </>
  );
};

export default ImpressionShowerPage;
