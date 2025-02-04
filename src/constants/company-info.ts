import bears from '@@/react/components/illustrations/postcards/bear-on-the-stick.png';
import loveStick from '@@/react/components/illustrations/postcards/love-you-on-the-stick.png';
import whiteHeart from '@@/react/components/illustrations/postcards/white-heart-card.png';
import setOfLove from '@@/react/components/illustrations/postcards/set-of-love.png';
import freeCard from '@@/react/components/illustrations/postcards/free-card.png';

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

export const scheduleDeliver = [
	{
		id: 1,
		time: '09:00 - 20:00',
		type: 'Regular',
		price: '0,00 €',
	},
	{
		id: 2,
		time: '20:00 - 21:00',
		type: 'Express',
		price: '40,00 €',
	},
	{
		id: 3,
		time: '21:00 - 22:00',
		type: 'Night',
		price: '20,00 €',
	},
	{
		id: 4,
		time: '22:00 - 23:00',
		type: 'Night',
		price: '20,00 €',
	},
	{
		id: 5,
		time: '07:00 - 08:00',
		type: 'Regular',
		price: '0,00 €',
	},
	{
		id: 6,
		time: '08:00 - 09:00',
		type: 'Regular',
		price: '0,00 €',
	},
	{
		id: 7,
		time: '09:00 - 10:00',
		type: 'Regular',
		price: '0,00 €',
	},
];

export const tips = ['0%', '5%', '10%', '15%'];

export const postcards = [
	{
		id: 1,
		name: 'Bear on the stick',
		img: bears,
		price: '1,99 €',
	},
	{
		id: 2,
		name: 'Love You on the stick',
		img: loveStick,
		price: '1,99 €',
	},
	{
		id: 3,
		name: 'White heart card',
		img: whiteHeart,
		price: '1,99 €',
	},
	{
		id: 4,
		name: 'Set of love',
		img: setOfLove,
		price: '1,99 €',
	},
	{
		id: 5,
		name: 'Free card',
		img: freeCard,
		price: '0,00 €',
	},
];
