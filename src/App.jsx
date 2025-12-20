import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/header/Navbar";
import Home from "./pages/1.home/Home";
import About from "./pages/2.about/About";
import Product from "./pages/3.products/Product";
import ProductDetail from "./pages/3.products/components/ProductDetail";
import Gallery from "./pages/4.gallery/Gallery";
import Contact from "./pages/5.contact/Contact";
import Footer from "./components/footer/Footer";
import Certifications from "./components/shared/Certificate";
import BackToTop from "./components/shared/BackToTop";
import WhatsAppButton from "./components/shared/Whatsapp";
import NotFound from "./components/shared/NotFound";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Main content is the scrollable area */}
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/certificate" element={<Certifications />} />
          {/* other routes */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <BackToTop />
      <WhatsAppButton />

      <Footer />
    </div>
  );
}

export default App;
