import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import ContactForm from "./ContactForm";
import { contact } from "../../data/contact";

export default function ContactBanner({ products }) {
  return (
    <section className="w-full py-10 sm:py-14 md:py-16">
      <div
        className="
          max-w-7xl mx-auto
          p-4 sm:p-6 md:p-8 lg:p-10
          flex flex-col md:flex-row 
          items-center md:items-start justify-between
          gap-8 sm:gap-10 md:gap-12 lg:gap-14
          rounded-3xl
          shadow-lg
        "
        style={{
          background:
            "linear-gradient(180deg, hsla(160, 85%, 87%, 1) 0%, hsla(220, 61%, 79%, 1) 100%)",
        }}
      >
        {/* LEFT — Contact Info */}
        <div className="flex flex-col pt-4 gap-4 w-full md:w-1/2 lg:w-[45%]">
          {/* Heading */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
            Need Custom Specifications?
          </h2>

          {/* Description */}
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed">
            Contact us with your custom solar or lighting project requirements.
            Our team will assist you with the right solution.
          </p>

          {/* Phone */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white shadow-sm rounded-full flex items-center justify-center">
              <FontAwesomeIcon
                icon={faPhone}
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-600"
              />
            </div>
            <a
              href={`tel:${contact.phone}`}
              className="text-gray-900 font-medium text-sm sm:text-base md:text-lg hover:text-teal-600 transition"
            >
              {contact.phone}
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white shadow-sm rounded-full flex items-center justify-center">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-600"
              />
            </div>
            <a
              href={`mailto:${contact.email}`}
              className="text-gray-900 font-medium text-sm sm:text-base md:text-lg hover:text-teal-600 transition"
            >
              {contact.email}
            </a>
          </div>

          {/* ---- Social Icons Section ---- */}
          <div className="flex flex-col gap-3 sm:gap-4 pt-3">
            {/* Label */}
            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 tracking-wide">
              Follow Us
            </h3>

            {/* Icons Row */}
            <div className="flex items-center gap-3 sm:gap-4 md:gap-5 flex-wrap">
              {contact.social.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    flex items-center justify-center
                    w-9 h-9 
                    sm:w-11 sm:h-11 
                    md:w-12 md:h-12 
                    rounded-xl
                    bg-white/60
                    backdrop-blur-sm
                    shadow-sm
                    transition-all
                    hover:scale-110 hover:shadow-md
                  "
                >
                  <FontAwesomeIcon
                    icon={s.icon}
                    style={{ color: s.color }}
                    className="text-lg sm:text-xl md:text-2xl"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — Form */}
        <div className="w-full md:w-1/2 lg:w-[45%] max-w-md">
          <ContactForm products={products} />
        </div>
      </div>
    </section>
  );
}
