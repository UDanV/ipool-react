import btnLink from '@/assets/button-link.png'
import type { ReactNode } from 'react';

interface ContactsCardProps {
    title: string;
    subtitle: ReactNode;
    addition: ReactNode;
    className?: string;
}

const ContactsCard:React.FC<ContactsCardProps> = ({title, subtitle, addition, className = ""}) => {
    return (
        <div className={`flex items-end justify-between border rounded-3xl py-16 w-full ${className}`}>
            <div className='flex flex-col gap-[46px] justify-between items-start h-full'>
                <h2 className="font-extrabold text-[64px]">{title}</h2>
                <p className="text-[32px] max-w-xl leading-none font-light">{subtitle}</p>
                <p className="font-medium text-[32px] leading-none">{addition}</p>
            </div>
            <div>
                <img className='2xl:mr-[152px]' src={btnLink} alt="" />
            </div>
        </div>
    )
}

export default ContactsCard