import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const assets = [
  "Patenty a technológie",
  "Ochranné známky",
  "Goodwill a know-how",
  "Autorské práva",
  "Licenčné práva",
];

const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
  const { ref, isVisible } = useScrollAnimation(0.12);
  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      {children}
    </div>
  );
};

const OceňovanieDusevnehoVlastnictva = () => (
  <Layout>
    <PageHero
      title="Oceňovanie duševného vlastníctva"
      subtitle="Duševné vlastníctvo často predstavuje významnú časť hodnoty podniku. Pomáhame klientom určiť jeho hodnotu v situáciách, ako sú licenčné zmluvy, investičné kolá, nepeňažné vklady alebo právne spory."
    />
    <section className="page-section">
      <AnimatedSection>
        <h2 className="section-title">Oceňované aktíva</h2>
        <ul className="space-y-3 max-w-2xl">
          {assets.map((a) => (
            <li key={a} className="flex gap-3 text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              {a}
            </li>
          ))}
        </ul>
      </AnimatedSection>
    </section>
  </Layout>
);

export default OceňovanieDusevnehoVlastnictva;
