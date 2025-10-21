import { X, Plus } from 'lucide-react';
import Image from 'next/image';
import React from 'react'


// COMPONENT PROPS
interface UploadImageProps {
    imagePreview: string;
    OnHandleImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
    OnSetImagePreview: (value: string) => void;
    levelText?: string;
    className?: string;
};


// UPLOAD IMAGE UTILITY
const UploadImage: React.FC<UploadImageProps> = ({
    imagePreview,
    OnHandleImageUpload,
    OnSetImagePreview,
    levelText = "Upload Image",
    className = "w-full",
}) => {
    return (
        <div className={`${className}`}>
            <label className="block text-slate-300 text-sm font-medium mb-2 font-mono">
                {levelText}
            </label>

            <div className="relative">
                {/* Upload Area / Preview Area */}
                <label className={`w-full flex items-center justify-center p-4 bg-white/5 border-2 ${imagePreview ? 'border-blue-500/50' : 'border-dashed border-white/20'
                    } rounded-lg cursor-pointer hover:bg-white/10 hover:border-blue-500/50 transition-all group`}>

                    {!imagePreview ? (
                        // Upload Placeholder
                        <div className="flex flex-col items-center gap-2">
                            <div className="p-3 bg-blue-500/20 rounded-full group-hover:scale-110 transition-transform">
                                <Plus className="w-4 h-4 text-blue-400" />
                            </div>
                            <span className="text-slate-400 text-sm">Click to upload image</span>
                            <span className="text-slate-500 text-xs">PNG, JPG, SVG (max 2MB)</span>
                        </div>
                    ) : (
                        // Image Preview (Same Size as Upload Area)
                        <div className="relative flex items-center gap-3">
                            <div className="w-16 h-16 rounded-lg overflow-hidden border border-white/20">
                                <Image
                                    src={imagePreview}
                                    width={100}
                                    height={100}
                                    alt="Preview"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-white text-sm font-medium">Image uploaded</span>
                                <span className="text-slate-400 text-xs">Click to change</span>
                            </div>
                        </div>
                    )}

                    <input
                        type="file"
                        accept="image/*"
                        onChange={OnHandleImageUpload}
                        className="hidden"
                    />
                </label>

                {/* Remove Button */}
                {imagePreview && (
                    <button
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            OnSetImagePreview('');
                        }}
                        className="absolute top-2 right-2 p-2 bg-red-500/20 hover:bg-red-500/30 rounded-lg transition-colors"
                    >
                        <X className="w-4 h-4 text-red-400" />
                    </button>
                )}
            </div>
        </div>
    )
};

export default UploadImage;