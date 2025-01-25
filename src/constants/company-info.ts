import { routes } from './routing';

export const email = 'info@krokus.lv';

export const tels = ['(+371) 259 073 00', '(+371) 200 303 06'];

export const schedule = ['Pr. - Pk. 09:00 - 20:00', 'Se.-Sv. 09:00 - 16:00'];

export const regions = [
  { value: '+371', label: '+371' },
  { value: '+7', label: '+7' },
];

export const address = 'Artilērijas iela 25, Rīga';

export const NAVS = [
  {
    title: 'Klientiem',
    links: [
      {
        name: 'Apmaksa',
        link: '#!',
      },
      {
        name: 'Kā Pasūtīt',
        link: '#!',
      },
      {
        name: 'Piegādes laiks un nosacījumi',
        link: '#!',
      },
      {
        name: 'Distances līgums un garantijas',
        link: '#!',
      },
      {
        name: 'Drošie maksājumi',
        link: '#!',
      },
      {
        name: 'Privātuma un datu uzglabāšanas politika',
        link: '#!',
      },
      {
        name: 'Korporatīvajiem klientiem',
        link: '#!',
      },
      {
        name: 'Pušķu apkope',
        link: '#!',
      },
      {
        name: 'Papildu pasūtījuma apmaksa',
        link: '#!',
      },
    ],
  },
  {
    title: 'Katalogs',
    links: [
      {
        name: 'Pušķi un kompozīcijas',
        link: routes.category('1'),
      },
      {
        name: 'Ziedi',
        link: routes.category('2'),
      },
      {
        name: 'Dāvanu komplekti',
        link: routes.category('3'),
      },
      {
        name: 'Aksesuāri',
        link: routes.category('4'),
      },
      {
        name: 'Dāvanu kartes',
        link: routes.category('5'),
      },
    ],
  },
];
