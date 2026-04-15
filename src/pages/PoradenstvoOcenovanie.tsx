import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { ArrowRight } from "lucide-react";

const subpages = [
  {
    title: "Oceňovanie podnikov",
    desc: "Stanovujeme hodnotu obchodných spoločností a vlastníckych podielov v nich pre rôzne podnikateľské a právne situácie.",
    path: "/financne-poradenstvo/poradenstvo-pri-ocenovani/ocenovanie-podnikov",
  },
  {
    title: "Oceňovanie duševného vlastníctva",
    desc: "Pomáhame klientom určiť hodnotu duševného vlastníctva v situáciách, ako sú licenčné zmluvy, investičné kolá alebo právne spory.",
    path: "/financne-poradenstvo/poradenstvo-pri-ocenovani/ocenovanie-dusevneho-vlastnictva",
  },
  {
    title: "Oceňovanie iných zložiek majetku",
    desc: "Poskytujeme oceňovanie rôznych majetkových zložiek s dôrazom na metodickú správnosť a praktickú využiteľnosť výsledkov.",
    path: "/financne-poradenstvo/poradenstvo-pri-ocenovani/ocenovanie-inych-zloziek-majetku",
  },
];

const PoradenstvoOcenovanie = () => (
  <Layout>
    <PageHero
      title="Poradenstvo pri oceňovaní"
      subtitle="Oceňovanie je kľúčovým nástrojom strategického rozhodovania. Poskytujeme odborné poradenstvo pri určovaní hodnoty podnikov, duševného vlastníctva a ďalších zložiek majetku."
    />
    <section className="page-section">
      <div className="grid md:grid-cols-3 gap-6">
        {subpages.map((s) => (
          <Link key={s.path} to={s.path} className="service-card group">
            <h3 className="font-heading text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
              Viac <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  </Layout>
);

export default PoradenstvoOcenovanie;
