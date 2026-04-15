import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { useLanguage } from "@/i18n/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import parallaxArchitecture from "@/assets/parallax-architecture.jpg";

interface LegalProps {
  page: 'ochrana' | 'cookies' | 'podmienky';
}

const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
  const { ref, isVisible } = useScrollAnimation(0.12);
  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      {children}
    </div>
  );
};

const Legal = ({ page }: LegalProps) => {
  const { t } = useLanguage();
  const data = t.legal[page];

  return (
    <Layout>
      <PageHero title={data.title} backgroundImage={parallaxArchitecture} />
      <section className="page-section">
        <div className="max-w-3xl space-y-10">
          {data.sections.map((section, i) => (
            <AnimatedSection key={i}>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">{section.heading}</h2>
              <div className="text-muted-foreground leading-relaxed whitespace-pre-line">{section.content}</div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Legal;
