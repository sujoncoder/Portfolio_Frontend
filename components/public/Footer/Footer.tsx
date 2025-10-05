import ByeTypeWriter from "../contact/ByeTypeWriter";
import SocialIconForSmallDevice from "./SocialIconForSmallDevice";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-center mt-20 sm:mt-36 space-y-4 sm:space-y-0 sm:space-x-6">
        <ByeTypeWriter />
        <SocialIconForSmallDevice />

        <p className="text-sm font-mono hover:text-slate-400 text-emerald-400 text-center">
          Developed By Sujon Sheikh <span className="animate-pulse">👨‍💻</span>
        </p>

      </div>

    </>
  );
};

export default Footer;
