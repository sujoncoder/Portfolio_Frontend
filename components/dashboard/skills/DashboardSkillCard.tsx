"use client"

import { useState } from "react";
import { ISkills } from "./dashboard.skill.types";


const DashboardSkillCard: React.FC<ISkills> = ({ title, semiTitle, icon: Icon, skills, isFullWidth = false }) => {
    const [hoveredSkill, setHoveredSkill] = useState(null);

    return (
        <div className={`${isFullWidth ? 'col-span-1 md:col-span-3' : 'col-span-1'} relative bg-white/5 backdrop-blur-xl rounded-xl p-6 overflow-hidden group hover:bg-white/10 transition-all duration-500`}>
            {/* Background Gradient Blobs */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
                <div className="absolute bottom-0 left-0 w-56 h-56 bg-gradient-to-tr from-cyan-500/15 to-blue-600/15 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
            </div>

            {/* Header */}
            <div className="flex items-start justify-between mb-6">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2.5 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                            <Icon className="w-5 h-5 text-blue-400" />
                        </div>
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                            {title}
                        </h3>
                    </div>
                    <p className="text-slate-400 text-sm ml-12">{semiTitle}</p>
                </div>

                {/* Decorative Dots */}
                <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                    <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
            </div>

            {/* Skills Images - Overlapping Circles */}
            <div className="relative">
                <div className={`flex ${isFullWidth ? 'justify-center' : 'justify-start'} items-center py-8`}>
                    {skills.map((skill, index: any) => (
                        <div
                            key={index}
                            className="relative group/skill"
                            style={{
                                marginLeft: index === 0 ? '0' : '-20px',
                                zIndex: hoveredSkill === index ? 50 : skills.length - index
                            }}
                            onMouseEnter={() => setHoveredSkill(index)}
                            onMouseLeave={() => setHoveredSkill(null)}
                        >
                            {/* Image Container */}
                            <div className={`relative w-12 h-12 rounded-full border-4 border-slate-800 bg-white/10 backdrop-blur-xl overflow-hidden transition-all duration-300 ${hoveredSkill === index ? 'scale-125 shadow-2xl shadow-blue-500/50 border-blue-500/50' : 'group-hover/skill:scale-110'
                                }`}>
                                <img
                                    src={skill.image}
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
        </div >
    );
};

export default DashboardSkillCard