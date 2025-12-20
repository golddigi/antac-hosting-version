import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PhoneIcon from "../../../assets/icons/phone.svg";
import EmailIcon from "../../../assets/icons/email.svg";
import { contact } from "../../../data/contact";

const ContactSummary = () => {
  return (
    <div className="bg-[#e6fcf5] w-full">
      {/* Responsive Layout Fixes:
         1. max-w-7xl mx-auto: Centers content on large screens (Standard Clean Layout).
         2. px-4 sm:px-6 lg:px-8: Standard responsive gutters (side padding).
      */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center py-2 sm:py-1 min-h-[32px] gap-2">
          {/* Phone + Email Section */}
          {/* Added flex-wrap to prevent overlap on tiny screens */}
          <div className="flex sm:justify-start gap-4 sm:gap-6 items-center text-[12px]">
            <div className="flex gap-2 items-center">
              <img src={PhoneIcon} className="w-4 h-4" alt="phone" />
              <a
                className="text-sm hover:scale-105 whitespace-nowrap"
                href={`tel:${contact.phone}`}
              >
                {contact.phone}
              </a>
            </div>

            <div className="flex gap-2 items-center">
              <img src={EmailIcon} className="w-4 h-4" alt="email" />
              <a
                className="text-sm hover:scale-105 whitespace-nowrap"
                href={`mailto:${contact.email}`}
              >
                {contact.email}
              </a>
            </div>
          </div>

          {/* Social Icons */}
          {/* Kept hidden on mobile to reduce clutter, visible on md+ */}
          <div className="hidden md:flex gap-4 items-center">
            {contact.social.map((item, i) => (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  style={{ color: item.color }}
                  size="lg" // Adjusted size slightly for better proportions
                  className="hover:scale-105 transition-transform"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSummary;
