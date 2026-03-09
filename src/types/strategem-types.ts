type StrategemClasses = 'Offensive Stratagem' | 'Defensive Stratagem' | 'Supply Stratagem'
type SameType = 'egzo' | ''
type StatsType = {
    statName: string,
    statAmount: string | number
}
type CharacteristicsType = 'Light Armor Penetrating' | 'Medium Armor Penetrating' | 'Heavy Armor Penetrating' | 'Hellpod' | 'Backpack' | 'Caustic' | 'Support Weapon' | 'Explosive' | 'Vehicle' | 'Anti-Tank' | 'Sentry' | 'Chargeup' | 'Beam' | 'Incendiary' | 'Heat' | 'Orbital' | 'Eagle' | 'Stationary Reload' | 'Expendable'

export type StrategemTypes = {
    name: string,
    class: StrategemClasses,
    isSameType: boolean,
    sameType: SameType,
    description: string,
    icon: string,
    stats: StatsType[],
    characteristics: CharacteristicsType[]
}