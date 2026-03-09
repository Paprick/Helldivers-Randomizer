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
        name: "Zwiadowca",
        description: "Znaczniki umieszczane na mapie będą przeprowadzały skany radarowe co '2,0s'. O '30%' smniejsza zasięg, na którym wrogowie mogą wykryć użytkownika.",
        icon: Zwiad,
        armourClasses: [lekkaZbroja, sredniaZbroja]
    },
    {
        name: "Apteczka",
        description: "Zwiększa pojemność początkową ekwipunku i stymulantów o '+2'. Zwiększa czas działania stymulantów o '2,0s'.",
        icon: Apteczka,
        armourClasses: [lekkaZbroja, sredniaZbroja]
    },
    {
        name: "Zestaw Inżynieryjny",
        description: "Dodatkowo zmniejsza odrzut po przykucnięciu lub padnięciu o '30%'. O '+2' zwiększa początkową ilość broni rzucanej w ekwipunku i prrzenoszonej.",
        icon: ZestInzynier,
        armourClasses: [lekkaZbroja, sredniaZbroja]
    },
    {
        name: "Wzmocnienie",
        description: "Dodatkowo zmniejsza odrzut po przykucnięciu lub padnięciu o '30%'. Zapewnia '50%' odporność na obrażenia od wybuchów.",
        icon: Wzmoc,
        armourClasses: [lekkaZbroja, ciezkaZbroja]
    },
    {
        name: "Przewodnictwo Elektryczne",
        description: "Zapewnia '95%' odporność na obrażenia od wyładowań elektrycznych.",
        icon: PrzewElekt,
        armourClasses: [lekkaZbroja, sredniaZbroja]
    },
    {
        name: "Asysta Mechaniczna",
        description: "Zwiększa zasięg rzutu o '30%'. Zapewnia '+50%' zdrowia kończyn.",
        icon: AsysMech,
        armourClasses: [lekkaZbroja, sredniaZbroja, ciezkaZbroja]
    },
    {
        name: "Dodatkowa Wyściółka",
        description: "Zapewnia 'wyższy współczynnik pancerza'.",
        icon: DodWysc,
        armourClasses: [lekkaZbroja, sredniaZbroja]
    },
    {
        name: "Zaawansowana Filtracja",
        description: "Zapewnia '80%' odporności na obrażenia gazowe i efekty gazu.",
        icon: ZaawFiltr,
        armourClasses: [lekkaZbroja, sredniaZbroja]
    },
    {
        name: "Niewzruszony",
        description: "Pomaga zapobiegać 'wzdrygnięciu' się helldiversa po trafieniu go.",
        icon: Niewzr,
        armourClasses: [lekkaZbroja, sredniaZbroja]
    },
    {
        name: "Oblężniczy",
        description: "Zwiększa szybkość przeładowania broni podstawowej o '30%'. Zwiększa pojemność amunicji broni podstawowej o '20%'.",
        icon: Oblez,
        armourClasses: [lekkaZbroja, ciezkaZbroja]
    },
    {
        name: "Szczyt Fizyczności",
        description: "Zwiększa obrażenia w walce wręcz o '100%'. Poprawia 'zręczność' w posługiwaniu się bronią i zmniejsza 'opór' podczas jej przenoszenia.",
        icon: SzczytFiz,
        armourClasses: [lekkaZbroja, ciezkaZbroja]
    },
    {
        name: "Niepalne",
        description: "Zapewnia odporność na ogien '75%' dzięki czemu noszący może być pewny swojej niepalności.",
        icon: Niepal,
        armourClasses: [lekkaZbroja, sredniaZbroja]
    },
    {
        name: "Przystosowany",
        description: "Zapewnia '50%' odporności na obrażenia od ognia, gazu, kwasu i elektryczności.",
        icon: Przyst,
        armourClasses: [lekkaZbroja]
    },
    {
        name: "Demokracja Chroni",
        description: "'50%' szansy na przeżycie zabójczych obrażeń. Zapobiega wszelkim obrażeniom od krwawienia w przypadku przebicia torsu.",
        icon: DemokChron,
        armourClasses: [sredniaZbroja]
    },
    {
        name: "Wbudowane Ładunki Wybuchowe",
        description: "Pancerz wybucha po '1,5 s' od śmierci noszącego.",
        icon: WbudLadWyb,
        armourClasses: [sredniaZbroja, lekkaZbroja]
    },
]