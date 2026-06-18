import Gallery from "@/components/sections/gallery";
import HeroSectionSpa from "./heroSection";
import OfferSection from "./offerSection";
import roomImage from "@/assets/room-image.png";
import { bgSpabox, spaBoxImg } from "@/data/photoLibrary";
import herbalIcon1 from "@/assets/spaBoxIcons/herbal-icon1.svg";
import herbalIcon2 from "@/assets/spaBoxIcons/herbal-icon2.svg";
import DesignSection from "./designSection";

const HerbalSaunaPage = () => {
  return (
    <>
      <HeroSectionSpa
        title="Травяная Сауна"
        icon={herbalIcon1}
        secondIcon={herbalIcon2}
        background={bgSpabox}
      />
      <OfferSection title="Травяная Сауна" image={spaBoxImg} />
      <div className="w-full mt-120 mb-96">
        <img className="m-auto" src={roomImage} alt="" />
      </div>
      <DesignSection />
      <Gallery />
    </>
  );
};

export default HerbalSaunaPage;
