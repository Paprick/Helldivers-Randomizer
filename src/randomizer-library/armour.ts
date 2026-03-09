import { ArmourTypes } from "../types/armour-types";
import lekki from '../assets/icons/armour/lekki.png'
import sredni from '../assets/icons/armour/sredni.png'
import ciezki from '../assets/icons/armour/ciezki.png'

export const armour: Record<string, ArmourTypes> = {
    lekkaZbroja: {
        class: 'Lekka Zbroja',
        className: 'Light Armour',
        icon: lekki,
    },
    sredniaZbroja: {
        class: 'Średnia Zbroja',
        className: 'Medium Armour',
        icon: sredni,
    },
    ciezkaZbroja: {
        class: 'Ciężka Zbroja',
        className: 'Heavy Armour',
        icon: ciezki,
    }
}