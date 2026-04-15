import { ParallaxSection } from "./ParallaxSection";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export const PageHero = ({ title, subtitle, backgroundImage }: PageHeroProps) => {
  if (backgroundImage) {
    return (
      <ParallaxSection
        imageSrc={backgroundImage}
        height="min-h-[320px] md:min-h-[400px]"
        overlay="bg-foreground/70"
      >
        <div className="page-hero-inner py-20 md:py-32">
          <h1 className="section-title text-4xl md:text-5xl text-primary-foreground">{title}</h1>
          {subtitle && <p className="section-subtitle mt-4 text-primary-foreground/80">{subtitle}</p>}
        </div>
      </ParallaxSection>
    );
  }

  return (
    <section className="page-hero">
      <div className="page-hero-inner">
        <h1 className="section-title text-4xl md:text-5xl">{title}</h1>
        {subtitle && <p className="section-subtitle mt-4">{subtitle}</p>}
      </div>
    </section>
  );
};
