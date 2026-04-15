import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/i18n/LanguageContext";

const StaggerItem = ({ children, index }: { children: React.ReactNode; index: number }) => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  return (
    <div
      ref={ref}
      className={`transition-all duration-600 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      style={{ transitionDelay: isVisible ? `${index * 120}ms` : "0ms" }}
    >
      {children}
    </div>
  );
};

const PoradenstvoOcenovanie = () => {
  const { t, route } = useLanguage();

  const subpageRoutes = [
    route('ocenovaniePodnikov'),
    route('ocenovanieDusevnehoVlastnictva'),
    route('ocenovanieInychZloziek'),
  ];

  return (
    <Layout>
      <PageHero title={t.poradenstvoOcenovanie.title} subtitle={t.poradenstvoOcenovanie.subtitle} />
      <section className="page-section">
        <div className="grid md:grid-cols-3 gap-6">
          {t.poradenstvoOcenovanie.subpages.map((s, i) => (
            <StaggerItem key={i} index={i}>
              <Link to={subpageRoutes[i]} className="service-card group block h-full">
                <h3 className="font-heading text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                  {t.common.more} <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default PoradenstvoOcenovanie;
