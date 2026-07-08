import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Home, KeyRound } from "lucide-react";
import { useState, useEffect } from "react";

import api from "../api/axios.js";

import logo from "../assets/logo/LOGO.png";
import { Link } from "react-router-dom";

export default function Footer({ listingId }) {
  const [listing, setListing] = useState(null);

  // =====================================
  // FETCH LISTING
  // =====================================

  useEffect(() => {
    if (!listingId) return;

    api
      .get(`/listings/${listingId}`)

      .then((res) => {
        console.log("FOOTER DATA:", res.data);

        setListing(res.data);
      })

      .catch((err) => {
        console.log(err);
      });
  }, [listingId]);

  // =====================================
  // DATA
  // =====================================

  const address = listing?.location?.address || "Panama City Beach, Florida";
  const email = listing?.property?.email || "info@example.com";
  const phone = listing?.property?.phone || "000-000-0000";
  const title = listing?.property?.title || "Luxury Condo";

  return (
    <footer className="bg-black text-white mt-20">
      {/* ================= MAP ================= */}

      <div className="w-full h-[240px] overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <div>
            <h1  className="text-center text-2xl ">Grand Panama Beach Resort</h1>
 <iframe
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3474.7185618930394!2d-85.8743764!3d30.214747199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88938c43fcd78fc9%3A0x2eb32fee9462b3fd!2s15928%20Front%20Beach%20Rd%20%23703%2C%20Panama%20City%20Beach%2C%20FL%2032413%2C%20USA!5e1!3m2!1sen!2sin!4v1783551546317!5m2!1sen!2sin%22 width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin`}
          className="w-full h-100 border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
          </div>
      <div>
        <h1 className="text-center text-2xl ">Calypso Tower 3 Resort</h1>
 <iframe
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6985.35130742772!2d-85.87996839116352!3d30.214750300000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88938c414feb12d5%3A0x96f97f304409d314!2sCalypso%20Tower%203%20Beach%20Resort!5e1!3m2!1sen!2sin!4v1783531536742!5m2!1sen!2sin`}
          className="w-full h-100 border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
       
        </div>
       
      </div>

      {/* ================= FOOTER CONTENT ================= */}

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-1">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 items-center">
          {/* ================= LEFT ================= */}
  <div className="">
            {/* <h3 className="text-3xl font-semibold mb-6">Find Your Perfect Beachfront Vacation Rental</h3>

            <p className="text-gray-300 leading-8">11800 Front Beach Rd, Unit 2-804 Panama City Beach Florida 32407</p> */}

            <p className="mt-5 text-gray-300">{phone}</p>

            <p className="text-gray-300 break-all">{email}</p>
          </div>
       

          {/* ================= CENTER ================= */}
   <div className="text-center md:text-left">
            <img src={logo} alt="logo" className="w-48 mx-auto md:mx-10 mb-6" />

            <p className="text-gray-400 text-sm leading-7">
             © 2026 <a href="https://digifyamerica.com/">Digify America.</a> All rights reserved.
            </p>
          </div>
        

          {/* ================= RIGHT ================= */}

          <div className="flex flex-col items-center md:items-end">
          <Link
  to="/admin/login"
  className="
  mt-10
    group
    inline-flex
    items-center
    gap-2

    px-4
    py-2

    rounded-full

    bg-gradient-to-b
    from-sky-400
    via-blue-500
    to-blue-700

    border
    border-blue-300

    shadow-md

    transition-all
    duration-300

    hover:scale-105
    hover:shadow-lg
  "
>
  <span
    className="
      relative
      flex
      items-center
      justify-center

      w-5
      h-5


      rounded-full
      bg-white/90
      text-blue-800
    "
  >
    <Home size={17} />

    <KeyRound
      size={12}
      className="absolute -right-1 -bottom-0.5 text-blue-700"
    />
  </span>

  <span className="text-white text-sm font-semibold tracking-wide">
    Owner Login
  </span>
</Link>
           

            {/* POWERED */}

            <div className="mt-10 text-center md:text-right mr-12">
              <p className="uppercase tracking-[4px] pr-10 text-gray-500 text-sm mb-6">
                Follow Us
              </p>

              <div className="flex gap-4 ml-[7%]">
                
                <a href="https://www.facebook.com/gulflifesabeachpcb/">  <div
                     
                    className="
                      w-12
                      h-12
                      rounded-full
                      border
                      border-gray-700
                      flex
                      items-center
                      justify-center
                      hover:bg-[#FFE8BE]
                      hover:text-black
                      hover:border-[#FFE8BE]
                      transition-all
                      duration-300
                      cursor-pointer
                    "
                  >
                    <FaFacebookF size={18} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
