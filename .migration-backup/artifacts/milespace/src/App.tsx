import { useEffect } from "react";
import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/layout/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Pricing from "@/pages/Pricing";
import PackageDetail from "@/pages/PackageDetail";
import Portfolio from "@/pages/Portfolio";
import Contact from "@/pages/Contact";
import Legal from "@/pages/Legal";
import UK from "@/pages/UK";
import USA from "@/pages/USA";
import SaaS from "@/pages/SaaS";
import SaaSChamaDesk from "@/pages/SaaSChamaDesk";
import SaaSPOS from "@/pages/SaaSPOS";
import CybersecurityPage from "@/pages/Cybersecurity";
import ClientMailer from "@/pages/ClientMailer";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();
const routerBase = import.meta.env.BASE_URL.replace(/\/$/, "");
const isKabzMountedAtBase = routerBase === "/kabz";

function Router() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location]);

  return (
    <Layout>
      <Switch>
        {isKabzMountedAtBase ? <Route path="/" component={ClientMailer} /> : null}
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/pricing/:category/:slug" component={PackageDetail} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/uk" component={UK} />
        <Route path="/usa" component={USA} />
        <Route path="/saas" component={SaaS} />
        <Route path="/saas/chamadesk" component={SaaSChamaDesk} />
        <Route path="/saas/milespace-chamadesk" component={SaaSChamaDesk} />
        <Route path="/saas/pos" component={SaaSPOS} />
        <Route path="/cybersecurity" component={CybersecurityPage} />
        <Route path="/kabz" component={ClientMailer} />
        <Route path="/client-mailer" component={ClientMailer} />
        <Route path="/legal" component={Legal} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={routerBase}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
