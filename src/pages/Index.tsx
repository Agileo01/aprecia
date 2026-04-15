import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ArrowRight, Shield, Scale, Globe, Lock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    title: "Transakčné poradenstvo",
    desc: "Podpora pri predaji alebo kúpe podniku, vstupe investora a nastavovaní ekonomickej štruktúry transakcie.",
    path: "/financne-poradenstvo/transakcne-poradenstvo",
  },
  {
    title: "Poradenstvo pri oceňovaní",
    desc: "Stanovenie hodnoty podnikov, duševného vlastníctva a ďalších zložiek majetku ako podklad pre strategické rozhodnutia.",
    path: "/financne-poradenstvo/poradenstvo-pri-ocenovani",
  },
  {
    title: "Znalecká činnosť",
    desc: "Aprecia s.r.o. je znalecká organizácia registrovaná Ministerstvom spravodlivosti SR, poskytujúca znalecké posudky v oblasti oceňovania podnikov.",
    path: "/znalecka-cinnost",
  },
];

const reasons = [
  { icon: Shield, text: "Nezávislé a objektívne posúdenie hodnoty" },
  { icon: Scale, text: "Kombinácia poradenskej a znaleckej expertízy" },
  { icon: Globe, text: "Medzinárodné metodiky a štandardy" },
  { icon: Globe, text: "Pôsobnosť v Slovenskej a Českej republike" },
  { icon: Lock, text: "Diskrétnosť a profesionálny prístup" },
];

const AnimatedSection = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { ref, isVisible } = useScrollAnimation(0.12);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
};

const StaggerItem = ({
  children,
  index,
  className = "",
}: {
  children: React.ReactNode;
  index: number;
  className?: string;
}) => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  return (
    <div
      ref={ref}
      className={`transition-all duration-600 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
      style={{ transitionDelay: isVisible ? `${index * 120}ms` : "0ms" }}
    >
      {children}
    </div>
  );
};

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="py-24 md:py-36 bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight animate-fade-in">
            Hodnota, ktorej môžete dôverovať
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl animate-fade-in" style={{ animationDelay: "150ms" }}>
            Pomáhame vlastníkom podnikov, investorom a právnym zástupcom prijímať rozhodnutia, ovplyvňujúce súčasnú alebo budúcu hodnotu ich majetku.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "300ms" }}>
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Kontaktujte nás
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/financne-poradenstvo"
              className="inline-flex items-center gap-2 border border-foreground text-foreground px-6 py-3 text-sm font-medium hover:bg-foreground hover:text-background transition-colors"
            >
              Naše služby
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* O nás */}
    <section className="page-section">
      <AnimatedSection>
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="section-title">O nás</h2>
            <p className="text-muted-foreground leading-relaxed">
              Aprecia je nezávislá poradenská spoločnosť zameraná na finančné poradenstvo, transakčné procesy a oceňovanie. Pôsobíme v Slovenskej a Českej republike a poskytujeme klientom riešenia, ktoré sú ekonomicky logické, metodicky obhájiteľné a prakticky využiteľné.
            </p>
          </div>
          <div>
            <h2 className="section-title">Naša filozofia</h2>
            <p className="text-muted-foreground leading-relaxed">
              Našou ambíciou je byť dôveryhodným partnerom v situáciách, kde je potrebné presné a nezávislé posúdenie hodnoty. Spájame odbornú expertízu s individuálnym prístupom ku každému klientovi.
            </p>
          </div>
        </div>
      </AnimatedSection>
    </section>

    {/* Služby */}
    <section className="bg-secondary py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <h2 className="section-title mb-12">Naše služby</h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <StaggerItem key={s.path} index={i}>
              <Link to={s.path} className="service-card group block h-full">
                <h3 className="font-heading text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {s.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Viac informácií <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </div>
      </div>
    </section>

    {/* Prečo Aprecia */}
    <section className="page-section">
      <AnimatedSection>
        <h2 className="section-title mb-10">Prečo Aprecia</h2>
      </AnimatedSection>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map((r, i) => (
          <StaggerItem key={i} index={i}>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary/10 flex items-center justify-center">
                <r.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-foreground font-medium text-sm leading-relaxed pt-2">{r.text}</p>
            </div>
          </StaggerItem>
        ))}
      </div>
    </section>

    {/* CTA */}
    <AnimatedSection>
      <section className="bg-foreground text-background py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4">
            Potrebujete stanoviť hodnotu alebo pripravujete transakciu?
          </h2>
          <p className="text-background/70 mb-8 text-lg">
            Kontaktujte nás a dohodnite si úvodnú konzultáciu.
          </p>
          <Link
            to="/kontakt"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 font-medium hover:opacity-90 transition-opacity"
          >
            Kontaktujte nás
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </AnimatedSection>
  </Layout>
);

export default Index;
