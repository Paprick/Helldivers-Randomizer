import { StrategemTypes } from "../types/strategem-types"

import kg500 from '../assets/icons/strategems/500kg.jpg'
import ac8AutoDzi from '../assets/icons/strategems/AC8AutoDzi.jpg'
import APW1KarWyb from '../assets/icons/strategems/APW1KarWyb.jpg'
import AR23Azor from '../assets/icons/strategems/AR23Azor.jpg'
import BombKasOr from '../assets/icons/strategems/BombKasOr.jpg'
import DzialElektrMag from '../assets/icons/strategems/DzialElektrMag.jpg'
import EAT from '../assets/icons/strategems/EAT.jpg'
import EgzoOswb from '../assets/icons/strategems/EgzoOswb.jpg'
import EgzoPatriot from '../assets/icons/strategems/EgzoPatriota.jpg'
import Flam40OgnStraz from '../assets/icons/strategems/FLAM40OgnStraz.jpg'
import GenTarcz from '../assets/icons/strategems/GenTarcz.jpg'

import GL21Grana from '../assets/icons/strategems/GL21Grana.jpg'
import GniazCiezKarMasz from '../assets/icons/strategems/GniazCiezKarMasz.jpg'
import GniazPPANC from '../assets/icons/strategems/GniazdPPANC.jpg'
import KarBezOdrz from '../assets/icons/strategems/KarBezOdrz.jpg'
import LAS5Azor from '../assets/icons/strategems/LAS5Azor.jpg'
import LAS98DziaLaser from '../assets/icons/strategems/LAS98DziaLaser.jpg'
import M102SzybPojZwiad from '../assets/icons/strategems/M102SzybPojZwiad.jpg'
import M105Sojusz from '../assets/icons/strategems/M105Sojusz.jpg'
import MG43KarMasz from '../assets/icons/strategems/MG43KarMasz.jpg'
import MG206Ciez from '../assets/icons/strategems/MG206Ciez.jpg'
import MinPPANC from '../assets/icons/strategems/MinPPANC.jpg'

import MinyZapal from '../assets/icons/strategems/MinyZapal.jpg'
import MiotaczLuk from '../assets/icons/strategems/MiotaczLuk.jpg'
import MiotaczPlo from '../assets/icons/strategems/MiotaczPlo.jpg'
import MLS4XKomand from '../assets/icons/strategems/MLS4XKomand.jpg'
import MozEMS from '../assets/icons/strategems/MozEMS.jpg'
import NalotDymOr from '../assets/icons/strategems/NalotDymOr.jpg'
import NalotNapOr from '../assets/icons/strategems/NalotNapOr.jpg'
import NalotOr from '../assets/icons/strategems/NalotOr.jpg'
import OrbAtEMS from '../assets/icons/strategems/OrbAtEMS.jpg'
import OrbAtk120mm from '../assets/icons/strategems/OrbAtk120mm.jpg'
import OrbAtkDziaEnerg from '../assets/icons/strategems/OrbAtkDziaEnerg.jpg'

import OrbAtkGaz from '../assets/icons/strategems/OrbAtkGaz.jpg'
import OrbAtkPow from '../assets/icons/strategems/OrbAtkPow.jpg'
import OrbAtkPrec from '../assets/icons/strategems/OrbAtPrec.jpg'
import OrbBarDym from '../assets/icons/strategems/OrbBarDymn.jpg'
import OrbLas from '../assets/icons/strategems/OrbLas.jpg'
import OrbSalw380mm from '../assets/icons/strategems/OrbSalw380mm.jpg'
import OrbSalwPost from '../assets/icons/strategems/OrbSalwPost.jpg'
import OrbZrzNap from '../assets/icons/strategems/OrbZrzNap.jpg'
import OSA from '../assets/icons/strategems/OSA.jpg'
import PlecakGenTarcz from '../assets/icons/strategems/PlecakGenTarcz.jpg'

import PlecakSkok from '../assets/icons/strategems/PlecakSkok.jpg'
import PlecakZaopatrz from '../assets/icons/strategems/PlecakZaopatrz.jpg'
import PlecakZTarczBal from '../assets/icons/strategems/PlecZTarczBal.jpg'
import PPiechPolMin from '../assets/icons/strategems/PPiechPolMin.jpg'
import QUASAR from '../assets/icons/strategems/QUASAR.jpg'
import RL77WyrzRak from '../assets/icons/strategems/RL77WyrzRak.jpg'
import SalwZGat from '../assets/icons/strategems/SalwZGat.jpg'
import Sterylizator from '../assets/icons/strategems/Sterylizator.jpg'
import StrazZAutDzial from '../assets/icons/strategems/StrazZAutDzial.jpg'
import StrazZDzialGat from '../assets/icons/strategems/StrazZDzialGat.jpg'
import StrazZKarMasz from '../assets/icons/strategems/StrazZKarMasz.jpg'

import StrazZMozd from '../assets/icons/strategems/StrazZMozd.jpg'
import StrazZWyrzRak from '../assets/icons/strategems/StrazZWyrzRak.jpg'
import TarczKier from '../assets/icons/strategems/TarczKier.jpg'
import Tesla from '../assets/icons/strategems/Tesla.jpg'
import TX13OddechAzora from '../assets/icons/strategems/TX-13OddechAzora.jpg'
import Wlocznia from '../assets/icons/strategems/Wlocznia.jpg'
import WspZPowietOr from '../assets/icons/strategems/WspZPowietOr.jpg'
import ZasobRakOr120mm from '../assets/icons/strategems/ZasobRakOr120mm.jpg'

import B100PrzenHellb from '../assets/icons/strategems/B-100PrzenHellb.jpg'


export const strategems: StrategemTypes[] = [
    {
        name: "MG-43 Machine Gun",
        class: 'Supply Stratagem',
        isSameType: false,
        sameType: '',
        description: "A machine gun designed for stationary use. Trades higher power for increased recoil and reduced accuracy.",
        icon: MG43KarMasz,
        stats: [
            {
                statName: 'Call-in Time',
                statAmount: '4,75 s'
            },
            {
                statName: 'Uses',
                statAmount: 'Infinite'
            },
            {
                statName: 'Cooldown',
                statAmount: '480 s'
            }
        ],
        characteristics: ['Support Weapon', 'Hellpod', 'Medium Armor Penetrating', 'Stationary Reload']
    },
    {
        name: "APW-1 Anti-Materiel Rifle",
        class: 'Supply Stratagem',
        isSameType: false,
        sameType: '',
        description: "A high-caliber sniper rifle effective over long distances against light vehicle armor. This rifle must be aimed downscope.",
        icon: APW1KarWyb,
        stats: [
            {
                statName: 'Call-in Time',
                statAmount: '4,75 s'
            },
            {
                statName: 'Uses',
                statAmount: 'Infinite'
            },
            {
                statName: 'Cooldown',
                statAmount: '480 s'
            }
        ],
        characteristics: ['Support Weapon', 'Hellpod', 'Heavy Armor Penetrating']
    },
    {
        name: "M-105 Stalwart",
        class: 'Supply Stratagem',
        isSameType: false,
        sameType: '',
        description: "A compact, low caliber machine gun. Trades power for ease of use, with faster reloading than heavier machine guns.",
        icon: M105Sojusz,
        stats: [
            {
                statName: 'Call-in Time',
                statAmount: '4,75 s'
            },
            {
                statName: 'Uses',
                statAmount: 'Infinite'
            },
            {
                statName: 'Cooldown',
                statAmount: '480 s'
            }
        ],
        characteristics: ['Support Weapon', 'Hellpod', 'Light Armor Penetrating']
    },
    {
        name: "EAT-17 Expendable Anti-Tank",
        class: 'Supply Stratagem',
        isSameType: false,
        sameType: '',
        description: "A single-use weapon specialized for damaging vehicle armor. Discarded after every use.",
        icon: EAT,
        stats: [
            {
                statName: 'Call-in Time',
                statAmount: '4,75 s'
            },
            {
                statName: 'Uses',
                statAmount: 'Infinite'
            },
            {
                statName: 'Cooldown',
                statAmount: '70 s'
            }
        ],
        characteristics: ['Support Weapon', 'Hellpod', 'Anti-Tank', 'Expendable']
    },
    {
        name: "GR-8 Recoilless Rifle",
        class: 'Supply Stratagem',
        isSameType: false,
        sameType: '',
        description: "A recoilless rifle effective against vehicle armor. Includes support backpack required for reloading.",
        icon: KarBezOdrz,
        stats: [
            {
                statName: 'Call-in Time',
                statAmount: '4,75 s'
            },
            {
                statName: 'Uses',
                statAmount: 'Infinite'
            },
            {
                statName: 'Cooldown',
                statAmount: '480 s'
            }
        ],
        characteristics: ['Support Weapon', 'Hellpod', 'Backpack', 'Anti-Tank', 'Stationary Reload']
    },
    {
        name: "FLAM-40 Flamethrower",
        class: 'Supply Stratagem',
        isSameType: false,
        sameType: '',
        description: "An incendiary weapon for close range. Will ignite targets, terrain, and any flammable teammates.",
        icon: MiotaczPlo,
        stats: [
            {
                statName: 'Call-in Time',
                statAmount: '4,75 s'
            },
            {
                statName: 'Uses',
                statAmount: 'Infinite'
            },
            {
                statName: 'Cooldown',
                statAmount: '480 s'
            }
        ],
        characteristics: ['Support Weapon', 'Hellpod', 'Incendiary']
    },
    {
        name: "AC-8 Autocannon",
        class: 'Supply Stratagem',
        isSameType: false,
        sameType: '',
        description: "A fully-automatic cannon effective against light vehicle armor. Includes support backpack required for reloading.",
        icon: ac8AutoDzi,
        stats: [
            {
                statName: 'Call-in Time',
                statAmount: '4,75 s'
            },
            {
                statName: 'Uses',
                statAmount: 'Infinite'
            },
            {
                statName: 'Cooldown',
                statAmount: '480 s'
            }
        ],
        characteristics: ['Support Weapon', 'Hellpod', 'Backpack', 'Heavy Armor Penetrating', 'Stationary Reload']
    },
    {
        name: "MG-206 Heavy Machine Gun",
        class: 'Supply Stratagem',
        isSameType: false,
        sameType: '',
        description: "A very powerful but difficult-to-wield machine gun with intense recoil.",
        icon: MG206Ciez,
        stats: [
            {
                statName: 'Call-in Time',
                statAmount: '4,75 s'
            },
            {
                statName: 'Uses',
                statAmount: 'Infinite'
            },
            {
                statName: 'Cooldown',
                statAmount: '480 s'
            }
        ],
        characteristics: ['Support Weapon', 'Hellpod', 'Heavy Armor Penetrating', 'Stationary Reload']
    },
    {
        name: "RL-77 Airburst Rocket Launcher",
        class: 'Supply Stratagem',
        isSameType: false,
        sameType: '',
        description: "Fires a rocket that detonates within proximity of a target, and deploys a cluster of explosive bomblets.",
        icon: RL77WyrzRak,
        stats: [
            {
                statName: 'Call-in Time',
                statAmount: '4,75 s'
            },
            {
                statName: 'Uses',
                statAmount: 'Infinite'
            },
            {
                statName: 'Cooldown',
                statAmount: '480 s'
            }
        ],
        characteristics: ['Support Weapon', 'Hellpod', 'Backpack', 'Medium Armor Penetrating', 'Stationary Reload']
    },
    {
        name: "MLS-4X Commando",
        class: 'Supply Stratagem',
        isSameType: false,
        sameType: '',
        description: "An expendable missile launcher equipped with four laser-guided missiles.",
        icon: MLS4XKomand,
        stats: [
            {
                statName: 'Call-in Time',
                statAmount: '4,75 s'
            },
            {
                statName: 'Uses',
                statAmount: 'Infinite'
            },
            {
                statName: 'Cooldown',
                statAmount: '120 s'
            }
        ],
        characteristics: ['Support Weapon', 'Hellpod', 'Anti-Tank', 'Expendable']
    },
    {
        name: "RS-422 Railgun",
        class: 'Supply Stratagem',
        isSameType: false,
        sameType: '',
        description: "An experimental weapon which prioritizes armor penetration. Must be charged between shots - choose targets carefully.",
        icon: DzialElektrMag,
        stats: [
            {
                statName: 'Call-in Time',
                statAmount: '4,75 s'
            },
            {
                statName: 'Uses',
                statAmount: 'Infinite'
            },
            {
                statName: 'Cooldown',
                statAmount: '480 s'
            }
        ],
        characteristics: ['Support Weapon', 'Hellpod', 'Anti-Tank', 'Chargeup']
    },
    {
        name: "FAF-14 Spear",
        class: 'Supply Stratagem',
        isSameType: false,
        sameType: '',
        description: "An anti-tank homing missile which must lock onto its target before launch. Effective against large and armored enemies.",
        icon: Wlocznia,
        stats: [
            {
                statName: 'Call-in Time',
                statAmount: '4,75 s'
            },
            {
                statName: 'Uses',
                statAmount: 'Infinite'
            },
            {
                statName: 'Cooldown',
                statAmount: '480 s'
            }
        ],
        characteristics: ['Support Weapon', 'Hellpod', 'Backpack', 'Anti-Tank', 'Stationary Reload']
    },
    {
        name: "StA-X3 W.A.S.P. Launcher",
        class: 'Supply Stratagem',
        isSameType: false,
        sameType: '',
        description: "A versatile missile launcher loaded with seven lock-on homing missiles. These can either be fired from the launcher directly or as an airburst. Includes support backpack required for reloading. Produced by Stål Arms. ",
        icon: OSA,
        stats: [
            {
                statName: 'Call-in Time',
                statAmount: '4,75 s'
            },
            {
                statName: 'Uses',
                statAmount: 'Infinite'
            },
            {
                statName: 'Cooldown',
                statAmount: '480 s'
            }
        ],
        characteristics: ['Support Weapon', 'Hellpod', 'Backpack', 'Anti-Tank', 'Stationary Reload']
    },
    {
        name: "Orbital Gatling Barrage",
        class: 'Offensive Stratagem',
        isSameType: false,
        sameType: '',
        description: "A barrage of high explosive rounds, fired from the Destroyer's high speed rotary autocannons.",
        icon: SalwZGat,
        stats: [
            {
                statName: 'Call-in Time',
                statAmount: '2,05 s'
            },
            {
                statName: 'Uses',
                statAmount: 'Infinite'
            },
            {
                statName: 'Cooldown',
                statAmount: '70 s'
            }
        ],
        characteristics: ['Explosive', 'Orbital', 'Heavy Armor Penetrating']
    },
    {
        name: "Orbital Airburst Strike",
        class: 'Offensive Stratagem',
        isSameType: false,
        sameType: '',
        description: "A projectile which explodes while airborne, creating a deadly rain of shrapnel. Not effective against heavy armor.",
        icon: OrbAtkPow,
        stats: [
            {
                statName: 'Call-in Time',
                statAmount: '3,45 s'
            },
            {
                statName: 'Uses',
                statAmount: 'Infinite'
            },
            {
                statName: 'Cooldown',
                statAmount: '100 s'
            }
        ],
        characteristics: ['Explosive', 'Orbital', 'Medium Armor Penetrating']
    },
    {
        name: "Orbital 120mm HE Barrage",
        class: 'Offensive Stratagem',
        isSameType: false,
        sameType: '',
        description: "A precision artillery salvo over a small area, perfect for taking out concentrated enemy units.",
        icon: OrbAtk120mm,
        stats: [
            {
                statName: 'Call-in Time',
                statAmount: '6,45 s'
            },
            {
                statName: 'Uses',
                statAmount: 'Infinite'
            },
            {
                statName: 'Cooldown',
                statAmount: '180 s'
            }
        ],
        characteristics: ['Explosive', 'Orbital', 'Anti-Tank']
    },
    {
        name: "Orbital 380mm HE Barrage",
        class: 'Offensive Stratagem',
        isSameType: false,
        sameType: '',
        description: "A prolonged barrage, wreaking extended destruction over a large area. Communication with teammates is advised.",
        icon: OrbSalw380mm,
        stats: [
            {
                statName: 'Call-in Time',
                statAmount: '7,45 s'
            },
            {
                statName: 'Uses',
                statAmount: 'Infinite'
            },
            {
                statName: 'Cooldown',
                statAmount: '240 s'
            }
        ],
        characteristics: ['Explosive', 'Orbital', 'Anti-Tank']
    },
    {
        name: "Orbital Walking Barrage",
        class: 'Offensive Stratagem',
        isSameType: false,
        sameType: '',
        description: "A linear artillery barrage which moves at intervals, driving the enemy out from cover while allowing an advance.",
        icon: OrbSalwPost,
        stats: [
            {
                statName: 'Call-in Time',
                statAmount: '4,45s'
            },
            {
                statName: 'Uses',
                statAmount: 'Infinite'
            },
            {
                statName: 'Cooldown',
                statAmount: '240 s'
            }
        ],
        characteristics: ['Explosive', 'Orbital', 'Anti-Tank']
    },
    {
        name: "Orbital Laser",
        class: 'Offensive Stratagem',
        isSameType: false,
        sameType: '',
        description: "The Destroyer's laser cannon will sweep over the designated area, vaporizing all targets within the effective radius.",
        icon: OrbLas,
        stats: [
            {
                statName: 'Call-in Time',
                statAmount: '1 s'
            },
            {
                statName: 'Uses',
                statAmount: '3'
            },
            {
                statName: 'Cooldown',
                statAmount: '300 s'
            }
        ],
        characteristics: ['Beam', 'Orbital', 'Anti-Tank']
    },
    {
        name: "Orbital Napalm Barrage",
        class: 'Offensive Stratagem',
        isSameType: false,
        sameType: '',
        description: "Launches a prolonged barrage of napalm shells over a wide area, setting a swath of land ablaze in mere moments.",
        icon: OrbZrzNap,
        stats: [
            {
                statName: 'Call-in Time',
                statAmount: '6,45 s'
            },
            {
                statName: 'Uses',
                statAmount: 'Infinite'
            },
            {
                statName: 'Cooldown',
                statAmount: '240 s'
            }
        ],
        characteristics: ['Explosive', 'Orbital', 'Incendiary']
    },
    {
        name: "Orbital Railcannon Strike",
        class: 'Offensive Stratagem',
        isSameType: false,
        sameType: '',
        description: "A high-velocity railcannon round fired at the largest target in close proximity to the beacon. Targeting is automatic.",
        icon: OrbAtkDziaEnerg,
        stats: [
            {
                statName: 'Call-in Time',
                statAmount: '0 s'
            },
            {
                statName: 'Uses',
                statAmount: 'Infinite'
            },
            {
                statName: 'Cooldown',
                statAmount: '210 s'
            }
        ],
        characteristics: ['Orbital', 'Anti-Tank']
    },
    {
        name: "Eagle Strafing Run",
        class: 'Offensive Stratagem',
        isSameType: false,
        sameType: '',
        description: "A strafing run of the battlefield to clear small targets, delivered almost instantly. When called the strike will start from the beacon and go away from the direction you were facing when thrown",
        icon: WspZPowietOr,
        stats: [
            {
                statName: 'Call-in Time',
                statAmount: '2,40 s'
            },
            {
                statName: 'Uses',
                statAmount: '5'
            },
            {
                statName: 'Cooldown',
                statAmount: '8 s'
            }
        ],
        characteristics: ['Eagle', 'Heavy Armor Penetrating']
    },
    {
        name: "Eagle Airstrike",
        class: 'Offensive Stratagem',
        isSameType: false,
        sameType: '',
        description: "A barrage of bombs creating a non-targeted carpet of explosions. When called the strike will be Perpendicular from the direction you were facing when thrown.",
        icon: NalotOr,
        stats: [
            {
                statName: 'Call-in Time',
                statAmount: '4,10 s'
            },
            {
                statName: 'Uses',
                statAmount: '3'
            },
            {
                statName: 'Cooldown',
                statAmount: '8 s'
            }
        ],
        characteristics: ['Eagle', 'Explosive', 'Anti-Tank']
    },
    {
        name: "Eagle Cluster Bomb",
        class: 'Offensive Stratagem',
        isSameType: false,
        sameType: '',
        description: "A targeted air strike unable to destroy buildings, but efficient at clearing smaller targets",
        icon: BombKasOr,
        stats: [
            {
                statName: 'Call-in Time',
                statAmount: '4,35 s'
            },
            {
                statName: 'Uses',
                statAmount: '5'
            },
            {
                statName: 'Cooldown',
                statAmount: '8 s'
            }
        ],
        characteristics: ['Eagle', 'Medium Armor Penetrating', 'Explosive']
    },
    {
        name: "Eagle Napalm Airstrike",
        class: 'Offensive Stratagem',
        isSameType: false,
        sameType: '',
        description: "A barrage of napalm bombs, creating a wall of fire which will stop the enemy in their tracks.",
        icon: NalotNapOr,
        stats: [
            {
                statName: 'Call-in Time',
                statAmount: '4,10 s'
            },
            {
                statName: 'Uses',
                statAmount: '3'
            },
            {
                statName: 'Cooldown',
                statAmount: '8 s'
            }
        ],
        characteristics: ['Eagle', 'Explosive', 'Incendiary']
    },
    {
        name: "LIFT-850 Jump Pack",
        class: 'Supply Stratagem',
        isSameType: false,
        sameType: '',
        description: "Enables the user to jump higher than 'gravity' and 'safety' would normally allow. Must be charged before use.",
        icon: PlecakGenTarcz,
        stats: [
            {
                statName: 'Call-in Time',
                statAmount: '9,75 s'
            },
            {
                statName: 'Uses',
                statAmount: 'Infinite'
            },
            {
                statName: 'Cooldown',
                statAmount: '480 s'
            }
        ],
        characteristics: ['Hellpod', 'Backpack']
    },
    {
        name: "Eagle Smoke Strike",
        class: 'Offensive Stratagem',
        isSameType: false,
        sameType: '',
        description: "A barrage of smoke grenades, creating a thick smoke screen to block enemies' line of sight.",
        icon: NalotDymOr,
        stats: [
            {
                statName: 'Call-in Time',
                statAmount: '4,40 s'
            },
            {
                statName: 'Uses',
                statAmount: '3'
            },
            {
                statName: 'Cooldown',
                statAmount: '8 s'
            }
        ],
        characteristics: ['Eagle', 'Explosive']
    },
    {
        name: "Eagle 110mm Rocket Pods",
        class: 'Offensive Stratagem',
        isSameType: false,
        sameType: '',
        description: "A barrage of rocket pods, which the Eagle pilot will release on the largest target near the stratagem beacon.",
        icon: ZasobRakOr120mm,
        stats: [
            {
                statName: 'Call-in Time',
                statAmount: '3,40 s'
            },
            {
                statName: 'Uses',
                statAmount: '3'
            },
            {
                statName: 'Cooldown',
                statAmount: '8 s'
            }
        ],
        characteristics: ['Eagle', 'Explosive', 'Anti-Tank']
    },
    {
        name: "Eagle 500kg Bomb",
        class: 'Offensive Stratagem',
        isSameType: false,
        sameType: '',
        description: "A large bomb obliterating almost any target close to impact. Make sure to clear the area. Big Booms!",
        icon: kg500,
        stats: [
            {
                statName: 'Call-in Time',
                statAmount: '3,45 s'
            },
            {
                statName: 'Uses',
                statAmount: '2'
            },
            {
                statName: 'Cooldown',
                statAmount: '8 s'
            }
        ],
        characteristics: ['Eagle', 'Explosive', 'Anti-Tank']
    },
    {
        name: "M-102 Fast Recon Vehicle",
        class: 'Supply Stratagem',
        isSameType: false,
        sameType: '',
        description: "A lightly-armored reconnaissance vehicle mounted with a heavy machinegun.",
        icon: M102SzybPojZwiad,
        stats: [
            {
                statName: 'Call-in Time',
                statAmount: '10,50 s'
            },
            {
                statName: 'Uses',
                statAmount: 'Infinite'
            },
            {
                statName: 'Cooldown',
                statAmount: '480 s'
            }
        ],
        characteristics: ['Vehicle']
    },
    {
        name: "Orbital Precision Strike",
        class: 'Offensive Stratagem',
        isSameType: false,
        sameType: '',
        description: "A single precise shot from the Destroyer's 'ATLAS' cannon.",
        icon: OrbAtkPrec,
        stats: [
            {
                statName: 'Call-in Time',
                statAmount: '3,45 s'
            },
            {
                statName: 'Uses',
                statAmount: 'Bez Ograncizeń'
            },
            {
                statName: 'Cooldown',
                statAmount: '90 s'
            }
        ],
        characteristics: ['Explosive', 'Orbital', 'Anti-Tank']
    },
    {
        name: "Orbital Gas Strike",
        class: 'Offensive Stratagem',
        isSameType: false,
        sameType: '',
        description: "A projectile which releases a cloud of corrosive gas, harmful to both organic and robotic lifeforms.",
        icon: OrbAtkGaz,
        stats: [
            {
                statName: 'Call-in Time',
                statAmount: '3,45 s'
            },
            {
                statName: 'Uses',
                statAmount: 'Infinite'
            },
            {
                statName: 'Cooldown',
                statAmount: '75 s'
            }
        ],
        characteristics: ['Explosive', 'Orbital', 'Caustic']
    },
    {
        name: "Orbital EMS Strike",
        class: 'Offensive Stratagem',
        isSameType: false,
        sameType: '',
        description: "A compliance weapon to modify enemy behavior. The projectile stuns all targets within the strike radius.",
        icon: OrbAtEMS,
        stats: [
            {
                statName: 'Call-in Time',
                statAmount: '3,45 s'
            },
            {
                statName: 'Uses',
                statAmount: 'Infinite'
            },
            {
                statName: 'Cooldown',
                statAmount: '75 s'
            }
        ],
        characteristics: ['Orbital']
    },
    {
        name: "Orbital Smoke Strike",
        class: 'Offensive Stratagem',
        isSameType: false,
        sameType: '',
        description: "Creates a large, thick smoke screen to block targets' line of sight.",
        icon: OrbBarDym,
        stats: [
            {
                statName: 'Call-in Time',
                statAmount: '3,45 s'
            },
            {
                statName: 'Uses',
                statAmount: 'Infinite'
            },
            {
                statName: 'Cooldown',
                statAmount: '100 s'
            }
        ],
        characteristics: ['Explosive', 'Orbital']
    },
    {
        name: "E/MG-101 HMG Emplacement",
        class: 'Defensive Stratagem',
        isSameType: false,
        sameType: '',
        description: "A manned gun emplacement offering superior firepower against lightly armored targets. Slow to turn, so place it wisely.",
        icon: GniazCiezKarMasz,
        stats: [
            {
                statName: 'Call-in Time',
                statAmount: '4,75 s'
            },
            {
                statName: 'Uses',
                statAmount: 'Infinite'
            },
            {
                statName: 'Cooldown',
                statAmount: '180 s'
            }
        ],
        characteristics: ['Hellpod', 'Heavy Armor Penetrating']
    },
    {
        name: "FX-12 Shield Generator Relay",
        class: 'Defensive Stratagem',
        isSameType: false,
        sameType: '',
        description: "A stationary energy shield which provides cover against projectiles. Has a limited lifetime once deployed.",
        icon: GenTarcz,
        stats: [
            {
                statName: 'Call-in Time',
                statAmount: '4,75 s'
            },
            {
                statName: 'Uses',
                statAmount: 'Infinite'
            },
            {
                statName: 'Cooldown',
                statAmount: '90 s'
            }
        ],
        characteristics: ['Hellpod']
    },
    {
        name: "A/ARC-3 Tesla Tower",
        class: 'Defensive Stratagem',
        isSameType: false,
        sameType: '',
        description: "A turret which fires electrical charges at targets in close range. To avoid friendly fire, remain prone.",
        icon: Tesla,
        stats: [
            {
                statName: 'Call-in Time',
                statAmount: '4,75 s'
            },
            {
                statName: 'Uses',
                statAmount: 'Infinite'
            },
            {
                statName: 'Cooldown',
                statAmount: '120 s'
            }
        ],
        characteristics: ['Hellpod', 'Sentry']
    },
    {
        name: "MD-6 Anti-Personnel Minefield",
        class: 'Defensive Stratagem',
        isSameType: false,
        sameType: '',
        description: "Deploys a defensive anti-personnel minefield, to halt the enemy advance.",
        icon: PPiechPolMin,
        stats: [
            {
                statName: 'Call-in Time',
                statAmount: '4,75 s'
            },
            {
                statName: 'Uses',
                statAmount: 'Infinite'
            },
            {
                statName: 'Cooldown',
                statAmount: '120 s'
            }
        ],
        characteristics: ['Hellpod', 'Explosive', 'Medium Armor Penetrating']
    },
    {
        name: "B-1 Supply Pack",
        class: 'Supply Stratagem',
        isSameType: false,
        sameType: '',
        description: "Supply boxes containing ammunition, with a backpack that allows the user to distribute boxes to fellow Helldivers.",
        icon: PlecakZaopatrz,
        stats: [
            {
                statName: 'Call-in Time',
                statAmount: '9,75 s'
            },
            {
                statName: 'Uses',
                statAmount: 'Infinite'
            },
            {
                statName: 'Cooldown',
                statAmount: '480 s'
            }
        ],
        characteristics: ['Hellpod', 'Backpack']
    },
    {
        name: "GL-21 Grenade Launcher",
        class: 'Supply Stratagem',
        isSameType: false,
        sameType: '',
        description: "A grenade launcher effective against armored infantry. Not intended for use against vehicle armor or fortified buildings.",
        icon: GL21Grana,
        stats: [
            {
                statName: 'Call-in Time',
                statAmount: '4,75 s'
            },
            {
                statName: 'Uses',
                statAmount: 'Infinite'
            },
            {
                statName: 'Cooldown',
                statAmount: '480 s'
            }
        ],
        characteristics: ['Explosive', 'Hellpod', 'Support Weapon', 'Medium Armor Penetrating']
    },
    {
        name: "LAS-98 Laser Cannon",
        class: 'Supply Stratagem',
        isSameType: false,
        sameType: '',
        description: "A laser weapon firing a continuous beam. Doesn't require ammunition, but will need heat sink replaced if it overheats.",
        icon: LAS98DziaLaser,
        stats: [
            {
                statName: 'Call-in Time',
                statAmount: '4,75 s'
            },
            {
                statName: 'Uses',
                statAmount: 'Infinite'
            },
            {
                statName: 'Cooldown',
                statAmount: '480 s'
            }
        ],
        characteristics: ['Support Weapon', 'Hellpod', 'Heavy Armor Penetrating', 'Heat', 'Beam']
    },
    {
        name: "MD-I4 Incendiary Mines",
        class: 'Defensive Stratagem',
        isSameType: false,
        sameType: '',
        description: "Deploys a defensive incendiary minefield, which will set both terrain and targets alight when triggered.",
        icon: MinyZapal,
        stats: [
            {
                statName: 'Call-in Time',
                statAmount: '4,75 s'
            },
            {
                statName: 'Uses',
                statAmount: 'Infinite'
            },
            {
                statName: 'Cooldown',
                statAmount: '120 s'
            }
        ],
        characteristics: ['Hellpod', 'Explosive', 'Incendiary']
    },
    {
        name: "AX/LAS-5 Rover",
        class: 'Supply Stratagem',
        isSameType: false,
        sameType: '',
        description: "An autonomous drone equipped with a laser rifle, providing 360° cover. Returns to backpack to cool down.",
        icon: LAS5Azor,
        stats: [
            {
                statName: 'Call-in Time',
                statAmount: '9,75 s'
            },
            {
                statName: 'Uses',
                statAmount: 'Infinite'
            },
            {
                statName: 'Cooldown',
                statAmount: '480 s'
            }
        ],
        characteristics: ['Hellpod', 'Backpack', 'Light Armor Penetrating', 'Beam']
    },
    {
        name: "SH-20 Ballistic Shield Backpack",
        class: 'Supply Stratagem',
        isSameType: false,
        sameType: '',
        description: "A backpack which can be wielded as a one-handed ballistic shield, protecting against small arms fire.",
        icon: PlecakZTarczBal,
        stats: [
            {
                statName: 'Call-in Time',
                statAmount: '9,75 s'
            },
            {
                statName: 'Uses',
                statAmount: 'Infinite'
            },
            {
                statName: 'Cooldown',
                statAmount: '300 s'
            }
        ],
        characteristics: ['Hellpod', 'Backpack']
    },
    {
        name: "ARC-3 Arc Thrower",
        class: 'Supply Stratagem',
        isSameType: false,
        sameType: '',
        description: "Projects an arc of lightning at close range. Charges up to project bolts, and may discharge through multiple targets. ",
        icon: MiotaczLuk,
        stats: [
            {
                statName: 'Call-in Time',
                statAmount: '4,75 s'
            },
            {
                statName: 'Uses',
                statAmount: 'Infinite'
            },
            {
                statName: 'Cooldown',
                statAmount: '480 s'
            }
        ],
        characteristics: ['Support Weapon', 'Hellpod', 'Chargeup']
    },
    {
        name: "MD-17 Anti-Tank Mines",
        class: 'Defensive Stratagem',
        isSameType: false,
        sameType: '',
        description: "Scatters powerful anti-tank mines that deal heavy, armor-penetrating damage. Minefield is less densely packed relative to smaller mines.",
        icon: MinPPANC,
        stats: [
            {
                statName: 'Call-in Time',
                statAmount: '4,75 s'
            },
            {
                statName: 'Uses',
                statAmount: 'Infinite'
            },
            {
                statName: 'Cooldown',
                statAmount: '120 s'
            }
        ],
        characteristics: ['Hellpod', 'Explosive', 'Anti-Tank']
    },
    {
        name: "LAS-99 Quasar Cannon",
        class: 'Supply Stratagem',
        isSameType: false,
        sameType: '',
        description: "Charges up to fire a powerful, explosive energy burst. Has a long cooldown period after firing.",
        icon: QUASAR,
        stats: [
            {
                statName: 'Call-in Time',
                statAmount: '4,75 s'
            },
            {
                statName: 'Uses',
                statAmount: 'Infinite'
            },
            {
                statName: 'Cooldown',
                statAmount: '480 s'
            }
        ],
        characteristics: ['Support Weapon', 'Hellpod', 'Anti-Tank', 'Chargeup']
    },
    {
        name: "SH-32 Shield Generator Pack",
        class: 'Supply Stratagem',
        isSameType: false,
        sameType: '',
        description: "Encloses the wearer in a spherical shield which blocks high-speed projectiles. Has a limited lifetime once deployed.",
        icon: PlecakSkok,
        stats: [
            {
                statName: 'Call-in Time',
                statAmount: '9,75 s'
            },
            {
                statName: 'Uses',
                statAmount: 'Infinite'
            },
            {
                statName: 'Cooldown',
                statAmount: '480 s'
            }
        ],
        characteristics: ['Hellpod', 'Backpack']
    },
    {
        name: "A/MG-43 Machine Gun Sentry",
        class: 'Defensive Stratagem',
        isSameType: false,
        sameType: '',
        description: "An agile automated machine gun turret. Will fire at targets even if Helldivers will be caught in the crossfire.",
        icon: StrazZKarMasz,
        stats: [
            {
                statName: 'Call-in Time',
                statAmount: '4,75 s'
            },
            {
                statName: 'Uses',
                statAmount: 'Infinite'
            },
            {
                statName: 'Cooldown',
                statAmount: '90 s'
            }
        ],
        characteristics: ['Hellpod', 'Sentry', 'Medium Armor Penetrating']
    },
    {
        name: "A/G-16 Gatling Sentry",
        class: 'Defensive Stratagem',
        isSameType: false,
        sameType: '',
        description: "An automated turret with an extremely high rate of fire. Caution: does not check if friendly units are in line of fire.",
        icon: StrazZDzialGat,
        stats: [
            {
                statName: 'Call-in Time',
                statAmount: '4,75 s'
            },
            {
                statName: 'Uses',
                statAmount: 'Infinite'
            },
            {
                statName: 'Cooldown',
                statAmount: '150 s'
            }
        ],
        characteristics: ['Hellpod', 'Sentry', 'Medium Armor Penetrating']
    },
    {
        name: "A/M-12 Mortar Sentry",
        class: 'Defensive Stratagem',
        isSameType: false,
        sameType: '',
        description: "A turret firing powerful shells in a high arc. Effective at long ranges, and able to strike at targets behind cover.",
        icon: StrazZMozd,
        stats: [
            {
                statName: 'Call-in Time',
                statAmount: '4,75 s'
            },
            {
                statName: 'Uses',
                statAmount: 'Infinite'
            },
            {
                statName: 'Cooldown',
                statAmount: '180 s'
            }
        ],
        characteristics: ['Hellpod', 'Explosive', 'Sentry', 'Medium Armor Penetrating']
    },
    {
        name: "AX/AR-23 Guard Dog",
        class: 'Supply Stratagem',
        isSameType: false,
        sameType: '',
        description: "An autonomous drone equipped with a Liberator assault rifle, providing 360° cover. Returns to backpack to rearm.",
        icon: AR23Azor,
        stats: [
            {
                statName: 'Call-in Time',
                statAmount: '9,75 s'
            },
            {
                statName: 'Uses',
                statAmount: 'Infinite'
            },
            {
                statName: 'Cooldown',
                statAmount: '480 s'
            }
        ],
        characteristics: ['Hellpod', 'Backpack', 'Medium Armor Penetrating']
    },
    {
        name: "A/AC-8 Autocannon Sentry",
        class: 'Defensive Stratagem',
        isSameType: false,
        sameType: '',
        description: "An automated cannon turret firing anti-tank ammunition over long ranges. Sacrifices agility for range and power.",
        icon: StrazZAutDzial,
        stats: [
            {
                statName: 'Call-in Time',
                statAmount: '4,75 s'
            },
            {
                statName: 'Uses',
                statAmount: 'Infinite'
            },
            {
                statName: 'Cooldown',
                statAmount: '150 s'
            }
        ],
        characteristics: ['Hellpod', 'Sentry', 'Anti-Tank']
    },
    {
        name: "A/MLS-4X Rocket Sentry",
        class: 'Defensive Stratagem',
        isSameType: false,
        sameType: '',
        description: "A powerfully automated turret, effective against armored targets. The turret will primarily aim at larger enemies.",
        icon: StrazZWyrzRak,
        stats: [
            {
                statName: 'Call-in Time',
                statAmount: '4,75 s'
            },
            {
                statName: 'Uses',
                statAmount: 'Infinite'
            },
            {
                statName: 'Cooldown',
                statAmount: '150 s'
            }
        ],
        characteristics: ['Hellpod', 'Explosive', 'Sentry', 'Anti-Tank']
    },
    {
        name: "A/M-23 EMS Mortar Sentry",
        class: 'Defensive Stratagem',
        isSameType: false,
        sameType: '',
        description: "A turret firing static field generators that slow the advance of enemies.",
        icon: MozEMS,
        stats: [
            {
                statName: 'Call-in Time',
                statAmount: '4,75 s'
            },
            {
                statName: 'Uses',
                statAmount: 'Infinite'
            },
            {
                statName: 'Cooldown',
                statAmount: '180 s'
            }
        ],
        characteristics: ['Hellpod', 'Explosive', 'Sentry']
    },
    {
        name: "EXO-45 Patriot Exosuit",
        class: 'Supply Stratagem',
        isSameType: true,
        sameType: 'egzo',
        description: "A heavily-armored walking exosuit equipped with a rocket launcher and heavy machine gun.",
        icon: EgzoPatriot,
        stats: [
            {
                statName: 'Call-in Time',
                statAmount: '10,50 s'
            },
            {
                statName: 'Uses',
                statAmount: '2'
            },
            {
                statName: 'Cooldown',
                statAmount: '600 s'
            }
        ],
        characteristics: ['Explosive', 'Vehicle', 'Anti-Tank', 'Medium Armor Penetrating']
    },
    {
        name: "EXO-49 Emancipator Exosuit",
        class: 'Supply Stratagem',
        isSameType: true,
        sameType: 'egzo',
        description: "A heavily armored walking exosuit equipped with dual autocannons.",
        icon: EgzoOswb,
        stats: [
            {
                statName: 'Call-in Time',
                statAmount: '10,50 s'
            },
            {
                statName: 'Uses',
                statAmount: '2'
            },
            {
                statName: 'Cooldown',
                statAmount: '600 s'
            }
        ],
        characteristics: ['Explosive', 'Vehicle', 'Anti-Tank']
    },
    {
        name: "TX-41 Sterilizer",
        class: 'Supply Stratagem',
        isSameType: false,
        sameType: '',
        description: "Atomizes caustic chemicals into a fine mist that liquifies sensitive electronics and tissues. Blinds and slows most enemies.",
        icon: Sterylizator,
        stats: [
            {
                statName: 'Call-in Time',
                statAmount: '4,75 s'
            },
            {
                statName: 'Uses',
                statAmount: 'Infinite'
            },
            {
                statName: 'Cooldown',
                statAmount: '480 s'
            }
        ],
        characteristics: ['Hellpod', 'Support Weapon', 'Caustic']
    },
    {
        name: "AX/TX-13 Dog Breath",
        class: 'Supply Stratagem',
        isSameType: false,
        sameType: '',
        description: "A drone that defends its user by firing caustic gas at nearby enemies, blinding them and slowing them temporarily. Returns to backpack to refill.",
        icon: TX13OddechAzora,
        stats: [
            {
                statName: 'Call-in Time',
                statAmount: '9,75 s'
            },
            {
                statName: 'Uses',
                statAmount: 'Infinite'
            },
            {
                statName: 'Cooldown',
                statAmount: '480 s'
            }
        ],
        characteristics: ['Hellpod', 'Backpack', 'Caustic']
    },
    {
        name: "SH-51 Directional Shield",
        class: 'Supply Stratagem',
        isSameType: false,
        sameType: '',
        description: "A one-handed device that deploys a wide energy barrier in front of the user. The barrier is semipermeable and blocks high-speed projectiles from the outside only, leaving the user free to shoot through it.",
        icon: TarczKier,
        stats: [
            {
                statName: 'Call-in Time',
                statAmount: '9,75 s'
            },
            {
                statName: 'Uses',
                statAmount: 'Infinite'
            },
            {
                statName: 'Cooldown',
                statAmount: '300 s'
            }
        ],
        characteristics: ['Hellpod', 'Backpack']
    },
    {
        name: "A/FLAM-40 Flame Sentry",
        class: 'Defensive Stratagem',
        isSameType: false,
        sameType: '',
        description: "An automated flamethrower turret. Warning: fuel canister prone to explosion when ruptured.",
        icon: Flam40OgnStraz,
        stats: [
            {
                statName: 'Call-in Time',
                statAmount: '4,75 s'
            },
            {
                statName: 'Uses',
                statAmount: 'Infinite'
            },
            {
                statName: 'Cooldown',
                statAmount: '150 s'
            }
        ],
        characteristics: ['Hellpod', 'Incendiary', 'Sentry']
    },
    {
        name: "E/AT-12 Anti-Tank Emplacement",
        class: 'Defensive Stratagem',
        isSameType: false,
        sameType: '',
        description: "A powerful manned gun emplacement, capable of taking out armoured targets at long ranges.",
        icon: GniazPPANC,
        stats: [
            {
                statName: 'Call-in Time',
                statAmount: '4,75 s'
            },
            {
                statName: 'Uses',
                statAmount: 'Infinite'
            },
            {
                statName: 'Cooldown',
                statAmount: '180 s'
            }
        ],
        characteristics: ['Hellpod', 'Heavy Armor Penetrating']
    },
    {
        name: "B-100 Portable Hellbomb",
        class: 'Supply Stratagem',
        isSameType: false,
        sameType: '',
        description: "A backpack-mounted Hellbomb that can be armed by the wearer or an ally, starting a countdown. Users are recommended to remove the backpack before the countdown reaches zero.",
        icon: B100PrzenHellb,
        stats: [
            {
                statName: 'Call-in Time',
                statAmount: '9,75 s'
            },
            {
                statName: 'Uses',
                statAmount: 'Infinite'
            },
            {
                statName: 'Cooldown',
                statAmount: '300 s'
            }
        ],
        characteristics: ['Hellpod', 'Explosive', 'Backpack', 'Anti-Tank']
    },
]
