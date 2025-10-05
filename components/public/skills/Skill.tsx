import { motion } from "motion/react";
import Image from "next/image";

interface SelectSkillProps {
  title: string;
  img: string;
  level: string;
}

const Skill = ({ selectSkill }: { selectSkill: SelectSkillProps }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.6 }}
      className="group bg-slate-800 rounded shadow py-2 px-4 flex-col justify-center items-center cursor-pointer space-y-1"
    >
      <p className="text-slate-400 text-center font-mono truncate">
        {selectSkill.title}
      </p>

      <div className="flex justify-center items-center">
        <Image
          width={50}
          height={50}
          src={selectSkill.img}
          alt="tech-icon"
          className="duration-500 group-hover:scale-125"
        />
      </div>

      <p className="text-center text-sm">{selectSkill.level}</p>
    </motion.div>
  );
};

export default Skill;