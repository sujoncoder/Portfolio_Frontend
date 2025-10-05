"use client";

import { useState } from "react";
import SkillsData from "@/data/skillsDB";
import SkillsTextContent from "@/components/public/skills/SkillsTextContent";
import SkillsFilter from "@/components/public/skills/SkillsFilter";
import SkillsList from "@/components/public/skills/SkillsList";

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
