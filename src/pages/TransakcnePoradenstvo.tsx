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

const TransakcnePoradenstvo = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <PageHero title={t.transakcnePoradenstvo.title} subtitle={t.transakcnePoradenstvo.subtitle} />
      <section className="page-section">
        <div className="grid md:grid-cols-2 gap-16">
          <AnimatedSection>
            <h2 className="section-title">{t.transakcnePoradenstvo.situationsTitle}</h2>
            <ul className="space-y-3">
              {t.transakcnePoradenstvo.situations.map((s) => (
                <li key={s} className="flex gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </AnimatedSection>
          <AnimatedSection>
            <h2 className="section-title">{t.transakcnePoradenstvo.servicesTitle}</h2>
            <ul className="space-y-3">
              {t.transakcnePoradenstvo.services.map((s) => (
                <li key={s} className="flex gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default TransakcnePoradenstvo;
