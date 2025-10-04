import { IconBrandLeetcode, IconBrandLinkedin, IconBrandGithub, IconBrandFacebook } from '@tabler/icons-react';

const SocialIcon = () => {
  return (
    <div className="hidden md:flex justify-center md:justify-normal space-x-3 my-4 bg-neutral-500/20 px-5 py-2 rounded-full">
      <a target="_blank" href="https://www.linkedin.com/in/sujonsheikh/">
        <IconBrandLinkedin className="w-7 h-7 text-[#5cc48a] hover:scale-125 duration-500 cursor-pointer" />
      </a>

      <a target="_blank" href="https://github.com/sujoncoder">
        <IconBrandGithub className="w-7 h-7 text-[#5cc48a] hover:scale-125 duration-500 cursor-pointer" />
      </a>

      <a target="_blank" href="https://leetcode.com/u/iamsujon/">
        <IconBrandLeetcode className="w-7 h-7 text-[#5cc48a] hover:scale-125 duration-500 cursor-pointer" />
      </a>

      <a target="_blank" href="https://www.facebook.com/iamsujonsheikh">
        <IconBrandFacebook className="w-7 h-7 text-[#5cc48a] hover:scale-125 duration-500 cursor-pointer" />
      </a>
    </div>
  );
};

export default SocialIcon;
