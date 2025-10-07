"use client";

import { IconArrowRightTail, IconFiles } from '@tabler/icons-react';
import { useRouter } from "next/navigation";


const AboutTextContent = () => {
  const router = useRouter();
  const handleClick = (value: any) => {
    router.push(value);
  };

  return (
    <div className="w-full sm:max-w-[60%] space-y-3">
      <h1 className="text-4xl font-bold text-slate-200">Sujon Sheikh</h1>
      <p className="text-[23px] sm:text-2xl text-slate-300">Full-Stack Javascript Developer</p>
      <p className="sm:text-lg text-neutral-300 pt-4 text-justify">
        Hey there! 👋 I’m a developer with a 3-year journey in web development. I've spent almost 1.5 years as a frontend developer at BuddyDevs, working on dynamic and engaging user interfaces. For the past year, I’ve been deeply focused on the MERN stack, enjoying both frontend and backend development.
        Check out my
        <button
          onClick={() => handleClick("/blog")}
          className="text-[#5cc48a] px-1 cursor-pointer"
        >
          blog
        </button>
        for tips and insights, and explore my
        <button
          onClick={() => handleClick("/projects")}
          className="text-[#5cc48a] px-1 cursor-pointer"
        >
          projects
        </button>
        to see what I’ve been up to!
      </p>

      <br />
      <div className="space-x-4">
        <button
          onClick={() => handleClick("/projects")}
          className="bg-[#5cc48a] active:bg-[#1b864b] duration-200 rounded px-2 sm:px-4 py-2 text-slate-100 inline-flex justify-between items-center space-x-2 font-medium cursor-pointer"
        >
          <IconArrowRightTail className="w-5 h-5 hover:rotate-90 duration-300" />
          <span>View Portfolio</span>
        </button>

        <a
          target="_blank"
          href=""
          className="bg-[#32455b] active:bg-[#0f2a47] duration-200 rounded px-2 sm:px-4 py-2 text-slate-100 inline-flex justify-between items-center space-x-2 font-medium cursor-pointer"
        >
          <IconFiles className="w-5 h-5 hover:rotate-90 duration-300" />
          <span>View Resume</span>
        </a>
      </div>
    </div>
  );
};

export default AboutTextContent;
