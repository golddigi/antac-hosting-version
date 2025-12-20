import { FaWhatsapp } from "react-icons/fa";
import { contact } from "../../data/contact";

export default function WhatsAppButton() {
  const whatsapp = contact.social.find((item) => item.name === "Whatsapp");

  return (
    <a
      href={whatsapp.href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed 
        right-4 bottom-4
        sm:right-6 sm:bottom-6
        flex items-center justify-center
        rounded-full shadow-xl z-40
        transition-transform hover:scale-110
        w-10 h-10        /* 40px Mobile */
        sm:w-12 sm:h-12  /* 48px Tablet */
        md:w-14 md:h-14  /* 56px Desktop */
      "
      style={{ backgroundColor: whatsapp.color }}
    >
      <FaWhatsapp
        className="
          text-white
          text-[20px]
          sm:text-[26px]
          md:text-[32px]
        "
      />
    </a>
  );
}
