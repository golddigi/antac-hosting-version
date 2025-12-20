import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { contact } from "../../data/contact";

import LocationIcon from "../../assets/icons/location.svg";
import EmailIcon from "../../assets/icons/email.svg";
import PhoneIcon from "../../assets/icons/phone.svg";
import logo from "../../assets/icons/antac.jpg";

const linkStyle =
  "w-fit cursor-pointer relative hover:text-[#da251a] after:content-[''] after:absolute after:left-0 after:bottom-[-1px] after:h-[1px] after:w-0 after:bg-[#da251a] after:transition-all after:duration-200 hover:after:w-full";

function Footer() {
  return (
    <div className="bg-[#f1f3f5] w-full mt-12">
      {/* MAIN FOOTER CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12 gap-8 md:gap-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {/* COLUMN 1 - LOGO & ADDRESSES */}
        <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
          <div className="w-[140px] sm:w-[160px] mb-2">
            <img
              src={logo}
              alt="antac logo"
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-[15px] mb-2 text-gray-800">
              GST No:{" "}
              <span className="font-normal text-[14px] text-gray-800 leading-relaxed">
                08ABTFA4728P1ZL
              </span>
            </h4>
            <div>
              <h4 className="font-bold text-[15px] mb-2 text-gray-800">
                MFG / Factory Address
              </h4>
              <p className="text-[14px] text-gray-600 leading-relaxed">
                {contact.factoryAddress}
              </p>
            </div>

            <div>
              <h4 className="font-bold text-[15px] mb-2 text-gray-800">
                Office Address
              </h4>
              <p className="text-[14px] text-gray-600 leading-relaxed">
                {contact.officeAddress}
              </p>
            </div>
          </div>
        </div>

        {/* COLUMN 2 - QUICK LINKS */}
        {/* Added lg:justify-self-center here */}
        <div className="flex flex-col gap-3 lg:justify-self-center">
          <h4 className="font-bold text-[15px] text-gray-800 mb-2">
            Quick Links
          </h4>
          <ul className="space-y-2.5">
            <li>
              <Link to="/" className={linkStyle + " text-[14px] text-gray-700"}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={linkStyle + " text-[14px] text-gray-700"}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/certificate"
                className={linkStyle + " text-[14px] text-gray-700"}
              >
                Certificates
              </Link>
            </li>
            <li>
              <Link
                to="/product"
                className={linkStyle + " text-[14px] text-gray-700"}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className={linkStyle + " text-[14px] text-gray-700"}
              >
                Gallery
              </Link>
            </li>
          </ul>
        </div>

        {/* COLUMN 3 - SOCIAL LINKS */}
        <div className="flex flex-col gap-3">
          <h4 className="font-bold text-[15px] text-gray-800 mb-2">
            Follow Us
          </h4>
          <div className="flex gap-4 items-center flex-wrap">
            {contact.social.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="transform hover:scale-110 transition-transform duration-200"
              >
                <FontAwesomeIcon
                  icon={s.icon}
                  style={{ color: s.color }}
                  size="2x"
                />
              </a>
            ))}
          </div>
        </div>

        {/* COLUMN 4 - CONTACT INFO */}
        <div className="flex flex-col gap-3">
          <h4 className="font-bold text-[15px] text-gray-800 mb-2">
            Contact Us
          </h4>

          <div className="space-y-3.5">
            <a
              href={`tel:${contact.phone}`}
              className="flex gap-3 items-center group"
            >
              <img
                src={PhoneIcon}
                className="w-5 h-5 flex-shrink-0"
                alt="phone"
              />
              <span className="text-[14px] text-gray-700 group-hover:text-[#da251a] transition-colors">
                {contact.phone}
              </span>
            </a>

            <a
              href={`mailto:${contact.email}`}
              className="flex gap-3 items-center group"
            >
              <img
                src={EmailIcon}
                className="w-5 h-5 flex-shrink-0"
                alt="email"
              />
              <span className="text-[14px] text-gray-700 group-hover:text-[#da251a] transition-colors break-all">
                {contact.email}
              </span>
            </a>

            <div className="flex gap-3 items-start">
              <img
                src={LocationIcon}
                className="w-5 h-5 flex-shrink-0 mt-0.5"
                alt="location"
              />
              <p className="text-[14px] text-gray-600 leading-relaxed">
                {contact.officeAddress}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-300">
        <div className="text-center py-4 text-[13px] text-gray-600">
          © {new Date().getFullYear()} ANTAC. All rights reserved. Designed &
          Maintained by{" "}
          <a
            href="https://www.golddigi.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 font-medium underline underline-offset-2"
          >
            Golddigi
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
