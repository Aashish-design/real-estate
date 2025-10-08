import Hero from "../Components/Hero";
import Header from "../Components/Header";
import Tag from "../Components/Tag";
import Footer from "../Components/Footer";
import FAQAccordionSmooth from "../Components/FAQAccordionSmooth";
import LegalDocumentsSection from "../Components/LegalDocumentsSection";
import { Link } from "react-router-dom";
import SubsidiariesSection from "../Components/SubsidiariesSection";

const About = () => {
  return (
    <div className="bg-[#F8F5F1]">
      <Header />
      <div id="section-1" className="mt-[-11vh] sm:mt-[-24vh]">
        <Hero name="About Us." />
      </div>
      <div
        id="section-2"
        className="w-[100%] h-[100vh] flex-col flex md:flex-row px-[4vw] pt-[4vw] md:pt-[2vw] pb-[0vw] gap-[10vw] md:gap-[3vw] mt-[1vw]"
      >
        <div
          id="part-1"
          className="w-[100%] md:w-[50%] flex flex-col gap-[3vw] md:gap-[0]"
        >
          <div id="area-1" className="flex flex-col gap-[2vw] md:gap-[1vw]">
            <Tag name="ABOUT US" />
            <h1 className="text-[6vw] md:text-[2vw] font-[Cabinet] font-[700]">
              About our firm
            </h1>
            <p className="font-[Cabinet] text-[4.1vw] md:text-[1.2vw] text-[#6b7280] font-[500]">
              At our firm, we pride ourselves on delivering tailored solutions
              that empower businesses to thrive. With years of experience across
              various industries, our dedicated team is committed to driving
              growth and operational excellence.
            </p>
          </div>
          <div
            id="area-2"
            className="flex mt-[2.5vw] md:mt-[1.5vw] gap-[2vw] md:gap-[1vw]"
          >
            <Link to="/properties">
              <button className="bg-[#E2252D] cursor-pointer text-white font-[Cabinet] rounded-[8px] px-[3vw] py-[3vw] md:py-[0.6vw] md:px-[1vw] text-[3.5vw] md:text-[1vw]">
                All Properties
              </button>
            </Link>
            <Link to="/contact">
              <button className="border-[1px] cursor-pointer border-[#E2252d] font-[Cabinet] font-[500] text-[#E2252d] rounded-[8px] px-[3vw] py-[3vw] md:p-[0.6vw] md:px-[1.2vw] text-[3.5vw] md:text-[1vw]">
                Contact Us
              </button>
            </Link>
          </div>
          <div
            id="area-3"
            className="border-t-[1px] border-black mt-[4.5vw] md:mt-[3vw]"
          ></div>
          <div id="area-4" className="flex gap-[3vw] mt-[3vw] md:mt-[2vw]">
            <div id="box-1">
              {" "}
              <h1 className="text-[8vw] md:text-[3vw] font-[Cabinet] font-[500]">
                95%
              </h1>
              <h1 className="text-[4.1vw] md:text-[1vw] text-[#6b7280] font-[500] font-[Cabinet]">
                Complete customer satisfaction
              </h1>
            </div>
            <div id="box-2">
              {" "}
              <h1 className="text-[8vw] md:text-[3vw] font-[Cabinet] font-[500]">
                10+{" "}
              </h1>
              <h1 className="text-[4.1vw] md:text-[1vw] text-[#6b7280] font-[500] font-[Cabinet]">
                Innovation and valuable insight
              </h1>
            </div>
          </div>
          <div id="area-5" className="flex gap-[3vw] mt-[5vw] md:mt-[3vw]">
            <div id="box-1">
              {" "}
              <h1 className="text-[8vw] md:text-[3vw] font-[Cabinet] font-[500]">
                $10m
              </h1>
              <h1 className="text-[4.1vw] md:text-[1vw] text-[#6b7280] font-[500] font-[Cabinet]">
                Highly efficient financial strategies
              </h1>
            </div>
            <div id="box-2">
              {" "}
              <h1 className="text-[8vw] md:text-[3vw] font-[Cabinet] font-[500]">
                45%{" "}
              </h1>
              <h1 className="text-[4.1vw] md:text-[1vw] text-[#6b7280] font-[500] font-[Cabinet]">
                Complete customer satisfaction
              </h1>
            </div>
          </div>
        </div>
        <div id="part-2" className="w-[100%] md:w-[50%]">
          <img
            className="rounded-[16px] object-cover w-[100%]"
            src="src/assets/images/property-7.webp"
            alt=""
          />
        </div>
      </div>
      <div
        id="section-3"
        className="w-[100%] flex-col flex md:flex-row px-[4vw] py-[6vw] md:py-[2vw] gap-[2vw] md:gap-[2vw] mt-[60vw] md:mt-[-4vw]"
      >
        <div
          id="part-1"
          className="w-[100%] md:w-[50%] flex flex-col gap-[1.2vw]"
        >
          <Tag name="FAQ'S" />
          <h1 className="text-[6vw] md:text-[2vw] font-[Cabinet] font-[700]">
            Frequently Asked Questions
          </h1>
          <img
            className="hidden md:block rounded-[16px] object-cover w-[100%] h-[85%]"
            src="src/assets/images/property-1.webp"
            alt=""
          />
        </div>
        <div
          id="part-2"
          className="w-[100%] md:w-[50%] flex justify-center items-center"
        >
          <FAQAccordionSmooth />
        </div>
      </div>
      <div
        id="section-4"
        className="w-[100%] flex flex-col px-[4vw] pt-[2vw] gap-[4vw] md:gap-[2vw]"
      >
        <div
          id="part-1"
          className="w-[100%] flex flex-col gap-[2vw] md:gap-[1.2vw]"
        >
          <Tag name="FACTS" />
          <h1 className="text-[6vw] md:text-[2vw] font-[Cabinet] font-[700]">
            Some more fun facts about our company
          </h1>
        </div>
        <div
          id="part-2"
          className="w-[100%] md:h-[200px] flex justify-between border-t-[1px] border-b-[1px] border-[#ddd]"
        >
          <div
            id="box-1"
            className="w-[275px] h-[100%] flex flex-col justify-center items-center border-r-[1px] border-[#ddd] gap-[1vw] py-[6vw] md:py-[0] px-[3vw]"
          >
            <h4 className="font-[Cabinet] text-center text-[3.8vw] md:text-[1.2vw] text-[#777]">
              Total Property Deliever
            </h4>
            <h1 className="text-[6vw] md:text-[3vw] font-[Cabinet] font-[600]">
              1K+
            </h1>
          </div>
          <div
            id="box-2"
            className="w-[275px] h-[100%] flex flex-col justify-center items-center border-r-[1px] border-[#ddd] gap-[1vw] py-[6vw] md:py-[0] px-[3vw]"
          >
            <h4 className="font-[Cabinet] text-center text-[3.8vw] md:text-[1.2vw] text-[#777]">
              Clients served worldwide
            </h4>
            <h1 className="text-[6vw] md:text-[3vw] font-[Cabinet] font-[600]">
              2.3K+
            </h1>
          </div>
          <div
            id="box-3"
            className="w-[275px] h-[100%] flex flex-col justify-center items-center border-r-[1px] border-[#ddd] gap-[1vw] py-[6vw] md:py-[0] px-[3vw]"
          >
            <h4 className="font-[Cabinet] text-center text-[3.8vw] md:text-[1.2vw] text-[#777]">
              Have awards more
            </h4>
            <h1 className="text-[6vw] md:text-[3vw] font-[Cabinet] font-[600]">
              5+
            </h1>
          </div>
          <div
            id="box-4"
            className="w-[275px] h-[100%] flex flex-col justify-center items-center border-r-[1px] border-[#ddd] gap-[1vw] py-[6vw] md:py-[0] px-[3vw]"
          >
            <h4 className="font-[Cabinet] text-center text-[3.8vw] md:text-[1.2vw] text-[#777]">
              Daily quote msg.
            </h4>
            <h1 className="text-[6vw] md:text-[3vw] font-[Cabinet] font-[600]">
              12+
            </h1>
          </div>
          <div
            id="box-5"
            className="w-[275px] h-[100%] flex flex-col justify-center items-center gap-[1vw] py-[6vw] md:py-[0] px-[3vw]"
          >
            <h4 className="font-[Cabinet] text-center text-[3.8vw] md:text-[1.2vw] text-[#777]">
              Ratings out of 5.0
            </h4>
            <h1 className="text-[6vw] md:text-[3vw] font-[Cabinet] font-[600]">
              4.9
            </h1>
          </div>
        </div>
      </div>
      <div
        id="section-5"
        className="w-[100%] flex flex-col px-[4vw] pt-[2vw] gap-[4vw] md:gap-[2vw] mt-[6vw] md:mt-[2vw]"
      >
        <div
          id="part-1"
          className="w-[100%] flex flex-col gap-[2vw] md:gap-[1.2vw]"
        >
          <Tag name="Documents" />
          <h1 className="text-[6vw] md:text-[2vw] font-[Cabinet] font-[700]">
            Legal Documents
          </h1>
        </div>
        <div
          id="part-2"
          className="w-[100%] flex flex-col gap-[2vw] md:gap-[1.2vw] px-[0vw]"
        >
          <LegalDocumentsSection />
        </div>
      </div>
      <div
        id="section-6"
        className="w-[100%] flex flex-col px-[4vw] pt-[2vw] gap-[4vw] md:gap-[2vw] mt-[6vw] md:mt-[2vw]"
      >
        <div
          id="part-1"
          className="w-[100%] flex flex-col gap-[2vw] md:gap-[1.2vw]"
        >
          <Tag name="Subsidiaries" />
          <h1 className="text-[6vw] md:text-[2vw] font-[Cabinet] font-[700]">
            Our Subsidiary Companies
          </h1>
        </div>
        <div
          id="part-2"
          className="w-[100%] flex flex-col gap-[2vw] md:gap-[1.2vw] px-[0vw]"
        >
          <SubsidiariesSection />
        </div>
      </div>
      <div id="section-7">
        <Footer />
      </div>
    </div>
  );
};

export default About;
