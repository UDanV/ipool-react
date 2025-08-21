import RoundedButton from "./roundedButton"

const AboutCard = ({ image, bg, title, className } : { image: string, bg: string, title: string, className?: string }) => {
    return (
        <div className={`flex flex-col ${className}`}>
            <div 
                className="relative flex items-center justify-center bg-no-repeat border border-black bg-white h-96 p-6"
                style={{ backgroundImage: `url(${bg})` }}
            >
                <img src={image} alt="" className="max-h-32 object-contain" />

                <RoundedButton
                    className="absolute bottom-6 right-6 w-30 h-12 flex items-center justify-center 
                                text-white bg-[#687C96] rounded-full shadow-md hover:bg-[#50627a] transition"
                    >
                    →
                </RoundedButton>
            </div>
            <p className="font-bold text-5xl">{title}</p>
        </div>
    )
}

export default AboutCard