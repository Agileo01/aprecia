import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const areas = [
  {
    title: "Transakčné poradenstvo",
    desc: "Podpora pri predaji, kúpe alebo reštrukturalizácii podnikov vrátane nastavenia hodnoty a ekonomickej štruktúry transakcie.",
    path: "/financne-poradenstvo/transakcne-poradenstvo",
  },
  {
    title: "Poradenstvo pri oceňovaní",
    desc: "Stanovenie hodnoty podnikov, duševného vlastníctva a ďalších majetkových zložiek ako podklad pre strategické rozhodnutia, transakcie alebo právne konania.",
    path: "/financne-poradenstvo/poradenstvo-pri-ocenovani",
  },
];

const StaggerItem = ({ children, index }: { children: React.ReactNode; index: number }) => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  return (
    <div
      ref={ref}
      className={`transition-all duration-600 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      style={{ transitionDelay: isVisible ? `${index * 120}ms` : "0ms" }}
    >
      {children}
    </div>
  );
};

const FinancnePoradenstvo = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.12);

  return (
    <Layout>
      <PageHero
        title="Finančné poradenstvo"
        subtitle="Poskytujeme finančné poradenstvo v situáciách, kedy je potrebné prijímať významné vlastnícke či kapitálové rozhodnutia. Pomáhame klientom s určením hodnoty majetku, predbežným alebo následným vyhodnotením ekonomických dopadov týchto rozhodnutí."
      />
      <section className="page-section">
        <div
          ref={titleRef}
          className={`transition-all duration-700 ease-out ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="section-title mb-10">Naše hlavné oblasti</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {areas.map((a, i) => (
            <StaggerItem key={a.path} index={i}>
              <Link to={a.path} className="service-card group block h-full">
                <h3 className="font-heading text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">{a.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{a.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Viac informácií <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default FinancnePoradenstvo;
