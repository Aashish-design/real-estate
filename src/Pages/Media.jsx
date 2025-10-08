import Hero from "../Components/Hero";
import Header from "../Components/Header";
import Tag from "../Components/Tag";
import Footer from "../Components/Footer";

const data = [
  {
    id: 1,
    title: "Dainik Jagran",
    image: "/src/assets/images/1.avif",
    desc: "The Best Cloud Computing Companies and CEO’s to Work for in 2025 according to industry experts.",
    date: "September 19, 2023",
    color: "bg-red-600",
  },
  {
    id: 2,
    title: "Amar Ujala",
    image: "/src/assets/images/3.avif",
    desc: "No English, but a Few Friends & a Lot of Talent: Moving to Silicon Valley as a Foreign Entrepreneur.",
    date: "October 25, 2024",
    color: "bg-gray-800",
  },
  {
    id: 3,
    title: "Aaj Tak",
    image: "/src/assets/images/4.avif",
    desc: "Funding Snapshot: Treasure Data Raises $25M Series C for Analytics Software.",
    date: "March 12, 2025",
    color: "bg-red-600",
  },
  {
    id: 4,
    title: "India TV",
    image: "/src/assets/images/2.avif",
    desc: "Treasure Data Launches First-Ever Live Data Management Platform.",
    date: "May 15, 2024",
    color: "bg-gray-800",
  },
];

const deals = [
  {
    id: 1,
    img: "/src/assets/images/4.avif", // replace with your img
    badge: "Earn 3% back",
    badgeColor: "bg-blue-100 text-blue-600",
    title: "All Citizens",
    desc: "Earn 3% on every order",
  },
  {
    id: 2,
    img: "src/assets/images/1.avif",
    badge: "5% Off",
    badgeColor: "bg-orange-100 text-orange-600",
    title: "SimpleTire",
    desc: "Save 5% on your first purchase",
  },
  {
    id: 3,
    img: "src/assets/images/3.avif",
    badge: "20% Off",
    badgeColor: "bg-yellow-100 text-yellow-600",
    title: "Long Wknd",
    desc: "Save 20% on your first purchase",
  },
  {
    id: 4,
    img: "src/assets/images/2.avif",
    badge: "15% Off",
    badgeColor: "bg-pink-100 text-pink-600",
    title: "Unique Vintage",
    desc: "Save 15% on your first purchase",
  },
];

const Media = () => {
  return (
    <div className="bg-[#F8F5F1]">
      <Header />
      <div id="section-1" className="mt-[-11vh] sm:mt-[-24vh]">
        <Hero name="Media." />
      </div>
      <div
        id="section-2"
        className="w-[100%] h-fi flex-col flex md:flex-row px-[4vw] pt-[4vw] md:pt-[2vw] pb-[0vw] gap-[10vw] md:gap-[3vw] mt-[1vw]"
      >
        <div
          id="part-1"
          className="w-[100%] md:w-[100%] flex flex-col gap-[3vw] md:gap-[2vw]"
        >
          <div id="area-1" className="flex flex-col gap-[2vw] md:gap-[1vw]">
            <Tag name="MENTIONS" />
            <h1 className="text-[6vw] md:text-[2vw] font-[Cabinet] font-[700]">
              Newsworthy Mentions
            </h1>
          </div>
          <div id="area-2" className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                >
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-52 object-cover"
                  />

                  {/* Title */}
                  <div
                    className={`${item.color} text-white font-bold text-center py-3 font-[Cabinet]`}
                  >
                    {item.title}
                  </div>

                  {/* Content */}
                  <div className="p-4 flex flex-col gap-[1vw]">
                    <p className="text-gray-700 text-[4.2vw] md:text-[1vw] mb-3 font-[Cabinet]">
                      {item.desc}
                    </p>
                    <p className="text-gray-500 text-sm font-[Cabinet]">
                      {item.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        id="section-3"
        className="w-[100%] h-fi flex-col flex md:flex-row px-[4vw] pt-[4vw] md:pt-[2vw] pb-[0vw] gap-[10vw] md:gap-[3vw] mt-[1vw]"
      >
        <div
          id="part-1"
          className="w-[100%] md:w-[100%] flex flex-col gap-[3vw] md:gap-[2vw]"
        >
          <div id="area-1" className="flex flex-col gap-[2vw] md:gap-[1vw]">
            <Tag name="AWARDS" />
            <h1 className="text-[6vw] md:text-[2vw] font-[Cabinet] font-[700]">
              Awards & Recognition
            </h1>
          </div>
          <div id="area-2" className="w-full">
            <div className="w-full min-h-fit bg-[#f9f6f2] flex justify-center">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4  w-full">
                {deals.map((deal) => (
                  <div
                    key={deal.id}
                    className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition"
                  >
                    {/* Image with overlay */}
                    <div className="relative h-52 w-full">
                      <img
                        src={deal.img}
                        alt={deal.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Floating Company Tag */}
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
                        <span className="bg-white shadow font-[Cabinet] px-3 py-1 rounded-full text-sm font-medium">
                          Company Name
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-4 flex flex-col gap-[0.3vw]">
                      <span
                        className={`text-xs w-fit font-medium font-[Cabinet] px-2 py-1 rounded-md ${deal.badgeColor}`}
                      >
                        {deal.badge}
                      </span>
                      <h3 className="mt-3 font-semibold text-lg font-[Cabinet]">
                        {deal.title}
                      </h3>
                      <p className="text-sm text-gray-500 font-[Cabinet]">{deal.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="section-4" className="mt-[-1vw]">
        <Footer />
      </div>
    </div>
  );
};

export default Media;
