import React, { useState } from "react";
import { Mail, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../Components/Header";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat relative px-4"
      style={{
        backgroundImage: "url('/src/assets/images/login.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>

      {/* Logo */}
      <div className="absolute top-0 left-0 flex items-center w-full">
        {/* <Link to="/" className="flex items-center space-x-2">
          <img
            src="/src/assets/images/logo.png"
            alt="Company Logo"
            className="w-fit h-10 object-contain rounded-[8px] transition-transform duration-200 hover:scale-105"
          />
        </Link> */}
        <Header/>
      </div>

      {/* Login Card */}
      <div className="relative z-10 bg-white/90 backdrop-blur-lg shadow-2xl rounded-2xl w-[90%] md:w-[30%] p-6 pb-[10vw] md:pb-[2.5vw] overflow-hidden mt-[16vw] md:mt-[0vw]">
        {/* Tabs */}
        <div className="flex justify-between border-b border-gray-200 mb-6">
          <button
            onClick={() => setIsSignUp(true)}
            className={`pb-2 font-medium w-1/2 text-center font-[Cabinet] transition-all duration-200 ${
              isSignUp
                ? "text-[#E2252D] border-b-2 border-[#E2252D]"
                : "text-gray-500"
            }`}
          >
            Sign Up
          </button>
          <button
            onClick={() => setIsSignUp(false)}
            className={`pb-2 font-medium w-1/2 text-center font-[Cabinet] transition-all duration-200 ${
              !isSignUp
                ? "text-[#E2252D] border-b-2 border-[#E2252D]"
                : "text-gray-500"
            }`}
          >
            Sign In
          </button>
        </div>

        {/* Animated Forms */}
        <div className="relative h-[260px] font-[Cabinet]">
          <AnimatePresence mode="wait">
            {isSignUp ? (
              <motion.div
                key="signup"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute w-full"
              >
                <form className="space-y-5">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border-b border-gray-300 focus:border-[#E2252D] outline-none py-2 text-gray-700 bg-transparent"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full border-b border-gray-300 focus:border-[#E2252D] outline-none py-2 text-gray-700 bg-transparent"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full border-b border-gray-300 focus:border-[#E2252D] outline-none py-2 text-gray-700 bg-transparent"
                  />

                  <button
                    type="submit"
                    className="w-full bg-[#E2252D] text-white py-3 rounded-md font-medium hover:bg-[#c41d25] transition-all"
                  >
                    Sign Up
                  </button>

                  <p
                    className="text-center text-sm text-[#E2252D] mt-2 cursor-pointer hover:underline"
                    onClick={() => setIsSignUp(false)}
                  >
                    I have an Account ?
                  </p>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="signin"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute w-full"
              >
                <form className="space-y-5">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full border-b border-gray-300 focus:border-[#E2252D] outline-none py-2 text-gray-700 bg-transparent"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full border-b border-gray-300 focus:border-[#E2252D] outline-none py-2 text-gray-700 bg-transparent"
                  />

                  <button
                    type="submit"
                    className="w-full bg-[#E2252D] text-white py-3 rounded-md font-medium hover:bg-[#c41d25] transition-all"
                  >
                    Sign In
                  </button>

                  <p
                    className="text-center text-sm text-[#E2252D] mt-2 cursor-pointer hover:underline"
                    onClick={() => setIsSignUp(true)}
                  >
                    Create New Account ?
                  </p>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 flex flex-col md:flex-row items-center font-[Cabinet] justify-center mt-6 space-y-2 md:space-y-0 md:space-x-6 text-white text-sm drop-shadow-md">
        <div className="flex items-center space-x-2">
          <Phone size={16} className="text-white" />
          <span>+91-6390909106</span>
        </div>
        <div className="flex items-center space-x-2">
          <Mail size={16} className="text-white" />
          <span>info@svdinfracity.com</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
