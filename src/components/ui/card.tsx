import { Maximize2 } from 'lucide-react'

interface CardProps {
  title: string
  subtitle: string
  image: string
  onClick?: () => void
}

function Card({ title, subtitle, image, onClick }: CardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative block w-full cursor-pointer overflow-hidden border border-black/10 bg-white text-left transition-colors duration-300 hover:border-[#687C96] active:scale-[0.99]"
    >
      <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[16/11] lg:aspect-[5/3]">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/5 transition-opacity duration-300 group-hover:from-black/90" />

        <span className="absolute left-4 top-4 rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm sm:left-5 sm:top-5 sm:text-xs">
          {subtitle}
        </span>

        <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 sm:right-5 sm:top-5">
          <Maximize2 className="h-4 w-4" />
        </span>

        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 lg:p-6">
          <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.25em] text-white/60 sm:text-xs">
            Проект
          </p>
          <h3 className="text-xl font-bold uppercase leading-tight text-white transition-colors duration-300 group-hover:text-[#d7e4f0] sm:text-2xl lg:text-3xl">
            {title}
          </h3>
        </div>
      </div>
    </button>
  )
}

export default Card
