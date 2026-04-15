import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";

const projects = [
  "Oceňovanie podnikov pre transakčné účely",
  "Oceňovanie duševného vlastníctva",
  "Znalecké posudky pre súdne konania",
  "Podpora pri predaji alebo kúpe podnikov",
  "Interné prevody majetku a reštrukturalizácie",
];

const Referencie = () => (
  <Layout>
    <PageHero
      title="Referencie"
      subtitle="Počas našej praxe sme poskytli služby klientom z rôznych odvetví a v rôznych situáciách. Z dôvodu dôvernosti projektov uvádzame referencie v anonymizovanej podobe."
    />
    <section className="page-section">
      <h2 className="section-title mb-8">Typické projekty</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div key={p} className="service-card">
            <p className="text-foreground font-medium">{p}</p>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

export default Referencie;
