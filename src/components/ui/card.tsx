interface CardProps {
  title: string
  subtitle: string
  image: string
}

function Card({ title, subtitle, image }: CardProps) {
  return (
    <div className="flex flex-col">
      <div className="w-full h-80 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <p className="font-bold text-2xl uppercase">{title}</p>
      <p className="text-base">{subtitle}</p>
    </div>
  )
}

export default Card