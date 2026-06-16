interface CardProps {
  title: string;
  subtitle: string;
  image: string;
  onClick?: () => void;
}

function Card({ title, subtitle, image, onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      className="
        flex flex-col cursor-pointer
        transition duration-150
        active:scale-95 active:opacity-80
        hover:drop-shadow-2xl
      "
    >
      <div className="w-full h-72 overflow-hidden sm:h-80 lg:h-96 2xl:h-110">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      <p className="font-bold text-xl uppercase mt-2 sm:text-2xl">{title}</p>
      <p className="text-sm sm:text-base">{subtitle}</p>
    </div>
  );
}

export default Card;