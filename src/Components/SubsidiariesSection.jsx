import React from "react";
import { motion } from "framer-motion";

const subsidiaries = [
  {
    name: "The Family Members",
    logo: "/src/assets/images/1.avif",
    description:
      "Innovating luxury real estate with skyline-defining architecture and urban elegance.",
  },
  {
    name: "Vijay Path Seva Sanstha",
    logo: "/src/assets/images/2.avif",
    description:
      "Pioneering eco-friendly living through sustainable and nature-inspired housing projects.",
  },
  {
    name: "Prime Properties",
    logo: "/src/assets/images/3.avif",
    description:
      "Delivering premium commercial and residential spaces that inspire modern lifestyles.",
  },
  {
    name: "UrbanEdge Developers",
    logo: "/src/assets/images/4.avif",
    description:
      "Redefining the cityscape with smart real estate solutions and cutting-edge design.",
  },
];

const SubsidiariesSection = () => {
  return (
    <section className="relative py-0 md:py-2 overflow-hidden">
      <div className="relative z-10 w-full mx-auto px-0 md:px-0 font-[Cabinet]">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {subsidiaries.map((company, index) => (
            <div
              key={index}
              className="relative group bg-white backdrop-blur-lg border border-white/40 rounded-2xl shadow-sm overflow-hidden p-8 flex flex-col items-center text-center transition-all duration-500 hover:shadow-md hover:-translate-y-2"
            >
              <div className="w-24 h-24 mb-5 rounded-full bg-white/60 flex items-center justify-center shadow-inner">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-[100%] h-[100%] rounded-[100%] object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-[#E2252D] transition-colors duration-300">
                {company.name}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {company.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubsidiariesSection;
