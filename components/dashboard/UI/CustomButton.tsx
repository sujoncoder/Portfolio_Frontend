"use client"

import React from 'react'
import { IconPlus } from '@tabler/icons-react';

interface AddButonProps {
    children: React.ReactNode;
    openForm?: () => void;
    className?: string;
};

const CustomButton: React.FC<AddButonProps> = ({ children, className, openForm }) => {
    return (
        <button
            onClick={openForm}
            className={`group relative px-3 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 border border-blue-500/50 hover:border-blue-500/50 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 active:scale-95 backdrop-blur-xl overflow-hidden ${className}`}>

            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>

            <div className="relative flex items-center gap-2">
                <IconPlus className="w-4 h-4 text-blue-400 group-hover:rotate-90 transition-transform duration-300" />
                <span className="sm:inline text-slate-100">{children}</span>
            </div>
        </button>
    )
};

export default CustomButton;