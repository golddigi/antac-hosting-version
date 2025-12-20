import ClientsSlider from "../../components/shared/ClientsSlider";
import Highlights from "../../components/shared/Highlight";
import HeroBanner from "./component/HeroBanner";
import HomeProductsSlider from "./component/HomeProductSlider";
import EmailBanner from "../../components/shared/EmailBanner";
import FAQ from "../../components/shared/Faq";
import Certificate from "../../components/shared/Certificate";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <HeroBanner />

      <Highlights />
      <HomeProductsSlider />
      <Certificate />
      <ClientsSlider headingSize="text-3xl sm:text-4xl lg:text-5xl" />

      <EmailBanner />
      <FAQ />
    </div>
  );
}

export default Home;
