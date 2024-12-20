import { Navbar } from "./components/nav-bar";
import { HeroSection } from "./components/hero-section";
import { PageSection } from "./components/page-section";
import { IconSection } from "./components/icon-section";
import { FeatureSection } from "./components/feature-section";
import { LicenseSection } from "./components/license-section";
import { FAQSection } from "./components/faq-section";
import { Footer } from "./components/footer";
function App() {
  return (
    <>
      <header className="mb-8 max-w-7xl mx-auto">
        <Navbar />
      </header>
      <main className="">
        <HeroSection />

        <PageSection />
        <IconSection />
        <div className="w-12 bg-blueBoost mx-auto mb-12 border-b-2 border-b-blueBoost"></div>
        <FeatureSection />
        <div className="relative mb-12">
          <div className="absolute top-0 left-0 w-full h-full bg-[#f8f9fa] -skew-y-6 lg:-skew-y-3 origin-top-left -z-10"></div>
        <LicenseSection />
          <div className="w-12 bg-blueBoost mx-auto mb-12 border-b-2 border-b-blueBoost"></div>
        <FAQSection />
        </div>
       <Footer/>
      </main>
    </>
  );
}

export default App;
