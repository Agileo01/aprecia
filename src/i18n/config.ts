export type Language = 'sk' | 'cs' | 'de' | 'en';

export const languages: Language[] = ['sk', 'cs', 'de', 'en'];

export const languageLabels: Record<Language, string> = {
  sk: 'SK',
  cs: 'CZ',
  de: 'DE',
  en: 'EN',
};

export const languageNames: Record<Language, string> = {
  sk: 'Slovenčina',
  cs: 'Čeština',
  de: 'Deutsch',
  en: 'English',
};

// Route keys used across the app
export type RouteKey =
  | 'home'
  | 'financnePoradenstvo'
  | 'transakcnePoradenstvo'
  | 'poradenstvoOcenovanie'
  | 'ocenovaniePodnikov'
  | 'ocenovanieDusevnehoVlastnictva'
  | 'ocenovanieInychZloziek'
  | 'znaleckaCinnost'
  | 'tim'
  | 'referencie'
  | 'odborneClanky'
  | 'kontakt'
  | 'ochranaOsobnychUdajov'
  | 'cookies'
  | 'podmienky';

// Translated route slugs per language
export const routeSlugs: Record<Language, Record<RouteKey, string>> = {
  sk: {
    home: '/',
    financnePoradenstvo: '/financne-poradenstvo',
    transakcnePoradenstvo: '/financne-poradenstvo/transakcne-poradenstvo',
    poradenstvoOcenovanie: '/financne-poradenstvo/poradenstvo-pri-ocenovani',
    ocenovaniePodnikov: '/financne-poradenstvo/poradenstvo-pri-ocenovani/ocenovanie-podnikov',
    ocenovanieDusevnehoVlastnictva: '/financne-poradenstvo/poradenstvo-pri-ocenovani/ocenovanie-dusevneho-vlastnictva',
    ocenovanieInychZloziek: '/financne-poradenstvo/poradenstvo-pri-ocenovani/ocenovanie-inych-zloziek-majetku',
    znaleckaCinnost: '/znalecka-cinnost',
    tim: '/tim',
    referencie: '/referencie',
    odborneClanky: '/odborne-clanky',
    kontakt: '/kontakt',
    ochranaOsobnychUdajov: '/ochrana-osobnych-udajov',
    cookies: '/cookies',
    podmienky: '/podmienky',
  },
  cs: {
    home: '/cs',
    financnePoradenstvo: '/cs/financni-poradenstvi',
    transakcnePoradenstvo: '/cs/financni-poradenstvi/transakcni-poradenstvi',
    poradenstvoOcenovanie: '/cs/financni-poradenstvi/poradenstvi-pri-ocenovani',
    ocenovaniePodnikov: '/cs/financni-poradenstvi/poradenstvi-pri-ocenovani/ocenovani-podniku',
    ocenovanieDusevnehoVlastnictva: '/cs/financni-poradenstvi/poradenstvi-pri-ocenovani/ocenovani-dusevniho-vlastnictvi',
    ocenovanieInychZloziek: '/cs/financni-poradenstvi/poradenstvi-pri-ocenovani/ocenovani-jinych-slozek-majetku',
    znaleckaCinnost: '/cs/znalecka-cinnost',
    tim: '/cs/tym',
    referencie: '/cs/reference',
    odborneClanky: '/cs/odborne-clanky',
    kontakt: '/cs/kontakt',
    ochranaOsobnychUdajov: '/cs/ochrana-osobnich-udaju',
    cookies: '/cs/cookies',
    podmienky: '/cs/podminky',
  },
  de: {
    home: '/de',
    financnePoradenstvo: '/de/finanzberatung',
    transakcnePoradenstvo: '/de/finanzberatung/transaktionsberatung',
    poradenstvoOcenovanie: '/de/finanzberatung/bewertungsberatung',
    ocenovaniePodnikov: '/de/finanzberatung/bewertungsberatung/unternehmensbewertung',
    ocenovanieDusevnehoVlastnictva: '/de/finanzberatung/bewertungsberatung/bewertung-geistigen-eigentums',
    ocenovanieInychZloziek: '/de/finanzberatung/bewertungsberatung/bewertung-anderer-vermoegenswerte',
    znaleckaCinnost: '/de/sachverstaendigentaetigkeit',
    tim: '/de/team',
    referencie: '/de/referenzen',
    odborneClanky: '/de/fachartikel',
    kontakt: '/de/kontakt',
    ochranaOsobnychUdajov: '/de/datenschutz',
    cookies: '/de/cookies',
    podmienky: '/de/bedingungen',
  },
  en: {
    home: '/en',
    financnePoradenstvo: '/en/financial-advisory',
    transakcnePoradenstvo: '/en/financial-advisory/transaction-advisory',
    poradenstvoOcenovanie: '/en/financial-advisory/valuation-advisory',
    ocenovaniePodnikov: '/en/financial-advisory/valuation-advisory/business-valuation',
    ocenovanieDusevnehoVlastnictva: '/en/financial-advisory/valuation-advisory/intellectual-property-valuation',
    ocenovanieInychZloziek: '/en/financial-advisory/valuation-advisory/other-asset-valuation',
    znaleckaCinnost: '/en/expert-witness',
    tim: '/en/team',
    referencie: '/en/references',
    odborneClanky: '/en/articles',
    kontakt: '/en/contact',
    ochranaOsobnychUdajov: '/en/privacy-policy',
    cookies: '/en/cookies',
    podmienky: '/en/terms',
  },
};
