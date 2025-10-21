import { X, Plus } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

interface UploadImageProps {
    imagePreview: string;
    OnHandleImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
    OnSetImagePreview: (value: string) => void;
}

// UPLOAD IMAGE UTILITY
const UploadImage: React.FC<UploadImageProps> = ({ imagePreview, OnHandleImageUpload, OnSetImagePreview }) => {
    return (
        <div>
            <label className="block text-slate-300 text-sm font-medium mb-2 font-mono">
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
                        onChange={OnHandleImageUpload}
                        className="hidden"
                    />
                </label>

                {/* Image Preview */}
                {imagePreview && (
                    <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-lg">
                        <div className="w-16 h-16 rounded-full border-2 border-slate-700 bg-white/10 overflow-hidden flex-shrink-0">
                            <Image
                                src={imagePreview}
                                width={500}
                                height={500}
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
                            onClick={() => OnSetImagePreview('')}
                            className="p-2 hover:bg-red-500/20 rounded-lg transition-colors"
                        >
                            <X className="w-4 h-4 text-red-400" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default UploadImage