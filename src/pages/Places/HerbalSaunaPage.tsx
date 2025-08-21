import Gallery from "@/components/sections/gallery"
import HeroSectionSpa from "./heroSection"
import OfferSection from "./offerSection"
import roomImage from '@/assets/room-image.png'
import galleryImg1 from '@/assets/gallery_img1.png'
import galleryImg2 from '@/assets/gallery_img2.png'
import galleryImg3 from '@/assets/gallery_img3.png'
import galleryImg4 from '@/assets/gallery_img4.png'
import herbalIcon1 from '@/assets/herbal-icon1.svg'
import herbalIcon2 from '@/assets/herbal-icon2.svg'
import DesignSection from "./designSection"

const HerbalSaunaPage = () => {

    const imagesList = [
        galleryImg1,
        galleryImg2,
        galleryImg3,
        galleryImg4,
    ]

    return (
        <>
            <HeroSectionSpa title="Травяная Сауна" icon={herbalIcon1} secondIcon={herbalIcon2}></HeroSectionSpa>
            <OfferSection title="Травяная Сауна"></OfferSection>
            <div className="w-full mt-120 mb-96">
                <img className="m-auto" src={roomImage} alt="" />
            </div>
            <DesignSection></DesignSection>
            <Gallery images={imagesList}></Gallery>
        </>
    )
}

export default HerbalSaunaPage