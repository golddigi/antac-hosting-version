import React, { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../../../data/products";

// Helper to prettify category keys
const formatCategoryName = (category) =>
  category.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

// Group products by category (stable order by category title keys)
const groupedProducts = products.reduce((acc, product) => {
  if (!acc[product.category]) acc[product.category] = [];
  acc[product.category].push(product);
  return acc;
}, {});

const MobileMenu = ({ closeMenu }) => {
  // controls main "Products" collapse
  const [openProducts, setOpenProducts] = useState(false);

  // which category (e.g. "solar-light") is open; null = none
  const [openCategory, setOpenCategory] = useState(null);

  const toggleProducts = () => {
    setOpenProducts((v) => !v);
    // if closing products, also collapse open category
    if (openProducts) setOpenCategory(null);
  };

  const toggleCategory = (category) => {
    setOpenCategory((prev) => (prev === category ? null : category));
  };

  const handleLinkClick = () => {
    // Close mobile menu after navigation
    closeMenu();
  };

  return (
    <>
      {/* Overlay */}
      <div
        onClick={closeMenu}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[250] animate-fadeIn"
      />

      {/* Sidebar */}
      <nav className="fixed top-0 left-0 h-full w-[80vw] bg-white shadow-xl z-[300] overflow-y-auto animate-slideInLeft">
        {/* Header */}
        <div className="bg-slate-800 text-white p-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Menu</h2>
          <button
            onClick={closeMenu}
            className="text-2xl p-2 hover:bg-slate-700 rounded transition"
          >
            ✕
          </button>
        </div>

        {/* Home */}
        <div className="border-b border-gray-200">
          <Link
            to="/"
            onClick={handleLinkClick}
            className="block p-4 hover:bg-gray-50 transition font-medium text-gray-800"
          >
            Home
          </Link>
        </div>

        {/* About */}
        <div className="border-b border-gray-200">
          <Link
            to="/about"
            onClick={handleLinkClick}
            className="block p-4 hover:bg-gray-50 transition font-medium text-gray-800"
          >
            About Us
          </Link>
        </div>

        {/* Products (main) */}
        <div className="border-b border-gray-200">
          <div className="w-full flex justify-between items-center p-4">
            {/* LEFT: Clicking the text goes to /product */}
            <Link
              to="/product"
              onClick={handleLinkClick}
              className="font-medium text-gray-800 hover:text-[#da251a] transition"
            >
              Products
            </Link>

            {/* RIGHT: Arrow for dropdown toggle */}
            <button
              onClick={toggleProducts}
              aria-expanded={openProducts}
              className="p-2"
            >
              <span
                className={`transform transition-transform duration-300 ${
                  openProducts ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>
          </div>

          {/* Main dropdown */}
          <div
            className={`bg-gray-50 overflow-hidden transition-all duration-300 ${
              openProducts ? "max-h-[1500px]" : "max-h-0"
            }`}
          >
            {Object.entries(groupedProducts).map(([category, items]) => (
              <div key={category} className="border-b border-gray-200">
                {/* Category row */}
                <div className="flex justify-between items-center p-3 pl-8">
                  {/* Clicking category name also opens product listing page */}
                  <Link
                    to={`/product?category=${category}`}
                    onClick={handleLinkClick}
                    className="text-gray-700 hover:text-[#da251a] transition"
                  >
                    {formatCategoryName(category)}
                  </Link>

                  {/* Category arrow */}
                  <button
                    onClick={() => toggleCategory(category)}
                    aria-expanded={openCategory === category}
                    className="p-2"
                  >
                    <span
                      className={`transform transition-transform duration-300 ${
                        openCategory === category ? "rotate-180" : ""
                      }`}
                    >
                      ▼
                    </span>
                  </button>
                </div>

                {/* Category items */}
                <div
                  className={`bg-gray-100 overflow-hidden transition-all duration-300 ${
                    openCategory === category ? "max-h-96" : "max-h-0"
                  }`}
                >
                  {items.map((product) => (
                    <Link
                      key={product.id}
                      to={`/product/${product.id}`}
                      onClick={handleLinkClick}
                      className="block py-2 px-12 text-gray-600 hover:bg-gray-200 hover:text-slate-800 transition"
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div className="border-b border-gray-200">
          <Link
            to="/gallery"
            onClick={handleLinkClick}
            className="block p-4 hover:bg-gray-50 transition font-medium text-gray-800"
          >
            Gallery
          </Link>
        </div>

        {/* Contact */}
        <div className="border-b border-gray-200">
          <Link
            to="/contact"
            onClick={handleLinkClick}
            className="block p-4 hover:bg-gray-50 transition font-medium text-gray-800"
          >
            Contact
          </Link>
        </div>

        {/* CTA */}
        <div className="p-4">
          <a
            href="https://wa.me/919910194710"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center p-3 rounded-3xl border border-[#da251a] font-bold text-[#da251a] hover:bg-[#da251a] hover:text-white transition"
          >
            Request Free Quote
          </a>
        </div>
      </nav>

      {/* Animations */}
      <style>{`
        @keyframes slideInLeft {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-slideInLeft { animation: slideInLeft 0.3s ease-out; }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
      `}</style>
    </>
  );
};

export default MobileMenu;
