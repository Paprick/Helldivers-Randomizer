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
        name: "MG-43 Karabin Maszynowy",
        class: 'Manewr Zaopatrzenia',
        isSameType: false,
        sameType: '',
        description: "Karabin maszynowy przeznaczony do użytku stacjonarnego. Większa moc, większy odrzut i mniejsza celność.",
        icon: MG43KarMasz,
        stats: [
            {
                statName: 'Czas Wezwania',
                statAmount: '4,75 sek'
            },
            {
                statName: 'Użycia',
                statAmount: 'Bez Ograniczeń'
            },
            {
                statName: 'Czas Regeneracji',
                statAmount: '480 sek'
            }
        ],
        characteristics: ['Broń Wsparcia', 'Hellpod', 'Penetrująca Średni Pancerz', 'Stacjonarne Przeładowanie']
    },
    {
        name: "APW-1 Wielokalibrowy Karabin Wyborowy",
        class: 'Manewr Zaopatrzenia',
        isSameType: false,
        sameType: '',
        description: "Karabin snajperski dużego kalibru skuteczny na duże odległości przeciwko lekkim pojazdom opancerzonym. Trzeba z niego celować przez lunetę.",
        icon: APW1KarWyb,
        stats: [
            {
                statName: 'Czas Wezwania',
                statAmount: '4,75 sek'
            },
            {
                statName: 'Użycia',
                statAmount: 'Bez Ograniczeń'
            },
            {
                statName: 'Czas Regeneracji',
                statAmount: '480 sek'
            }
        ],
        characteristics: ['Broń Wsparcia', 'Hellpod', 'Penetrująca Ciężki Pancerz']
    },
    {
        name: "M-105 Sojusznik",
        class: 'Manewr Zaopatrzenia',
        isSameType: false,
        sameType: '',
        description: "Niewielki karabin maszynowy małego kalibru. Mniejsza moc, ale większa uniwersalność i krótszy czas przeładowania niż w przypadku cięższych karabinów maszynowych.",
        icon: M105Sojusz,
        stats: [
            {
                statName: 'Czas Wezwania',
                statAmount: '4,75 sek'
            },
            {
                statName: 'Użycia',
                statAmount: 'Bez Ograniczeń'
            },
            {
                statName: 'Czas Regeneracji',
                statAmount: '480 sek'
            }
        ],
        characteristics: ['Broń Wsparcia', 'Hellpod', 'Penetrująca Lekki Pancerz']
    },
    {
        name: "EAT-17 Jednorazowy PPANC",
        class: 'Manewr Zaopatrzenia',
        isSameType: false,
        sameType: '',
        description: "Jednorazowa broń przeznaczona do niszczenia opancerzenia pojazdów. Wyrzucana po każdym użyciu.",
        icon: EAT,
        stats: [
            {
                statName: 'Czas Wezwania',
                statAmount: '4,75 sek'
            },
            {
                statName: 'Użycia',
                statAmount: 'Bez Ograniczeń'
            },
            {
                statName: 'Czas Regeneracji',
                statAmount: '70 sek'
            }
        ],
        characteristics: ['Broń Wsparcia', 'Hellpod', 'PPANC', 'Jednorazowa']
    },
    {
        name: "GR-8 Karabin Bezodrzutowy",
        class: 'Manewr Zaopatrzenia',
        isSameType: false,
        sameType: '',
        description: "KArabin bezodrzutowy skuteczny w walce z opancerzonymi pojazdami. Zawiera plecak wsparcia wymagany do przeładowania.",
        icon: KarBezOdrz,
        stats: [
            {
                statName: 'Czas Wezwania',
                statAmount: '4,75 sek'
            },
            {
                statName: 'Użycia',
                statAmount: 'Bez Ograniczeń'
            },
            {
                statName: 'Czas Regeneracji',
                statAmount: '480 sek'
            }
        ],
        characteristics: ['Broń Wsparcia', 'Hellpod', 'Plecak', 'PPANC', 'Stacjonarne Przeładowanie']
    },
    {
        name: "FLAM-40 Miotacz Płomieni",
        class: 'Manewr Zaopatrzenia',
        isSameType: false,
        sameType: '',
        description: "Broń zapalająca krótkiego zasięgu; podpala cele, teren i łatwopalnych członków własnego oddziału.",
        icon: MiotaczPlo,
        stats: [
            {
                statName: 'Czas Wezwania',
                statAmount: '4,75 sek'
            },
            {
                statName: 'Użycia',
                statAmount: 'Bez Ograniczeń'
            },
            {
                statName: 'Czas Regeneracji',
                statAmount: '480 sek'
            }
        ],
        characteristics: ['Broń Wsparcia', 'Hellpod', 'Zapalająca']
    },
    {
        name: "AC-8 Automatyczne Działko",
        class: 'Manewr Zaopatrzenia',
        isSameType: false,
        sameType: '',
        description: "W pełni automatyczne działko skuteczne w walce z lekko opancerzonymi pojazdami. Zawiera plecak wsparcia wymagany do przeładowania.",
        icon: ac8AutoDzi,
        stats: [
            {
                statName: 'Czas Wezwania',
                statAmount: '4,75 sek'
            },
            {
                statName: 'Użycia',
                statAmount: 'Bez Ograniczeń'
            },
            {
                statName: 'Czas Regeneracji',
                statAmount: '480 sek'
            }
        ],
        characteristics: ['Broń Wsparcia', 'Hellpod', 'Plecak', 'Penetrująca Ciężki Pancerz', 'Stacjonarne Przeładowanie']
    },
    {
        name: "MG-206 Ciężki Karabin Maszynowy",
        class: 'Manewr Zaopatrzenia',
        isSameType: false,
        sameType: '',
        description: "Potężny, ale ciężki do taszczenia karabin maszynowy o ogromnym odrzucie.",
        icon: MG206Ciez,
        stats: [
            {
                statName: 'Czas Wezwania',
                statAmount: '4,75 sek'
            },
            {
                statName: 'Użycia',
                statAmount: 'Bez Ograniczeń'
            },
            {
                statName: 'Czas Regeneracji',
                statAmount: '480 sek'
            }
        ],
        characteristics: ['Broń Wsparcia', 'Hellpod', 'Penetrująca Ciężki Pancerz', 'Stacjonarne Przeładowanie']
    },
    {
        name: "RL-77 Kasetowa Wyrzutnia Rakietowa",
        class: 'Manewr Zaopatrzenia',
        isSameType: false,
        sameType: '',
        description: "Wystrzeliwuje rakietę, która wybucha w sąsiedztwie celu i uwalnia kasetę minibomb.",
        icon: RL77WyrzRak,
        stats: [
            {
                statName: 'Czas Wezwania',
                statAmount: '4,75 sek'
            },
            {
                statName: 'Użycia',
                statAmount: 'Bez Ograniczeń'
            },
            {
                statName: 'Czas Regeneracji',
                statAmount: '480 sek'
            }
        ],
        characteristics: ['Broń Wsparcia', 'Hellpod', 'Plecak', 'Penetrująca Średni Pancerz', 'Stacjonarne Przeładowanie']
    },
    {
        name: "MLS-4X Komandos",
        class: 'Manewr Zaopatrzenia',
        isSameType: false,
        sameType: '',
        description: "Jednorazowa wyrzutnia rakier wyposażona w cztery pociski naprowadzane laserowo.",
        icon: MLS4XKomand,
        stats: [
            {
                statName: 'Czas Wezwania',
                statAmount: '4,75 sek'
            },
            {
                statName: 'Użycia',
                statAmount: 'Bez Ograniczeń'
            },
            {
                statName: 'Czas Regeneracji',
                statAmount: '120 sek'
            }
        ],
        characteristics: ['Broń Wsparcia', 'Hellpod', 'PPANC', 'Jednorazowa']
    },
    {
        name: "RS-422 Działko Elektromagnetyczne",
        class: 'Manewr Zaopatrzenia',
        isSameType: false,
        sameType: '',
        description: "Eksperymentalna broń, której priorytetem jest penetracja pancerza. Musi być ładowana między strzałami, więc odpowiednio dobieraj cele.",
        icon: DzialElektrMag,
        stats: [
            {
                statName: 'Czas Wezwania',
                statAmount: '4,75 sek'
            },
            {
                statName: 'Użycia',
                statAmount: 'Bez Ograniczeń'
            },
            {
                statName: 'Czas Regeneracji',
                statAmount: '480 sek'
            }
        ],
        characteristics: ['Broń Wsparcia', 'Hellpod', 'PPANC', 'Ładowana']
    },
    {
        name: "FAF-14 Włócznia",
        class: 'Manewr Zaopatrzenia',
        isSameType: false,
        sameType: '',
        description: "Samonaprowadzający pocisk przeciwpancerny, który przed wystrzeleniem musi namierzyć cel. Skuteczny przeciwko dużym i opancerzonym wrogom.",
        icon: Wlocznia,
        stats: [
            {
                statName: 'Czas Wezwania',
                statAmount: '4,75 sek'
            },
            {
                statName: 'Użycia',
                statAmount: 'Bez Ograniczeń'
            },
            {
                statName: 'Czas Regeneracji',
                statAmount: '480 sek'
            }
        ],
        characteristics: ['Broń Wsparcia', 'Hellpod', 'Plecak', 'PPANC', 'Stacjonarne Przeładowanie']
    },
    {
        name: "Wyrzutnia O.S.A StA-X3",
        class: 'Manewr Zaopatrzenia',
        isSameType: false,
        sameType: '',
        description: "Uniwersalna wyrzutnia z siedmioma naprowadzającymi się rakietami. Można je wystrzelić bezpośrednio z wyrzutni lub zdetonować w powietrzu. Zawiera plecak wsparcia wymagany do przeładowania. Wyprodukowana przez Stal Arms.",
        icon: OSA,
        stats: [
            {
                statName: 'Czas Wezwania',
                statAmount: '4,75 sek'
            },
            {
                statName: 'Użycia',
                statAmount: 'Bez Ograniczeń'
            },
            {
                statName: 'Czas Regeneracji',
                statAmount: '480 sek'
            }
        ],
        characteristics: ['Broń Wsparcia', 'Hellpod', 'Plecak', 'PPANC', 'Stacjonarne Przeładowanie']
    },
    {
        name: "Orbitalna Salwa Z Gatlinga",
        class: 'Manewr Ofensywny',
        isSameType: false,
        sameType: '',
        description: "Grad pocisków odłamkowo-burzących wystrzeliwanych z szybkich obrotowych działek automatycznych niszczyciela.",
        icon: SalwZGat,
        stats: [
            {
                statName: 'Czas Wezwania',
                statAmount: '2,05 sek'
            },
            {
                statName: 'Użycia',
                statAmount: 'Bez Ograniczeń'
            },
            {
                statName: 'Czas Regeneracji',
                statAmount: '70 sek'
            }
        ],
        characteristics: ['Wybuchowy', 'Orbitalna', 'Penetrująca Ciężki Pancerz']
    },
    {
        name: "Orbitalny Atak Powietrzny",
        class: 'Manewr Ofensywny',
        isSameType: false,
        sameType: '',
        description: "Pocisk, który eksploduje w powietrzu, tworząc śmiercionośny deszcz odłamków. Nieskuteczny przeciwko ciężkiemu pancerzowi.",
        icon: OrbAtkPow,
        stats: [
            {
                statName: 'Czas Wezwania',
                statAmount: '3,45 sek'
            },
            {
                statName: 'Użycia',
                statAmount: 'Bez Ograniczeń'
            },
            {
                statName: 'Czas Regeneracji',
                statAmount: '100 sek'
            }
        ],
        characteristics: ['Wybuchowy', 'Orbitalna', 'Penetrująca Średni Pancerz']
    },
    {
        name: "Orbitalna Atak Pociskami Odłamkowo-Burzącymi 120mm",
        class: 'Manewr Ofensywny',
        isSameType: false,
        sameType: '',
        description: "Precyzyjna salwa artyleryjska na niewielkim obszarze, idealnie do eliminowania skoncentrowanych jednostek wroga.",
        icon: OrbAtk120mm,
        stats: [
            {
                statName: 'Czas Wezwania',
                statAmount: '6,45 sek'
            },
            {
                statName: 'Użycia',
                statAmount: 'Bez Ograniczeń'
            },
            {
                statName: 'Czas Regeneracji',
                statAmount: '180 sek'
            }
        ],
        characteristics: ['Wybuchowy', 'Orbitalna', 'PPANC']
    },
    {
        name: "Orbitalna Salwa Pociskami Odłamkowo-Burzącymi 380MM",
        class: 'Manewr Ofensywny',
        isSameType: false,
        sameType: '',
        description: "Długotrwały ostrzał, siejący rozległe zniszczenia na dużym obszarze. Zalecana jest komunikacja z towarzyszami z oddziału.",
        icon: OrbSalw380mm,
        stats: [
            {
                statName: 'Czas Wezwania',
                statAmount: '7,45 sek'
            },
            {
                statName: 'Użycia',
                statAmount: 'Bez Ograniczeń'
            },
            {
                statName: 'Czas Regeneracji',
                statAmount: '240 sek'
            }
        ],
        characteristics: ['Wybuchowy', 'Orbitalna', 'PPANC']
    },
    {
        name: "Orbitalna Salwa Postępująca",
        class: 'Manewr Ofensywny',
        isSameType: false,
        sameType: '',
        description: "Liniowy ostrzał artyleryjski, który porusza się w odstępach czasu, wyciągając wroga z ukrycia i umożliwiając natarcie.",
        icon: OrbSalwPost,
        stats: [
            {
                statName: 'Czas Wezwania',
                statAmount: '4,45sek'
            },
            {
                statName: 'Użycia',
                statAmount: 'Bez Ograniczeń'
            },
            {
                statName: 'Czas Regeneracji',
                statAmount: '240 sek'
            }
        ],
        characteristics: ['Wybuchowy', 'Orbitalna', 'PPANC']
    },
    {
        name: "Orbitalny Laser",
        class: 'Manewr Ofensywny',
        isSameType: false,
        sameType: '',
        description: "Działo laserowe niszczyciela omiata wyznaczony obszar, odparowując wszelkie cele w promieniu działania.",
        icon: OrbLas,
        stats: [
            {
                statName: 'Czas Wezwania',
                statAmount: '1 sek'
            },
            {
                statName: 'Użycia',
                statAmount: '3'
            },
            {
                statName: 'Czas Regeneracji',
                statAmount: '300 sek'
            }
        ],
        characteristics: ['Promień', 'Orbitalna', 'PPANC']
    },
    {
        name: "Orbitalny Zrzut Napalmu",
        class: 'Manewr Ofensywny',
        isSameType: false,
        sameType: '',
        description: "Dokonuje ciągłego zrzutu pojemników z napalmem na dużym obszarze, zapalając go w ciagu kilku chwil.",
        icon: OrbZrzNap,
        stats: [
            {
                statName: 'Czas Wezwania',
                statAmount: '6,45 sek'
            },
            {
                statName: 'Użycia',
                statAmount: 'Bez Ograniczeń'
            },
            {
                statName: 'Czas Regeneracji',
                statAmount: '240 sek'
            }
        ],
        characteristics: ['Wybuchowy', 'Orbitalna', 'Zapalająca']
    },
    {
        name: "Orbitalny Atak Działem Energetycznym",
        class: 'Manewr Ofensywny',
        isSameType: false,
        sameType: '',
        description: "Szybka salwa z działa energetycznego wystrzeliwana w największy cel w sąsiedztwie nadajnika. Namierzanie przebiega autonomicznie.",
        icon: OrbAtkDziaEnerg,
        stats: [
            {
                statName: 'Czas Wezwania',
                statAmount: '0 sek'
            },
            {
                statName: 'Użycia',
                statAmount: 'Bez Ograniczeń'
            },
            {
                statName: 'Czas Regeneracji',
                statAmount: '210 sek'
            }
        ],
        characteristics: ['Orbitalna', 'PPANC']
    },
    {
        name: "Wsparcie Z Powietrza Orła",
        class: 'Manewr Ofensywny',
        isSameType: false,
        sameType: '',
        description: "Ostrzał pola bitwy w celu oczyszczenia go z małych celów, przeprowadzany niemal natychmiast.",
        icon: WspZPowietOr,
        stats: [
            {
                statName: 'Czas Wezwania',
                statAmount: '2,40 sek'
            },
            {
                statName: 'Użycia',
                statAmount: '5'
            },
            {
                statName: 'Czas Regeneracji',
                statAmount: '8 sek'
            }
        ],
        characteristics: ['Orzeł', 'Penetrująca Ciężki Pancerz']
    },
    {
        name: "Nalot Orła",
        class: 'Manewr Ofensywny',
        isSameType: false,
        sameType: '',
        description: "Grad niecelowanych bomb z nalotu dywanowego.",
        icon: NalotOr,
        stats: [
            {
                statName: 'Czas Wezwania',
                statAmount: '4,10 sek'
            },
            {
                statName: 'Użycia',
                statAmount: '3'
            },
            {
                statName: 'Czas Regeneracji',
                statAmount: '8 sek'
            }
        ],
        characteristics: ['Orzeł', 'Wybuchowy', 'PPANC']
    },
    {
        name: "Bomba Kasetowa Orła",
        class: 'Manewr Ofensywny',
        isSameType: false,
        sameType: '',
        description: "Ukierunkowany atak powietrzny, który nie niszczy budynków, ale skutecznie usuwa mniejsze cele.",
        icon: BombKasOr,
        stats: [
            {
                statName: 'Czas Wezwania',
                statAmount: '4,35 sek'
            },
            {
                statName: 'Użycia',
                statAmount: '5'
            },
            {
                statName: 'Czas Regeneracji',
                statAmount: '8 sek'
            }
        ],
        characteristics: ['Orzeł', 'Penetrująca Średni Pancerz', 'Wybuchowy']
    },
    {
        name: "Nalot Napalmem Orła",
        class: 'Manewr Ofensywny',
        isSameType: false,
        sameType: '',
        description: "Grad bomb napalmowych, tworzących ścianę ognia, który zatrzyma wroga.",
        icon: NalotNapOr,
        stats: [
            {
                statName: 'Czas Wezwania',
                statAmount: '4,10 sek'
            },
            {
                statName: 'Użycia',
                statAmount: '3'
            },
            {
                statName: 'Czas Regeneracji',
                statAmount: '8 sek'
            }
        ],
        characteristics: ['Orzeł', 'Wybuchowy', 'Zapalająca']
    },
    {
        name: "LIFT-850 Plecak Skoku",
        class: 'Manewr Zaopatrzenia',
        isSameType: false,
        sameType: '',
        description: "Umożliwia użytkownikowi skakanie wyżej niż normalnie pozwala na to grawitacja i zdrowy rozsądek. Należy naładować przed użyciem.",
        icon: PlecakSkok,
        stats: [
            {
                statName: 'Czas Wezwania',
                statAmount: '9,75 sek'
            },
            {
                statName: 'Użycia',
                statAmount: 'Bez Ograniczeń'
            },
            {
                statName: 'Czas Regeneracji',
                statAmount: '480 sek'
            }
        ],
        characteristics: ['Hellpod', 'Plecak']
    },
    {
        name: "Nalot Dymny Orła",
        class: 'Manewr Ofensywny',
        isSameType: false,
        sameType: '',
        description: "Grad granatów dymnych tworzy grubą zasłonę dymną blokujacą pole widzenia wrogów.",
        icon: NalotDymOr,
        stats: [
            {
                statName: 'Czas Wezwania',
                statAmount: '4,40 sek'
            },
            {
                statName: 'Użycia',
                statAmount: '3'
            },
            {
                statName: 'Czas Regeneracji',
                statAmount: '8 sek'
            }
        ],
        characteristics: ['Orzeł', 'Wybuchowy']
    },
    {
        name: "Zasobniki Rakietowe 110mmm Orła",
        class: 'Manewr Ofensywny',
        isSameType: false,
        sameType: '',
        description: "Grad kapsuł rakietowych, które pilot Orła wystrzeliwuje w największy cel w pobliżu nadajnika manewru.",
        icon: ZasobRakOr120mm,
        stats: [
            {
                statName: 'Czas Wezwania',
                statAmount: '3,40 sek'
            },
            {
                statName: 'Użycia',
                statAmount: '3'
            },
            {
                statName: 'Czas Regeneracji',
                statAmount: '8 sek'
            }
        ],
        characteristics: ['Orzeł', 'Wybuchowy', 'PPANC']
    },
    {
        name: "500kg Bomba Orła",
        class: 'Manewr Ofensywny',
        isSameType: false,
        sameType: '',
        description: "Duża bomba niszcząca prawie każdy cel w pobliżu uderzenia. Pamiętaj, żeby trzymać się z dala od obszaru rażenia.",
        icon: kg500,
        stats: [
            {
                statName: 'Czas Wezwania',
                statAmount: '3,45 sek'
            },
            {
                statName: 'Użycia',
                statAmount: '2'
            },
            {
                statName: 'Czas Regeneracji',
                statAmount: '8 sek'
            }
        ],
        characteristics: ['Orzeł', 'Wybuchowy', 'PPANC']
    },
    {
        name: "M-102 Szybki Pojazd Zwiadowczy",
        class: 'Manewr Zaopatrzenia',
        isSameType: false,
        sameType: '',
        description: "Lekko opancerzony pojazd zwiadowczy z zamontowanym ciężkim karabinem maszynowym.",
        icon: M102SzybPojZwiad,
        stats: [
            {
                statName: 'Czas Wezwania',
                statAmount: '10,50 sek'
            },
            {
                statName: 'Użycia',
                statAmount: 'Bez Ograniczeń'
            },
            {
                statName: 'Czas Regeneracji',
                statAmount: '480 sek'
            }
        ],
        characteristics: ['Pojazd']
    },
    {
        name: "Orbitalny Atak Działem Precyzyjny",
        class: 'Manewr Ofensywny',
        isSameType: false,
        sameType: '',
        description: "Jeden, precyzyjny strzał z działka ATLAS niszczyciela.",
        icon: OrbAtkPrec,
        stats: [
            {
                statName: 'Czas Wezwania',
                statAmount: '3,45 sek'
            },
            {
                statName: 'Użycia',
                statAmount: 'Bez Ograncizeń'
            },
            {
                statName: 'Czas Regeneracji',
                statAmount: '90 sek'
            }
        ],
        characteristics: ['Wybuchowy', 'Orbitalna', 'PPANC']
    },
    {
        name: "Orbitalny Atak Gazowy",
        class: 'Manewr Ofensywny',
        isSameType: false,
        sameType: '',
        description: "Pocisk, który uwalnia chmurę żrącego gazu, oślepiając i spowalniając większość wrogów.",
        icon: OrbAtkGaz,
        stats: [
            {
                statName: 'Czas Wezwania',
                statAmount: '3,45 sek'
            },
            {
                statName: 'Użycia',
                statAmount: 'Bez Ograniczeń'
            },
            {
                statName: 'Czas Regeneracji',
                statAmount: '75 sek'
            }
        ],
        characteristics: ['Wybuchowy', 'Orbitalna', 'Żrący']
    },
    {
        name: "Orbitalny Atak EMS",
        class: 'Manewr Ofensywny',
        isSameType: false,
        sameType: '',
        description: "Broń specjalna do modyfikacji taktyki wroga. Pocisk tymczasowo oszałamia wszystkie cele w promieniu rażenia.",
        icon: OrbAtEMS,
        stats: [
            {
                statName: 'Czas Wezwania',
                statAmount: '3,45 sek'
            },
            {
                statName: 'Użycia',
                statAmount: 'Bez Ograniczeń'
            },
            {
                statName: 'Czas Regeneracji',
                statAmount: '75 sek'
            }
        ],
        characteristics: ['Orbitalna']
    },
    {
        name: "Orbitalna Bariera Dymna",
        class: 'Manewr Ofensywny',
        isSameType: false,
        sameType: '',
        description: "Tworzy ogromną, grubą zasłonę dymną blokującą pole widzenia przeciwników.",
        icon: OrbBarDym,
        stats: [
            {
                statName: 'Czas Wezwania',
                statAmount: '3,45 sek'
            },
            {
                statName: 'Użycia',
                statAmount: 'Bez Ograniczeń'
            },
            {
                statName: 'Czas Regeneracji',
                statAmount: '100 sek'
            }
        ],
        characteristics: ['Wybuchowy', 'Orbitalna']
    },
    {
        name: "E/MG-101 Gniazdo Ciężkiego Karabinu Maszynowego",
        class: 'Manewr Defensywny',
        isSameType: false,
        sameType: '',
        description: "Załogowe gniazdo karabinu oferujące doskonałą siłę ognia przeciwko lekko opancerzonym celom. Obraca się powoli, a więc zastanów się, gdzie najlepiej je zainstalwoać.",
        icon: GniazCiezKarMasz,
        stats: [
            {
                statName: 'Czas Wezwania',
                statAmount: '4,75 sek'
            },
            {
                statName: 'Użycia',
                statAmount: 'Bez Ograniczeń'
            },
            {
                statName: 'Czas Regeneracji',
                statAmount: '180 sek'
            }
        ],
        characteristics: ['Hellpod', 'Penetrująca Ciężki Pancerz']
    },
    {
        name: "Przekaźnik Generatora Tarczy",
        class: 'Manewr Defensywny',
        isSameType: false,
        sameType: '',
        description: "Stacjonarna tarczna energetyczna zapewniająca osłonę przed pociskami. Po aktywacji czas działania jest ograniczony.",
        icon: GenTarcz,
        stats: [
            {
                statName: 'Czas Wezwania',
                statAmount: '4,75 sek'
            },
            {
                statName: 'Użycia',
                statAmount: 'Bez Ograniczeń'
            },
            {
                statName: 'Czas Regeneracji',
                statAmount: '90 sek'
            }
        ],
        characteristics: ['Hellpod']
    },
    {
        name: "Wieża Tesli",
        class: 'Manewr Defensywny',
        isSameType: false,
        sameType: '',
        description: "Wieżyczka, która strzela ładunkami elektrycznymi do celów znajdujących się w bliskiej odległości. Aby uniknąć ostrzału sojuszniczego, pozostań w pozycji leżącej.",
        icon: Tesla,
        stats: [
            {
                statName: 'Czas Wezwania',
                statAmount: '4,75 sek'
            },
            {
                statName: 'Użycia',
                statAmount: 'Bez Ograniczeń'
            },
            {
                statName: 'Czas Regeneracji',
                statAmount: '120 sek'
            }
        ],
        characteristics: ['Hellpod', 'Strażnik']
    },
    {
        name: "MD-6 Przeciwpiechotne Pole Minowe",
        class: 'Manewr Defensywny',
        isSameType: false,
        sameType: '',
        description: "Rozmieszcza obronne przeciwpiechotne pole minowe, aby zatrzymać natarcie wroga.",
        icon: PPiechPolMin,
        stats: [
            {
                statName: 'Czas Wezwania',
                statAmount: '4,75 sek'
            },
            {
                statName: 'Użycia',
                statAmount: 'Bez Ograniczeń'
            },
            {
                statName: 'Czas Regeneracji',
                statAmount: '120 sek'
            }
        ],
        characteristics: ['Hellpod', 'Wybuchowy', 'Penetrująca Średni Pancerz']
    },
    {
        name: "B-1 Plecak Zaopatrzeniowy",
        class: 'Manewr Zaopatrzenia',
        isSameType: false,
        sameType: '',
        description: "Skrzynki z zaopatrzeniem zawierające amunicję oraz plecak, który pozwala użytkownikowi przekazywać skrzynki innym helldiversom.",
        icon: PlecakZaopatrz,
        stats: [
            {
                statName: 'Czas Wezwania',
                statAmount: '9,75 sek'
            },
            {
                statName: 'Użycia',
                statAmount: 'Bez Ograniczeń'
            },
            {
                statName: 'Czas Regeneracji',
                statAmount: '480 sek'
            }
        ],
        characteristics: ['Hellpod', 'Plecak']
    },
    {
        name: "GL-21 Granatnik",
        class: 'Manewr Zaopatrzenia',
        isSameType: false,
        sameType: '',
        description: "Granatnik skuteczny przeciwko opancerzonej piechocie. Nie jest przeznaczony do użycia przeciwko opancerzonym pojazdom lub ufortyfikowanym budynkom.",
        icon: GL21Grana,
        stats: [
            {
                statName: 'Czas Wezwania',
                statAmount: '4,75 sek'
            },
            {
                statName: 'Użycia',
                statAmount: 'Bez Ograniczeń'
            },
            {
                statName: 'Czas Regeneracji',
                statAmount: '480 sek'
            }
        ],
        characteristics: ['Wybuchowy', 'Hellpod', 'Broń Wsparcia', 'Penetrująca Średni Pancerz']
    },
    {
        name: "LAS-98 Działko Laserowe",
        class: 'Manewr Zaopatrzenia',
        isSameType: false,
        sameType: '',
        description: "Broń laserowa strzelajaca ciągłym promieniem. Nie wymaga amunicji, ale jeśli się przegrzeje, będzie wymagała wymiany radiatora.",
        icon: LAS98DziaLaser,
        stats: [
            {
                statName: 'Czas Wezwania',
                statAmount: '4,75 sek'
            },
            {
                statName: 'Użycia',
                statAmount: 'Bez Ograniczeń'
            },
            {
                statName: 'Czas Regeneracji',
                statAmount: '480 sek'
            }
        ],
        characteristics: ['Broń Wsparcia', 'Hellpod', 'Penetrująca Ciężki Pancerz', 'Przegrzanie', 'Promień']
    },
    {
        name: "MD-I4 Miny Zapalające",
        class: 'Manewr Defensywny',
        isSameType: false,
        sameType: '',
        description: "Rozmieszcza obronne zapalające pole minowe, które po aktywacji podpala zarówno teren, jak i cele.",
        icon: MinyZapal,
        stats: [
            {
                statName: 'Czas Wezwania',
                statAmount: '4,75 sek'
            },
            {
                statName: 'Użycia',
                statAmount: 'Bez Ograniczeń'
            },
            {
                statName: 'Czas Regeneracji',
                statAmount: '120 sek'
            }
        ],
        characteristics: ['Hellpod', 'Wybuchowy', 'Zapalająca']
    },
    {
        name: "AX/LAS-5 Łazik Azor",
        class: 'Manewr Zaopatrzenia',
        isSameType: false,
        sameType: '',
        description: "Autonomiczny dron wyposażony w karabin laserowy, zapewniający osłonę w 360°. Wraca do plecaka, aby się schłodzić.",
        icon: LAS5Azor,
        stats: [
            {
                statName: 'Czas Wezwania',
                statAmount: '9,75 sek'
            },
            {
                statName: 'Użycia',
                statAmount: 'Bez Ograniczeń'
            },
            {
                statName: 'Czas Regeneracji',
                statAmount: '480 sek'
            }
        ],
        characteristics: ['Hellpod', 'Plecak', 'Penetrująca Lekki Pancerz', 'Promień']
    },
    {
        name: "SH-20 Plecak Z Tarczą Balistyczną",
        class: 'Manewr Zaopatrzenia',
        isSameType: false,
        sameType: '',
        description: "Plecak, który można trzymać w jednej ręce jak tarczę balistyczną. Chroni przed ostrzałem z broni krótkiej.",
        icon: PlecakZTarczBal,
        stats: [
            {
                statName: 'Czas Wezwania',
                statAmount: '9,75 sek'
            },
            {
                statName: 'Użycia',
                statAmount: 'Bez Ograniczeń'
            },
            {
                statName: 'Czas Regeneracji',
                statAmount: '300 sek'
            }
        ],
        characteristics: ['Hellpod', 'Plecak']
    },
    {
        name: "ARC-3 Miotacz Łukowy",
        class: 'Manewr Zaopatrzenia',
        isSameType: false,
        sameType: '',
        description: "Rzuca błyskawicę z bliskiej odległości. Ładuje się do wystrzeliwania pocisków i może razić wiele celów jednocześnie.",
        icon: MiotaczLuk,
        stats: [
            {
                statName: 'Czas Wezwania',
                statAmount: '4,75 sek'
            },
            {
                statName: 'Użycia',
                statAmount: 'Bez Ograniczeń'
            },
            {
                statName: 'Czas Regeneracji',
                statAmount: '480 sek'
            }
        ],
        characteristics: ['Broń Wsparcia', 'Hellpod', 'Ładowana']
    },
    {
        name: "MD-17 Miny PPANC",
        class: 'Manewr Defensywny',
        isSameType: false,
        sameType: '',
        description: "Rozsiewa potężne miny przeciwpancerne, które przebijają pancerz i zadają ciężkie obrażenia. W porównaniu z mniejszymi minami te są rzadziej rozmieszczone.",
        icon: MinPPANC,
        stats: [
            {
                statName: 'Czas Wezwania',
                statAmount: '4,75 sek'
            },
            {
                statName: 'Użycia',
                statAmount: 'Bez Ograniczeń'
            },
            {
                statName: 'Czas Regeneracji',
                statAmount: '120 sek'
            }
        ],
        characteristics: ['Hellpod', 'Wybuchowy', 'PPANC']
    },
    {
        name: "LAS-99 Działko Quasar",
        class: 'Manewr Zaopatrzenia',
        isSameType: false,
        sameType: '',
        description: "Ładuje się i wystrzeliwuje potężną, wybuchową salwę energii. Po wystrzale ma długi okres regeneracji.",
        icon: QUASAR,
        stats: [
            {
                statName: 'Czas Wezwania',
                statAmount: '4,75 sek'
            },
            {
                statName: 'Użycia',
                statAmount: 'Bez Ograniczeń'
            },
            {
                statName: 'Czas Regeneracji',
                statAmount: '480 sek'
            }
        ],
        characteristics: ['Broń Wsparcia', 'Hellpod', 'PPANC', 'Ładowana']
    },
    {
        name: "SH-32 Plecak Generatora Tarczy",
        class: 'Manewr Zaopatrzenia',
        isSameType: false,
        sameType: '',
        description: "Zamyka użytkownika w kulistej tarczy, która blokuje szybkie pociski.",
        icon: PlecakGenTarcz,
        stats: [
            {
                statName: 'Czas Wezwania',
                statAmount: '9,75 sek'
            },
            {
                statName: 'Użycia',
                statAmount: 'Bez Ograniczeń'
            },
            {
                statName: 'Czas Regeneracji',
                statAmount: '480 sek'
            }
        ],
        characteristics: ['Hellpod', 'Plecak']
    },
    {
        name: "A/MG-43 Strażnik Z Karabinem Maszynowym",
        class: 'Manewr Defensywny',
        isSameType: false,
        sameType: '',
        description: "Zwinna wieżyczka automatycznego karabinu maszynowego. Będzie strzelać do celów, nawet jeśli w krzyżowy ogień dostaną się helldiversi.",
        icon: StrazZKarMasz,
        stats: [
            {
                statName: 'Czas Wezwania',
                statAmount: '4,75 sek'
            },
            {
                statName: 'Użycia',
                statAmount: 'Bez Ograniczeń'
            },
            {
                statName: 'Czas Regeneracji',
                statAmount: '90 sek'
            }
        ],
        characteristics: ['Hellpod', 'Strażnik', 'Penetrująca Średni Pancerz']
    },
    {
        name: "A/G-16 Strażnik Z Działkiem Gatlinga",
        class: 'Manewr Defensywny',
        isSameType: false,
        sameType: '',
        description: "Zautomatyzowana wieżyczka o bardzo dużej szybkostrzelności. Uwaga: nie sprawdza, czy jednostki sojusznicze znajdują się na linii ognia.",
        icon: StrazZDzialGat,
        stats: [
            {
                statName: 'Czas Wezwania',
                statAmount: '4,75 sek'
            },
            {
                statName: 'Użycia',
                statAmount: 'Bez Ograniczeń'
            },
            {
                statName: 'Czas Regeneracji',
                statAmount: '150 sek'
            }
        ],
        characteristics: ['Hellpod', 'Strażnik', 'Penetrująca Średni Pancerz']
    },
    {
        name: "A/M-12 Strażnik Z Moździerzem",
        class: 'Manewr Defensywny',
        isSameType: false,
        sameType: '',
        description: "Wieżyczka strzelająca potężnymi pociskami wysokim łukiem. Skuteczna na duże odległości i zdolna do atakowania celów za osłoną.",
        icon: StrazZMozd,
        stats: [
            {
                statName: 'Czas Wezwania',
                statAmount: '4,75 sek'
            },
            {
                statName: 'Użycia',
                statAmount: 'Bez Ograniczeń'
            },
            {
                statName: 'Czas Regeneracji',
                statAmount: '180 sek'
            }
        ],
        characteristics: ['Hellpod', 'Wybuchowy', 'Strażnik', 'Penetrująca Średni Pancerz']
    },
    {
        name: "AX/AR-23 Azor",
        class: 'Manewr Zaopatrzenia',
        isSameType: false,
        sameType: '',
        description: "Autonomiczny dron wyposażony w karabin szturmowy Wyzwalacz, zapewniający osłonę w 360°. Wraca do plecaka, aby uzupełnić amunicję.",
        icon: AR23Azor,
        stats: [
            {
                statName: 'Czas Wezwania',
                statAmount: '9,75 sek'
            },
            {
                statName: 'Użycia',
                statAmount: 'Bez Ograniczeń'
            },
            {
                statName: 'Czas Regeneracji',
                statAmount: '480 sek'
            }
        ],
        characteristics: ['Hellpod', 'Plecak', 'Penetrująca Średni Pancerz']
    },
    {
        name: "A/AC-8 Strażnik Z Automatycznym Działkiem",
        class: 'Manewr Defensywny',
        isSameType: false,
        sameType: '',
        description: "Zautomatyzowana wieżyczka strzelająca amunicją przeciwpancerną na duże odległości. Mniejsza zwinność, większy zasięg i moc.",
        icon: StrazZAutDzial,
        stats: [
            {
                statName: 'Czas Wezwania',
                statAmount: '4,75 sek'
            },
            {
                statName: 'Użycia',
                statAmount: 'Bez Ograniczeń'
            },
            {
                statName: 'Czas Regeneracji',
                statAmount: '150 sek'
            }
        ],
        characteristics: ['Hellpod', 'Strażnik', 'PPANC']
    },
    {
        name: "A/MLS-4X Strażnik Z Wyrzutnią Rakiet",
        class: 'Manewr Defensywny',
        isSameType: false,
        sameType: '',
        description: "Potężna automatyczna wiezyczka, skuteczna przeciwko celom opancerzonym. Cele przede wszystkim w większych wrogów.",
        icon: StrazZWyrzRak,
        stats: [
            {
                statName: 'Czas Wezwania',
                statAmount: '4,75 sek'
            },
            {
                statName: 'Użycia',
                statAmount: 'Bez Ograniczeń'
            },
            {
                statName: 'Czas Regeneracji',
                statAmount: '150 sek'
            }
        ],
        characteristics: ['Hellpod', 'Wybuchowy', 'Strażnik', 'PPANC']
    },
    {
        name: "A/M-23 Strażnik Z Moździerzem EMS",
        class: 'Manewr Defensywny',
        isSameType: false,
        sameType: '',
        description: "Wieżyczka wystrzeliwująca generatory pola statycznego spowalniające natarcie wrogów.",
        icon: MozEMS,
        stats: [
            {
                statName: 'Czas Wezwania',
                statAmount: '4,75 sek'
            },
            {
                statName: 'Użycia',
                statAmount: 'Bez Ograniczeń'
            },
            {
                statName: 'Czas Regeneracji',
                statAmount: '180 sek'
            }
        ],
        characteristics: ['Hellpod', 'Wybuchowy', 'Strażnik']
    },
    {
        name: "EXO-45 Egzokombinezon Patriota",
        class: 'Manewr Zaopatrzenia',
        isSameType: true,
        sameType: 'egzo',
        description: "Ciężko opancerzony chodzący egzokombinezon, wyposażony w wyrzutnię rakiet oraz ciężki karabin maszynowy.",
        icon: EgzoPatriot,
        stats: [
            {
                statName: 'Czas Wezwania',
                statAmount: '10,50 sek'
            },
            {
                statName: 'Użycia',
                statAmount: '2'
            },
            {
                statName: 'Czas Regeneracji',
                statAmount: '600 sek'
            }
        ],
        characteristics: ['Wybuchowy', 'Pojazd', 'PPANC', 'Penetrująca Średni Pancerz']
    },
    {
        name: "EXO-49 Egzokombinezon Oswobodziciel",
        class: 'Manewr Zaopatrzenia',
        isSameType: true,
        sameType: 'egzo',
        description: "Ciężko opancerzony chodzący egzokombinezon, wyposażony w dwa automatyczne działka.",
        icon: EgzoOswb,
        stats: [
            {
                statName: 'Czas Wezwania',
                statAmount: '10,50 sek'
            },
            {
                statName: 'Użycia',
                statAmount: '2'
            },
            {
                statName: 'Czas Regeneracji',
                statAmount: '600 sek'
            }
        ],
        characteristics: ['Wybuchowy', 'Pojazd', 'PPANC']
    },
    {
        name: "TX-41 Sterylizator",
        class: 'Manewr Zaopatrzenia',
        isSameType: false,
        sameType: '',
        description: "Atomizuje żrące chemikalia na delikatną mgiełkę, która upłynnia wrażliwą elektronikę i tkanki. Oślepia i spowalnia większość wrogów.",
        icon: Sterylizator,
        stats: [
            {
                statName: 'Czas Wezwania',
                statAmount: '4,75 sek'
            },
            {
                statName: 'Użycia',
                statAmount: 'Bez Ograniczeń'
            },
            {
                statName: 'Czas Regeneracji',
                statAmount: '480 sek'
            }
        ],
        characteristics: ['Hellpod', 'Broń Wsparcia', 'Żrący']
    },
    {
        name: "AX/TX-13 Psi Oddech Azora",
        class: 'Manewr Zaopatrzenia',
        isSameType: false,
        sameType: '',
        description: "Dron broniący użytkownika poprzez wystrzelenie żrącego gazu w pobliskich wrogów. Tymczasowo ich oślepia i spowalnia. Wraca do plecaka, aby się uzupełnić.",
        icon: TX13OddechAzora,
        stats: [
            {
                statName: 'Czas Wezwania',
                statAmount: '9,75 sek'
            },
            {
                statName: 'Użycia',
                statAmount: 'Bez Ograniczeń'
            },
            {
                statName: 'Czas Regeneracji',
                statAmount: '480 sek'
            }
        ],
        characteristics: ['Hellpod', 'Plecak', 'Żrący']
    },
    {
        name: "SH-51 Tarcza Kierunkowa",
        class: 'Manewr Zaopatrzenia',
        isSameType: false,
        sameType: '',
        description: "Jednoręczne urządzenie rozstawiające przed użytkownikiem szeroką barierę energetyczną. Bariera jest półprzepuszczalna i blokuje szybko lecące pociski z zewnątrz. Pozwala jednak użytkownikowi strzelać od jego strony.",
        icon: TarczKier,
        stats: [
            {
                statName: 'Czas Wezwania',
                statAmount: '9,75 sek'
            },
            {
                statName: 'Użycia',
                statAmount: 'Bez Ograniczeń'
            },
            {
                statName: 'Czas Regeneracji',
                statAmount: '300 sek'
            }
        ],
        characteristics: ['Hellpod', 'Plecak']
    },
    {
        name: "A/FLAM-40 Płomienisty strażnik",
        class: 'Manewr Defensywny',
        isSameType: false,
        sameType: '',
        description: "Automatyczna wieżyczka z miotaczem płomieni. Uwaga: przebicie pojemnika z paliwem może skutkować eksplozją.",
        icon: Flam40OgnStraz,
        stats: [
            {
                statName: 'Czas Wezwania',
                statAmount: '4,75 sek'
            },
            {
                statName: 'Użycia',
                statAmount: 'Bez Ograniczeń'
            },
            {
                statName: 'Czas Regeneracji',
                statAmount: '150 sek'
            }
        ],
        characteristics: ['Hellpod', 'Zapalająca', 'Strażnik']
    },
    {
        name: "E/AT-12 Gniazdo Przeciwpancerne",
        class: 'Manewr Defensywny',
        isSameType: false,
        sameType: '',
        description: "Potężne stanowisko karabinu zdolne likwidować cele pancerne z dużej odległości.",
        icon: GniazPPANC,
        stats: [
            {
                statName: 'Czas Wezwania',
                statAmount: '4,75 sek'
            },
            {
                statName: 'Użycia',
                statAmount: 'Bez Ograniczeń'
            },
            {
                statName: 'Czas Regeneracji',
                statAmount: '180 sek'
            }
        ],
        characteristics: ['Hellpod', 'Penetrująca Ciężki Pancerz']
    },
    {
        name: "B-100 Przenośna Hellbomba",
        class: 'Manewr Zaopatrzenia',
        isSameType: false,
        sameType: '',
        description: "Wybucha",
        icon: B100PrzenHellb,
        stats: [
            {
                statName: 'Czas Wezwania',
                statAmount: '9,75 sek'
            },
            {
                statName: 'Użycia',
                statAmount: 'Bez Ograniczeń'
            },
            {
                statName: 'Czas Regeneracji',
                statAmount: '300 sek'
            }
        ],
        characteristics: ['Hellpod', 'Wybuchowy', 'Plecak', 'PPANC']
    },
]
