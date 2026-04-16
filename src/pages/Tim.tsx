import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/i18n/LanguageContext";
import parallaxMarble from "@/assets/parallax-marble.jpg";
import antonHudzik from "@/assets/anton-hudzik.jpg";
import andrejLang from "@/assets/andrej-lang.jpg";

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
      style={{ transitionDelay: isVisible ? `${index * 150}ms` : "0ms" }}
    >
      {children}
    </div>
  );
};

const Tim = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <PageHero title={t.tim.title} subtitle={t.tim.subtitle} backgroundImage={parallaxMarble} />
      <section className="page-section">
        <div className="space-y-16">
          {t.tim.team.map((member, i) => (
            <StaggerItem key={member.name} index={i}>
              <div className="border-b border-border pb-16 last:border-0">
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <div className="w-full aspect-[3/4] bg-secondary flex items-center justify-center mb-4 overflow-hidden">
                      {member.name.includes("Hudzík") ? (
                        <img src={antonHudzik} alt={member.name} className="w-full h-full object-cover" />
                      ) : member.name.includes("Lang") ? (
                        <img src={andrejLang} alt={member.name} className="w-full h-full object-cover" />
                      ) : (
                        <span className="text-4xl font-heading text-muted-foreground/30">
                          {member.name.split(" ").pop()?.[0]}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <h2 className="font-heading text-2xl font-semibold text-foreground">{member.name}</h2>
                    <p className="text-primary text-sm font-medium mt-1 mb-4">{member.role}</p>
                    <p className="text-muted-foreground leading-relaxed mb-2">{member.bio}</p>
                    {member.bio2 && <p className="text-muted-foreground leading-relaxed mb-6">{member.bio2}</p>}
                    <h3 className="font-heading font-semibold text-foreground mb-3">{t.tim.specializationTitle}</h3>
                    <ul className="space-y-2">
                      {member.specializations.map((s) => (
                        <li key={s} className="flex gap-3 text-muted-foreground text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </div>

        <AnimatedSection className="mt-16">
          <div className="p-8 bg-secondary">
            <h2 className="font-heading text-xl font-semibold mb-3">{t.tim.externalTitle}</h2>
            <p className="text-muted-foreground leading-relaxed">{t.tim.externalText}</p>
          </div>
        </AnimatedSection>
      </section>
    </Layout>
  );
};

export default Tim;
