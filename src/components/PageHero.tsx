interface PageHeroProps {
  title: string;
  subtitle?: string;
}

export const PageHero = ({ title, subtitle }: PageHeroProps) => (
  <section className="page-hero">
    <div className="page-hero-inner">
      <h1 className="section-title text-4xl md:text-5xl">{title}</h1>
      {subtitle && <p className="section-subtitle mt-4">{subtitle}</p>}
    </div>
  </section>
);
