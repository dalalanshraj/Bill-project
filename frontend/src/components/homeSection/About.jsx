import condoImg from "../../assets/about-Img11.png";
import locationImg from "../../assets/about-img4.jpeg";

import { Link } from "react-router-dom";

export default function AboutSection() {
  const sections = [
    {
      title: "THE RESORT",
      subtitle: "Where Every Stay Feels Extraordinary",
     description:
  "Discover two exceptional Panama City Beach destinations — Grand Panama Beach Resort and Calypso Tower 3 Resort. Enjoy breathtaking Gulf views, spacious accommodations, private balconies, resort-style pools, relaxing hot tubs, convenient beach access, and premium amenities designed to create unforgettable beachfront vacations.",  
  image: condoImg,
      isCollage: true,
    },

    {
      title: "PRIME BEACH LOCATIONS",
      subtitle: "Everything Nearby",
      description:
        "Located near Pier Park, Bay County Pier, shopping, restaurants, water sports, and Panama City Beach's famous white-sand shoreline, our vacation rentals place you close to everything you need for an unforgettable getaway.",
      image: locationImg,
      isCollage: false,
    },
  ];

  return (
    <section className="bg-[#f8f8f8] py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-10">

        {/* MAIN HEADING */}
        <div className="text-center mb-20 md:mb-24">
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold">
            Luxury Beachfront Vacation Rentals
          </h1>

          <p className="mt-8 text-gray-600 max-w-4xl mx-auto text-base md:text-xl leading-8 md:leading-9">
            Experience the best of Panama City Beach with our handpicked
            collection of luxury beachfront vacation rentals. Whether you're
            staying at Grand Panama Beach Resort or Beach Time at Calypso Tower
            3, you'll enjoy breathtaking Gulf views, spacious accommodations,
            resort-style amenities, and convenient access to the area's best
            beaches, dining, shopping, and attractions.
          </p>
        </div>

        {/* SECTIONS */}
        <div className="space-y-24 md:space-y-32">
          {sections.map((item, index) => (
            <div
              key={item.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                index % 2 !== 0
                  ? "lg:[&>*:first-child]:order-2"
                  : ""
              }`}
            >

              {/* IMAGE */}
              <div className="w-full flex items-center justify-center">
                {item.isCollage ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="
                      block
                      w-full
                      h-auto
                      object-contain
                    "
                  />
                ) : (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="
                      block
                      w-full
                      h-[300px]
                      sm:h-[420px]
                      lg:h-[500px]
                      object-cover
                    "
                  />
                )}
              </div>

              {/* CONTENT */}
              <div className="flex flex-col justify-center text-center px-2 md:px-8 lg:px-10">

                <h3 className="uppercase tracking-[5px] md:tracking-[8px] text-black text-lg md:text-2xl mb-6 md:mb-8 font-light">
                  {item.title}
                </h3>

                <h4 className="uppercase tracking-[4px] md:tracking-[6px] text-gray-400 text-xs md:text-sm mb-6 md:mb-8">
                  {item.subtitle}
                </h4>

                <p className="text-gray-600 text-base md:text-xl lg:text-2xl leading-relaxed font-light">
                  {item.description}
                </p>

              </div>
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <div className="flex justify-center mt-20 md:mt-28">
          <Link to="/about">
            <button className="px-10 md:px-12 py-4 bg-black text-white uppercase tracking-[4px] text-sm hover:bg-blue-500 transition-all duration-500">
              Explore More
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}