import Hero from "../Components/Hero";
import Header from "../Components/Header";
import GalleryElem from "../Components/GalleryElem";
import Footer from "../Components/Footer";


const Gallery = () => {
  return (
    <div>
      <Header />
      <div id="section-1" className="mt-[-11vh] sm:mt-[-24vh]">
        <Hero name="Gallery." />
      </div>
      <div id="section-2">
        <GalleryElem/>
      </div>
      <div id="section-3" className="mt-[-4vw]">
        <Footer/>
      </div>
    </div>
  );
};

export default Gallery;
