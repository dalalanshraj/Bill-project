import { useEffect, useState } from "react";
import api from "../api/axios";

export default function About() {
  const [images, setImages] = useState([]);

  // =====================================
  // IMAGE URL
  // =====================================

  const getImageUrl = (path) => {
    if (!path || typeof path !== "string") return "";

    const base = import.meta.env.VITE_API_URL || "";

    if (path.startsWith("http")) return path;

    return base.replace(/\/$/, "") + "/" + path.replace(/^\//, "");
  };

  // =====================================
  // FETCH IMAGES
  // =====================================

  useEffect(() => {
    api
      .get("/gallery/published")
      .then((res) => {
        setImages(res.data || []);
      })
      .catch(console.log);
  }, []);

  // =====================================
  // GET SECTION IMAGE
  // =====================================

  const getSectionImage = (type) => {
    const found = images.find(
      (img) =>
        img.sectionType === type &&
        img.status === "published"
    );

    return found
      ? getImageUrl(found.image)
      : "https://images.unsplash.com/photo-1505691938895-1758d7feb511";
  };

  // =====================================
  // SECTIONS
  // =====================================

const sections = [
  {
    title: "THE CONDOS",
    subtitle: "Luxury Beachfront Retreats",
    description:
      "Experience two exceptional beachfront vacation rentals offering breathtaking Gulf views, stylish interiors, private balconies, and thoughtfully designed spaces for couples, families, and groups seeking the perfect coastal getaway.",
    image: getSectionImage("hero"),
  },

  {
    title: "PRIME LOCATIONS",
    subtitle: "Steps from the Beach & Attractions",
    description:
      "Located in the heart of Panama City Beach, our vacation rentals are just minutes from Pier Park, Bay County Pier, restaurants, shopping, entertainment, and direct access to the beautiful white-sand beaches of the Emerald Coast.",
    image: getSectionImage("gulf-views"),
  },

  {
    title: "SPACIOUS LIVING",
    subtitle: "Comfort for Everyone",
    description:
      "Relax in bright, open living spaces featuring comfortable seating, Smart TVs, sleeper sofas, and large windows that fill the rooms with natural light while showcasing spectacular Gulf views.",
    image: getSectionImage("living-room"),
  },

  {
    title: "FULLY EQUIPPED KITCHENS",
    subtitle: "Cook with Ease",
    description:
      "Each condo includes a fully equipped kitchen with modern appliances, cookware, coffee makers, dining essentials, and everything you need to prepare meals for the entire family.",
    image: getSectionImage("kitchen"),
  },

  {
    title: "PRIVATE BALCONIES",
    subtitle: "Spectacular Gulf Views",
    description:
      "Enjoy your morning coffee or evening sunset from private furnished balconies overlooking the Gulf of Mexico, resort pools, and the stunning coastline of Panama City Beach.",
    image: getSectionImage("balcony"),
  },

  {
    title: "RESORT AMENITIES",
    subtitle: "Relax & Recharge",
    description:
      "Guests can enjoy heated pools, hot tubs, fitness centers, tiki bars, cabanas, beach chair service, on-site restaurants, fire pits, and direct beach access for an unforgettable resort experience.",
    image: getSectionImage("pool-hot-tub"),
  },

  {
    title: "PREMIUM RESORT FEATURES",
    subtitle: "Everything You Need",
    description:
      "From beautifully maintained grounds and modern fitness facilities to convenient beach access, resort dining, and family-friendly amenities, every stay is designed to provide comfort, convenience, and lasting memories.",
    image: getSectionImage("community-amenities"),
  },

  {
    title: "PERFECT FOR FAMILIES",
    subtitle: "Create Lasting Memories",
    description:
      "Whether you're planning a romantic escape, family vacation, or group getaway, our beachfront condos provide spacious accommodations and easy access to beaches, water activities, parks, and local attractions for guests of all ages.",
    image: getSectionImage("family-friendly"),
  },

  {
    title: "DINING & ENTERTAINMENT",
    subtitle: "Discover Panama City Beach",
    description:
      "Explore Pier Park, Bay County Pier, waterfront restaurants, local seafood, shopping, nightlife, family attractions, and endless beach activities—all just minutes from your vacation rental.",
    image: getSectionImage("local-attractions"),
  },
];
    return (
    <section className="bg-[#f5f5f3] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-10 mt-16 md:mt-10">
        {/* HEADING */}
      <div className="text-center mb-28">
  <h1
    className="
      font-playfair
      text-black
      font-bold
      leading-[0.95]
      text-center
      text-5xl
      sm:text-6xl
      md:text-7xl
      lg:text-[90px]
    "
  >
    Luxury Living
    <br />
    On Santa Rosa Beach
  </h1>

  <p
    className="
      mt-8
      text-gray-600
      max-w-5xl
      mx-auto
      text-lg
      md:text-xl
      leading-[2]
    "
  >
    Escape to a spacious Gulf-view condo designed for unforgettable coastal
    vacations. Enjoy direct beach access, a private furnished balcony,
    resort-style amenities, beautifully updated interiors, and a peaceful
    setting just minutes from Gulf Place, Seaside, and the best dining and
    attractions along Florida's Emerald Coast.
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
      </div>
    </section>
  );
}