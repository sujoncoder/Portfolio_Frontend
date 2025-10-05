import { IconListLetters, IconAward, IconBrandHipchat, IconShieldCode, IconDeviceGamepad3, IconUserCode } from '@tabler/icons-react';
import ActiveLink from "./ActiveLink";
import Hirebtn from "./HireBtn";


const links = [
  { name: "About", href: "/", icon: IconUserCode },
  { name: "Skills", href: "/skills", icon: IconShieldCode },
  { name: "Projects", href: "/projects", icon: IconDeviceGamepad3 },
  { name: "Blogs", href: "/blogs", icon: IconListLetters },
  { name: "Achievement", href: "/achievement", icon: IconAward },
  { name: "Contact", href: "/contact", icon: IconBrandHipchat },
];

const SideNavLinks = () => {
  return (
    <ul className="flex flex-row md:flex-col justify-between gap-0 sm:gap-2 md:my-4">
      {links.map(({ href, icon: Icon, name }) => (
        <ActiveLink path={href} key={name}>
          <li className="flex items-center gap-5 px-3 sm:px-7 py-2 group">
            <Icon className="w-8 h-8 sm:w-8 sm:h-8 group-hover:scale-125 duration-300" />
            <p className="hidden md:block text-lg">{name}</p>
          </li>
        </ActiveLink>
      ))}
      {/* <div className="flex justify-center items-center mt-8">
        <Hirebtn />
      </div> */}
    </ul>
  );
};

export default SideNavLinks;
