import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/i18n/LanguageContext";

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
      style={{ transitionDelay: isVisible ? `${index * 100}ms` : "0ms" }}
    >
      {children}
    </div>
  );
};

const Referencie = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <PageHero title={t.referencie.title} subtitle={t.referencie.subtitle} />
      <section className="page-section">
        <AnimatedSection>
          <p className="text-muted-foreground max-w-3xl mb-12">{t.referencie.disclaimer}</p>
        </AnimatedSection>

        <div className="space-y-16">
          {t.referencie.categories.map((cat) => (
            <div key={cat.title}>
              <AnimatedSection>
                <h2 className="section-title mb-8">{cat.title}</h2>
              </AnimatedSection>
              <div className="grid sm:grid-cols-2 gap-6">
                {cat.items.map((item, i) => (
                  <StaggerItem key={item} index={i}>
                    <div className="service-card h-full">
                      <p className="text-foreground font-medium leading-relaxed">{item}</p>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Referencie;
