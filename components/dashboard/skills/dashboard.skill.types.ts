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