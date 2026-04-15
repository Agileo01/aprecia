import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";

const outputs = [
  "Znalecké posudky pre súdy, fyzické a právnické osoby",
  "Odborné stanoviská",
  "Revízne znalecké posudky",
  "Posudky pre orgány verejnej správy",
];

const purposes = [
  "Kúpa alebo predaj majetku medzi spriaznenými osobami (v súlade s § 59a Obchodného zákonníka)",
  "Oceňovanie nepeňažných vkladov do základného imania spoločností",
  "Stanovenie fair value majetku a záväzkov podľa IFRS",
  "Zriadenie záložného práva a zabezpečenie úverov",
  "Stanovenie hodnoty akcií na účely povinnej ponuky na prevzatie",
  "Reštrukturalizácie a likvidácie spoločností",
  "Konkurzné a exekučné konania",
  "Poistné udalosti",
  "Trestné konania týkajúce sa majetkových a hospodárskych trestných činov",
];

const ZnaleckaCinnost = () => (
  <Layout>
    <PageHero
      title="Znalecká činnosť"
      subtitle="Aprecia je znaleckou organizáciou poskytujúcou znalecké posudky a odborné stanoviská v oblasti oceňovania podnikov v súlade s platnou legislatívou Slovenskej republiky."
    />
    <section className="page-section">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="section-title">Oceňovanie podnikov</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Vypracúvame znalecké posudky na stanovenie všeobecnej hodnoty podniku ako celku alebo jeho častí. Oceňovanie realizujeme v súlade s platnou legislatívou Slovenskej republiky, najmä podľa vyhlášky Ministerstva spravodlivosti SR č. 492/2004 Z. z.
          </p>
          <h2 className="section-title">Vyčíslenie škody a ušlého zisku</h2>
          <p className="text-muted-foreground leading-relaxed">
            Poskytujeme znalecké posudky na účely súdnych a arbitrážnych konaní, vrátane vyčíslenia skutočnej škody, ušlého zisku a ekonomických dopadov porušenia zmluvných alebo zákonných povinností.
          </p>
        </div>
        <div>
          <h2 className="section-title">Typy výstupov</h2>
          <ul className="space-y-3 mb-10">
            {outputs.map((o) => (
              <li key={o} className="flex gap-3 text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                {o}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    <section className="bg-secondary py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-title mb-8">Typické účely znaleckých posudkov</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {purposes.map((p) => (
            <div key={p} className="flex gap-3 text-muted-foreground text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default ZnaleckaCinnost;
