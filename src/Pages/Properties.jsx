import { useState } from "react";
import Hero from "../Components/Hero";
import Header from "../Components/Header";
import Tag from "../Components/Tag";
import Footer from "../Components/Footer";
import PropertyCard from "../Components/PropertyCard";
import FilterSidebar from "../Components/FilterSidebar";

const Properties = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    area: "",
    sector: "",
    block: "",
    plotNumber: "",
    plotStatus: "All",
  });

  //All Property Data
  const allProperties = [
    {
      name: "Mountain Haven",
      src: "/src/assets/images/1.avif",
      address: "Asuran Chowk, Gorakhpur",
      area: "Asuran",
      sector: "Sector 1",
      block: "A",
      plotNumber: "101",
      plotStatus: "Available",
      price: "$180,000 per night",
      rating: "⭐ 4.9 (20)",
    },
    {
      name: "Lakeside Lodge",
      src: "/src/assets/images/2.avif",
      address: "Kusmhi Road, Gorakhpur",
      area: "Kusmhi",
      sector: "Sector 2",
      block: "B",
      plotNumber: "205",
      plotStatus: "Sold",
      price: "$200,000 per night",
      rating: "⭐ 4.8 (15)",
    },
    {
      name: "Serenity Stay",
      src: "/src/assets/images/3.avif",
      address: "Rapti Nagar, Gorakhpur",
      area: "Rapti Nagar",
      sector: "Sector 3",
      block: "C",
      plotNumber: "307",
      plotStatus: "Available",
      price: "$220,000 per night",
      rating: "⭐ 5.0 (12)",
    },
    {
      name: "Cedarwood Cottage",
      src: "/src/assets/images/4.avif",
      address: "Nausad Chowk, Gorakhpur",
      area: "Nausad",
      sector: "Sector 2",
      block: "A",
      plotNumber: "108",
      plotStatus: "Sold",
      price: "$180,000 per night",
      rating: "⭐ 4.7 (25)",
    },
  ];

  // Filtering Logic
  const filteredProperties = allProperties.filter((property) => {
    const areaMatch =
      !filters.area ||
      property.area.toLowerCase() === filters.area.toLowerCase();

    const sectorMatch =
      !filters.sector ||
      property.sector.toLowerCase() === filters.sector.toLowerCase();

    const blockMatch =
      !filters.block ||
      property.block.toLowerCase() === filters.block.toLowerCase();

    const plotNumberMatch =
      !filters.plotNumber ||
      property.plotNumber
        .toLowerCase()
        .includes(filters.plotNumber.toLowerCase());

    const plotStatusMatch =
      filters.plotStatus === "All" ||
      property.plotStatus.toLowerCase() === filters.plotStatus.toLowerCase();

    return (
      areaMatch &&
      sectorMatch &&
      blockMatch &&
      plotNumberMatch &&
      plotStatusMatch
    );
  });

  // Apply Filters from Sidebar
  const handleApplyFilters = (selected) => {
    setFilters(selected);
    setIsFilterOpen(false);
  };

  // Clear Filters
  const clearFilters = () => {
    setFilters({
      area: "",
      sector: "",
      block: "",
      plotNumber: "",
      plotStatus: "All",
    });
  };

  return (
    <div className="bg-[#F8F5F1] min-h-screen relative overflow-hidden">
      <Header />

      {/* Hero Section */}
      <div id="section-1" className="mt-[-11vh] sm:mt-[-24vh]">
        <Hero name="All Properties." />
      </div>

      {/* Filter Section */}
      <div className="w-[100%] px-[4vw] mt-[3vw] flex justify-between items-center flex-wrap gap-4">
        <div className="w-[100%]">
          <Tag name="All Properties" />
          <div
            id="inside"
            className="w-[100%] pb-[1.8vw] md:pb-[0vw] flex justify-between items-center"
          >
            <h1 className="text-[6vw] md:text-[2vw] mt-[4vw] md:mt-[1vw] font-[Cabinet] font-[700]">
              Property Listings
            </h1>
            <div className="flex gap-3">
              {(filters.area || filters.sector) && (
                <button
                  onClick={clearFilters}
                  className="bg-[#E2252D] text-white px-4 font-[Cabinet] py-2 rounded-md hover:bg-gray-400 transition"
                >
                  Clear
                </button>
              )}
              <button
                onClick={() => setIsFilterOpen(true)}
                className="bg-[#111] text-white font-[Cabinet] px-5 py-2 rounded-md hover:bg-[#333] transition"
              >
                Filter
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar Popup */}
      <FilterSidebar
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        onApply={handleApplyFilters}
      />

      {/* Properties Grid */}
      <div
        id="section-2"
        className="w-full flex flex-wrap justify-center md:justify-start px-[4vw] pt-[2vw] gap-[6vw] md:gap-[1.5vw]"
      >
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))
        ) : (
          <p className="text-center w-full text-gray-500 text-lg">
            No properties found for selected filters
          </p>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Properties;
