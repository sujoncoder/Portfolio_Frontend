"use client";

import React from "react";
import DashboardModalClose from "../skills/DashboardModalClose";

// MODAL FRAME UI
interface ModalFrameProps {
    children: React.ReactNode;
    onClose?: () => void;
    showClosIcon?: boolean;
};

export const ModalFrame: React.FC<ModalFrameProps> = ({
    children,
    onClose,
    showClosIcon = true

}) => {
    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
            <div className="relative min-w-sm bg-white/5 backdrop-blur-xl rounded-xl p-5 border border-white/10">
                {/* CLOSE MODAL COMPONENT  */}
                {showClosIcon && <DashboardModalClose onClose={onClose} />}

                {children}
            </div>
        </div>
    );
};



// HI TEXT UI
interface HiTextProps {
    children: React.ReactNode;
    className?: string;
};

export const HiText: React.FC<HiTextProps> = ({
    children,
    className = "from-blue-400 via-cyan-400 to-purple-400"
}) => {
    return (
        <h2 className={`text-2xl font-mono font-bold bg-gradient-to-r ${className} bg-clip-text text-transparent`}>
            {children}
        </h2>
    )
};