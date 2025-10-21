"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { Skill } from '../types/DashboardTypes';
import BackgroundBlobs from '../UI/BackgroundBlobs';


// COMPONENTS PROPS TYPE
interface DashboardSkillCardProps {
    title: string;
    description: string;
    icon?: any;
    skills: Skill[];
    isFullWidth?: boolean;
    colorScheme?: {
        primary: string;
        secondary: string;
        accent: string;
    }
};

const DashboardSkillCard: React.FC<DashboardSkillCardProps> = ({
    title,
    description,
    icon: Icon,
    skills,
    isFullWidth,
    colorScheme = {}
}) => {
    const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

    return (
        <div className={`${isFullWidth ? 'col-span-1 md:col-span-3' : 'col-span-1'} relative bg-white/5 rounded-xl backdrop-blur-xl p-5 overflow-hidden group transition-all duration-300 hover:bg-white/10`}>
            {/* Background Gradient Blobs */}
            <div className="absolute inset-0 -z-10">
                <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${colorScheme.primary} rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                <div className={`absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr ${colorScheme.secondary} rounded-full blur-3xl opacity-15 group-hover:opacity-25 transition-opacity`}></div>
            </div>

            {/* HEADER */}
            <div className="flex items-start gap-5">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-slate-500/30 rounded-full shadow-lg shadow-green-500/20 group-hover:shadow-green-500/40 transition-shadow flex-shrink-0">
                    <Icon className="w-6 h-6 text-white/50" />
                </div>
                <div className="flex-1">
                    <h3 className={`text-xl font-bold bg-gradient-to-r ${colorScheme.accent} bg-clip-text text-transparent mb-2`}>
                        {title}
                    </h3>
                    <p className="text-slate-300 text-sm">{description}</p>
                </div>
            </div>

            {/* SKILLS IMAGES */}
            <div className="relative mt-10">
                <div className={`flex ${isFullWidth ? 'justify-start' : 'justify-start'} items-center`}>
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="relative group/skill"
                            style={{
                                marginLeft: index === 0 ? '0' : '-12px',
                                zIndex: hoveredSkill === index ? 50 : skills.length - index
                            }}
                            onMouseEnter={() => setHoveredSkill(index)}
                            onMouseLeave={() => setHoveredSkill(null)}
                        >
                            {/* IMAGE CONTAINER */}
                            <div className={`relative w-10 h-10 rounded-full border-2 border-black/50 p-1 bg-white/90 backdrop-blur-xl overflow-hidden transition-all duration-300 ${hoveredSkill === index ? 'scale-125 shadow-2xl shadow-blue-500/50 border-blue-500/50' : 'group-hover/skill:scale-110'
                                }`}>
                                <Image
                                    src={skill.image}
                                    width={100}
                                    height={100}
                                    alt={skill.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Skill Name Tooltip */}
                            {hoveredSkill === index && (
                                <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-slate-800/95 backdrop-blur-xl border border-white/20 rounded-lg shadow-xl whitespace-nowrap animate-fadeIn">
                                    <p className="text-white text-sm font-medium">{skill.name}</p>
                                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 border-r border-b border-white/20 rotate-45"></div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DashboardSkillCard;