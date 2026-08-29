# PROJECT_CONTEXT.md — LV94 web

Tento súbor je hlavný zdroj pravdy pre vytvorenie webstránky LV94. Pred začiatkom práce si ho celý prečítaj. Nevymýšľaj ceny, kontakty, doménu, právne texty ani technické údaje vozidla, ktoré nie sú uvedené alebo označené ako overené.

## 1. Cieľ projektu

Vytvor krátku, modernú a maximálne minimalistickú jednostránkovú webovú prezentáciu prémiovej značky LV94.

Hlavný cieľ webu:

- budovať prémiovú značku
- prezentovať jednu hlavnú službu a jedno vozidlo
- priviesť návštevníka k telefonickému alebo e-mailovému kontaktu

Web nesmie pôsobiť ako bežná lacná autopožičovňa, inzertný portál ani rozsiahly katalóg vozidiel.

## 2. Firma a značka

Verejná značka:

**LV94**

Právny názov:

**LV94 s. r. o.**

Firemné údaje:

- IČO: `23855711`
- DIČ: `CZ23855711`
- sídlo: `Plzeňská 88, 353 01 Velká Hleďsebe, Česká republika`

Hlavný trh je Česká republika. Služba môže byť po dohode dostupná aj klientom a na odovzdanie vozidla v ostatných krajinách EÚ.

## 3. Logo

Použi dodané logo LV94 CARS ako hlavné logo webu.

Očakávaná cesta v projekte:

```text
src/assets/images/lv94-logo.png
```

Pravidlá:

- zachovať pomer strán
- logo nedeformovať ani neprekresľovať
- nevytvárať náhradné textové logo
- používať ho na tmavom pozadí
- neprekrývať ho ďalšími nápismi alebo sloganom
- logo je v hlavičke zámerne väčšie, ale nesmie zväčšovať výšku samotnej hlavičky
- logo sa v úvodnej sekcii nepoužíva

## 4. Jazykové verzie

Web bude dvojjazyčný:

- čeština ako predvolený jazyk
- angličtina ako sekundárny jazyk

Prepínač jazyka je horizontálny posuvník medzi `CZ` a `EN`. Jazyk sa prepína bez načítania novej stránky.

Obe verzie musia mať rovnaký obsah. Texty v zdrojovom kóde ulož prehľadne, aby sa dali ľahko upravovať.

## 5. Presná štruktúra stránky

Poradie sekcií je finálne:

1. hlavička
2. úvodná sekcia so službou
3. ponuka vozidla
4. jednoduchý postup prenájmu
5. kontakt a pätička

Nevytváraj ďalšie obsahové sekcie ako „O nás“, referencie, blog, FAQ, výhody, partneri alebo novinky.

### 5.1 Hlavička

Minimalistická hlavička bez klasického menu a bez hamburger menu.

- vľavo malé logo
- vpravo telefón, e-mail a diskrétny prepínač `CZ / EN`
- na mobile použi kompaktné ikony alebo krátke kontaktné tlačidlá
- telefón je hlavná konverzná akcia

### 5.2 Úvodná sekcia

- úvodná sekcia je výrazne zmenšená na výšku oproti pôvodnému návrhu
- obsah je centrovaný a zarovnaný so zvyškom stránky
- logo sa v úvodnej sekcii nezobrazuje
- ako plnošírkové pozadie sa používa lokálny obrázok detailu vozidla `src/assets/images/hero-car-detail.png`
- obrázok má zostať dobre viditeľný; nepoužívaj naň príliš silné stmavenie alebo nízku opacity
- spodná časť hero obrázka musí plynulo prechádzať gradientom do čierneho pozadia bez ostrej hrany
- na širokých monitoroch sa hero obrázok stráca do čiernej aj na ľavom a pravom okraji, aby nebolo viditeľné jeho orezanie
- samostatný obrázok napravo sa nepoužíva
- hlavný nadpis je v množnom čísle: `Pronájem prémiových vozidel`
- horizontálna linka pod nadpisom začína naľavo presne s ľavým okrajom nadpisu, rovnako ako linka pri nadpise Mercedes-Benz
- bez sloganu a bez ďalšieho marketingového obsahu

### 5.3 Služby

Prezentuj iba jednu hlavnú službu:

**Prenájom prémiových vozidiel**

Služba je určená:

- firmám a podnikateľom
- súkromným osobám

Dôležitá informácia:

- vyzdvihnutie a odovzdanie vozidla je možné po dohode kdekoľvek v rámci Českej republiky
- v ostatných krajinách EÚ je možné odovzdanie a prevzatie za individuálne stanovený poplatok

Text má byť maximálne krátky. Nevytváraj viacero umelých kariet služieb.

Aktuálny český text:

> Pronájem prémiových vozidel pro firmy i soukromé klienty. Předání a převzetí po celé České republice dle dohody, v rámci EU za individuální poplatek.

Aktuálny anglický text:

> Premium vehicle rentals for business and private clients. Vehicle delivery and collection are available throughout the Czech Republic by arrangement and across the EU for an individual fee.

Pod hlavným textom je otvorený blok bez rámovania s nadpisom:

- česky: `Pro koho je služba vhodná`
- anglicky: `Who the service is suitable for`

Nadpis nie je celý verzálkami. Po stranách má jemné červené horizontálne línie, ktoré sa smerom von strácajú.

Blok obsahuje presne šesť minimalistických červených líniových ikon a textov:

1. ťahanie rôznych prívesov
2. preprava automobilov pomocou autoprepravníka
3. ťahanie lodných prívesov
4. cesty na hory
5. cesty za lyžovaním
6. využitie pohonu 4×4

Presné aktuálne texty položiek:

| Čeština | English |
| --- | --- |
| `Tažení různých přívěsů` | `Towing different types of trailers` |
| `Přeprava automobilů pomocí autopřepravníku` | `Transporting cars with a car transporter` |
| `Tažení lodních přívěsů` | `Towing boat trailers` |
| `Cesty na hory` | `Trips to the mountains` |
| `Cesty za lyžováním` | `Skiing trips` |
| `Využití pohonu 4×4` | `Using four-wheel drive` |

Na desktope sú položky v mriežke `3 × 2`, na mobile `2 × 3`. Nepridávaj okolo nich karty ani orámovanie.

### 5.4 Ponuka vozidla

Pri spustení webu prezentuj iba jedno vozidlo:

**Mercedes-Benz GLE 350 d 4MATIC**

Nevytváraj karty ďalších vozidiel, kategórie vozidiel ani text o pripravovaných kabrioletoch alebo športových autách.

Pri vozidle zobraz iba tieto parametre:

- motor
- výkon
- 4MATIC
- automatická prevodovka
- ťažné zariadenie

Dočasné ilustračné údaje pre prvú verziu:

- motor: `3.0 V6 diesel`
- výkon: `190 kW`
- pohon: `4MATIC`
- prevodovka: česky `Automatická`, anglicky `Automatic`
- ťažné zariadenie: `Áno / Yes`

Tieto technické údaje sú pracovné. Musia byť uložené na jednom prehľadnom mieste v kóde, aby sa dali jednoducho nahradiť. Nepridávaj ďalšie technické parametre, kilometrový limit, rok výroby ani rozsiahly opis.

Pod parametrami vozidla je schválený jednoduchý cenník:

- `1–2 dny`: `3 600 Kč / den`
- `3–7 dní`: `3 300 Kč / den`
- `8 a více dní`: `2 900 Kč / den`
- vratná kaucia: `10 000 Kč`

Spoločnosť aktuálne nie je platiteľom DPH. Verejná stránka preto uvádza ceny ako konečné a používa formuláciu `Nejsme plátci DPH.`

### 5.5 Fotografie vozidla

Použi horizontálny slider fotografií.

Požiadavky:

- manuálne posúvanie myšou a dotykom
- ovládanie šípkami
- bez agresívneho automatického prehrávania
- veľké fotografie exteriéru, interiéru a detailov
- plne responzívne správanie
- fotografie nesmú byť prekryté veľkým množstvom textu
- slider vytvor v čistom JavaScripte bez externej knižnice

Kým nebudú dodané fotografie, použi jasne pomenované lokálne placeholdery. Nesťahuj náhodné fotografie z internetu a nepoužívaj cudzie značkové fotografie bez súhlasu.

### 5.6 Postup prenájmu

Nad krokmi zobraz názov a krátky slogan:

Česky:

**Jednoduchý postup**

`Od prvního kontaktu k převzetí vozidla ve třech krocích.`

Anglicky:

**A simple process**

`From first contact to vehicle collection in three simple steps.`

Samotný postup obsahuje iba tri stručné kroky bez vysvetľujúcich odsekov:

Česky:

**Kontakt → Dohoda podmínek → Převzetí vozidla**

Krátke sivé upresnenia pod jednotlivými krokmi:

1. `Telefon, WhatsApp nebo e-mail.`
2. `Vozidlo, termín a místo převzetí.`
3. `Smlouva, předávací protokol — hotovo.`

Anglicky:

**Contact → Agreement of terms → Vehicle collection**

1. `Phone, WhatsApp or email.`
2. `Vehicle, date and collection location.`
3. `Agreement, handover report — done.`

Vizuálne pravidlá:

- používaj čísla `1`, `2`, `3` bez úvodnej nuly
- pod každým číslom je červená bodka
- horizontálna čiara vedie pod číslami a nesmie prechádzať cez text

### 5.7 Kontakt

Hlavné možnosti kontaktu:

- telefón: `+420 773 018 685`
- e-mail: `info@lv94.cz`
- WhatsApp: `+420 773 018 685`

Pravidlá:

- telefón musí byť klikateľný cez `tel:`
- e-mail musí byť klikateľný cez `mailto:`
- nevytváraj kontaktný formulár
- telefón je hlavné tlačidlo
- e-mail je sekundárna akcia
- WhatsApp je tretia kontaktná akcia so zeleným tlačidlom a logom WhatsApp
- WhatsApp odkaz sa otvára v novej karte cez `wa.me`
- poradie kontaktných tlačidiel je telefón, WhatsApp, e-mail
- kontaktné tlačidlá sú kompaktné, majú jemne zaoblené rohy a decentné orámovanie

Nad kontaktnými tlačidlami zobraz krátky text:

- česky: `Pro přesnou cenovou nabídku a domluvení individuálních požadavků nás kontaktujte.`
- anglicky: `Contact us for an exact price quote and to discuss your individual requirements.`

V pätičke stručne uveď právny názov firmy, IČO, DIČ a sídlo. Kontaktná časť má byť čistá a bez marketingového textu.

## 6. Ceny a rezervácia

- pri Mercedes-Benz GLE sa zobrazuje schválený cenník podľa dĺžky prenájmu a vratná kaucia
- ceny sú konečné; spoločnosť aktuálne nie je platiteľom DPH
- nevytváraj online rezervačný systém
- dostupnosť, konečná cena, miesto pristavenia a podmienky sa potvrdia individuálne telefonicky alebo e-mailom
- nepoužívaj tlačidlá „Rezervovať online“ alebo kalendár dostupnosti

## 7. Vizuálny smer

Web má byť:

- maximálne minimalistický
- moderný
- tmavý
- luxusný
- vizuálne čistý
- s veľkým množstvom voľného priestoru
- založený na kvalitných fotografiách a výraznej typografii

Nemá pôsobiť:

- lacno
- preplnene
- ako tuningový web
- ako inzertný portál
- ako generická šablóna autopožičovne

### Farebná paleta

Použi CSS premenné:

```css
:root {
  --color-bg: #0A0A0B;
  --color-surface: #151517;
  --color-text: #F3F3F1;
  --color-muted: #9A9A9F;
  --color-accent: #CE0713;
  --color-accent-hover: #E31B27;
}
```

Červenú používaj striedmo, najmä na hlavné tlačidlo, aktívny prvok a malé akcenty. Nepoužívaj veľké červené plochy.

Horizontálne linky pri hlavných nadpisoch majú používať rovnaký vizuálny systém ako linka pod `Mercedes-Benz GLE 350 d 4MATIC`. V úvodnej sekcii je linka zarovnaná naľavo so začiatkom nadpisu, nie centrovaná.

### Typografia

Vyber moderné, čisté bezpätkové písmo. Nepoužívaj dekoratívne, retro ani výrazne „racing“ fonty. Typografia má podporovať luxusný minimalizmus a musí byť dobre čitateľná na mobile.

Preferuj systémový font stack alebo jeden ľahký webfont. Nevkladaj veľké množstvo rezov písma.

Všetky hlavné nadpisy sekcií používajú rovnakú veľkosť, váhu, riadkovanie a prirodzenú kapitalizáciu bez automatického prevodu na verzálky. Zarovnanie nadpisov sa riadi kompozíciou konkrétnej sekcie.

## 8. Animácie

Použi výraznejšie, ale prémiové a plynulé animácie:

- elegantné odhalenie loga pri načítaní
- jemné prechody sekcií pri scrollovaní
- postupné zobrazenie fotografií a parametrov
- decentný paralaxný alebo svetelný efekt
- kvalitné hover efekty tlačidiel

Obmedzenia:

- animácie nesmú zdržiavať vstup na web
- nepoužívaj herné, blikajúce alebo agresívne efekty
- nepoužívaj ťažké animačné knižnice
- rešpektuj `prefers-reduced-motion`
- animácie musia zostať plynulé aj na mobile

## 9. Technické riešenie

Použi iba:

- HTML5
- CSS3
- čistý JavaScript

Nepoužívaj:

- React
- Vue
- Next.js
- Vite
- Tailwind
- Bootstrap
- WordPress
- databázu
- npm závislosti
- externú slider knižnicu

Web má byť statický, rýchly a ľahko nasaditeľný na bežný hosting.

Odporúčaná štruktúra:

```text
/
├── PROJECT_CONTEXT.md
├── Dockerfile
├── compose.yaml
├── db/
└── src/
    ├── index.html
    ├── css/
    │   └── style.css
    ├── js/
    │   └── script.js
    ├── assets/
    │   └── images/
    │       ├── lv94-logo.png
    │       ├── hero-car-detail.png
    │       └── vehicles/
    ├── privacy.html
    └── cookies.html
```

Prezentácia zostáva jednostránková. Súbory `privacy.html` a `cookies.html` sú iba právne informačné stránky a nemajú byť súčasťou hlavnej navigácie.

Vstupným súborom je `src/index.html`. Pôvodný testovací súbor `src/index.php` bol odstránený. Web je statický a nepoužíva databázu ani PHP logiku.

## 10. Responzivita a kvalita

Web musí fungovať na:

- mobiloch
- tabletoch
- notebookoch
- veľkých desktopoch

Požiadavky:

- mobile-first CSS
- žiadny horizontálny overflow mimo slidera
- dotykové ovládanie slidera
- jasné focus stavy pre klávesnicu
- primeraný kontrast textu
- optimalizované obrázky vo WebP alebo AVIF, ak budú dodané
- lazy loading fotografií mimo úvodnej obrazovky
- bez chýb v konzole
- rýchle načítanie

## 11. Google Analytics a cookies

Web bude používať:

- technické miestne úložisko na zapamätanie voľby súhlasu
- analytické cookies Google Analytics

Dočasný identifikátor:

```text
[DOPLNIŤ GA ID]
```

Požiadavky:

- Google Analytics nenačítaj pred udelením súhlasu
- cookie lišta musí byť v češtine aj angličtine
- návštevník musí vedieť analytické cookies prijať alebo odmietnuť
- nastavenie musí vedieť neskôr zmeniť
- nepoužívaj Meta Pixel ani marketingové cookies
- cookie lišta má byť minimalistická a nesmie zbytočne prekrývať web

V pätičke vytvor odkazy:

- `Ochrana osobních údajů / Privacy Policy`
- `Nastavení cookies / Cookie Settings`

Na stránkach ochrany osobných údajov a cookies je schválená stručná pracovná verzia textov v češtine a angličtine. Pred verejným spustením je vhodná právna kontrola.

## 12. SEO

Finálna doména je:

```text
https://lv94.cz
```

Pracovný názov stránky:

Česky:

```text
LV94 | Prémiový pronájem vozidel
```

Anglicky:

```text
LV94 | Premium Vehicle Rentals
```

Pracovný český meta description:

```text
Pronájem prémiových vozidel Mercedes-Benz GLE pro firmy i soukromé klienty. Předání po celé České republice a dle dohody v rámci EU.
```

Pracovný anglický meta description:

```text
Premium Mercedes-Benz GLE vehicle rentals for business and private clients, with delivery across the Czech Republic and by arrangement throughout the EU.
```

Pridaj základné Open Graph meta údaje s lokálnym placeholder obrázkom. Nevykonávaj keyword stuffing a nevytváraj skrytý SEO text.

## 13. Obsah, ktorý nesmie byť na webe

Nevkladaj:

- Mercedes-Benz E Cabriolet
- športové vozidlá ako aktuálnu ponuku
- verejné ceny
- online rezerváciu
- blog
- referencie alebo vymyslené hodnotenia
- počet klientov alebo rokov skúseností bez podkladov
- tvrdenia „najlepší“, „jediný“ alebo „číslo 1“
- fotografie stiahnuté bez súhlasu
- vymyslené kontaktné údaje
- neoverené právne tvrdenia
- zbytočne dlhé marketingové texty

## 14. Otvorené údaje pred zverejnením

Pred zverejnením zostáva doplniť alebo potvrdiť:

- `[DOPLNIŤ GA ID]`
- finálne podmienky prenájmu
- právnu kontrolu stručných textov ochrany osobných údajov a cookies

Web môže byť kompletne funkčný aj s placeholdermi, ale nesmie sa považovať za pripravený na verejné zverejnenie, kým nebudú doplnené.

## 15. Aktuálny stav implementácie

Prvá verzia webu je implementovaná a pushnutá do verejného GitHub repozitára:

```text
https://github.com/lukasveteska-hue/lv94web.git
```

Aktívna vetva je `main`.

Aktuálne implementované:

- statická česká a anglická verzia v jednej stránke
- väčšie logo v hlavičke bez zväčšenia hlavičky
- horizontálny jazykový posuvník `CZ / EN`
- kompaktná úvodná sekcia s lokálnym detailom vozidla na pozadí
- množné číslo `Pronájem prémiových vozidel` / `Premium vehicle rentals`
- linka pod hlavným nadpisom zarovnaná naľavo s nadpisom
- blok „Pro koho je služba vhodná“ so šiestimi ikonami
- slider s lokálnou generovanou sériou čierneho GLE W166 AMG Line: exteriér, interiér a detail
- česká prevodovka `Automatická`
- postup prenájmu s číslami `1`, `2`, `3`, červenými bodkami a správne umiestnenou čiarou
- tretie zelené kontaktné tlačidlo WhatsApp s lokálnou SVG ikonou
- cookie consent s blokovaním Google Analytics pred súhlasom
- informačné stránky `privacy.html` a `cookies.html`
- responzívna kontrola pri rozmeroch `1440 × 900` a `390 × 844`
- bez horizontálneho overflow a bez chýb alebo upozornení v konzole pri poslednej kontrole

Pri ďalšej práci:

- najprv si prečítaj celý tento súbor
- pokračuj z existujúcej implementácie; nevytváraj web odznova
- zachovaj všetky používateľom odsúhlasené vizuálne rozhodnutia uvedené vyššie
- pred úpravami skontroluj `git status` a aktuálnu vetvu
- po vizuálnych zmenách over desktop aj mobil a prepnutie `CZ / EN`
- nevymýšľaj chýbajúce kontakty, doménu, GA ID, právne texty, ceny ani technické údaje

Súbor `NEW_PROJECT_DOCKER_PROMPT.md` je iba lokálna pracovná poznámka a nie je súčasťou repozitára.

## 16. Pôvodná prvá úloha pre Codex — splnená

1. Skontroluj obsah aktuálneho lokálneho priečinka.
2. Použi tento súbor ako hlavný zdroj pravdy.
3. Vytvor kompletnú funkčnú prvú verziu webu v čistom HTML, CSS a JavaScripte.
4. Použi dodané logo z `assets/images/lv94-logo.png`.
5. Vytvor českú a anglickú jazykovú verziu v rámci jednej stránky.
6. Použi lokálne placeholdery pre chýbajúce fotografie a údaje.
7. Implementuj responzívny horizontálny slider bez externej knižnice.
8. Implementuj cookie consent tak, aby sa Google Analytics bez súhlasu nenačítal.
9. Po dokončení spusti lokálnu kontrolu a oprav chyby v HTML, CSS a JavaScripte.
10. Na konci stručne vypíš, ktoré placeholdery musí používateľ ešte doplniť.

Nevytváraj ďalšie funkcie alebo obsah bez výslovnej požiadavky používateľa.

## 17. Prémiové vizuálne doladenie

Používateľ odsúhlasil experimentálne modernejšie spracovanie na samostatnej vetve:

```text
codex/premium-polish
```

Bezpečná pôvodná verzia je uložená na `main` v commite:

```text
f26c780
```

V prémiovej vetve sú zámerne použité tieto úpravy:

- jemne sa zmenšujúca sklenená hlavička po odscrollovaní
- decentné striedanie tmavých odtieňov medzi sekciami
- galéria jedného veľkého záberu s číslovaním a progresovou linkou
- možnosť otvoriť fotografie v celoobrazovkovej galérii
- kompaktnejšie kontaktné tlačidlá; WhatsApp je tmavý so zeleným akcentom
- horizontálny postup na desktope a vertikálna časová os na mobile
- jemné mikroanimácie bez automatického prehrávania a bez rušivých efektov

Tieto úpravy nemenia schválený obsah, poradie sekcií, firemné údaje ani placeholdery. Ak používateľ vizuálne úpravy neschváli, pokračuj z vetvy `main`.

## 18. Aktuálne obrazové podklady

Používateľ odsúhlasil použitie generovaných automobilových vizuálov priamo na webe. Aktuálne sú v projekte:

```text
src/assets/images/hero-g-class-black-amg-multispoke-v4.webp
src/assets/images/og-lv94-premiovy-pronajem.jpg
src/assets/images/apple-touch-icon.png
src/assets/images/favicon-32x32.png
src/assets/images/vehicles/gle-w166-exterior-modern-hq.webp
src/assets/images/vehicles/gle-w166-interior-black-amg.webp
src/assets/images/vehicles/gle-w166-detail-black-amg.webp
```

Hero zobrazuje čierny Mercedes-Benz G-Class v tmavom štúdiovom detaile s veľkými konkávnymi 22-palcovými AMG multispoke diskami, ktoré sú v spodnej časti záberu prirodzene čiastočne odrezané. Prvá fotografia GLE zobrazuje vozidlo pred minimalistickou modernou budovou pri súmraku; ostatné zábery pokračujú interiérom a detailom. Galéria používa konzistentnú sériu čierneho faceliftového Mercedes-Benz GLE generácie W166 s vizuálnym paketom AMG Line. Pre zdieľanie sa používa samostatný obrázok 1200 × 630 s logom, GLE a textom `Prémiový pronájem vozidel`; značka má pripravenú aj favicon a Apple Touch ikonu.

## 19. Dovoz a prověření vozidla

Na výslovnú požiadavku používateľa vznikla samostatná podstránka:

```text
src/dovoz-vozidel.html
```

Podstránka je druhým pilierom ponuky LV94 a vizuálne nadväzuje na hlavnú stránku. Obsahuje:

- predkúpnu obhliadku s meraním laku, diagnostikou, vizuálnou kontrolou a fotodokumentáciou za `5 000 Kč`
- komunikáciu s predávajúcim, dohodnutie obhliadky a dovoz vozidla s formuláciou `Doprava vozidla až k vám`
- registráciu vozidla na kľúč za `5 000 Kč`
- šesťkrokový postup od zaslania inzerátu po registráciu
- informáciu, že správne poplatky, STK, emisie, poistenie a ďalšie súvisiace náklady nie sú zahrnuté v cene služby
- upozornenie, že predkúpna obhliadka je orientačné praktické preverenie a nenahrádza detailnú kontrolu v autorizovanom alebo špecializovanom servise
- českú a anglickú jazykovú verziu a rovnaké kontaktné možnosti ako hlavná stránka

Hlavička všetkých stránok obsahuje dve stručné položky `Pronájem` a `Dovoz`. Na hlavnej stránke odkaz `Pronájem` plynulo posunie návštevníka k sekcii Mercedes-Benz GLE s identifikátorom `#vozidlo`; z ostatných stránok smeruje na `index.html#vozidlo`. Odkaz `Dovoz` otvára `dovoz-vozidel.html`.

Používateľ výslovne nechce verejne komunikovať spôsob zabezpečenia prepravy ani uvádzať externého prepravcu. Používaj jednoduchú formuláciu, že LV94 zabezpečí dopravu vozidla až ku klientovi.

Podstránka používa obrazové podklady:

```text
src/assets/images/vehicle-inspection-hero-v1.webp
src/assets/images/og-lv94-dovoz-vozidel.jpg
```
