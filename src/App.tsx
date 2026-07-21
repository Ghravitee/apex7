import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { LimitsTable } from "./components/LimitsTable";
import { RiskTrust } from "./components/RiskTrust";
import { FAQ } from "./components/FAQ";
import { CTAFooter } from "./components/CTAFooter";

function App() {
  return (
    <div className="min-h-screen bg-arctic">
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <LimitsTable />
        <RiskTrust />
        <FAQ />
      </main>
      <CTAFooter />
    </div>
  );
}

export default App;
