import { Link, Links } from "react-router-dom";
import { TfiLocationPin } from "react-icons/tfi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Heart, ChevronLeft, ChevronRight } from "lucide-react";

export default function PropertyCard({ listing ,index }) {
const propertiesAmenities = [
  {
    id: 1,
    amenities: [
      "Beautiful Gulf View",
      "Direct Beach Access",
      "Steps from Pier Park",
      "Heated Pool & Hot Tub",
      "Complimentary Beach Chair Service",
      "Free Parking",
      "Book Direct • Airbnb • VRBO",
    ],
  },
  {
    id: 2,
    amenities: [
      "Beautiful Gulf View",
      "Direct Beach Access",
      "Heated Pool & Hot Tub",
      "Complimentary Beach Chair Service",
      "Free Parking",
      "Close to Shipwreck Island and many PCB attractions",
      "Book Direct • Airbnb • VRBO",
    ],
  },
];
 const currentPropertyAmenities = propertiesAmenities[index];

  const sliderId = listing._id;
  const photos =
    listing?.photos?.length > 0
      ? listing.photos
      : [{ url: "/placeholder.jpg" }];

  const imageUrl = (photo) => {
    if (!photo?.url) return "/placeholder.jpg";

    return photo.url.startsWith("http")
      ? photo.url
      : `${import.meta.env.VITE_API_URL}${photo.url}`;
  };

  const price =
    listing?.rates?.[0]?.nightly ||
    listing?.rates?.[0]?.price ||
    listing?.property?.price ||
    199;
    
  return (
    <Link
      to={`/${listing._id}`}
      className="
  group
  bg-white
  rounded-[28px]
  overflow-hidden
  shadow-xl
  flex
  flex-col
  h-full
  hover:-translate-y-2
  duration-500
"
    >
      {/* IMAGE */}

      <div className="relative h-[280px] md:h-[340px] overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination]}
          loop
          pagination={{ clickable: true }}
          navigation={{
            prevEl: `.prev-${sliderId}`,
            nextEl: `.next-${sliderId}`,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = `.prev-${sliderId}`;
            swiper.params.navigation.nextEl = `.next-${sliderId}`;
          }}
        >
          {photos.map((photo, index) => (
            <SwiperSlide key={index}>
              <img
                src={imageUrl(photo)}
                alt={listing?.property?.title}
                className="
                h-full
                w-full
                object-cover
                duration-700
                group-hover:scale-110
              "
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Gradient */}

        <div
          className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/60
          via-black/10
          to-transparent
          z-10
          pointer-events-none
        "
        />

        {/* Left Arrow */}

        <button
          className={`
    prev-${sliderId}
    absolute
    left-4
    top-1/2
    -translate-y-1/2
    z-30

    w-10
    h-10

    rounded-full
    bg-white
    shadow-lg

    flex
    items-center
    justify-center

    opacity-0
    invisible

    group-hover:opacity-100
    group-hover:visible

    transition-opacity
    duration-200
  `}
        >
          <ChevronLeft size={20} />
        </button>

        {/* Right Arrow */}

        <button
          className={`
    next-${sliderId}
    absolute
    right-4
    top-1/2
    -translate-y-1/2
    z-30
    w-10
    h-10
    rounded-full
    bg-white/90
    backdrop-blur-md
    shadow-lg
    flex
    items-center
    justify-center
    opacity-0
    invisible
    group-hover:opacity-100
    group-hover:visible
    transition-all
    duration-200
  `}
        >
          <ChevronRight size={20} />
        </button>

        {/* Price */}

        <div
          className="
          absolute
          left-5
          bottom-5

          z-20

          text-white

          font-bold

          text-4xl
        "
        >
          ${price.toLocaleString()}
        </div>

        {/* Heart */}

        {/* <button
          className="
          absolute

          right-5
          bottom-[-28px]

          z-30

          w-14
          h-14

          rounded-full

          bg-white

          shadow-xl

          flex
          items-center
          justify-center

          hover:bg-red-500
          hover:text-white

          duration-300
        "
        >
          <Heart size={22} />
        </button> */}
      </div>

      {/* CONTENT */}

      <div className="bg-white pt-10 px-6 pb-6">
        {/* Property type */}

        {/* Title */}

        <h2
          className="
          mt-3
          text-3xl
          font-bold
          leading-tight
          font-playfair
        "
        >
          {listing?.property?.title}
        </h2>

        {/* Location */}

        {/* <p
          className="
          mt-3
          text-gray-500
          text-[15px] flex 
        "
        >
         <TfiLocationPin className="mt-0" size={20} />  {listing?.location?.address || listing?.property?.city}
        </p> */}
        {/* DESCRIPTION */}

        {/* <p className="mt-5 text-gray-600 leading-7 line-clamp-2">
          <div
            className="  mt-5 text-gray-600  min-h-[84px] leading-7 line-clamp-2"
            dangerouslySetInnerHTML={{
              __html: listing?.description || "",
            }}
          />
        </p> */}

        {/* PROPERTY INFO */}

        <div className="grid grid-cols-3 gap-4 mt-auto pt-8">
          <div className="text-center py-4 rounded-2xl bg-gray-50">
            <p className="text-2xl font-bold">
              {listing?.property?.bedrooms || 1}
            </p>

            <span className="text-sm text-gray-500">Bedrooms</span>
          </div>

          <div className="text-center py-4 rounded-2xl bg-gray-50">
            <p className="text-2xl font-bold">
              {listing?.property?.bathrooms || 1}
            </p>

            <span className="text-sm text-gray-500">Bathrooms</span>
          </div>

          <div className="text-center py-4 rounded-2xl bg-gray-50">
            <p className="text-2xl font-bold">
              {listing?.property?.maxSleeps || 2}
            </p>

            <span className="text-sm text-gray-500">Sleeps</span>
          </div>
         
        </div>
        {currentPropertyAmenities?.amenities?.length > 0 && (
  <div className="mt-7">
    <h3 className="text-lg font-semibold mb-4">
      Amenities
    </h3>

    <div className="grid grid-cols-2 gap-x-4 gap-y-3">
      {currentPropertyAmenities.amenities.map((amenity, amenityIndex) => (
        <div
          key={amenityIndex}
          className="flex items-center gap-2 text-sm text-gray-600"
        >
          <span className="w-2 h-2 rounded-full bg-[#2f9bad] shrink-0" />

          <span>{amenity}</span>
        </div>
      ))}
    </div>
  </div>
)}

        {/* FEATURES */}

        {/* <div className="flex flex-wrap gap-2 mt-7">

          <span className="px-4 py-2 rounded-full bg-[#eef7ff] text-[#2563eb] text-sm font-medium">
            🌊 Gulf View
          </span>

          <span className="px-4 py-2 rounded-full bg-[#f4fff4] text-[#15803d] text-sm font-medium">
            🏖 Beachfront
          </span>

          <span className="px-4 py-2 rounded-full bg-[#fff8ec] text-[#d97706] text-sm font-medium">
            🏊 Pool
          </span>

          <span className="px-4 py-2 rounded-full bg-[#faf5ff] text-[#9333ea] text-sm font-medium">
            🔥 Hot Tub
          </span>

        </div> */}

        {/* DIVIDER */}

        <div className="border-t my-8"></div>

        {/* FOOTER */}

        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Starting From</p>

            <h3 className="text-3xl font-bold">
              ${price}
              <span className="text-lg text-gray-400 font-normal">/night</span>
            </h3>
          </div>

          <Link
            to={`/${listing._id}`}
            className="
          px-5
            py-3
            rounded-full
            bg-black
            text-white
            hover:bg-[#2f9bad]
            transition-all
            duration-300
            font-medium
          "
          >
            View Property →
          </Link>
        </div>
      </div>
    </Link>
  );
}
