type PrimaryWeaponClass = 'Assault Rifle' | 'Marksman Rifle' | 'Submachine Gun' | 'Shotgun' | 'Explosive' | 'Energy-Based' | 'Special'
type SecondaryWeaponClass = 'Pistol' | 'Melee' | 'Special'
type GranadeWeaponClass = 'Standard' | 'Special'

type StatNames = 'Damage' | 'Mag Capacity' | 'Recoil' | 'Fire Rate' | 'Capacity' | 'Dmg/Sec' | 'Penetration' | 'Outer Radius' | 'Fuse Time'
type Characteristics = 'Light Armor Penetrating' | 'Medium Armor Penetrating' | 'Heavy Armor Penetrating' | 'Anti-Tank' | 'Explosive' | 'Caustic' | 'Incendiary' | 'Chargeup' | 'Heat' | 'Beam' | 'One Handed' | 'Rounds Reload' | 'Stun' | 'Stimulative'

type StatType = {
    statName: StatNames
    statAmount: string | number
}

export type PrimaryWeaponsType = {
    name: string,
    class: PrimaryWeaponClass,
    description: string,
    icon: string
    stats: StatType[]
    characteristics: Characteristics[]
}
export type SecondaryWeaponsType = {
    name: string,
    class: SecondaryWeaponClass,
    description: string,
    icon: string
    stats: StatType[]
    characteristics: Characteristics[]
}
export type GranadeWeaponsType = {
    name: string,
    class: GranadeWeaponClass,
    description: string,
    icon: string
    stats: StatType[]
    characteristics: Characteristics[]
}