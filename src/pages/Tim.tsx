import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";

const team = [
  {
    name: "Ing. Anton Hudzík",
    role: "Partner | Znalec v odbore Ekonómia a manažment a Priemyselné vlastníctvo",
    bio: "Ing. Anton Hudzík je vedúcim partnerom spoločnosti Aprecia a senior expertom v oblasti oceňovania podnikov, korporátnych financií a transakčného poradenstva. Absolvoval štúdium financií, bankovníctva a investovania na Fakulte financií Univerzity Mateja Bela v Banskej Bystrici.",
    bio2: "Má dlhoročné skúsenosti v korporátnom bankovníctve a transakčnom financovaní. Pôsobil v medzinárodných finančných inštitúciách, ako sú Citibank Slovakia a HSBC Bank Slovensko. Od roku 2009 sa popri znaleckej činnosti aktívne venuje aj poradenstvu v oblasti korporátnych financií.",
    specializations: [
      "Oceňovanie podnikov a nehmotného majetku",
      "Transakčné poradenstvo pri kúpe a predaji spoločností",
      "Korporátne financie a projektové financovanie",
      "Vypracovanie znaleckých posudkov",
      "Strategické finančné analýzy",
    ],
  },
  {
    name: "Ing. Andrej Lang",
    role: "Znalec v odbore Strojárstvo",
    bio: "Ing. Andrej Lang je odborníkom v oblasti strojárstva s viac ako 20-ročnou praxou. Od roku 2011 pôsobí ako súdny znalec v odvetviach dopravných strojov a zariadení, strojov a zariadení na všeobecné účely a odhadu hodnoty strojových zariadení.",
    specializations: [
      "Oceňovanie strojov a technologických zariadení",
      "Dopravné stroje a zariadenia",
      "Technické znalecké posudky",
      "Posudzovanie technického stavu zariadení",
    ],
  },
  {
    name: "Ing. Michal Vičan",
    role: "Znalec v odbore Stavebníctvo",
    bio: "Ing. Michal Vičan má dlhoročné skúsenosti v oblasti stavebníctva a od roku 2010 pôsobí ako súdny znalec v odvetví odhadu hodnoty nehnuteľností. Počas svojej praxe sa podieľal na mnohých významných projektoch súvisiacich s oceňovaním nehnuteľností.",
    specializations: [
      "Oceňovanie nehnuteľností",
      "Znalecké posudky v stavebníctve",
      "Posudzovanie stavebných projektov",
      "Technické analýzy nehnuteľného majetku",
    ],
  },
];

const Tim = () => (
  <Layout>
    <PageHero
      title="Tím Aprecia"
      subtitle="Aprecia je poradenská a znalecká organizácia združujúca odborníkov z rôznych oblastí ekonomiky a technických odvetví. Naše služby stoja na kombinácii finančno-ekonomickej expertízy a dlhoročných praktických skúseností."
    />
    <section className="page-section">
      <div className="space-y-16">
        {team.map((member) => (
          <div key={member.name} className="border-b border-border pb-16 last:border-0">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="w-full aspect-[3/4] bg-secondary flex items-center justify-center mb-4">
                  <span className="text-4xl font-heading text-muted-foreground/30">
                    {member.name.split(" ").pop()?.[0]}
                  </span>
                </div>
              </div>
              <div className="md:col-span-2">
                <h2 className="font-heading text-2xl font-semibold text-foreground">{member.name}</h2>
                <p className="text-primary text-sm font-medium mt-1 mb-4">{member.role}</p>
                <p className="text-muted-foreground leading-relaxed mb-2">{member.bio}</p>
                {member.bio2 && <p className="text-muted-foreground leading-relaxed mb-6">{member.bio2}</p>}
                <h3 className="font-heading font-semibold text-foreground mb-3">Oblasti špecializácie</h3>
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
        ))}
      </div>

      <div className="mt-16 p-8 bg-secondary">
        <h2 className="font-heading text-xl font-semibold mb-3">Ďalší spolupracujúci znalci</h2>
        <p className="text-muted-foreground leading-relaxed">
          Okrem stáleho tímu spoločnosť Aprecia spolupracuje na ad hoc báze s externými znalcami a odborníkmi z rôznych odvetví. Tento prístup nám umožňuje flexibilne reagovať na špecifické požiadavky klientov a zabezpečiť komplexné riešenia aj pri technicky alebo sektorovo náročných projektoch.
        </p>
      </div>
    </section>
  </Layout>
);

export default Tim;
