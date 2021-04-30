# _locales/nl/tutorial

```template
let person = ""
let lung_capacity = 0
let diameter_bronchioli_mm = 0
function Control () {
    person = "person.Controle"
    lung_capacity = 6
    diameter_bronchioli_mm = 1
    IoTeach.Blow(person, lung_capacity, diameter_bronchioli_mm)
}
input.onButtonPressed(Button.A, function () {
    Control()
})
input.onButtonPressed(Button.B, function () {
    Asthma()
})
function Asthma () {
    person = "person.Asthma"
    lung_capacity = 6
    diameter_bronchioli_mm = 0.8
    IoTeach.Blow(person, lung_capacity, diameter_bronchioli_mm)
}
```
## Step 1

Welkom in de simulator van IoTeach!
In een post-corona wereld kunnen de leerlingen hun longcapaciteit meten door zo hard als ze kunnen op een propeller te blazen die verbonden is met een micro:bit (het kleine computertje linksboven op je scherm).
U hoeft in deze simulator geen programmeerblokken toe te voegen of te verwijderen! Later in de tutorial zullen we je vragen om enkele getallen te veranderen, maar eerst geven we je nog wat meer uitleg.

Laten we beginnen!

## Step 2

Deze simulator geeft je de kans om virtueel op een propeller te blazen die aangesloten is op je virtuele micro:bit.
De micro:bit zal dan de snelheid meten van de draaiende propeller en dit in een grafiek zetten.
Probeer dit uit door op de A-knop van je virtuele micro:bit te drukken. 

Een "console weergeven" balk zou moeten verschijnen onder de micro:bit. Klik erop om de grafiek te bekijken.

## Step 3 

De grafiek die je ziet is van een gezonde/controle persoon die op een propeller blaast.
Laten we eens kijken hoe deze plot eruit ziet als een persoon met astma op een propeller blaast.
Doe dit door op de B knop van de virtuele micro:bit te drukken.
Je kunt de beide grafieken tegelijkertijd zien door eerst op de A knop te drukken (gezond) en direct daarna op de B knop (astma)

## Step 4

Zie je een verschil? Dit illustreert hoe de longfunctie van individuen gemeten kan worden!
Twee parameters die de longfunctie beïnvloeden zijn de ``|variables:lung_capacity||`` en ``|variables:diameter_bronchioli_mm|``.
De longcapaciteit van een persoon wordt gemeten in liters. Dit geeft de totale hoeveelheid lucht in de longen weer. 
Een normale longinhoud is ongeveer 6 liter. 
Probeer de longcapaciteit van de controle- of astmapatiënt te veranderen naar 8 en kijk hoe dit de grafiek beïnvloedt!

## Step 5

De variabele diameter_bronchili is een beetje moeilijker te begrijpen. 
Misschien weet je nog uit je middelbare school dat je longen opgebouwd zijn uit buisjes die zich vertakken en steeds dunner worden tot ze eindigen in kleine belletjes. 
De kleinste buisjes worden de bronchioli genoemd. Bij astma worden deze bronchioli nog dunner waardoor het moeilijker wordt om te ademen. Je kunt dit vergelijken met ademen door een rietje. 
De normale diameter van de bronchioli is ongeveer 1 millimeter. 
Probeer de diameter van de bronchioli van de controle- of astmapatiënt te veranderen naar 1.2 en kijk hoe dit de grafiek beïnvloedt!
Zorg ervoor dat je een punt '.' gebruikt in plaats van een komma ',' wanneer je decimale getallen gebruikt.

## Step 6

Goed werk, je kent nu de basis van de biologie die IoTeach zal integreren met IoT.
Je kunt nog wat meer spelen met de twee variabelen of verder de andere functies van onze booth ontdekken!
En als je meer wilt programmeren, probeer dan de MakeCode tutorial die bij IoTeach wordt geleverd [hier](https://makecode.microbit.org/#tutorial:github:99enriqued/receiver-tutorial/tutorial).