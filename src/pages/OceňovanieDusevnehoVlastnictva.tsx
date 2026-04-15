import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/i18n/LanguageContext";

const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
  const { ref, isVisible } = useScrollAnimation(0.12);
  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      {children}
    </div>
  );
};

const OceňovanieDusevnehoVlastnictva = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <PageHero title={t.ocenovanieDusevnehoVlastnictva.title} subtitle={t.ocenovanieDusevnehoVlastnictva.subtitle} />
      <section className="page-section">
        <AnimatedSection>
          <h2 className="section-title">{t.ocenovanieDusevnehoVlastnictva.assetsTitle}</h2>
          <ul className="space-y-3 max-w-2xl">
            {t.ocenovanieDusevnehoVlastnictva.assets.map((a) => (
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
};

export default OceňovanieDusevnehoVlastnictva;
