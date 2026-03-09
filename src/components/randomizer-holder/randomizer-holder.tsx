import { useState } from "react"
import { BiRefresh } from "react-icons/bi"
import { MdDoNotDisturb } from "react-icons/md"
import { CustomTooltip } from "../custom-tooltip/custom-tooltip"

export const RandomizerHolder = <T extends { statName: string; statAmount: string | number }>({ src, onClick, name, description, stats, characteristics, itemClass, width, height }: {src?: string, name?: string, onClick?: React.MouseEventHandler<HTMLDivElement>, width: string, height: string, description?: string | undefined, stats?: T[], characteristics?: string[], itemClass?: string}) => {
    const [showIcon, setShowIcon] = useState(false)
    const renderIcon = () => {
        setShowIcon(true)
    }
    const hideIcon = () => {
        setShowIcon(false)
    }
    return (
        <div className="flex flex-col">
            <div 
                className={`transition-all duration-200 select-none flex justify-center items-center border-2 border-neutral-700 ${width} ${height} cursor-pointer hover:border-amber-300 box-border relative`}
                onClick={onClick}
                onMouseEnter={renderIcon}
                onMouseLeave={hideIcon}
                data-tooltip-id={`et_${name}`}
            >
                {src ? 
                <img src={src} alt="weapon" className="h-auto max-w-full" draggable='false'/> :
                <MdDoNotDisturb size={'80%'} className="opacity-1"/>
                }
            </div>
            <div className="h-5">
                <div className={`transition-all duration-200 bg-amber-300 text-[#272727] w-full h-5 flex justify-center items-center box-border text-center ${showIcon ? 'opacity-100' : 'opacity-0'}`}>
                    <p>Roll</p><BiRefresh size={'1.2rem'} className="animate-spin [animation-duration:4s]"/> 
                </div>
            </div>
            {name &&
                <CustomTooltip
                    id={`et_${name}`}
                    name={name}
                    description={description}
                    stats={stats}
                    characteristics={characteristics}
                    itemClass={itemClass}
                />
            }
        </div>
    )
}