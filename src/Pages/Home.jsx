import Card from "../Components/Card";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import InfiniteImageCarousel from "../Components/ImageCarousel";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div
        id="section-1"
        className="relative h-[80vh] md:h-screen flex flex-col"
      >
        <Header />
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/src/assets/images/main.png')" }}
        ></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-35"></div>

        {/* Content Text */}
        <div className="mt-[16vh] relative z-10 flex flex-col items-center justify-center gap-[3vw] md:gap-[1vw] h-full text-white text-4xl">
          <h6 className="text-[2.9vw] w-[85vw] text-center s:text-[1vw] lg:text-[1vw] font-[Satoshi]">
            Taramandal, Bhagat Chauraha, Near SBI Bank 99654, Gorakhpur
          </h6>
          <h1 className="font-[Cabinet] font-semibold text-[8vw] text-center md:text-[3vw] text-shadow-lg">
            Find Your Place Feel at Home
          </h1>
          <div className="flex gap-[3vw] md:gap-[1vw]">
            <Link to="/properties">
              <button className="bg-[#E2252D] cursor-pointer font-[Cabinet] rounded-[8px] px-[3vw] py-[3vw] md:p-[1vw] md:px-[1.2vw] text-[3.5vw] md:text-[1vw]">
                All Properties
              </button>
            </Link>
            <Link to="/contact">
              <button className="bg-white cursor-pointer font-[Cabinet] text-black rounded-[8px] px-[3vw] py-[3vw] md:p-[1vw] md:px-[1.2vw] text-[3.5vw] md:text-[1vw]">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
        {/* Cards */}
        <div className="mt-[12vh] flex justify-center items-center md:gap-[1.5vw] px-[4vw]">
          {/* First Card */}
          <div className="hidden sm:block">
            <Card
              name="SERENITY VILLAS"
              src="/src/assets/images/property-1.webp"
            />
          </div>

          {/* Second Card */}
          <div className="hidden sm:block">
            <Card
              name="SERENITY VILLAS"
              src="/src/assets/images/property-2.webp"
            />
          </div>

          {/* Third Card */}
          <div className="hidden sm:block">
            <Card
              name="SERENITY VILLAS"
              src="/src/assets/images/property-7.webp"
            />
          </div>

          {/* Mobile Card */}
          <div className="block sm:hidden">
            <Card
              name="SERENITY VILLAS"
              src="/src/assets/images/property-1.webp"
            />
          </div>
        </div>
      </div>
      <div
        id="section-2"
        className="w-[100%] flex justify-center items-center gap-[2.3vw] text-white mt-[36vh] sm:mt-[40vh] md:mt-[0vh] md:pt-[18vh] px-[4vw] overflow-hidden"
      >
        <div
          id="left"
          className="sm:w-[50%] flex flex-col gap-[2vh] md:gap-[1vw]"
        >
          <h6 className="text-[3.7vw] sm:text-[1vw] font-[Satoshi] text-black">
            Why choose our property?
          </h6>
          <h1 className="text-[5vw] sm:text-[2.5vw] font-[Cabinet] text-black mt-[-1vh] font-[600]">
            Discover the story behind this beautiful
            <br />
            and dope property.
          </h1>
          <img
            className="h-[100%] sm:h-[600px] rounded-[16px]"
            src="src/assets/images/property-7.webp"
            alt=""
          />
          <p className="text-black text-[4vw]  font-[Satoshi] block sm:hidden">
            Control every corner of your home effortlessly through voice
            commands or mobile apps. From climate control to smart locks,
            redefine your lifestyle with cutting-edge technology. Let your home
            do the thinking.
          </p>
          <Link to="/contact">
            <button className="bg-black px-[4vw] py-[2.5vw] sm:px-[1.5vw] sm:py-[0.5vw] rounded-[8px] sm:hidden w-fit text-white font-[Cabinet] font-[600] text-[4.3vw] sm:text-[1.1vw]">
              View Gallery
            </button>
          </Link>
        </div>
        <div id="right" className="hidden w-[50%] sm:flex flex-col gap-[1vw]">
          <img
            className="w-[100%] h-[600px] rounded-[16px] object-cover"
            src="src/assets/images/about-2.avif"
            alt=""
          />
          <p className="text-[1.2vw] font-[Satoshi] text-black">
            Control every corner of your home effortlessly through voice
            commands or mobile apps. From climate control to smart locks,
            redefine your lifestyle with cutting-edge technology. Let your home
            do the thinking.
          </p>
          <Link to="/gallery">
            <button className="bg-black px-[1.5vw] cursor-pointer py-[0.5vw] rounded-[8px] w-fit text-white font-[Cabinet] font-[600] text-[1.1vw]">
              View Gallery
            </button>
          </Link>
        </div>
      </div>
      <div id="section-3" className="mt-[5vh] sm:mt-[10vh]">
        <section className="my-4 sm:my-10">
          <InfiniteImageCarousel />
        </section>
      </div>
      <div
        id="section-4"
        className="w-full flex flex-wrap justify-between items-start px-[4vw] gap-[5vw] sm:gap-[0]"
      >
        <div className="w-[47%] md:w-[250px] h-fit md:h-[200px]">
          <h1 className="text-[9vw] md:text-[3.7vw] font-[Cabinet]">8</h1>
          <h1 className="text-[4.5vw] md:text-[1.3vw] font-[600] font-[Cabinet]">
            Years experience
          </h1>
          <p className="mt-[1vw] sm:mt-[0] text-[3.7vw] md:text-[1.05vw] font-[Satoshi]">
            Improving homes with expert craftsmanship for years.
          </p>
        </div>
        <div className="w-[47%] md:w-[250px] h-fit md:h-[200px]">
          <h1 className="text-[9vw] md:text-[3.7vw] font-[Cabinet]">26</h1>
          <h1 className="text-[4.5vw] md:text-[1.3vw] font-[600] font-[Cabinet]">
            Projects completed
          </h1>
          <p className="mt-[1vw] sm:mt-[0] text-[3.7vw] md:text-[1.05vw] font-[Satoshi]">
            Over 250 successful projects delivered with quality and care.
          </p>
        </div>
        <div className="w-[47%] md:w-[250px] h-fit md:h-[200px] mt-[2vw] sm:mt-[0]">
          <h1 className="text-[9vw] md:text-[3.7vw] font-[Cabinet]">30</h1>
          <h1 className="text-[4.5vw] md:text-[1.3vw] font-[600] font-[Cabinet]">
            Skilled Tradespeople
          </h1>
          <p className="mt-[1vw] sm:mt-[0] text-[3.8vw] md:text-[1.05vw] font-[Satoshi]">
            Our team of 30 experts ensures top-quality results.
          </p>
        </div>
        <div className="w-[47%] md:w-[250px] h-fit md:h-[200px] mt-[2vw] sm:mt-[0]">
          <h1 className="text-[9vw] md:text-[3.7vw] font-[Cabinet]">100%</h1>
          <h1 className="text-[4.5vw] md:text-[1.3vw] font-[600] font-[Cabinet]">
            Client satisfaction
          </h1>
          <p className="mt-[1vw] sm:mt-[0] text-[3.7vw] md:text-[1.05vw] font-[Satoshi]">
            All of our clients are satisfied with our work and service.
          </p>
        </div>
      </div>
      <div
        id="section-5"
        className="w-full h-screen px-[4vw] flex flex-col gap-[3vh] items-center justify-start pt-[9vh]"
      >
        <div
          id="part-1"
          className="flex flex-col gap-[1vh] sm:gap-[0.2vw] w-full"
        >
          <h1 className="font-[Satoshi] text-[2.8vw] md:text-[0.9vw] text-left sm:text-center font-[500]">
            SEAMLESS AND FRIENDLY SERVICE
          </h1>
          <h1 className="font-[Cabinet] text-[4.5vw] md:text-[2.4vw] text-left sm:text-center font-[600] sm:w-[100%] hidden md:block">
            Discover homes that
            <br /> feel just right
          </h1>
          <h1 className="font-[Cabinet] text-[5vw] md:text-[2.4vw] text-left sm:text-center font-[600] sm:w-[100%] sm:block md:hidden">
            Discover homes that feel just right
          </h1>
        </div>
        <div
          id="part-2"
          className="w-[100%] flex flex-col md:flex-row justify-center items-center gap-[4vw] md:gap-[2vw] mt-[-1vh] sm:pt-[2vh]"
        >
          <div
            id="video-1"
            className="w-[100%] h-[260px] md:h-[400px] relative rounded-[16px]"
          >
            <video
              className="w-[100%] h-[100%] object-cover absolute rounded-[16px]"
              autoPlay
              muted
              loop
              src="src/assets/images/video.mp4"
            ></video>
            <h1 className="z-[999] text-white absolute bottom-[2vh] sm:bottom-[1vw] left-[4vw] sm:left-[2vw] font-[Cabinet] text-[5vw] md:text-[1.5vw] font-[600]">
              HOUSES
            </h1>
          </div>
          <div
            id="video-2"
            className="w-[100%] h-[260px] md:h-[400px] relative rounded-[16px]"
          >
            <video
              className="w-[100%] h-[100%] object-cover absolute rounded-[16px]"
              autoPlay
              muted
              loop
              src="src/assets/images/about.mp4"
            ></video>
            <h1 className="z-[999] text-white absolute bottom-[2vh] sm:bottom-[1vw] left-[4vw] sm:left-[2vw] font-[Cabinet] text-[5vw] md:text-[1.5vw] font-[600]">
              APARTMENTS
            </h1>
          </div>
        </div>
      </div>
      <div
        id="section-6"
        className="mt-[30vh] sm:mt-[20vh] w-full bg-red-400 sm:w-full sm:h-[50vh] relative flex flex-col justify-center items-center px-[2vw] sm:px-[0vw]"
      >
        <img
          className="w-[100%] h-[70vh] sm:h-[100vh] oject-cover absolute rounded-t-[36px] sm:rounded-t-[56px]"
          src="src/assets/images/foot.png"
          alt=""
        />
        <h1 className="relative text-[8vw] sm:text-[5vw] font-[Cabinet] text-white font-[600]">
          Ready to make a move?
        </h1>
        <p className="hidden sm:block relative text-center text-[4vw] sm:text-[1.3vw] font-[Satoshi] text-white">
          Contact us today to discuss your property needs and choose the right
          plan.
          <br /> We’re here to guide you through every step of the process.
        </p>
        <p className="sm:hidden relative text-center text-[4vw] sm:text-[1.3vw] font-[Satoshi] text-white">
          Contact us today to discuss your property needs and choose the right
          plan. We’re here to guide you through every step of the process.
        </p>
        <Link to="/contact">
          <button className="bg-[#E2252D] relative px-[5vw] py-[2.4vw] sm:px-[1.7vw] sm:py-[0.9vw] mt-[4.5vw] sm:mt-[1.5vw] rounded-[25px] text-white font-[Cabinet] cursor-pointer font-[500] text-[4vw] sm:text-[1.1vw]">
            Get Your Home
          </button>
        </Link>
      </div>
      <div id="section-7">
        <Footer />
      </div>
    </>
  );
};

export default Home;
