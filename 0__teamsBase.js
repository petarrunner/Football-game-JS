export const teamsList = [
    // Bayern Munich
    {
        clubName: 'FC Bayern Munich',
        logo: 'teamsLogo/FC-Bayern-Munich-HD-Logo - Copy.png',
        stadium: {
            city: 'Munchen',
            country: 'Germany',
            stadiumSrc: 'teamsStadium/bayern-munich.jpg',
            stadiumName: 'Allianz Arena',
            stadiumCapacitet: 69901,
        },
        color1: '#DC052D',
        color2: '#fff',
        color3: '#DC052D',
        coach: 'Hans-Dieter Flick',
        playerName: ['Nouer', 'Sule', 'Pavard', 'Alaba', 'Davis', 'Kimmich', 'Goretzka', 'Muller', 'Coman', 'Sane', 'Gnabry', 'Lewandowski'],
    },
    // Juventus
    {
        clubName: 'Juventus',
        logo: 'teamsLogo/Juventus-FC-HD-Logo - Copy.png',
        stadium: {
            city: 'Turin',
            country: 'Italy',
            stadiumSrc: 'teamsStadium/juventus.jpg',
            stadiumName: 'Allianz Stadium',
            stadiumCapacitet: 41507,
        },
        color1: '#000',
        color2: '#FFF',
        color3: '#FFF',
        coach: 'Andrea Pirlo',
        playerName: [
            'Buffon',
            'Chielini',
            'Bonucci',
            'De Ligt',
            'Alex Sandro',
            'Cuardado',
            'McKennie',
            'Ramsey',
            'Chiesa',
            'Dybala',
            'Morata',
            'C. Ronaldo',
        ],
    },
    // Man City
    {
        clubName: 'Manchester City',
        logo: 'teamsLogo/Manchester-City-FC-HD-Logo - Copy.png',
        stadium: {
            city: 'Manchester',
            country: 'England',
            stadiumSrc: 'teamsStadium/manchester-city.jpg',
            stadiumName: 'Etihad stadium',
            stadiumCapacitet: 55097,
        },
        color1: '#6CADDF',
        color2: '#FFF',
        color3: '#6CADDF',
        coach: 'Pep Guardiola',
        playerName: [
            'Ederson',
            'Laporte',
            'Walker',
            'Mendy',
            'Gundogan',
            'Fernandinho',
            'Mahrez',
            'B. Silva',
            'de Bruyne',
            'Sterling',
            'Jesus',
            'Aguero',
        ],
    },
    // Real Madrid
    {
        clubName: 'Real Madrid',
        logo: 'teamsLogo/Real-Madrid-CF-HD-Logo - Copy.png',
        stadium: {
            city: 'Madrid',
            country: 'Spain',
            stadiumSrc: 'teamsStadium/real-madrid.jpg',
            stadiumName: 'Santiago Bernabeu',
            stadiumCapacitet: 81044,
        },
        color1: '#FFF',
        color2: '#000',
        color3: '#FFF',
        coach: 'Zinedine Zidane',
        playerName: [
            'Courtois',
            'S. Ramos',
            'Varane',
            'Marcelo',
            'Kroos',
            'Modric',
            'Casemiro',
            'Isco',
            'Hazard',
            'Asensio',
            'Vinicius Jr.',
            'Benzema',
        ],
    },
    // Borussia Dortmund
    {
        clubName: 'Borussia Dortmund',
        logo: 'teamsLogo/Borussia-Dortmund-HD-Logo.png',
        stadium: {
            city: 'Dortmund',
            country: 'Germany',
            stadiumSrc: 'teamsStadium/borussia-dortmund.jpg',
            stadiumName: 'Westfalenstadion',
            stadiumCapacitet: 81365,
        },
        color1: '#FDE100',
        color2: '#000',
        color3: '#FDE100',
        coach: 'Edin Terzic',
        playerName: [
            'Burki',
            'Hummels',
            'Emre Can',
            'Meunier',
            'Witsel',
            'Bellingham',
            'Brandt',
            'G. Reyna',
            'T. Hazard',
            'J. Sancho',
            'M. Reus',
            'Haaland',
        ],
    },
    // Empty
    {
        clubName: '',
        logo: 'teamsLogo/.png',
        imgStadium: 'teamsStadium/.jpg',
        stadium: {
            city: '',
            country: '',
            stadiumSrc: 'teamsStadium/.jpg',
            stadiumName: '',
            stadiumCapacitet: 0,
        },
        color1: '#',
        color2: '#',
        color3: '#',
        coach: '',
        playerName: ['', '', '', '', '', '', '', '', '', '', '', ''],
        kitNumbers: [1, , , , , , , , , , ,],
        specials: ['', '', '', '', '', '', '', '', '', '', '', ''],
        ratings: [
            ,
            [, , , , ,],
            [, , , , ,],
            [, , , , ,],
            [, , , , ,],
            [, , , , ,],
            [, , , , ,],
            [, , , , ,],
            [, , , , ,],
            [, , , , ,],
            [, , , , ,],
            [, , , , ,],
        ],
    },
];
export const playersList = [
    // Bayern Munich
    [
        {
            playerName: 'Noyer',
            position: 'goalkeeper',
            specials: '/',
            kitNumber: 1,
            ratingGk: 19,
        },
        {
            playerName: 'Sule',
            position: 'defender',
            specials: 'D',
            kitNumber: 4,
            dribling: 2,
            defending: 18,
            shooting: 6,
            heading: 18,
            freekicks: 7,
            corner: 6,
        },
        {
            playerName: 'Pavard',
            position: 'defender',
            specials: 'D',
            kitNumber: 5,
            dribling: 8,
            defending: 16,
            shooting: 12,
            heading: 16,
            freekicks: 8,
            corner: 8,
        },
        {
            playerName: 'Alaba',
            position: 'defender',
            specials: 'D P',
            kitNumber: 3,
            dribling: 5,
            defending: 16,
            shooting: 10,
            heading: 13,
            freekicks: 16,
            corner: 16,
        },
        {
            playerName: 'Davis',
            position: 'defender',
            specials: 'R',
            kitNumber: 2,
            dribling: 14,
            defending: 14,
            shooting: 10,
            heading: 14,
            freekicks: 13,
            corner: 14,
        },
        {
            playerName: 'Kimmich',

            position: 'midfielder',
            specials: 'P R',
            kitNumber: 6,
            dribling: 13,
            defending: 13,
            shooting: 16,
            heading: 12,
            freekicks: 17,
            corner: 18,
        },
        {
            playerName: 'Goretzka',
            position: 'midfielder',
            specials: 'P',
            kitNumber: 12,
            dribling: 12,
            defending: 10,
            shooting: 17,
            heading: 15,
            freekicks: 15,
            corner: 16,
        },
        {
            playerName: 'Muller',
            position: 'midfielder',
            specials: 'P S',
            kitNumber: 8,
            dribling: 10,
            defending: 13,
            shooting: 15,
            heading: 14,
            freekicks: 13,
            corner: 16,
        },
        {
            playerName: 'Coman',
            position: 'midfielder',
            specials: 'R',
            kitNumber: 11,
            dribling: 15,
            defending: 6,
            shooting: 13,
            heading: 12,
            freekicks: 14,
            corner: 13,
        },
        {
            playerName: 'Sane',
            position: 'forward',
            specials: 'Dr R',
            kitNumber: 10,
            dribling: 18,
            defending: 7,
            shooting: 17,
            heading: 15,
            freekicks: 14,
            corner: 14,
        },
        {
            playerName: 'Gnabry',
            position: 'forward',
            specials: 'R',
            kitNumber: 7,
            dribling: 17,
            defending: 7,
            shooting: 16,
            heading: 14,
            freekicks: 13,
            corner: 13,
        },
        {
            playerName: 'Lewandowski',
            position: 'forward',
            specials: 'Dr R S',
            kitNumber: 9,
            dribling: 16,
            defending: 6,
            shooting: 20,
            heading: 19,
            freekicks: 14,
            corner: 10,
        },
    ],
    // Juventus
    [
        {
            playerName: 'Buffon',
            position: 'goalkeeper',
            specials: '/',
            kitNumber: 1,
            ratingGk: 18,
        },
        {
            playerName: 'Chielini',
            position: 'defender',
            specials: 'D',
            kitNumber: 3,
            dribling: 5,
            defending: 16,
            shooting: 8,
            heading: 17,
            freekicks: 10,
            corner: 7,
        },
        {
            playerName: 'Bonucci',
            position: 'defender',
            specials: 'D',
            kitNumber: 5,
            dribling: 4,
            defending: 18,
            shooting: 6,
            heading: 19,
            freekicks: 10,
            corner: 7,
        },
        {
            playerName: 'De Ligt',
            position: 'defender',
            specials: 'D',
            kitNumber: 4,
            dribling: 8,
            defending: 17,
            shooting: 9,
            heading: 17,
            freekicks: 12,
            corner: 10,
        },
        {
            playerName: 'Alex Sandro',
            position: 'defender',
            specials: '/',
            kitNumber: 12,
            dribling: 13,
            defending: 13,
            shooting: 10,
            heading: 13,
            freekicks: 14,
            corner: 16,
        },
        {
            playerName: 'Cuardado',
            position: 'midfielder',
            specials: 'R',
            kitNumber: 2,
            dribling: 14,
            defending: 10,
            shooting: 12,
            heading: 12,
            freekicks: 14,
            corner: 17,
        },
        {
            playerName: 'McKennie',
            position: 'midfielder',
            specials: '/',
            kitNumber: 6,
            dribling: 10,
            defending: 13,
            shooting: 16,
            heading: 12,
            freekicks: 14,
            corner: 17,
        },
        {
            playerName: 'Ramsey',
            position: 'midfielder',
            specials: 'P',
            kitNumber: 8,
            dribling: 10,
            defending: 13,
            shooting: 16,
            heading: 12,
            freekicks: 16,
            corner: 16,
        },
        {
            playerName: 'Chiesa',
            position: 'midfielder',
            specials: 'R',
            kitNumber: 11,
            dribling: 13,
            defending: 6,
            shooting: 14,
            heading: 13,
            freekicks: 13,
            corner: 13,
        },
        {
            playerName: 'Dybala',
            position: 'forward',
            specials: 'Dr R',
            kitNumber: 10,
            dribling: 17,
            defending: 7,
            shooting: 16,
            heading: 12,
            freekicks: 16,
            corner: 15,
        },
        {
            playerName: 'Morata',
            position: 'forward',
            specials: 'S',
            kitNumber: 9,
            dribling: 15,
            defending: 7,
            shooting: 17,
            heading: 17,
            freekicks: 13,
            corner: 8,
        },
        {
            playerName: 'C. Ronaldo',
            position: 'forward',
            specials: 'Dr R S',
            kitNumber: 7,
            dribling: 20,
            defending: 6,
            shooting: 19,
            heading: 19,
            freekicks: 20,
            corner: 16,
        },
    ],
    // Man City
    [
        {
            playerName: 'Ederson',
            position: 'goalkeeper',
            specials: '/',
            kitNumber: 1,
            ratingGk: 18,
        },
        {
            playerName: 'Laporte',
            position: 'defender',
            specials: 'D',
            kitNumber: 4,
            dribling: 5,
            defending: 17,
            shooting: 7,
            heading: 16,
            freekicks: 9,
            corner: 7,
        },
        {
            playerName: 'Walker',
            position: 'defender',
            specials: 'R',
            kitNumber: 2,
            dribling: 10,
            defending: 14,
            shooting: 8,
            heading: 14,
            freekicks: 8,
            corner: 13,
        },
        {
            playerName: 'Mendy',
            position: 'defender',
            specials: '/',
            kitNumber: 3,
            dribling: 8,
            defending: 15,
            shooting: 8,
            heading: 14,
            freekicks: 7,
            corner: 10,
        },
        {
            playerName: 'Gundogan',
            position: 'midfielder',
            specials: 'P',
            kitNumber: 8,
            dribling: 12,
            defending: 10,
            shooting: 16,
            heading: 13,
            freekicks: 15,
            corner: 16,
        },
        {
            playerName: 'Fernandinho',
            position: 'midfielder',
            specials: 'D',
            kitNumber: 5,
            dribling: 11,
            defending: 16,
            shooting: 13,
            heading: 14,
            freekicks: 13,
            corner: 14,
        },
        {
            playerName: 'Mahrez',
            position: 'midfielder',
            specials: 'R',
            kitNumber: 6,
            dribling: 15,
            defending: 10,
            shooting: 15,
            heading: 11,
            freekicks: 13,
            corner: 15,
        },
        {
            playerName: 'B. Silva',
            position: 'midfielder',
            specials: '/',
            kitNumber: 12,
            dribling: 14,
            defending: 9,
            shooting: 15,
            heading: 10,
            freekicks: 14,
            corner: 16,
        },
        {
            playerName: 'de Bruyne',
            position: 'midfielder',
            specials: 'Dr P S',
            kitNumber: 11,
            dribling: 16,
            defending: 10,
            shooting: 17,
            heading: 12,
            freekicks: 18,
            corner: 19,
        },
        {
            playerName: 'Sterling',
            position: 'forward',
            specials: 'R',
            kitNumber: 7,
            dribling: 17,
            defending: 8,
            shooting: 15,
            heading: 11,
            freekicks: 11,
            corner: 12,
        },
        {
            playerName: 'Jesus',
            position: 'forward',
            specials: '/',
            kitNumber: 9,
            dribling: 16,
            defending: 7,
            shooting: 16,
            heading: 11,
            freekicks: 13,
            corner: 12,
        },
        {
            playerName: 'Aguero',
            position: 'forward',
            specials: 'Dr R S',
            kitNumber: 10,
            dribling: 17,
            defending: 6,
            shooting: 18,
            heading: 16,
            freekicks: 13,
            corner: 11,
        },
    ],
    // Real Madrid
    [
        {
            playerName: 'Courtois',
            position: 'goalkeeper',
            specials: '/',
            kitNumber: 1,
            ratingGk: 17,
        },
        {
            playerName: 'S. Ramos',
            position: 'defender',
            specials: 'D',
            kitNumber: 4,
            dribling: 12,
            defending: 18,
            shooting: 14,
            heading: 19,
            freekicks: 12,
            corner: 10,
        },
        {
            playerName: 'Varane',
            position: 'defender',
            specials: 'D',
            kitNumber: 5,
            dribling: 8,
            defending: 17,
            shooting: 7,
            heading: 17,
            freekicks: 10,
            corner: 8,
        },
        {
            playerName: 'Marcelo',
            position: 'defender',
            specials: 'R',
            kitNumber: 3,
            dribling: 14,
            defending: 14,
            shooting: 13,
            heading: 12,
            freekicks: 12,
            corner: 16,
        },
        {
            playerName: 'Kroos',
            position: 'midfielder',
            specials: 'P S',
            kitNumber: 8,
            dribling: 13,
            defending: 14,
            shooting: 15,
            heading: 11,
            freekicks: 17,
            corner: 16,
        },
        {
            playerName: 'Modric',
            position: 'midfielder',
            specials: 'P R S',
            kitNumber: 10,
            dribling: 15,
            defending: 11,
            shooting: 17,
            heading: 11,
            freekicks: 16,
            corner: 19,
        },
        {
            playerName: 'Casemiro',
            position: 'midfielder',
            specials: '/',
            kitNumber: 6,
            dribling: 14,
            defending: 15,
            shooting: 13,
            heading: 10,
            freekicks: 13,
            corner: 14,
        },
        {
            playerName: 'Isco',
            position: 'midfielder',
            specials: '/',
            kitNumber: 2,
            dribling: 14,
            defending: 8,
            shooting: 14,
            heading: 12,
            freekicks: 14,
            corner: 16,
        },
        {
            playerName: 'Hazard',
            position: 'midfielder',
            specials: 'Dr R',
            kitNumber: 7,
            dribling: 18,
            defending: 8,
            shooting: 16,
            heading: 11,
            freekicks: 14,
            corner: 16,
        },
        {
            playerName: 'Asensio',
            position: 'forward',
            specials: 'P',
            kitNumber: 11,
            dribling: 16,
            defending: 8,
            shooting: 15,
            heading: 10,
            freekicks: 15,
            corner: 17,
        },
        {
            playerName: 'Vinicius Jr.',
            position: 'forward',
            specials: 'R',
            kitNumber: 12,
            dribling: 16,
            defending: 7,
            shooting: 14,
            heading: 13,
            freekicks: 12,
            corner: 12,
        },
        {
            playerName: 'Benzema',
            position: 'forward',
            specials: 'R S',
            kitNumber: 9,
            dribling: 16,
            defending: 6,
            shooting: 19,
            heading: 18,
            freekicks: 10,
            corner: 10,
        },
    ],
    // Borussia Dortmund
    [
        {
            playerName: 'Burki',
            position: 'goalkeeper',
            specials: '/',
            kitNumber: 1,
            ratingGk: 16,
        },
        {
            playerName: 'Hummels',
            position: 'defender',
            specials: 'D',
            kitNumber: 5,
            dribling: 5,
            defending: 18,
            shooting: 10,
            heading: 18,
            freekicks: 8,
            corner: 6,
        },
        {
            playerName: 'Emre Can',
            position: 'defender',
            specials: '/',
            kitNumber: 4,
            dribling: 6,
            defending: 16,
            shooting: 8,
            heading: 16,
            freekicks: 7,
            corner: 7,
        },
        {
            playerName: 'Meunier',
            position: 'defender',
            specials: '/',
            kitNumber: 2,
            dribling: 8,
            defending: 13,
            shooting: 10,
            heading: 13,
            freekicks: 9,
            corner: 16,
        },
        {
            playerName: 'Witsel',
            position: 'midfielder',
            specials: 'D',
            kitNumber: 6,
            dribling: 10,
            defending: 14,
            shooting: 12,
            heading: 17,
            freekicks: 10,
            corner: 7,
        },
        {
            playerName: 'Bellingham',
            position: 'midfielder',
            specials: '/',
            kitNumber: 3,
            dribling: 14,
            defending: 10,
            shooting: 13,
            heading: 13,
            freekicks: 14,
            corner: 14,
        },
        {
            playerName: 'Brandt',
            position: 'midfielder',
            specials: '/',
            kitNumber: 8,
            dribling: 14,
            defending: 13,
            shooting: 11,
            heading: 13,
            freekicks: 13,
            corner: 13,
        },
        {
            playerName: 'G. Reyna',
            position: 'midfielder',
            specials: '/',
            kitNumber: 12,
            dribling: 15,
            defending: 7,
            shooting: 14,
            heading: 13,
            freekicks: 12,
            corner: 15,
        },
        {
            playerName: 'T. Hazard',
            position: 'midfielder',
            specials: '/',
            kitNumber: 10,
            dribling: 15,
            defending: 8,
            shooting: 14,
            heading: 11,
            freekicks: 13,
            corner: 14,
        },
        {
            playerName: 'J. Sancho',
            position: 'forward',
            specials: 'Dr R',
            kitNumber: 7,
            dribling: 16,
            defending: 7,
            shooting: 15,
            heading: 11,
            freekicks: 13,
            corner: 14,
        },
        {
            playerName: 'M. Reus',
            position: 'forward',
            specials: 'Dr R',
            kitNumber: 7,
            dribling: 18,
            defending: 7,
            shooting: 17,
            heading: 13,
            freekicks: 17,
            corner: 16,
        },

        {
            playerName: 'Haaland',
            position: 'forward',
            specials: 'R S',
            kitNumber: 9,
            dribling: 17,
            defending: 6,
            shooting: 19,
            heading: 17,
            freekicks: 13,
            corner: 9,
        },
    ],
    // Empty
    [
        {
            playerName: '',
            position: 'goalkeeper',
            specials: '/',
            kitNumber: 1,
            ratingGk: 0,
        },
        {
            playerName: '',
            position: 'defender',
            specials: '',
            kitNumber: 0,
            dribling: 0,
            defending: 0,
            shooting: 0,
            heading: 0,
            freekicks: 0,
            corner: 0,
        },
        {
            playerName: '',
            position: 'defender',
            specials: '',
            kitNumber: 0,
            dribling: 0,
            defending: 0,
            shooting: 0,
            heading: 0,
            freekicks: 0,
            corner: 0,
        },
        {
            playerName: '',
            position: 'defender',
            specials: '',
            kitNumber: 0,
            dribling: 0,
            defending: 0,
            shooting: 0,
            heading: 0,
            freekicks: 0,
            corner: 0,
        },
        {
            playerName: '',
            position: 'midfielder',
            specials: '',
            kitNumber: 0,
            dribling: 0,
            defending: 0,
            shooting: 0,
            heading: 0,
            freekicks: 0,
            corner: 0,
        },
        {
            playerName: '',
            position: 'midfielder',
            specials: '',
            kitNumber: 0,
            dribling: 0,
            defending: 0,
            shooting: 0,
            heading: 0,
            freekicks: 0,
            corner: 0,
        },
        {
            playerName: '',
            position: 'midfielder',
            specials: '',
            kitNumber: 0,
            dribling: 0,
            defending: 0,
            shooting: 0,
            heading: 0,
            freekicks: 0,
            corner: 0,
        },
        {
            playerName: '',
            position: 'midfielder',
            specials: '',
            kitNumber: 0,
            dribling: 0,
            defending: 0,
            shooting: 0,
            heading: 0,
            freekicks: 0,
            corner: 0,
        },
        {
            playerName: '',
            position: 'midfielder',
            specials: '',
            kitNumber: 0,
            dribling: 0,
            defending: 0,
            shooting: 0,
            heading: 0,
            freekicks: 0,
            corner: 0,
        },
        {
            playerName: '',
            position: 'forward',
            specials: '',
            kitNumber: 0,
            dribling: 0,
            defending: 0,
            shooting: 0,
            heading: 0,
            freekicks: 0,
            corner: 0,
        },
        {
            playerName: '',
            position: 'forward',
            specials: '',
            kitNumber: 0,
            dribling: 0,
            defending: 0,
            shooting: 0,
            heading: 0,
            freekicks: 0,
            corner: 0,
        },
        {
            playerName: '',
            position: 'forward',
            specials: '',
            kitNumber: 0,
            dribling: 0,
            defending: 0,
            shooting: 0,
            heading: 0,
            freekicks: 0,
            corner: 0,
        },
    ],
];
