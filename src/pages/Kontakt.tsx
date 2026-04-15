import { useState } from "react";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Kontakt = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Vyplňte povinné polia", variant: "destructive" });
      return;
    }
    setSending(true);
    // mailto fallback
    const subject = encodeURIComponent(`Dopyt od ${form.name}`);
    const body = encodeURIComponent(
      `Meno: ${form.name}\nEmail: ${form.email}\nTelefón: ${form.phone}\n\n${form.message}`
    );
    window.location.href = `mailto:aprecia@aprecia.sk?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setSending(false);
      toast({ title: "Emailový klient bol otvorený", description: "Odošlite správu z vášho emailového klienta." });
      setForm({ name: "", email: "", phone: "", message: "" });
    }, 1000);
  };

  return (
    <Layout>
      <PageHero
        title="Kontakt"
        subtitle="Ak pripravujete transakciu, riešite spor alebo potrebujete stanoviť hodnotu majetku, radi s vami prediskutujeme možnosti spolupráce."
      />
      <section className="page-section">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-8">
            <div className="service-card">
              <h2 className="font-heading text-2xl font-semibold mb-6">Slovenská republika</h2>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Adresa bude doplnená</span>
                </div>
                <div className="flex gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Telefón bude doplnený</span>
                </div>
                <div className="flex gap-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <a href="mailto:aprecia@aprecia.sk" className="hover:text-primary transition-colors">aprecia@aprecia.sk</a>
                </div>
              </div>
            </div>
            <div className="service-card">
              <h2 className="font-heading text-2xl font-semibold mb-6">Česká republika</h2>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Adresa bude doplnená</span>
                </div>
                <div className="flex gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Telefón bude doplnený</span>
                </div>
                <div className="flex gap-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <a href="mailto:aprecia@aprecia.sk" className="hover:text-primary transition-colors">aprecia@aprecia.sk</a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="service-card">
            <h2 className="font-heading text-2xl font-semibold mb-6">Napíšte nám</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1.5">
                  Meno a priezvisko <span className="text-primary">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  maxLength={100}
                  className="w-full border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  placeholder="Vaše meno"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                  E-mail <span className="text-primary">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  maxLength={255}
                  className="w-full border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  placeholder="vas@email.sk"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1.5">
                  Telefón
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  maxLength={20}
                  className="w-full border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  placeholder="+421 ..."
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1.5">
                  Správa <span className="text-primary">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  maxLength={2000}
                  rows={5}
                  className="w-full border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
                  placeholder="Opíšte váš dopyt..."
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {sending ? "Odosielam..." : "Odoslať správu"}
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Kontakt;
