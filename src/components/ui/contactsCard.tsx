import { ArrowUpRightIcon } from 'lucide-react';
import type { ReactNode } from 'react';

interface ContactsCardProps {
    title: string;
    link?: string;
    subtitle: ReactNode;
    addition: ReactNode;
    className?: string;
}

const ContactsCard: React.FC<ContactsCardProps> = ({ title, subtitle, addition, link, className = "" }) => {
    return (
        <div className={`flex flex-col gap-8 border border-black rounded-3xl py-10 w-full sm:flex-row sm:items-end sm:justify-between lg:py-16 ${className}`}>
            <div className='flex flex-col gap-7 justify-between items-start h-full lg:gap-[46px]'>
                <h2 className="font-extrabold text-3xl sm:text-4xl xl:text-[64px]">{title}</h2>
                <p className="text-xl max-w-xl leading-tight font-light sm:text-2xl xl:text-[32px] xl:leading-none">{subtitle}</p>
                <p className="font-medium text-xl leading-tight sm:text-2xl xl:text-[32px] xl:leading-none">{addition}</p>
            </div>
            <div className="self-end">
                <a href={link}>
                    <ArrowUpRightIcon className='w-12 sm:w-15' />
                </a>
            </div>
        </div>
    )
}

export default ContactsCard