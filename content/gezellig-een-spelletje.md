# Gezellig, een spelletje

Je zit met de hele familie onder de kerstboom en de veilige gespreksonderwerpen raken uitgeput. Om het gezellig te houden stel je voor om een spelletje te doen. De meesten hebben wel zin in Scrabble, maar je kan die doos nergens vinden! Geen paniek, je bouwt gewoon je eigen spel. Met HTML en CSS timmer je dat bord zo in elkaar.

CSS Grid Layout is een van de beste toevoegingen aan CSS van de laatste jaren. Kort gezegd definieer je daarmee een raster van rijen en kolommen waarop je items plaatst, en die items kunnen meerdere rijen en kolommen overspannen. Het raster zelf kan volledig vastliggen of flexibel zijn. Zowel het aantal rijen en kolommen als de afmetingen van die rijen en kolommen kun je laten afhangen van de beschikbare ruimte.

Een van de grote voordelen is dat je dingen zo lekker makkelijk kunt stapelen. Niks`position: relative` en `position: absolute`. Plaats items gewoon in dezelfde kolom en rij. En posities schalen probleemloos mee met de container zonder gedoe met offsets.

Bij een CSS-grid heb je altijd een parentelement en childelementen nodig. De parent is de container die de definitie 
van 
het raster bevat en de children zijn de items die in het raster komen te staan. Zonder children heb je dus geen 
zichtbare content in het raster.

![Scrabblebord met letterblokjes die woorden vormen](/images/scrabblebord.png)

## Een raster voor het spelbord

Het ontwerp van een spelbord is een raster en bij Scrabble zie je dat heel duidelijk. Het bord bevat 225 vakjes verdeeld over een raster van 15 rijen en 15 kolommen. Je hebt dus 15 x 15 = 225 items nodig om het bord een gezicht te geven. Dat zijn 225 `span`-elementen waarvan de meeste een grijze achtergrond hebben. Een deel heeft een data-attribuut dat de bonus aangeeft, bijvoorbeeld `data-bonus=”3 x woord waarde”`. 

Zo ziet de rasterdefinitie eruit:

```css
.speelbord {
	display: grid;
	grid-template-columns: repeat(15, 4.25rem);
	grid-template-rows: repeat(15, 4.25rem);
}
```

Het aantal `span`-elementen is gelijk aan het aantal rasterplaatsen (cellen). Daardoor is het niet nodig om elk item expliciet op zijn plek te zetten. De items lopen in volgorde van de HTML vanzelf het raster in vanaf rij 1, kolom 1 naar rij 15, kolom 15. Je moet wel zelf uittellen welke items een data-attribuut moeten hebben.

## Een oplossing voor de letters

Ook de letters zijn rasteritems en moeten dus net als de bordvakjes in een rastercontainer staan. Het verschil is dat de letters een specifieke in het raster hebben. Ze kunnen dus sowieso niet automatisch het raster inlopen.

Je kúnt de letters onder het laatste `span`-element van het spelbord zetten. Daarmee voeg je ze toe aan het speelbordraster. Maar zodra je een letter in het raster positioneert, valt het speelbord uit elkaar. De gepositioneerde letter neemt namelijk de plek in van een bordvakje dat geen vaste plek heeft. Daardoor schuift dat bordvakje een positie op en dat doen ook alle vakjes daarna.

Je hebt de keus uit twee oplossingen:

- Geef alle 225 bordvakjes een positie in het raster met `grid-area: 1 / 1;` `grid-area: 1 / 2`; tot en met `grid-area: 15 / 15`.
- Maak een tweede rastercontainer voor de letters, met precies dezelfde eigenschappen als het speelbord. Dit raster leg je boven op het speelbordraster. Nu hoef je alleen de letteritems op hun plek te zetten.

De eerste oplossing is een krankzinnig monnikenwerk en alleen bruikbaar als je de feestdagen eigenlijk liever alleen doorbrengt.

Oplossing twee is veel minder werk en overzichtelijk, met alle letters bij elkaar in hun eigen container.

De rasters moeten natuurlijk precies op elkaar liggen. Met een extra raster is dat geen enkel probleem. Zet het `.speelbord` en het `.lettergrid` samen in een nieuwe container met een rasterdefinitie voor één rij en één kolom (dus één  cel):

```css
.buitengrid {
	display: grid;
	grid-template-columns: minmax(320px, 1fr);
	grid-template-rows: minmax(320px, 1fr);
	margin: 2px;
	max-inline-size: 1020px;
}
```

Deze ene cel is responsive. De minimale maat is 320px en daarboven krijgt de cel zoveel ruimte als er is. De eenheid fr (fraction) is speciaal voor de rasterlay-out toegevoegd aan CSS. Hij staat voor een evenredig deel van de beschikbare ruimte. Voorbeeld: twee kolommen van elk 1fr krijgen elk de helft van de beschikbare ruimte. Zijn ze elk 2fr, dan krijgen zo ook elk de helft. Is de instelling 2fr en 1fr, dan krijgen ze respectievelijk twee derde en een derde. Zo maak je elke gewenste verhouding.

Om ook de tekst en de vakjes responsive te maken is op het rootelement een tekstgrootte op basis van de viewport ingesteld:

```css
:root {
	font-size: min(1.55vmin, 23px);
}
```

Vervolgens plaats je het bordraster en het letterraster allebei in rij 1, kolom 1:

```css
.speelbord, .lettergrid {
	grid-area: 1 / 1;
}
```

De eigenschap `grid-area` is een korte notatie voor `grid-row-start`, `grid-column-start,` `grid-row-end` en `grid-column-end`. Laat je de eindwaarde weg, dan is het item vanzelf 1 rij bij 1 kolom. Je kunt ook schrijven `grid-area: 1 / 1 / 2 / 2`. (Gebruik `grid-area` ook om items in [gebieden met een naam](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas) te plaatsen.)

Voor de stapelvolgorde van het bord en de letters geldt de normale volgorderegel: later in de HTML ligt hoger op de stapel. Als het nodig is kun je de volgorde met `z-index` eenvoudig aanpassen. In de grid-context verander je met [z-index de stapelvolgorde zonder dat je position](https://w3c.github.io/csswg-drafts/css-grid/#z-order) op iets anders dan `static` hoeft in te stellen.

## De speciale bordvakjes

Met een algemene kindselector op het spelbord krijgen alle speelvakjes dezelfde basisopmaak. Die vakjes zijn 4rem groot, terwijl de rastercellen 4.25rem zijn. Door de vakjes te centreren in de cel blijft er zo rondom wat witruimte tussen de vakjes.

```css
.speelbord > * {
	align-items: center;
	background-color: lightgrey;
	block-size: 4rem;
	display: flex;
	font-family: sans-serif;
	font-variant: small-caps;
	inline-size: 4rem;
	text-align: center;
}
```

Elk vakje is een flexcontainer. De enige reden daarvoor is het makkelijke verticaal centreren. Het had wat dat betreft ook een rastercontainer kunnen zijn. Horizontaal is de tekst is gewoon gecentreerd met `text-align`.

Voor de speciale vakjes hangt de opmaak af van het data-attribuut `data-bonus`. De tekst van `data-bonus` wordt ingelezen als content voor het pseudo-element `::before`. Met de attribuutselector ‘waarde moet beginnen met’ worden de verschillende stijlen toegepast.

```css
[data-bonus]::before {
	content: attr(data-bonus);
}

[data-bonus^="3 x woord"] {
	background-color: red;
	box-shadow: 0 0 2px 1px red;
}
```

## Opmaak van de lettervakjes

De CSS voor de lettervakjes is wat uitgebreider, maar bijzonderheden zijn er niet. De letter komt uit een data-attribuut, net als de puntwaarde van de letter. Het vakje is een flexcontainer voor de uitlijning van de letter. De letterwaarde is absoluut gepositioneerd. Je zou dat allemaal kunnen vervangen door een raster, maar daar wordt de code niet beter of duidelijker van.

`<span class="letter" data-letter="F" data-waarde="4"></span>`

```css
.letter {
	align-items: center;
	background-color: hsl(33, 100%, 88%);
	block-size: 4rem;
	box-shadow: 1px 1px 4px hsl(33, 100%, 20%);
	color: hsl(33, 0%, 5%);
	cursor: pointer;
	display: flex;
	font-size: 2rem;
	font-variant: small-caps;
	inline-size: 4rem;
	justify-content: center;
	margin: 1px;
	padding: .5rem;
	position: relative;
	text-transform: capitalize;
	transform: translate(-1500px, -1500px);
}

.letter::before {
		content: attr(data-letter);
}

.letter::after {
	bottom: 0.5em;
	content: attr(data-waarde);
	font-size: 50%;
	position: absolute;
	right: 0.5em;
}
```

De regel  `transform: translate(-1500px, -1500px)`; plaatst alle letters buiten beeld, zodat ze bij het laden van de pagina met een animatie op hun plek gezet kunnen worden. Het is een eenvoudige translate-animatie, maar je kunt het natuurlijk zo gek maken als je wilt.

De trigger zit in de letterselectors, dat zijn allemaal genummerde kindselectors. De animatieregel bevat achtereenvolgens de naam van de animatie, de duur en het effect. Daarna komt de startvertraging en die is bij elke volgende letter wat langer, zodat de letters na elkaar worden geplaatst. Als laatste zorgt `forwards` ervoor dat het laatste beeld van de animatie blijft staan. Zonder die aanwijzing zou de letter gelijk weer verdwijnen, volgens de transformregel in de klasse `.letter`.

```css
.letter:nth-child(10) {
	grid-area: 6 / 6;
	animation: drop-letter .5s ease-in-out 2.0s forwards;
}

@keyframes drop-letter {
	0% {
		transform: translate(-1500px, -1500px);
	}
	50% {
		transform: translate(-250px, -250px);
	}
	100% {
		transform: translate(0, 0);
	}
}
```

Op dit punt heb je een scrabblebord waarop vanzelf letters worden geplaatst. Speelbaar is het nog niet. Daar ga ik een jaartje over nadenken.
