const ProjectsFilter = ({ onfilterProjectByCategory, onSelectCategory }) => {
  return (
    <div className="flex space-x-4 items-center my-10">
      <button
        onClick={() => onfilterProjectByCategory("all")}
        className={`px-4 py-2 rounded shadow font-medium text-slate-100 bg-[#32455b] ${
          onSelectCategory === "all" ? "bg-[#5cc48a]" : ""
        }`}
      >
        All
      </button>

      <button
        onClick={() => onfilterProjectByCategory("frontend")}
        className={`px-4 py-2 rounded shadow font-medium text-slate-100 bg-[#32455b] ${
          onSelectCategory === "frontend" ? "bg-[#5cc48a]" : ""
        }`}
      >
        Frontend
      </button>

      <button
        onClick={() => onfilterProjectByCategory("fullstack")}
        className={`px-4 py-2 rounded shadow font-medium text-slate-100 bg-[#32455b] ${
          onSelectCategory === "fullstack" ? "bg-[#5cc48a]" : ""
        }`}
      >
        Fullstack
      </button>
    </div>
  );
};

export default ProjectsFilter;
