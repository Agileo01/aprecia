import { useState } from "react";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/i18n/LanguageContext";
import { ContactQR } from "@/components/ContactQR";
import parallaxArchitecture from "@/assets/parallax-architecture.jpg";

const AnimatedSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const { ref, isVisible } = useScrollAnimation(0.12);
  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}>
      {children}
    </div>
  );
};

const Kontakt = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: t.kontakt.requiredError, variant: "destructive" });
      return;
    }
    setSending(true);
    const subject = encodeURIComponent(`Dopyt od ${form.name}`);
    const body = encodeURIComponent(
      `Meno: ${form.name}\nEmail: ${form.email}\nTelefón: ${form.phone}\n\n${form.message}`
    );
    window.location.href = `mailto:aprecia@aprecia.sk?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setSending(false);
      toast({ title: t.kontakt.emailClientOpened, description: t.kontakt.emailClientOpenedDesc });
      setForm({ name: "", email: "", phone: "", message: "" });
    }, 1000);
  };

  return (
    <Layout>
      <PageHero title={t.kontakt.title} subtitle={t.kontakt.subtitle} backgroundImage={parallaxMarble} />
      <section className="page-section">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-6">
              <AnimatedSection>
                <div className="service-card">
                  <div className="flex flex-col md:flex-row md:items-stretch gap-6 min-w-0">
                    <div className="flex-1 min-w-0">
                      <h2 className="font-heading text-2xl font-semibold mb-4">{t.kontakt.skTitle}</h2>
                      <div className="flex gap-3 text-muted-foreground mb-3">
                        <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <div className="flex flex-col">
                          <span>Aprecia s. r. o.</span>
                          <span>Na Hrebienku 8079/2A</span>
                          <span>811 02 Bratislava - mestská časť Staré Mesto</span>
                        </div>
                      </div>
                      <a href="https://maps.google.com/?q=Na+Hrebienku+8079/2A,+811+02+Bratislava" target="_blank" rel="noopener noreferrer" className="inline-block text-sm text-primary hover:underline">
                        {t.kontakt.openMaps}
                      </a>
                    </div>
                    <div className="md:w-56 flex-shrink-0">
                      <iframe title="Mapa - Bratislava" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2661.8!2d17.0975!3d48.1525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDA5JzA5LjAiTiAxN8KwMDUnNTEuMCJF!5e0!3m2!1ssk!2ssk!4v1" className="w-full h-48 border border-border" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection>
                <div className="service-card">
                  <div className="flex flex-col md:flex-row md:items-stretch gap-6 min-w-0">
                    <div className="flex-1 min-w-0">
                      <h2 className="font-heading text-2xl font-semibold mb-4">{t.kontakt.czTitle}</h2>
                      <div className="flex gap-3 text-muted-foreground mb-3">
                        <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <div className="flex flex-col">
                          <span>Aprecia s.r.o.</span>
                          <span>Štěpánská 1742/27</span>
                          <span>110 00 Praha 1 - Nové Město</span>
                        </div>
                      </div>
                      <a href="https://maps.google.com/?q=Štěpánská+1742/27,+110+00+Praha+1" target="_blank" rel="noopener noreferrer" className="inline-block text-sm text-primary hover:underline">
                        {t.kontakt.openMaps}
                      </a>
                    </div>
                    <div className="md:w-56 flex-shrink-0">
                      <iframe title="Mapa - Praha" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.3!2d14.4237!3d50.0785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDA0JzQyLjYiTiAxNMKwMjUnMjUuMyJF!5e0!3m2!1ssk!2ssk!4v1" className="w-full h-48 border border-border" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
            <AnimatedSection>
              <div className="service-card">
                <h2 className="font-heading text-xl font-semibold mb-4">{t.kontakt.contactTitle}</h2>
                <div className="space-y-4 text-muted-foreground mb-6">
                  <div className="flex gap-3">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <a href="tel:+421903991150" className="hover:text-primary transition-colors">+421 903 991 150</a>
                  </div>
                  <div className="flex gap-3">
                    <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <a href="mailto:aprecia@aprecia.sk" className="hover:text-primary transition-colors">aprecia@aprecia.sk</a>
                  </div>
                </div>
                <div className="pt-4 border-t border-border">
                  <h3 className="font-heading text-sm font-semibold mb-3 text-center text-muted-foreground">{t.kontakt.qrTitle}</h3>
                  <ContactQR downloadLabel={t.kontakt.qrDownload} />
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection>
            <div className="service-card">
              <h2 className="font-heading text-2xl font-semibold mb-6">{t.kontakt.formTitle}</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1.5">
                    {t.kontakt.nameLabel} <span className="text-primary">*</span>
                  </label>
                  <input id="name" name="name" type="text" value={form.name} onChange={handleChange} maxLength={100} className="w-full border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors" placeholder={t.kontakt.namePlaceholder} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                    {t.kontakt.emailLabel} <span className="text-primary">*</span>
                  </label>
                  <input id="email" name="email" type="email" value={form.email} onChange={handleChange} maxLength={255} className="w-full border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors" placeholder={t.kontakt.emailPlaceholder} />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1.5">{t.kontakt.phoneLabel}</label>
                  <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} maxLength={20} className="w-full border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors" placeholder={t.kontakt.phonePlaceholder} />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1.5">
                    {t.kontakt.messageLabel} <span className="text-primary">*</span>
                  </label>
                  <textarea id="message" name="message" value={form.message} onChange={handleChange} maxLength={2000} rows={5} className="w-full border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none" placeholder={t.kontakt.messagePlaceholder} />
                </div>
                <button type="submit" disabled={sending} className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 font-medium hover:opacity-90 transition-opacity disabled:opacity-50">
                  {sending ? t.kontakt.submitting : t.kontakt.submitButton}
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Kontakt;
