"use client";

import { useState } from "react";
import ProjectData from "@/data/projectsDB";
import { ProjectCategory } from "@/types";
import ProjectsTextContent from "@/components/public/projects/ProjectsTextContent";
import ProjectsFilter from "@/components/public/projects/ProjectsFilter";
import ProjectList from "@/components/public/projects/ProjectList";

const Projects = () => {
  const [filteredProject, setFilteredProject] = useState(ProjectData);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filterProjectByCategory = (category: ProjectCategory) => {
    if (category === "all") {
      setFilteredProject(ProjectData);
    } else {
      const filtered = ProjectData.filter(
        (project) => project.category === category
      );
      setFilteredProject(filtered);
    }
    setSelectedCategory(category);
  };

  return (
    <>
      <ProjectsTextContent />
      <ProjectsFilter onfilterProjectByCategory={filterProjectByCategory}
        onSelectCategory={selectedCategory}
      />
      <ProjectList onCategory={filteredProject} />
    </>
  );
};

export default Projects;
