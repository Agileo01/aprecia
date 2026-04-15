import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Mail } from "lucide-react";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/i18n/LanguageContext";

const articles = [
  {
    title: "Ocenenie firmy a budúcnosť rodinných podnikov",
    description: "Rodinné podniky tvoria chrbtovú kosť slovenskej aj českej ekonomiky. Dnes prichádzajú do obdobia generačnej výmeny – a kľúčovou otázkou je hodnota firmy.",
    url: "https://www.linkedin.com/pulse/ocenenie-firmy-bud%C3%BAcnos%C5%A5-rodinn%C3%BDch-podnikov-aprecia-s-r-o--oi0te/",
  },
  {
    title: "Ako sa stanovuje hodnota nehmotného majetku? MPEEM a CAC v praxi",
    description: "Značky, patenty, zákaznícke vzťahy či know-how – nehmotné aktíva majú zásadný vplyv na hodnotu firmy.",
    url: "https://www.linkedin.com/pulse/ako-sa-oce%C5%88uj%C3%BA-nehmotn%C3%A9-akt%C3%ADva-mpeem-pr%C3%ADstup-cac-v-praxi-n0ipe/",
  },
  {
    title: "Najčastejšie chyby pri predaji firmy – ako neprísť o roky budovanú hodnotu",
    description: "Pri predaji firmy sa opakujú tie isté chyby, ktoré dokážu znížiť kúpnu cenu aj o desiatky percent.",
    url: "https://www.linkedin.com/pulse/naj%C4%8Dastej%C5%A1ie-chyby-pri-predaji-firmy-ako-nepr%C3%ADs%C5%A5-o-roky-4260e/",
  },
  {
    title: "Prečo násobok EBITDA nestačí na ocenenie firmy",
    description: "EBITDA násobok je obľúbený, no zjednodušený ukazovateľ. Nezohľadňuje štruktúru nákladov, investície, pracovný kapitál ani konkurenčnú výhodu firmy.",
    url: "https://www.linkedin.com/pulse/pre%C4%8Do-n%C3%A1sobok-ebitda-nesta%C4%8D%C3%AD-na-ocenenie-firmy-aprecia-s-r-o--etryf/",
  },
  {
    title: "Možnosti oceňovania priemyselného a duševného vlastníctva",
    description: "Aká je hodnota Vašej značky či patentov? Prehľad prístupov – nákladový, trhový a výnosový.",
    url: "https://www.linkedin.com/pulse/mo%C5%BEnosti-oce%C5%88ovania-priemyseln%C3%A9ho-du%C5%A1evn%C3%A9ho-vlastn%C3%ADctva-y8kje/",
  },
  {
    title: "Assembled workforce: ako sa stanovuje hodnota pracovnej sily vo firme?",
    description: "Pracovná sila je kľúčové aktívum pri akvizíciách. Ako sa určuje jej hodnota pomocou nákladového prístupu.",
    url: "https://www.linkedin.com/pulse/assembled-workforce-ako-sa-oce%C5%88uje-hodnota-pracovnej-sily-nb52e/",
  },
  {
    title: "Hudobné katalógy ako investícia – aké násobky sa platia za práva Queen či Springsteena?",
    description: "Hudobné katalógy sa stali novou triedou aktív. Pozrite sa na násobky, za ktoré sa predávajú práva svetových umelcov.",
    url: "https://www.linkedin.com/pulse/hudobn%C3%A9-katal%C3%B3gy-ako-invest%C3%ADcia-ak%C3%A9-n%C3%A1sobky-sa-platia-za-my72e/",
  },
  {
    title: "IFRS vs. IVS: Prečo sa pri oceňovaní nehmotného majetku používajú iné pravidlá",
    description: "IFRS a IVS majú odlišné ciele a prístupy k oceňovaniu nehmotných aktív.",
    url: "https://www.linkedin.com/pulse/ifrs-vs-ivs-pre%C4%8Do-sa-pri-oce%C5%88ovan%C3%AD-nehmotn%C3%A9ho-majetku-pou%C5%BE%C3%ADvaj%C3%BA-ozyxe/",
  },
  {
    title: "Finančný model – kľúč k správnym rozhodnutiam a úspešnému plánovaniu",
    description: "Kvalitný finančný model prináša transparentnosť, flexibilitu a dôveryhodnosť.",
    url: "https://www.linkedin.com/pulse/finan%C4%8Dn%C3%BD-model-k%C4%BE%C3%BA%C4%8D-k-spr%C3%A1vnym-rozhodnutiam-%C3%BAspe%C5%A1n%C3%A9mu-pl%C3%A1novaniu-op0he/",
  },
  {
    title: "Reštrukturalizácia a turnaround consulting – šanca, nie zlyhanie",
    description: "Reštrukturalizácia nie je zlyhanie – je to príležitosť získať druhý dych.",
    url: "https://www.linkedin.com/pulse/re%C5%A1trukturaliz%C3%A1cia-turnaround-consulting-%C5%A1anca-nie-zlyhanie-vonve/",
  },
];

const StaggerItem = ({ children, index }: { children: React.ReactNode; index: number }) => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  return (
    <div
      ref={ref}
      className={`transition-all duration-600 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      style={{ transitionDelay: isVisible ? `${index * 80}ms` : "0ms" }}
    >
      {children}
    </div>
  );
};

const AnimatedSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const { ref, isVisible } = useScrollAnimation(0.12);
  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}>
      {children}
    </div>
  );
};

const OdborneClanky = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <PageHero title={t.odborneClanky.title} subtitle={t.odborneClanky.subtitle} />
      <section className="page-section">
        <div className="max-w-4xl mx-auto grid gap-6">
          {articles.map((article, i) => (
            <StaggerItem key={i} index={i}>
              <a href={article.url} target="_blank" rel="noopener noreferrer" className="block group">
                <Card className="transition-shadow hover:shadow-md">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{article.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{article.description}</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
                  </CardContent>
                </Card>
              </a>
            </StaggerItem>
          ))}
        </div>
      </section>

      <AnimatedSection>
        <section className="bg-secondary py-16 md:py-24">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <Mail className="w-10 h-10 text-primary mx-auto mb-4" />
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-3">{t.odborneClanky.newsletterTitle}</h2>
            <p className="text-muted-foreground mb-8">{t.odborneClanky.newsletterSubtitle}</p>
            <NewsletterForm />
          </div>
        </section>
      </AnimatedSection>
    </Layout>
  );
};

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    const subject = encodeURIComponent("Prihlásenie na odber noviniek");
    const body = encodeURIComponent(`Dobrý deň,\n\nrád/rada by som sa prihlásil/a na odber noviniek.\n\nMôj e-mail: ${email}\n\nĎakujem.`);
    window.location.href = `mailto:info@aprecia.sk?subject=${subject}&body=${body}`;
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <input
        type="email"
        required
        placeholder={t.odborneClanky.newsletterPlaceholder}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 h-11 px-4 border border-input bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
      />
      <button type="submit" className="h-11 px-6 bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
        {t.odborneClanky.newsletterButton}
      </button>
    </form>
  );
};

export default OdborneClanky;
