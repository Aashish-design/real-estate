import { useState } from "react";
import { X } from "lucide-react";

const FilterSidebar = ({ isOpen, onClose, onApply }) => {
  const [selectedArea, setSelectedArea] = useState("");
  const [selectedSector, setSelectedSector] = useState("");
  const [selectedBlock, setSelectedBlock] = useState("");
  const [plotNumber, setPlotNumber] = useState("");
  const [plotStatus, setPlotStatus] = useState("All");

  const handleApply = () => {
    onApply({
      area: selectedArea,
      sector: selectedSector,
      block: selectedBlock,
      plotNumber: plotNumber,
      plotStatus: plotStatus,
    });
    onClose();
  };

  return (
    <>
      {/* Background Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      ></div>

      {/* Sidebar Panel */}
      <div
        className={`fixed font-[Cabinet] top-0 left-0 h-full w-[85%] sm:w-[60%] md:w-[400px] z-[999999] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold">Filter Properties</h2>
          <button
            onClick={onClose}
            className="p-1 rounded hover:bg-gray-100 transition"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-5 flex flex-col gap-5">
          {/* Area Filter */}
          <div>
            <label className="block text-sm font-medium mb-1">Area</label>
            <select
              value={selectedArea}
              onChange={(e) => setSelectedArea(e.target.value)}
              className="w-full border rounded-md p-2 focus:ring-2 focus:ring-black focus:outline-none"
            >
              <option value="">Select Area</option>
              <option value="Asuran">Asuran</option>
              <option value="Kusmhi">Kusmhi</option>
              <option value="Rapti Nagar">Rapti Nagar</option>
              <option value="Nausad">Nausad</option>
            </select>
          </div>

          {/* Sector Filter */}
          <div>
            <label className="block text-sm font-medium mb-1">Sector</label>
            <select
              value={selectedSector}
              onChange={(e) => setSelectedSector(e.target.value)}
              className="w-full border rounded-md p-2 focus:ring-2 focus:ring-black focus:outline-none"
            >
              <option value="">Select Sector</option>
              <option value="Sector 1">Sector 1</option>
              <option value="Sector 2">Sector 2</option>
              <option value="Sector 3">Sector 3</option>
            </select>
          </div>

          {/* Block Filter */}
          <div>
            <label className="block text-sm font-medium mb-1">Block</label>
            <select
              value={selectedBlock}
              onChange={(e) => setSelectedBlock(e.target.value)}
              className="w-full border rounded-md p-2 focus:ring-2 focus:ring-black focus:outline-none"
            >
              <option value="">Select Block</option>
              <option value="A">Block A</option>
              <option value="B">Block B</option>
              <option value="C">Block C</option>
            </select>
          </div>

          {/* Plot Number */}
          <div>
            <label className="block text-sm font-medium mb-1">Plot Number</label>
            <input
              type="text"
              value={plotNumber}
              onChange={(e) => setPlotNumber(e.target.value)}
              placeholder="Enter Plot Number"
              className="w-full border rounded-md p-2 focus:ring-2 focus:ring-black focus:outline-none"
            />
          </div>

          {/* Plot Status */}
          <div>
            <label className="block text-sm font-medium mb-1">Plot Status</label>
            <select
              value={plotStatus}
              onChange={(e) => setPlotStatus(e.target.value)}
              className="w-full border rounded-md p-2 focus:ring-2 focus:ring-black focus:outline-none"
            >
              <option value="All">All</option>
              <option value="Available">Available</option>
              <option value="Sold">Sold</option>
            </select>
          </div>

          {/* Apply Button */}
          <button
            onClick={handleApply}
            className="bg-[#E2252D] text-white py-2 rounded-md transition"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;
