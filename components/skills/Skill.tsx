import { motion } from "framer-motion";
import Image from "next/image";

const Skill = ({ selectSkill }) => {
  console.log(selectSkill)
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.6 }}
      className="bg-slate-800 ring-1 rounded py-2 px-4 flex-col justify-center items-center cursor-pointer"
    >
      <p className="text-slate-400 text-center">{selectSkill.title}</p>
      <div className="flex justify-center items-center">
        <Image width={50} height={50} src={selectSkill.img} alt="tech-icon" />
      </div>
      <p className="text-center text-sm">{selectSkill.level}</p>
    </motion.div>
  );
};

export default Skill;
