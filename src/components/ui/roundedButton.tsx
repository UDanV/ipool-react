import type { ReactNode } from "react"

interface RoundedButtonProps {
    children: ReactNode
    className?: string
}

function RoundedButton({ children, className = "" }: RoundedButtonProps) {
    return (
        <button className={`border cursor-pointer text-[#2E2E2E] ${className}`}>
            {children}
        </button>
    )
}

export default RoundedButton