"use client"

import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { categorieProjects } from '../utils/DashboardData';
import { ProjectFormData } from '../types/DashboardTypes';
import BackgroundBlobs from '../UI/BackgroundBlobs';
import CustomButton from '../UI/CustomButton';
import { HiText, ModalFrame } from '../UI/UiElements';
import UploadImage from '../UI/UploadImage';


interface AddProjectFormProps {
    onSubmit?: (project: ProjectFormData) => void;
    onClose?: () => void;
};

// DASHBOARD ADD PROJECT FORM
const DashboardAddProjectForm: React.FC<AddProjectFormProps> = ({ onSubmit, onClose }) => {
    const [formData, setFormData] = useState<ProjectFormData>({
        title: '',
        img: '',
        category: 'fullstack',
        live: '',
        code: '',
        technologies: [],
        description: []
    });

    const [imagePreview, setImagePreview] = useState<string>('');
    const [currentTech, setCurrentTech] = useState<string>('');
    const [currentDesc, setCurrentDesc] = useState<string>('');

    // HANDLE IMAGE UPLOAD
    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const result = reader.result as string;
                setImagePreview(result);
                setFormData({ ...formData, img: result });
            };
            reader.readAsDataURL(file);
        }
    };

    // ADD TECHNOLOGY
    const handleAddTech = () => {
        if (currentTech.trim()) {
            setFormData({ ...formData, technologies: [...formData.technologies, currentTech.trim()] });
            setCurrentTech('');
        }
    };

    // REMOVE TECHNOLOGY
    const handleRemoveTech = (index: number) => {
        setFormData({
            ...formData,
            technologies: formData.technologies.filter((_, i) => i !== index)
        });
    };

    // ADD DESCRIPTION
    const handleAddDesc = () => {
        if (currentDesc.trim()) {
            setFormData({ ...formData, description: [...formData.description, currentDesc.trim()] });
            setCurrentDesc('');
        }
    };

    // REMOVE DESCRIPTION
    const handleRemoveDesc = (index: number) => {
        setFormData({
            ...formData,
            description: formData.description.filter((_, i) => i !== index)
        });
    };

    // HANDLE SUBMIT
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (onSubmit) {
            onSubmit(formData);
        }
        // RESET FORM
        setFormData({
            title: '',
            img: '',
            category: 'fullstack',
            live: '',
            code: '',
            technologies: [],
            description: []
        });
        setImagePreview('');
        onClose?.();
    };


    return (
        <ModalFrame onClose={onClose}>
            {/* Background Blobs */}
            <BackgroundBlobs
                primary="from-blue-500 to-purple-600"
                secondary="from-cyan-500 to-blue-600"
            />

            {/* Header */}
            <div className="relative flex items-center justify-between mb-6">
                <HiText>
                    Add New Project
                </HiText>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-5 max-h-[70vh] overflow-y-auto pr-2">
                <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2 font-mono">
                        Project Title
                    </label>
                    <input
                        type="text"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        placeholder="e.g., Travel Lodge"
                        required
                        className="w-full px-4 py-2 border border-white/10 bg-white/5 text-slate-200 rounded-lg placeholder:text-slate-500 focus:outline-none focus:border-white/20"
                    />
                </div>

                {/* Image Upload Component */}
                <UploadImage
                    imagePreview={imagePreview}
                    OnHandleImageUpload={handleImageUpload}
                    OnSetImagePreview={(value) => {
                        setImagePreview(value);
                        setFormData({ ...formData, img: value });
                    }}
                />

                {/* Category */}
                <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2 font-mono">
                        Category
                    </label>
                    <div className="flex gap-2">
                        {categorieProjects.map((cat) => {
                            const isSelected = formData.category === cat.value;
                            return (
                                <label
                                    key={cat.value}
                                    className={`flex-1 flex items-center justify-center px-3 py-2 rounded-lg border cursor-pointer transition-all duration-200 ${isSelected
                                        ? 'border-blue-500 bg-blue-500/10 text-blue-400'
                                        : 'border-white/10 bg-white/5 text-slate-400 hover:border-white/20 hover:bg-white/10'
                                        }`}
                                >
                                    <input
                                        type="radio"
                                        name="category"
                                        value={cat.value}
                                        checked={isSelected}
                                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                        className="sr-only"
                                    />
                                    <span className="text-sm font-medium">{cat.label}</span>
                                </label>
                            );
                        })}
                    </div>
                </div>

                {/* Live & Code URLs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-slate-300 text-sm font-medium mb-2 font-mono">
                            Live URL
                        </label>
                        <input
                            type="url"
                            value={formData.live}
                            onChange={(e) => setFormData({ ...formData, live: e.target.value })}
                            placeholder="https://example.com"
                            required
                            className="w-full px-4 py-2 border border-white/10 bg-white/5 text-slate-200 rounded-lg placeholder:text-slate-500 focus:outline-none focus:border-white/20"
                        />
                    </div>
                    <div>
                        <label className="block text-slate-300 text-sm font-medium mb-2 font-mono">
                            Code URL (GitHub)
                        </label>
                        <input
                            type="url"
                            value={formData.code}
                            onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                            placeholder="https://github.com/..."
                            required
                            className="w-full px-4 py-2 border border-white/10 bg-white/5 text-slate-200 rounded-lg placeholder:text-slate-500 focus:outline-none focus:border-white/20"
                        />
                    </div>
                </div>

                {/* Technologies */}
                <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2 font-mono">
                        Technologies
                    </label>
                    <div className="flex gap-2 mb-3">
                        <input
                            type="text"
                            value={currentTech}
                            onChange={(e) => setCurrentTech(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTech())}
                            placeholder="e.g., Next.js (Press Enter)"
                            className="flex-1 px-4 py-2 border border-white/10 bg-white/5 text-slate-200 rounded-lg placeholder:text-slate-500 focus:outline-none focus:border-white/20"
                        />
                        <button
                            type="button"
                            onClick={handleAddTech}
                            className="px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-lg transition-colors"
                        >
                            <Plus className="w-5 h-5 text-blue-400" />
                        </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {formData.technologies.map((tech, index) => (
                            <span key={index} className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-400 rounded-full text-sm">
                                {tech}
                                <button type="button" onClick={() => handleRemoveTech(index)} className="hover:text-blue-300">
                                    <X className="w-3 h-3" />
                                </button>
                            </span>
                        ))}
                    </div>
                </div>

                {/* Description */}
                <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2 font-mono">
                        Description Points
                    </label>
                    <div className="flex gap-2 mb-3">
                        <input
                            type="text"
                            value={currentDesc}
                            onChange={(e) => setCurrentDesc(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddDesc())}
                            placeholder="e.g., Users can create accounts (Press Enter)"
                            className="flex-1 px-4 py-2 border border-white/10 bg-white/5 text-slate-200 rounded-lg placeholder:text-slate-500 focus:outline-none focus:border-white/20"
                        />
                        <button
                            type="button"
                            onClick={handleAddDesc}
                            className="px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-lg transition-colors"
                        >
                            <Plus className="w-5 h-5 text-blue-400" />
                        </button>
                    </div>
                    <div className="space-y-2">
                        {formData.description.map((desc, index) => (
                            <div key={index} className="flex items-start gap-2 p-3 bg-white/5 border border-white/10 rounded-lg group hover:bg-white/10 transition-colors">
                                <span className="text-slate-300 text-sm flex-1">{desc}</span>
                                <button
                                    type="button"
                                    onClick={() => handleRemoveDesc(index)}
                                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                    <X className="w-4 h-4 text-red-400 hover:text-red-300" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* SUBMIT BUTTON */}
                <CustomButton className='w-full rounded-xl text-center'>
                    Add Project
                </CustomButton>
            </form>
        </ModalFrame>
    );
};

export default DashboardAddProjectForm;