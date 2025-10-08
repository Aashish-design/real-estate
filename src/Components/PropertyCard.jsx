const PropertyCard = ({ name = "Property-name", src, address, price, rating }) => {
  return (
    <div className="relative bg-white flex flex-col gap-[2vw] md:gap-[1vw] text-[#111] w-[100%] h-[57vh] md:w-[330px] md:h-[395px] rounded-[20px] overflow-hidden shadow-2xl cursor-pointer hover:-translate-y-1 transition-all z-[9999] pb-[10vh]">
      <div>
        <img
          src={src}
          alt="Property-Image"
          className=" w-[100%] h-[200px] md:w-full md:h-[200px] object-cover"
        />
      </div>
      <div className="flex flex-col justify-between px-[3.2vw]  sm:px-[1vw] pt-[1vh] sm:pt-[0] gap-[1.8vw] md:gap-[0.7vw]">
        <h1 className="text-[4.8vw] md:text-[1.1vw] font-[Satoshi] font-bold">
          {name}
        </h1>
        <h1 className="text-[4vw] md:text-[0.85vw] text-[gray] font-[Satoshi]">
          {address}
        </h1>
        <h1 className="text-[3.8vw] md:text-[1vw] text-[gray] font-[Satoshi]">
          👥 3-4 | 🛏 3 Beds | 🚿 1 Bath
        </h1>
        <h1 className="text-[4.4vw] md:text-[1vw] font-[Satoshi] font-bold">
          {price}
        </h1>
        <h1 className="text-[3.8vw] md:text-[0.85vw] font-[Satoshi]">
          {rating}
        </h1>
      </div>
    </div>
  );
};

export default PropertyCard;
