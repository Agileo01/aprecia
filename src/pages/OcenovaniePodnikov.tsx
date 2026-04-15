import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/i18n/LanguageContext";
import parallaxCity from "@/assets/parallax-city.jpg";

const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
  const { ref, isVisible } = useScrollAnimation(0.12);
  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      {children}
    </div>
  );
};

const OceňovaniePodnikov = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <PageHero title={t.ocenovaniePodnikov.title} subtitle={t.ocenovaniePodnikov.subtitle} backgroundImage={parallaxCity} />
      <section className="page-section">
        <AnimatedSection>
          <h2 className="section-title">{t.ocenovaniePodnikov.purposesTitle}</h2>
          <ul className="space-y-3 max-w-2xl">
            {t.ocenovaniePodnikov.purposes.map((p) => (
              <li key={p} className="flex gap-3 text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                {p}
              </li>
            ))}
          </ul>
        </AnimatedSection>
      </section>
    </Layout>
  );
};

export default OceňovaniePodnikov;
