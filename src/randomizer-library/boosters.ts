import { BoosterTypes } from "../types/booster-types";

import EkspOdbio from '../assets/icons/boosters/EkspOdbio.png'
import EkspZastrz from '../assets/icons/boosters/EkspZastrz.png'
import ElasBudNaUzu from '../assets/icons/boosters/ElasBudNaUzu.png'
import HelipodZOgnio from '../assets/icons/boosters/HelipodZOgnio.png'
import MartSprint from '../assets/icons/boosters/MartwSprint.png'
import MaskPolo from '../assets/icons/boosters/MaskPolo.png'
import OptyPrzestrzHeli from '../assets/icons/boosters/OptyPrzestHeli.png'
import PremZwiadDron from '../assets/icons/boosters/PremZwiadDron.png'
import UzbPodZaopatrz from '../assets/icons/boosters/UzbPodZaopatrz.png'
import Wital from '../assets/icons/boosters/Wital.png'
import WstrzMot from '../assets/icons/boosters/WstrzMot.png'
import WzmKon from '../assets/icons/boosters/WzmKon.png'
import WzmMies from '../assets/icons/boosters/WzmMies.png'
import ZwiekBudNaUzu from '../assets/icons/boosters/ZwiekBudNaUzu.png'

export const boosters: BoosterTypes[] = [
    {
        name: "Vitality Enhancement",
        description: "Provides minor damage reduction from all sources for all Helldivers.",
        icon: Wital,
    },
    {
        name: "Stamina Enhancement",
        description: "Increases all Helldivers' stamina capacity and recovery.",
        icon: WzmKon,
    },
    {
        name: "Muscle Enhancement",
        description: "Allows Helldivers to traverse difficult terrain with ease.",
        icon: WzmMies,
    },
    {
        name: "UAV Recon Booster",
        description: "Increases all Helldivers' effective radar range.",
        icon: PremZwiadDron,
    },
    {
        name: "Increased Reinforcement Budget",
        description: "Increases the number of available reinforcements.",
        icon: ZwiekBudNaUzu,
    },
    {
        name: "Flexible Reinforcement Budget",
        description: "Reduces time until new reinforcements are granted once they've been depleted.",
        icon: ElasBudNaUzu,
    },
    {
        name: "Hellpod Space Optimization",
        description: "Helldivers come out of the Hellpod fully stocked on Ammo, Grenades and Stims.",
        icon: OptyPrzestrzHeli,
    },
    {
        name: "Localization Confusion",
        description: "Increases the time between enemy encounters.",
        icon: MaskPolo,
    },
    {
        name: "Expert Extraction Pilot",
        description: "Lowers the time it takes for the extraction shuttle to reach the extraction beacon.",
        icon: EkspOdbio,
    },
    {
        name: "Motivational Shocks",
        description: "Allows all Helldivers to recover faster after being slowed by an attack, such as acid. Does not mitigate “area effects,” such as EMS strikes.",
        icon: WstrzMot,
    },
    {
        name: "Experimental Infusion",
        description: "In addition to restoring health, Stims temporarily increase movement speed and damage reduction.",
        icon: EkspZastrz,
    },
    {
        name: "Firebomb Hellpods",
        description: "Lines all Hellpods with volatile incendiaries that detonate upon impact, igniting any units in vicinity of the drop site.",
        icon: HelipodZOgnio,
    },
    {
        name: "Dead Sprint",
        description: "Allows Helldivers to keep sprinting even when they are out of stamina, draining their health instead.",
        icon: MartSprint,
    },
    {
        name: "Armed Resupply Pods",
        description: "Mounts a modified AR-23 Liberator to all resupply pods, allowing them to double as automatic turrets. ",
        icon: UzbPodZaopatrz,
    }
]