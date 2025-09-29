"use client";

import ProjectList from "@/components/projects/ProjectList";
import ProjectsFilter from "@/components/projects/ProjectsFilter";
import ProjectsTextContent from "@/components/projects/ProjectsTextContent";
import ProjectData from "@/data/projectsDB";

import { useState } from "react";

const Projects = () => {
  const [filteredProject, setFilteredProject] = useState(ProjectData);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filterProjectByCategory = (category) => {
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
    <div>
      <ProjectsTextContent />
      <ProjectsFilter
        onfilterProjectByCategory={filterProjectByCategory}
        onSelectCategory={selectedCategory}
      />
      <ProjectList onCategory={filteredProject} />
    </div>
  );
};

export default Projects;
