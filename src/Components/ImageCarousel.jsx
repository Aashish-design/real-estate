const images = [
  "src/assets/images/1.avif",
  "src/assets/images/2.avif",
  "src/assets/images/3.avif",
  "src/assets/images/4.avif",
  "src/assets/images/5.avif",
  "src/assets/images/1.avif",
  "src/assets/images/2.avif",
  "src/assets/images/3.avif",
  "src/assets/images/4.avif",
  "src/assets/images/5.avif",
  "src/assets/images/1.avif",
  "src/assets/images/2.avif",
  "src/assets/images/3.avif",
  "src/assets/images/4.avif",
  "src/assets/images/5.avif",
];

const InfiniteImageCarousel = () => {
  return (
    <div className="overflow-hidden">
      <div
        className="flex"
        style={{
          animation: "scroll 30s linear infinite",
        }}
      >
        {images.concat(images).map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Carousel ${index}`}
            className="w-[200px] md:w-[320px] lg:w-[360px] h-auto sm:h-auto md:h-auto lg:h-[430px] object-cover m-2"
          />
        ))}
      </div>

      {/* Inline CSS animation */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </div>
  );
};

export default InfiniteImageCarousel;
