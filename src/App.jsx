import About from "./Pages/About";
import Gallery from "./Pages/Gallery";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Lenis from "lenis";
import { useEffect } from "react";
import Media from "./Pages/Media";
import WhatWeDo from "./Pages/WhatWeDo";
import Careers from "./Pages/Careers";
import Properties from "./Pages/Properties";
import EMI from "./Pages/EMI";
import Touch from "./Pages/Touch";
import Login from "./Pages/Login";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });
    lenis.on("scroll", (e) => {
      console.log(e);
    });
  });
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/media" element={<Media />} />
        <Route path="/what-we-do" element={<WhatWeDo/>} />
        <Route path="/careers" element={<Careers/>} />
        <Route path="/properties" element={<Properties/>} />
        <Route path="/emi-calculator" element={<EMI/>} />
        <Route path="/contact" element={<Touch/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </>
  );
}

export default App;
