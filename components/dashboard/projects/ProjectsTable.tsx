"use client"

import React, { useState, useMemo } from 'react';
import { MoreVertical, Edit2, Trash2, ExternalLink, Code, Plus, Search } from 'lucide-react';
import projectsDB from '@/data/projectsDB';
import TableController from './TableController';
import Image from 'next/image';


const ProjectsTable = () => {
    const [openMenuId, setOpenMenuId] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('all');

    const toggleMenu = (id: any) => {
        setOpenMenuId(openMenuId === id ? null : id);
    };

    // Filter projects based on search and category
    const filteredProjects = useMemo(() => {
        return projectsDB.filter(project => {
            const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
            const matchesCategory = categoryFilter === 'all' || project.category === categoryFilter;
            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, categoryFilter]);


    return (
        <div className="space-y-4">
            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 8px;
                    height: 8px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(59, 130, 246, 0.5);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(59, 130, 246, 0.7);
                }
            `}</style>

            {/* TABLE CONTROLLER COMPONENT */}
            <TableController
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                categoryFilter={categoryFilter}
                setCategoryFilter={setCategoryFilter}
            />

            {/* DESKTOP VIEW */}
            <div className="hidden sm:block bg-white/5 rounded-xl border border-white/10 overflow-hidden">
                <div className="max-h-[500px] overflow-y-auto custom-scrollbar">
                    <table className="w-full">
                        <thead className="bg-white/5 border-b border-white/10 sticky top-0 z-10">
                            <tr>
                                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300 uppercase bg-gray-900/95">
                                    Project
                                </th>
                                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300 uppercase bg-gray-900/95">
                                    Category
                                </th>
                                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300 uppercase bg-gray-900/95">
                                    Stack
                                </th>
                                <th className="text-center py-4 px-6 text-sm font-semibold text-gray-300 uppercase bg-gray-900/95">
                                    Links
                                </th>
                                <th className="text-center py-4 px-6 text-sm font-semibold text-gray-300 uppercase bg-gray-900/95">
                                    Actions
                                </th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-white/5">
                            {filteredProjects.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="py-8 text-center text-gray-400">
                                        No projects found
                                    </td>
                                </tr>
                            ) : (
                                filteredProjects.map((project) => (
                                    <tr key={project.id} className="hover:bg-white/5">
                                        <td className="px-5">
                                            <div className="flex items-center gap-4">
                                                <Image
                                                    src={project?.img}
                                                    width={100}
                                                    height={100}
                                                    alt={project?.title}
                                                    className="w-10 h-10 rounded-lg object-cover"
                                                />
                                                <p className="text-white">{project?.title}</p>
                                            </div>
                                        </td>

                                        <td className="px-5">
                                            <span className={`inline-flex px-3 py-1 text-xs rounded-full capitalize ${project.category === 'frontend'
                                                ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                                                : 'bg-green-500/10 text-green-400 border border-green-500/20'
                                                }`}>
                                                {project.category}
                                            </span>
                                        </td>

                                        <td className="px-5">
                                            <div className="flex flex-wrap gap-1.5">
                                                {project.technologies.slice(0, 3).map((tech, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-2 py-1 text-xs bg-white/10 text-gray-300 rounded-full border border-white/10"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                                {project.technologies.length > 3 && (
                                                    <span className="px-2 py-1 text-xs text-gray-400">
                                                        +{project.technologies.length - 3}
                                                    </span>
                                                )}
                                            </div>
                                        </td>

                                        <td className="px-5">
                                            <div className="flex items-center justify-center gap-2">
                                                <a
                                                    href={project.live}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-2 rounded-lg bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 hover:scale-110 transition-all duration-300 ease-in-out"
                                                >
                                                    <ExternalLink className="w-4 h-4" />
                                                </a>
                                                <a
                                                    href={project.code}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-2 rounded-lg bg-purple-500/10 text-purple-400 hover:bg-purple-500/20 hover:scale-110 transition-all duration-300 ease-in-out"
                                                >
                                                    <Code className="w-4 h-4" />
                                                </a>
                                            </div>
                                        </td>

                                        <td className="py-3 px-6">
                                            <div className="flex items-center justify-center gap-2">
                                                <button className="p-2 rounded-lg bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">
                                                    <Edit2 className="w-4 h-4" />
                                                </button>
                                                <button className="p-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* MOBILE CARD VIEW */}
            <div className="sm:hidden space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                {filteredProjects.length === 0 ? (
                    <div className="bg-white/5 rounded-xl border border-white/10 p-8 text-center text-gray-400">
                        No projects found
                    </div>
                ) : (
                    filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-white/5 rounded-xl border border-white/10 p-5"
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="w-16 h-16 rounded-xl object-cover"
                                />
                                <div className="flex-1">
                                    <h3 className="text-white font-bold text-lg mb-2">{project.title}</h3>
                                    <span className={`inline-flex px-3 py-1 text-xs rounded-full capitalize ${project.category === 'frontend'
                                        ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                                        : 'bg-green-500/20 text-green-400 border border-green-500/30'
                                        }`}>
                                        {project.category}
                                    </span>
                                </div>

                                <div className="relative">
                                    <button
                                        onClick={() => toggleMenu(project.id)}
                                        className="p-2 rounded-lg bg-white/5 text-gray-400 hover:bg-white/10 transition-colors"
                                    >
                                        <MoreVertical className="w-5 h-5" />
                                    </button>

                                    {openMenuId === project.id && (
                                        <div className="absolute right-0 top-12 bg-gray-900 border border-white/10 rounded-xl shadow-xl overflow-hidden z-10 min-w-[160px]">
                                            <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-white/5 transition-colors">
                                                <Edit2 className="w-4 h-4 text-blue-400" />
                                                <span className="text-sm">Edit</span>
                                            </button>
                                            <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-white/5 transition-colors">
                                                <Trash2 className="w-4 h-4 text-red-400" />
                                                <span className="text-sm">Delete</span>
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="mb-4">
                                <p className="text-gray-400 text-xs uppercase mb-2">Tech Stack</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 text-xs bg-white/10 text-gray-300 rounded border border-white/20"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex gap-3 pt-3 border-t border-white/5">
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-colors"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    <span className="text-sm">Live</span>
                                </a>
                                <a
                                    href={project.code}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-purple-500/10 text-purple-400 hover:bg-purple-500/20 transition-colors"
                                >
                                    <Code className="w-4 h-4" />
                                    <span className="text-sm">Code</span>
                                </a>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default ProjectsTable;