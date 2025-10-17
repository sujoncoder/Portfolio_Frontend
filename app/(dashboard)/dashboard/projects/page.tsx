import React from 'react'
import { IconBulb, IconCode, IconRocket } from '@tabler/icons-react'
import DashboardProjectCard from '@/components/dashboard/projects/DashboardProjectCard';
import SexyProjectsTable from '@/components/dashboard/projects/ProjectsTable';


const DashboardProject = () => {
    return (
        <div>
            {/* WEB PROJECTS */}
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-5'>
                <DashboardProjectCard
                    title="Frontend Projects"
                    numberOfProjects={12}
                    semiTitle="UI Crafting"
                    badgeTitle="Tech Stack"
                    badges={["React", "Next.js", "TS", "Tailwind"]}
                    icon={IconCode}
                    colorScheme={{
                        primary: "from-blue-500 to-purple-600",
                        secondary: "from-cyan-500 to-blue-600",
                        accent: "from-blue-400 via-cyan-400 to-purple-400"
                    }}
                />

                {/* MOBILE APP */}
                <DashboardProjectCard
                    title="Fullstack Application"
                    numberOfProjects={8}
                    semiTitle="MERN/PERN Stack"
                    badgeTitle="Technologies"
                    badges={["Next", "Tailwind", "Node", "TS", "Mongodb", "Postgres", "Prisma"]}
                    icon={IconRocket}
                    colorScheme={{
                        primary: "from-green-500 to-emerald-600",
                        secondary: "from-teal-500 to-green-600",
                        accent: "from-green-400 via-emerald-400 to-teal-400"
                    }}
                />

                {/* AI - PROJECTS */}
                <DashboardProjectCard
                    title="AI & ML"
                    numberOfProjects={0}
                    semiTitle="Research projects"
                    badgeTitle="Frameworks"
                    badges={["TensorFlow", "PyTorch", "Python"]}
                    icon={IconBulb}
                    colorScheme={{
                        primary: "from-orange-500 to-red-600",
                        secondary: "from-yellow-500 to-orange-600",
                        accent: "from-orange-400 via-yellow-400 to-red-400"
                    }}
                />
            </div>

            {/* PROJECTS TABLE AND CONTROLLER  */}
            <>
                <SexyProjectsTable />
            </>
        </div>
    )
}

export default DashboardProject;