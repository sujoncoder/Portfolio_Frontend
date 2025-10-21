import { backend, frontend, programming, tools } from "@/components/dashboard/skills/DashboardSkillsData";
import DashboardSkillCard from "@/components/dashboard/skills/DashboardSkillCard";


// DASHBOARD ALL SKILLS CARD
const DashboardAllSkillCard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-5">
            <DashboardSkillCard
                title={programming.title}
                description={programming.semiTitle}
                icon={programming.icon}
                skills={programming.skills}
                colorScheme={{
                    primary: "from-blue-500 to-purple-600",
                    secondary: "from-cyan-500 to-blue-600",
                    accent: "from-blue-400 via-cyan-400 to-purple-400"
                }}
            />

            <DashboardSkillCard
                title={frontend.title}
                description={frontend.semiTitle}
                icon={frontend.icon}
                skills={frontend.skills}
                colorScheme={{
                    primary: "from-green-500 to-emerald-600",
                    secondary: "from-teal-500 to-green-600",
                    accent: "from-green-400 via-emerald-400 to-teal-400"
                }}
            />

            <DashboardSkillCard
                title={backend.title}
                description={backend.semiTitle}
                icon={backend.icon}
                skills={backend.skills}
                colorScheme={{
                    primary: "from-purple-500 to-pink-600",
                    secondary: "from-violet-500 to-purple-600",
                    accent: "from-purple-400 via-pink-400 to-violet-400"
                }}
            />

            <DashboardSkillCard
                title={tools.title}
                description={tools.semiTitle}
                icon={tools.icon}
                skills={tools.skills}
                isFullWidth={true}
                colorScheme={{
                    primary: "from-orange-500 to-red-600",
                    secondary: "from-yellow-500 to-orange-600",
                    accent: "from-orange-400 via-yellow-400 to-red-400"
                }}
            />
        </div>
    )
};

export default DashboardAllSkillCard;