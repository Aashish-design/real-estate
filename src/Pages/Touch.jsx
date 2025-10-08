import React from "react";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Header from "../Components/Header";

const Touch = () => {
  return (
    <div className="bg-[#f9f7f6] text-gray-800">
      {/* HERO SECTION */}
      <Header />
      <div id="section-1" className="mt-[-11vh] sm:mt-[-24vh]">
        <Hero name="Contact Us." />
      </div>
      <div
        id="main-1"
        className="flex flex-col md:flex-row justify-center  md:p-[2vw] mt-[6vw] md:mt-[0] gap-[2vw] md:gap-[0]"
      >
        {/* CONTACT INFO CARDS */}
        <section className="w-[100%] md:w-[50%] py-[1vw] px-[4vw] md:px-6 flex flex-wrap gap-[4vw] md:gap-[1.5vw] justify-center">
          <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-all text-center w-[100%] md:w-[48%] flex justify-center items-center flex-col">
            <div className="text-4xl mb-4 text-red-600">📞</div>
            <h3 className="font-semibold text-xl mb-2 font-[Cabinet]">
              Call Us
            </h3>
            <p className="text-gray-600 font-[Cabinet]">+91-63090 01006</p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-all text-center w-[100%] md:w-[48%] flex justify-center items-center flex-col">
            <div className="text-4xl mb-4 text-red-600">📧</div>
            <h3 className="font-semibold text-xl mb-2 font-[Cabinet]">Email</h3>
            <p className="text-gray-600 font-[Cabinet]">
              info@svdinfracity.com help@svdinfracity.com
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-all text-center w-[100%]">
            <div className="text-4xl mb-4 text-red-600">📍</div>
            <h3 className="font-semibold text-xl mb-2">Visit Us</h3>
            <p className="text-gray-600 font-[Cabinet]">
              C-386, Siddhart Enclave,
              <br /> Taramandal, Gorakhpur, India
            </p>
          </div>
        </section>

        {/* CONTACT FORM */}
        <section className="w-[100%] md:w-[50%] px-[3.5vw] md:px-6 py-[1vw]">
          <div className="bg-white rounded-2xl shadow-md p-8 md:p-12">
            <h2 className="text-2xl font-semibold mb-6 text-center md:text-left font-[Cabinet]">
              Send Us a Message
            </h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Full Name"
                className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-red-500 outline-none font-[Cabinet]"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-red-500 outline-none font-[Cabinet]"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-red-500 outline-none md:col-span-2 font-[Cabinet]"
                required
              />
              <textarea
                placeholder="Your Message..."
                rows="5"
                className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-red-500 outline-none md:col-span-2 font-[Cabinet]"
                required
              ></textarea>
              <div className="md:col-span-2 flex justify-start">
                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all font-[Cabinet] shadow-md"
                >
                  Submit Message
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>

      {/* MAP SECTION */}
      <section className="mt-[3.5vw] md:mt-[0vw] mb-20 px-[3.5vw] md:px-[3vw] md:pt-[0] w-full">
        <div className="rounded-2xl overflow-hidden shadow-md">
          <iframe
            title="SVD Infracity Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.62209284007!2d83.38593707532245!3d26.72451737675982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991457fb28e22af%3A0x3be672203036aa0!2sSVD%20Group%20Pvt%20Ltd%20-%20Real%20Estate%20Developer!5e0!3m2!1sen!2sin!4v1759739633003!5m2!1sen!2sin"
            width="100%"
            height="600"
            allowFullScreen=""
            loading="lazy"
            className="w-full border-none"
          ></iframe>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Touch;
