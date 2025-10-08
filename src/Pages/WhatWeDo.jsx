import React from "react";
import Hero from "../Components/Hero";
import Header from "../Components/Header";
import Tag from "../Components/Tag";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

const WhatWeDo = () => {
  return (
    <div className="bg-[#F8F5F1]">
      <Header />
      <div id="section-1" className="mt-[-11vh] sm:mt-[-24vh]">
        <Hero name="What We Do." />
      </div>
      <div
        id="section-2"
        className="w-full px-[4vw] pt-[4vw] flex flex-col gap-[2vw]"
      >
        <div id="part-1" className="flex flex-col gap-[1vw] justify-between">
          <Tag name="FEATURED PROJECTS" />
          <h1 className="text-[6vw] md:text-[2vw] font-[Cabinet] font-[700]">
            Architectural Marvels & Interior Masterpieces
          </h1>
        </div>
        <div id="part-2">
          <div
            id="box-1"
            className=" w-full h-fit flex pt-[5vw] pb-[4vw] md:pt-[2vw] md:pb-[1vw] border-t-[1px] border-b-[0px] border-[#ccc8c8]"
          >
            <div
              id="area-1"
              className="w-[50%] md:w-[20%] flex flex-col justify-between"
            >
              <h1 className="font-[Cabinet] font-[500] text-[5vw] md:text-[1.2vw]">
                Lecturer’s Office Building
              </h1>
              {/* For Mobile View */}
              <Link to="/contact">
                <button className="bg-[#E2252D] block md:hidden w-fit text-white font-[Cabinet] rounded-[8px] px-[2vw] py-[2.6vw] md:py-[0.5vw] md:px-[1vw] text-[3.5vw] md:text-[1vw] font-[500]">
                  Contact Us
                </button>
              </Link>
            </div>
            <div id="area-2" className="w-[50%] md:w-[40%]">
              <img
                className="object-cover w-[100%] h-[130px] md:h-[350px] rounded-[8px]"
                src="/src/assets/images/property-1.webp"
                alt=""
              />
            </div>
            <div
              id="area-3"
              className="hidden w-[40%] md:flex flex-col justify-between pl-[2vw]"
            >
              <p className="font-[Cabinet] text-[1.1vw]">
                Designed to elevate productivity, foster collaboration, and
                inspire creativity, this state-of-the-art facility sets the
                standard for modern corporate environments.
              </p>
              <h2 className="font-[Cabinet] font-[600] text-[1.2vw]">
                ARCHITECTURE
              </h2>
              <Link to="/contact">
                <button className="bg-[#E2252D] cursor-pointer w-fit text-white font-[Cabinet] rounded-[8px] px-[3vw] py-[3vw] md:py-[0.6vw] md:px-[1vw] text-[3.5vw] md:text-[1vw]">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div id="part-3">
          <div
            id="box-1"
            className=" w-full h-fit flex pt-[5vw] pb-[5vw] md:pt-[2vw] md:pb-[3vw] border-t-[1px] border-b-[1px] border-[#ccc8c8]"
          >
            <div
              id="area-1"
              className="w-[50%] md:w-[20%] flex flex-col justify-between"
            >
              <h1 className="font-[Cabinet] font-[500] text-[5vw] md:text-[1.2vw]">
                White Blocks House
              </h1>
              {/* For Mobile View */}
              <Link to="/contact">
                <button className="bg-[#E2252D] block md:hidden w-fit text-white font-[Cabinet] rounded-[8px] px-[2vw] py-[2.6vw] md:py-[0.5vw] md:px-[1vw] text-[3.5vw] md:text-[1vw] font-[500]">
                  Contact Us
                </button>
              </Link>
            </div>
            <div id="area-2" className="w-[50%] md:w-[40%]">
              <img
                className="object-cover w-[100%] h-[130px] md:h-[350px] rounded-[8px]"
                src="/src/assets/images/property-2.webp"
                alt=""
              />
            </div>
            <div
              id="area-3"
              className="hidden w-[40%] md:flex flex-col justify-between pl-[2vw]"
            >
              <p className="font-[Cabinet] text-[1.1vw]">
                Designed to elevate productivity, foster collaboration, and
                inspire creativity, this state-of-the-art facility sets the
                standard for modern corporate environments.
              </p>
              <h2 className="font-[Cabinet] font-[600] text-[1.2vw]">
                Exterior Design
              </h2>{" "}
              <Link to="/contact">
                <button className="bg-[#E2252D] cursor-pointer w-fit text-white font-[Cabinet] rounded-[8px] px-[3vw] py-[3vw] md:py-[0.6vw] md:px-[1vw] text-[3.5vw] md:text-[1vw]">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        id="section-3"
        className="w-full px-[4vw] pt-[4vw] flex flex-col gap-[4vw] md:gap-[2vw] mt-[5vw] md:mt-[-1.2vw]"
      >
        <div
          id="part-1"
          className="flex flex-col gap-[2vw] md:gap-[1vw] justify-between"
        >
          <Tag name="WHAT WE DO" />
          <h1 className="text-[6vw] md:text-[2vw] font-[Cabinet] font-[700]">
            Our Services
          </h1>
        </div>
        <div
          id="part-2"
          className="w-full py-[5vw] md:py-[2vw] border-t-[1px] border-b-[1px] border-[#ccc8c8] mt-[2vw] md:mt-[0vw]"
        >
          <div
            id="box-1"
            className="flex flex-col md:flex-row justify-between w-[100%] gap-[2.5vw]"
          >
            <div
              id="area-1"
              className="w-[100%] md:w-[50%] flex flex-col items-start gap-[2.5vw]"
            >
              <img
                className="h-[50px]"
                src="/src/assets/images/land.svg"
                alt=""
              />
              <h2 className="font-[Cabinet] text-[5vw] md:text-[1.5vw] font-[500]">
                Land Acquisition
              </h2>
            </div>
            <div id="area-2" className="w-[100%] md:w-[50%] flex items-center">
              <p className="font-[Cabinet] text-[4vw] md:text-[1.2vw]">
                Land acquisition involves the process of acquiring parcels of
                land for various purposes, such as development, or conservation.
              </p>
            </div>
          </div>
        </div>
        <div
          id="part-2"
          className="w-full py-[5vw] md:py-[2vw] border-b-[1px] border-[#ccc8c8] mt-[0vw] md:mt-[0vw]"
        >
          <div
            id="box-1"
            className="flex flex-col md:flex-row justify-between w-[100%] gap-[2.5vw]"
          >
            <div
              id="area-1"
              className="w-[100%] md:w-[50%] flex flex-col items-start gap-[2.5vw]"
            >
              <img
                className="h-[50px]"
                src="/src/assets/images/invest.svg"
                alt=""
              />
              <h2 className="font-[Cabinet] text-[5vw] md:text-[1.5vw] font-[500]">
                Investment Properties
              </h2>
            </div>
            <div id="area-2" className="w-[100%] md:w-[50%] flex items-center">
              <p className="font-[Cabinet] text-[4vw] md:text-[1.2vw]">
                Investment properties are real estate assets purchased with the
                intention of generating income or profit.
              </p>
            </div>
          </div>
        </div>
        <div
          id="part-2"
          className="w-full py-[5vw] md:py-[2vw] border-b-[1px] border-[#ccc8c8] mt-[0vw] md:mt-[0vw]"
        >
          <div
            id="box-1"
            className="flex flex-col md:flex-row justify-between w-[100%] gap-[2.5vw]"
          >
            <div
              id="area-1"
              className="w-[100%] md:w-[50%] flex flex-col items-start gap-[2.5vw]"
            >
              <img
                className="h-[50px]"
                src="/src/assets/images/Inspection.svg"
                alt=""
              />
              <h2 className="font-[Cabinet] text-[5vw] md:text-[1.5vw] font-[500]">
                Home Inspections
              </h2>
            </div>
            <div id="area-2" className="w-[100%] md:w-[50%] flex items-center">
              <p className="font-[Cabinet] text-[4vw] md:text-[1.2vw]">
                It involves a thorough assessment of a home's condition,
                identifying potential issues or needed repairs.
              </p>
            </div>
          </div>
        </div>
        <div
          id="part-2"
          className="w-full py-[5vw] md:py-[2vw] border-b-[1px] border-[#ccc8c8] md:mt-[0vw]"
        >
          <div
            id="box-1"
            className="flex flex-col md:flex-row justify-between w-[100%] gap-[2.5vw]"
          >
            <div
              id="area-1"
              className="w-[100%] md:w-[50%] flex flex-col items-start gap-[2.5vw]"
            >
              <img
                className="h-[50px]"
                src="/src/assets/images/land.svg"
                alt=""
              />
              <h2 className="font-[Cabinet] text-[5vw] md:text-[1.5vw] font-[500]">
                Land Acquisition
              </h2>
            </div>
            <div id="area-2" className="w-[100%] md:w-[50%] flex items-center">
              <p className="font-[Cabinet] text-[4vw] md:text-[1.2vw]">
                Land acquisition involves the process of acquiring parcels of
                land for various purposes, such as development, or conservation.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="section-5">
        <Footer />
      </div>
    </div>
  );
};

export default WhatWeDo;
