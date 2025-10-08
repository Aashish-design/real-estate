const Card = ({ name = "Property-name", src }) => {
  return (
    <div className="relative bg-white flex flex-col gap-[1vw] text-[#111] w-[88vw] h-fit md:w-[400px] md:h-[370px] rounded-[20px] overflow-hidden shadow-2xl cursor-pointer hover:-translate-y-1 transition-all z-[9999] pb-[10vh]">
      <div>
        <img
          src={src}
          alt="Property-Image"
          className=" w-[100%] sm:w-full h-[250px] sm:h-[250px] object-cover"
        />
      </div>
      <div className="flex justify-between px-[3.2vw]  sm:px-[1vw] pt-[1vh] sm:pt-[0]">
        <h1 className="text-[3.2vw] sm:text-[1vw] font-[Satoshi]">4 BEDROOMS</h1>
        <h1 className="text-[3.2vw] sm:text-[1vw] font-[Satoshi]">950 FT²</h1>
      </div>
      <div className="absolute bottom-[1vw] px-[3.2vw] pb-[1vh] sm:pb-[0] sm:px-[1vw] flex flex-col gap-[0.8vw] sm:gap-[0.3vw]">
        <h1 className="text-[3.8vw] sm:text-[1.2vw] font-[Satoshi] font-bold">{name}</h1>
        <h6 className="text-[3.2vw] sm:text-[1vw] font-[Satoshi]">
          $300,000 · Maple Drive 45, New York
        </h6>
      </div>
    </div>
  );
};

export default Card;
