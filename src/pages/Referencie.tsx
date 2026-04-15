import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";

const ocenovaniePodnikov = [
  "Ohodnotenie skupiny spoločností pôsobiacich v oblasti logistiky a železničnej dopravy, vrátane dcérskych spoločností.",
  "Oceňovanie časti podniku významnej medzinárodnej stavebnej spoločnosti.",
  "Stanovenie hodnoty spoločnosti poskytujúcej IT a systémové integračné služby v rámci podnikovej kombinácie.",
  "Ohodnotenie spoločnosti pôsobiacej v oblasti developerských a realitných projektov.",
  "Oceňovanie podniku pôsobiaceho v oblasti potravinárskej výroby a spracovania korenín.",
  "Stanovenie hodnoty spoločnosti poskytujúcej železničnú nákladnú dopravu a logistické služby.",
  "Oceňovanie spoločnosti zameranej na investičné a realitné aktivity.",
  "Ohodnotenie spoločnosti poskytujúcej poradenské služby v oblasti podnikových financií.",
  "Oceňovanie spoločnosti pôsobiacej v oblasti zdravotníckych služieb.",
  "Stanovenie hodnoty spoločnosti spravujúcej riečne prístavy a logistickú infraštruktúru.",
];

const podnikoveKombinacie = [
  "Identifikácia a alokácia hmotných a nehmotných aktív v rámci zlúčenia spoločností z oblasti maloobchodu s elektronikou.",
  "Oceňovanie majetku a záväzkov v rámci podnikovej kombinácie technologickej skupiny v súlade s IFRS štandardmi.",
];

const financovanie = [
  "Oceňovanie majetku pre účely zabezpečenia bankového financovania pre významnú európsku bankovú inštitúciu.",
  "Stanovenie transferových cien pre rozdelenie výnosov zo syndikovaného úveru pre medzinárodnú banku.",
];

const categories = [
  { title: "Oceňovanie podnikov a ich častí", items: ocenovaniePodnikov },
  { title: "Podnikové kombinácie a alokácia majetku", items: podnikoveKombinacie },
  { title: "Financovanie a bankový sektor", items: financovanie },
];

const Referencie = () => (
  <Layout>
    <PageHero
      title="Referencie"
      subtitle="Spoločnosť Aprecia s.r.o. poskytla svoje služby klientom z rôznych odvetví hospodárstva na Slovensku aj v zahraničí. Naše skúsenosti zahŕňajú spoluprácu s významnými medzinárodnými skupinami, finančnými inštitúciami, priemyselnými podnikmi aj dynamicky rastúcimi spoločnosťami."
    />
    <section className="page-section">
      <p className="text-muted-foreground max-w-3xl mb-12">
        Z dôvodu zachovania dôvernosti klientov uvádzame referencie v anonymizovanej podobe prostredníctvom opisu predmetu ich podnikania a charakteru realizovaných projektov.
      </p>

      <div className="space-y-16">
        {categories.map((cat) => (
          <div key={cat.title}>
            <h2 className="section-title mb-8">{cat.title}</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {cat.items.map((item) => (
                <div key={item} className="service-card">
                  <p className="text-foreground font-medium leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

export default Referencie;
