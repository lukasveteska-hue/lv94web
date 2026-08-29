"use strict";

const SITE_DATA = Object.freeze({
    contact: Object.freeze({
        phone: "+420 773 018 685",
        email: "info@lv94.cz",
        whatsapp: "+420 773 018 685",
    }),
    domain: "https://lv94.cz",
    analyticsId: "[DOPLNIŤ GA ID]",
    vehicle: Object.freeze({
        engine: "3.0 V6 diesel",
        power: "190 kW",
        drive: "4MATIC",
        transmission: Object.freeze({
            cs: "Automatická",
            en: "Automatic",
        }),
        towBar: Object.freeze({
            cs: "Ano",
            en: "Yes",
        }),
    }),
    pricing: Object.freeze({
        shortTerm: "3 600 Kč",
        mediumTerm: "3 300 Kč",
        longTerm: "2 900 Kč",
        deposit: "10 000 Kč",
    }),
});

const TRANSLATIONS = Object.freeze({
    cs: Object.freeze({
        pageTitle: "LV94 | Prémiový pronájem vozidel",
        metaDescription: "Pronájem prémiových vozidel Mercedes-Benz GLE pro firmy i soukromé klienty. Předání po celé České republice a dle dohody v rámci EU.",
        skipLink: "Přejít k obsahu",
        call: "Volat",
        primaryNavLabel: "Hlavní navigace",
        navRental: "Pronájem",
        navImport: "Dovoz",
        serviceTitle: "Pronájem prémiových vozidel",
        serviceBody: "Pronájem prémiových vozidel pro firmy i soukromé klienty. Předání a převzetí po celé České republice dle dohody, v rámci EU za individuální poplatek.",
        importBridgeTitle: "Dovoz a prověření vozidla",
        importBridgeText: "Pomůžeme vám s předkupní prohlídkou, měřením laku, diagnostikou, dopravou i registrací vozidla v České republice.",
        importBridgeButton: "Zjistit více",
        importFooterLink: "Dovoz vozidel",
        rentalFooterLink: "Pronájem vozidel",
        importPageTitle: "LV94 | Dovoz a prověření vozidla",
        importMetaDescription: "Předkupní prohlídka, měření laku, diagnostika, dovoz a registrace vozidla na klíč. Od prověření vozu až po české značky.",
        importHeroTitle: "Od inzerátu až po české značky",
        importHeroLead: "Prověříme vybrané vozidlo, změříme lak, načteme diagnostiku a připravíme přehledný výstup. Pokud se rozhodnete ke koupi, zajistíme dopravu až k vám a registraci vozidla v České republice.",
        importSendListing: "Poslat odkaz na vozidlo",
        importCallUs: "Zavolat",
        importServicesTitle: "Kompletní služba podle vašich potřeb",
        importServicesIntro: "Vyberte si samostatnou předkupní prohlídku, registraci vozidla nebo kompletní cestu od prověření až po předání.",
        importInspectionTitle: "Předkupní prohlídka",
        importInspectionPaint: "Měření tloušťky laku",
        importInspectionDiagnostics: "Diagnostika a chybové kódy",
        importInspectionVisual: "Vizuální kontrola vozidla",
        importInspectionDocuments: "Kontrola dokladů a identifikačních údajů",
        importInspectionReport: "Fotodokumentace a přehledný výstup",
        importTransportTitle: "Dovoz vozidla",
        importIndividualPrice: "Individuální cena",
        importTransportSeller: "Komunikace s prodávajícím",
        importTransportInfo: "Ověření základních informací",
        importTransportInspection: "Domluvení prohlídky",
        importTransportDelivery: "Doprava vozidla až k vám",
        importTransportCzechia: "Navazující kroky po příjezdu do ČR",
        importRegistrationTitle: "Registrace vozidla na klíč",
        importRegistrationDocuments: "Příprava potřebných podkladů",
        importRegistrationChecks: "Zajištění potřebných kontrol",
        importRegistrationAuthority: "Vyřízení registrace na základě plné moci",
        importRegistrationPlates: "Předání dokladů a registračních značek",
        inspectionDetailTitle: "Prověříme to podstatné",
        inspectionDetailLead: "Výsledkem není jen rychlý pohled na vůz. Dostanete konkrétní informace, které vám pomohou rozhodnout se před koupí.",
        inspectionPointPaintTitle: "Karoserie a lak",
        inspectionPointPaintText: "Digitální měření odhalí přelakované, opravované nebo tmelené díly.",
        inspectionPointDiagTitle: "Diagnostika",
        inspectionPointDiagText: "Načteme řídicí jednotky a zaznamenáme nalezené chybové kódy.",
        inspectionPointConditionTitle: "Stav vozidla",
        inspectionPointConditionText: "Zkontrolujeme interiér, pneumatiky, kapaliny, identifikační údaje a dostupné doklady.",
        inspectionPointOutputTitle: "Přehledný výstup",
        inspectionPointOutputText: "Obdržíte stručné shrnutí zjištění doplněné fotodokumentací.",
        importProcessTitle: "Jednoduchý postup",
        importProcessLead: "Od prvního kontaktu až po předání vozidla.",
        importStep1Title: "Pošlete odkaz nebo požadavky",
        importStep1Text: "Konkrétní inzerát, rozpočet nebo představu o vozidle.",
        importStep2Title: "Dohodneme rozsah služby",
        importStep2Text: "Samostatná prohlídka nebo kompletní zajištění.",
        importStep3Title: "Prověříme vozidlo",
        importStep3Text: "Lak, diagnostika, stav vozidla, doklady a fotografie.",
        importStep4Title: "Obdržíte výstup",
        importStep4Text: "Na základě zjištění se rozhodnete, zda vozidlo koupíte.",
        importStep5Title: "Zajistíme dopravu",
        importStep5Text: "Zakoupené vozidlo dopravíme až k vám.",
        importStep6Title: "Vyřídíme registraci",
        importStep6Text: "Připravíme podklady a dokončíme registraci v České republice.",
        importTermsTitle: "Jasné podmínky předem",
        importRegistrationCzechTitle: "Registrace vozidla v ČR",
        importByAgreement: "Dle dohody",
        importVatNote: "Uvedené ceny jsou konečné. Nejsme plátci DPH.",
        importTermsThirdParty: "Správní poplatky, STK, emise, pojištění a další související náklady nejsou zahrnuty v ceně služby a hradí se podle skutečnosti.",
        importTermsInspection: "Předkupní prohlídka je praktické orientační prověření vozidla a nenahrazuje detailní kontrolu v autorizovaném nebo specializovaném servisu.",
        importContactIntro: "Pošlete nám odkaz na vozidlo nebo svou představu. Ozveme se vám a domluvíme další postup.",
        serviceUseCasesTitle: "Pro koho je služba vhodná",
        serviceUseCaseTrailers: "Tažení různých přívěsů",
        serviceUseCaseCarTransport: "Přeprava automobilů pomocí autopřepravníku",
        serviceUseCaseBoats: "Tažení lodních přívěsů",
        serviceUseCaseMountains: "Cesty na hory",
        serviceUseCaseSkiing: "Cesty za lyžováním",
        serviceUseCaseFourWheelDrive: "Využití pohonu 4×4",
        previousPhoto: "Předchozí fotografie",
        nextPhoto: "Další fotografie",
        photoSlider: "Fotografie vozidla",
        sliderHint: "Posuňte galerii nebo použijte šipky",
        openPhoto: "Otevřít fotografii",
        closeGallery: "Zavřít galerii",
        galleryTitle: "Galerie vozidla",
        exteriorAlt: "Černý Mercedes-Benz GLE W166 s paketem AMG Line před moderní budovou",
        interiorAlt: "Černý interiér Mercedes-Benz GLE W166 s paketem AMG Line",
        detailAlt: "Detail přední části černého Mercedes-Benz GLE W166 AMG Line",
        exteriorLabel: "Exteriér",
        interiorLabel: "Interiér",
        detailLabel: "Detail",
        photoSeries: "W166 · AMG Line",
        engine: "Motor",
        power: "Výkon",
        drive: "Pohon",
        transmission: "Převodovka",
        towBar: "Tažné zařízení",
        pricingKicker: "Mercedes-Benz GLE",
        pricingTitle: "Ceník pronájmu",
        pricingShortTerm: "1–2 dny",
        pricingMediumTerm: "3–7 dní",
        pricingLongTerm: "8 a více dní",
        perDay: "/ den",
        pricingVatNote: "Uvedené ceny jsou konečné. Nejsme plátci DPH.",
        pricingDepositLabel: "Vratná kauce",
        pricingDeliveryNote: "Individuální přistavení vozidla se účtuje podle místa předání. Konečnou cenu a dostupnost vždy potvrdíme předem.",
        processLabel: "Postup pronájmu",
        processTitle: "Jednoduchý postup",
        processIntro: "Od prvního kontaktu k převzetí vozidla ve třech krocích.",
        stepContact: "Kontakt",
        stepContactDetail: "Telefon, WhatsApp nebo e-mail.",
        stepAgreement: "Dohoda podmínek",
        stepAgreementDetail: "Vozidlo, termín a místo převzetí.",
        stepCollection: "Převzetí vozidla",
        stepCollectionDetail: "Smlouva, předávací protokol — hotovo.",
        contactTitle: "Kontakt",
        contactIntro: "Pro přesnou cenovou nabídku a domluvení individuálních požadavků nás kontaktujte.",
        privacyLink: "Ochrana osobních údajů",
        cookieSettings: "Nastavení cookies",
        cookieTitle: "Nastavení cookies",
        cookieText: "Používáme technické úložiště pro zapamatování vaší volby a po souhlasu analytické cookies Google Analytics.",
        accept: "Přijmout",
        reject: "Odmítnout",
        moreInfo: "Více informací",
        privacyTitle: "Ochrana osobních údajů",
        legalUpdated: "Poslední aktualizace: 29. srpna 2026",
        privacyIntro: "Níže najdete stručné informace o tom, jak LV94 s. r. o. zpracovává osobní údaje návštěvníků webu a zájemců o naše služby.",
        privacyControllerTitle: "Správce osobních údajů",
        privacyControllerText: "Správcem osobních údajů je LV94 s. r. o., IČO 23855711, se sídlem Plzeňská 88, 353 01 Velká Hleďsebe, Česká republika. Kontakt pro otázky k ochraně osobních údajů: info@lv94.cz.",
        privacyDataTitle: "Jaké údaje zpracováváme a proč",
        privacyDataText: "Pokud nás kontaktujete telefonicky, e-mailem nebo přes WhatsApp, zpracováváme údaje, které nám sdělíte, zejména vaše jméno, kontaktní údaje, obsah komunikace a informace potřebné pro přípravu nabídky a poskytnutí objednané služby.",
        privacyAnalyticsText: "Po udělení souhlasu používáme Google Analytics 4 k získání souhrnných informací o návštěvnosti webu, například o navštívených stránkách, zařízení, prohlížeči a přibližné oblasti návštěvy.",
        privacyBasisTitle: "Právní základ",
        privacyBasisText: "Údaje z komunikace zpracováváme pro jednání o smlouvě, její plnění a splnění zákonných povinností. Analytické údaje zpracováváme pouze na základě vašeho souhlasu, který můžete kdykoli odvolat v nastavení cookies.",
        privacyRecipientsTitle: "Kdo může mít k údajům přístup",
        privacyRecipientsText: "V nezbytném rozsahu mohou údaje zpracovávat poskytovatelé hostingu, e-mailových a komunikačních služeb a po vašem souhlasu společnost Google jako poskytovatel Google Analytics. Při použití WhatsAppu se uplatní také pravidla služby WhatsApp společnosti Meta.",
        privacyRetentionTitle: "Doba uchování",
        privacyRetentionText: "Údaje uchováváme jen po dobu potřebnou k vyřízení vašeho požadavku, přípravě a plnění smlouvy a následně po dobu vyžadovanou právními předpisy. Analytická data se uchovávají podle nastavení Google Analytics; odvoláním souhlasu se zastaví další měření.",
        privacyRightsTitle: "Vaše práva",
        privacyRightsIntro: "Podle okolností máte zejména právo:",
        privacyRightAccess: "na přístup k osobním údajům a jejich opravu,",
        privacyRightDelete: "na výmaz nebo omezení zpracování,",
        privacyRightObject: "vznést námitku proti zpracování,",
        privacyRightPortability: "na přenositelnost údajů, pokud jsou splněny zákonné podmínky,",
        privacyRightConsent: "kdykoli odvolat souhlas s analytickými cookies,",
        privacyRightComplaint: "podat stížnost u dozorového úřadu.",
        privacyContactTitle: "Kontakt a dozorový úřad",
        privacyContactText: "Svá práva můžete uplatnit na adrese info@lv94.cz. Dozorovým úřadem je Úřad pro ochranu osobních údajů.",
        cookiesTitle: "Informace o cookies",
        cookiesIntro: "Web používá technické úložiště pro zapamatování vaší volby a po vašem souhlasu analytické cookies Google Analytics 4.",
        cookiesNecessaryTitle: "Technické úložiště",
        cookiesNecessaryText: "Hodnota lv94-analytics-consent v místním úložišti prohlížeče uchovává informaci, zda jste analytiku přijali nebo odmítli. Bez ní by se web nemohl spolehlivě řídit vaší volbou.",
        cookiesAnalyticsTitle: "Analytické cookies",
        cookiesAnalyticsText: "Google Analytics se načte až po kliknutí na tlačítko Přijmout. Pomáhá nám porozumět souhrnné návštěvnosti a používání webu. Při odmítnutí se analytika nenačte.",
        cookiesTableType: "Typ",
        cookiesTableName: "Název",
        cookiesTablePurpose: "Účel",
        cookiesTableDuration: "Doba",
        cookiesLocalType: "Místní úložiště",
        cookiesLocalPurpose: "Zapamatování vaší volby analytiky",
        cookiesLocalDuration: "Do změny volby nebo vymazání dat webu",
        cookiesGaType: "Cookie",
        cookiesGaPurpose: "Rozlišení návštěvníků a relací",
        cookiesGaStatePurpose: "Uchování stavu relace Google Analytics",
        cookiesGaDuration: "Až 2 roky od udělení souhlasu",
        cookiesChoiceTitle: "Jak změnit volbu",
        cookiesChoiceText: "Souhlas můžete kdykoli změnit pomocí odkazu Nastavení cookies v patičce. Cookies a místní úložiště můžete také odstranit v nastavení svého prohlížeče.",
        cookiesProviderTitle: "Poskytovatel analytiky",
        cookiesProviderText: "Službu Google Analytics poskytuje Google Ireland Limited. Další informace o zpracování údajů najdete v zásadách ochrany soukromí společnosti Google.",
        privacyPageTitle: "LV94 | Ochrana osobních údajů",
        cookiesPageTitle: "LV94 | Informace o cookies",
    }),
    en: Object.freeze({
        pageTitle: "LV94 | Premium Vehicle Rentals",
        metaDescription: "Premium Mercedes-Benz GLE vehicle rentals for business and private clients, with delivery across the Czech Republic and by arrangement throughout the EU.",
        skipLink: "Skip to content",
        call: "Call",
        primaryNavLabel: "Main navigation",
        navRental: "Rental",
        navImport: "Import",
        serviceTitle: "Premium vehicle rentals",
        serviceBody: "Premium vehicle rentals for business and private clients. Vehicle delivery and collection are available throughout the Czech Republic by arrangement and across the EU for an individual fee.",
        importBridgeTitle: "Vehicle import and inspection",
        importBridgeText: "We can help with a pre-purchase inspection, paint measurement, diagnostics, transport and vehicle registration in the Czech Republic.",
        importBridgeButton: "Find out more",
        importFooterLink: "Vehicle import",
        rentalFooterLink: "Vehicle rentals",
        importPageTitle: "LV94 | Vehicle import and inspection",
        importMetaDescription: "Pre-purchase vehicle inspection, paint measurement, diagnostics, transport and turnkey registration in the Czech Republic.",
        importHeroTitle: "From the listing to Czech licence plates",
        importHeroLead: "We inspect the selected vehicle, measure the paint, run diagnostics and prepare a clear report. If you decide to buy, we arrange transport directly to you and registration of the vehicle in the Czech Republic.",
        importSendListing: "Send us the vehicle listing",
        importCallUs: "Call us",
        importServicesTitle: "A complete service tailored to you",
        importServicesIntro: "Choose a standalone pre-purchase inspection, vehicle registration or the complete journey from inspection to handover.",
        importInspectionTitle: "Pre-purchase inspection",
        importInspectionPaint: "Paint thickness measurement",
        importInspectionDiagnostics: "Diagnostics and fault codes",
        importInspectionVisual: "Visual vehicle inspection",
        importInspectionDocuments: "Document and identification check",
        importInspectionReport: "Photo documentation and a clear report",
        importTransportTitle: "Vehicle import",
        importIndividualPrice: "Individual quote",
        importTransportSeller: "Communication with the seller",
        importTransportInfo: "Verification of basic information",
        importTransportInspection: "Arranging the inspection",
        importTransportDelivery: "Vehicle transport directly to you",
        importTransportCzechia: "Follow-up steps after arrival in the Czech Republic",
        importRegistrationTitle: "Turnkey vehicle registration",
        importRegistrationDocuments: "Preparation of the required documents",
        importRegistrationChecks: "Arranging the required inspections",
        importRegistrationAuthority: "Registration under power of attorney",
        importRegistrationPlates: "Handover of documents and licence plates",
        inspectionDetailTitle: "We check what matters",
        inspectionDetailLead: "The result is more than a quick look at the vehicle. You receive specific information to help you make an informed decision before buying.",
        inspectionPointPaintTitle: "Bodywork and paint",
        inspectionPointPaintText: "Digital measurement helps identify repainted, repaired or filled body panels.",
        inspectionPointDiagTitle: "Diagnostics",
        inspectionPointDiagText: "We scan the control units and record any fault codes found.",
        inspectionPointConditionTitle: "Vehicle condition",
        inspectionPointConditionText: "We check the interior, tyres, fluids, identification details and available documents.",
        inspectionPointOutputTitle: "Clear report",
        inspectionPointOutputText: "You receive a concise summary of the findings with photo documentation.",
        importProcessTitle: "A simple process",
        importProcessLead: "From the first contact to vehicle handover.",
        importStep1Title: "Send us a link or your requirements",
        importStep1Text: "A specific listing, your budget or the type of vehicle you are looking for.",
        importStep2Title: "We agree the scope",
        importStep2Text: "A standalone inspection or complete support.",
        importStep3Title: "We inspect the vehicle",
        importStep3Text: "Paint, diagnostics, vehicle condition, documents and photographs.",
        importStep4Title: "You receive the report",
        importStep4Text: "You decide whether to buy based on the findings.",
        importStep5Title: "We arrange transport",
        importStep5Text: "We deliver the purchased vehicle directly to you.",
        importStep6Title: "We complete registration",
        importStep6Text: "We prepare the documents and complete registration in the Czech Republic.",
        importTermsTitle: "Clear terms from the start",
        importRegistrationCzechTitle: "Vehicle registration in the Czech Republic",
        importByAgreement: "By agreement",
        importVatNote: "The prices shown are final. We are not VAT registered.",
        importTermsThirdParty: "Administrative fees, technical and emissions inspections, insurance and other related costs are not included in the service fee and are paid at actual cost.",
        importTermsInspection: "The pre-purchase inspection is a practical indicative vehicle check and does not replace a detailed inspection by an authorised or specialist service centre.",
        importContactIntro: "Send us the vehicle listing or tell us what you are looking for. We will contact you to agree the next steps.",
        serviceUseCasesTitle: "Who the service is suitable for",
        serviceUseCaseTrailers: "Towing different types of trailers",
        serviceUseCaseCarTransport: "Transporting cars with a car transporter",
        serviceUseCaseBoats: "Towing boat trailers",
        serviceUseCaseMountains: "Trips to the mountains",
        serviceUseCaseSkiing: "Skiing trips",
        serviceUseCaseFourWheelDrive: "Using four-wheel drive",
        previousPhoto: "Previous photo",
        nextPhoto: "Next photo",
        photoSlider: "Vehicle photos",
        sliderHint: "Drag the gallery or use the arrows",
        openPhoto: "Open photo",
        closeGallery: "Close gallery",
        galleryTitle: "Vehicle gallery",
        exteriorAlt: "Black Mercedes-Benz GLE W166 with AMG Line package in front of a modern building",
        interiorAlt: "Black Mercedes-Benz GLE W166 interior with AMG Line package",
        detailAlt: "Front detail of a black Mercedes-Benz GLE W166 AMG Line",
        exteriorLabel: "Exterior",
        interiorLabel: "Interior",
        detailLabel: "Detail",
        photoSeries: "W166 · AMG Line",
        engine: "Engine",
        power: "Power",
        drive: "Drive",
        transmission: "Transmission",
        towBar: "Tow bar",
        pricingKicker: "Mercedes-Benz GLE",
        pricingTitle: "Rental pricing",
        pricingShortTerm: "1–2 days",
        pricingMediumTerm: "3–7 days",
        pricingLongTerm: "8 days or more",
        perDay: "/ day",
        pricingVatNote: "The prices shown are final. We are not VAT registered.",
        pricingDepositLabel: "Refundable deposit",
        pricingDeliveryNote: "Individual vehicle delivery is priced according to the handover location. We always confirm the final price and availability in advance.",
        processLabel: "Rental process",
        processTitle: "A simple process",
        processIntro: "From first contact to vehicle collection in three simple steps.",
        stepContact: "Contact",
        stepContactDetail: "Phone, WhatsApp or email.",
        stepAgreement: "Agreement of terms",
        stepAgreementDetail: "Vehicle, date and collection location.",
        stepCollection: "Vehicle collection",
        stepCollectionDetail: "Agreement, handover report — done.",
        contactTitle: "Contact",
        contactIntro: "Contact us for an exact price quote and to discuss your individual requirements.",
        privacyLink: "Privacy Policy",
        cookieSettings: "Cookie Settings",
        cookieTitle: "Cookie Settings",
        cookieText: "We use technical storage to remember your choice and, with your consent, Google Analytics cookies.",
        accept: "Accept",
        reject: "Reject",
        moreInfo: "More information",
        privacyTitle: "Privacy Policy",
        legalUpdated: "Last updated: 29 August 2026",
        privacyIntro: "Below is a concise explanation of how LV94 s. r. o. processes personal data relating to website visitors and people interested in our services.",
        privacyControllerTitle: "Data controller",
        privacyControllerText: "The data controller is LV94 s. r. o., company ID 23855711, registered at Plzeňská 88, 353 01 Velká Hleďsebe, Czech Republic. Privacy contact: info@lv94.cz.",
        privacyDataTitle: "What data we process and why",
        privacyDataText: "If you contact us by phone, email or WhatsApp, we process the information you provide, in particular your name, contact details, communication content and the information required to prepare an offer and provide the ordered service.",
        privacyAnalyticsText: "After you give consent, we use Google Analytics 4 to obtain aggregated information about website traffic, such as pages visited, device, browser and approximate visit area.",
        privacyBasisTitle: "Legal basis",
        privacyBasisText: "We process communication data to take steps before entering into a contract, perform the contract and comply with legal obligations. We process analytics data only with your consent, which you can withdraw at any time in Cookie Settings.",
        privacyRecipientsTitle: "Who may access the data",
        privacyRecipientsText: "Where necessary, data may be processed by our hosting, email and communication service providers and, after your consent, by Google as the provider of Google Analytics. If you use WhatsApp, the privacy rules of Meta's WhatsApp service also apply.",
        privacyRetentionTitle: "Retention",
        privacyRetentionText: "We keep data only for as long as necessary to handle your request, prepare and perform a contract and subsequently for the period required by applicable law. Analytics data is retained according to Google Analytics settings; withdrawing consent stops further measurement.",
        privacyRightsTitle: "Your rights",
        privacyRightsIntro: "Depending on the circumstances, you have the right to:",
        privacyRightAccess: "access and correct your personal data,",
        privacyRightDelete: "request erasure or restriction of processing,",
        privacyRightObject: "object to processing,",
        privacyRightPortability: "data portability where the legal conditions are met,",
        privacyRightConsent: "withdraw analytics consent at any time,",
        privacyRightComplaint: "lodge a complaint with a supervisory authority.",
        privacyContactTitle: "Contact and supervisory authority",
        privacyContactText: "You can exercise your rights at info@lv94.cz. The Czech supervisory authority is the Office for Personal Data Protection.",
        cookiesTitle: "Cookie Information",
        cookiesIntro: "The website uses technical storage to remember your choice and, with your consent, Google Analytics 4 cookies.",
        cookiesNecessaryTitle: "Technical storage",
        cookiesNecessaryText: "The lv94-analytics-consent value in your browser's local storage records whether you accepted or rejected analytics. It is needed for the website to reliably respect your choice.",
        cookiesAnalyticsTitle: "Analytics cookies",
        cookiesAnalyticsText: "Google Analytics loads only after you click Accept. It helps us understand aggregated website traffic and usage. If you reject analytics, it does not load.",
        cookiesTableType: "Type",
        cookiesTableName: "Name",
        cookiesTablePurpose: "Purpose",
        cookiesTableDuration: "Duration",
        cookiesLocalType: "Local storage",
        cookiesLocalPurpose: "Remembering your analytics choice",
        cookiesLocalDuration: "Until you change the choice or delete website data",
        cookiesGaType: "Cookie",
        cookiesGaPurpose: "Distinguishing visitors and sessions",
        cookiesGaStatePurpose: "Keeping Google Analytics session state",
        cookiesGaDuration: "Up to 2 years after consent",
        cookiesChoiceTitle: "How to change your choice",
        cookiesChoiceText: "You can change your consent at any time using Cookie Settings in the footer. You can also delete cookies and local storage in your browser settings.",
        cookiesProviderTitle: "Analytics provider",
        cookiesProviderText: "Google Analytics is provided by Google Ireland Limited. More information about data processing is available in Google's Privacy Policy.",
        privacyPageTitle: "LV94 | Privacy Policy",
        cookiesPageTitle: "LV94 | Cookie Information",
    }),
});

const CONSENT_KEY = "lv94-analytics-consent";
let currentLanguage = "cs";
let analyticsLoaded = false;

function getPageType() {
    const path = window.location.pathname.toLowerCase();

    if (path.endsWith("/privacy.html") || path.endsWith("privacy.html")) {
        return "privacy";
    }

    if (path.endsWith("/cookies.html") || path.endsWith("cookies.html")) {
        return "cookies";
    }

    if (path.endsWith("/dovoz-vozidel.html") || path.endsWith("dovoz-vozidel.html")) {
        return "import";
    }

    return "home";
}

function applyPageTitle(language) {
    const pageType = getPageType();
    const translations = TRANSLATIONS[language];

    if (pageType === "privacy") {
        document.title = translations.privacyPageTitle;
        return;
    }

    if (pageType === "cookies") {
        document.title = translations.cookiesPageTitle;
        return;
    }

    if (pageType === "import") {
        document.title = translations.importPageTitle;
    } else {
        document.title = translations.pageTitle;
    }

    const description = document.querySelector('meta[name="description"]');
    const openGraphTitle = document.querySelector('meta[property="og:title"]');
    const openGraphDescription = document.querySelector('meta[property="og:description"]');
    const openGraphLocale = document.querySelector('meta[property="og:locale"]');

    const pageTitle = pageType === "import" ? translations.importPageTitle : translations.pageTitle;
    const metaDescription = pageType === "import" ? translations.importMetaDescription : translations.metaDescription;

    if (description) description.content = metaDescription;
    if (openGraphTitle) openGraphTitle.content = pageTitle;
    if (openGraphDescription) openGraphDescription.content = metaDescription;
    if (openGraphLocale) openGraphLocale.content = language === "cs" ? "cs_CZ" : "en_GB";
}

function applyLanguage(language) {
    if (!TRANSLATIONS[language]) return;

    currentLanguage = language;
    document.documentElement.lang = language;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.dataset.i18n;
        const value = TRANSLATIONS[language][key];
        if (value) element.textContent = value;
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
        const key = element.dataset.i18nAria;
        const value = TRANSLATIONS[language][key];
        if (value) element.setAttribute("aria-label", value);
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
        const key = element.dataset.i18nAlt;
        const value = TRANSLATIONS[language][key];
        if (value) element.setAttribute("alt", value);
    });

    document.querySelectorAll("[data-language]").forEach((button) => {
        const isActive = button.dataset.language === language;
        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
    });

    document.querySelectorAll(".language-switcher").forEach((switcher) => {
        switcher.dataset.activeLanguage = language;
    });

    document.querySelectorAll('[data-vehicle="towBar"]').forEach((element) => {
        element.textContent = SITE_DATA.vehicle.towBar[language];
    });

    document.querySelectorAll('[data-vehicle="transmission"]').forEach((element) => {
        element.textContent = SITE_DATA.vehicle.transmission[language];
    });

    applyPageTitle(language);
    window.dispatchEvent(new CustomEvent("lv94:languagechange"));
}

function populateProjectData() {
    document.querySelectorAll('[data-contact-value="phone"]').forEach((element) => {
        element.textContent = SITE_DATA.contact.phone;
    });

    document.querySelectorAll('[data-contact-value="email"]').forEach((element) => {
        element.textContent = SITE_DATA.contact.email;
    });

    const phoneNumber = SITE_DATA.contact.phone.replace(/\s/g, "");

    document.querySelectorAll('[data-contact-link="phone"]').forEach((element) => {
        element.setAttribute("href", `tel:${phoneNumber}`);
    });

    document.querySelectorAll('[data-contact-link="email"]').forEach((element) => {
        element.setAttribute("href", `mailto:${SITE_DATA.contact.email}`);
    });

    const whatsappNumber = SITE_DATA.contact.whatsapp.replace(/\D/g, "");
    const whatsappIsConfigured = (
        whatsappNumber.length >= 8
        && !SITE_DATA.contact.whatsapp.startsWith("[")
    );

    document.querySelectorAll('[data-contact-link="whatsapp"]').forEach((element) => {
        if (whatsappIsConfigured) {
            element.setAttribute("href", `https://wa.me/${whatsappNumber}`);
            element.setAttribute("target", "_blank");
            element.setAttribute("rel", "noopener noreferrer");
            element.removeAttribute("aria-disabled");
            return;
        }

        element.setAttribute("href", "#contact-title");
        element.setAttribute("aria-disabled", "true");
        element.addEventListener("click", (event) => event.preventDefault());
    });

    Object.entries(SITE_DATA.vehicle).forEach(([key, value]) => {
        document.querySelectorAll(`[data-vehicle="${key}"]`).forEach((element) => {
            element.textContent = typeof value === "object" ? value[currentLanguage] : value;
        });
    });

    Object.entries(SITE_DATA.pricing).forEach(([key, value]) => {
        document.querySelectorAll(`[data-pricing="${key}"]`).forEach((element) => {
            element.textContent = value;
        });
    });
}

function initLanguageSwitcher() {
    document.querySelectorAll("[data-language]").forEach((button) => {
        button.addEventListener("click", () => {
            applyLanguage(button.dataset.language);
        });
    });
}

function initLogoFallback() {
    document.querySelectorAll("[data-brand-logo]").forEach((image) => {
        const hideMissingLogo = () => {
            image.classList.add("is-missing");
            image.closest(".brand")?.classList.add("is-missing");
        };

        image.addEventListener("error", hideMissingLogo, { once: true });
        if (image.complete && image.naturalWidth === 0) hideMissingLogo();
    });
}

function initReveals() {
    const revealElements = [...document.querySelectorAll("[data-reveal]")];
    if (!revealElements.length) return;

    const hero = document.querySelector('[data-reveal="hero"]');
    window.requestAnimationFrame(() => hero?.classList.add("is-visible"));

    if (!("IntersectionObserver" in window)) {
        revealElements.forEach((element) => element.classList.add("is-visible"));
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            });
        },
        {
            rootMargin: "0px 0px -2% 0px",
            threshold: 0.08,
        },
    );

    revealElements.forEach((element) => {
        if (element === hero || element.dataset.reveal === "header") {
            element.classList.add("is-visible");
        } else {
            observer.observe(element);
        }
    });
}

function initSlider() {
    const slider = document.querySelector("[data-slider]");
    if (!slider) return;

    const viewport = slider.querySelector("[data-slider-viewport]");
    const slides = [...slider.querySelectorAll("[data-slide]")];
    const dots = [...document.querySelectorAll("[data-slider-dot]")];
    const previousButton = slider.querySelector("[data-slider-prev]");
    const nextButton = slider.querySelector("[data-slider-next]");
    const currentLabel = document.querySelector("[data-slider-current]");
    const totalLabel = document.querySelector("[data-slider-total]");
    const counter = document.querySelector("[data-slider-counter]");
    const progress = document.querySelector("[data-slider-progress]");

    if (!viewport || !slides.length || !previousButton || !nextButton) return;

    let activeIndex = 0;
    let pointerId = null;
    let pointerStartX = 0;
    let scrollStart = 0;
    let scrollFrame = null;

    const updateActiveState = (index) => {
        activeIndex = Math.max(0, Math.min(slides.length - 1, index));

        slides.forEach((slide, slideIndex) => {
            slide.classList.toggle("is-active", slideIndex === activeIndex);
        });

        dots.forEach((dot, dotIndex) => {
            dot.classList.toggle("is-active", dotIndex === activeIndex);
        });

        previousButton.disabled = activeIndex === 0;
        nextButton.disabled = activeIndex === slides.length - 1;

        if (currentLabel) currentLabel.textContent = String(activeIndex + 1).padStart(2, "0");
        if (totalLabel) totalLabel.textContent = String(slides.length).padStart(2, "0");
        if (counter) {
            const label = currentLanguage === "cs"
                ? `Fotografie ${activeIndex + 1} z ${slides.length}`
                : `Photo ${activeIndex + 1} of ${slides.length}`;
            counter.setAttribute("aria-label", label);
        }
        if (progress) {
            progress.style.transform = `scaleX(${(activeIndex + 1) / slides.length})`;
        }
    };

    const getTargetScroll = (index) => {
        const slide = slides[index];
        return slide.offsetLeft - (viewport.clientWidth - slide.clientWidth) / 2;
    };

    const goToSlide = (index, behavior = "smooth") => {
        const nextIndex = Math.max(0, Math.min(slides.length - 1, index));
        viewport.scrollTo({
            left: getTargetScroll(nextIndex),
            behavior,
        });
        updateActiveState(nextIndex);
    };

    const findNearestSlide = () => {
        const viewportCenter = viewport.scrollLeft + viewport.clientWidth / 2;
        let nearestIndex = 0;
        let nearestDistance = Number.POSITIVE_INFINITY;

        slides.forEach((slide, index) => {
            const slideCenter = slide.offsetLeft + slide.clientWidth / 2;
            const distance = Math.abs(viewportCenter - slideCenter);
            if (distance < nearestDistance) {
                nearestDistance = distance;
                nearestIndex = index;
            }
        });

        return nearestIndex;
    };

    previousButton.addEventListener("click", () => goToSlide(activeIndex - 1));
    nextButton.addEventListener("click", () => goToSlide(activeIndex + 1));

    viewport.addEventListener("keydown", (event) => {
        if (event.key === "ArrowLeft") {
            event.preventDefault();
            goToSlide(activeIndex - 1);
        }

        if (event.key === "ArrowRight") {
            event.preventDefault();
            goToSlide(activeIndex + 1);
        }
    });

    viewport.addEventListener("scroll", () => {
        if (scrollFrame) return;

        scrollFrame = window.requestAnimationFrame(() => {
            updateActiveState(findNearestSlide());
            scrollFrame = null;
        });
    }, { passive: true });

    viewport.addEventListener("pointerdown", (event) => {
        if (event.pointerType !== "mouse" || event.button !== 0) return;
        if (event.target.closest("button")) return;

        pointerId = event.pointerId;
        pointerStartX = event.clientX;
        scrollStart = viewport.scrollLeft;
        viewport.classList.add("is-dragging");
        viewport.setPointerCapture(pointerId);
    });

    viewport.addEventListener("pointermove", (event) => {
        if (pointerId !== event.pointerId) return;
        viewport.scrollLeft = scrollStart - (event.clientX - pointerStartX);
    });

    const endDrag = (event) => {
        if (pointerId !== event.pointerId) return;
        viewport.releasePointerCapture(pointerId);
        pointerId = null;
        viewport.classList.remove("is-dragging");
        goToSlide(findNearestSlide());
    };

    viewport.addEventListener("pointerup", endDrag);
    viewport.addEventListener("pointercancel", endDrag);

    window.addEventListener("resize", () => goToSlide(activeIndex, "auto"));
    window.addEventListener("lv94:languagechange", () => updateActiveState(activeIndex));

    updateActiveState(0);
    window.requestAnimationFrame(() => goToSlide(0, "auto"));
}

function initGallery() {
    const dialog = document.querySelector("[data-gallery-dialog]");
    const slides = [...document.querySelectorAll("[data-slide]")];
    if (!dialog || !slides.length) return;

    const image = dialog.querySelector("[data-gallery-image]");
    const caption = dialog.querySelector("[data-gallery-caption]");
    const closeButton = dialog.querySelector("[data-gallery-close]");
    const previousButton = dialog.querySelector("[data-gallery-prev]");
    const nextButton = dialog.querySelector("[data-gallery-next]");
    const openButtons = [...document.querySelectorAll("[data-gallery-open]")];
    let activeIndex = 0;

    const updateGallery = (index) => {
        activeIndex = Math.max(0, Math.min(slides.length - 1, index));
        const slideImage = slides[activeIndex].querySelector("img");
        const slideLabel = slides[activeIndex].querySelector("figcaption span");
        const slideNote = slides[activeIndex].querySelector("figcaption small");

        if (image && slideImage) {
            image.src = slideImage.src;
            image.alt = slideImage.alt;
        }

        if (caption) {
            caption.textContent = [slideLabel?.textContent, slideNote?.textContent]
                .filter(Boolean)
                .join(" — ");
        }

        if (previousButton) previousButton.disabled = activeIndex === 0;
        if (nextButton) nextButton.disabled = activeIndex === slides.length - 1;
    };

    const closeGallery = () => {
        if (typeof dialog.close === "function") {
            dialog.close();
        } else {
            dialog.removeAttribute("open");
        }
    };

    openButtons.forEach((button) => {
        button.addEventListener("click", () => {
            updateGallery(Number(button.dataset.slideIndex || 0));
            if (typeof dialog.showModal === "function") {
                dialog.showModal();
            } else {
                dialog.setAttribute("open", "");
            }
            closeButton?.focus();
        });
    });

    closeButton?.addEventListener("click", closeGallery);
    previousButton?.addEventListener("click", () => updateGallery(activeIndex - 1));
    nextButton?.addEventListener("click", () => updateGallery(activeIndex + 1));

    dialog.addEventListener("click", (event) => {
        if (event.target === dialog) closeGallery();
    });

    dialog.addEventListener("keydown", (event) => {
        if (event.key === "ArrowLeft") {
            event.preventDefault();
            updateGallery(activeIndex - 1);
        }
        if (event.key === "ArrowRight") {
            event.preventDefault();
            updateGallery(activeIndex + 1);
        }
    });

    window.addEventListener("lv94:languagechange", () => {
        if (dialog.hasAttribute("open")) updateGallery(activeIndex);
    });
}

function initHeaderState() {
    const header = document.querySelector(".site-header");
    if (!header) return;

    let scrollFrame = null;
    const updateHeader = () => {
        header.classList.toggle("is-scrolled", window.scrollY > 28);
        scrollFrame = null;
    };

    window.addEventListener("scroll", () => {
        if (scrollFrame) return;
        scrollFrame = window.requestAnimationFrame(updateHeader);
    }, { passive: true });

    updateHeader();
}

function analyticsIsConfigured() {
    return Boolean(
        SITE_DATA.analyticsId
        && !SITE_DATA.analyticsId.startsWith("[")
        && !SITE_DATA.analyticsId.endsWith("]"),
    );
}

function loadAnalytics() {
    if (analyticsLoaded || !analyticsIsConfigured()) return;

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(SITE_DATA.analyticsId)}`;
    script.dataset.lv94Analytics = "true";
    document.head.append(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
        window.dataLayer.push(arguments);
    };

    window.gtag("consent", "default", {
        analytics_storage: "granted",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
    });
    window.gtag("js", new Date());
    window.gtag("config", SITE_DATA.analyticsId, {
        anonymize_ip: true,
        allow_google_signals: false,
        allow_ad_personalization_signals: false,
    });

    analyticsLoaded = true;
}

function deleteAnalyticsCookies() {
    document.cookie.split(";").forEach((cookie) => {
        const name = cookie.split("=")[0].trim();
        if (!name.startsWith("_ga") && name !== "_gid" && name !== "_gat") return;
        document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
    });
}

function disableAnalytics() {
    if (analyticsIsConfigured()) {
        window[`ga-disable-${SITE_DATA.analyticsId}`] = true;
    }

    if (typeof window.gtag === "function") {
        window.gtag("consent", "update", {
            analytics_storage: "denied",
        });
    }

    document.querySelectorAll("[data-lv94-analytics]").forEach((script) => script.remove());
    deleteAnalyticsCookies();
    analyticsLoaded = false;
}

function initCookieConsent() {
    const panel = document.querySelector("[data-cookie-panel]");
    if (!panel) return;

    const acceptButton = panel.querySelector("[data-cookie-accept]");
    const rejectButton = panel.querySelector("[data-cookie-reject]");
    const settingsButtons = [...document.querySelectorAll("[data-cookie-settings]")];
    const storedConsent = window.localStorage.getItem(CONSENT_KEY);

    const openPanel = () => {
        panel.hidden = false;
        document.body.classList.add("cookie-panel-open");
        window.requestAnimationFrame(() => acceptButton?.focus({ preventScroll: true }));
    };

    const closePanel = () => {
        panel.hidden = true;
        document.body.classList.remove("cookie-panel-open");
    };

    const openFromSettings = () => {
        openPanel();

        window.requestAnimationFrame(() => {
            const footer = document.querySelector(".site-footer");
            if (!footer) return;

            const overlap = footer.getBoundingClientRect().bottom - panel.getBoundingClientRect().top + 16;
            if (overlap <= 0) return;

            window.scrollBy({
                top: overlap,
                behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
            });
        });
    };

    const accept = () => {
        window.localStorage.setItem(CONSENT_KEY, "accepted");
        if (analyticsIsConfigured()) {
            window[`ga-disable-${SITE_DATA.analyticsId}`] = false;
        }
        loadAnalytics();
        closePanel();
    };

    const reject = () => {
        window.localStorage.setItem(CONSENT_KEY, "rejected");
        disableAnalytics();
        closePanel();
    };

    acceptButton?.addEventListener("click", accept);
    rejectButton?.addEventListener("click", reject);
    settingsButtons.forEach((button) => button.addEventListener("click", openFromSettings));

    if (storedConsent === "accepted") {
        loadAnalytics();
    } else if (storedConsent !== "rejected") {
        openPanel();
    }
}

populateProjectData();
initLanguageSwitcher();
initLogoFallback();
initReveals();
initSlider();
initGallery();
initHeaderState();
initCookieConsent();
applyLanguage("cs");
