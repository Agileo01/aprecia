import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";

const LegalPage = ({ title, content }: { title: string; content: string }) => (
  <Layout>
    <PageHero title={title} />
    <section className="page-section">
      <p className="text-muted-foreground leading-relaxed max-w-3xl">{content}</p>
    </section>
  </Layout>
);

export const OchranaOsobnychUdajov = () => (
  <LegalPage title="Ochrana osobných údajov" content="Obsah tejto stránky bude doplnený." />
);

export const Cookies = () => (
  <LegalPage title="Cookies" content="Obsah tejto stránky bude doplnený." />
);

export const Podmienky = () => (
  <LegalPage title="Podmienky" content="Obsah tejto stránky bude doplnený." />
);
