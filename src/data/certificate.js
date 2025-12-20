import Iso9001 from "../assets/certicates/9001.webp";
import Iso14001 from "../assets/certicates/14001.webp";
import Iso45001 from "../assets/certicates/45001.webp";
import CeMark from "../assets/certicates/CE.webp";
import Ip65 from "../assets/certicates/IP-65.webp";
import Rohs from "../assets/certicates/rohs.webp";
import MSME from "../assets/certicates/msme.webp";

// --- 2. Data Array using Imported Variables ---
export const certificatesData = [
  {
    id: 1,
    title: "ISO 9001: Quality Management", // Updated based on 9001 filename
    src: Iso9001,
    alt: "ISO 9001 Certification Document",
  },
  {
    id: 2,
    title: "ISO 14001: Green Business", // Updated based on 14001 filename
    src: Iso14001,
    alt: "ISO 14001 Environmental Award",
  },
  {
    id: 3,
    title: "ISO 45001: Safety Compliance", // Updated based on 45001 filename
    src: Iso45001,
    alt: "ISO 45001 Occupational Health & Safety",
  },
  {
    id: 4,
    title: "CE Marking Excellence", // Updated based on CE filename
    src: CeMark,
    alt: "CE Compliance Certificate",
  },
  {
    id: 5,
    title: "IP65 Rated Protection", // Updated based on IP 65 filename
    src: Ip65,
    alt: "IP65 Waterproof Rating Certification",
  },
  {
    id: 6,
    title: "RoHS Compliant Partner", // Updated based on rohs filename
    src: Rohs,
    alt: "RoHS Compliance Certificate",
  },
  {
    id: 7,
    title: "MSME Certificate", // MSME certificate
    src: MSME,
    alt: "MSME Certificate",
  },
];
