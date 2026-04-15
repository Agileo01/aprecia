import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { useLanguage } from "@/i18n/LanguageContext";

interface LegalProps {
  page: 'ochrana' | 'cookies' | 'podmienky';
}

const Legal = ({ page }: LegalProps) => {
  const { t } = useLanguage();

  const titles = {
    ochrana: t.legal.ochranaTitle,
    cookies: t.legal.cookiesTitle,
    podmienky: t.legal.podmienkyTitle,
  };

  return (
    <Layout>
      <PageHero title={titles[page]} />
      <section className="page-section">
        <p className="text-muted-foreground leading-relaxed max-w-3xl">{t.legal.placeholder}</p>
      </section>
    </Layout>
  );
};

export default Legal;
