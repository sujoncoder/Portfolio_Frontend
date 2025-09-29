import { AnimatePresence } from "framer-motion";
import Project from "./Project";

const ProjectList = ({ onCategory }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-2 sm:mb-20">
      {/* Filtered project map */}
      <AnimatePresence>
        {onCategory.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ProjectList;
