import Certificates from "@/components/achievement/Certificates";
import Testmonials from "@/components/achievement/Testmonials";

const Achievement = () => {
  return (
    <>
      <Testmonials />
      <div className="border-b-2 border-cyan-500 mt-20 mb-6"></div>
      <Certificates />
    </>
  );
};

export default Achievement;
