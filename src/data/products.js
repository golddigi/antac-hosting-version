// --------------- SOLAR LIGHTS -----------------
import allInOne from "../assets/products/solar-light/all-in-one.webp";
import hybridSolarLight from "../assets/products/solar-light/hybrid-solar-light-option.webp";
import iotRmsLight from "../assets/products/solar-light/iot-rms-light-option.webp";
import semiIntegrated from "../assets/products/solar-light/new-semi-intigrated-light.webp";

// --------------- LED LIGHTS -----------------
import floodLight from "../assets/products/led-light/flood-light.webp";
import highBay from "../assets/products/led-light/high-bay.webp";
import ledLight from "../assets/products/led-light/led-light.webp";
import BayLight from "../assets/products/led-light/bay-light.webp";

// --------------- POLES -----------------
import acHighMast from "../assets/products/poles/ac-high-mast.webp";
import circularPoles from "../assets/products/poles/circular-poles.webp";
import designerPole from "../assets/products/poles/designer-poles.webp";
import octagonalPoles from "../assets/products/poles/octagonal-poles.webp";
import solarHighMast from "../assets/products/poles/solar-high-mast.webp";

// --------------- SERVICES -----------------
import poleInstallation from "../assets/products/services/pole-installation.webp";
import rainWaterHarvesting from "../assets/products/services/rain-water-harvesting.webp";
import solarInstalltion from "../assets/products/services/solar-amc.webp";
import solarAmc from "../assets/products/services/solar-cleaning-worker.webp";
import fabricationService from "../assets/products/services/fabrication.webp";

// --------------- SOLAR POWER PLANTS -----------------
import hybridPlant from "../assets/products/solar-power-plant/hybrid-solar.webp";
import offGridPlant from "../assets/products/solar-power-plant/off-grid-solar.webp";
import onGridPlant from "../assets/products/solar-power-plant/on-grid-solar.webp";

// --------------- STRUCTURES -----------------
import pebStructure from "../assets/products/structures/peb-structure.webp";
import solarMountingStructure from "../assets/products/structures/solar-mounting-structure.webp";

export const products = [
  // ---------------------- SOLAR LIGHTS ----------------------
  {
    id: "all-in-one",
    name: "All In One Solar Light",
    image: allInOne,
    category: "solar-light",
    shortDescription:
      "Compact all-in-one solar light with integrated panel and LED.",
    description:
      "A complete solar lighting unit with integrated panel, battery and LED. Easy installation and zero maintenance, perfect for residential and commercial outdoor lighting needs.",
    features: [
      "Integrated design with panel, battery and LED",
      "Automatic dusk-to-dawn operation",
      "Zero wiring required - easy installation",
      "Weather-proof IP65 rating",
      "Up to 12 hours continuous backup",
    ],
    specifications: [
      { label: "Power Output", value: "20W - 60W" },
      { label: "Lumens", value: "2000 - 6000 lm" },
      { label: "Battery Type", value: "LiFePO4 12V" },
      { label: "Solar Panel", value: "Monocrystalline" },
      { label: "Warranty", value: "3 Years" },
    ],
  },
  {
    id: "hybrid-solar-light",
    name: "Hybrid Solar Light",
    image: hybridSolarLight,
    category: "solar-light",
    shortDescription: "Hybrid dual power solar light solution.",
    description:
      "Hybrid solar street light that can operate with both solar and AC input, ensuring continuous lighting even during extended cloudy days or low sunlight conditions.",
    features: [
      "Dual power source - solar and AC backup",
      "Continuous lighting with no interruptions",
      "Works efficiently in low sunlight conditions",
      "Automatic switching between power sources",
      "Energy-saving intelligent control system",
    ],
    specifications: [
      { label: "Power Output", value: "30W - 100W" },
      { label: "Lumens", value: "3000 - 10000 lm" },
      { label: "Battery Type", value: "Lithium-ion" },
      { label: "AC Input", value: "220V AC" },
      { label: "Warranty", value: "3 Years" },
    ],
  },

  {
    id: "semi-integrated",
    name: "Semi Integrated Solar Light",
    image: semiIntegrated,
    category: "solar-light",
    shortDescription: "High-efficiency semi-integrated solar street light.",
    description:
      "High-performance semi-integrated design with separate solar panel and combined light fixture with battery, offering flexibility in installation and optimal energy efficiency.",
    features: [
      "Separate panel for optimal sun exposure",
      "High lumen output for better visibility",
      "Weather-proof IP66 rated housing",
      "Extended battery backup time",
      "Adjustable mounting options",
    ],
    specifications: [
      { label: "Power Output", value: "30W - 120W" },
      { label: "Lumens", value: "3500 - 12000 lm" },
      { label: "Battery Type", value: "LiFePO4" },
      { label: "Panel Wattage", value: "60W - 200W" },
      { label: "Warranty", value: "5 Years" },
    ],
  },
  {
    id: "iot-rms-light",
    name: "IoT RMS Solar Light",
    image: iotRmsLight,
    category: "solar-light",
    shortDescription: "IoT-enabled smart monitoring Solar light.",
    description:
      "Advanced IoT-enabled solar street light with Remote Monitoring System (RMS) for real-time performance tracking and power consumption analysis.",
    features: [
      "Real-time RMS based monitoring",
      "Smart alerts for maintenance needs",
      "Remote management via mobile app",
      "Energy consumption analytics",
      "Fault detection and diagnostics",
    ],
    specifications: [
      { label: "Power Output", value: "40W - 80W" },
      { label: "Lumens", value: "4000 - 8000 lm" },
      { label: "Connectivity", value: "4G/WiFi IoT" },
      { label: "Monitoring", value: "Cloud-based RMS" },
      { label: "Warranty", value: "4 Years" },
    ],
  },

  // ---------------------- LED LIGHTS ----------------------
  {
    id: "flood-light",
    name: "LED Flood Light",
    image: floodLight,
    category: "led-light",
    shortDescription: "High-power LED flood light for wide area coverage.",
    description:
      "Powerful LED flood light ideal for stadiums, industries, parking lots and large outdoor areas requiring bright, uniform illumination.",
    features: [
      "High brightness with wide beam angle",
      "Weather resistant IP65 construction",
      "Long lifespan up to 50,000 hours",
      "Energy-efficient with low power consumption",
      "Instant on/off with no warm-up time",
    ],
    specifications: [
      { label: "Power Output", value: "50W - 400W" },
      { label: "Lumens", value: "5000 - 40000 lm" },
      { label: "Beam Angle", value: "120° - 180°" },
      { label: "Color Temperature", value: "4000K - 6500K" },
      { label: "Warranty", value: "2 Years" },
    ],
  },
  {
    id: "high-bay-light",
    name: "LED High Bay Light",
    image: highBay,
    image2: BayLight,
    category: "led-light",
    shortDescription: "Bright LED high bay for warehouses and industries.",
    description:
      "Industrial-grade LED high bay light perfect for high ceiling applications in warehouses, factories, and large commercial spaces.",
    features: [
      "High lumen efficiency for tall ceilings",
      "Robust aluminum body construction",
      "Low power consumption saves energy costs",
      "Excellent heat dissipation system",
      "Flicker-free operation",
    ],
    specifications: [
      { label: "Power Output", value: "100W - 240W" },
      { label: "Lumens", value: "13000 - 30000 lm" },
      { label: "Mounting Height", value: "6m - 12m" },
      { label: "CRI", value: ">80" },
      { label: "Warranty", value: "3 Years" },
    ],
  },
  {
    id: "standard-led-light",
    name: "Standard LED Light",
    image: ledLight,
    category: "led-light",
    shortDescription: "Energy-efficient LED lighting for all spaces.",
    description:
      "Versatile LED lighting solution ideal for homes, offices and commercial spaces, offering superior energy efficiency and long-lasting performance.",
    features: [
      "Energy-saving up to 80% vs traditional bulbs",
      "Long lifespan of 50,000+ hours",
      "Cool daylight output for better visibility",
      "Low heat emission",
      "Mercury-free eco-friendly design",
    ],
    specifications: [
      { label: "Power Output", value: "9W - 240W" },
      { label: "Lumens", value: "900 - 24000 lm" },
      { label: "Base Type", value: "B22/E27" },
      { label: "Color Temperature", value: "3000K - 6500K" },
      { label: "Warranty", value: "1 Year" },
    ],
  },

  // ---------------------- POLES ----------------------
  {
    id: "ac-high-mast",
    name: "AC High Mast Pole",
    image: acHighMast,
    category: "poles",
    shortDescription: "High mast pole for large-area illumination.",
    description:
      "Strong and durable AC-powered high mast lighting system designed for highways, stadiums, ports and large open areas requiring extensive illumination.",
    features: [
      "Heavy-duty galvanized steel construction",
      "Heights ranging from 9m to 40m",
      "Multiple light fixture mounting options",
      "Corrosion-resistant coating",
      "Wind-resistant design up to 150 km/h",
    ],
    specifications: [
      { label: "Height Range", value: "9m - 40m" },
      { label: "Material", value: "Galvanized Steel" },
      { label: "Base Plate", value: "12mm - 25mm" },
      { label: "Finish", value: "Hot-dip Galvanized" },
      { label: "Warranty", value: "10 Years" },
    ],
  },
  {
    id: "circular-poles",
    name: "Circular Poles",
    image: circularPoles,
    category: "poles",
    shortDescription: "Durable circular poles for public lighting.",
    description:
      "Premium quality circular poles ideal for urban streets and public outdoor spaces, offering excellent strength and aesthetic appeal.",
    features: [
      "Seamless circular design",
      "Hot-dip galvanized for corrosion protection",
      "Available in multiple heights",
      "Powder-coated finish options",
      "Easy installation and maintenance",
    ],
    specifications: [
      { label: "Height Range", value: "4m - 12m" },
      { label: "Pipe Diameter", value: "76mm - 168mm" },
      { label: "Material", value: "MS Steel" },
      { label: "Thickness", value: "3mm - 5mm" },
      { label: "Warranty", value: "5 Years" },
    ],
  },
  {
    id: "designer-pole",
    name: "Designer Pole",
    image: designerPole,
    category: "poles",
    shortDescription: "Modern and aesthetic designer lighting poles.",
    description:
      "Elegant designer lighting poles perfect for beautification of urban architecture, parks, residential complexes and heritage sites.",
    features: [
      "Contemporary aesthetic designs",
      "Decorative finials and patterns",
      "Customizable colors and finishes",
      "Architectural grade construction",
      "Combines functionality with beauty",
    ],
    specifications: [
      { label: "Height Range", value: "3m - 6m" },
      { label: "Design Options", value: "Custom/Standard" },
      { label: "Material", value: "Cast Iron/Aluminum" },
      { label: "Finish", value: "Powder Coated" },
      { label: "Warranty", value: "3 Years" },
    ],
  },
  {
    id: "octagonal-poles",
    name: "Octagonal Poles",
    image: octagonalPoles,
    category: "poles",
    shortDescription: "High-strength octagonal poles.",
    description:
      "Robust octagonal poles with galvanized steel design for long-term durability, ideal for highways, streets and outdoor lighting applications.",
    features: [
      "Eight-sided structural design for strength",
      "Hot-dip galvanized protection",
      "Tapered design for wind resistance",
      "Multi-bolt flanged base",
      "Suitable for heavy luminaires",
    ],
    specifications: [
      { label: "Height Range", value: "6m - 15m" },
      { label: "Base Size", value: "200mm - 350mm" },
      { label: "Material", value: "Galvanized Steel" },
      { label: "Wall Thickness", value: "3mm - 6mm" },
      { label: "Warranty", value: "7 Years" },
    ],
  },
  {
    id: "solar-high-mast",
    name: "Solar High Mast",
    image: solarHighMast,
    category: "poles",
    shortDescription: "Solar-powered high mast lighting system.",
    description:
      "Eco-friendly solar-powered high mast lighting system with zero electricity consumption, perfect for remote areas and sustainable infrastructure projects.",
    features: [
      "100% solar powered - zero electricity bills",
      "High-capacity battery bank for backup",
      "Multiple high-power LED fixtures",
      "Automatic on/off with smart controller",
      "Minimal maintenance required",
    ],
    specifications: [
      { label: "Height Range", value: "12m - 30m" },
      { label: "Solar Capacity", value: "1kW - 5kW" },
      { label: "Battery Backup", value: "3-5 Days" },
      { label: "LED Power", value: "200W - 1000W" },
      { label: "Warranty", value: "5 Years" },
    ],
  },

  // ---------------------- SOLAR POWER PLANTS ----------------------
  {
    id: "on-grid-plant",
    name: "On Grid Solar Power Plant",
    image: onGridPlant,
    category: "solar-power-plant",
    shortDescription: "Grid-tied solar plant for cost-efficient energy.",
    description:
      "Grid-connected solar power plant that feeds excess electricity back to the grid, helping you save more with net metering benefits and reduced electricity costs.",
    features: [
      "Direct grid connection",
      "Net metering benefits",
      "No battery requirement",
      "Lower installation cost",
      "Maximum ROI in 3-5 years",
    ],
    specifications: [
      { label: "Capacity Range", value: "3kW - 1MW" },
      { label: "Solar Panel", value: "Monocrystalline" },
      { label: "Inverter Type", value: "Grid-tie Inverter" },
      { label: "Efficiency", value: "Up to 98%" },
      { label: "Warranty", value: "25 Years Panel" },
    ],
  },
  {
    id: "hybrid-solar-plant",
    name: "Hybrid Solar Power Plant",
    image: hybridPlant,
    category: "solar-power-plant",
    shortDescription: "Hybrid plant combining solar + grid + battery.",
    description:
      "Reliable hybrid solar power generation system combining solar panels, grid connection and battery storage for uninterrupted power supply with maximum efficiency.",
    features: [
      "Triple power source integration",
      "Seamless switching between sources",
      "Battery backup for critical loads",
      "Grid power as backup support",
      "Optimized energy management system",
    ],
    specifications: [
      { label: "Capacity Range", value: "3kW - 100kW" },
      { label: "Solar Panel", value: "Polycrystalline/Mono" },
      { label: "Battery Type", value: "Lithium-ion/Lead-acid" },
      { label: "Grid Compatibility", value: "Single/Three Phase" },
      { label: "Warranty", value: "5 Years System" },
    ],
  },
  {
    id: "off-grid-plant",
    name: "Off Grid Solar Power Plant",
    image: offGridPlant,
    category: "solar-power-plant",
    shortDescription: "Independent solar power plant with batteries.",
    description:
      "Completely independent off-grid solar power system with battery storage, ideal for remote areas with no grid connectivity or as a standalone power solution.",
    features: [
      "Complete energy independence",
      "No electricity bills",
      "High-capacity battery bank",
      "Suitable for remote locations",
      "Expandable system design",
    ],
    specifications: [
      { label: "Capacity Range", value: "1kW - 50kW" },
      { label: "Solar Panel", value: "Monocrystalline" },
      { label: "Battery Backup", value: "4-8 Hours" },
      { label: "Inverter Type", value: "Pure Sine Wave" },
      { label: "Warranty", value: "10 Years Panel" },
    ],
  },

  // ---------------------- SERVICES ----------------------
  {
    id: "pole-installation",
    name: "Pole Installation",
    image: poleInstallation,
    category: "services",
    shortDescription: "Professional service for pole installation.",
    description:
      "Expert team providing comprehensive pole installation services for solar, high mast and LED poles with proper foundation work and safety compliance.",
    features: [
      "Experienced installation technicians",
      "Complete foundation and excavation work",
      "Proper alignment and leveling",
      "Safety standards compliance",
      "Post-installation testing and certification",
    ],
    specifications: [
      { label: "Service Type", value: "On-site Installation" },
      { label: "Pole Types", value: "All Categories" },
      { label: "Foundation", value: "RCC/Steel" },
      { label: "Timeline", value: "1-3 Days per pole" },
      { label: "Warranty", value: "1 Year Service" },
    ],
  },
  {
    id: "rain-water-harvesting",
    name: "Rain Water Harvesting",
    image: rainWaterHarvesting,
    category: "services",
    shortDescription: "Harvest rainwater effectively.",
    description:
      "Sustainable and efficient rainwater harvesting solutions for residential, commercial and industrial properties, helping conserve water and reduce costs.",
    features: [
      "Complete system design and planning",
      "Rooftop and surface water collection",
      "Filtration and storage solutions",
      "Groundwater recharge systems",
      "Regular maintenance services",
    ],
    specifications: [
      { label: "System Type", value: "Rooftop/Surface" },
      { label: "Storage Capacity", value: "500L - 50,000L" },
      { label: "Filtration", value: "Multi-stage" },
      { label: "Installation", value: "Turnkey" },
      { label: "Warranty", value: "2 Years" },
    ],
  },
  {
    id: "solar-installation",
    name: "Solar Panel Installation",
    image: solarInstalltion,
    category: "services",
    shortDescription:
      "Professional solar panel installation for homes and businesses.",
    description:
      "End-to-end solar panel installation service designed to deliver clean, reliable, and cost-efficient renewable energy. Our team handles site assessment, system design, installation, safety compliance, and performance optimization to ensure maximum power generation and long-term durability.",

    features: [
      "On-site survey and load analysis",
      "Customized solar system design",
      "Professional installation with certified technicians",
      "Inverter and wiring setup",
      "Net metering and government approval assistance",
      "System testing and performance optimization",
    ],

    specifications: [
      { label: "Installation Type", value: "Rooftop / Ground-mounted" },
      { label: "Capacity Range", value: "1 kW – 1 MW" },
      {
        label: "Warranty",
        value: "Up to 25 Years (panel), 5 Years (installation)",
      },
      {
        label: "Installation Time",
        value: "1–7 Days depending on system size",
      },
      { label: "Support", value: "Post-installation service and guidance" },
    ],
  },
  {
    id: "solar-amc",
    name: "Solar AMC Service",
    image: solarAmc,
    category: "services",
    shortDescription: "Annual maintenance for solar installations.",
    description:
      "Comprehensive Annual Maintenance Contract (AMC) for solar installations ensuring maximum efficiency, performance and longevity of your solar power systems.",
    features: [
      "Regular inspection and cleaning",
      "Performance monitoring and analysis",
      "Battery health check and maintenance",
      "Panel efficiency testing",
      "Priority breakdown support",
    ],
    specifications: [
      { label: "Service Frequency", value: "Quarterly/Monthly" },
      { label: "Coverage", value: "Complete System" },
      { label: "Response Time", value: "24-48 Hours" },
      { label: "Contract Period", value: "1-5 Years" },
      { label: "Support", value: "24/7 Helpline" },
    ],
  },
  {
    id: "fabrication",
    name: "Fabrication",
    image: fabricationService,
    category: "services",
    shortDescription: "Custom metal fabrication solutions.",
    description:
      "End-to-end metal fabrication service delivering durable, precise, and customized structures for residential, commercial, and industrial applications.",
    features: [
      "Custom design and fabrication",
      "High-quality welding and finishing",
      "Structural strength and durability",
      "On-site installation support",
      "Compliance with safety standards",
    ],
    specifications: [
      { label: "Material Types", value: "MS, SS, Aluminum" },
      { label: "Applications", value: "Residential / Commercial / Industrial" },
      { label: "Fabrication Type", value: "Custom & Standard" },
      { label: "Finish Options", value: "Painted / Powder Coated / Polished" },
      { label: "Turnaround Time", value: "Project-based" },
    ],
  },
  // ---------------------- Structures ----------------------
  {
    id: "solar-mounting-structure",
    name: "Solar Mounting Structure",
    image: solarMountingStructure,
    category: "structures",
    shortDescription: "Durable and optimized mounting system for solar panels.",
    description:
      "High-strength, corrosion-resistant solar mounting structure designed for rooftop and ground-mounted installations. Engineered to withstand extreme weather conditions while ensuring optimal panel alignment and maximum solar energy output.",
    features: [
      "Corrosion-resistant galvanized or aluminum material",
      "Suitable for rooftop and ground-mount projects",
      "Adjustable tilt angle for maximum energy generation",
      "Engineered for high wind & snow load conditions",
      "Quick and easy installation with modular components",
    ],
    specifications: [
      { label: "Material", value: "GI / Aluminum" },
      { label: "Tilt Angle", value: "0° - 35° Adjustable" },
      { label: "Panel Compatibility", value: "All Standard panels" },
      { label: "Wind Load Capacity", value: "Up to 180 km/h" },
      { label: "Warranty", value: "10 Years " },
    ],
  },
  {
    id: "peb-structure",
    name: "PEB Structure",
    image: pebStructure,
    category: "structures",
    shortDescription:
      "Strong and cost-effective pre-engineered building solution.",
    description:
      "High-quality Pre-Engineered Building (PEB) structures designed for industrial, commercial, and warehouse applications. Engineered for strength, durability, and faster construction while optimizing material usage and overall project cost.",
    features: [
      "Pre-engineered steel structure for faster construction",
      "High load-bearing capacity and structural stability",
      "Customizable design as per project requirements",
      "Weather-resistant and low maintenance",
      "Cost-effective compared to conventional construction",
    ],
    specifications: [
      { label: "Material", value: "High-Tensile Steel" },
      { label: "Applications", value: "Industrial / Commercial / Warehouses" },
      { label: "Span Width", value: "Up to 60 meters" },
      { label: "Design Standards", value: "IS / ASTM Compliant" },
      { label: "Service Life", value: "25+ Years" },
    ],
  },
];
