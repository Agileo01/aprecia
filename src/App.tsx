import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { ScrollToTop } from "@/components/ScrollToTop";
import { routeSlugs, languages } from "@/i18n/config";
import Index from "./pages/Index";
import FinancnePoradenstvo from "./pages/FinancnePoradenstvo";
import TransakcnePoradenstvo from "./pages/TransakcnePoradenstvo";
import PoradenstvoOcenovanie from "./pages/PoradenstvoOcenovanie";
import OcenovaniePodnikov from "./pages/OcenovaniePodnikov";
import OceňovanieDusevnehoVlastnictva from "./pages/OceňovanieDusevnehoVlastnictva";
import OceňovanieInychZloziek from "./pages/OceňovanieInychZloziek";
import ZnaleckaCinnost from "./pages/ZnaleckaCinnost";
import Tim from "./pages/Tim";
import Referencie from "./pages/Referencie";
import OdborneClanky from "./pages/OdborneClanky";
import Kontakt from "./pages/Kontakt";
import Legal from "./pages/Legal";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Generate routes for all languages
const generateRoutes = () => {
  const routes: { path: string; element: React.ReactNode }[] = [];
  
  for (const lang of languages) {
    const s = routeSlugs[lang];
    routes.push(
      { path: s.home, element: <Index /> },
      { path: s.financnePoradenstvo, element: <FinancnePoradenstvo /> },
      { path: s.transakcnePoradenstvo, element: <TransakcnePoradenstvo /> },
      { path: s.poradenstvoOcenovanie, element: <PoradenstvoOcenovanie /> },
      { path: s.ocenovaniePodnikov, element: <OcenovaniePodnikov /> },
      { path: s.ocenovanieDusevnehoVlastnictva, element: <OceňovanieDusevnehoVlastnictva /> },
      { path: s.ocenovanieInychZloziek, element: <OceňovanieInychZloziek /> },
      { path: s.znaleckaCinnost, element: <ZnaleckaCinnost /> },
      { path: s.tim, element: <Tim /> },
      { path: s.referencie, element: <Referencie /> },
      { path: s.odborneClanky, element: <OdborneClanky /> },
      { path: s.kontakt, element: <Kontakt /> },
      { path: s.ochranaOsobnychUdajov, element: <Legal page="ochrana" /> },
      { path: s.cookies, element: <Legal page="cookies" /> },
      { path: s.podmienky, element: <Legal page="podmienky" /> },
    );
  }
  
  return routes;
};

const allRoutes = generateRoutes();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/aprecia">
        <LanguageProvider>
          <ScrollToTop />
          <Routes>
            {allRoutes.map((r) => (
              <Route key={r.path} path={r.path} element={r.element} />
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </LanguageProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
