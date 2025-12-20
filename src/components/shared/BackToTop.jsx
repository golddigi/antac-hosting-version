import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={goToTop}
          className="
            fixed 
            right-4 
            bottom-[72px]       /* perfect gap above WhatsApp on mobile */
            sm:right-6 
            sm:bottom-[92px]    /* perfect gap above WhatsApp on tablet */
            flex items-center justify-center
            rounded-full
            bg-[#f03e3e]
            shadow-xl
            z-40
            transition-transform hover:scale-110

            w-10 h-10           /* 40px - mobile */
            sm:w-12 sm:h-12     /* 48px - tablet */
            md:w-14 md:h-14     /* 56px - desktop */
          "
        >
          <FaArrowUp
            className="
              text-white
              text-[16px]       /* mobile */
              sm:text-[20px]    /* tablet */
              md:text-[24px]    /* desktop */
            "
          />
        </button>
      )}
    </>
  );
}
