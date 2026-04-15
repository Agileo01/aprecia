import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { ArrowRight } from "lucide-react";

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

const FinancnePoradenstvo = () => (
  <Layout>
    <PageHero
      title="Finančné poradenstvo"
      subtitle="Poskytujeme finančné poradenstvo v situáciách, kedy je potrebné prijímať významné vlastnícke či kapitálové rozhodnutia. Pomáhame klientom s určením hodnoty majetku, predbežným alebo následným vyhodnotením ekonomických dopadov týchto rozhodnutí."
    />
    <section className="page-section">
      <h2 className="section-title mb-10">Naše hlavné oblasti</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {areas.map((a) => (
          <Link key={a.path} to={a.path} className="service-card group">
            <h3 className="font-heading text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">{a.title}</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">{a.desc}</p>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
              Viac informácií <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  </Layout>
);

export default FinancnePoradenstvo;
