import { Code2, Palette, Server, Wrench } from "lucide-react";
import { ISkills } from "./dashboard.skill.types";



const dummyImage: string = "https://i.ibb.co/FDKsyMx/postgresql.png";

export const skillsData: ISkills[] = [
    {
        title: "Programming",
        semiTitle: "Core Languages",
        icon: Code2,
        skills: [
            { name: "JavaScript", image: dummyImage },
            { name: "TypeScript", image: dummyImage },
            { name: "Python", image: dummyImage },
            { name: "Java", image: dummyImage },
        ]
    },
    {
        title: "Frontend",
        semiTitle: "UI Development",
        icon: Palette,
        skills: [
            { name: "React", image: dummyImage },
            { name: "Next.js", image: dummyImage },
            { name: "TypeScript", image: dummyImage },
            { name: "Tailwind CSS", image: dummyImage },
        ]
    },
    {
        title: "Backend",
        semiTitle: "Server & Database",
        icon: Server,
        skills: [
            { name: "Node.js", image: dummyImage },
            { name: "Go", image: dummyImage },
            { name: "MongoDB", image: dummyImage },
            { name: "PostgreSQL", image: dummyImage },
            { name: "Express", image: dummyImage },
            { name: "Mongoose", image: dummyImage },
            { name: "Prisma", image: dummyImage },
        ]
    },
    {
        title: "Tools",
        semiTitle: "Development Tools & Platforms",
        icon: Wrench,
        skills: [
            { name: "Git", image: dummyImage },
            { name: "GitHub", image: dummyImage },
            { name: "Figma", image: dummyImage },
            { name: "VS Code", image: dummyImage },
            { name: "Postman", image: dummyImage },
            { name: "Docker", image: dummyImage },
            { name: "Jest", image: dummyImage },
            { name: "Framer Motion", image: dummyImage },
        ],
        isFullWidth: true
    }
];