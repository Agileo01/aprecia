import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/i18n/LanguageContext";
import parallaxCity from "@/assets/parallax-city.jpg";

const AnimatedSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const { ref, isVisible } = useScrollAnimation(0.12);
  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}>
      {children}
    </div>
  );
};

const StaggerItem = ({ children, index }: { children: React.ReactNode; index: number }) => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  return (
    <div
      ref={ref}
      className={`transition-all duration-600 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      style={{ transitionDelay: isVisible ? `${index * 80}ms` : "0ms" }}
    >
      {children}
    </div>
  );
};

const ZnaleckaCinnost = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <PageHero title={t.znaleckaCinnost.title} subtitle={t.znaleckaCinnost.subtitle} backgroundImage={parallaxCity} />
      <section className="page-section">
        <div className="grid md:grid-cols-2 gap-16">
          <AnimatedSection>
            <h2 className="section-title">{t.znaleckaCinnost.ocenovaniePodnikovTitle}</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">{t.znaleckaCinnost.ocenovaniePodnikovText}</p>
            <h2 className="section-title">{t.znaleckaCinnost.skodaTitle}</h2>
            <p className="text-muted-foreground leading-relaxed">{t.znaleckaCinnost.skodaText}</p>
          </AnimatedSection>
          <AnimatedSection>
            <h2 className="section-title">{t.znaleckaCinnost.outputsTitle}</h2>
            <ul className="space-y-3 mb-10">
              {t.znaleckaCinnost.outputs.map((o) => (
                <li key={o} className="flex gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  {o}
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-secondary py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="section-title mb-8">{t.znaleckaCinnost.purposesTitle}</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 gap-4">
            {t.znaleckaCinnost.purposes.map((p, i) => (
              <StaggerItem key={p} index={i}>
                <div className="flex gap-3 text-muted-foreground text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  {p}
                </div>
              </StaggerItem>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ZnaleckaCinnost;
