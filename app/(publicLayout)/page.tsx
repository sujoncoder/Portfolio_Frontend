import AboutTextContent from "@/components/about/AboutTextContent";
import DeveloperImage from "@/components/about/DeveloperImage";
import WhatIDo from "@/components/about/WhatIDo";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 sm:mb-0">
        <AboutTextContent />
        <DeveloperImage />
      </div>
      <WhatIDo />
    </>
  );
};
export default HomePage;