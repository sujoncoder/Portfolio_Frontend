import Certificates from "@/components/public/achievement/Certificates";
import Testimonials from "@/components/public/achievement/Testmonials";


const Achievement = () => {
  return (
    <>
      <Testimonials />
      <div className="border-b-2 border-cyan-500 mt-20 mb-6"></div>
      <Certificates />
    </>
  );
};

export default Achievement;
