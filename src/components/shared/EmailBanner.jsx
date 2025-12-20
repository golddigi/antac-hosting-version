import React from "react";
import { HiEnvelope, HiArrowRight, HiSparkles } from "react-icons/hi2";

const ContactBanner = () => {
  return (
    <section className="max-w-7xl mx-auto my-4 px-4 md:px-6 py-10">
      <div className="relative w-full rounded-3xl overflow-hidden bg-gradient-to-br from-emerald-500 via-teal-500 to-green-400 text-white shadow-2xl">
        {/* Decorative background pattern */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.4) 1.5px, transparent 1.5px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Soft glow effects */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-emerald-300/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-20 w-48 h-48 bg-teal-300/30 rounded-full blur-3xl" />

        <div className="relative z-10 py-8 md:py-12 px-6 md:px-12 lg:px-16">
          <div className="max-w-2xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full mb-3 md:mb-4 border border-white/30">
              <HiSparkles className="w-3 h-3 md:w-4 md:h-4" />
              <span className="text-xs md:text-sm font-medium">
                Get in touch
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3 md:mb-4">
              We'd love to hear from you
            </h2>

            {/* Description */}
            <p className="text-emerald-50 text-sm md:text-lg mb-4 md:mb-6 max-w-xl mx-auto">
              Have questions or want to work together? Drop us a message and
              we'll get back to you soon.
            </p>

            {/* CTA Button */}
            <a
              href="mailto:sudhirsuhag@antac.in"
              className="group inline-flex items-center gap-2 md:gap-3 bg-white text-emerald-600 px-5 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <HiEnvelope className="w-4 h-4 md:w-6 md:h-6" />
              <span>sudhirsuhag@antac.in</span>
              <HiArrowRight className="w-4 h-4 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
