const AboutCard = ({
  bg,
  title,
  link,
  className,
  large = false,
  subtitle,
}: {
  bg: string
  title: string
  link: string
  className?: string
  large?: boolean
  subtitle?: string
}) => {
  return (
    <a
      href={link}
      className={`group relative block overflow-hidden ${className}`}
    >
      <div
        className={
          large
            ? 'relative min-h-[22rem] sm:min-h-[26rem] md:min-h-[32rem] lg:min-h-[min(68vh,720px)] aspect-[4/3] object-cover'
            : 'relative min-h-64 sm:min-h-80 md:min-h-[22rem] lg:min-h-[28rem] xl:min-h-[32rem]'
        }
      >
        <img
          src={bg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 transition-colors duration-500 group-hover:from-black/90 group-hover:via-black/40" />

        <div className="relative z-10 flex h-full min-h-[inherit] flex-col justify-end p-5 sm:p-6 md:p-7 lg:p-8 xl:p-10">
          <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.25em] text-white/70 sm:mb-3 sm:text-xs">
            iPool
          </p>
          <h3 className="max-w-[85%] text-[clamp(1.75rem,6vw,3.75rem)] font-bold uppercase leading-none text-white">
            {title}
          </h3>
          {subtitle && (
            <p className="mt-3 max-w-md text-sm text-white/75 sm:text-base lg:mt-4 lg:text-lg">
              {subtitle}
            </p>
          )}
        </div>

        <span className="absolute bottom-5 right-5 z-10 flex h-9 w-16 items-center justify-center rounded-full border border-white/30 bg-white/15 text-base text-white shadow-md backdrop-blur-sm transition-all duration-300 group-hover:translate-x-1 group-hover:border-white group-hover:bg-white group-hover:text-black sm:bottom-6 sm:right-6 sm:h-11 sm:w-20 sm:text-lg md:bottom-7 md:right-7 lg:bottom-8 lg:right-8">
          →
        </span>
      </div>
    </a>
  )
}

export default AboutCard
