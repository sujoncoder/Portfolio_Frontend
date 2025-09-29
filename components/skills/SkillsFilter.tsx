const SkillsFilter = ({ onFilterSkillByCategory, onSelectCategory }) => {
  return (
    <div className="flex space-x-2 sm:space-x-4 items-center my-10">
      <button
        onClick={() => onFilterSkillByCategory("all")}
        className={`px-4 py-2 rounded shadow font-medium text-slate-100 bg-[#32455b] ${
          onSelectCategory === "all" ? "bg-[#5cc48a]" : ""
        }`}
      >
        All
      </button>

      <button
        onClick={() => onFilterSkillByCategory("programming")}
        className={`px-4 py-2 rounded shadow font-medium text-slate-100 bg-[#32455b] ${
          onSelectCategory === "programming" ? "bg-[#5cc48a]" : ""
        }`}
      >
        Programming
      </button>

      <button
        onClick={() => onFilterSkillByCategory("web")}
        className={`px-4 py-2 rounded shadow font-medium text-slate-100 bg-[#32455b] ${
          onSelectCategory === "web" ? "bg-[#5cc48a]" : ""
        }`}
      >
        Web
      </button>

      <button
        onClick={() => onFilterSkillByCategory("tools")}
        className={`px-4 py-2 rounded shadow font-medium text-slate-100 bg-[#32455b] ${
          onSelectCategory === "tools" ? "bg-[#5cc48a]" : ""
        }`}
      >
        Tools
      </button>
    </div>
  );
};

export default SkillsFilter;
