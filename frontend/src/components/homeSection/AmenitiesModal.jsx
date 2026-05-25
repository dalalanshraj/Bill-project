export default function AmenitiesModal({
  amenities,
  onClose,
}) {
  return (
    <div
      onClick={onClose}
      className="
      fixed
      inset-0
      bg-black/60
      z-[999999]
      flex
      items-center
      justify-center
      p-4
      animate-fadeIn
      "
    >
      {/* MODAL BOX */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="
        bg-white
        w-full
        max-w-5xl
        rounded-3xl
        p-6 md:p-10
        relative
        max-h-[90vh]
        overflow-y-auto
        animate-scaleIn
        "
      >
        
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="
          absolute
          top-5
          right-5
          text-3xl
          text-black
          cursor-pointer
          hover:rotate-90
          transition-all
          duration-300
          z-50
          "
        >
          ✕
        </button>

        {/* TITLE */}
        <h2
          className="
          text-3xl
          md:text-5xl
          font-semibold
          text-gray-800
          mb-10
          "
        >
          Amenities ({amenities.length})
        </h2>

        {/* GRID */}
        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          gap-5
          "
        >
          {amenities.map((name, i) => (
            <p
              key={i}
              className="
              text-gray-600 text-lg md:text-2xl  font-light
              border-b
              border-gray-200
              pb-3
              "
            >
              {name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}