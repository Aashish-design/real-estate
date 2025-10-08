import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="bg-red-500 w-full rounded-t-[36px] sm:rounded-t-[56px] mt-[8vh] md:mt-[14vh] sm:mt-[18vh] flex flex-wrap gap-[4vh] sm:gap-[0] items-start justify-start sm:justify-between px-[4vw] text-white relative pt-[9vh] pb-[5vh] sm:py-[10vh]">
        <div
          id="part-1"
          className="flex flex-col gap-[2vh] sm:gap-[1.4vw] w-[100%] sm:w-fit"
        >
          <img
            className="h-[40px] sm:h-[50px] w-fit object-cover rounded-[8px]"
            src="src/assets/images/logo.png"
            alt=""
          />
          <p className="font-[Satoshi] sm:hidden">
            Control every corner of your home effortlessly through voice
            commands or mobile apps. From climate control to smart locks,
            redefine your lifestyle with cutting-edge technology. Let your home
            do the thinking.
          </p>
          <h2 className="hidden sm:block font-[Cabinet] text-[4vw] sm:text-[1.1vw] font-[500]">
            +91-63909 09106
            <br />
            info@svdinfracity.com
          </h2>
          <div id="social-icons" className="flex gap-[3vw] sm:gap-[1.2vw]">
            <FaInstagram size={25} />
            <FaFacebook size={25} />
            <FaXTwitter size={25} />
          </div>
        </div>
        <div
          id="part-2"
          className="flex flex-col gap-[2vh] sm:gap-[1.2vw] mt-[1vh] sm:mt-[0]"
        >
          <h1 className="font-[Cabinet] text-[4.5vw] sm:text-[1.35vw] font-[600]">
            Navigation
          </h1>
          <Link
            to="/"
            className="font-[Satoshi] text-[4vw] sm:text-[1.1vw] font-[500]"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="font-[Satoshi] text-[4vw] sm:text-[1.1vw] font-[500]"
          >
            About
          </Link>
          <Link
            to="/careers"
            className="font-[Satoshi] text-[4vw] sm:text-[1.1vw] font-[500]"
          >
            Careers
          </Link>
          <Link
            to="/contact"
            className="font-[Satoshi] text-[4vw] sm:text-[1.1vw] font-[500]"
          >
            Contact
          </Link>
        </div>
        <div
          id="part-3"
          className=" flex flex-col gap-[2vh] sm:gap-[1.2vw] ml-[30vw] sm:ml-[0] mt-[1vh] sm:mt-[0]"
        >
          <h1 className="font-[Cabinet] text-[4.5vw] sm:text-[1.35vw] font-[600]">
            Resources
          </h1>
          <Link
            to="/"
            className="font-[Satoshi] text-[4vw] sm:text-[1.1vw] font-[500]"
          >
            Agent
          </Link>
          <Link
            to="/about"
            className="font-[Satoshi] text-[4vw] sm:text-[1.1vw] font-[500]"
          >
            Blog
          </Link>
          <Link
            to="/careers"
            className="font-[Satoshi] text-[4vw] sm:text-[1.1vw] font-[500]"
          >
            License
          </Link>
          <Link
            to="/contact"
            className="font-[Satoshi] text-[4vw] sm:text-[1.1vw] font-[500]"
          >
            How It Works
          </Link>
        </div>
        <div
          id="part-4"
          className="flex flex-col gap-[1.2vw] mt-[1vh] sm:mt-[0]"
        >
          <h1 className="font-[Cabinet] text-[5vw] sm:text-[1.35vw] font-[600]">
            Office Location
          </h1>
          <p className="font-[Satoshi] text-[4vw] sm:text-[1.1vw] font-[500]">
            C-386, Siddhart Envclave Taramandal,<br/> Bhagat Chauraha, Near SBI Bank<br/>
            Gorakhpur, India, Uttar Pradesh
          </p>
          {/* <p className="hidden sm:block font-[Satoshi] text-[3.8vw] sm:text-[1.1vw] font-[500]">
            Taramandal, Bhagat Chauraha, Near SBI Bank
            <br /> Gorakhpur, India, Uttar Pradesh
          </p> */}
          <p className="sm:hidden font-[Satoshi] text-[4vw] sm:text-[1.1vw] font-[500]">
            Taramandal, Bhagat Chauraha, Near SBI Bank Gorakhpur, India, Uttar
            Pradesh
          </p>
          <div className="flex gap-[2vw] sm:gap-[0.5vw] mt-[1.5vh] sm:mt-[0vh] items-center">
            <FiMapPin />{" "}
            <h1 className="font-[Satoshi] text-[4vw] sm:text-[1.1vw]  font-[500]">
              See On Map
            </h1>
          </div>
        </div>
      </div>
      <div id="line" className="w-full bg-white h-[1px]"></div>
      <div
        id="foot-last"
        className="flex justify-between items-start w-full bg-red-500 px-[4vw] text-white pt-[1.5vh] pb-[2vh] sm:pt-[2vh] sm:pb-[3vh]"
      >
        <h1 className="font-[Cabinet] text-[4vw] sm:text-[1.1vw] font-[600]">
          © SVD 2025 · All rights reserved
        </h1>
        <div className="hidden sm:flex gap-[2.3vw]">
          <h1 className="font-[Satoshi] text-[3vw] sm:text-[1.1vw] font-[500]">
            Terms & Conditions
          </h1>
          <h1 className="font-[Satoshi] text-[3vw] sm:text-[1.1vw] font-[500]">
            Privacy Policy
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
