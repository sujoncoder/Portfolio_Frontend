
import { IconBrandLeetcode, IconBrandFacebook, IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-react';

const SocialIconForSmallDevice = () => {
  return (
    <>
      <div className="sm:hidden flex justify-center sm:justify-normal gap-4 pb-8">
        <a target="_blank" href="https://www.linkedin.com/in/sujonsheikh/">
          <IconBrandLinkedin className="w-10 h-10 text-[#5cc48a] hover:scale-110 duration-500 cursor-pointer" />
        </a>

        <a target="_blank" href="https://github.com/sujoncoder">
          <IconBrandGithub className="w-10 h-10 text-[#5cc48a] hover:scale-110 duration-500 cursor-pointer" />
        </a>

        <a target="_blank" href="https://leetcode.com/u/iamsujon/">
          <IconBrandLeetcode className="w-10 h-10 text-[#5cc48a] hover:scale-110 duration-500 cursor-pointer" />
        </a>

        <a target="_blank" href="https://www.facebook.com/iamsujonsheikh">
          <IconBrandFacebook className="w-10 h-10 text-[#5cc48a] hover:scale-110 duration-500 cursor-pointer" />
        </a>
      </div>
    </>
  );
};

export default SocialIconForSmallDevice;
