"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { IconEye } from "@tabler/icons-react";

interface IProjectProps {
  id: string;
  img: string;
  title: string;
  live: string;
}

const Project = ({ project }: { project: IProjectProps }) => {
  const { id, img, title, live } = project;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.6 }}
      className="relative grid"
    >
      <div className="relative">
        <Image
          src={img}
          alt={title}
          width={500}
          height={500}
          className="w-full h-48 bg-black opacity-80 rounded-2xl object-cover"
        />

        <Link
          href={`/projects/${id}`}
          className="absolute inset-0 rounded-2xl"
        />



        <Link href={live} target="_blank">
          <div className="absolute bottom-2 hover:scale-105 duration-500 cursor-pointer w-[70%] sm:w-[90%]  left-1/2 -translate-x-1/2 rounded-xl border-2 shadow border-amber-200/10 bg-[#121821]/50 h-14 sm:h-12 flex items-center justify-between px-2 backdrop-blur-md">

            <span className="text-center text-neutral-200 font-medium truncate font-mono">
              {title}
            </span>


            <span
              className="bg-neutral-500/30 hover:bg-[#5cc48a]/30 duration-300 px-1.5 py-0.5 rounded-lg border border-neutral-500/50"
            >
              <IconEye className="text-neutral-300 opacity-80 w-8 h-8 sm:w-7 sm:h-7" />
            </span>
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default Project;