import { SkillCategory } from "@/types";

interface SkillsFilterProps {
  onFilterSkillByCategory: (category: SkillCategory) => void;
  onSelectCategory: string;
}

const SkillsFilter = ({ onFilterSkillByCategory, onSelectCategory }: SkillsFilterProps) => {
  return (
    <div className="flex space-x-2 sm:space-x-4 items-center my-10">
      <button
        onClick={() => onFilterSkillByCategory("all")}
        className={`px-4 py-2 rounded shadow font-medium text-slate-100 cursor-pointer ${onSelectCategory === "all" ? "bg-[#5cc48a]" : "bg-[#32455b]"
          }`}
      >
        All
      </button>

      <button
        onClick={() => onFilterSkillByCategory("programming")}
        className={`px-4 py-2 rounded shadow font-medium text-slate-100 cursor-pointer ${onSelectCategory === "programming" ? "bg-[#5cc48a]" : "bg-[#32455b]"
          }`}
      >
        Programming
      </button>

      <button
        onClick={() => onFilterSkillByCategory("web")}
        className={`px-4 py-2 rounded shadow font-medium text-slate-100 cursor-pointer ${onSelectCategory === "web" ? "bg-[#5cc48a]" : "bg-[#32455b]"
          }`}
      >
        Web
      </button>

      <button
        onClick={() => onFilterSkillByCategory("tools")}
        className={`px-4 py-2 rounded shadow font-medium text-slate-100 cursor-pointer ${onSelectCategory === "tools" ? "bg-[#5cc48a]" : "bg-[#32455b]"
          }`}
      >
        Tools
      </button>
    </div>
  );
};

export default SkillsFilter;