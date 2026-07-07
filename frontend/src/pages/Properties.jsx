import React, { useEffect, useState } from "react";
import api from "../api/axios.js";
import PropertyCard from "../components/PropertyCard";

const Properties = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/listings/published")
      .then((res) => {
        setListings(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <>

      {/* LISTINGS */}
      <div className="p-10 bg-gray-100 ">
         <div className="text-center mt-34">
       <h1 className="font-playfair text-5xl md:text-7xl font-bold">
  Choose Your Perfect <br/> Panama City Beach Vacation
</h1>

<p className="mt-8 text-gray-600 max-w-4xl mx-auto text-lg md:text-md leading-9">
  Experience Panama City Beach through our carefully curated collection of luxury beachfront vacation rentals.  
</p>
        </div>
        {loading && (
          <p className="text-center text-gray-500">
            Loading properties...
          </p>
        )}

        {!loading && listings.length === 0 && (
          <p className="text-center text-red-500">
            No properties available
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-5  md:w-full ">
          
        {listings.map((listing, index) => (
  <PropertyCard
    key={listing._id}
    listing={listing}
    index={index}
  />
))}
        </div>
      </div>
    </>
  );
};

export default Properties;
