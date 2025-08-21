import Gallery from "@/components/sections/gallery"
import HeroSectionSpa from "./heroSection"
import OfferSection from "./offerSection"
import roomImage from '@/assets/room-image.png'
import galleryImg1 from '@/assets/gallery_img1.png'
import galleryImg2 from '@/assets/gallery_img2.png'
import galleryImg3 from '@/assets/gallery_img3.png'
import galleryImg4 from '@/assets/gallery_img4.png'
import massageIcon1 from '@/assets/massage-icon1.svg'
import massageIcon2 from '@/assets/massage-icon2.svg'
import DesignSection from "./designSection"

const MassageRoomPage = () => {

    const imagesList = [
        galleryImg1,
        galleryImg2,
        galleryImg3,
        galleryImg4,
    ]

    return (
        <>
            <HeroSectionSpa title="Массажный Кабинет" icon={massageIcon1} secondIcon={massageIcon2}></HeroSectionSpa>
            <OfferSection title="Массажный кабинет"></OfferSection>
            <div className="w-full mt-120 mb-96">
                <img className="m-auto" src={roomImage} alt="" />
            </div>
            <DesignSection></DesignSection>
            <Gallery images={imagesList}></Gallery>
        </>
    )
}

export default MassageRoomPage