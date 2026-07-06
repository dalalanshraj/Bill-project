import { useState, useEffect } from "react";
import api from "../../api/axios";
import AmenitiesModal from "./AmenitiesModal";

export default function AmenitiesSection( ) {
  const [open, setOpen] = useState(false);

  const [amenities, setAmenities] = useState([]);

  // FETCH AMENITIES FROM BACKEND
useEffect(() => {
  const fetchAmenities = async () => {
    try {
      const { data } = await api.get("/listings/published")
// console.log("Listing:", data);

data.forEach((listing) => {
  // console.log("Amenities:", listing.amenities);
});
      let allAmenities = [];

      data.forEach((listing) => {
    //  console.log(listing);

const amenitiesObject =
  listing.amenities ??
  listing.property?.amenities ??
  {};

// console.log("Amenities Object:", amenitiesObject);

        const amenities = Object.keys(amenitiesObject).filter(
          (key) => amenitiesObject[key] === true
        );

        allAmenities.push(...amenities);
      });

      // Remove duplicates
      const uniqueAmenities = [...new Set(allAmenities)].sort();

      setAmenities(uniqueAmenities);
    } catch (err) {
      console.log(err);
    }
  };

  fetchAmenities();
}, []);


  // PREVIEW
  const preview = amenities.slice(0, 12);

  return (
    <section className="py-1 px-6 md:px-16">
      {/* TOP */}
      {/* <p
        className="
        uppercase 
        text-center 
        text-xs 
        tracking-[3px] 
        text-[#2f9bad]
        mb-3
      "
      >
        Amenities
      </p> */}
      <div className="text-center mb-24">

      <h2
        className="
        font-playfair text-5xl md:text-7xl font-bold
      "
      >
        Our Amenities
      </h2>
</div>
      {/* PREVIEW */}
      <div
        className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        gap-5
        
      "
      >
        {preview
          .filter((item) => item?.trim() !== "")
          .map((name, i) => (
            <p key={i} className="text-gray-600 text-lg md:text-2xl  font-light" >
              {name}
            </p>
          ))}
      </div>

      {/* BUTTON */}
      {amenities.length > 0 && (
        <div className="flex justify-center p-3">
          <button
            onClick={() => setOpen(true)}
          className="px-12 py-4 bg-black text-white uppercase tracking-[4px] text-sm hover:bg-blue-500 transition-all duration-500"
          >
            Show all {amenities.length} Amenities
          </button>
        </div>
      )}

      {/* MODAL */}
      {open && (
        <AmenitiesModal amenities={amenities} onClose={() => setOpen(false)} />
      )}
    </section>
  );
}
