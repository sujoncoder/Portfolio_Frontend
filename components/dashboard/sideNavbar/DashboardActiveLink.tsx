"use client"

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";


const DashboardActiveLink = ({ path, children }: {
    path: string;
    children: React.ReactNode
}) => {
    const pathname = usePathname();
    const active = pathname === path;
    return (
        <Link href={path} className={active ?
            "text-[#5cc48a] bg-[#5cc48a]/20 sm:rounded-xl rounded-full duration-300"
            :
            "text-slate-400 sm:bg-slate-400/5 sm:rounded-xl"}>
            {children}
        </Link>
    );
};

export default DashboardActiveLink;