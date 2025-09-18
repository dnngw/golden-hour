import HeroSection from "./components/hero-section";
import AutoDetectionLocation from "./components/auto-detection-location";
import ManualEntryInput from "./components/manual-entry-input";
import BenefitSection from "./components/benefit-section";

function App() {
  return (
    <>
      <div className=" bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
        <div className="mx-4 md:mx-2">
          <div className="min-h-screen sm:w-[65%] md:w-[70%] lg:w-[50%] xl:w-[45%] m-auto flex flex-col justify-center">
            <HeroSection />
            <div className="flex flex-col md:flex-row gap-3 my-5">
              <AutoDetectionLocation />
              <ManualEntryInput />
            </div>
            <div className="mt-5">
              <BenefitSection />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
