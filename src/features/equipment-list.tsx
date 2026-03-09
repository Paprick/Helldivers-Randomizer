import { useState } from "react"
import { MdDoNotDisturb, MdOutlineKeyboardDoubleArrowDown } from "react-icons/md"

import { PrimaryWeaponsType, SecondaryWeaponsType, GranadeWeaponsType } from '../types/weapon-types'
import { StrategemTypes } from '../types/strategem-types'
import { BoosterTypes } from '../types/booster-types'
import { ArmPerksTypes } from '../types/arm-perks-types'
import { CustomTooltip } from "../components/custom-tooltip/custom-tooltip"
import { CustomButton } from "../components/buttons/button"

interface EquipmentListType {
    usableStrategems: StrategemTypes[],
    bannedStrategems: StrategemTypes[],
    usablePrimary: PrimaryWeaponsType[],
    bannedPrimary: PrimaryWeaponsType[],
    usableSecondary: SecondaryWeaponsType[],
    bannedSecondary: SecondaryWeaponsType[],
    usableGranade: GranadeWeaponsType[],
    bannedGranade: GranadeWeaponsType[],
    usableArmPerks: ArmPerksTypes[],
    bannedArmPerks: ArmPerksTypes[],
    usableBoosters: BoosterTypes[],
    bannedBoosters: BoosterTypes[],
    isNRModeStrategems: boolean,
    isNRModePrimary: boolean,
    isNRModeSecondary: boolean,
    isNRModeGranades: boolean,
    isNRModeArmPerks: boolean,
    isNRModeBoosters: boolean,
    isNRMode: boolean,
}

export const EquipmentList = ({
        isNRModeStrategems,
        isNRModePrimary,
        isNRModeSecondary,
        isNRModeGranades,
        isNRModeArmPerks,
        isNRModeBoosters,
        usableStrategems,
        bannedStrategems,
        usablePrimary,
        bannedPrimary,
        usableSecondary,
        bannedSecondary, 
        usableGranade,
        bannedGranade,
        usableArmPerks,
        bannedArmPerks,
        usableBoosters,
        bannedBoosters,
        isNRMode,
    }: EquipmentListType ) => {
    const [isListExpanded, setIsListExpanded] = useState(false)

    const handleExpandOnClick = () => {
        setIsListExpanded(!isListExpanded)
    }
    return(
        <div className="flex flex-col justify-center items-center max-w-190 mt-5 w-full">
            <CustomButton width={`w-full ${isNRMode ? 'visible' : 'invisible'}`} secondaryTheme onClick={handleExpandOnClick}>{ isListExpanded ? <MdOutlineKeyboardDoubleArrowDown size={'2rem'} className="rotate-180"/> : <MdOutlineKeyboardDoubleArrowDown size={'2rem'}/>}</CustomButton>
            {isListExpanded &&
            <div className="flex flex-col justify-center items-center mt-5">
                {isNRModeStrategems &&
                    <div className="flex flex-col items-center ">
                        <div className="uppercase text-2xl bg-neutral-700 w-full text-center p-2 m-4">Stratagems</div>
                        <div className="flex flex-row justify-center items-center flex-wrap gap-1 p-4">
                            {usableStrategems && usableStrategems.map((strat, index) => (
                                <div key={`us_${index}`} data-tooltip-id={`lt_${strat.name}`} className="w-18 h-18 select-none flex justify-center items-center border-2 border-neutral-700 hover:border-amber-300 box-border relative">
                                    <img src={strat.icon} alt={strat.name} className="h-auto max-w-full" draggable='false'/>
                                    <CustomTooltip
                                        id={`lt_${strat.name}`}
                                        name={strat.name}
                                        itemClass={strat.class}
                                        description={strat.description}
                                    />
                                </div>
                            ))}
                            {bannedStrategems && bannedStrategems.map((strat, index) => (
                                <div key={`bs_${index}`} data-tooltip-id={`lt_${strat.name}`} className="w-18 h-18 select-none flex justify-center items-center border-2 border-neutral-700 box-border relative hover:border-amber-50">
                                    <img src={strat.icon} alt={strat.name} className="h-auto max-w-full opacity-70 grayscale" draggable='false'/>
                                    <MdDoNotDisturb size={'80%'} className="opacity-90 absolute text-neutral-200"/>
                                    <CustomTooltip
                                        id={`lt_${strat.name}`}
                                        name={strat.name}
                                        itemClass={strat.class}
                                        description={strat.description}
                                        secondaryTheme
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                }
                {isNRModePrimary &&
                    <div className="flex flex-col items-center">
                        <div className="uppercase text-2xl m-4 bg-neutral-700 w-full text-center p-2">Primary Weapons</div>
                        <div className="flex flex-row justify-center items-center flex-wrap gap-1 p-4">
                            {usablePrimary && usablePrimary.map((prim, index) => (
                                <div key={`up_${index}`} data-tooltip-id={`lt_${prim.name}`} className="w-18 h-18 select-none flex justify-center items-center border-2 border-neutral-700 hover:border-amber-300 box-border relative">
                                    <img src={prim.icon} alt={prim.name} className="h-auto max-w-full" draggable='false'/>
                                    <CustomTooltip
                                        id={`lt_${prim.name}`}
                                        name={prim.name}
                                        itemClass={prim.class}
                                        description={prim.description}
                                    />
                                </div>
                            ))}
                            {bannedPrimary && bannedPrimary.map((prim, index) => (
                                <div key={`bp_${index}`} data-tooltip-id={`lt_${prim.name}`} className="w-18 h-18 select-none flex justify-center items-center border-2 border-neutral-700 box-border relative hover:border-amber-50">
                                    <img src={prim.icon} alt={prim.name} className="h-auto max-w-full opacity-70 grayscale" draggable='false'/>
                                    <MdDoNotDisturb size={'80%'} className="opacity-90 absolute text-neutral-200"/>
                                    <CustomTooltip 
                                        id={`lt_${prim.name}`}
                                        name={prim.name}
                                        itemClass={prim.class}
                                        description={prim.description}
                                        secondaryTheme
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                }
                {isNRModeSecondary &&
                    <div className="flex flex-col items-center">
                        <div className="uppercase text-2xl m-4 bg-neutral-700 w-full text-center p-2">Secondary Weapons</div>
                        <div className="flex flex-row justify-center items-center flex-wrap gap-1 p-4">
                            {usableSecondary && usableSecondary.map((sec, index) => (
                                <div key={`use_${index}`} data-tooltip-id={`lt_${sec.name}`} className="w-18 h-18 select-none flex justify-center items-center border-2 border-neutral-700 hover:border-amber-300 box-border relative">
                                    <img src={sec.icon} alt={sec.name} className="h-auto max-w-full" draggable='false'/>
                                    <CustomTooltip 
                                        id={`lt_${sec.name}`}
                                        name={sec.name}
                                        itemClass={sec.class}
                                        description={sec.description}
                                    />
                                </div>
                            ))}
                            {bannedSecondary && bannedSecondary.map((sec, index) => (
                                <div key={`bse_${index}`} data-tooltip-id={`lt_${sec.name}`} className="w-18 h-18 select-none flex justify-center items-center border-2 border-neutral-700 box-border relative hover:border-amber-50">
                                    <img src={sec.icon} alt={sec.name} className="h-auto max-w-full opacity-70 grayscale" draggable='false'/>
                                    <MdDoNotDisturb size={'80%'} className="opacity-90 absolute text-neutral-200"/>
                                    <CustomTooltip
                                        id={`lt_${sec.name}`} 
                                        name={sec.name}
                                        itemClass={sec.class}
                                        description={sec.description}
                                        secondaryTheme
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                }
                {isNRModeGranades &&
                    <div className="flex flex-col items-center">
                        <div className="uppercase text-2xl m-4 bg-neutral-700 w-full text-center p-2">Throwable Weapons</div>
                        <div className="flex flex-row justify-center items-center flex-wrap gap-1 p-4">
                            {usableGranade && usableGranade.map((gran, index) => (
                                <div key={`ug_${index}`} data-tooltip-id={`lt_${gran.name}`} className="w-18 h-18 select-none flex justify-center items-center border-2 border-neutral-700 hover:border-amber-300 box-border relative">
                                    <img src={gran.icon} alt={gran.name} className="h-auto max-w-full" draggable='false'/>
                                    <CustomTooltip 
                                        id={`lt_${gran.name}`}
                                        name={gran.name}
                                        itemClass={gran.class}
                                        description={gran.description}
                                    />
                                </div>
                            ))}
                            {bannedGranade && bannedGranade.map((gran, index) => (
                                <div key={`bg_${index}`} data-tooltip-id={`lt_${gran.name}`} className="w-18 h-18 select-none flex justify-center items-center border-2 border-neutral-700 box-border relative hover:border-amber-50">
                                    <img src={gran.icon} alt={gran.name} className="h-auto max-w-full opacity-70 grayscale" draggable='false'/>
                                    <MdDoNotDisturb size={'80%'} className="opacity-90 absolute text-neutral-200"/>
                                    <CustomTooltip 
                                        id={`lt_${gran.name}`}
                                        name={gran.name}
                                        itemClass={gran.class}
                                        description={gran.description}
                                        secondaryTheme
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                }
                {isNRModeArmPerks && 
                    <div className="flex flex-col items-center">
                        <div className="uppercase text-2xl m-4 bg-neutral-700 w-full text-center p-2">Armours</div>
                        <div className="flex flex-row justify-center items-center flex-wrap gap-1 p-4">
                            {usableArmPerks && usableArmPerks.map((perk, index) => (
                                <div key={`uap_${index}`} data-tooltip-id={`lt_${perk.name}`} className="w-18 h-18 select-none flex justify-center items-center border-2 border-neutral-700 hover:border-amber-300 box-border relative">
                                    <img src={perk.icon} alt={perk.name} className="h-auto max-w-full" draggable='false'/>
                                    <CustomTooltip 
                                        id={`lt_${perk.name}`}
                                        name={perk.name}
                                        description={perk.description}
                                    />
                                </div>
                            ))}
                            {bannedArmPerks && bannedArmPerks.map((perk, index) => (
                                <div key={`bup_${index}`} data-tooltip-id={`lt_${perk.name}`} className="w-18 h-18 select-none flex justify-center items-center border-2 border-neutral-700 box-border relative hover:border-amber-50">
                                    <img src={perk.icon} alt={perk.name} className="h-auto max-w-full opacity-70 grayscale" draggable='false'/>
                                    <MdDoNotDisturb size={'80%'} className="opacity-90 absolute text-neutral-200"/>
                                    <CustomTooltip
                                        id={`lt_${perk.name}`} 
                                        name={perk.name}
                                        description={perk.description}
                                        secondaryTheme
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                }
                {isNRModeBoosters &&
                    <div className="flex flex-col items-center">
                        <div className="uppercase text-2xl m-4 bg-neutral-700 w-full text-center p-2">Boosters</div>
                        <div className="flex flex-row justify-center items-center flex-wrap gap-1 p-4">
                            {usableBoosters && usableBoosters.map((booster, index) => (
                                <div key={`ub_${index}`} className="w-18 h-18 select-none flex justify-center items-center border-2 border-neutral-700 hover:border-amber-300 box-border relative">
                                    <img src={booster.icon} data-tooltip-id={`lt_${booster.name}`} alt={booster.name} className="h-auto max-w-full" draggable='false'/>
                                    <CustomTooltip
                                        id={`lt_${booster.name}`} 
                                        name={booster.name}
                                        description={booster.description}
                                    />
                                </div>
                            ))}
                            {bannedBoosters && bannedBoosters.map((booster, index) => (
                                <div key={`ub_${index}`} data-tooltip-id={`lt_${booster.name}`} className="w-18 h-18 select-none flex justify-center items-center border-2 border-neutral-700 box-border relative hover:border-amber-50">
                                    <img src={booster.icon} alt={booster.name} className="h-auto max-w-full opacity-70 grayscale" draggable='false'/>
                                    <MdDoNotDisturb size={'80%'} className="opacity-90 absolute text-neutral-200"/>
                                    <CustomTooltip
                                        id={`lt_${booster.name}`}
                                        name={booster.name}
                                        description={booster.description}
                                        secondaryTheme
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                }
            </div>
            }
        </div>
    )
}