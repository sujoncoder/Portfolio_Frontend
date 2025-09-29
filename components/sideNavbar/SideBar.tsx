import NavLinks from "./NavLinks";
import ProfileImage from "./ProfileImage";
import SideBarTextIntro from "./SideBarTextIntro";
import SocialIcon from "./SocialIcon";

const SideBar = () => {
  return (
    <div className="flex justify-around md:flex-col md:h-screen md:justify-center items-center py-1 md:py-0">
      <ProfileImage />
      <SideBarTextIntro />
      <SocialIcon />
      <NavLinks />
    </div>
  );
};

export default SideBar;
