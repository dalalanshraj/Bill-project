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
    },
    {
      name: "VRBO",
      logo: VrboLogo,
      key: "vrbo",
    },
    {
      name: "Airbnb",
      logo: AirbnbLogo,
      key: "airbnb",
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

              <div
                className="
                  flex
                  items-center
                  justify-center

                  flex-wrap

                  gap-6
                  sm:gap-8
                "
              >
                {platforms.map((platform) => (
                  <a
                    key={platform.key}
                    href={property.links[platform.key]}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${property.title} on ${platform.name}`}
                    className="
                      flex
                      items-center
                      justify-center

                      w-[100px]
                      sm:w-[120px]

                      h-[55px]

                      transition-all
                      duration-300

                      hover:-translate-y-1
                    "
                  >
                    <img
                      src={platform.logo}
                      alt={platform.name}
                      className="
                        max-w-full

                        max-h-[98px]

                        object-contain

                        transition-transform
                        duration-300

                        hover:scale-110
                      "
                    />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
