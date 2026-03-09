import { Tooltip } from 'react-tooltip'

export const CustomTooltip = <T extends { statName: string; statAmount: string | number }>({ id, name, itemClass, description, stats, characteristics, secondaryTheme }: { id: string, name?: string, description?: string | undefined, stats?: T[], characteristics?: string[], itemClass?: string, secondaryTheme?: boolean}) => {

    const highlightDescription = (str: string | undefined) => {
        const regex = new RegExp(/('[^']*')/g)
        if (str) {
            const parts = str.split(regex)
            const newDescription = parts.map((part, i) => 
                /^'.*'$/.test(part) ? 
                <span key={i} className="text-amber-300 font-bold">
                    {part}
                </span>
                :
                part
            )
            return newDescription
        }
        return ''
    }

    return(
        <Tooltip id={id} noArrow opacity={1} offset={35} float style={{ zIndex: 999 }} place="top" border={'2px solid #404040'} className="bg-neutral-950">
                <div className="flex flex-col flex-wrap max-w-96">
                    <div className={`border-l-3 pl-3 ${secondaryTheme ? 'border-amber-50' : 'border-amber-300'}`}>
                        {itemClass && <div className="opacity-80 text-lg bg-neutral-700 p-1 uppercase">{itemClass}</div>}
                        <div className={`text-2xl p-1 ${secondaryTheme ? 'text-amber-50' : 'text-amber-300'}`}>{name}</div>
                        {description && <div className="break-words opacity-80 parent [&>span]:text-amber-300 p-1">{highlightDescription(description)}</div>}
                    </div>
                    <div className="flex flex-row gap-x-4 justify-center">
                        {stats &&
                            <div className="flex flex-col items-center">
                                <p className="mb-1 bg-[#222] translate-y-4.5 p-1">Stats</p>
                                <div className="border-1 border-neutral-700 p-4 flex flex-col justify-center gap-1">
                                    {stats.map((stat, index) => (
                                        <div key={index} className="flex flex-row justify-between gap-2 items-center border-b-1 border-neutral-700">
                                            <div className="">{`${stat.statName}:`}</div>
                                            <div className="bg-neutral-700 p-1 whitespace-nowrap">{stat.statAmount}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        }
                        {characteristics &&
                            <div className="flex flex-col items-center">
                                <p className="mb-1 bg-[#222] translate-y-4.5 p-1">Traits</p>
                                <ul className="border-1 border-neutral-700 p-4 flex flex-col justify-center gap-1 list-['\258C'] marker:text-neutral-700">
                                    {characteristics.map((char, index) => (<li key={index} className="pl-1 ml-1">{char}</li>))}
                                </ul>
                            </div>
                        }
                    </div>
                </div>
            </Tooltip>
    )
}