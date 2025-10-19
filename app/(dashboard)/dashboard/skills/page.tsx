"use client"

import DashboardAddSkill from "@/components/dashboard/skills/DashboardAddSkill";
import DashboardAllSkillCard from "@/components/dashboard/skills/DashboardAllSkillCard";


// DASHBOARD SKILL PAGE
const DashboardSkillsPage = () => {
    return (
        <div>
            <DashboardAllSkillCard />

            <div className="mt-10">
                <DashboardAddSkill />
            </div>
        </div>
    );
};

export default DashboardSkillsPage;