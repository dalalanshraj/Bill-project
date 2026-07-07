import VrboLogo from "../assets/property-icon/vrbo.png";
import AirbnbLogo from "../assets/property-icon/airbnb.png";
import EcbyoLogo from "../assets/property-icon/ecbyo.png";

export default function PropertyIcon() {
  const properties = [
    {
      id: 1,
      title: "Grand Panama Beach Resort",
      links: {
        ecbyo: "https://www.emeraldcoastbyowner.com/e10266",
        vrbo: "https://www.vrbo.com/2600532",
        airbnb: "https://www.airbnb.com/h/BeachTimeAtGrandPanamaResortinPCB",
      },
    },

    {
      id: 2,
      title: "Calypso Tower 3 Resort",
      links: {
        ecbyo: "https://www.emeraldcoastbyowner.com/e11499",
        vrbo: "https://www.vrbo.com/3162877",
        airbnb: "https://www.airbnb.com/h/BeachTimeAtCalypsoTower3inPCB",
      },
    },
  ];

  const platforms = [
  {
    name: "Emerald Coast By Owner",
    logo: EcbyoLogo,
    key: "ecbyo",
    featured: true,
  },
  {
    name: "VRBO",
    logo: VrboLogo,
    key: "vrbo",
    featured: false,
  },
  {
    name: "Airbnb",
    logo: AirbnbLogo,
    key: "airbnb",
    featured: false,
  },
];

  return (
    <section className="w-full bg-white py-20 px-5">
      <div className="max-w-6xl mx-auto">
        {/* HEADING */}

        <div className="text-center mb-16">
          {/* <p
            className="
              uppercase
              tracking-[5px]
              text-gray-400
              text-xs
            "
          >
            Book With Your Preferred Platform
          </p> */}

          <h2
            className="
              mt-4
              font-playfair
              text-4xl
              sm:text-5xl
              md:text-6xl
              font-bold
              text-black
            "
          >
            Book Your Way
          </h2>
          <p
            className="
      mt-8
      text-gray-600
      max-w-4xl
      mx-auto
      text-lg
      md:text-xl
      leading-[2]
    "
          >
            Whether you prefer to book directly through <strong className="text-black">ECBYO</strong> for potential
            savings and personalized service, or through the trusted Airbnb or
            VRBO platforms,you’ll enjoy the same exceptional Gulf Life’s a Beach
            experience, responsive local support, and professionally maintained
            accommodations.
          </p>
        </div>

        {/* TWO CARDS */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-8
            lg:gap-12
          "
        >
          {properties.map((property) => (
            <div
              key={property.id}
              className="
                group

                min-h-[280px]

                border
                border-gray-200

                bg-[#f8f8f6]

                px-6
                sm:px-10

                py-10

                flex
                flex-col
                items-center
                justify-center

                transition-all
                duration-500

                hover:-translate-y-2
                hover:shadow-xl
              "
            >
              {/* PROPERTY NAME */}

              <h3
                className="
                  font-playfair

                  text-2xl
                  sm:text-3xl
                  lg:text-3xl

                  font-bold

                  text-center

                  text-black

                  leading-tight
                "
              >
                {property.title}
              </h3>

              {/* DIVIDER */}

              <div
                className="
                  w-12
                  h-[2px]

                  bg-black

                  mt-6
                  mb-8

                  transition-all
                  duration-500

                  group-hover:w-24
                "
              />

              {/* LOGOS */}

             {/* BOOKING PLATFORMS */}

<div className="w-full flex flex-col items-center">

  {/* ECBYO FEATURED */}

  {platforms
    .filter((platform) => platform.featured)
    .map((platform) => (
      <a
        key={platform.key}
        href={property.links[platform.key]}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${property.title} on ${platform.name}`}
        className="
          group/ecbyo
          relative

          w-full
          max-w-[430px]

          min-h-[145px]

          px-6
          py-5

          flex
          flex-col
          sm:flex-row

          items-center
          justify-center

          gap-4

          bg-white

          border-2
          border-[#2f9bad]

          rounded-2xl

          shadow-md

          transition-all
          duration-300

          hover:-translate-y-1
          hover:shadow-xl
        "
      >

        {/* BADGE */}

        <span
          className="
            absolute
            -top-3
            left-1/2
            -translate-x-1/2

            whitespace-nowrap

            bg-[#2f9bad]
            text-white

            px-4
            py-1

            rounded-full

            text-xs
            sm:text-sm

            font-semibold

            tracking-wide
          "
        >
          BOOK DIRECT & SAVE
        </span>


        {/* LOGO */}

        <img
          src={platform.logo}
          alt={platform.name}
          className="
            w-[150px]
            sm:w-[180px]

            max-h-[100px]

            object-contain

            transition-transform
            duration-300

            group-hover/ecbyo:scale-105
          "
        />


        {/* TEXT */}

        <div className="text-center sm:text-left">

          <p className="text-xs uppercase tracking-[2px] text-[#2f9bad] font-semibold">
            Recommended
          </p>

          <p className="mt-1 text-lg font-light text-black">
            Best Direct Booking Option
          </p>

          {/* <p className="mt-1 text-sm text-gray-500">
            Potential savings & personalized service
          </p> */}

        </div>

      </a>
    ))}


  {/* OR DIVIDER */}

  <div className="w-full flex items-center gap-4 my-6">

    <div className="h-px bg-gray-300 flex-1" />

    <span className="text-xs uppercase tracking-[3px] text-gray-400">
      Also Available On
    </span>

    <div className="h-px bg-gray-300 flex-1" />

  </div>


  {/* OTHER PLATFORMS */}

  <div className="flex items-center justify-center gap-8 sm:gap-12">

    {platforms
      .filter((platform) => !platform.featured)
      .map((platform) => (
        <a
          key={platform.key}
          href={property.links[platform.key]}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${property.title} on ${platform.name}`}
          className="
            w-[100px]
            sm:w-[125px]

            h-[60px]

            flex
            items-center
            justify-center

            opacity-70

            transition-all
            duration-300

            hover:opacity-100
            hover:-translate-y-1
          "
        >

          <img
            src={platform.logo}
            alt={platform.name}
            className="
              max-w-full
              max-h-[65px]

              object-contain

              transition-transform
              duration-300

              hover:scale-105
            "
          />

        </a>
      ))}

  </div>

</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
