import React, { useState } from "react";

const Position = ({ role, location }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [fileName, setFileName] = useState("");

  return (
    <>
      {/* Job Card */}
      <div className="bg-white w-full px-[2.2vw] py-[2.2vw] font-[Cabinet] md:px-[2vw] md:py-[1.2vw] flex justify-between items-center shadow-sm rounded-[8px]">
        <div id="part-1" className="flex flex-col font-[Cabinet] gap-[0.3vw]">
          <h1 className="font-[Cabinet] font-[600] text-[4vw] md:text-[1.25vw]">
            {role}
          </h1>
          <h3 className="font-[Cabinet] text-[3vw] md:text-[1vw] text-[#555]">
            {location}
          </h3>
        </div>
        <div id="part-2">
          <button
            onClick={() => setIsOpen(true)}
            className="bg-[#E2252D] text-white font-[Cabinet] rounded-[8px] px-[3vw] py-[2vw] md:p-[1vw] md:px-[1.2vw] text-[3.3vw] md:text-[1vw] hover:bg-[#c41e25] transition-colors duration-300"
          >
            Apply Now
          </button>
        </div>
      </div>

      {/* Modal (popup) */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm font-[Cabinet] flex justify-center items-center z-50 px-4 animate-fadeIn">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-lg p-6 md:p-8 relative transform transition-all duration-300 ease-out scale-95 opacity-0 animate-popupIn">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-[#E2252D] text-xl"
            >
              ✕
            </button>

            {/* Modal Content */}
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Apply for {role}
            </h2>

            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#E2252D]"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#E2252D]"
              />

              {/* Custom File Upload with filename display */}
              <div className="relative w-full">
                <input
                  type="file"
                  id="resume"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  onChange={(e) => setFileName(e.target.files[0]?.name || "")}
                />
                <div className="border border-gray-300 rounded-lg px-4 py-3 bg-white flex justify-between items-center">
                  <span
                    className={fileName ? "text-gray-700" : "text-gray-400"}
                  >
                    {fileName || "Upload a Resume"}
                  </span>
                  <span className="bg-[#E2252D] text-white text-sm px-3 py-1 rounded-md">
                    Browse
                  </span>
                </div>
              </div>

              <textarea
                placeholder="Your Message / Cover Letter"
                rows="3"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#E2252D]"
              ></textarea>

              <button
                type="submit"
                className="bg-[#E2252D] text-white font-medium py-2 rounded-lg hover:bg-[#c41e25] transition-colors duration-300"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes popupIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease forwards;
        }
        .animate-popupIn {
          animation: popupIn 0.35s ease forwards;
        }
      `}</style>
    </>
  );
};

export default Position;
