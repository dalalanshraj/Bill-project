import { useEffect, useState } from "react";
import api from "../api/axios";
import condoImg from "../assets/about-Img11.png";

export default function About() {
  const [images, setImages] = useState([]);
  const [owner, setOwner] = useState(null);

  const OWNER_ID = "6a42e54f4d210e7c35805167";

  // =====================================
  // IMAGE URL
  // =====================================

  const getImageUrl = (path) => {
    if (!path || typeof path !== "string") return "";

    const base = import.meta.env.VITE_API_URL || "";

    if (path.startsWith("http")) return path;

    return (
      base.replace(/\/$/, "") +
      "/" +
      path.replace(/^\//, "")
    );
  };

  // =====================================
  // FETCH GALLERY IMAGES
  // =====================================

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const { data } = await api.get("/gallery/published");

        setImages(Array.isArray(data) ? data : []);
      } catch (err) {
        console.log("Gallery fetch error:", err);
      }
    };

    fetchImages();
  }, []);

  // =====================================
  // FETCH OWNER
  // =====================================

  useEffect(() => {
    const fetchOwner = async () => {
      try {
        const { data } = await api.get(
          `/profile/public/${OWNER_ID}`
        );

        setOwner(data);
      } catch (err) {
        console.log("Owner fetch error:", err);
      }
    };

    fetchOwner();
  }, []);

  // =====================================
  // FALLBACK IMAGE
  // =====================================

  const fallbackImage =
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511";

  // =====================================
  // GET ALL IMAGES OF ONE SECTION
  // =====================================

  const getSectionImages = (type) => {
    return images
      .filter(
        (img) =>
          img.sectionType === type &&
          img.status === "published"
      )
      .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
      .map((img) => getImageUrl(img.image));
  };

  // =====================================
  // SECTIONS DATA
  // =====================================

  const sections = [
    {
      title: "OUR RESORTS",
      subtitle: "Two Exceptional Beachfront Destinations",
      description:
        "Discover two exceptional Panama City Beach destinations — Grand Panama Beach Resort and Calypso Tower 3 Resort. Enjoy breathtaking Gulf views, spacious accommodations, private balconies, resort-style pools, relaxing hot tubs, convenient beach access, and premium amenities designed to create unforgettable beachfront vacations.",
      image: condoImg,
      isCollage: true,
    },

    {
      title: "PRIME LOCATIONS",
      subtitle: "Steps from the Beach & Attractions",
      description:
        "Located in the heart of Panama City Beach, our vacation rentals are just minutes from Pier Park, Bay County Pier, restaurants, shopping, entertainment, and direct access to the beautiful white-sand beaches of the Emerald Coast.",
      sectionType: "gulf-views",
    },

    {
      title: "SPACIOUS LIVING",
      subtitle: "Comfort for Everyone",
      description:
        "Relax in bright, open living spaces featuring comfortable seating, Smart TVs, sleeper sofas, and large windows that fill the rooms with natural light while showcasing spectacular Gulf views.",
      sectionType: "living-room",
    },

    {
      title: "FULLY EQUIPPED KITCHENS",
      subtitle: "Cook with Ease",
      description:
        "Each condo includes a fully equipped kitchen with modern appliances, cookware, coffee makers, dining essentials, and everything you need to prepare meals for the entire family.",
      sectionType: "kitchen",
    },

    {
      title: "PRIVATE BALCONIES",
      subtitle: "Spectacular Gulf Views",
      description:
        "Enjoy your morning coffee or evening sunset from private furnished balconies overlooking the Gulf of Mexico, resort pools, and the stunning coastline of Panama City Beach.",
      sectionType: "balcony",
    },

    {
      title: "RESORT AMENITIES",
      subtitle: "Relax & Recharge",
      description:
        "Guests can enjoy heated pools, hot tubs, fitness centers, tiki bars, cabanas, beach chair service, on-site restaurants, fire pits, and direct beach access for an unforgettable resort experience.",
      sectionType: "pool-hot-tub",
    },

    {
      title: "PREMIUM RESORT FEATURES",
      subtitle: "Everything You Need",
      description:
        "From beautifully maintained grounds and modern fitness facilities to convenient beach access, resort dining, and family-friendly amenities, every stay is designed to provide comfort, convenience, and lasting memories.",
      sectionType: "community-amenities",
    },

    {
      title: "PERFECT FOR FAMILIES",
      subtitle: "Create Lasting Memories",
      description:
        "Whether you're planning a romantic escape, family vacation, or group getaway, our beachfront condos provide spacious accommodations and easy access to beaches, water activities, parks, and local attractions for guests of all ages.",
      sectionType: "family-friendly",
    },

    {
      title: "DINING & ENTERTAINMENT",
      subtitle: "Discover Panama City Beach",
      description:
        "Explore Pier Park, Bay County Pier, waterfront restaurants, local seafood, shopping, nightlife, family attractions, and endless beach activities—all just minutes from your vacation rental.",
      sectionType: "local-attractions",
    },
  ];

  // =====================================
  // CONTENT COMPONENT
  // =====================================

  const SectionContent = ({ item }) => {
    return (
      <div className="flex flex-col justify-center text-center px-2 md:px-6">
        <h3
          className="
            uppercase
            tracking-[4px]
            md:tracking-[6px]
            text-black
            text-lg
            md:text-xl
            xl:text-2xl
            mb-6
            font-light
          "
        >
          {item.title}
        </h3>

        <h4
          className="
            uppercase
            tracking-[3px]
            md:tracking-[4px]
            text-gray-400
            text-xs
            md:text-sm
            mb-6
          "
        >
          {item.subtitle}
        </h4>

        <p
          className="
            text-gray-600
            text-base
            md:text-lg
            xl:text-xl
            leading-relaxed
            font-light
          "
        >
          {item.description}
        </p>
      </div>
    );
  };

  return (
    <section className="bg-[#f5f5f3] py-20 overflow-hidden">
      <div className="max-w-[1450px] mx-auto px-5 md:px-10 mt-16 md:mt-10">

        {/* PAGE HEADING */}

        <div className="text-center mb-28">
          <h1
            className="
              font-playfair
              text-black
              font-bold
              leading-[0.95]
              text-5xl
              sm:text-6xl
              md:text-7xl
              lg:text-[90px]
            "
          >
            About Us
          </h1>
        </div>

        {/* OWNER */}

        {owner && (
          <div
            className="
              max-w-6xl
              mx-auto
              mb-28
              flex
              flex-col
              md:flex-row
              items-center
              md:items-start
              gap-8
              md:gap-12
              lg:gap-16
            "
          >
            <div className="shrink-0">
              <img
                src={getImageUrl(owner.photo)}
                alt={owner.name || "Property Owner"}
                className="
                  w-36
                  h-36
                  sm:w-40
                  sm:h-40
                  md:w-48
                  md:h-48
                  lg:w-36
                  lg:h-36
                  rounded-full
                  object-cover
                  border-4
                  border-white
                  shadow-lg
                "
              />
            </div>

            <div className="flex-1 text-center md:text-left md:pt-2">
              <p
                className="
                  uppercase
                  tracking-[5px]
                  text-[#2f9bad]
                  text-xs
                  md:text-[20px]
                  font-medium
                "
              >
                Meet Your Host
              </p>

              <h2 className="mt-3 font-playfair text-3xl sm:text-4xl lg:text-3xl font-bold text-black">
                {owner.name}
              </h2>

              <p className="mt-5 text-gray-600 text-base sm:text-lg md:text-xl leading-8 md:leading-9 font-light whitespace-pre-line">
                {owner.about}
              </p>
            </div>
          </div>
        )}

        {/* PROPERTY SECTIONS */}

        <div className="space-y-24 md:space-y-32">
          {sections.map((item, index) => {
            /*
              COLLAGE SECTION
            */

            if (item.isCollage) {
              return (
                <div
                  key={item.title}
                  className="
                    grid
                    grid-cols-1
                    lg:grid-cols-2
                    gap-12
                    lg:gap-20
                    items-center
                  "
                >
                  <div className="w-full">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="block w-full h-auto object-contain"
                    />
                  </div>

                  <SectionContent item={item} />
                </div>
              );
            }

            /*
              GET SECTION IMAGES
            */

            const sectionImages = getSectionImages(
              item.sectionType
            );

            const firstImage =
              sectionImages[0] || fallbackImage;

            const secondImage = sectionImages[1];

            const hasTwoImages =
              sectionImages.length >= 2;

            /*
              TWO IMAGE LAYOUT

              LEFT IMAGE | CONTENT | RIGHT IMAGE
            */

            if (hasTwoImages) {
              return (
                <div
                  key={item.title}
                  className="
                    grid
                    grid-cols-1
                    lg:grid-cols-[1fr_0.9fr_1fr]
                    gap-8
                    lg:gap-10
                    xl:gap-14
                    items-center
                  "
                >
                  {/* LEFT IMAGE */}

                  <div className="w-full">
                    <img
                      src={firstImage}
                      alt={`${item.title} 1`}
                      className="
                        block
                        w-full
                        h-[300px]
                        sm:h-[420px]
                        lg:h-[520px]
                        object-cover
                      "
                    />
                  </div>

                  {/* CENTER CONTENT */}

                  <SectionContent item={item} />

                  {/* RIGHT IMAGE */}

                  <div className="w-full">
                    <img
                      src={secondImage}
                      alt={`${item.title} 2`}
                      className="
                        block
                        w-full
                        h-[300px]
                        sm:h-[420px]
                        lg:h-[520px]
                        object-cover
                      "
                    />
                  </div>
                </div>
              );
            }

            /*
              ONE IMAGE NORMAL ALTERNATING LAYOUT
            */

            return (
              <div
                key={item.title}
                className="
                  grid
                  grid-cols-1
                  lg:grid-cols-2
                  gap-12
                  lg:gap-20
                  items-center
                "
              >
                {/* IMAGE */}

                <div
                  className={
                    index % 2 !== 0
                      ? "lg:order-2"
                      : "lg:order-1"
                  }
                >
                  <img
                    src={firstImage}
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
                </div>

                {/* CONTENT */}

                <div
                  className={
                    index % 2 !== 0
                      ? "lg:order-1"
                      : "lg:order-2"
                  }
                >
                  <SectionContent item={item} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}