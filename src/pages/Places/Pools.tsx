import Gallery from "@/components/sections/gallery"
import HeroSectionSpa from "./heroSection"
import OfferSection from "./offerSection"
import roomImage from '@/assets/room-image.png'
import galleryImg1 from '@/assets/gallery_img1.png'
import galleryImg2 from '@/assets/gallery_img2.png'
import galleryImg3 from '@/assets/gallery_img3.png'
import galleryImg4 from '@/assets/gallery_img4.png'
import poolIcon from '@/assets/pool-icon.svg'
import DesignSection from "./designSection"

const PoolsPage = () => {

    const imagesList = [
        galleryImg1,
        galleryImg2,
        galleryImg3,
        galleryImg4,
    ]

    return (
        <>
            <HeroSectionSpa title="Бассейны" icon={poolIcon}></HeroSectionSpa>
            <OfferSection title="Разработка бассейнов"></OfferSection>
            <div className="w-full mt-120 mb-96">
                <img className="m-auto" src={roomImage} alt="" />
            </div>
            <DesignSection></DesignSection>
            <Gallery images={imagesList}></Gallery>
        </>
    )
}

export default PoolsPage