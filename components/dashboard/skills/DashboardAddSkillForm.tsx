"use client"

import React, { useState } from 'react';
import { Star } from 'lucide-react';
import BackgroundBlobs from '../UI/BackgroundBlobs';
import { HiText, ModalFrame } from '../UI/UiElements';
import UploadImage from '../UI/UploadImage';
import CustomButton from '../UI/CustomButton';
import { SkillFormData } from '../types/DashboardTypes';
import { categories } from '../utils/DashboardData';


// COMPONENT PROPS
interface AddSkillFormProps {
    onSubmit?: (skill: SkillFormData) => void;
    onClose?: () => void;
};

// DASHBOARD ADD SKILL FORM
const DashboardAddSkillForm: React.FC<AddSkillFormProps> = ({ onSubmit, onClose }) => {

    const [formData, setFormData] = useState<SkillFormData>({
        title: '',
        image: '',
        category: 'programming',
        level: 1
    });

    const [imagePreview, setImagePreview] = useState<string>('');

    // HANDLE IMAGE UPLOAD
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

    // HANDLE SUBMIT FORM
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormData({ title: '', image: '', category: 'programming', level: 1 });
        setImagePreview('');
        onClose?.();
    };


    return (
        <ModalFrame onClose={onClose}>
            <BackgroundBlobs
                primary="from-blue-500 to-purple-600"
                secondary="from-cyan-500 to-blue-600"
            />

            <div className="relative flex items-center justify-between mb-6">
                <HiText>
                    Add New Skill
                </HiText>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2 font-mono">
                        Skill Name
                    </label>
                    <input
                        type="text"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        placeholder="e.g., JavaScript"
                        className="w-full px-4 py-2 border border-white/10 bg-white/5 text-slate-200 rounded-lg placeholder:text-slate-500 focus:outline-none focus:border-white/20"
                    />
                </div>

                <UploadImage
                    imagePreview={imagePreview}
                    OnHandleImageUpload={handleImageUpload}
                    OnSetImagePreview={(value) => {
                        setImagePreview(value);
                        setFormData({ ...formData, image: value });
                    }}
                />

                <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2 font-mono">
                        Category
                    </label>
                    <div className="flex gap-2">
                        {categories.map((cat) => {
                            const Icon = cat.icon;
                            const isSelected = formData.category === cat.value;

                            return (
                                <label
                                    key={cat.value}
                                    className={`
                                        flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg border cursor-pointer
                                        transition-all duration-200
                                        ${isSelected
                                            ? 'border-blue-500 bg-blue-500/10 text-blue-400'
                                            : 'border-white/10 bg-white/5 text-slate-400 hover:border-white/20 hover:bg-white/10'
                                        }
                                    `}
                                >
                                    <input
                                        type="radio"
                                        name="category"
                                        value={cat.value}
                                        checked={isSelected}
                                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                        className="sr-only"
                                    />
                                    <Icon className="w-4 h-4" />
                                    <span className="text-sm font-medium">
                                        {cat.label}
                                    </span>
                                </label>
                            );
                        })}
                    </div>
                </div>

                <div>
                    <label className="block text-slate-300 text-sm font-medium mb-3 font-mono">
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

                {/* CUSTOM-BUTTON  */}
                <CustomButton className='w-full rounded-lg mt-5 flex justify-center gap-5'>
                    Submit
                </CustomButton>
            </form>
        </ModalFrame>
    );
};

export default DashboardAddSkillForm;