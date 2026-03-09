import { PrimaryWeaponsType, SecondaryWeaponsType, GranadeWeaponsType } from '../types/weapon-types'

//primary weapon imports
import ar23 from '../assets/icons/weapons/primary/AR-23.jpg'
import ar23a from '../assets/icons/weapons/primary/AR-23A.jpg'
import ar23c from '../assets/icons/weapons/primary/AR-23C.jpg'
import ar23p from '../assets/icons/weapons/primary/AR-23P.jpg'
import ar61 from '../assets/icons/weapons/primary/AR-61.jpg'
import arc12 from '../assets/icons/weapons/primary/ARC-12.jpg'
import br14 from '../assets/icons/weapons/primary/BR-14.jpg'
import cb9 from '../assets/icons/weapons/primary/CB-9.jpg'
import flam66 from '../assets/icons/weapons/primary/FLAM-66.jpg'
import las5 from '../assets/icons/weapons/primary/LAS-5.jpg'
import las16 from '../assets/icons/weapons/primary/LAS-16.jpg'
import plas1 from '../assets/icons/weapons/primary/PLAS-1.jpg'
import plas39 from '../assets/icons/weapons/primary/PLAS-39.jpg'
import plas101 from '../assets/icons/weapons/primary/PLAS-101.jpg'
import pmsta11 from '../assets/icons/weapons/primary/PM-StA11.jpg'
import r36 from '../assets/icons/weapons/primary/R-36.jpg'
import r63 from '../assets/icons/weapons/primary/R-63.jpg'
import r63as from '../assets/icons/weapons/primary/R-63AS.jpg'
import r2124 from '../assets/icons/weapons/primary/R-2124.jpg'
import sg8 from '../assets/icons/weapons/primary/SG-8.jpg'
import sg8l from '../assets/icons/weapons/primary/SG-8Ł.jpg'
import sg8p from '../assets/icons/weapons/primary/SG-8P.jpg'
import sg20 from '../assets/icons/weapons/primary/SG-20.jpg'
import sg225 from '../assets/icons/weapons/primary/SG-225.jpg'
import sg225sp from '../assets/icons/weapons/primary/SG-225SP.jpg'
import sg225zp from '../assets/icons/weapons/primary/SG-225ZP.jpg'
import sg451 from '../assets/icons/weapons/primary/SG-451.jpg'
import smg32 from '../assets/icons/weapons/primary/SMG-32.jpg'
import smg37 from '../assets/icons/weapons/primary/SMG-37.jpg'
import smg72 from '../assets/icons/weapons/primary/SMG-72.jpg'
import jar5 from '../assets/icons/weapons/primary/JAR-5.jpg'
import las17 from '../assets/icons/weapons/primary/LAS-17DwuostrzSierp.jpg'

//secondary weapon imports
import cqc19 from '../assets/icons/weapons/secondary/CQC-19.jpg'
import cqc30 from '../assets/icons/weapons/secondary/CQC-30.jpg'
import gp31 from '../assets/icons/weapons/secondary/GP-31.jpg'
import las7 from '../assets/icons/weapons/secondary/LAS-7.jpg'
import p2 from '../assets/icons/weapons/secondary/P-2.jpg'
import p4 from '../assets/icons/weapons/secondary/P-4.jpg'
import p11 from '../assets/icons/weapons/secondary/P-11.jpg'
import p19 from '../assets/icons/weapons/secondary/P-19.jpg'
import p72 from '../assets/icons/weapons/secondary/P-72.jpg'
import p113 from '../assets/icons/weapons/secondary/P-113.jpg'
import plas15 from '../assets/icons/weapons/secondary/PLAS-15.jpg'
import sg22 from '../assets/icons/weapons/secondary/SG-22.jpg'
import gp31Ult from '../assets/icons/weapons/secondary/GP-31Ultimatum.jpg'
import cqc5 from '../assets/icons/weapons/secondary/cqc-5TopBoj.jpg'

//granade weapon imports
import g3 from '../assets/icons/weapons/granade/G-3.jpg'
import g4 from '../assets/icons/weapons/granade/G-4.jpg'
import g6 from '../assets/icons/weapons/granade/G-6.jpg'
import g10 from '../assets/icons/weapons/granade/G-10.jpg'
import g12 from '../assets/icons/weapons/granade/G-12.jpg'
import g13 from '../assets/icons/weapons/granade/G-13.jpg'
import g16 from '../assets/icons/weapons/granade/G-16.jpg'
import g23 from '../assets/icons/weapons/granade/G-23.jpg'
import g123 from '../assets/icons/weapons/granade/G-123.jpg'
import k2 from '../assets/icons/weapons/granade/K-2.jpg'
import g50 from '../assets/icons/weapons/granade/G-50Poszuk.jpg'

export const primaryWeapons: PrimaryWeaponsType[] = [
    {
        name: 'AR-23 Liberator',
        class: 'Assault Rifle',
        description: "The SEAF standard assault rifle, balancing power, fire rate, and weight for a reliable weapon against smaller targets.",
        icon: ar23,
        stats: [
            {
                statName: 'Damage',
                statAmount: 70
            },
            {
                statName: 'Mag Capacity',
                statAmount: 45
            },
            {
                statName: 'Recoil',
                statAmount: 14
            },
            {
                statName: 'Fire Rate',
                statAmount: 640
            },
        ],
        characteristics: ['Light Armor Penetrating']
    },
    {
        name: "AR-23P Liberator Penetrator",
        class: 'Assault Rifle',
        description: "A modified Liberator fitted with a scope and firing armor-piercing rounds, to help users take down armored targets.",
        icon: ar23p,
        stats: [
            {
                statName: 'Damage',
                statAmount: 60
            },
            {
                statName: 'Mag Capacity',
                statAmount: 45
            },
            {
                statName: 'Recoil',
                statAmount: 18
            },
            {
                statName: 'Fire Rate',
                statAmount: 640
            },
        ],
        characteristics: ['Medium Armor Penetrating']
    },
    {
        name: "AR-23C Liberator Concussive",
        class: 'Assault Rifle',
        description: "A modified Liberator featuring concussive rounds which do less damage but stagger enemies.",
        icon: ar23c,
        stats: [
            {
                statName: 'Damage',
                statAmount: 65
            },
            {
                statName: 'Mag Capacity',
                statAmount: 60
            },
            {
                statName: 'Recoil',
                statAmount: 28
            },
            {
                statName: 'Fire Rate',
                statAmount: 320
            },
        ],
        characteristics: ['Light Armor Penetrating']
    },
    {
        name: "AR-23A Liberator Carbine",
        class: 'Assault Rifle',
        description: "A compact version of the Liberator designed for increased viability in close quarters. Has an increased fire rate at the cost of higher spread.",
        icon: ar23a,
        stats: [
            {
                statName: 'Damage',
                statAmount: 70
            },
            {
                statName: 'Mag Capacity',
                statAmount: 45
            },
            {
                statName: 'Recoil',
                statAmount: 25
            },
            {
                statName: 'Fire Rate',
                statAmount: 920
            },
        ],
        characteristics: ['Light Armor Penetrating']
    },
    {
        name: "AR-61 Tenderizer",
        class: 'Assault Rifle',
        description: "A high-caliber assault rifle with a restrictive magazine size but more stopping power.",
        icon: ar61,
        stats: [
            {
                statName: 'Damage',
                statAmount: 95
            },
            {
                statName: 'Mag Capacity',
                statAmount: 35
            },
            {
                statName: 'Recoil',
                statAmount: 10
            },
            {
                statName: 'Fire Rate',
                statAmount: 600
            },
        ],
        characteristics: ['Light Armor Penetrating']
    },
    {
        name: "BR-14 Adjudicator",
        class: 'Assault Rifle',
        description: "An accurate, armor-penetrating rifle, the BR-14 Adjudicator delivers righteous judgement to medium-sized enemies, though its restrictive magazine limits its effectiveness against large groups.",
        icon: br14,
        stats: [
            {
                statName: 'Damage',
                statAmount: 90
            },
            {
                statName: 'Mag Capacity',
                statAmount: 30
            },
            {
                statName: 'Recoil',
                statAmount: 38
            },
            {
                statName: 'Fire Rate',
                statAmount: 550
            },
        ],
        characteristics: ['Medium Armor Penetrating']
    },
    {
        name: "R-2124 Constitution",
        class: 'Marksman Rifle',
        description: "This ceremonial rifle is modeled after antique relics from pre-Democratic times. It is traditionally gifted to every citizen upon turning 16 to encourage service.",
        icon: r2124,
        stats: [
            {
                statName: 'Damage',
                statAmount: 180
            },
            {
                statName: 'Mag Capacity',
                statAmount: 5
            },
            {
                statName: 'Recoil',
                statAmount: 43
            },
            {
                statName: 'Fire Rate',
                statAmount: 60
            },
        ],
        characteristics: ['Medium Armor Penetrating', 'Rounds Reload']
    },
    {
        name: "R-63 Diligence",
        class: 'Marksman Rifle',
        description: "This high-caliber marksman rifle trades magazine capacity and rate of fire for powerful, accurate shots.",
        icon: r63,
        stats: [
            {
                statName: 'Damage',
                statAmount: 165
            },
            {
                statName: 'Mag Capacity',
                statAmount: 20
            },
            {
                statName: 'Recoil',
                statAmount: 35
            },
            {
                statName: 'Fire Rate',
                statAmount: 350
            },
        ],
        characteristics: ['Light Armor Penetrating']
    },
    {
        name: "R-63CS Diligence Counter Sniper",
        class: 'Marksman Rifle',
        description: "A modified Diligence rifle offering increased damage at the cost of some maneuverability. Fires a single bullet at a time.",
        icon: r63as,
        stats: [
            {
                statName: 'Damage',
                statAmount: 200
            },
            {
                statName: 'Mag Capacity',
                statAmount: 15
            },
            {
                statName: 'Recoil',
                statAmount: 53
            },
            {
                statName: 'Fire Rate',
                statAmount: 350
            },
        ],
        characteristics: ['Medium Armor Penetrating']
    },
    {
        name: "PLAS-39 Accelerator Rifle",
        class: 'Marksman Rifle',
        description: "A high-precision burst-fire plasma rifle that must be charged to fire.",
        icon: plas39,
        stats: [
            {
                statName: 'Damage',
                statAmount: 350
            },
            {
                statName: 'Mag Capacity',
                statAmount: 9
            },
            {
                statName: 'Recoil',
                statAmount: 3
            },
            {
                statName: 'Fire Rate',
                statAmount: 550
            },
        ],
        characteristics: ['Medium Armor Penetrating', 'Explosive']
    },
    {
        name: "StA-11 SMG",
        class: 'Submachine Gun',
        description: "A submachine gun with a helical feed magazine, which gives the weapon a higher ammo capacity whilst making it more front-heavy. Produced by Stål Arms.",
        icon: pmsta11,
        stats: [
            {
                statName: 'Damage',
                statAmount: 65
            },
            {
                statName: 'Mag Capacity',
                statAmount: 48
            },
            {
                statName: 'Recoil',
                statAmount: 13
            },
            {
                statName: 'Fire Rate',
                statAmount: 1050
            },
        ],
        characteristics: ['Light Armor Penetrating', 'One Handed']
    },
    {
        name: "SMG-32 Reprimand",
        class: 'Submachine Gun',
        description: "A heavy-duty submachine gun that fires large-caliber rounds, with a slower rate of fire to manage the high recoil. Ideal for use at close to medium range.",
        icon: smg32,
        stats: [
            {
                statName: 'Damage',
                statAmount: 125
            },
            {
                statName: 'Mag Capacity',
                statAmount: 25
            },
            {
                statName: 'Recoil',
                statAmount: 44
            },
            {
                statName: 'Fire Rate',
                statAmount: 490
            },
        ],
        characteristics: ['Medium Armor Penetrating']
    },
    {
        name: "SMG-37 Defender",
        class: 'Submachine Gun',
        description: "A high-caliber submachine gun which can be fired with one hand. Has a relatively low rate of fire.",
        icon: smg37,
        stats: [
            {
                statName: 'Damage',
                statAmount: 75
            },
            {
                statName: 'Mag Capacity',
                statAmount: 45
            },
            {
                statName: 'Recoil',
                statAmount: 10
            },
            {
                statName: 'Fire Rate',
                statAmount: 520
            },
        ],
        characteristics: ['Light Armor Penetrating', 'One Handed']
    },
    {
        name: "SMG-72 Pummeler",
        class: 'Submachine Gun',
        description: "Fires concussive rounds that stagger enemies. Slower rate of fire than other SMGs.",
        icon: smg72,
        stats: [
            {
                statName: 'Damage',
                statAmount: 65
            },
            {
                statName: 'Mag Capacity',
                statAmount: 45
            },
            {
                statName: 'Recoil',
                statAmount: 10
            },
            {
                statName: 'Fire Rate',
                statAmount: 475
            },
        ],
        characteristics: ['Light Armor Penetrating', 'One Handed']
    },
    {
        name: "SG-8 Punisher",
        class: 'Shotgun',
        description: "A powerful dual magazine pump-action shotgun, with limited armor penetration. Ideal for small and fast targets.",
        icon: sg8,
        stats: [
            {
                statName: 'Damage',
                statAmount: 405
            },
            {
                statName: 'Mag Capacity',
                statAmount: 16
            },
            {
                statName: 'Recoil',
                statAmount: 120
            },
            {
                statName: 'Fire Rate',
                statAmount: 80
            },
        ],
        characteristics: ['Light Armor Penetrating', 'Rounds Reload']
    },
    {
        name: "SG-8S Slugger",
        class: 'Shotgun',
        description: "A Modified Punisher shotgun firing heavy, high-damage slugs. Perfect for punching holes in big targets.",
        icon: sg8l,
        stats: [
            {
                statName: 'Damage',
                statAmount: 250
            },
            {
                statName: 'Mag Capacity',
                statAmount: 16
            },
            {
                statName: 'Recoil',
                statAmount: 120
            },
            {
                statName: 'Fire Rate',
                statAmount: 80
            },
        ],
        characteristics: ['Medium Armor Penetrating', 'Rounds Reload']
    },
    {
        name: "SG-20 Halt",
        class: 'Shotgun',
        description: "A humane compliance weapon with two separate magazines: one for armor-penetrating flechette rounds and one for stun rounds.",
        icon: sg20,
        stats: [
            {
                statName: 'Damage',
                statAmount: 385
            },
            {
                statName: 'Mag Capacity',
                statAmount: 16
            },
            {
                statName: 'Recoil',
                statAmount: 120
            },
            {
                statName: 'Fire Rate',
                statAmount: 80
            },
        ],
        characteristics: ['Light Armor Penetrating', 'Medium Armor Penetrating', 'Rounds Reload']
    },
    {
        name: "SG-451 Cookout",
        class: 'Shotgun',
        description: "A pump shotgun that fires a burst of incendiary phosphorus pellets, setting targets ablaze.",
        icon: sg451,
        stats: [
            {
                statName: 'Damage',
                statAmount: 320
            },
            {
                statName: 'Mag Capacity',
                statAmount: 16
            },
            {
                statName: 'Recoil',
                statAmount: 100
            },
            {
                statName: 'Fire Rate',
                statAmount: 80
            },
        ],
        characteristics: ['Light Armor Penetrating', 'Rounds Reload', 'Incendiary']
    },
    {
        name: "SG-225 Breaker",
        class: 'Shotgun',
        description: "A fully-automatic shotgun with a high rate of fire, excellent for controlling crowds. Requires frequent reloading.",
        icon: sg225,
        stats: [
            {
                statName: 'Damage',
                statAmount: 330
            },
            {
                statName: 'Mag Capacity',
                statAmount: 16
            },
            {
                statName: 'Recoil',
                statAmount: 55
            },
            {
                statName: 'Fire Rate',
                statAmount: 300
            },
        ],
        characteristics: ['Light Armor Penetrating']
    },
    {
        name: "SG-225SP Breaker Spray&Pray",
        class: 'Shotgun',
        description: "A modified breaker shotgun firing birdshot, small pellets which saturate and area to clear up smaller targets.",
        icon: sg225sp,
        stats: [
            {
                statName: 'Damage',
                statAmount: 240
            },
            {
                statName: 'Mag Capacity',
                statAmount: 26
            },
            {
                statName: 'Recoil',
                statAmount: 45
            },
            {
                statName: 'Fire Rate',
                statAmount: 330
            },
        ],
        characteristics: ['Light Armor Penetrating']
    },
    {
        name: "SG-225IE Breaker Incendiary",
        class: 'Shotgun',
        description: "A modified breaker shotgun firing incendiary projectiles. Generates heat during use, so limited to burst fire.",
        icon: sg225zp,
        stats: [
            {
                statName: 'Damage',
                statAmount: 240
            },
            {
                statName: 'Mag Capacity',
                statAmount: 25
            },
            {
                statName: 'Recoil',
                statAmount: 41
            },
            {
                statName: 'Fire Rate',
                statAmount: 300
            },
        ],
        characteristics: ['Light Armor Penetrating', 'Incendiary']
    },
    {
        name: "CB-9 Exploding Crossbow",
        class: 'Explosive',
        description: "Fires powerful exploding bolts which do maximum damage upon direct impact. Gravity must be accounted for when aiming.",
        icon: cb9,
        stats: [
            {
                statName: 'Damage',
                statAmount: 620
            },
            {
                statName: 'Mag Capacity',
                statAmount: 5
            },
            {
                statName: 'Recoil',
                statAmount: 35
            },
            {
                statName: 'Fire Rate',
                statAmount: 50
            },
        ],
        characteristics: ['Medium Armor Penetrating', 'Explosive', 'One Handed']
    },
    {
        name: "R-36 Eruptor",
        class: 'Explosive',
        description: "This bolt-action rifle fires jet-assisted shells that explode shrapnel in all directions upon impact. Not recommended for close-quarters use.",
        icon: r36,
        stats: [
            {
                statName: 'Damage',
                statAmount: 445
            },
            {
                statName: 'Mag Capacity',
                statAmount: 5
            },
            {
                statName: 'Recoil',
                statAmount: 75
            },
            {
                statName: 'Fire Rate',
                statAmount: 25
            },
        ],
        characteristics: ['Medium Armor Penetrating', 'Explosive']
    },
    {
        name: "SG-8P Punisher Plasma",
        class: 'Energy-Based',
        description: "A modified Punisher shotgun firing exploding plasma rounds. Fire carefully - exploding plasma can injure squadmates.",
        icon: sg8p,
        stats: [
            {
                statName: 'Damage',
                statAmount: 250
            },
            {
                statName: 'Mag Capacity',
                statAmount: 10
            },
            {
                statName: 'Recoil',
                statAmount: 110
            },
            {
                statName: 'Fire Rate',
                statAmount: 80
            },
        ],
        characteristics: ['Medium Armor Penetrating', 'Explosive']
    },
    {
        name: "ARC-12 Blitzer",
        class: 'Energy-Based',
        description: "This shotgun blasts a wide burst of high-voltage electricity that arcs between all units—enemy or otherwise—within range.",
        icon: arc12,
        stats: [
            {
                statName: 'Damage',
                statAmount: 250
            },
            {
                statName: 'Mag Capacity',
                statAmount: 'Nieskończoność'
            },
            {
                statName: 'Recoil',
                statAmount: 60
            },
            {
                statName: 'Fire Rate',
                statAmount: 45
            },
        ],
        characteristics: ['Medium Armor Penetrating']
    },
    {
        name: "LAS-5 Scythe",
        class: 'Energy-Based',
        description: "A laser rifle firing a continuous beam. Does not need reloading, but if it overheats a new heat sink must be fitted.",
        icon: las5,
        stats: [
            {
                statName: 'Dmg/Sec',
                statAmount: 350
            },
            {
                statName: 'Capacity',
                statAmount: 8
            },
            {
                statName: 'Recoil',
                statAmount: 0
            },
        ],
        characteristics: ['Light Armor Penetrating', 'Beam', 'Heat']
    },
    {
        name: "LAS-16 Sickle",
        class: 'Energy-Based',
        description: "A laser rifle, firing in short bursts. Does not need reloading, but if it overheats a new heat sink must be fitted.",
        icon: las16,
        stats: [
            {
                statName: 'Damage',
                statAmount: 55
            },
            {
                statName: 'Capacity',
                statAmount: 7
            },
            {
                statName: 'Recoil',
                statAmount: 2
            },
            {
                statName: 'Fire Rate',
                statAmount: 750
            },
        ],
        characteristics: ['Light Armor Penetrating', 'Heat']
    },
    {
        name: "LAS-17 Double-Edge Sickle",
        class: 'Energy-Based',
        description: "A LAS-16 Sickle model with all overheating protections conveniently removed, allowing for far longer bursts of fire. Does more damage when overheating, at the cost of slightly burning the user.",
        icon: las17,
        stats: [
            {
                statName: 'Damage',
                statAmount: 55
            },
            {
                statName: 'Capacity',
                statAmount: 15
            },
            {
                statName: 'Recoil',
                statAmount: 2
            },
            {
                statName: 'Fire Rate',
                statAmount: 700
            },
        ],
        characteristics: ['Light Armor Penetrating', 'Medium Armor Penetrating', 'Heavy Armor Penetrating', 'Heat']
    },
    {
        name: "PLAS-1 Scorcher",
        class: 'Energy-Based',
        description: "A plasma rifle, firing a bolt of superheated gas which explodes on impact. Avoid standing in proximity to the blast.",
        icon: plas1,
        stats: [
            {
                statName: 'Damage',
                statAmount: 200
            },
            {
                statName: 'Mag Capacity',
                statAmount: 20
            },
            {
                statName: 'Recoil',
                statAmount: 20
            },
            {
                statName: 'Fire Rate',
                statAmount: 350
            },
        ],
        characteristics: ['Medium Armor Penetrating', 'Explosive']
    },
    {
        name: "PLAS-101 Purifier",
        class: 'Energy-Based',
        description: "A plasma rifle firing a bolt of superheated gas, which can be charged by holding down the trigger. Charging up a shot fully makes the bolt explode on impact.",
        icon: plas101,
        stats: [
            {
                statName: 'Damage',
                statAmount: 500
            },
            {
                statName: 'Mag Capacity',
                statAmount: 15
            },
            {
                statName: 'Recoil',
                statAmount: 20
            },
            {
                statName: 'Fire Rate',
                statAmount: 1000
            },
        ],
        characteristics: ['Medium Armor Penetrating', 'Chargeup', 'Explosive']
    },
    {
        name: "FLAM-66 Torcher",
        class: 'Special',
        description: "A lightweight flamethrower. Shoots pressurized fuel through a dispersion nozzle into an open flame.",
        icon: flam66,
        stats: [
            {
                statName: 'Dmg/Sec',
                statAmount: 375
            },
            {
                statName: 'Mag Capacity',
                statAmount: 80
            },
            {
                statName: 'Recoil',
                statAmount: 2
            }
        ],
        characteristics: ['Incendiary']
    },
    {
        name: "JAR-5 Dominator",
        class: 'Special',
        description: "Firing jet-propelled rounds, the Dominator trades fire rate and magazine capacity for increased damage per projectile.",
        icon: jar5,
        stats: [
            {
                statName: 'Damage',
                statAmount: 275
            },
            {
                statName: 'Mag Capacity',
                statAmount: 15
            },
            {
                statName: 'Recoil',
                statAmount: 75
            },
            {
                statName: 'Fire Rate',
                statAmount: 250
            },
        ],
        characteristics: ['Medium Armor Penetrating']
    }
]

export const secondaryWeapons: SecondaryWeaponsType[] = [
    {
        name: "P-2 Peacemaker",
        class: 'Pistol',
        description: "The SEAF standard pistol - offering a high rate of fire, generous capacity, and fast reloading.",
        icon: p2,
        stats: [
            {
                statName: 'Damage',
                statAmount: 75
            },
            {
                statName: 'Mag Capacity',
                statAmount: 15
            },
            {
                statName: 'Recoil',
                statAmount: 23
            },
            {
                statName: 'Fire Rate',
                statAmount: 900
            },
        ],
        characteristics: ['Light Armor Penetrating' , 'One Handed']
    },
    {
        name: "P-19 Redeemer",
        class: 'Pistol',
        description: "A fully-automatic pistol with an extremely high fire rate, allowing for efficient crowd control.",
        icon: p19,
        stats: [
            {
                statName: 'Damage',
                statAmount: 60
            },
            {
                statName: 'Mag Capacity',
                statAmount: 31
            },
            {
                statName: 'Recoil',
                statAmount: 15
            },
            {
                statName: 'Fire Rate',
                statAmount: 1100
            },
        ],
        characteristics: ['Light Armor Penetrating', 'One Handed']
    },
    {
        name: "P-113 Verdict",
        class: 'Pistol',
        description: "The gas-operated, semiautomatic P-113 chambers the 14mm Rapid Deliberation, the largest centerfire cartridge of any magazine-fed pistol.",
        icon: p113,
        stats: [
            {
                statName: 'Damage',
                statAmount: 125
            },
            {
                statName: 'Mag Capacity',
                statAmount: 10
            },
            {
                statName: 'Recoil',
                statAmount: 40
            },
            {
                statName: 'Fire Rate',
                statAmount: 450
            },
        ],
        characteristics: ['Medium Armor Penetrating', 'One Handed']
    },
    {
        name: "P-4 Senator",
        class: 'Pistol',
        description: "A high-damage revolver, which can be reloaded with single rounds. A heavy-hitting and reliable sidearm.",
        icon: p4,
        stats: [
            {
                statName: 'Damage',
                statAmount: 200
            },
            {
                statName: 'Mag Capacity',
                statAmount: 6
            },
            {
                statName: 'Recoil',
                statAmount: 43
            },
            {
                statName: 'Fire Rate',
                statAmount: 200
            },
        ],
        characteristics: ['Heavy Armor Penetrating', 'One Handed', 'Rounds Reload']
    },
    {
        name: "CQC-19 Stun Lance",
        class: 'Melee',
        description: "A melee weapon tipped with electrified prongs that temporarily stun targets. Can be wielded one-handed.",
        icon: cqc19,
        stats: [
            {
                statName: 'Recoil',
                statAmount: 8
            }
        ],
        characteristics: ['Light Armor Penetrating', 'One Handed', 'Stun']
    },
    {
        name: "CQC-30 Stun Baton",
        class: 'Melee',
        description: "A lightweight melee weapon that temporarily stuns enemies. Can be wielded one-handed.",
        icon: cqc30,
        stats: [
            {
                statName: 'Recoil',
                statAmount: 8
            }
        ],
        characteristics: ['Light Armor Penetrating', 'One Handed', 'Stun']
    },
    {
        name: "CQC-5 Combat Hatchet",
        class: 'Melee',
        description: "A heavy-hitting, one-handed melee weapon.",
        icon: cqc5,
        stats: [
            {
                statName: 'Recoil',
                statAmount: 8
            }
        ],
        characteristics: ['Light Armor Penetrating', 'One Handed']
    },
    {
        name: "P-11 Stim Pistol",
        class: 'Special',
        description: "Fires a ballistic dart at near-supersonic speeds, allowing the user to stim allies from a distance. Might sting.",
        icon: p11,
        stats: [
            {
                statName: 'Damage',
                statAmount: 0
            },
            {
                statName: 'Mag Capacity',
                statAmount: 6
            },
            {
                statName: 'Recoil',
                statAmount: 6
            },
            {
                statName: 'Fire Rate',
                statAmount: 70
            },
        ],
        characteristics: ['One Handed', 'Rounds Reload', 'Stimulative']
    },
    {
        name: "SG-22 Bushwhacker",
        class: 'Special',
        description: "A triple-barreled, break-action, sawed-off shotgun. Switch firing modes to fire all three barrels at once.",
        icon: sg22,
        stats: [
            {
                statName: 'Damage',
                statAmount: 405
            },
            {
                statName: 'Mag Capacity',
                statAmount: 3
            },
            {
                statName: 'Recoil',
                statAmount: 170
            },
            {
                statName: 'Fire Rate',
                statAmount: 650
            },
        ],
        characteristics: ['Light Armor Penetrating', 'One Handed']
    },
    {
        name: "P-72 Crisper",
        class: 'Special',
        description: "A compact handgun-style flamethrower, able to project a jet of fire over short distances.",
        icon: p72,
        stats: [
            {
                statName: 'Dmg/Sec',
                statAmount: 375
            },
            {
                statName: 'Mag Capacity',
                statAmount: 30
            },
            {
                statName: 'Recoil',
                statAmount: 2
            }
        ],
        characteristics: ['Incendiary', 'One Handed']
    },
    {
        name: "GP-31 Grenade Pistol",
        class: 'Special',
        description: "A pistol that fires grenades. Must be reloaded between shots.",
        icon: gp31,
        stats: [
            {
                statName: 'Damage',
                statAmount: 650
            },
            {
                statName: 'Mag Capacity',
                statAmount: 1
            },
            {
                statName: 'Recoil',
                statAmount: 43
            },
            {
                statName: 'Fire Rate',
                statAmount: 900
            },
        ],
        characteristics: ['Medium Armor Penetrating', 'One Handed', 'Explosive']
    },
    {
        name: "LAS-7 Dagger",
        class: 'Special',
        description: "A laser pistol that fires a continuous beam. Does not require ammo but can overheat and need to change batteries.",
        icon: las7,
        stats: [
            {
                statName: 'Dmg/Sec',
                statAmount: 250
            },
            {
                statName: 'Capacity',
                statAmount: 7
            },
            {
                statName: 'Recoil',
                statAmount: 0
            }
        ],
        characteristics: ['Light Armor Penetrating', 'One Handed', 'Beam', 'Heat']
    },
    {
        name: "GP-20 Ultimatum",
        class: 'Special',
        description: "A pistol front-loaded with a single, powerful explosive. The weight of the projectile limits the weapon's range.",
        icon: gp31Ult,
        stats: [
            {
                statName: 'Damage',
                statAmount: 4500
            },
            {
                statName: 'Mag Capacity',
                statAmount: 1
            },
            {
                statName: 'Recoil',
                statAmount: 43
            },
            {
                statName: 'Fire Rate',
                statAmount: 900
            }
        ],
        characteristics: ['Medium Armor Penetrating', 'One Handed', 'Explosive']
    },
    {
        name: "PLAS-15 Loyalist",
        class: 'Special',
        description: "A plasma pistol that charges each shot until the trigger is released. Plasma projectiles explode on impact.",
        icon: plas15,
        stats: [
            {
                statName: 'Damage',
                statAmount: 125
            },
            {
                statName: 'Mag Capacity',
                statAmount: 7
            },
            {
                statName: 'Recoil',
                statAmount: 8
            },
            {
                statName: 'Fire Rate',
                statAmount: 1000
            },
        ],
        characteristics: ['Medium Armor Penetrating', 'One Handed', 'Chargeup', 'Explosive']
    }
]

export const granadeWeapons: GranadeWeaponsType[] = [
    {
        name: "G-6 Frag",
        class: 'Standard',
        description: "An antipersonnel fragmentation grenade. Creates damage over a large area when detonated.",
        icon: g6,
        stats: [
            {
                statName: 'Damage',
                statAmount: 500
            },
            {
                statName: 'Penetration',
                statAmount: 3
            },
            {
                statName: 'Outer Radius',
                statAmount: 10
            },
            {
                statName: 'Fuse Time',
                statAmount: '2,4s'
            },
        ],
        characteristics: ['Medium Armor Penetrating', 'Explosive']
    },
    {
        name: "G-12 High Explosive",
        class: 'Standard',
        description: "A high explosive grenade which damages lightly armored targets. Creates high damage over a small area when detonated.",
        icon: g12,
        stats: [
            {
                statName: 'Damage',
                statAmount: 800
            },
            {
                statName: 'Penetration',
                statAmount: 4
            },
            {
                statName: 'Outer Radius',
                statAmount: 7
            },
            {
                statName: 'Fuse Time',
                statAmount: '3,5s'
            },
        ],
        characteristics: ['Heavy Armor Penetrating', 'Explosive']
    },
    {
        name: "G-10 Incendiary",
        class: 'Standard',
        description: "An incendiary grenade which ignites any targets and terrain within the blast radius. use with caution.",
        icon: g10,
        stats: [
            {
                statName: 'Damage',
                statAmount: 300
            },
            {
                statName: 'Penetration',
                statAmount: 3
            },
            {
                statName: 'Outer Radius',
                statAmount: 7
            },
            {
                statName: 'Fuse Time',
                statAmount: '2,9s'
            },
        ],
        characteristics: ['Incendiary', 'Explosive']
    },
    {
        name: "G-16 Impact",
        class: 'Special',
        description: "A high explosive grenade which detonates on first impact.",
        icon: g16,
        stats: [
            {
                statName: 'Damage',
                statAmount: 400
            },
            {
                statName: 'Penetration',
                statAmount: 4
            },
            {
                statName: 'Outer Radius',
                statAmount: 7
            },
            {
                statName: 'Fuse Time',
                statAmount: '0s'
            },
        ],
        characteristics: ['Heavy Armor Penetrating', 'Explosive']
    },
    {
        name: "G-13 Incendiary Impact",
        class: 'Special',
        description: "Detonates on impact, covering the immediate vicinity in self-igniting white phosphorus.",
        icon: g13,
        stats: [
            {
                statName: 'Damage',
                statAmount: 150
            },
            {
                statName: 'Penetration',
                statAmount: 3
            },
            {
                statName: 'Outer Radius',
                statAmount: 7
            },
            {
                statName: 'Fuse Time',
                statAmount: '2,4s'
            },
        ],
        characteristics: ['Incendiary', 'Explosive']
    },
    {
        name: "G-23 Stun",
        class: 'Special',
        description: "Temporarily stuns all targets within the effective radius.",
        icon: g23,
        stats: [
            {
                statName: 'Damage',
                statAmount: 0
            },
            {
                statName: 'Penetration',
                statAmount: 6
            },
            {
                statName: 'Outer Radius',
                statAmount: 10
            },
            {
                statName: 'Fuse Time',
                statAmount: '1,8s'
            },
        ],
        characteristics: ['Explosive']
    },
    {
        name: "G-4 Gas",
        class: 'Special',
        description: "A grenade that releases a cloud of toxic gas, effective at blinding and slowing both organic and inorganic enemies.",
        icon: g4,
        stats: [
            {
                statName: 'Damage',
                statAmount: 3
            },
            {
                statName: 'Penetration',
                statAmount: 6
            },
            {
                statName: 'Outer Radius',
                statAmount: 7
            },
            {
                statName: 'Fuse Time',
                statAmount: '2,9s'
            },
        ],
        characteristics: ['Caustic', 'Explosive']
    },
    {
        name: "G-50 Seeker",
        class: 'Special',
        description: "This grenade delivery drone follows the user until it detects an enemy nearby, then flies towards it and explodes on impact. Has a limited battery life.",
        icon: g50,
        stats: [
            {
                statName: 'Damage',
                statAmount: 400
            },
            {
                statName: 'Penetration',
                statAmount: 4
            },
            {
                statName: 'Outer Radius',
                statAmount: 7
            },
        ],
        characteristics: ['Medium Armor Penetrating']
    },
    {
        name: "G-3 Smoke",
        class: 'Special',
        description: "A 'compliance weapon' to modify enemy behavior. Creates a thick smoke screen to block targets' line of sight.",
        icon: g3,
        stats: [
            {
                statName: 'Damage',
                statAmount: 0
            },
            {
                statName: 'Penetration',
                statAmount: 0
            },
            {
                statName: 'Outer Radius',
                statAmount: 5
            },
            {
                statName: 'Fuse Time',
                statAmount: '2,4s'
            },
        ],
        characteristics: ['Explosive']
    },
    {
        name: "G-123 Thermite",
        class: 'Special',
        description: "A thermite grenade designed to adhere to surfaces before burning at 2000°C. Capable of burning through some armor.",
        icon: g123,
        stats: [
            {
                statName: 'Damage',
                statAmount: 2000
            },
            {
                statName: 'Penetration',
                statAmount: 7
            },
            {
                statName: 'Outer Radius',
                statAmount: 3
            },
            {
                statName: 'Fuse Time',
                statAmount: '2,9s'
            },
        ],
        characteristics: ['Anti-Tank']
    },
    {
        name: "K-2 Throwing Knife",
        class: 'Special',
        description: "Delivers silent justice to Freedom's enemies.",
        icon: k2,
        stats: [
            {
                statName: 'Damage',
                statAmount: 250
            },
            {
                statName: 'Penetration',
                statAmount: 3
            }
        ],
        characteristics: ['Medium Armor Penetrating']
    }
]