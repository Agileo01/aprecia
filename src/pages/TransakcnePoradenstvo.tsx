import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";

const situations = [
  "Predaj podniku alebo jeho časti",
  "Kúpa podniku",
  "Vstup strategického alebo finančného investora",
  "MBO / MBI transakcie",
  "Prevody medzi spoločníkmi",
  "Rodinné nástupníctvo",
];

const services = [
  "Stanovenie hodnoty a cenového rámca",
  "Finančné modelovanie a analýzy",
  "Identifikácia hodnototvorných faktorov",
  "Podpora pri vyjednávaní",
  "Spolupráca s právnymi a daňovými poradcami",
];

const TransakcnePoradenstvo = () => (
  <Layout>
    <PageHero
      title="Transakčné poradenstvo"
      subtitle="Transakcie predstavujú zásadné momenty v životnom cykle podniku. Poskytujeme odbornú podporu pri predaji alebo kúpe spoločností, vstupe investorov a interných prevodoch vlastníckych podielov."
    />
    <section className="page-section">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="section-title">Typické situácie</h2>
          <ul className="space-y-3">
            {situations.map((s) => (
              <li key={s} className="flex gap-3 text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                {s}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="section-title">Rozsah služieb</h2>
          <ul className="space-y-3">
            {services.map((s) => (
              <li key={s} className="flex gap-3 text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  </Layout>
);

export default TransakcnePoradenstvo;
