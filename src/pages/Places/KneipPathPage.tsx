import Gallery from "@/components/sections/gallery"
import HeroSectionSpa from "./heroSection"
import OfferSection from "./offerSection"
import roomImage from '@/assets/room-image.png'
import galleryImg1 from '@/assets/gallery_img1.png'
import galleryImg2 from '@/assets/gallery_img2.png'
import galleryImg3 from '@/assets/gallery_img3.png'
import galleryImg4 from '@/assets/gallery_img4.png'
import kneipPath from '@/assets/kneipPath-icon.svg'
import DesignSection from "./designSection"

const KneipPathPage = () => {

    const imagesList = [
        galleryImg1,
        galleryImg2,
        galleryImg3,
        galleryImg4,
    ]

    return (
        <>
            <HeroSectionSpa title="Дорожка Кнейпа" icon={kneipPath} />
            <OfferSection title="Дорожка кнейпа"></OfferSection>
            <div className="w-full mt-120 mb-96">
                <img className="m-auto" src={roomImage} alt="" />
            </div>
            <DesignSection></DesignSection>
            <Gallery images={imagesList}></Gallery>
        </>
    )
}

export default KneipPathPage