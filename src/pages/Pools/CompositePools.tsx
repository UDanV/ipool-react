import HeroSectionSpa from "@/pages/Places/heroSection"
import poolIcon from '@/assets/pool-icon.svg'
import PoolSchemeBlock from "@/components/sections/poolScheme"
import DesignSection from "../Places/designSection"
import roomImage from '@/assets/room-image.png'
import Gallery from "@/components/sections/gallery"
import galleryImg1 from '@/assets/gallery_img1.png'
import galleryImg2 from '@/assets/gallery_img2.png'
import galleryImg3 from '@/assets/gallery_img3.png'
import galleryImg4 from '@/assets/gallery_img4.png'

const CompositePools = () => {

    const imagesList = [
        galleryImg1,
        galleryImg2,
        galleryImg3,
        galleryImg4,
    ]

    return (
        <>
            <HeroSectionSpa title="Композитный бассейн" icon={poolIcon}></HeroSectionSpa>
            <PoolSchemeBlock />
            <div className="w-full mt-24 mb-28 px-3 lg:mt-48 lg:mb-48 2xl:mt-120 2xl:mb-96">
                <img className="m-auto w-full max-w-[90dvw] object-contain" src={roomImage} alt="" />
            </div>
            <DesignSection />
            <Gallery images={imagesList}></Gallery>
        </>
    )
}

export default CompositePools