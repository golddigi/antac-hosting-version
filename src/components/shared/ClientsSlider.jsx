import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const logos = import.meta.glob("../../assets/client/*.{png,jpg,jpeg,webp}", {
  eager: true,
});

const clients = Object.values(logos).map((m) => m.default);

const ClientsSlider = ({
  headingSize = "text-2xl sm:text-3xl md:text-4xl lg:text-5xl",
}) => {
  return (
    <section className="my-12 md:my-16 lg:my-20">
      <div className="text-center mb-10 px-4">
        <h3 className={`${headingSize} font-bold text-gray-900`}>
          Our Clients
        </h3>

        <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-600">
          Trusted by leading businesses and organizations.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Autoplay]}
          loop
          autoplay={{ delay: 1500 }}
          speed={1000}
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 3 },
            480: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
        >
          {clients.map((logo, i) => (
            <SwiperSlide key={i} className="flex justify-center">
              <img
                src={logo}
                alt={`client-logo-${i}`}
                className="h-10 md:h-12 lg:h-14 object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ClientsSlider;
