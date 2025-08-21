import lineLink from '@/assets/line-link.svg'
import template from '@/assets/template-img.png'
import { Link } from 'react-router-dom'

const ServicesSection = () => {
  const services = {
    '/saunas': "Сауна",
    '/pools': "Бассейны",
    '/impressionShower': "Душ впечатлений",
    '/herbalSauna': "Травяная сауна",
    '/saltRoom': "Соляная комната"
  }

  return (
    <div className='mt-44 max-w-[1815px] m-auto hidden lg:block'>
      {Object.entries(services).map(([path, label], idx) => (
        <div 
          key={idx} 
          className='group border-b border-black flex cursor-pointer justify-between items-center -ml-12 relative'
        >
          <Link 
            to={path}
            className='uppercase font-bold text-[#2E2E2E] opacity-70 ml-12 2xl:text-[140px] text-[90px] transition-colors duration-300 group-hover:text-[#687C96]'
          >
            {label}
          </Link>

          <img 
            src={lineLink} 
            alt="" 
            className="transition duration-300 group-hover:opacity-70"
          />

          <img 
            src={template} 
            alt="" 
            className="absolute right-40 top-1/2 -translate-y-1/2 opacity-0 translate-x-5 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 max-w-[600px] pointer-events-none"
          />
        </div>
      ))}
    </div>
  )
}

export default ServicesSection