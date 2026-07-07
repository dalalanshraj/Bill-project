import React from "react";

const PropertyComparisonTable = () => {
  const comparisonData = [
    {
      feature: "Bedrooms",
      calypso: "1",
      grandPanama: "2",
    },
    {
      feature: "Bathrooms",
      calypso: "2",
      grandPanama: "2",
    },
    {
      feature: "Sleeps",
      calypso: "6",
      grandPanama: "8",
    },
    {
      feature: "View",
      calypso: "Gulf View",
      grandPanama: "Gulf View",
      highlight: true,
    },
    {
      feature: "Beach Access",
      calypso: "Direct Beach Access",
      grandPanama: "Direct Beach Access",
    },
    {
      feature: "Heated Pool",
      calypso: "✓",
      grandPanama: "✓",
    },
    {
      feature: "Hot Tub",
      calypso: "✓",
      grandPanama: "✓",
    },
    {
      feature: "Beach Chair Service",
      calypso: "Included",
      grandPanama: "Included",
    },
    {
      feature: "Free Parking",
      calypso: "Included",
      grandPanama: "Included",
    },
    {
      feature: "Walk to Pier Park",
      calypso: "Adjacent (2–3 minute walk)",
      grandPanama: "Approximately 2 miles",
      highlightCalypso: true,
    },
    {
      feature: "Best For",
      calypso: "Couples, Small Families, Pier Park Visitors",
      grandPanama: "Larger Families, Groups, Longer Stays",
    },
     {
      feature: "Booking Platform",
      calypso: "Book Direct , Airbnb , VRBO",
      grandPanama: "Book Direct , Airbnb , VRBO",
    },
  ];

  return (
    <section className="w-full bg-white py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADING */}

        <div className="text-center mb-8">
            <h2
        className="
        font-playfair text-5xl md:text-7xl font-bold
      "
      >
            Compare Our Condos
          </h2>

          <p className="mt-8 text-gray-600 max-w-4xl mx-auto text-lg md:text-xl leading-9">
            Find the perfect vacation rental for your stay.
          </p>
        </div>


        {/* TABLE */}

        <div className="w-full overflow-x-auto rounded-xl shadow-lg border border-gray-200">
          <table className="w-full min-w-[850px] border-collapse">

            {/* HEADER */}

            <thead>
              <tr className="bg-[#2f9bad] text-white">

                <th className="w-[22%] py-4 px-5 text-left uppercase tracking-[4px] text-lg font-bold border-r border-white/30">
                  Feature
                </th>

                <th className="w-[39%] py-4 px-5 text-left uppercase tracking-[4px] text-lg md:text-xl font-bold border-r border-white/30">
                  Calypso Tower 3 Resort
                </th>

                <th className="w-[39%] py-4 px-5 uppercase tracking-[4px] text-left text-lg md:text-xl font-bold">
                  Grand Panama Beach Resort
                </th>

              </tr>
            </thead>


            {/* BODY */}

            <tbody>
              {comparisonData.map((item, index) => (
                <tr
                  key={index}
                  className={`
                    transition-colors
                    duration-200
                    hover:bg-[#2f9bad]/10

                    ${
                      index % 2 === 0
                        ? "bg-white"
                        : "bg-gray-50"
                    }
                  `}
                >

                  {/* FEATURE */}

                  <td className="py-4 px-5 font-light border-r border-b border-gray-200   text-gray-800 whitespace-nowrap">
                    {item.feature}
                  </td>


                  {/* CALYPSO */}

                  <td
                    className={`
                      py-4
                      px-5
                      border-r
                      border-b
                      border-gray-200
                      text-gray-700 font-light

                      ${
                        item.highlight ||
                        item.highlightCalypso
                          ? "font-bold text-gray-900"
                          : ""
                      }
                    `}
                  >
                    {item.calypso}
                  </td>


                  {/* GRAND PANAMA */}

                  <td
                    className={`
                      py-4
                      px-5
                      border-b
                      border-gray-200
                      text-gray-700 font-light

                      ${
                        item.highlight
                          ? "font-bold text-gray-900"
                          : ""
                      }
                    `}
                  >
                    {item.grandPanama}
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>
    </section>
  );
};

export default PropertyComparisonTable;