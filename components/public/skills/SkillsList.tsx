import { AnimatePresence } from "motion/react";
import Skill from "./Skill";
import { ISkills } from "@/types";


interface SkillsListtProps {
  onCategory: ISkills[];
}

const SkillsList = ({ onCategory }: SkillsListtProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-6 gap-4">
      <AnimatePresence>
        {onCategory.map((data: ISkills) => (
          <Skill key={data.id} selectSkill={data} />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default SkillsList;
