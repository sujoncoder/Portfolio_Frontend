import { AnimatePresence } from "framer-motion";
import Skill from "./Skill";

const SkillsList = ({ onCatgory }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-7 gap-4">
      <AnimatePresence>
        {onCatgory.map((data) => (
          <Skill key={data.id} selectSkill={data} />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default SkillsList;
