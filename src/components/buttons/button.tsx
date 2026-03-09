import { ReactNode } from "react"

export const CustomButton = ({ children, onClick, width, secondaryTheme = false }: { children: ReactNode, onClick?: React.MouseEventHandler<HTMLButtonElement>, width?: string, secondaryTheme?: boolean }) => {
    return (
        <button 
            className={`transition-all duration-200 ${secondaryTheme ? 'border-neutral-700 hover:border-amber-300 hover:text-[#272727] font-medium' : 'text-amber-300 border-amber-300 hover:text-[#272727]'} border-2 cursor-pointer hover:bg-amber-300 font-medium p-2 ${width} flex flex-row justify-center items-center gap-x-1`}   
            onClick={onClick}
        >
            {children}
        </button>
    )
}