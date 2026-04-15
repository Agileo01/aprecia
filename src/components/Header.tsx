import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import logo from "@/assets/aprecia-logo.gif";
import { useLanguage } from "@/i18n/LanguageContext";
import { languages, languageLabels, Language } from "@/i18n/config";

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const location = useLocation();
  const { lang, t, route, switchPath } = useLanguage();

  const navItems = [
    { label: t.nav.home, path: route('home') },
    {
      label: t.nav.financnePoradenstvo,
      path: route('financnePoradenstvo'),
      children: [
        { label: t.nav.transakcnePoradenstvo, path: route('transakcnePoradenstvo') },
        { label: t.nav.poradenstvoOcenovanie, path: route('poradenstvoOcenovanie') },
      ],
    },
    { label: t.nav.znaleckaCinnost, path: route('znaleckaCinnost') },
    { label: t.nav.tim, path: route('tim') },
    { label: t.nav.referencie, path: route('referencie') },
    { label: t.nav.odborneClanky, path: route('odborneClanky') },
    { label: t.nav.kontakt, path: route('kontakt') },
  ];

  const isActive = (path: string) => {
    const homePath = route('home');
    if (path === homePath) return location.pathname === homePath;
    return location.pathname === path || location.pathname.startsWith(path + "/");
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-20">
        <Link to={route('home')} className="flex-shrink-0">
          <img src={logo} alt="Aprecia" className="h-10" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.path}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <Link
                  to={item.path}
                  className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${
                    isActive(item.path) ? "text-primary" : "text-foreground"
                  }`}
                >
                  {item.label}
                  <ChevronDown className="w-3.5 h-3.5" />
                </Link>
                {dropdownOpen && (
                  <div className="absolute top-full left-0 pt-2 w-64">
                    <div className="bg-background border border-border shadow-lg py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block px-4 py-2.5 text-sm hover:bg-secondary transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.path) ? "text-primary" : "text-foreground"
                }`}
              >
                {item.label}
              </Link>
            )
          )}

          {/* Language switcher */}
          <div
            className="relative"
            onMouseEnter={() => setLangOpen(true)}
            onMouseLeave={() => setLangOpen(false)}
          >
            <button className="flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors">
              <Globe className="w-4 h-4" />
              {languageLabels[lang]}
              <ChevronDown className="w-3 h-3" />
            </button>
            {langOpen && (
              <div className="absolute top-full right-0 pt-2 w-32">
                <div className="bg-background border border-border shadow-lg py-1">
                  {languages.map((l) => (
                    <Link
                      key={l}
                      to={switchPath(l)}
                      className={`block px-4 py-2 text-sm transition-colors ${
                        l === lang ? "text-primary font-medium" : "text-foreground hover:bg-secondary"
                      }`}
                      onClick={() => setLangOpen(false)}
                    >
                      {languageLabels[l]}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="max-w-6xl mx-auto px-6 py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2.5 text-sm font-medium hover:text-primary"
                >
                  {item.label}
                </Link>
                {item.children?.map((child) => (
                  <Link
                    key={child.path}
                    to={child.path}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 pl-4 text-sm text-muted-foreground hover:text-primary"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
            {/* Mobile language switcher */}
            <div className="pt-4 border-t border-border mt-4">
              <div className="flex gap-3">
                {languages.map((l) => (
                  <Link
                    key={l}
                    to={switchPath(l)}
                    onClick={() => setMobileOpen(false)}
                    className={`px-3 py-1.5 text-sm font-medium border transition-colors ${
                      l === lang
                        ? "border-primary text-primary"
                        : "border-border text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {languageLabels[l]}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
