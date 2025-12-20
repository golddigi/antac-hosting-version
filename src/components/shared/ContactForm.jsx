import React, { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import emailjs from "@emailjs/browser";

// ========================
// DEFAULT PRODUCT LIST
// ========================
const DEFAULT_PRODUCTS = [
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
];

// ========================
// INPUT COMPONENT
// ========================
const FormInput = ({
  label,
  id,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
}) => (
  <div>
    <label
      htmlFor={id}
      className="block text-xs font-medium text-gray-700 mb-1.5"
    >
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg 
                 focus:ring-2 focus:ring-teal-500 focus:border-transparent 
                 transition-all outline-none bg-gray-50 focus:bg-white"
      placeholder={placeholder}
      required={required}
    />
  </div>
);

// ========================
// DROPDOWN COMPONENT
// ========================
const ProductDropdown = ({ value, isOpen, onToggle, onSelect, products }) => (
  <div className="relative">
    <label className="block text-xs font-medium text-gray-700 mb-1.5">
      Product
    </label>

    <button
      type="button"
      onClick={onToggle}
      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg 
                 focus:ring-2 focus:ring-teal-500 focus:border-transparent 
                 transition-all bg-gray-50 text-left flex items-center justify-between
                 hover:bg-white"
    >
      <span className={value ? "text-gray-900" : "text-gray-400"}>
        {value || "Select product"}
      </span>

      <IoChevronDown
        className={`w-4 h-4 text-gray-400 transition-transform ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </button>

    {/* Dropdown Items */}
    {isOpen && (
      <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-auto z-[50]">
        {products.map((product, index) => (
          <button
            key={index}
            type="button"
            onClick={() => onSelect(product)}
            className="w-full px-3 py-2 text-sm text-left hover:bg-teal-50 transition-colors text-gray-700 first:rounded-t-lg last:rounded-b-lg"
          >
            {product}
          </button>
        ))}
      </div>
    )}
  </div>
);

// ========================
// MAIN CONTACT FORM
// ========================
const ContactForm = ({ products = DEFAULT_PRODUCTS }) => {
  // --- CONFIGURATION FROM .ENV ---
  const SERVICE_ID = import.meta.env.VITE_EMAIL_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    message: "",
  });

  const [isProductOpen, setIsProductOpen] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleProductSelect = (product) => {
    setFormData((prev) => ({ ...prev, product }));
    setIsProductOpen(false);
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.phone) {
      return "Please fill in all required fields";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return "Please enter a valid email address";
    }
    // Check if env variables are loaded
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error("EmailJS keys are missing from .env file");
      return "System configuration error. Please contact support.";
    }
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const error = validateForm();
    if (error) {
      setSubmitStatus(error);
      return;
    }
    setSubmitStatus("sending");

    // Prepare template parameters
    // These keys (from_name, etc.) must match variables in your EmailJS template
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      product: formData.product || "Not Selected",
      message: formData.message,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        setSubmitStatus("success");

        // Clear form
        setFormData({
          name: "",
          email: "",
          phone: "",
          product: "",
          message: "",
        });

        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus(""), 5000);
      },
      (err) => {
        console.error("FAILED...", err);
        setSubmitStatus("Failed to send message. Please try again later.");
      }
    );
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
      <h2 className="text-xl font-bold text-gray-900 mb-6">
        Send us a Message
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name + Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormInput
            label="Name"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your name"
            required
          />
          <FormInput
            label="Email"
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="you@example.com"
            required
          />
        </div>

        {/* Phone + Product */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormInput
            label="Phone"
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Your phone"
            required
          />

          <ProductDropdown
            value={formData.product}
            isOpen={isProductOpen}
            onToggle={() => setIsProductOpen(!isProductOpen)}
            onSelect={handleProductSelect}
            products={products}
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-xs font-medium text-gray-700 mb-1.5"
          >
            Message (Optional)
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-teal-500"
            placeholder="Tell us about your requirements..."
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={submitStatus === "sending"}
          className="w-full bg-white text-teal-600 font-semibold py-2.5 px-6 text-sm rounded-lg border-2 border-teal-600 hover:bg-teal-600 hover:text-white transition-all flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
        >
          {submitStatus === "sending" ? (
            <>
              <div className="w-5 h-5 border-2 border-teal-600 border-t-transparent rounded-full animate-spin"></div>
              <span>Sending...</span>
            </>
          ) : (
            "Submit Form"
          )}
        </button>

        {/* Status Messages */}
        {submitStatus === "success" && (
          <div className="bg-green-50 text-green-800 border border-green-200 px-3 py-2 rounded-lg text-xs">
            Thank you! Your message has been sent.
          </div>
        )}
        {submitStatus &&
          submitStatus !== "success" &&
          submitStatus !== "sending" && (
            <div className="bg-red-50 text-red-800 border border-red-200 px-3 py-2 rounded-lg text-xs">
              {submitStatus}
            </div>
          )}
      </form>
    </div>
  );
};

export default ContactForm;
