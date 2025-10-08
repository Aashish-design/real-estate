import React from "react";
import Masonry from "react-masonry-css";

const galleryItems = [
  { title: "Tea tasting", img: "/src/assets/images/1.avif" },
  { title: "Plethora of books", img: "/src/assets/images/2.avif" },
  { title: "Chrysanthemum farm", img: "/src/assets/images/3.avif" },
  { title: "Performances", img: "/src/assets/images/4.avif" },
  { title: "Agricultural workshops", img: "/src/assets/images/5.avif" },
  { title: "A miniature village", img: "/src/assets/images/3.avif" },
  { title: "Plethora of books", img: "/src/assets/images/1.avif" },
  { title: "A miniature village", img: "/src/assets/images/4.avif" },
  { title: "Agricultural workshops", img: "/src/assets/images/2.avif" },
  { title: "Chrysanthemum farm", img: "/src/assets/images/1.avif" },
  { title: "A miniature village", img: "/src/assets/images/3.avif" },
  { title: "Plethora of books", img: "/src/assets/images/1.avif" },
];

// responsive breakpoints
const breakpointColumns = {
  default: 4,
  1100: 3,
  768: 2,
  500: 2,
};

const GalleryElem = () => {
  return (
    <section className="p-4 pt-[8vw] md:px-[4vw] md:pt-[4vw]">
      <Masonry
        breakpointCols={breakpointColumns}
        className="flex w-auto gap-4"
        columnClassName="space-y-6"
      >
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-2xl shadow-lg group"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent text-white text-sm">
              {item.title}
            </div>
          </div>
        ))}
      </Masonry>
    </section>
  );
};

export default GalleryElem;
