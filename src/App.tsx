import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
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
import { OchranaOsobnychUdajov, Cookies, Podmienky } from "./pages/Legal";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/financne-poradenstvo" element={<FinancnePoradenstvo />} />
          <Route path="/financne-poradenstvo/transakcne-poradenstvo" element={<TransakcnePoradenstvo />} />
          <Route path="/financne-poradenstvo/poradenstvo-pri-ocenovani" element={<PoradenstvoOcenovanie />} />
          <Route path="/financne-poradenstvo/poradenstvo-pri-ocenovani/ocenovanie-podnikov" element={<OcenovaniePodnikov />} />
          <Route path="/financne-poradenstvo/poradenstvo-pri-ocenovani/ocenovanie-dusevneho-vlastnictva" element={<OceňovanieDusevnehoVlastnictva />} />
          <Route path="/financne-poradenstvo/poradenstvo-pri-ocenovani/ocenovanie-inych-zloziek-majetku" element={<OceňovanieInychZloziek />} />
          <Route path="/znalecka-cinnost" element={<ZnaleckaCinnost />} />
          <Route path="/tim" element={<Tim />} />
          <Route path="/referencie" element={<Referencie />} />
          <Route path="/odborne-clanky" element={<OdborneClanky />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/ochrana-osobnych-udajov" element={<OchranaOsobnychUdajov />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/podmienky" element={<Podmienky />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
