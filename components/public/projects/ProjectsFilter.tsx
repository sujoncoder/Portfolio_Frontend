import { ProjectCategory } from "@/types";

interface ProjectsFilterProps {
  onfilterProjectByCategory: (category: ProjectCategory) => void;
  onSelectCategory: string;
}

const ProjectsFilter = ({ onfilterProjectByCategory, onSelectCategory }: ProjectsFilterProps) => {
  return (
    <div className="flex space-x-4 items-center py-6 sm:py-10">
      <button
        onClick={() => onfilterProjectByCategory("all")}
        className={`px-4 py-2 rounded shadow font-medium text-slate-100 cursor-pointer ${onSelectCategory === "all" ? "bg-[#5cc48a]" : "bg-[#32455b]"
          }`}
      >
        All
      </button>

      <button
        onClick={() => onfilterProjectByCategory("frontend")}
        className={`px-4 py-2 rounded shadow font-medium text-slate-100 cursor-pointer ${onSelectCategory === "frontend" ? "bg-[#5cc48a]" : "bg-[#32455b]"
          }`}
      >
        Frontend
      </button>

      <button
        onClick={() => onfilterProjectByCategory("fullstack")}
        className={`px-4 py-2 rounded shadow font-medium text-slate-100 cursor-pointer ${onSelectCategory === "fullstack" ? "bg-[#5cc48a]" : "bg-[#32455b]"
          }`}
      >
        Fullstack
      </button>
    </div>
  );
};

export default ProjectsFilter;