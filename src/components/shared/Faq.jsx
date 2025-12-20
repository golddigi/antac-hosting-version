import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi2";
import { Link } from "react-router-dom";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question:
        "What products does Ambikanath Trader and Consultant LLP offer?",
      answer:
        "We provide a wide range of solar and LED lighting solutions including DC Solar Lights, All-in-One Solar Lights, Hybrid Solar Lights, IoT-based systems, LED Street Lights, Flood Lights, High Bay Lights, and On-Grid, Off-Grid, and Hybrid Solar Power Plants.",
    },
    {
      question: "Is Ambikanath Trader and Consultant LLP certified?",
      answer:
        "Yes, we are an ISO-certified company committed to delivering reliable, high-quality, and energy-efficient solar and LED solutions.",
    },
    {
      question: "Do you offer installation services?",
      answer:
        "Absolutely. We provide comprehensive installation services including Pole Installation, Solar High Mast installation, AC High Mast setup, and full support for solar power systems.",
    },
    {
      question: "What types of poles do you supply?",
      answer:
        "We supply a variety of poles including Solar High Mast, AC High Mast, Rounded Poles, Octagonal Poles, and Designer Poles—each engineered for durability and performance.",
    },
    {
      question: "Do you provide maintenance services?",
      answer:
        "Yes, we offer Annual Maintenance Contracts (AMC) for Solar Power Plants along with other service support to ensure long-term system efficiency and reliability.",
    },
    {
      question: "Why choose Ambikanath for solar and lighting solutions?",
      answer:
        "Founded in 2021, we are known for our quality, commitment, and efficient solutions. Our products and services are designed to deliver sustainable performance, energy savings, and long-term reliability.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full px-4 md:px-6 py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-sm md:text-lg max-w-2xl mx-auto">
            Have questions? We've got answers. Find out more about our
            eco-friendly products and services.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3 md:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl md:rounded-2xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-4 md:p-6 text-left"
              >
                <h3 className="text-base md:text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <HiChevronDown
                  className={`w-5 h-5 md:w-6 md:h-6 text-emerald-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-4 md:px-6 pb-4 md:pb-6">
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-8 md:mt-12 text-center">
          <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">
            Still have questions?
          </p>
          <Link
            to={"/contact"}
            className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-base shadow-lg hover:bg-emerald-700 hover:shadow-xl transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
