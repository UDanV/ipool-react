import HeroSectionSpa from "@/pages/Places/heroSection";
import poolIcon from "@/assets/spaBoxIcons/pool-icon.svg";
import PoolSchemeBlock from "@/components/sections/poolScheme";
import DesignSection from "../Places/designSection";
import roomImage from "@/assets/room-image.png";

const CompositePools = () => {
  return (
    <>
      <HeroSectionSpa
        title="Композитный бассейн"
        icon={poolIcon}
        poolsarLogo={true}
      />
      <PoolSchemeBlock />
      <div className="w-full mt-24 mb-28 px-3 lg:mt-48 lg:mb-48 2xl:mt-120 2xl:mb-96">
        <img
          className="m-auto w-full max-w-[90dvw] object-contain"
          src={roomImage}
          alt=""
        />
      </div>
      <DesignSection />
    </>
  );
};

export default CompositePools;
