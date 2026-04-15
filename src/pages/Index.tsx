import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ArrowRight, Shield, Scale, Globe, Lock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/i18n/LanguageContext";

const iconMap = [Shield, Scale, Globe, Globe, Lock];

const AnimatedSection = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { ref, isVisible } = useScrollAnimation(0.12);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
};

const StaggerItem = ({
  children,
  index,
  className = "",
}: {
  children: React.ReactNode;
  index: number;
  className?: string;
}) => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  return (
    <div
      ref={ref}
      className={`transition-all duration-600 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
      style={{ transitionDelay: isVisible ? `${index * 120}ms` : "0ms" }}
    >
      {children}
    </div>
  );
};

const Index = () => {
  const { t, route } = useLanguage();

  const serviceRoutes = [
    route('transakcnePoradenstvo'),
    route('poradenstvoOcenovanie'),
    route('znaleckaCinnost'),
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 md:py-36 bg-secondary">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight animate-fade-in">
              {t.index.heroTitle}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl animate-fade-in" style={{ animationDelay: "150ms" }}>
              {t.index.heroSubtitle}
            </p>
            <div className="mt-10 flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "300ms" }}>
              <Link
                to={route('kontakt')}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
              >
                {t.index.ctaContact}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to={route('financnePoradenstvo')}
                className="inline-flex items-center gap-2 border border-foreground text-foreground px-6 py-3 text-sm font-medium hover:bg-foreground hover:text-background transition-colors"
              >
                {t.index.ctaServices}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* O nás */}
      <section className="page-section">
        <AnimatedSection>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="section-title">{t.index.aboutTitle}</h2>
              <p className="text-muted-foreground leading-relaxed">{t.index.aboutText}</p>
            </div>
            <div>
              <h2 className="section-title">{t.index.philosophyTitle}</h2>
              <p className="text-muted-foreground leading-relaxed">{t.index.philosophyText}</p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Služby */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="section-title mb-12">{t.index.servicesTitle}</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {t.index.services.map((s, i) => (
              <StaggerItem key={i} index={i}>
                <Link to={serviceRoutes[i]} className="service-card group block h-full">
                  <h3 className="font-heading text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                    {t.common.moreInfo} <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </div>
        </div>
      </section>

      {/* Prečo Aprecia */}
      <section className="page-section">
        <AnimatedSection>
          <h2 className="section-title mb-10">{t.index.whyTitle}</h2>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.index.reasons.map((reason, i) => (
            <StaggerItem key={i} index={i}>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 flex items-center justify-center">
                  {(() => { const Icon = iconMap[i]; return <Icon className="w-5 h-5 text-primary" />; })()}
                </div>
                <p className="text-foreground font-medium text-sm leading-relaxed pt-2">{reason}</p>
              </div>
            </StaggerItem>
          ))}
        </div>
      </section>

      {/* CTA */}
      <AnimatedSection>
        <section className="bg-foreground text-background py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4">
              {t.index.ctaSectionTitle}
            </h2>
            <p className="text-background/70 mb-8 text-lg">
              {t.index.ctaSectionSubtitle}
            </p>
            <Link
              to={route('kontakt')}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 font-medium hover:opacity-90 transition-opacity"
            >
              {t.index.ctaContact}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </AnimatedSection>
    </Layout>
  );
};

export default Index;
