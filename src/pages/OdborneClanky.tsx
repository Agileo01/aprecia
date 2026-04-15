import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";

const OdborneClanky = () => (
  <Layout>
    <PageHero
      title="Odborné články"
      subtitle="Prinášame odborné články a analýzy z oblasti finančného poradenstva, oceňovania a transakcií. Naším cieľom je zdieľať poznatky z praxe a prispievať k odbornému diskurzu."
    />
    <section className="page-section">
      <p className="text-muted-foreground text-center">
        Články budú čoskoro k dispozícii.
      </p>
    </section>
  </Layout>
);

export default OdborneClanky;
