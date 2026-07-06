import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import { useEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

// Pages
import Home from "./pages/Home";
import Attorney from "./pages/Attorney";
import PracticeAreas from "./pages/PracticeAreas";
import CriminalDefense from "./pages/CriminalDefense";
import DUI from "./pages/DUI";
import DomesticViolence from "./pages/DomesticViolence";
import PersonalInjury from "./pages/PersonalInjury";
import CarAccidents from "./pages/CarAccidents";
import SlipAndFall from "./pages/SlipAndFall";
import FamilyLaw from "./pages/FamilyLaw";
import Divorce from "./pages/Divorce";
import ChildCustody from "./pages/ChildCustody";
import HollywoodFL from "./pages/HollywoodFL";
import MiramarFL from "./pages/MiramarFL";
import FortLauderdaleFL from "./pages/FortLauderdaleFL";
import Testimonials from "./pages/Testimonials";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import Disclaimer from "./pages/Disclaimer";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const CHAT_WIDGET_SRC = "https://widgets.leadconnectorhq.com/loader.js";
const CHAT_WIDGET_RESOURCES = "https://widgets.leadconnectorhq.com/chat-widget/loader.js";
const CHAT_WIDGET_ID = "6a47a2c4f73312b761257990";

/** Injects / removes the LeadConnector chat widget based on current route */
function ChatWidget() {
  const [location] = useLocation();

  useEffect(() => {
    const isContactPage = location === "/contact";

    // Remove any existing widget script + widget DOM node when on contact page
    const existingScript = document.getElementById("lc-chat-script");
    if (isContactPage) {
      if (existingScript) existingScript.remove();
      // Also remove the widget container if it was already rendered
      const widgetEl = document.querySelector("[data-widget-id]");
      if (widgetEl) (widgetEl as HTMLElement).style.display = "none";
      return;
    }

    // Show widget if it was hidden
    const widgetEl = document.querySelector("[data-widget-id]");
    if (widgetEl) {
      (widgetEl as HTMLElement).style.display = "";
      return; // already loaded
    }

    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "lc-chat-script";
      script.src = CHAT_WIDGET_SRC;
      script.setAttribute("data-resources-url", CHAT_WIDGET_RESOURCES);
      script.setAttribute("data-widget-id", CHAT_WIDGET_ID);
      script.async = true;
      document.body.appendChild(script);
    }
  }, [location]);

  return null;
}

function Router() {
  return (
    <Switch>
      {/* Core */}
      <Route path="/" component={Home} />
      <Route path="/attorney" component={Attorney} />
      <Route path="/practice-areas" component={PracticeAreas} />

      {/* Criminal Defense */}
      <Route path="/criminal-defense" component={CriminalDefense} />
      <Route path="/criminal-defense/dui" component={DUI} />
      <Route path="/criminal-defense/domestic-violence" component={DomesticViolence} />

      {/* Personal Injury */}
      <Route path="/personal-injury" component={PersonalInjury} />
      <Route path="/personal-injury/car-accidents" component={CarAccidents} />
      <Route path="/personal-injury/slip-and-fall" component={SlipAndFall} />

      {/* Family Law */}
      <Route path="/family-law" component={FamilyLaw} />
      <Route path="/family-law/divorce" component={Divorce} />
      <Route path="/family-law/child-custody" component={ChildCustody} />

      {/* Location Pages */}
      <Route path="/hollywood-fl" component={HollywoodFL} />
      <Route path="/miramar-fl" component={MiramarFL} />
      <Route path="/fort-lauderdale-fl" component={FortLauderdaleFL} />

      {/* Content & Utility */}
      <Route path="/testimonials" component={Testimonials} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/contact" component={Contact} />
      <Route path="/disclaimer" component={Disclaimer} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />

      {/* 404 */}
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <ChatWidget />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
