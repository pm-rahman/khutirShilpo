import banner from "@/assets/banner/banner-7.png";
import banner1 from "@/assets/banner/banner-6.png";
import banner2 from "@/assets/banner/banner-5.png";
import Image from "next/image";
import Button from "@/component/ui/button";
const HeroSection = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 bg-slate-50 rounded-lg mt-8 justify-between">
        <div className="p-10 xl:p-12">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-normal">Take Hold Of <br /> Peaceful Beauty</h2>
          <p className="my-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo quia repudiandae et molestias, eligendi fuga beatae modi pariatur dolor, voluptatum quae facere velit facilis soluta.</p>
          <Button variant="outline">Buy Now</Button>
        </div>

        <div className="hidden md:flex justify-end relative">
          <Image
            height={200}
            width={250}
            className="h-[32vh] relative top-20 rotate-180 w-auto"
            src={banner}
            alt="banner image"
          />
          <Image
            height={200}
            width={300}
            className="h-[23vh] hidden xl:block relative top-28 right-8 w-auto"
            src={banner1}
            alt="banner image"
          />
          <Image
            height={200}
            width={250}
            className="h-[30vh] hidden lg:block w-auto "
            src={banner2}
            alt="banner image"
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
