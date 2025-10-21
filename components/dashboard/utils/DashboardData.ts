import { Code2, Palette, Server, Wrench, Globe } from "lucide-react";
import { ISkills } from "../types/DashboardTypes";

// CATEGORIES DATA
export const categories = [
    { value: 'programming', label: 'Programming', icon: Code2 },
    { value: 'web', label: 'Web', icon: Globe },
    { value: 'tools', label: 'Tools', icon: Wrench }
];

export const categorieProjects = [
    { value: 'frontend', label: 'Frontend' },
    { value: 'fullstack', label: 'Fullstack' },
    { value: 'backend', label: 'Backend' },
];


// SKILLS DATA
export const programming: ISkills = {
    title: "Programming",
    semiTitle: "Core Languages",
    icon: Code2,
    skills: [
        { name: "JavaScript", image: "https://i.ibb.co.com/Z11wK1BX/js.png" },
        { name: "TypeScript", image: "https://i.ibb.co.com/HyXw1Zj/ts.png" },
    ]
};
export const frontend: ISkills = {
    title: "Frontend",
    semiTitle: "UI Development",
    icon: Palette,
    skills: [
        { name: "React", image: "https://i.ibb.co.com/wZhYp0p9/react.png" },
        { name: "Redux", image: "https://i.ibb.co.com/HLGWZn5b/redux.png" },
        { name: "Next.js", image: "https://i.ibb.co.com/nNRPvBTy/nextjs.png" },
        { name: "TypeScript", image: "https://i.ibb.co.com/HyXw1Zj/ts.png" },
        { name: "Zod", image: "https://i.ibb.co.com/Xk2tFvmv/zod.png" },
        { name: "Tailwind CSS", image: "https://i.ibb.co.com/cKDszT11/tailwind.png" },
    ]
};
export const backend: ISkills = {
    title: "Backend",
    semiTitle: "Server & Database",
    icon: Server,
    skills: [
        { name: "Node.js", image: "https://i.ibb.co.com/r26cH7PC/node.png" },
        { name: "Go", image: "https://i.ibb.co.com/kVmvy0Nr/go.png" },
        { name: "MongoDB", image: "https://i.ibb.co.com/dyshHNV/mongodb.webp" },
        { name: "PostgreSQL", image: "https://i.ibb.co.com/qMFLgvHQ/postgres.png" },
        { name: "AWS", image: "https://i.ibb.co.com/9H13sMFW/aws.png" },
        { name: "Docker", image: "https://i.ibb.co.com/v4Tfpz39/docker.png" },
        { name: "Express", image: "https://i.ibb.co.com/7JQH6Ff9/express.png" },
        { name: "Mongoose", image: "https://i.ibb.co.com/SXXCsmkZ/mongoose.png" },
        { name: "Prisma", image: "https://i.ibb.co.com/fGD6M3y4/prisma.png" },
    ]
};
export const tools: ISkills = {
    title: "Tools",
    semiTitle: "Development Tools & Platforms",
    icon: Wrench,
    skills: [
        { name: "Git", image: "https://i.ibb.co.com/p6Phk38s/git.png" },
        { name: "GitHub", image: "https://i.ibb.co.com/NgsFgWQT/github.png" },
        { name: "VS Code", image: "https://i.ibb.co.com/JWXszQgt/vs-code.png" },
        { name: "Figma", image: "https://i.ibb.co.com/6RmCNvZc/figma.png" },
        { name: "Postman", image: "https://i.ibb.co.com/hxvh2mzR/postman.webp" },
        { name: "Docker", image: "https://i.ibb.co.com/v4Tfpz39/docker.png" },
        { name: "Jest", image: "https://i.ibb.co.com/YB9rS50R/jest.webp" },
        { name: "React Motion", image: "https://i.ibb.co.com/wrJGtRw4/motion.png" },
        { name: "NPM", image: "https://i.ibb.co.com/sMR2qwL/npm.png" },
        { name: "BUN", image: "https://i.ibb.co.com/cc933bfr/bun.png" },
        { name: "Vite", image: "https://i.ibb.co.com/cKX8hcxC/vite.png" },
        { name: "Vercel", image: "https://i.ibb.co.com/S7J876FF/vercel.webp" },
        { name: "ShadCN", image: "https://i.ibb.co.com/Jw45NS1h/shadcn.png" },
    ],
};