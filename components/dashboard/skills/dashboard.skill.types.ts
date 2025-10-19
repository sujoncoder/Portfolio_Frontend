import React from "react";

export interface Skill {
    name: string;
    image: string;
};

export interface ISkills {
    title: string;
    semiTitle: string;
    icon: React.ElementType;
    skills: Skill[];
    isFullWidth?: boolean;
};

export interface DashboardSkillCardProps {
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