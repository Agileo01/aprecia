import { Language } from './config';

export interface Translations {
  nav: {
    home: string;
    financnePoradenstvo: string;
    transakcnePoradenstvo: string;
    poradenstvoOcenovanie: string;
    znaleckaCinnost: string;
    tim: string;
    referencie: string;
    odborneClanky: string;
    kontakt: string;
  };
  index: {
    heroTitle: string;
    heroSubtitle: string;
    ctaContact: string;
    ctaServices: string;
    aboutTitle: string;
    aboutText: string;
    philosophyTitle: string;
    philosophyText: string;
    servicesTitle: string;
    services: { title: string; desc: string }[];
    whyTitle: string;
    reasons: string[];
    ctaSectionTitle: string;
    ctaSectionSubtitle: string;
  };
  financnePoradenstvo: {
    title: string;
    subtitle: string;
    areasTitle: string;
    areas: { title: string; desc: string }[];
  };
  transakcnePoradenstvo: {
    title: string;
    subtitle: string;
    situationsTitle: string;
    situations: string[];
    servicesTitle: string;
    services: string[];
  };
  poradenstvoOcenovanie: {
    title: string;
    subtitle: string;
    subpages: { title: string; desc: string }[];
  };
  ocenovaniePodnikov: {
    title: string;
    subtitle: string;
    purposesTitle: string;
    purposes: string[];
  };
  ocenovanieDusevnehoVlastnictva: {
    title: string;
    subtitle: string;
    assetsTitle: string;
    assets: string[];
  };
  ocenovanieInychZloziek: {
    title: string;
    subtitle: string;
    assetsTitle: string;
    assets: string[];
  };
  znaleckaCinnost: {
    title: string;
    subtitle: string;
    ocenovaniePodnikovTitle: string;
    ocenovaniePodnikovText: string;
    skodaTitle: string;
    skodaText: string;
    outputsTitle: string;
    outputs: string[];
    purposesTitle: string;
    purposes: string[];
  };
  tim: {
    title: string;
    subtitle: string;
    specializationTitle: string;
    externalTitle: string;
    externalText: string;
    team: {
      name: string;
      role: string;
      bio: string;
      bio2?: string;
      specializations: string[];
    }[];
  };
  referencie: {
    title: string;
    subtitle: string;
    disclaimer: string;
    categories: { title: string; items: string[] }[];
  };
  odborneClanky: {
    title: string;
    subtitle: string;
    newsletterTitle: string;
    newsletterSubtitle: string;
    newsletterPlaceholder: string;
    newsletterButton: string;
  };
  kontakt: {
    title: string;
    subtitle: string;
    skTitle: string;
    czTitle: string;
    openMaps: string;
    contactTitle: string;
    formTitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitButton: string;
    submitting: string;
    requiredError: string;
    emailClientOpened: string;
    emailClientOpenedDesc: string;
  };
  legal: {
    ochranaTitle: string;
    cookiesTitle: string;
    podmienkyTitle: string;
    placeholder: string;
  };
  footer: {
    description: string;
    servicesTitle: string;
    companyTitle: string;
    legalTitle: string;
    copyright: string;
    transakcnePoradenstvo: string;
    poradenstvoOcenovanie: string;
    znaleckaCinnost: string;
    tim: string;
    referencie: string;
    odborneClanky: string;
    kontakt: string;
    ochrana: string;
    cookies: string;
    podmienky: string;
  };
  common: {
    moreInfo: string;
    more: string;
  };
}

export type TranslationsMap = Record<Language, Translations>;
