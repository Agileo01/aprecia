import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const assets = [
  "Finančné investície a podiely",
  "Hmotný majetok a technologické zariadenia",
  "Pohľadávky a záväzky",
  "Zásoby",
  "Zmluvné práva",
  "Zákaznícke portfóliá, distribučné siete a iné",
];

const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
  const { ref, isVisible } = useScrollAnimation(0.12);
  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      {children}
    </div>
  );
};

const OceňovanieInychZloziek = () => (
  <Layout>
    <PageHero
      title="Oceňovanie iných zložiek majetku"
      subtitle="V mnohých situáciách je potrebné určiť hodnotu jednotlivých aktív samostatne alebo ako súčasť širšieho ekonomického posúdenia. Poskytujeme oceňovanie rôznych majetkových zložiek s dôrazom na metodickú správnosť a praktickú využiteľnosť výsledkov."
    />
    <section className="page-section">
      <AnimatedSection>
        <h2 className="section-title">Najčastejšie oceňované aktíva</h2>
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

export default OceňovanieInychZloziek;
