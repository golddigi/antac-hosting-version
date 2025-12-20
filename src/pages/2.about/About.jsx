import React from "react";
import Highlight from "../../components/shared/Highlight";
import ClientsSlider from "../../components/shared/ClientsSlider";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 py-12 px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ABOUT HEADING */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-10 text-center">
          About Ambikanath Trader and Consultant LLP
        </h2>

        {/* ABOUT CONTENT */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="space-y-6 text-base md:text-lg leading-relaxed text-gray-700">
            <p>
              Founded in 2020, AMBIKANATH TRADER AND CONSULTANT LLP is an
              ISO-certified company offering reliable solar and LED lighting
              solutions. We provide a wide range of products, including DC Solar
              Lights, All-in-One and Hybrid Solar Lights, IoT-based systems, LED
              Street Lights, Flood Lights, High Bay Lights, and On-Grid,
              Off-Grid, and Hybrid Solar Power Plants.
            </p>

            <p>
              We also supply Solar High Mast, AC High Mast, Rounded, Octagonal,
              and Designer Poles, along with key services such as AMC for Solar
              Power Plants, Pole Installation, and Rainwater Harvesting. Known
              for our quality and commitment, we continue to deliver efficient
              and sustainable energy solutions.
            </p>
          </div>
        </div>

        {/* VISION & MISSION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          {/* VISION CARD */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="flex items-center space-x-3 mb-5">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8c-1.105 0-2 .672-2 1.5S10.895 11 12 11s2-.672 2-1.5S13.105 8 12 8zm0 0V4m0 4l-2 4m2-4l2 4m-7.5 3h11m-13 4h15"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900">VISION</h3>
            </div>

            <p className="text-gray-700 text-base leading-relaxed">
              Our vision is to Discover, Develop and Deliver customer-centric
              solutions that help our customers achieve their goals timely and
              at optimum cost.
            </p>
          </div>

          {/* MISSION CARD */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="flex items-center space-x-3 mb-5">
              <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-teal-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12l5 5L20 7"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900">MISSION</h3>
            </div>

            <p className="text-gray-700 text-base leading-relaxed">
              We are committed to provide ethical solutions to our customer
              needs at optimum cost.
            </p>
          </div>
        </div>

        {/* WHO WE ARE */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-lg font-bold text-gray-900 mb-4">WHO WE ARE</h3>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            ANTAC is a team of highly experienced professionals with more than
            20+ years of experience in the field of manufacturing world-class
            products and optimum implementation of projects which help us to
            deliver customers' significant needs in the areas of Engineering and
            producing world-class products.
          </p>
        </div>

        {/* CLIENTS */}
        <div className="mt-20">
          <ClientsSlider headingSize="text-3xl sm:text-4xl" />
        </div>
      </div>
    </div>
  );
};

export default About;
