"use client";

import { useState } from "react";
import SkillsFilter from "@/components/skills/SkillsFilter";
import SkillsList from "@/components/skills/SkillsList";
import SkillsTextContent from "@/components/skills/SkillsTextContent";
import SkillsData from "@/data/skillsDB";

const Skills = () => {
  const [filteredSkills, setFilteredSkills] = useState(SkillsData);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filterSkillByCategory = (category: string) => {
    if (category === "all") {
      setFilteredSkills(SkillsData);
    } else {
      const filtered = SkillsData.filter(
        (skill) => skill.category === category
      );
      setFilteredSkills(filtered);
    }
    setSelectedCategory(category);
  };

  return (
    <div>
      <SkillsTextContent />
      <SkillsFilter
        onFilterSkillByCategory={filterSkillByCategory}
        onSelectCategory={selectedCategory}
      />
      <SkillsList onCategory={filteredSkills} />
    </div>
  );
};

export default Skills;
