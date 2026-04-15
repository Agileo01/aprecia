import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/aprecia-logo.gif";

const navItems = [
  { label: "Domov", path: "/" },
  {
    label: "Finančné poradenstvo",
    path: "/financne-poradenstvo",
    children: [
      { label: "Transakčné poradenstvo", path: "/financne-poradenstvo/transakcne-poradenstvo" },
      { label: "Poradenstvo pri oceňovaní", path: "/financne-poradenstvo/poradenstvo-pri-ocenovani" },
    ],
  },
  { label: "Znalecká činnosť", path: "/znalecka-cinnost" },
  { label: "Tím", path: "/tim" },
  { label: "Referencie", path: "/referencie" },
  { label: "Odborné články", path: "/odborne-clanky" },
  { label: "Kontakt", path: "/kontakt" },
];

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(path + "/");

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-20">
        <Link to="/" className="flex-shrink-0">
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
                  isActive(item.path) && item.path !== "/" ? "text-primary" : item.path === "/" && location.pathname === "/" ? "text-primary" : "text-foreground"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
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
          </nav>
        </div>
      )}
    </header>
  );
};
