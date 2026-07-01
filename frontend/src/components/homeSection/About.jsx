import condoImg from "../../assets/about-Img1.png";
import bedroomImg from "../../assets/about-img2.png";
import amenitiesImg from "../../assets/about-img3.png";
import locationImg from "../../assets/about-img4.jpeg";

import { Link } from "react-router-dom";

export default function AboutSection() {
 const sections = [
  {
    title: "THE CONDOS",
    subtitle: "Luxury Beachfront Living",
    description:
      "Our professionally furnished beachfront condos offer stunning Gulf views, spacious living areas, private balconies, modern interiors, and everything needed for a relaxing coastal vacation.",
    image: condoImg,
  },

  {
    title: "COMFORTABLE BEDROOMS",
    subtitle: "Rest & Recharge",
    description:
      "Featuring king and queen bedrooms, additional sleeping arrangements, and comfortable living spaces, our properties are designed to accommodate couples, families, and groups with ease.",
    image: bedroomImg,
  },

  {
     title: "RESORT AMENITIES",
    subtitle: "Relax Like Never Before",
    description:
      "Enjoy heated pools, hot tubs, fitness centers, tiki bars, beach chair service, private beach access, on-site restaurants, and many other premium amenities available throughout our resorts.",
    image: amenitiesImg,
  },

  {
    title: "PRIME BEACH LOCATIONS",
    subtitle: "Everything Nearby",
    description:
      "Located near Pier Park, Bay County Pier, shopping, restaurants, water sports, and Panama City Beach's famous white-sand shoreline, our vacation rentals place you close to everything you need for an unforgettable getaway.",
    image: locationImg,
  },
];

  return (
    <section className="bg-[#f8f8f8] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        
        {/* MAIN HEADING */}
        <div className="text-center mb-24">
        <h1 className="font-playfair text-5xl md:text-7xl font-bold">
   Luxury Beachfront Vacation Rentals
</h1>

          <p className="mt-8 text-gray-600 max-w-4xl mx-auto text-lg md:text-xl leading-9">
             Experience the best of Panama City Beach with our handpicked collection of luxury beachfront vacation rentals. Whether you're staying at Grand Panama Beach Resort or Beach Time at Calypso Tower 3, you'll enjoy breathtaking Gulf views, spacious accommodations, resort-style amenities, and convenient access to the area's best beaches, dining, shopping, and attractions.
          </p>
        </div>

        {/* SECTIONS */}
        <div className="space-y-32">
          {sections.map((item, index) => (
           <div
  className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center ${
    index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
  }`}
>
  
  {/* IMAGE */}
  <div className="w-full">
    <img
      src={item.image}
      alt={item.title}
      className="w-full h-[300px] sm:h-[450px] lg:h-[550px] object-cover"
    />
  </div>

  {/* CONTENT */}
  <div className="flex flex-col justify-center text-center lg:text-center px-2 md:px-8 lg:px-14">
    
    {/* TOP TITLE */}
    <h3 className="uppercase tracking-[8px] text-black text-lg md:text-2xl mb-8 font-light">
      {item.title}
    </h3>

    {/* SUBTITLE */}
    <h4 className="uppercase tracking-[6px] text-gray-400 text-xs md:text-sm mb-8">
      {item.subtitle}
    </h4>

    {/* DESCRIPTION */}
    <p className="text-gray-600 text-lg md:text-2xl  font-light">
      {item.description}
    </p>
  </div>
</div>
          ))}
        </div>

        {/* BUTTON */}
        <div className="flex justify-center mt-28">
          <Link to="/about">
            <button className="px-12 py-4 bg-black text-white uppercase tracking-[4px] text-sm hover:bg-blue-500 transition-all duration-500">
              Explore More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}