import template from '@/assets/template-img.png'
import { ArrowRightIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

const ServicesSection = () => {
  const services = {
    '/spa-box/saunas': "Сауна",
    '/spa-box/pools': "Бассейны",
    '/spa-box/impressionShower': "Душ впечатлений",
    '/spa-box/herbalSauna': "Травяная сауна",
    '/spa-box/saltRoom': "Соляная комната"
  }

  return (
    <div className='mt-20 m-auto max-w-[90dvw] px-3 lg:mt-44 lg:px-0'>
      {Object.entries(services).map(([path, label], idx) => (
        <div
          key={idx}
          className='group border-b border-black flex cursor-pointer justify-between items-center relative lg:-ml-12'
        >
          <Link
            to={path}
            className='uppercase font-bold text-[#2E2E2E] opacity-70 py-5 text-[clamp(2rem,11vw,5.5rem)] transition-colors duration-300 group-hover:text-[#687C96] lg:ml-12 lg:py-0 lg:text-[90px] 2xl:text-[140px]'
          >
            {label}
          </Link>

          <ArrowRightIcon
            className="w-10 shrink-0 transition duration-300 group-hover:opacity-70 sm:w-14 lg:w-auto" />

          <img
            src={template}
            alt=""
            className="z-10 absolute right-20 top-1/2 hidden -translate-y-1/2 translate-x-5 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 max-w-[600px] pointer-events-none xl:block"
          />
        </div>
      ))}
    </div>
  )
}

export default ServicesSection