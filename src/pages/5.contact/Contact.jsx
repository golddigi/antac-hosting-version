// Contact.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { contact } from "../../data/contact";
import ContactForm from "../../components/shared/ContactForm";

import { IoCall, IoMail, IoLocation } from "react-icons/io5";

// ---------- Reusable Components ----------
const ContactInfoItem = ({ icon: Icon, label, value, href }) => (
  <div className="flex items-center space-x-3 mb-5">
    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
      <Icon className="w-5 h-5 text-blue-600" />
    </div>

    <div>
      <h4 className="text-xs font-semibold text-gray-900 mb-0.5">{label}</h4>

      {href ? (
        <a href={href} className="text-gray-600 hover:text-blue-600 text-sm">
          {value}
        </a>
      ) : (
        <p className="text-gray-600 text-sm">{value}</p>
      )}
    </div>
  </div>
);

const SocialIcon = ({ item }) => (
  <a
    href={item.href}
    target="_blank"
    rel="noopener noreferrer"
    className="hover:scale-110 transition"
    aria-label={item.name}
  >
    <FontAwesomeIcon
      icon={item.icon}
      style={{ color: item.color, fontSize: "28px" }}
    />
  </a>
);

const LocationItem = ({ title, address }) => (
  <div className="mb-5">
    <div className="flex items-center space-x-3">
      <div className="flex-shrink-0 w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
        <IoLocation className="w-5 h-5 text-teal-600" />
      </div>
      <div>
        <h4 className="text-xs font-semibold text-gray-900 mb-0.5">{title}</h4>
        <p className="text-gray-600 text-sm">{address}</p>
      </div>
    </div>
  </div>
);

// ---------- Google Maps ----------
const MAP_LOCATIONS = [
  {
    title: "Office Location",
    address: contact.officeAddress,
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.8609508397717!2d76.85866637447673!3d28.211536903075796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d370057dcf35b%3A0xc41cc4463688b63a!2sAMBIKANATH%20TRADER%20AND%20CONSULTANT%20LLP!5e0!3m2!1sen!2sin!4v1765180696172!5m2!1sen!2sin",
  },
  {
    title: "Factory Location",
    address: contact.factoryAddress,
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3518.363982560546!2d76.88510577447357!3d28.135405706483763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d37bb120fcc19%3A0xceec5407babf39b0!2sSUDHIRWORKS!5e0!3m2!1sen!2sin!4v1765180452319!5m2!1sen!2sin",
  },
];

const MapCard = ({ title, address, embedUrl }) => (
  <div className="bg-white p-6 border border-gray-100">
    <h3 className="text-lg font-bold text-gray-900">{title}</h3>
    <p className="text-xs text-gray-600 mb-4">{address}</p>

    <div className="w-full h-64 bg-gray-200 rounded-xl overflow-hidden">
      <iframe
        src={embedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen=""
        title={title}
      ></iframe>
    </div>
  </div>
);

// =================== MAIN PAGE ==================
const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Get In Touch
          </h1>
          <p className="text-base text-gray-600">
            We'd love to hear from you. Send us a message!
          </p>
        </header>

        {/* Contact Info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* LEFT SECTION */}
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Contact Information
            </h2>

            <ContactInfoItem
              icon={IoCall}
              label="Phone"
              value={contact.phone}
              href={`tel:${contact.phone}`}
            />

            <ContactInfoItem
              icon={IoMail}
              label="Email"
              value={contact.email}
              href={`mailto:${contact.email}`}
            />

            {/* Locations */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Our Locations
              </h3>

              <LocationItem
                title="Office Address"
                address={contact.officeAddress}
              />

              <LocationItem
                title="Factory Address"
                address={contact.factoryAddress}
              />
            </div>

            {/* Social Icons */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="text-xs font-semibold text-gray-900 mb-3">
                Follow Us
              </h3>

              <div className="flex space-x-3">
                {contact.social.map((item) => (
                  <SocialIcon key={item.name} item={item} />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SECTION — Contact Form */}
          <ContactForm
            products={[
              "All In One",
              "Semi Solar Light",
              "Hybrid Solar Light",
              "IOT based (RMS)",
              "LED Street Light",
              "Flood Light",
              "High Bay",
              "On Grid Solar",
              "OFF Grid Solar",
              "Hybrid Solar",
              "Solar High Mast",
              "AC High Mast",
              "Rounded Poles",
              "Octagonal Poles",
              "Designer Poles",
              "AMC for Solar Power Plant",
              "Pole Installation",
              "Rain Water Harvesting",
            ]}
          />
        </div>

        {/* MAPS */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 border border-gray-300 ">
          {MAP_LOCATIONS.map((loc) => (
            <MapCard key={loc.title} {...loc} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
