"use strict";

const SITE_DATA = Object.freeze({
    contact: Object.freeze({
        phone: "[DOPLNIŤ TELEFÓN]",
        email: "[DOPLNIŤ E-MAIL]",
    }),
    domain: "[DOPLNIŤ DOMÉNU]",
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
});

const TRANSLATIONS = Object.freeze({
    cs: Object.freeze({
        pageTitle: "LV94 | Prémiový pronájem vozidel",
        metaDescription: "Pronájem prémiových vozidel Mercedes-Benz GLE pro firmy i soukromé klienty. Předání po celé České republice a dle dohody v rámci EU.",
        skipLink: "Přejít k obsahu",
        call: "Volat",
        serviceTitle: "Pronájem prémiových vozidel",
        serviceBody: "Pronájem prémiových vozidel pro firmy i soukromé klienty. Předání a převzetí po celé České republice dle dohody, v rámci EU za individuální poplatek.",
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
        exteriorAlt: "Exteriér vozidla — fotografie bude doplněna",
        interiorAlt: "Interiér vozidla — fotografie bude doplněna",
        detailAlt: "Detail vozidla — fotografie bude doplněna",
        exteriorLabel: "Exteriér",
        interiorLabel: "Interiér",
        detailLabel: "Detail",
        photoPending: "Fotografie bude doplněna",
        engine: "Motor",
        power: "Výkon",
        drive: "Pohon",
        transmission: "Převodovka",
        towBar: "Tažné zařízení",
        processLabel: "Postup pronájmu",
        stepContact: "Kontakt",
        stepAgreement: "Dohoda podmínek",
        stepCollection: "Převzetí vozidla",
        contactTitle: "Kontakt",
        privacyLink: "Ochrana osobních údajů",
        cookieSettings: "Nastavení cookies",
        cookieTitle: "Nastavení cookies",
        cookieText: "Používáme nezbytné cookies a s vaším souhlasem analytické cookies Google Analytics.",
        accept: "Přijmout",
        reject: "Odmítnout",
        moreInfo: "Více informací",
        privacyTitle: "Ochrana osobních údajů",
        privacyPlaceholder: "[DOPLNIT FINÁLNÍ TEXT OCHRANY OSOBNÍCH ÚDAJŮ]",
        cookiesTitle: "Informace o cookies",
        cookiesPlaceholder: "[DOPLNIT FINÁLNÍ TEXT INFORMACÍ O COOKIES]",
        privacyPageTitle: "LV94 | Ochrana osobních údajů",
        cookiesPageTitle: "LV94 | Informace o cookies",
    }),
    en: Object.freeze({
        pageTitle: "LV94 | Premium Vehicle Rentals",
        metaDescription: "Premium Mercedes-Benz GLE vehicle rentals for business and private clients, with delivery across the Czech Republic and by arrangement throughout the EU.",
        skipLink: "Skip to content",
        call: "Call",
        serviceTitle: "Premium vehicle rentals",
        serviceBody: "Premium vehicle rentals for business and private clients. Vehicle delivery and collection are available throughout the Czech Republic by arrangement and across the EU for an individual fee.",
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
        exteriorAlt: "Vehicle exterior — photo to be supplied",
        interiorAlt: "Vehicle interior — photo to be supplied",
        detailAlt: "Vehicle detail — photo to be supplied",
        exteriorLabel: "Exterior",
        interiorLabel: "Interior",
        detailLabel: "Detail",
        photoPending: "Photo to be supplied",
        engine: "Engine",
        power: "Power",
        drive: "Drive",
        transmission: "Transmission",
        towBar: "Tow bar",
        processLabel: "Rental process",
        stepContact: "Contact",
        stepAgreement: "Agreement of terms",
        stepCollection: "Vehicle collection",
        contactTitle: "Contact",
        privacyLink: "Privacy Policy",
        cookieSettings: "Cookie Settings",
        cookieTitle: "Cookie Settings",
        cookieText: "We use necessary cookies and, with your consent, Google Analytics cookies.",
        accept: "Accept",
        reject: "Reject",
        moreInfo: "More information",
        privacyTitle: "Privacy Policy",
        privacyPlaceholder: "[ADD FINAL PRIVACY POLICY TEXT]",
        cookiesTitle: "Cookie Information",
        cookiesPlaceholder: "[ADD FINAL COOKIE INFORMATION TEXT]",
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

    document.title = translations.pageTitle;

    const description = document.querySelector('meta[name="description"]');
    const openGraphTitle = document.querySelector('meta[property="og:title"]');
    const openGraphDescription = document.querySelector('meta[property="og:description"]');
    const openGraphLocale = document.querySelector('meta[property="og:locale"]');

    if (description) description.content = translations.metaDescription;
    if (openGraphTitle) openGraphTitle.content = translations.pageTitle;
    if (openGraphDescription) openGraphDescription.content = translations.metaDescription;
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
}

function populateProjectData() {
    document.querySelectorAll('[data-contact-value="phone"]').forEach((element) => {
        element.textContent = SITE_DATA.contact.phone;
    });

    document.querySelectorAll('[data-contact-value="email"]').forEach((element) => {
        element.textContent = SITE_DATA.contact.email;
    });

    document.querySelectorAll('[data-contact-link="phone"]').forEach((element) => {
        element.setAttribute("href", `tel:${SITE_DATA.contact.phone}`);
    });

    document.querySelectorAll('[data-contact-link="email"]').forEach((element) => {
        element.setAttribute("href", `mailto:${SITE_DATA.contact.email}`);
    });

    Object.entries(SITE_DATA.vehicle).forEach(([key, value]) => {
        document.querySelectorAll(`[data-vehicle="${key}"]`).forEach((element) => {
            element.textContent = typeof value === "object" ? value[currentLanguage] : value;
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

    updateActiveState(0);
    window.requestAnimationFrame(() => goToSlide(0, "auto"));
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

    window.gtag("js", new Date());
    window.gtag("config", SITE_DATA.analyticsId, {
        anonymize_ip: true,
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
initCookieConsent();
applyLanguage("cs");
