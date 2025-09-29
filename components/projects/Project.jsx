import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { IconEye } from '@tabler/icons-react';

const Project = ({ project }) => {
  const { id, img, title } = project;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.6 }}
      className="relative grid border-2 border-slate-500 rounded"
    >
      <Link
        href={`/projects/${id}`}
        className="group relative block rounded w-full bg-white"
      >
        <Image
          src={img}
          alt={title}
          width={500}
          height={500}
          className="w-full h-40 cursor-pointer"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 duration-300">
          <IconEye className="text-[#5cc48a] text-7xl opacity-80" />
        </div>
        <p className="absolute bottom-0 w-full text-center text-[#5cc48a] font-medium bg-[#121821] bg-opacity-70">
          {title}
        </p>
      </Link>
    </motion.div>
  );
};

export default Project;
