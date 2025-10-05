"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { IconBrandLinkedin } from '@tabler/icons-react';


interface ITestimonialCardProps {
  name: string;
  title: string;
  text: string
  image: string
  link: string
};

const TestimonialCard = ({ name, title, text, image, link }: ITestimonialCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.6 }}
      className="p-6 rounded-lg bg-slate-800 space-y-3 cursor-pointer group"
    >
      <div className="flex items-center justify-between space-x-4">
        <div className="flex items-center space-x-4">
          <Image
            src={image}
            width={500}
            height={500}
            className="w-12 h-12 group-hover:scale-110 bg-center bg-cover border-2 border-sky-200 rounded-full duration-300"
            alt={name}
          />
          <div>
            <h3 className="text-lg font-semibold text-white">{name}</h3>
            <p className="text-slate-500 text-sm">{title}</p>
          </div>
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <IconBrandLinkedin
            className="text-blue-500 hover:text-blue-600 duration-300"
            size={24}
          />
        </a>
      </div>

      <p className={`leading-normal text-slate-400 ${isExpanded ? "" : "line-clamp-5"}`}>
        {text}
      </p>

      <button
        onClick={toggleExpand}
        className="text-blue-200 text-sm hover:text-[#5cc48a] cursor-pointer"
      >
        {isExpanded ? "See less" : "See more"}
      </button>
    </motion.div>
  );
};

export default TestimonialCard;
