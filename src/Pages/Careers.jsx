import Hero from "../Components/Hero";
import Header from "../Components/Header";
import Tag from "../Components/Tag";
import Footer from "../Components/Footer";
import Position from "../Components/Position";

const Careers = () => {
  return (
    <div className="bg-[#F8F5F1]">
      <Header />
      <div id="section-1" className="mt-[-11vh] sm:mt-[-24vh]">
        <Hero name="Careers." />
      </div>
      <div
        id="section-2"
        className="w-[100%] flex-col flex md:flex-row px-[4vw] pt-[4vw] md:pt-[2vw] pb-[0vw] gap-[10vw] md:gap-[3vw] mt-[1vw]"
      >
        <div
          id="part-1"
          className="w-[100%] md:w-[100%] flex flex-col gap-[3vw] md:gap-[1.2vw]"
        >
          <div id="area-1" className="flex flex-col gap-[2vw] md:gap-[1vw]">
            <Tag name="CAREERS" />
            <h1 className="text-[6vw] md:text-[2vw] font-[Cabinet] font-[700]">
              Why Work With Us?
            </h1>
          </div>
          <div
            id="area-2"
            className="flex flex-col md:flex-row w-full gap-[4vw] md:gap-[1vw]"
          >
            <div
              id="box-1"
              className="bg-white rounded-[16px] px-[3.2vw] py-[3.8vw] md:px-[2vw] md:py-[2vw] shadow-sm flex flex-col gap-[1.6vw]  md:gap-[1vw] items-start"
            >
              <img
                className="h-[45px]"
                src="/src/assets/images/growth.svg"
                alt=""
              />
              <h1 className="font-[Cabinet] font-[600] text-[5vw] md:text-[1.4vw]">
                Career Growth
              </h1>
              <p className="font-[Cabinet]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Officiis, dolorum dignissimos labore obcaecati natus provident
                quas odit dicta sunt praesentium.
              </p>
            </div>
            <div
              id="box-2"
              className="bg-white rounded-[16px] px-[3.2vw] py-[3.8vw] md:px-[2vw] md:py-[2vw] shadow-sm flex flex-col gap-[1.6vw]  md:gap-[1vw] items-start"
            >
              <img
                className="h-[45px]"
                src="/src/assets/images/salary.svg"
                alt=""
              />
              <h1 className="font-[Cabinet] font-[600] text-[5vw] md:text-[1.4vw]">
                Competitive Salaries
              </h1>
              <p className="font-[Cabinet]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Officiis, dolorum dignissimos labore obcaecati natus provident
                quas odit dicta sunt praesentium.
              </p>
            </div>
            <div
              id="box-3"
              className="bg-white rounded-[16px] px-[3.2vw] py-[3.8vw] md:px-[2vw] md:py-[2vw] shadow-sm flex flex-col gap-[1.6vw]  md:gap-[1vw] items-start"
            >
              <img
                className="h-[45px]"
                src="/src/assets/images/work.svg"
                alt=""
              />
              <h1 className="font-[Cabinet] font-[600] text-[5vw] md:text-[1.4vw]">
                Flexible Work Environment
              </h1>
              <p className="font-[Cabinet]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Officiis, dolorum dignissimos labore obcaecati natus provident
                quas odit dicta sunt praesentium.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="section-3"
        className="w-[100%] flex-col flex md:flex-row px-[4vw] pt-[4vw] md:pt-[2vw] pb-[0vw] gap-[10vw] md:gap-[3vw] mt-[3.6vw] md:mt-[1vw]"
      >
        <div
          id="part-1"
          className="w-[100%] md:w-[100%] flex flex-col gap-[3vw] md:gap-[1.2vw]"
        >
          <div id="area-1" className="flex flex-col gap-[2vw] md:gap-[1.2vw]">
            <Tag name="POSITIONS" />
            <h1 className="text-[6vw] md:text-[2vw] font-[Cabinet] font-[700]">
              Open Positions
            </h1>
          </div>
          <div id="area-2" className="flex flex-col gap-[3vw] md:gap-[1.2vw]">
            <Position role="Real Estate Agent" location="Remote · Full-Time" />
            <Position
              role="Sales Executive"
              location="New York, NY · Full-Time"
            />
            <Position
              role="Marketing Coordinator"
              location="Remote · Full-Time"
            />
            <Position role="Office Manager" location="Remote · Full-Time" />
            <Position role="Receptionist" location="Remote · Full-Time" />
            <Position role="Legal Advisor" location="Remote · Full-Time" />
            <Position role="Compliance Officer" location="Remote · Full-Time" />
            <Position role="Accountant" location="Remote · Full-Time" />
            <Position role="Loan Officer" location="Remote · Full-Time" />
            <Position role="Maintenance Staff" location="Remote · Full-Time" />
            <Position
              role="Real Estate Analyst"
              location="Remote · Full-Time"
            />
            <Position
              role="Development Manager"
              location="Remote · Full-Time"
            />
          </div>
        </div>
      </div>
      <div
        id="section-4"
        className="w-[100%] flex-col flex md:flex-row px-[4vw] pt-[4vw] md:pt-[2vw] pb-[0vw] gap-[10vw] md:gap-[3vw] mt-[3.6vw] md:mt-[1vw]"
      >
        <div
          id="part-1"
          className="w-[100%] md:w-[100%] flex flex-col gap-[3vw] md:gap-[1.2vw]"
        >
          <div id="area-1" className="flex flex-col gap-[2vw] md:gap-[1.2vw]">
            <Tag name="Application Form" />
            <h1 className="text-[6vw] md:text-[2vw] font-[Cabinet] font-[700]">
              Didn't find a suitable role?
            </h1>
          </div>
          <div id="area-2" className="w-full">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Form submitted successfully!");
              }}
              className="bg-white w-full rounded-2xl shadow-lg p-6 md:p-10"
            >
              <div className="flex flex-col gap-5">
                {/* Name */}
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="border font-[Cabinet] border-gray-300 rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-red-500"
                />

                {/* Email */}
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="border font-[Cabinet] border-gray-300 rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-red-500"
                />

                {/* Phone */}
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  required
                  className="border font-[Cabinet] border-gray-300 rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-red-500"
                />

                {/* Upload Resume */}
                <div className="border font-[Cabinet] border-gray-300 rounded-md px-4 py-3 flex justify-between items-center text-gray-500">
                  <label htmlFor="resume" className="cursor-pointer">
                    Upload Resume
                  </label>
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    className="hidden"
                    onChange={(e) =>
                      (document.getElementById("resumeName").textContent =
                        e.target.files[0]?.name || "No file chosen")
                    }
                  />
                  <span id="resumeName" className="text-sm">
                    No file chosen
                  </span>
                </div>

                {/* Message */}
                <textarea
                  name="message"
                  placeholder="Message (Optional)"
                  className="border font-[Cabinet] border-gray-300 rounded-md px-4 py-3 w-full h-28 resize-none focus:outline-none focus:ring-2 focus:ring-red-500"
                ></textarea>

                {/* Button */}
                <button
                  type="submit"
                  className="bg-[#E2252D] w-fit px-[3vw] md:px-[1.2vw] font-[Cabinet] text-white font-semibold py-3 rounded-md hover:bg-red-700 transition-all duration-300"
                >
                  Join Our Team
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div id="section-5">
        <Footer />
      </div>
    </div>
  );
};

export default Careers;
