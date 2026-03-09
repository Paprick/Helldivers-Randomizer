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
        name: "Wzmocnienie Witalności",
        description: "Nieznacznie zmniejsza obrażenia ze wszystkich źródeł dla wszystkich helldiversów.",
        icon: Wital,
    },
    {
        name: "Wzmocnienie Kondycji",
        description: "Zwiększa kondycję i szybkość jej regeneracji przez helldiversów.",
        icon: WzmKon,
    },
    {
        name: "Wzmocnienie Mięśni",
        description: "Pozwala helldiversom poruszać się z łatwością w trudnym terenie.",
        icon: WzmMies,
    },
    {
        name: "Premia Zwiadowcza Drona",
        description: "Ziększa efektywny zasięg radaru wszystkich helldiversów.",
        icon: PremZwiadDron,
    },
    {
        name: "Zwiekszony Bużet Na Uzupełnienia",
        description: "Zwiększa liczbę dostępnych uzupełnień.",
        icon: ZwiekBudNaUzu,
    },
    {
        name: "Elastyczny Budżet Na Uzupełnienia",
        description: "Skraca czas przyzwania nowych uzupełnień po ich wykorzystaniu.",
        icon: ElasBudNaUzu,
    },
    {
        name: "Optymalizacja Przestrzeni Helipoda",
        description: "Helldiversi opuszczają hellpod w pełni wyposażenie w amunicję, granaty i stymulanty.",
        icon: OptyPrzestrzHeli,
    },
    {
        name: "Maskowanie Położenia",
        description: "Wydłuża czas pomiędzy starciami z wrogiem.",
        icon: MaskPolo,
    },
    {
        name: "Pilot Ekspert Odbioru",
        description: "Skraca czas potrzebny wahadłowcowi na dotarcie do nadajnika odbioru.",
        icon: EkspOdbio,
    },
    {
        name: "Wstrząsy Motywacyjne",
        description: "Pozwala wszystkim helldiversom odzyskać siły szybciej po swpowolnieniu przez atak, np. kwasem. Nie wpływa na efekty obszarowe, takie jak uderzenia EMS.",
        icon: WstrzMot,
    },
    {
        name: "Eksperymentalny Zastrzyk",
        description: "Oprócz przywrócenia zdrowia, stymulanty tymczasowo zwiększają szybkość poruszania się i zmniejszają obrażenia.",
        icon: EkspZastrz,
    },
    {
        name: "Helipody Z Ogniobombą",
        description: "Wyposaża wszystkie hellpody w niestabilne ładunki wybuchowe, które detonują się po kontakcie z ziemią i zapalają wszystkie jednostki w pobliżu strefy zrzutu.",
        icon: HelipodZOgnio,
    },
    {
        name: "Martwy Sprint",
        description: "Pozwala helldiversom dalej biec sprintem, nawet gdy skończy im się kondycja. Zamiast kondycji zużywają wtedy zdrowie.",
        icon: MartSprint,
    },
    {
        name: "Uzbrojone Pody Zaopatrzeniowe",
        description: "Montuje AR-23 Wyzwalacz na wszystkich podach zaopatrzeniowych, dzięki czemu stają się one jednocześnie automatycznymi wieżyczkami.",
        icon: UzbPodZaopatrz,
    }
]