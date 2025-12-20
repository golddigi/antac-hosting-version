import { Link } from "react-router-dom";
import { products } from "../../../data/products"; // adjust path if needed

// ---------------------------------------
// Reusable styles (UNCHANGED)
// ---------------------------------------
const styles = {
  link: "w-fit cursor-pointer relative leading-loose hover:text-[#da251a] after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-[#da251a] after:transition-all after:duration-200 hover:after:w-full ",
  heading:
    "text-[13px] font-bold py-2 mb-2 relative after:content-[''] after:absolute after:left-0 after:bottom-0.5 after:w-full after:h-[1px] after:bg-gray-300",
  column: "flex flex-col text-[12px] leading-relaxed",
};

// ---------------------------------------
// CATEGORY DISPLAY NAMES
// (auto maps your product categories)
const categoryTitles = {
  "solar-light": "DC Solar Lights",
  "led-light": "AC LED Lights",
  "solar-power-plant": "Solar Power Plant",
  poles: "Poles",
  structures: "Structures",
  services: "Services",
};

// ---------------------------------------
const productCategories = Object.entries(
  products.reduce((acc, product) => {
    if (!acc[product.category]) acc[product.category] = [];

    acc[product.category].push({
      label: product.name,
      path: `/product/${product.id}`, // dynamic routing
    });

    return acc;
  }, {})
).map(([category, links]) => ({
  title: categoryTitles[category] || category,
  links,
}));

// ---------------------------------------
// Category Column Component (UNCHANGED)
// ---------------------------------------
const CategoryColumn = ({ title, links, onLinkClick }) => (
  <div className={styles.column}>
    <h2 className={styles.heading}>{title}</h2>

    {links.map((link) => (
      <Link
        key={link.label}
        className={styles.link}
        to={link.path}
        onClick={onLinkClick}
      >
        {link.label}
      </Link>
    ))}
  </div>
);

// ---------------------------------------
// MAIN COMPONENT — OpenProducts
// (Structure unchanged)
// ---------------------------------------
const OpenProducts = ({ isOpen, setIsNavOpen }) => {
  return (
    <div
      className={`hidden xl:block absolute left-0 right-0 top-full bg-[#f8f9fa] rounded-b-[40px] overflow-hidden transition-all duration-300 ease-in-out shadow-lg ${
        isOpen ? "max-h-[500px] visible" : "max-h-0 invisible"
      }`}
      style={{ zIndex: 50 }}
    >
      <div className="max-w-7xl mx-auto  lg:p-8 grid grid-cols-5 gap-[3rem]">
        {productCategories.map((category) => (
          <CategoryColumn
            key={category.title}
            title={category.title}
            links={category.links}
            onLinkClick={() => setIsNavOpen(false)}
          />
        ))}
      </div>
    </div>
  );
};

export default OpenProducts;
