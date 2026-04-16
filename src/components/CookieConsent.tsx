import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { Button } from "@/components/ui/button";

const COOKIE_KEY = "aprecia-cookie-consent";

export const CookieConsent = () => {
  const { t, route } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) setVisible(true);
  }, []);

  const handleConsent = (value: "accepted" | "rejected") => {
    localStorage.setItem(COOKIE_KEY, value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-4 animate-in slide-in-from-bottom duration-500">
      <div className="max-w-4xl mx-auto bg-secondary border border-border rounded-lg shadow-lg p-5 flex flex-col sm:flex-row items-center gap-4">
        <p className="text-sm text-muted-foreground flex-1">
          {t.cookieConsent.text}{" "}
          <Link
            to={route("cookies")}
            className="underline text-primary hover:text-primary/80 transition-colors"
          >
            {t.cookieConsent.moreInfo}
          </Link>
        </p>
        <div className="flex gap-3 shrink-0">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleConsent("rejected")}
          >
            {t.cookieConsent.reject}
          </Button>
          <Button size="sm" onClick={() => handleConsent("accepted")}>
            {t.cookieConsent.accept}
          </Button>
        </div>
      </div>
    </div>
  );
};
