import BambooProduct from "@/component/core/pages/Home/bambooProduct/bambooProduct";
import BestProduct from "@/component/core/pages/Home/bestProduct/bestProduct";
import ClayProduct from "@/component/core/pages/Home/clayProduct/clayProduct";
import GlassProducts from "@/component/core/pages/Home/glassProduct/glassProduct";
import HeroSection from "@/component/core/pages/Home/heroSection/heroSection";

const Home = () => {
  return (
    <>
      <HeroSection/>
      <GlassProducts/>
      <ClayProduct/>
      <BambooProduct/>
      <BestProduct/>
    </>
  );
};

export default Home;
