import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";

const assets = [
  "Patenty a technológie",
  "Ochranné známky",
  "Goodwill a know-how",
  "Autorské práva",
  "Licenčné práva",
];

const OceňovanieDusevnehoVlastnictva = () => (
  <Layout>
    <PageHero
      title="Oceňovanie duševného vlastníctva"
      subtitle="Duševné vlastníctvo často predstavuje významnú časť hodnoty podniku. Pomáhame klientom určiť jeho hodnotu v situáciách, ako sú licenčné zmluvy, investičné kolá, nepeňažné vklady alebo právne spory."
    />
    <section className="page-section">
      <h2 className="section-title">Oceňované aktíva</h2>
      <ul className="space-y-3 max-w-2xl">
        {assets.map((a) => (
          <li key={a} className="flex gap-3 text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
            {a}
          </li>
        ))}
      </ul>
    </section>
  </Layout>
);

export default OceňovanieDusevnehoVlastnictva;
