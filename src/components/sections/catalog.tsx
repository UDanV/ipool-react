import merch1 from '@/assets/merch1.png'
import merch2 from '@/assets/merch2.png'

const Catalog = () => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full mt-16">
            <div className="bg-[#CDCDCD] aspect-square rounded-tl-[40px] lg:rounded-tl-[70px]"></div>
            <div className="bg-[#CDCDCD] aspect-square"></div>
            <div className="bg-[#CDCDCD] aspect-square"></div>
            <div 
                className="bg-[#CDCDCD] aspect-square rounded-[40px] lg:rounded-[70px] bg-cover bg-center"
                style={{ backgroundImage: `url(${merch1})` }}
            />
            <div className="bg-[#CDCDCD] aspect-square"/>
            <div className="bg-[#CDCDCD] aspect-square"></div>
            <div className="bg-[#CDCDCD] aspect-square"></div>
            <div 
                className="aspect-square bg-cover bg-center"
                style={{ backgroundImage: `url(${merch2})` }}
            />
            <div className="bg-[#CDCDCD] aspect-square"></div>
            <div className="bg-[#CDCDCD] aspect-square rounded-tr-[40px] lg:rounded-tr-[70px]"></div>
            <div className="bg-[#CDCDCD] aspect-square"></div>
            <div className="bg-[#CDCDCD] aspect-square rounded-tl-[40px] lg:rounded-tl-[70px] rounded-br-[40px] lg:rounded-br-[70px]"></div>
        </div>
    )
}

export default Catalog