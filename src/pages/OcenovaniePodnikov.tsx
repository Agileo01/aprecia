import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";

const purposes = [
  "Predaj alebo kúpa podniku",
  "Vstup investora",
  "Spory medzi spoločníkmi",
  "Reštrukturalizácie a transformácie",
  "Účtovné a regulačné účely",
  "Interné prevody majetku",
];

const OceňovaniePodnikov = () => (
  <Layout>
    <PageHero
      title="Oceňovanie podnikov"
      subtitle="Stanovujeme hodnotu obchodných spoločností a vlastníckych podielov v nich pre rôzne podnikateľské a právne situácie. Oceňovanie realizujeme s využitím výnosových, trhových a majetkových prístupov v súlade s medzinárodnými štandardmi."
    />
    <section className="page-section">
      <h2 className="section-title">Typické účely</h2>
      <ul className="space-y-3 max-w-2xl">
        {purposes.map((p) => (
          <li key={p} className="flex gap-3 text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
            {p}
          </li>
        ))}
      </ul>
    </section>
  </Layout>
);

export default OceňovaniePodnikov;
