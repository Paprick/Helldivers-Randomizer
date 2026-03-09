import { useState } from "react"
import { BiRefresh } from "react-icons/bi";
import { Tooltip } from 'react-tooltip'

export const BoosterHolder = ({ src, onClick, name, width, height }: {src?: string, name?: string, onClick?: React.MouseEventHandler<HTMLDivElement>, width: string, height: string}) => {
    const [showIcon, setShowIcon] = useState(false)
    const renderIcon = () => {
        setShowIcon(true)
    }
    const hideIcon = () => {
        setShowIcon(false)
    }
    return (
        <div 
            className={`transition-all duration-200 select-none flex justify-center items-center ${width} ${height} cursor-pointer hover:border-amber-300 box-border relative [clip-path:polygon(50% -50%,100% 50%,50% 150%,0 50%)] [aspect-ratio:1/cos(30deg)] bg-amber-900`}
            onClick={onClick}
            onMouseEnter={renderIcon}
            onMouseLeave={hideIcon}
            data-tooltip-id={name} 
        >
            <Tooltip id={name}>
                <div>{name}</div>
            </Tooltip>
            {showIcon &&
                <div className="transition-all duration-1000 bg-amber-300 box-border text-[#272727] w-full h-5 absolute bottom-full left-full translate-y-full -translate-x-full flex justify-center items-center text-center">
                    <p>losuj</p><BiRefresh size={'1.2rem'} className="animate-spin [animation-duration:3s]"/> 
                </div>
            }
            {src ? 
            <img src={src} alt="weapon" className="h-auto max-w-full"/> :
            <p></p>
            }
        </div>
    )
}