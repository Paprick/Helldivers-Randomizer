import { ArmPerksTypes } from "../types/arm-perks-types";
import { armour } from "./armour";

import Apteczka from '../assets/icons/arm-perks/Apteczka.jpg'
import AsysMech from '../assets/icons/arm-perks/AsysMech.jpg'
import DemokChron from '../assets/icons/arm-perks/DemokChron.jpg'
import DodWysc from '../assets/icons/arm-perks/DodWysc.jpg'
import Niepal from '../assets/icons/arm-perks/Niepal.jpg'
import Niewzr from '../assets/icons/arm-perks/Niewzr.jpg'
import Oblez from '../assets/icons/arm-perks/oblez.jpg'
import PrzewElekt from '../assets/icons/arm-perks/PrzewElekt.jpg'
import Przyst from '../assets/icons/arm-perks/Przyst.jpg'
import SzczytFiz from '../assets/icons/arm-perks/SzczytFiz.jpg'
import Wzmoc from '../assets/icons/arm-perks/Wzmoc.jpg'
import ZaawFiltr from '../assets/icons/arm-perks/ZaawFilt.jpg'
import ZestInzynier from '../assets/icons/arm-perks/ZestInzynier.jpg'
import Zwiad from '../assets/icons/arm-perks/Zwiad.jpg'
import WbudLadWyb from '../assets/icons/arm-perks/WbudLadWybuch.jpg'

const {
    lekkaZbroja,
    sredniaZbroja,
    ciezkaZbroja
} = armour

//Lekki typ ma tylko: Przyst, Niepal, SzczytFiz, Oblez, Niewzr, ZaawFiltr, Zwiad, DodWysc, AsystMecha, PrzewElekt, Wzmoc, ZesInzynier, apteczka
//Sredni typ ma tylko: ZaawFiltr, Niewzr, Niepal, Zwiad, DodWysc, Apt, DemokChr, PrzewElekt, ZesInzynier, AsystMecha
//Ciezki typ ma tylko: AsystMecha, Oblez, SzczytFiz, Wzmoc

export const armPerks: ArmPerksTypes[] = [
    {
        name: "Scout",
        description: "Markers placed on the map will generate radar scans every '2,0s'. Reduces range at which enemies can detect the wearer by '30%'",
        icon: Zwiad,
        armourClasses: [lekkaZbroja, sredniaZbroja]
    },
    {
        name: "Med-Kit",
        description: "Increases initial inventory and holding capacity of stims by '+2'. Increases stim effect duration by '2,0s'.",
        icon: Apteczka,
        armourClasses: [lekkaZbroja, sredniaZbroja]
    },
    {
        name: "Engineering Kit",
        description: "Further reduces recoil when crouching or prone by '30%'. Increases initial inventory and holding capacity of throwables by '+2'",
        icon: ZestInzynier,
        armourClasses: [lekkaZbroja, sredniaZbroja]
    },
    {
        name: "Fortified",
        description: "Further reduces recoil when crouching or prone by '30%'. Provides '50%' resistance to explosive damage.",
        icon: Wzmoc,
        armourClasses: [lekkaZbroja, ciezkaZbroja]
    },
    {
        name: "Electrical Conduit",
        description: "Provides '95%' resistance to arc damage.",
        icon: PrzewElekt,
        armourClasses: [lekkaZbroja, sredniaZbroja]
    },
    {
        name: "Servo-Assisted",
        description: "Increases throwing range by '30%'. Provides '+50%' limb health.",
        icon: AsysMech,
        armourClasses: [lekkaZbroja, sredniaZbroja, ciezkaZbroja]
    },
    {
        name: "Extra Padding",
        description: "Provides a 'higher armor rating'.",
        icon: DodWysc,
        armourClasses: [lekkaZbroja, sredniaZbroja]
    },
    {
        name: "Advanced Filtration",
        description: "Provides '80%' resistance to gas damage and effects.",
        icon: ZaawFiltr,
        armourClasses: [lekkaZbroja, sredniaZbroja]
    },
    {
        name: "Unflinching",
        description: "Helps prevent Helldivers from 'flinching' when hit; Provides a 'higher armor rating'; Markers placed on the map will generate radar scans every '2,0s'.",
        icon: Niewzr,
        armourClasses: [lekkaZbroja, sredniaZbroja]
    },
    {
        name: "Siege-Ready",
        description: "Increases reload speed of primary weapons by '30%'. Increases ammo capacity of all weapons by'20%'. Does not affect weapon backpacks.",
        icon: Oblez,
        armourClasses: [lekkaZbroja, ciezkaZbroja]
    },
    {
        name: "Peak Physique",
        description: "Increases melee damage by '40%'. Improves 'weapons handling' with less drag on weapon movement.",
        icon: SzczytFiz,
        armourClasses: [lekkaZbroja, ciezkaZbroja]
    },
    {
        name: "Inflammable",
        description: "Provides '75%' damage resistance to fire, allowing bearer to rest assured in their inflammability.",
        icon: Niepal,
        armourClasses: [lekkaZbroja, sredniaZbroja]
    },
    {
        name: "Acclimated",
        description: "Provides '50%' resistance to fire, gas, acid, and electrical damage",
        icon: Przyst,
        armourClasses: [lekkaZbroja]
    },
    {
        name: "Democracy Protects",
        description: "'50%' chance to not die when taking lethal damage; Prevents 'all damage from bleeding' if chest hemorrhages.",
        icon: DemokChron,
        armourClasses: [sredniaZbroja]
    },
    {
        name: "Integrated Explosives",
        description: "Armor explodes '1,5 s' after the wearer dies; Increases initial inventory and holding capacity of throwables by +2.",
        icon: WbudLadWyb,
        armourClasses: [sredniaZbroja, lekkaZbroja]
    },
]