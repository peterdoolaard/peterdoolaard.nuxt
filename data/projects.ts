export interface Project {
	id: number;
	title: string;
	stack: string;
	url: string;
	description: string[];
}

const projects: Project[] = [
	{
		id: 1,
		title: 'Webapps voor kraamzorg',
		stack: 'Angular, TypeScript, SCSS',
		url: '',
		description: [
			'Dit omvangrijke project behelst het bouwen van een compleet nieuw front-end op een bestaande' +
			' verouderde applicatie. Als lid van een team met verschillende expertises was ik hier vanaf de greenfieldfase' +
			' bij betrokken.',
			'We hebben voor opdrachtgever ICT4Kraam twee applicaties gebouwd: een voor medewerkers en een voor klanten. Het' +
			' front-end is gebouwd met' +
			' Angular en aangesloten op een REST-API.',
			'Mijn belangrijkste taak bestond uit het bouwen en vormgeven van de user interface, het schrijven van' +
			' API-calls en het schrijven van black-box-tests. Ik had regelmatig contact met de back-enders. Daarnaast had' +
			' ik regelmatig overleg met de tester/gebruiker bij de opdrachtgever voor het oplossen van problemen en het begeleiden van builds.',
			'Omdat kraamzorgmedewerkers veel moeten administreren, hebben we extra aandacht besteed aan soepele' +
			' invoermogelijkheden, een duidelijke flow en beschrijvende foutmeldingen. De UI moest absoluut net zo goed zijn te bedienen op een telefoon als op een desktop.'
		]
	},
	{
		id: 2,
		title: 'Jaaroverzicht CIZ',
		stack: 'HTML, SCSS, SVG, JavaScript',
		url: 'https://www.ciz.nl/jaaroverzicht-2021/',
		description: [
			'Het Centrum Indicatiestelling Zorg (CIZ) is een onafhankelijke organisatie die beoordeelt of mensen in' +
			' aanmerking komen voor zorg uit de Wet langdurige zorg. Samen met een andere developer heb ik het digitale' +
			' jaarverslag gemaakt. Het ontwerp is geleverd door een bureau.',
			'De uitdaging zat in de positionering van de vele gelaagde SVG\'s en de wens om deze deels te animeren. Dit is' +
			' gerealiseerd door de HTML goed op te zetten, en de SVG\'s nauwkeurig te analyseren en te animeren met CSS.'
			]
	},
	{
		id: 3,
		title: 'Website Cow Hills',
		stack: 'HTML, SCSS, JavaScript, jQuery',
		url: 'https://www.cowhills.com/',
		description: [
			'Voor een aanbieder van retailtechnologie heeft een bureau een ontwerp gemaakt voor een marketingsite. Aan' +
			' deze one-pager was al gewerkt door ander team, maar dat dreigde de deadline te gaan missen. Daarna hebben' +
			' een collega en ik de opdracht gekregen.',
			'De grootste uitdaging zat in het vertalen van het ontwerp naar een responsive weergave. Uiteindelijk hebben we binnen de tijd en volgens de specificaties opgeleverd.'
			]
	},
	{
		id: 4,
		title: 'Online tool prijsplafond',
		stack: 'Nuxt, TypeScript, SCSS',
		url: 'https://www.degroeneoptimist.nl/prijsplafond-berekenen',
		description: [
			'Voor het blog De Groene Optimist heb ik meegewerkt aan een tool voor het prijsplafond voor gas' +
			' en elektriciteit. Met deze tool kan een gebruiker uitrekenen wat zijn verwachte uitgaven voor energie in' +
			' 2023 zullen zijn. Ik heb de user interface gebouwd en vormgegeven.',
			'Helaas is de tool ingehaald door de actualiteit, maar het was leuk om eraan te werken.'
			]
	},
	{
		id: 5,
		title: 'Online tool Rijksoverheid',
		stack: 'Vue, TypeScript, SCSS',
		url: '',
		description: [
			'Bij dit project was ik onderdeel van een team met verschillende expertises. In algemene zin gaat het om een online, meertalige standalone-applicatie voor het testen van nieuw beleid. De eisen voor functionaliteit, toegankelijkheid (WCAG 2.1) en ontwerp waren zeer strikt.',
			'Een gebruiker moet verschillende vragen doorlopen. Daarop zijn diverse antwoorden mogelijk. Elke variatie' +
			' geeft verschillende tekstfeedback met daarbinnen variabele componenten. Dit is gerealiseerd met Vue.',
			'Er was een pixelperfect ontwerp op desktopformaat. Voor weergave op tablets (en telefoon) hebben we zelf' +
			' oplossingen bedacht. De uitdaging zat vooral in het visueel in balans houden van de vele componenten en het' +
			' bewaken van de leesbaarheid.',
			'Mijn belangrijkste bijdrage zat in het vertalen van het ontwerp naar de applicatie.'
			]
	},
	{
		id: 6,
		title: 'Emzadi',
		stack: 'Nuxt, TypeScript, SCSS, AWS, Molly, Prisma',
		url: 'https//emzadi.online',
		description: [
			'Emzadi is een online applicatie voor het maken van (korte) herinneringsvideo\'s. Klanten kunnen foto\'s' +
			' uploaden, een template kiezen en de scènes samenstellen. Vervolgens wordt een video gerenderd die kan worden' +
			' gedownload en gedeeld.', 'Het project is volledig in eigen beheer ontwikkeld en gebouwd. Anderen in het' +
			' team hebben zich beziggehouden met de infrastructuur, het backend en de videofuncties op de server.', 'Mijn' +
			' taak bestond uit het vertalen van het ontwerp naar Vue-componenten.'
			]
	},
]

export default projects


