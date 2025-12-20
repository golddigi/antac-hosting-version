import { useParams } from "react-router-dom";
import { useState } from "react";
import { products } from "../../../data/products";
import { IoCheckmarkCircle } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";

import Highlights from "../../../components/shared/Highlight";
import ClientsSlider from "../../../components/shared/ClientsSlider";
import Modal from "../../../components/shared/Modal";
import ContactForm from "../../../components/shared/ContactForm"; // adjust path if needed

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!product) {
    return (
      <div className="text-red-600 p-10 text-xl">
        ❌ Product not found for id: <b>{id}</b>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        {/* Image Section */}

        <div className="bg-white border-2 border-gray-200 p-6 shadow-sm">
          {/* Main Image */}
          <img
            src={product.image}
            className="w-full h-auto object-contain mb-4"
            alt={product.name}
            style={{ maxHeight: "520px" }}
          />

          {/* Secondary Image (optional) */}
          {product.image2 && (
            <img
              src={product.image2}
              className="w-full h-auto object-contain border-t pt-4"
              alt={`${product.name} - alternate view`}
              style={{ maxHeight: "320px" }}
            />
          )}
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-center">
          <div className="border-l-4 border-green-600 pl-6 mb-6">
            <span className="text-xs font-semibold text-green-600 uppercase tracking-wide mb-2 block">
              {product.category.replace("-", " ")}
            </span>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              {product.name}
            </h1>
          </div>

          {/* About */}
          <div className="bg-gray-50 border border-gray-200 p-6 mb-6">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
              About This Product
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              {product.description || product.shortDescription}
            </p>
          </div>

          {/* Key Features */}
          {product.features?.length > 0 && (
            <div className="bg-white border border-gray-200 p-6 mb-6">
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                Key Features
              </h2>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <IoCheckmarkCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Specifications */}
          {product.specifications?.length > 0 && (
            <div className="bg-gray-50 border border-gray-200 mb-6">
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide px-6 pt-6 pb-3">
                Specifications
              </h2>
              <div className="divide-y divide-gray-200">
                {product.specifications.map((spec, index) => (
                  <div
                    key={index}
                    className="px-6 py-3 flex justify-between items-center"
                  >
                    <span className="text-sm text-gray-600">{spec.label}</span>
                    <span className="text-sm font-medium text-gray-900">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-3 bg-green-600 text-white rounded-md font-semibold text-sm uppercase tracking-wide hover:bg-green-700 transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Send Enquiry
            </button>

            <a
              href={`https://wa.me/919910194710?text=Hi, I want to know more about ${encodeURIComponent(
                product.name
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white border-2 border-green-600 text-green-700 rounded-md font-semibold text-sm uppercase tracking-wide hover:bg-green-50 hover:border-green-700 transition-colors duration-200 flex items-center justify-center gap-2 shadow-sm"
            >
              <FaWhatsapp className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* highlight */}
      <Highlights />

      {/* clients */}
      <ClientsSlider headingSize="text-3xl sm:text-4xl" />

      {/* MODAL WITH CONTACT FORM */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ContactForm products={products.map((p) => p.name)} />
      </Modal>
    </div>
  );
}
