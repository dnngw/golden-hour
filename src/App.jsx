import HeroSection from "./components/hero-section";
import AutoDetectionLocation from "./components/auto-detection-location";
import ManualEntryInput from "./components/manual-entry-input";
import BenefitSection from "./components/benefit-section";

function App() {
  return (
    <>
      <div>
        <div className="min-h-screen sm:w-[65%] md:w-[60%] lg:w-[45%] m-auto flex flex-col justify-center">
          <HeroSection />
          <div className="flex flex-col md:flex-row gap-3 my-4">
            <AutoDetectionLocation />
            <ManualEntryInput />
          </div>
          <div>
            <BenefitSection />
          </div>
        </div>
        <div>
          <p>d</p>
          <p>sdfdfs</p>
          <p>sdfds</p>
        </div>
      </div>
    </>
  );
}

export default App;
