import Gallery from "@/components/sections/gallery";
import HeroSectionSpa from "./heroSection";
import OfferSection from "./offerSection";
import roomImage from "@/assets/room-image.png";
import { spaBoxImg } from "@/data/photoLibrary";
import kneipPath from "@/assets/spaBoxIcons/kneipPath-icon.svg";
import DesignSection from "./designSection";

const KneipPathPage = () => {
  return (
    <>
      <HeroSectionSpa title="Дорожка Кнейпа" icon={kneipPath} />
      <OfferSection title="Дорожка кнейпа" image={spaBoxImg} />
      <div className="w-full mt-120 mb-96">
        <img className="m-auto" src={roomImage} alt="" />
      </div>
      <DesignSection />
      <Gallery />
    </>
  );
};

export default KneipPathPage;
