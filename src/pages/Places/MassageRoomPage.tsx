import Gallery from "@/components/sections/gallery";
import HeroSectionSpa from "./heroSection";
import OfferSection from "./offerSection";
import roomImage from "@/assets/room-image.png";
import { spaBoxImg } from "@/data/photoLibrary";
import massageIcon1 from "@/assets/spaBoxIcons/massage-icon1.svg";
import massageIcon2 from "@/assets/spaBoxIcons/massage-icon2.svg";
import DesignSection from "./designSection";

const MassageRoomPage = () => {
  return (
    <>
      <HeroSectionSpa
        title="Массажный Кабинет"
        icon={massageIcon1}
        secondIcon={massageIcon2}
      />
      <OfferSection title="Массажный кабинет" image={spaBoxImg} />
      <div className="w-full mt-120 mb-96">
        <img className="m-auto" src={roomImage} alt="" />
      </div>
      <DesignSection />
      <Gallery />
    </>
  );
};

export default MassageRoomPage;
