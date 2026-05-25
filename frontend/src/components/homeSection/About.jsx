import condoImg from "../../assets/about-Img1.png";
import bedroomImg from "../../assets/about-img2.png";
import kitchenImg from "../../assets/about-img3.png";
import beachImg from "../../assets/about-img4.jpeg";

import { Link } from "react-router-dom";

export default function AboutSection() {
  const sections = [
    {
      title: "THE PENTHOUSE CONDO",
      subtitle: "Luxury Gulf View Penthouse",
      description:
        "Experience luxury beachfront living in our stunning penthouse condo located at Laketown Wharf Resort. Enjoy breathtaking gulf views, modern interiors, resort-style amenities, and spacious accommodations designed for unforgettable vacations with family and friends.",
      image: condoImg,
    },

    {
      title: "PRIMARY BEDROOM",
      subtitle: "Luxury Gulf-Front Bedroom",
      description:
        "Relax in our beautifully designed primary suite featuring a king-size bed, elegant interiors, private bathroom, and direct balcony access with breathtaking gulf views.",
      image: bedroomImg,
    },

    {
      title: "GOURMET KITCHEN",
      subtitle: "Modern Luxury Kitchen",
      description:
        "Our fully equipped gourmet kitchen includes premium appliances, spacious countertops, cookware, coffee station, dining essentials, and everything needed for memorable family meals.",
      image: kitchenImg,
    },

    {
      title: "FAMILY FRIENDLY",
      subtitle: "Perfect Stay For Families",
      description:
        "Designed for families and groups, the condo includes beach toys, high chair, pack n play, bunk room, spacious living areas, and kid-friendly amenities for a comfortable beach vacation.",
      image: beachImg,
    },
  ];

  return (
    <section className="bg-[#f8f8f8] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        
        {/* MAIN HEADING */}
        <div className="text-center mb-24">
        <h1 className="font-playfair text-5xl md:text-7xl font-bold">
  Luxury Penthouse Condo
</h1>

          <p className="mt-8 text-gray-600 max-w-4xl mx-auto text-lg md:text-xl leading-9">
            Discover our luxury beachfront penthouse condo featuring stunning
            gulf views, premium interiors, resort-style amenities, and spacious
            accommodations perfect for unforgettable vacations with family and
            friends.
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
            <button className="px-12 py-4 bg-black text-white uppercase tracking-[4px] text-sm hover:bg-pink-500 transition-all duration-500">
              Explore More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}