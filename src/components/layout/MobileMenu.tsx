import { useEffect } from 'react';
import close from '@/assets/close.png';
import logo from '@/assets/small-logo.svg';
import { Link } from 'react-router-dom';

interface MobileMenuProps {
    onClose: () => void;
    isOpen: boolean;
}

const navLinks = [
    { label: 'Главная', to: '/' },
    { label: 'Наши работы', to: '/works' },
    { label: 'spa-box', to: '/spa-box' },
    { label: 'бани и сауны', to: '/saunas' },
    { label: 'о компании', to: '/about' },
];

function MobileMenu({ onClose, isOpen }: MobileMenuProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    return (
        <div className={`fixed left-0 top-0 w-full h-full bg-white shadow-md z-50 border-t border-black 
            transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            
            <div className={`pt-16 pr-5 w-full lg:hidden transition-transform duration-300 ease-in-out 
                ${isOpen ? 'translate-y-0' : '-translate-y-8'}`}>
                <img onClick={onClose} src={close} className='cursor-pointer ml-auto w-6 h-6' alt="close" />
            </div>
            
            <ul className="flex flex-col items-center py-4 gap-[35px] font-semibold uppercase text-[#2E2E2E] text-[32px]">
                <img src={logo} className={`w-24 h-24 transition-transform duration-300 ease-in-out delay-75 
                    ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'}`} alt="logo" />
                
                {navLinks.map((link, index) => (
                    <li key={link.to} className={`transition-transform duration-300 ease-in-out delay-${100 + index * 75} 
                        ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'}`}>
                        <Link
                            to={link.to}
                            onClick={onClose}
                            className={link.label === 'Главная' ? 'text-[#687C96]' : ''}
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
            
            <div className={`flex justify-between mt-45 transition-transform duration-300 ease-in-out delay-500 
                ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                <h2 className='font-bold text-[66px] text-[#2E2E2E] translate-y-5'>IPOOL</h2>
                <div className='flex flex-col font-normal text-[17px] items-end justify-end'>
                    <a href='tel:78632838281'>+7 863 283-82-81</a>
                    <a href='tel:79185538734'>+7 918 553-87-34</a>
                    <div>
                        <a href='mailto:info@ipool.ru' className='text-5xl mb-16 uppercase text-[17px]'>info@ipool.ru</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MobileMenu;