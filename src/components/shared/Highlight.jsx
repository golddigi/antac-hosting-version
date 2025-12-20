import { stats } from "../../data/highlight";

const Highlights = () => {
  return (
    <section className="my-14 sm:my-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* SMALL HEADING */}
        <h4
          className="
            text-[11px] sm:text-md md:text-lg 
            font-semibold 
            text-gray-500 
            tracking-widest 
            text-center 
            mb-6 sm:mb-10
          "
        >
          OUR ACHIEVEMENTS
        </h4>

        {/* STATS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              {/* Value */}
              <h3 className="font-bold text-3xl xs:text-4xl sm:text-5xl text-[#099268] leading-tight">
                {stat.value}
              </h3>

              {/* Label */}
              <p className="font-medium text-[13px] xs:text-sm sm:text-base text-gray-700 mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
