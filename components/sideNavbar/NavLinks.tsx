"use client";

import { IconBrandBlogger, IconUserCode, IconCertificate2, IconId, IconBasketCode, IconDeviceGamepad3 } from '@tabler/icons-react';
import ActiveLink from "./ActiveLink";
import Hirebtn from "./HireBtn";

const links = [
  { name: "About me", href: "/", icon: IconUserCode },
  { name: "Skills", href: "/skills", icon: IconBasketCode },
  { name: "Projects", href: "/projects", icon: IconDeviceGamepad3 },
  { name: "Blogs", href: "/blog", icon: IconBrandBlogger },
  { name: "Achievement", href: "/achievement", icon: IconCertificate2 },
  { name: "Contact", href: "/contact", icon: IconId },
];

const SideNavLinks = () => {
  return (
    <ul className="flex flex-row md:flex-col justify-between gap-0 sm:gap-2 md:my-4">
      {links.map(({ href, icon: Icon, name }) => (
        <ActiveLink path={href} key={name}>
          <li className="flex items-center justify-center gap-4 rounded-md px-4 py-1.5 md:flex-none md:justify-start duration-300">
            <Icon className="w-8 h-8 sm:w-8 sm:h-8" />
            <p className="hidden md:block text-lg">{name}</p>
          </li>
        </ActiveLink>
      ))}
      <div className="flex justify-center items-center mt-8">
        <Hirebtn />
      </div>
    </ul>
  );
};

export default SideNavLinks;
