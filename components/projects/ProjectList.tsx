import { AnimatePresence } from "motion/react";
import Project from "./Project";
import { IProjects } from "@/types";


interface ProjectListProps {
  onCategory: IProjects[];
}
const ProjectList = ({ onCategory }: ProjectListProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-2 sm:mb-20">
      {/* Filtered project map */}
      <AnimatePresence>
        {onCategory.map((project: IProjects) => (
          <Project key={project.id} project={project} />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ProjectList;
