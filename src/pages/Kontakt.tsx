import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";

const Kontakt = () => (
  <Layout>
    <PageHero
      title="Kontakt"
      subtitle="Ak pripravujete transakciu, riešite spor alebo potrebujete stanoviť hodnotu majetku, radi s vami prediskutujeme možnosti spolupráce."
    />
    <section className="page-section">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="service-card">
          <h2 className="font-heading text-2xl font-semibold mb-6">Slovenská republika</h2>
          <div className="space-y-4 text-muted-foreground">
            <div className="flex gap-3">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Adresa bude doplnená</span>
            </div>
            <div className="flex gap-3">
              <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Telefón bude doplnený</span>
            </div>
            <div className="flex gap-3">
              <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span>E-mail bude doplnený</span>
            </div>
          </div>
        </div>
        <div className="service-card">
          <h2 className="font-heading text-2xl font-semibold mb-6">Česká republika</h2>
          <div className="space-y-4 text-muted-foreground">
            <div className="flex gap-3">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Adresa bude doplnená</span>
            </div>
            <div className="flex gap-3">
              <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span>Telefón bude doplnený</span>
            </div>
            <div className="flex gap-3">
              <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span>E-mail bude doplnený</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 bg-foreground text-background p-12 text-center">
        <h2 className="font-heading text-2xl font-semibold mb-3">Dohodnite si úvodnú konzultáciu</h2>
        <p className="text-background/70 mb-6">Kontaktujte nás a radi vám odpovieme na vaše otázky.</p>
        <Link
          to="mailto:info@aprecia.sk"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 font-medium hover:opacity-90 transition-opacity"
        >
          Napíšte nám <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  </Layout>
);

export default Kontakt;
