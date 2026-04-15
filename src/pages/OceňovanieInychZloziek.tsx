import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";

const assets = [
  "Finančné investície a podiely",
  "Hmotný majetok a technologické zariadenia",
  "Pohľadávky a záväzky",
  "Zásoby",
  "Zmluvné práva",
  "Zákaznícke portfóliá, distribučné siete a iné",
];

const OceňovanieInychZloziek = () => (
  <Layout>
    <PageHero
      title="Oceňovanie iných zložiek majetku"
      subtitle="V mnohých situáciách je potrebné určiť hodnotu jednotlivých aktív samostatne alebo ako súčasť širšieho ekonomického posúdenia. Poskytujeme oceňovanie rôznych majetkových zložiek s dôrazom na metodickú správnosť a praktickú využiteľnosť výsledkov."
    />
    <section className="page-section">
      <h2 className="section-title">Najčastejšie oceňované aktíva</h2>
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

export default OceňovanieInychZloziek;
