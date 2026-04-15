import { createContext, useContext, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { Language, detectLanguage, getTranslations, getRoute, switchLanguagePath, RouteKey } from './index';
import { Translations } from './types';

interface LanguageContextType {
  lang: Language;
  t: Translations;
  route: (key: RouteKey) => string;
  switchPath: (targetLang: Language) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  
  const value = useMemo(() => {
    const lang = detectLanguage(location.pathname);
    return {
      lang,
      t: getTranslations(lang),
      route: (key: RouteKey) => getRoute(lang, key),
      switchPath: (targetLang: Language) => switchLanguagePath(location.pathname, targetLang),
    };
  }, [location.pathname]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
};
