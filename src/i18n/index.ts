import { sk } from './translations/sk';
import { cs } from './translations/cs';
import { de } from './translations/de';
import { en } from './translations/en';
import { Language, routeSlugs, RouteKey } from './config';
import { Translations } from './types';

export const translations: Record<Language, Translations> = { sk, cs, de, en };

export function getTranslations(lang: Language): Translations {
  return translations[lang];
}

export function getRoute(lang: Language, key: RouteKey): string {
  return routeSlugs[lang][key];
}

// Detect language from pathname
export function detectLanguage(pathname: string): Language {
  if (pathname.startsWith('/cs')) return 'cs';
  if (pathname.startsWith('/de')) return 'de';
  if (pathname.startsWith('/en')) return 'en';
  return 'sk';
}

// Find which route key matches the current pathname
export function findRouteKey(pathname: string): RouteKey | null {
  const lang = detectLanguage(pathname);
  const slugs = routeSlugs[lang];
  for (const [key, slug] of Object.entries(slugs)) {
    if (pathname === slug) return key as RouteKey;
  }
  return null;
}

// Get the equivalent path in another language
export function switchLanguagePath(currentPath: string, targetLang: Language): string {
  const currentLang = detectLanguage(currentPath);
  const currentSlugs = routeSlugs[currentLang];
  
  // Find the route key for current path
  for (const [key, slug] of Object.entries(currentSlugs)) {
    if (currentPath === slug) {
      return routeSlugs[targetLang][key as RouteKey];
    }
  }
  
  // Fallback to home
  return routeSlugs[targetLang].home;
}

export { type Language, type RouteKey } from './config';
export { languages, languageLabels, languageNames, routeSlugs } from './config';
export type { Translations } from './types';
