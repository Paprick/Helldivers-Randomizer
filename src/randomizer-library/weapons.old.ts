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
        name: 'AR-23 Wyzwalacz',
        class: 'Karabin Szturmowy',
        description: "Standardowy karabin szturmowy Sił Zbrojnych Super Ziemi równoważący siłę ognia, szybkostrzelność i wagę. Niezawodna broń w walce z mniejszymi celami.",
        icon: ar23,
        stats: [
            {
                statName: 'Obrażenia',
                statAmount: 70
            },
            {
                statName: 'Pojemność',
                statAmount: 45
            },
            {
                statName: 'Odrzut',
                statAmount: 14
            },
            {
                statName: 'Szybkostrzelność',
                statAmount: 640
            },
        ],
        characteristics: ['Penetrująca Lekki Pancerz']
    },
    {
        name: "AR-23P Wyzwalacz Penetrator",
        class: 'Karabin Szturmowy',
        description: "Zmodyfikowany Wyzwalacz z lunetą i pociskami przeciwpancernymi. Pomaga użytkownikom likwidować cele opancerzone.",
        icon: ar23p,
        stats: [
            {
                statName: 'Obrażenia',
                statAmount: 60
            },
            {
                statName: 'Pojemność',
                statAmount: 45
            },
            {
                statName: 'Odrzut',
                statAmount: 18
            },
            {
                statName: 'Szybkostrzelność',
                statAmount: 640
            },
        ],
        characteristics: ['Penetrująca Średni Pancerz']
    },
    {
        name: "AR-23C Wyzwalacz Hukowy",
        class: 'Karabin Szturmowy',
        description: "Zmodyfikowany Wyzwalacz wyposażony w pociski hukowe, które zadają mniej obrażeń, ale powodują zachwianie wrogoów.",
        icon: ar23c,
        stats: [
            {
                statName: 'Obrażenia',
                statAmount: 65
            },
            {
                statName: 'Pojemność',
                statAmount: 60
            },
            {
                statName: 'Odrzut',
                statAmount: 28
            },
            {
                statName: 'Szybkostrzelność',
                statAmount: 320
            },
        ],
        characteristics: ['Penetrująca Lekki Pancerz']
    },
    {
        name: "AR-23A Karabinek Wyzwalacz",
        class: 'Karabin Szturmowy',
        description: "Mniejsza wersja Wyzwalacza zaprojektowana z myślą o lepsze walce na bliskim dystansie. Ma większą szybkostrzelność kosztem większego rozrzutu.",
        icon: ar23a,
        stats: [
            {
                statName: 'Obrażenia',
                statAmount: 70
            },
            {
                statName: 'Pojemność',
                statAmount: 45
            },
            {
                statName: 'Odrzut',
                statAmount: 25
            },
            {
                statName: 'Szybkostrzelność',
                statAmount: 920
            },
        ],
        characteristics: ['Penetrująca Lekki Pancerz']
    },
    {
        name: "AR-61 Ujędrniacz",
        class: 'Karabin Szturmowy',
        description: "Wielkokalibrowy karabin szturmowy o niedużym magazynku, ale dużej sile rażenia.",
        icon: ar61,
        stats: [
            {
                statName: 'Obrażenia',
                statAmount: 95
            },
            {
                statName: 'Pojemność',
                statAmount: 35
            },
            {
                statName: 'Odrzut',
                statAmount: 10
            },
            {
                statName: 'Szybkostrzelność',
                statAmount: 600
            },
        ],
        characteristics: ['Penetrująca Lekki Pancerz']
    },
    {
        name: "BR-14 Arbiter",
        class: 'Karabin Szturmowy',
        description: "Celny i przebijający pancerz karabin BR-14 Arbiter zapewnia sprawiedliwy osąd nad średniej wielkości wrogami. Jego niewielki magazynek ogranicza skuteczność w starciach z dużymi grupami wrogów.",
        icon: br14,
        stats: [
            {
                statName: 'Obrażenia',
                statAmount: 90
            },
            {
                statName: 'Pojemność',
                statAmount: 30
            },
            {
                statName: 'Odrzut',
                statAmount: 38
            },
            {
                statName: 'Szybkostrzelność',
                statAmount: 550
            },
        ],
        characteristics: ['Penetrująca Średni Pancerz']
    },
    {
        name: "R-2124 Konstytucja",
        class: 'Karabin Wyborowy',
        description: "Ten ceremonialny karabin został skonstruowany na podstawie starożytnych reliktów z czasów predemokratycznych. Tradycyjnie wręczany jest każdemu obywatelowi w dniu 16 urodzin, aby zachęcić go do wstąpienia na służbę.",
        icon: r2124,
        stats: [
            {
                statName: 'Obrażenia',
                statAmount: 180
            },
            {
                statName: 'Pojemność',
                statAmount: 5
            },
            {
                statName: 'Odrzut',
                statAmount: 43
            },
            {
                statName: 'Szybkostrzelność',
                statAmount: 60
            },
        ],
        characteristics: ['Penetrująca Średni Pancerz', 'Przeładowanie Nabojów']
    },
    {
        name: "R-63 Gorliwiec",
        class: 'Karabin Wyborowy',
        description: "Ten karabin wyborowy dużego kalibru ma niewielki magazynek i niską szybkostrzelność, ale za to gwarantuje potężne, celne strzały.",
        icon: r63,
        stats: [
            {
                statName: 'Obrażenia',
                statAmount: 165
            },
            {
                statName: 'Pojemność',
                statAmount: 20
            },
            {
                statName: 'Odrzut',
                statAmount: 35
            },
            {
                statName: 'Szybkostrzelność',
                statAmount: 350
            },
        ],
        characteristics: ['Penetrująca Lekki Pancerz']
    },
    {
        name: "R-63AS Gorliwiec Antysnajper",
        class: 'Karabin Wyborowy',
        description: "Zmodyfikowany karabin Gorliwiec o większych obrażeniach, ale niższej manewrowości. Wystrzeliwuje tylko jeden pocisk naraz.",
        icon: r63as,
        stats: [
            {
                statName: 'Obrażenia',
                statAmount: 200
            },
            {
                statName: 'Pojemność',
                statAmount: 15
            },
            {
                statName: 'Odrzut',
                statAmount: 53
            },
            {
                statName: 'Szybkostrzelność',
                statAmount: 350
            },
        ],
        characteristics: ['Penetrująca Średni Pancerz']
    },
    {
        name: "Karabin Akcelerowany PLAS-39",
        class: 'Karabin Snajperski',
        description: "Precyzyjny karabin strzelający pociskami plazmowymi. Trzeba je naładować przed wystrzałem.",
        icon: plas39,
        stats: [
            {
                statName: 'Obrażenia',
                statAmount: 350
            },
            {
                statName: 'Pojemność',
                statAmount: 9
            },
            {
                statName: 'Odrzut',
                statAmount: 3
            },
            {
                statName: 'Szybkostrzelność',
                statAmount: 550
            },
        ],
        characteristics: ['Penetrująca Średni Pancerz', 'Wybuchowa']
    },
    {
        name: "PM StA-11",
        class: 'Pistolet Maszynowy',
        description: "Pistolet maszynowy z magazynkiem spiralnym, który daje tej broni większą pojemność nabojów, ale też obciąża ją z przodu. Wyprodukowany przez Stal Arms.",
        icon: pmsta11,
        stats: [
            {
                statName: 'Obrażenia',
                statAmount: 65
            },
            {
                statName: 'Pojemność',
                statAmount: 48
            },
            {
                statName: 'Odrzut',
                statAmount: 13
            },
            {
                statName: 'Szybkostrzelność',
                statAmount: 1050
            },
        ],
        characteristics: ['Penetrująca Lekki Pancerz', 'W Jednej Ręce']
    },
    {
        name: "SMG-32 Reprymenda",
        class: 'Pistolet Maszynowy',
        description: "Pistolet maszynowy do ciężkich zadań, wystrzeliwujący pociski dużego kalibru. Mniej szybkostrzelny aby zrekompensować duży odrzut. Idealny na krótkim i średnim dystansie.",
        icon: smg32,
        stats: [
            {
                statName: 'Obrażenia',
                statAmount: 125
            },
            {
                statName: 'Pojemność',
                statAmount: 25
            },
            {
                statName: 'Odrzut',
                statAmount: 44
            },
            {
                statName: 'Szybkostrzelność',
                statAmount: 490
            },
        ],
        characteristics: ['Penetrująca Średni Pancerz']
    },
    {
        name: "SMG-37 Obrońca",
        class: 'Pistolet Maszynowy',
        description: "Pistolet maszynowy dużego kalibru, z którego można strzelać jedną ręką. Ma stosunkowo niską szybkostrzelność.",
        icon: smg37,
        stats: [
            {
                statName: 'Obrażenia',
                statAmount: 75
            },
            {
                statName: 'Pojemność',
                statAmount: 45
            },
            {
                statName: 'Odrzut',
                statAmount: 10
            },
            {
                statName: 'Szybkostrzelność',
                statAmount: 520
            },
        ],
        characteristics: ['Penetrująca Lekki Pancerz', 'W Jednej Ręce']
    },
    {
        name: "SMG-72 Pięść",
        class: 'Pistolet Maszynowy',
        description: "Wystrzeliwuje pociski hukowe, które powodują zachwianie wroga. Mniejsza szybkostrzelność niż w przypadku innych pistoletów maszynowych.",
        icon: smg72,
        stats: [
            {
                statName: 'Obrażenia',
                statAmount: 65
            },
            {
                statName: 'Pojemność',
                statAmount: 45
            },
            {
                statName: 'Odrzut',
                statAmount: 10
            },
            {
                statName: 'Szybkostrzelność',
                statAmount: 475
            },
        ],
        characteristics: ['Penetrująca Lekki Pancerz', 'W Jednej Ręce']
    },
    {
        name: "SG-8 Pogromca",
        class: 'Strzelba',
        description: "Potężna strzelba typu pump-action z dwoma magazynkami. Ograniczone przebijanie pancerza. Idealna do likwidacji małych i szybkich celów.",
        icon: sg8,
        stats: [
            {
                statName: 'Obrażenia',
                statAmount: 405
            },
            {
                statName: 'Pojemność',
                statAmount: 16
            },
            {
                statName: 'Odrzut',
                statAmount: 120
            },
            {
                statName: 'Szybkostrzelność',
                statAmount: 80
            },
        ],
        characteristics: ['Penetrująca Lekki Pancerz', 'Przeładowanie Nabojów']
    },
    {
        name: "SG-8Ł Łomot",
        class: 'Strzelba',
        description: "Zmodyfikowana strzelba Pogromca wystrzeliwująca ciężkie i zadające duże obrażenia pociski. Idealna do wybijania wielkich dziur w dużych celach.",
        icon: sg8l,
        stats: [
            {
                statName: 'Obrażenia',
                statAmount: 250
            },
            {
                statName: 'Pojemność',
                statAmount: 16
            },
            {
                statName: 'Odrzut',
                statAmount: 120
            },
            {
                statName: 'Szybkostrzelność',
                statAmount: 80
            },
        ],
        characteristics: ['Penetrująca Średni Pancerz', 'Przeładowanie Nabojów']
    },
    {
        name: "SG-20 Stop",
        class: 'Strzelba',
        description: "Humanitarna broń z dwoma osobnymi magazynkami -jednym z przeciwpancernym śrutem igłowym i drugim z pociskami ogłuszającymi.",
        icon: sg20,
        stats: [
            {
                statName: 'Obrażenia',
                statAmount: 385
            },
            {
                statName: 'Pojemność',
                statAmount: 16
            },
            {
                statName: 'Odrzut',
                statAmount: 120
            },
            {
                statName: 'Szybkostrzelność',
                statAmount: 80
            },
        ],
        characteristics: ['Penetrująca Lekki Pancerz', 'Penetrująca Średni Pancerz', 'Przeładowanie Nabojów']
    },
    {
        name: "SG-451 Grill",
        class: 'Strzelba',
        description: "Strzelba typu pump-action wystrzeliwująca salwę fosforowego śrutu zapalającego cele.",
        icon: sg451,
        stats: [
            {
                statName: 'Obrażenia',
                statAmount: 320
            },
            {
                statName: 'Pojemność',
                statAmount: 16
            },
            {
                statName: 'Odrzut',
                statAmount: 100
            },
            {
                statName: 'Szybkostrzelność',
                statAmount: 80
            },
        ],
        characteristics: ['Penetrująca Lekki Pancerz', 'Przeładowanie Nabojów', 'Zapalająca']
    },
    {
        name: "SG-225 Łamacz",
        class: 'Strzelba',
        description: "W pełni automatyczna strzelba o dużej szybkostrzelności, doskonała do kontrolowania tłumu. Wymaga częstego przeładowania.",
        icon: sg225,
        stats: [
            {
                statName: 'Obrażenia',
                statAmount: 330
            },
            {
                statName: 'Pojemność',
                statAmount: 16
            },
            {
                statName: 'Odrzut',
                statAmount: 55
            },
            {
                statName: 'Szybkostrzelność',
                statAmount: 300
            },
        ],
        characteristics: ['Penetrująca Lekki Pancerz']
    },
    {
        name: "SG-225SP Łamacz Rozpryskowy Kozak",
        class: 'Strzelba',
        description: "Zmodyfikowana strzelba Łamacz wystrzeliwująca drobny śrut metalowy nasycający duży obszar i czyszczajacy z mniejszych celów.",
        icon: sg225sp,
        stats: [
            {
                statName: 'Obrażenia',
                statAmount: 240
            },
            {
                statName: 'Pojemność',
                statAmount: 26
            },
            {
                statName: 'Odrzut',
                statAmount: 45
            },
            {
                statName: 'Szybkostrzelność',
                statAmount: 330
            },
        ],
        characteristics: ['Penetrująca Lekki Pancerz']
    },
    {
        name: "SG-225ZP Łamacz Zapalający",
        class: 'Strzelba',
        description: "Zmodyfikowana strzelba Łamacz wystrzeliwująca pociski zapalające. W trakcie użytkowania generuje ogromne poziomy ciepła, więc można strzelać jedynie seriami.",
        icon: sg225zp,
        stats: [
            {
                statName: 'Obrażenia',
                statAmount: 240
            },
            {
                statName: 'Pojemność',
                statAmount: 25
            },
            {
                statName: 'Odrzut',
                statAmount: 41
            },
            {
                statName: 'Szybkostrzelność',
                statAmount: 300
            },
        ],
        characteristics: ['Penetrująca Lekki Pancerz', 'Zapalająca']
    },
    {
        name: "CB-9 Wybuchowa Kusza",
        class: 'Wybuchowa',
        description: "Wystrzeliwuje potężne eksplodujące bełty, zadające maksymalne obrażenia po bezpośrednim trafieniu. Podczas celowania należy wziąć pod uwagę siłę grawitacji.",
        icon: cb9,
        stats: [
            {
                statName: 'Obrażenia',
                statAmount: 620
            },
            {
                statName: 'Pojemność',
                statAmount: 5
            },
            {
                statName: 'Odrzut',
                statAmount: 35
            },
            {
                statName: 'Szybkostrzelność',
                statAmount: 50
            },
        ],
        characteristics: ['Penetrująca Średni Pancerz', 'Wybuchowa', 'W Jednej Ręce']
    },
    {
        name: "R-36 Eruptor",
        class: 'Wybuchowa',
        description: "Ten karabin z zamkiem czterotaktowym wystrzeliwuje pociski odrzutowe, które po trafieniu w cel eksplodują odłamkami we wszystkich kierunkach. Niezalecany do walk na bliską odległość.",
        icon: r36,
        stats: [
            {
                statName: 'Obrażenia',
                statAmount: 445
            },
            {
                statName: 'Pojemność',
                statAmount: 5
            },
            {
                statName: 'Odrzut',
                statAmount: 75
            },
            {
                statName: 'Szybkostrzelność',
                statAmount: 25
            },
        ],
        characteristics: ['Penetrująca Średni Pancerz', 'Wybuchowa']
    },
    {
        name: "SG-8P Pogromca Plazmowy",
        class: 'Energetyczna',
        description: "Zmodyfikowana strzelba Pogromca wystrzeliwująca wybuchowe pociski plazmowe. Strzelać ostrożnie -wybuchająca plazma może zadać obrażenia towarzyszom z oddziału.",
        icon: sg8p,
        stats: [
            {
                statName: 'Obrażenia',
                statAmount: 250
            },
            {
                statName: 'Pojemność',
                statAmount: 10
            },
            {
                statName: 'Odrzut',
                statAmount: 110
            },
            {
                statName: 'Szybkostrzelność',
                statAmount: 80
            },
        ],
        characteristics: ['Penetrująca Średni Pancerz', 'Wybuchowa']
    },
    {
        name: "ARC-12 Błyskacz",
        class: 'Energetyczna',
        description: "Strzelba ta emituje szeroki promień elektryczny pod wysokim napięciem, który przeskakuje pomiędzy wszystkimi jednostkami (także sojuszniczymi) znajdującymi się w jej zasięgu.",
        icon: arc12,
        stats: [
            {
                statName: 'Obrażenia',
                statAmount: 250
            },
            {
                statName: 'Pojemność',
                statAmount: 'Nieskończoność'
            },
            {
                statName: 'Odrzut',
                statAmount: 60
            },
            {
                statName: 'Szybkostrzelność',
                statAmount: 45
            },
        ],
        characteristics: ['Penetrująca Średni Pancerz']
    },
    {
        name: "LAS-5 Kosa",
        class: 'Energetyczna',
        description: "Krabin laserowy wystrzeliwujący ciągłą wiązkę. Nie wymaga przeładowania, ale jeśli się przegrzeje, trzeba założyć nowy radiator.",
        icon: las5,
        stats: [
            {
                statName: 'Obr/Sek',
                statAmount: 350
            },
            {
                statName: 'Limit Ostrzału',
                statAmount: 8
            },
            {
                statName: 'Odrzut',
                statAmount: 0
            },
        ],
        characteristics: ['Penetrująca Lekki Pancerz', 'Promień', 'Przegrzanie']
    },
    {
        name: "LAS-16 Sierp",
        class: 'Energetyczna',
        description: "Karabin laserowy wystrzeliwujący krótkie wiązki. Nie wymaga przeładowania, ale jeśli się przegrzeje, trzeba założyć nowy radiator.",
        icon: las16,
        stats: [
            {
                statName: 'Obrażenia',
                statAmount: 55
            },
            {
                statName: 'Limit Ostrzału',
                statAmount: 7
            },
            {
                statName: 'Odrzut',
                statAmount: 2
            },
            {
                statName: 'Szybkostrzelność',
                statAmount: 750
            },
        ],
        characteristics: ['Penetrująca Lekki Pancerz', 'Przegrzanie']
    },
    {
        name: "LAS-17 Dwuostrzowy Sierp",
        class: 'Energetyczna',
        description: "Model LAS-16 sierp z usuniętymi wszystkimi ogranicznikami przegrzania. Pozwala strzelać znacznie dłużej. Po przegrzaniu zadaje więcej obrażeń kosztem niewielkich poparzeń użytkownika.",
        icon: las17,
        stats: [
            {
                statName: 'Obrażenia',
                statAmount: 55
            },
            {
                statName: 'Limit Ostrzału',
                statAmount: 15
            },
            {
                statName: 'Odrzut',
                statAmount: 2
            },
            {
                statName: 'Szybkostrzelność',
                statAmount: 700
            },
        ],
        characteristics: ['Penetrująca Lekki Pancerz', 'Penetrująca Średni Pancerz', 'Penetrująca Cięzki Pancerz', 'Przegrzanie']
    },
    {
        name: "PLAS-1 Spalacz",
        class: 'Energetyczna',
        description: "Karabin plazmowy, wystrzeliwujący pocisk z przegrzanego gazu, który eksploduje przy uderzeniu. Unikaj stania w pobliżu wybuchu.",
        icon: plas1,
        stats: [
            {
                statName: 'Obrażenia',
                statAmount: 200
            },
            {
                statName: 'Pojemność',
                statAmount: 20
            },
            {
                statName: 'Odrzut',
                statAmount: 20
            },
            {
                statName: 'Szybkostrzelność',
                statAmount: 350
            },
        ],
        characteristics: ['Penetrująca Średni Pancerz', 'Wybuchowa']
    },
    {
        name: "PLAS-101 Oczyszczacz",
        class: 'Energetyczna',
        description: "Karabin plazmowym który wystrzeliwuje pociski rozgrzanego gazu. Można go naładować, przytrzymując spust. Pełne naładowanie strzału sprawia, że pocisk eksploduje po trafieniu celu.",
        icon: plas101,
        stats: [
            {
                statName: 'Obrażenia',
                statAmount: 500
            },
            {
                statName: 'Pojemność',
                statAmount: 15
            },
            {
                statName: 'Odrzut',
                statAmount: 20
            },
            {
                statName: 'Szybkostrzelność',
                statAmount: 1000
            },
        ],
        characteristics: ['Penetrująca Średni Pancerz', 'Ładowana', 'Wybuchowa']
    },
    {
        name: "FLAM-66 Płomień",
        class: 'Specjalne',
        description: "Lekki miotacz płomieni. Wystrzeliwuje paliwo pod dużym ciśnieniem, a dysza dyspersyjna ogarnia cel otwartym ogniem. Bezpieczny.",
        icon: flam66,
        stats: [
            {
                statName: 'Obr/Sek',
                statAmount: 375
            },
            {
                statName: 'Pojemność',
                statAmount: 80
            },
            {
                statName: 'Odrzut',
                statAmount: 2
            }
        ],
        characteristics: ['Zapalająca']
    },
    {
        name: "JAR-5 Dominator",
        class: 'Specjalne',
        description: "Dominator wystrzeliwuje pociski odrzutowe. Ma mniejszą szybkostrzelność i pojemność magazynka, ale każdy pocisk zadaje ogromnie obrażenia.",
        icon: jar5,
        stats: [
            {
                statName: 'Obrażenia',
                statAmount: 275
            },
            {
                statName: 'Pojemność',
                statAmount: 15
            },
            {
                statName: 'Odrzut',
                statAmount: 75
            },
            {
                statName: 'Szybkostrzelność',
                statAmount: 250
            },
        ],
        characteristics: ['Penetrująca Średni Pancerz']
    }
]

export const secondaryWeapons: SecondaryWeaponsType[] = [
    {
        name: "P-2 Rozjemca",
        class: 'Pistolet',
        description: "Standardowy pistolet SZSZ -oferujący dużą szybkostrzelność, dużą pojemność magazynka i szybkie przeładowanie.",
        icon: p2,
        stats: [
            {
                statName: 'Obrażenia',
                statAmount: 75
            },
            {
                statName: 'Pojemność',
                statAmount: 15
            },
            {
                statName: 'Odrzut',
                statAmount: 23
            },
            {
                statName: 'Szybkostrzelność',
                statAmount: 900
            },
        ],
        characteristics: ['Penetrująca Lekki Pancerz' , 'W Jednej Ręce']
    },
    {
        name: "P-19 Odkupiciel",
        class: 'Pistolet',
        description: "W pełni automatyczny pistolet o niezwykle dużej szybkostrzelności, pozwalający na skuteczną kontrolę tłumu.",
        icon: p19,
        stats: [
            {
                statName: 'Obrażenia',
                statAmount: 60
            },
            {
                statName: 'Pojemność',
                statAmount: 31
            },
            {
                statName: 'Odrzut',
                statAmount: 15
            },
            {
                statName: 'Szybkostrzelność',
                statAmount: 1100
            },
        ],
        characteristics: ['Penetrująca Lekki Pancerz', 'W Jednej Ręce']
    },
    {
        name: "P-113 Werdykt",
        class: 'Pistolet',
        description: "Gazodynamiczny, półautomatyczny P-113 korzysta z 14mm magazynków -Szybka Rozwaga zawierających największe pociski centralnego zapłonu stosowane w pistoletach z magazynkami.",
        icon: p113,
        stats: [
            {
                statName: 'Obrażenia',
                statAmount: 125
            },
            {
                statName: 'Pojemność',
                statAmount: 10
            },
            {
                statName: 'Odrzut',
                statAmount: 40
            },
            {
                statName: 'Szybkostrzelność',
                statAmount: 450
            },
        ],
        characteristics: ['Penetrująca Średni Pancerz', 'W Jednej Ręce']
    },
    {
        name: "P-4 Senator",
        class: 'Pistolet',
        description: "Rewolwer zadający duże obrażenia, który można przeładować pojedynczymi nabojami, Potężna i niezawodna broń boczna.",
        icon: p4,
        stats: [
            {
                statName: 'Obrażenia',
                statAmount: 200
            },
            {
                statName: 'Pojemność',
                statAmount: 6
            },
            {
                statName: 'Odrzut',
                statAmount: 43
            },
            {
                statName: 'Szybkostrzelność',
                statAmount: 200
            },
        ],
        characteristics: ['Penetrująca Ciężki Pancerz', 'W Jednej Ręce', 'Przeładowanie Nabojów']
    },
    {
        name: "CQC-19 Lanca Ogłuszająca",
        class: 'Walka Wręcz',
        description: "Broń do walki wręcz wyposażona w elektryczny grot, który tymczasowo szałamia cele. Można trzymać w jednej ręce.",
        icon: cqc19,
        stats: [
            {
                statName: 'Odrzut',
                statAmount: 8
            }
        ],
        characteristics: ['Penetrująca Lekki Pancerz', 'W Jednej Ręce', 'Ogłuszająca']
    },
    {
        name: "CQC-30 Pałka Ogłuszająca",
        class: 'Walka Wręcz',
        description: "Lekka broń do walki wręcz, która tymczasowo oszałamia wrogów.",
        icon: cqc30,
        stats: [
            {
                statName: 'Odrzut',
                statAmount: 8
            }
        ],
        characteristics: ['Penetrująca Lekki Pancerz', 'W Jednej Ręce', 'Ogłuszająca']
    },
    {
        name: "CQC-5 Topór Bojowy",
        class: 'Walka Wręcz',
        description: "Potężna, jednoręczna broń do walki wręcz.",
        icon: cqc5,
        stats: [
            {
                statName: 'Odrzut',
                statAmount: 8
            }
        ],
        characteristics: ['Penetrująca Lekki Pancerz', 'W Jednej Ręce']
    },
    {
        name: "P-11 Pistolet Ze Stymulantem",
        class: 'Specjalne',
        description: "Wystrzeliwuje balistyczną strzałkę z niemal naddźwiekową szybkością, dzięki czemu można stymulować sojuszników z dalszej odległości. Może ukłuć.",
        icon: p11,
        stats: [
            {
                statName: 'Obrażenia',
                statAmount: 0
            },
            {
                statName: 'Pojemność',
                statAmount: 6
            },
            {
                statName: 'Odrzut',
                statAmount: 6
            },
            {
                statName: 'Szybkostrzelność',
                statAmount: 70
            },
        ],
        characteristics: ['W Jednej Ręce', 'Przeładowanie Nabojów', 'Stymulujący']
    },
    {
        name: "SG-22 Partyzant",
        class: 'Specjalne',
        description: "Trzylufowy łamany obrzyn. Przełącz tryb ostrzału, aby odpalić z trzech luf jednocześnie.",
        icon: sg22,
        stats: [
            {
                statName: 'Obrażenia',
                statAmount: 405
            },
            {
                statName: 'Pojemność',
                statAmount: 3
            },
            {
                statName: 'Odrzut',
                statAmount: 170
            },
            {
                statName: 'Szybkostrzelność',
                statAmount: 650
            },
        ],
        characteristics: ['Penetrująca Lekki Pancerz', 'W Jednej Ręce']
    },
    {
        name: "P-72 Frytkownica",
        class: 'Specjalne',
        description: "Niewielki i poręczny miotacz płomieni wystrzeliwujący salwę ognia na krótkim dystansie.",
        icon: p72,
        stats: [
            {
                statName: 'Obr/Sek',
                statAmount: 375
            },
            {
                statName: 'Pojemność',
                statAmount: 30
            },
            {
                statName: 'Odrzut',
                statAmount: 2
            }
        ],
        characteristics: ['Zapaljąca', 'W Jednej Ręce']
    },
    {
        name: "GP-31 Pistolet Na Granaty",
        class: 'Specjalne',
        description: "Pistolet wystrzeliwujący granaty. Pomiędzy strzałami trzeba go przeładować.",
        icon: gp31,
        stats: [
            {
                statName: 'Obrażenia',
                statAmount: 650
            },
            {
                statName: 'Pojemność',
                statAmount: 1
            },
            {
                statName: 'Odrzut',
                statAmount: 43
            },
            {
                statName: 'Szybkostrzelność',
                statAmount: 900
            },
        ],
        characteristics: ['Penetrująca Średni Pancerz', 'W Jednej Ręce', 'Wybuchowa']
    },
    {
        name: "LAS-7 Sztylet",
        class: 'Specjalne',
        description: "Pistolet laserowy wystrzeliwujący ciągłą wiązkę. Nie wymaga amunicji, ale może się przegrzać i trzeba w nim wymieniać akumulatory.",
        icon: las7,
        stats: [
            {
                statName: 'Obr/Sek',
                statAmount: 250
            },
            {
                statName: 'Limit Ostrzału',
                statAmount: 7
            },
            {
                statName: 'Odrzut',
                statAmount: 0
            }
        ],
        characteristics: ['Penetrująca Lekki Pancerz', 'W Jednej Ręce', 'Promień', 'Przegrzanie']
    },
    {
        name: "GP-31 Ultimatum",
        class: 'Specjalne',
        description: "Pistolet ładowany od przodupojedynczym, potężnym ładunkiem wybuchowym. Waga pocisku ogranicza zasięg broni.",
        icon: gp31Ult,
        stats: [
            {
                statName: 'Obrażenia',
                statAmount: 4500
            },
            {
                statName: 'Pojemność',
                statAmount: 1
            },
            {
                statName: 'Odrzut',
                statAmount: 43
            },
            {
                statName: 'Szybkostrzelność',
                statAmount: 900
            }
        ],
        characteristics: ['Penetrująca Średni Pancerz', 'W Jednej Ręce', 'Wybuchowa']
    },
    {
        name: "PLAS-15 Lojalista",
        class: 'Specjalne',
        description: "Pistolet plazmowy o ładowanym każdym strzale aż do puszczenia spustu. Pociski plazmowe wybuchają po kontakcie z celem.",
        icon: plas15,
        stats: [
            {
                statName: 'Obrażenia',
                statAmount: 125
            },
            {
                statName: 'Pojemność',
                statAmount: 7
            },
            {
                statName: 'Odrzut',
                statAmount: 8
            },
            {
                statName: 'Szybkostrzelność',
                statAmount: 1000
            },
        ],
        characteristics: ['Penetrująca Średni Pancerz', 'W Jednej Ręce', 'Ładowana', 'Wybuchowa']
    }
]

export const granadeWeapons: GranadeWeaponsType[] = [
    {
        name: "G-6 Odłamkowy",
        class: 'Standardowy Do Rzucania',
        description: "Przeciwpiechotny granat odłamkowy. Po detonacji zadaje obrażenia na dużym obszarze.",
        icon: g6,
        stats: [
            {
                statName: 'Obrażenia',
                statAmount: 500
            },
            {
                statName: 'Penetracja',
                statAmount: 3
            },
            {
                statName: 'Promień Zewnętrzny',
                statAmount: 10
            },
            {
                statName: 'Czas Zapalnika',
                statAmount: '2,4s'
            },
        ],
        characteristics: ['Penetrująca Średni Pancerz', 'Wybuchowa']
    },
    {
        name: "G-12 Zaczepny",
        class: 'Standardowy Do Rzucania',
        description: "Granat odłamkowo-burzący, który zadaje obrażenia lekko opancerzonym celom. Po detonacji powoduje duże obrażenia na małym obszarze.",
        icon: g12,
        stats: [
            {
                statName: 'Obrażenia',
                statAmount: 800
            },
            {
                statName: 'Penetracja',
                statAmount: 4
            },
            {
                statName: 'Promień Zewnętrzny',
                statAmount: 7
            },
            {
                statName: 'Czas Zapalnika',
                statAmount: '3,5s'
            },
        ],
        characteristics: ['Penetrująca Ciężki Pancerz', 'Wybuchowa']
    },
    {
        name: "G-10 Zapalający",
        class: 'Standardowy Do Rzucania',
        description: "Granat zapalający, który podpala wszystkie cele i teren w promieniu wybuchu. Zachować ostrożność.",
        icon: g10,
        stats: [
            {
                statName: 'Obrażenia',
                statAmount: 300
            },
            {
                statName: 'Penetracja',
                statAmount: 3
            },
            {
                statName: 'Promień Zewnętrzny',
                statAmount: 7
            },
            {
                statName: 'Czas Zapalnika',
                statAmount: '2,9s'
            },
        ],
        characteristics: ['Zapalająca', 'Wybuchowa']
    },
    {
        name: "G-16 Kontaktowy",
        class: 'Specjalny Do Rzucania',
        description: "Granat odłamkowo-burzący, który wybucha przy pierwszym uderzeniu.",
        icon: g16,
        stats: [
            {
                statName: 'Obrażenia',
                statAmount: 400
            },
            {
                statName: 'Penetracja',
                statAmount: 4
            },
            {
                statName: 'Promień Zewnętrzny',
                statAmount: 7
            },
            {
                statName: 'Czas Zapalnika',
                statAmount: '0s'
            },
        ],
        characteristics: ['Penetrująca Ciężki Pancerz', 'Wybuchowa']
    },
    {
        name: "G-13 Zapalający Kontaktowy",
        class: 'Specjalny Do Rzucania',
        description: "Wybucha po uderzeniu i pokrywa najblizszy obszar samozapalającym się białym fosforem.",
        icon: g13,
        stats: [
            {
                statName: 'Obrażenia',
                statAmount: 150
            },
            {
                statName: 'Penetracja',
                statAmount: 3
            },
            {
                statName: 'Promień Zewnętrzny',
                statAmount: 7
            },
            {
                statName: 'Czas Zapalnika',
                statAmount: '2,4s'
            },
        ],
        characteristics: ['Zapalająca', 'Wybuchowa']
    },
    {
        name: "G-23 Ogłuszający",
        class: 'Specjalny Do Rzucania',
        description: "Tymczasowo oszałamia wszystkie cele w promieniu rażenia.",
        icon: g23,
        stats: [
            {
                statName: 'Obrażenia',
                statAmount: 0
            },
            {
                statName: 'Penetracja',
                statAmount: 6
            },
            {
                statName: 'Promień Zewnętrzny',
                statAmount: 10
            },
            {
                statName: 'Czas Zapalnika',
                statAmount: '1,8s'
            },
        ],
        characteristics: ['Wybuchowa']
    },
    {
        name: "G-4 Gazowy",
        class: 'Specjalny Do Rzucania',
        description: "Granat uwalniający chmurę toksycznego gazu, który efektywnie oślepia i spowalnia wrogów zarówno organicznych, jak i nieorganicznych.",
        icon: g4,
        stats: [
            {
                statName: 'Obrażenia',
                statAmount: 3
            },
            {
                statName: 'Penetracja',
                statAmount: 6
            },
            {
                statName: 'Promień Zewnętrzny',
                statAmount: 7
            },
            {
                statName: 'Czas Zapalnika',
                statAmount: '2,9s'
            },
        ],
        characteristics: ['Żrący', 'Wybuchowa']
    },
    {
        name: "G-50 Poszukujący",
        class: 'Specjalny Do Rzucania',
        description: "Dron przenoszący granat podąża za użytkownikiem aż do wykrycia pobliskiego wroga. Następnie leci w jego kierunku i po uderzeniu eksploduje. Ma ograniczony ładunek akumulatora.",
        icon: g50,
        stats: [
            {
                statName: 'Obrażenia',
                statAmount: 400
            },
            {
                statName: 'Penetracja',
                statAmount: 4
            },
            {
                statName: 'Promień Zewnętrzny',
                statAmount: 7
            },
        ],
        characteristics: ['Penetrująca Średni Pancerz']
    },
    {
        name: "G-3 Dymny",
        class: 'Specjalny Do Rzucania',
        description: "Broń specjalna do modyfikacji taktyki wroga. Tworzy grubą zasłonę dymną blokującą pole widzenia przeciwników.",
        icon: g3,
        stats: [
            {
                statName: 'Obrażenia',
                statAmount: 0
            },
            {
                statName: 'Penetracja',
                statAmount: 0
            },
            {
                statName: 'Promień Zewnętrzny',
                statAmount: 5
            },
            {
                statName: 'Czas Zapalnika',
                statAmount: '2,4s'
            },
        ],
        characteristics: ['Wybuchowa']
    },
    {
        name: "G-123 Termitowy",
        class: 'Specjalny Do Rzucania',
        description: "Granat termitowy przylegający do powierzchni przed spaleniem w temperaturze 2000°C. Zdolny do przepalenia niektórych pancerzy.",
        icon: g123,
        stats: [
            {
                statName: 'Obrażenia',
                statAmount: 2000
            },
            {
                statName: 'Penetracja',
                statAmount: 7
            },
            {
                statName: 'Promień Zewnętrzny',
                statAmount: 3
            },
            {
                statName: 'Czas Zapalnika',
                statAmount: '2,9s'
            },
        ],
        characteristics: ['PPANC']
    },
    {
        name: "K-2 Nóż Do Rzucania",
        class: 'Specjalny Do Rzucania',
        description: "Zaprowadza cichą sprawiedliwość wśród wrogów wolności.",
        icon: k2,
        stats: [
            {
                statName: 'Obrażenia',
                statAmount: 250
            },
            {
                statName: 'Penetracja',
                statAmount: 3
            }
        ],
        characteristics: ['Penetrująca Średni Pancerz']
    }
]