import Hero from "../Components/Hero";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import EmiCalculator from "../Components/EmiCalculator";

const EMI = () => {
  return (
    <div className="bg-[#F8F5F1]">
      <Header />
      <div id="section-1" className="mt-[-11vh] sm:mt-[-24vh]">
        <Hero name="EMI Calculator." />
      </div>
      <div id="section-1" className="px-[0.2vw] md:px-[0vw]">
        <EmiCalculator/>
      </div>
      <div id="section-5">
        <Footer />
      </div>
    </div>
  );
};

export default EMI;
