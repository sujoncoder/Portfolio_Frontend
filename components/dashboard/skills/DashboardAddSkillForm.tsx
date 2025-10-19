"use client"

import React, { useState } from 'react';
import { Plus, Star, X } from 'lucide-react';
import AddButon from '../common/AddButon';

interface AddSkillFormProps {
    onSubmit?: (skill: SkillFormData) => void;
    onClose?: () => void;
}

interface SkillFormData {
    title: string;
    image: string;
    category: string;
    level: number;
}

// DASHBOARD ADD SKILL FORM
const DashboardAddSkillForm: React.FC<AddSkillFormProps> = ({ onSubmit, onClose }) => {

    const [formData, setFormData] = useState<SkillFormData>({
        title: '',
        image: '',
        category: 'programming',
        level: 1
    });

    const [imagePreview, setImagePreview] = useState<string>('');

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const result = reader.result as string;
                setImagePreview(result);
                setFormData({ ...formData, image: result });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (onSubmit) {
            onSubmit(formData);
        }
        // Reset
        setFormData({ title: '', image: '', category: 'programming', level: 1 });
        setImagePreview('');
    };

    return (
        <div className="relative min-w-sm bg-white/5 backdrop-blur-xl rounded-xl p-5 overflow-hidden border border-white/10">
            {/* Background Gradient Blobs */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-3xl opacity-20"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-full blur-3xl opacity-15"></div>
            </div>

            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-500/30">
                        <Plus className="w-5 h-5 text-blue-400" />
                    </div>
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        Add New Skill
                    </h2>
                </div>
                {onClose && (
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                    >
                        <X className="w-5 h-5 text-slate-400" />
                    </button>
                )}
            </div>

            {/* Form */}
            <div className="space-y-3">
                {/* Skill Title */}
                <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2">
                        Skill Name
                    </label>
                    <input
                        type="text"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        placeholder="e.g., JavaScript"
                        className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                    />
                </div>

                {/* Image Upload */}
                <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2">
                        Upload Image
                    </label>
                    <div className="space-y-3">
                        {/* Upload Button */}
                        <label className="w-full flex flex-col items-center justify-center px-4 py-4 bg-white/5 border-2 border-dashed border-white/20 rounded-lg cursor-pointer hover:bg-white/10 hover:border-blue-500/50 transition-all group">
                            <div className="flex flex-col items-center gap-2">
                                <div className="p-3 bg-blue-500/20 rounded-full group-hover:scale-110 transition-transform">
                                    <Plus className="w-4 h-4 text-blue-400" />
                                </div>
                                <span className="text-slate-400 text-sm">Click to upload image</span>
                                <span className="text-slate-500 text-xs">PNG, JPG, SVG (max 2MB)</span>
                            </div>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="hidden"
                            />
                        </label>

                        {/* Image Preview */}
                        {imagePreview && (
                            <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-lg">
                                <div className="w-16 h-16 rounded-full border-2 border-slate-700 bg-white/10 overflow-hidden flex-shrink-0">
                                    <img
                                        src={imagePreview}
                                        alt="Preview"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex-1">
                                    <p className="text-white text-sm font-medium">Image uploaded</p>
                                    <p className="text-slate-400 text-xs">Preview ready</p>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setImagePreview('');
                                        setFormData({ ...formData, image: '' });
                                    }}
                                    className="p-2 hover:bg-red-500/20 rounded-lg transition-colors"
                                >
                                    <X className="w-4 h-4 text-red-400" />
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Category */}
                <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2">
                        Category
                    </label>
                    <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all appearance-none cursor-pointer"
                    >
                        <option value="programming" className="bg-slate-800">Programming</option>
                        <option value="web" className="bg-slate-800">Web</option>
                        <option value="tools" className="bg-slate-800">Tools</option>
                    </select>
                </div>

                {/* Skill Level/Rating */}
                <div>
                    <label className="block text-slate-300 text-sm font-medium mb-3">
                        Skill Level
                    </label>
                    <div className="flex items-center gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                type="button"
                                onClick={() => setFormData({ ...formData, level: star })}
                                className="group transition-transform hover:scale-110 active:scale-95"
                            >
                                <Star
                                    className={`w-5 h-5 transition-all duration-200 ${star <= formData.level
                                        ? 'fill-yellow-400 text-yellow-400'
                                        : 'text-slate-600 group-hover:text-slate-500'
                                        }`}
                                />
                            </button>
                        ))}
                        <span className="ml-2 text-slate-400 text-sm">
                            {formData.level === 1 && 'Beginner'}
                            {formData.level === 2 && 'Elementary'}
                            {formData.level === 3 && 'Intermediate'}
                            {formData.level === 4 && 'Advanced'}
                            {formData.level === 5 && 'Expert'}
                        </span>
                    </div>
                </div>

                {/* Submit Button */}
                <AddButon
                    className='w-full rounded-xl mt-5 flex justify-center gap-5'
                >
                    Submit
                </AddButon>
            </div>
        </div>
    );
};

export default DashboardAddSkillForm;