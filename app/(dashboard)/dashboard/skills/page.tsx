"use client"

import { skillsData } from "@/components/dashboard/skills/dashboard.skills.data";
import DashboardSkillCard from "@/components/dashboard/skills/DashboardSkillCard";


const DashboardSkills = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {skillsData.map((skill, index) => (
                    <DashboardSkillCard
                        key={index}
                        title={skill.title}
                        semiTitle={skill.semiTitle}
                        icon={skill.icon}
                        skills={skill.skills}
                        isFullWidth={skill.isFullWidth}
                    />
                ))}
            </div>
        </>
    );
};

export default DashboardSkills;