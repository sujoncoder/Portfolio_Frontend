import AboutTextContent from "@/components/public/about/AboutTextContent";
import DeveloperImage from "@/components/public/about/DeveloperImage";
import WhatIDo from "@/components/public/about/WhatIDo";


const HomePage = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 sm:mb-2">
        <AboutTextContent />
        <DeveloperImage />
      </div>
      <WhatIDo />
    </>
  );
};
export default HomePage;