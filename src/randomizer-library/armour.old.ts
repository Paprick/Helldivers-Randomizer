import { ArmourTypes } from "../types/armour-types";
import lekki from '../assets/icons/armour/lekki.png'
import sredni from '../assets/icons/armour/sredni.png'
import ciezki from '../assets/icons/armour/ciezki.png'

export const armour: Record<string, ArmourTypes> = {
    lekkaZbroja: {
        class: 'Lekka Zbroja',
        icon: lekki,
    },
    sredniaZbroja: {
        class: 'Średnia Zbroja',
        icon: sredni,
    },
    ciezkaZbroja: {
        class: 'Ciężka Zbroja',
        icon: ciezki,
    }
}