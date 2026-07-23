import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { LimitsTable } from "./components/LimitsTable";
import { RiskTrust } from "./components/RiskTrust";
import { FAQ } from "./components/FAQ";
import { CTAFooter } from "./components/CTAFooter";
import { Pricing } from "./components/Pricing";
// import { TokenInfo } from "./components/TokenInfo";

function App() {
  return (
    <div className="min-h-screen bg-arctic">
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        {/* <TokenInfo /> */}
        <LimitsTable />
        <Pricing />
        <RiskTrust />
        <FAQ />
      </main>
      <CTAFooter />
    </div>
  );
}

export default App;
