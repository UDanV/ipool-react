import type { ReactNode } from "react";

interface RoundedButtonProps {
    children: ReactNode;
    className?: string;
    href?: string;
}

function RoundedButton({
    children,
    className = "",
    href,
}: RoundedButtonProps) {
    const baseClasses = `border cursor-pointer text-[#2E2E2E] px-4 py-2 rounded-full ${className}`;

    if (href) {
        return (
            <a href={href} className={baseClasses}>
                {children}
            </a>
        );
    }

    return <button className={baseClasses}>{children}</button>;
}

export default RoundedButton;