import { Link } from "react-router-dom";
import logo from "@/assets/aprecia-logo.gif";

export const Footer = () => (
  <footer className="border-t border-border bg-secondary">
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-4 gap-10">
        <div>
          <img src={logo} alt="Aprecia" className="h-8 mb-4" />
          <p className="text-sm text-muted-foreground leading-relaxed">
            Nezávislá poradenská spoločnosť zameraná na finančné poradenstvo, transakčné procesy a oceňovanie.
          </p>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-foreground mb-4">Služby</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/financne-poradenstvo/transakcne-poradenstvo" className="hover:text-primary transition-colors">Transakčné poradenstvo</Link></li>
            <li><Link to="/financne-poradenstvo/poradenstvo-pri-ocenovani" className="hover:text-primary transition-colors">Poradenstvo pri oceňovaní</Link></li>
            <li><Link to="/znalecka-cinnost" className="hover:text-primary transition-colors">Znalecká činnosť</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-foreground mb-4">Spoločnosť</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/tim" className="hover:text-primary transition-colors">Tím</Link></li>
            <li><Link to="/referencie" className="hover:text-primary transition-colors">Referencie</Link></li>
            <li><Link to="/odborne-clanky" className="hover:text-primary transition-colors">Odborné články</Link></li>
            <li><Link to="/kontakt" className="hover:text-primary transition-colors">Kontakt</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-foreground mb-4">Právne informácie</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/ochrana-osobnych-udajov" className="hover:text-primary transition-colors">Ochrana osobných údajov</Link></li>
            <li><Link to="/cookies" className="hover:text-primary transition-colors">Cookies</Link></li>
            <li><Link to="/podmienky" className="hover:text-primary transition-colors">Podmienky</Link></li>
          </ul>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Aprecia s.r.o. Všetky práva vyhradené.
      </div>
    </div>
  </footer>
);
