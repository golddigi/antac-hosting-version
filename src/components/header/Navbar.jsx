import { useState } from "react";
import ContactSummary from "./componets/ContactSummary";
import MainNavbar from "./componets/MainNavbar";
import MobileMenu from "./componets/MobileMenu";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Scrolls normally */}
      <ContactSummary />

      {/* Sticky Navbar */}
      <div className="sticky top-0 z-[200] bg-white/70 backdrop-blur-md backdrop-saturate-150 supports-[backdrop-filter]:backdrop-blur-md shadow-sm">
        <MainNavbar
          isNavOpen={isNavOpen}
          setIsNavOpen={setIsNavOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      </div>

      {/* Mobile Menu - Outside sticky container */}
      {isMenuOpen && <MobileMenu closeMenu={() => setIsMenuOpen(false)} />}
    </>
  );
}

export default Navbar;
