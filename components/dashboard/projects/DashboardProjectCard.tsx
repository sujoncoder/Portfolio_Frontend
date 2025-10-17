import React from 'react';
import { IconStack } from '@tabler/icons-react';


// DASHBOARD PROPS TYPE
interface DashboardProjectCardProps {
    title: string;
    numberOfProjects: number;
    semiTitle?: string;
    badgeTitle?: string;
    badges?: string[];
    icon?: React.ElementType;
    colorScheme?: {
        primary: string;
        secondary: string;
        accent: string;
    };
};

// DASHBOARD PROJECT CARD
const DashboardProjectCard = ({
    title,
    numberOfProjects,
    semiTitle = "Active projects",
    badgeTitle = "Tech Stack",
    badges = [],
    icon: Icon = IconStack,
    colorScheme = {
        primary: "from-blue-500 to-purple-600",
        secondary: "from-cyan-500 to-blue-600",
        accent: "from-blue-400 via-cyan-400 to-purple-400"
    }
}: DashboardProjectCardProps) => {
    return (
        <div className="relative bg-white/5 rounded-xl backdrop-blur-xl p-5 overflow-hidden group transition-all duration-300 hover:bg-white/10">
            {/* Colorful Background Blobs */}
            <div className="absolute inset-0 -z-10">
                <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${colorScheme.primary} rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                <div className={`absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr ${colorScheme.secondary} rounded-full blur-3xl opacity-15 group-hover:opacity-25 transition-opacity`}></div>
            </div>

            {/* CONTENT */}
            <div className="flex flex-col space-y-4">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-10 h-10 bg-slate-500/40 rounded-full mb-1 shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow">
                    <Icon className="w-6 h-6 text-white/50" />
                </div>

                {/* TITLE & COUNT */}
                <div className="flex items-baseline justify-between">
                    <div>
                        <h3 className={`text-xl mt-2 font-bold bg-gradient-to-r ${colorScheme.accent} bg-clip-text text-transparent`}>
                            {title}
                        </h3>
                        <p className="text-slate-400 text-sm font-mono">{semiTitle}</p>
                    </div>
                    <div>
                        <span className="text-2xl font-semibold text-slate-200">
                            {numberOfProjects}
                        </span>
                    </div>
                </div>

                {/* TECH STACK AND BADGES */}
                {badges.length > 0 && (
                    <div className="pt-1">
                        <p className="text-slate-300 text-sm uppercase tracking-widest mb-2 font-mono">{badgeTitle}</p>
                        <div className="flex flex-wrap gap-2">
                            {badges.map((badge, index) => (
                                <span
                                    key={index}
                                    className="text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-slate-400"
                                >
                                    {badge}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* DECORATIVES DOTS */}
            <div className="absolute top-6 right-6 flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
            </div>
        </div>
    );
};

export default DashboardProjectCard;