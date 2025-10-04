import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const ActiveLink = (
  { path,
    children
  }: {
    path: any;
    children: React.ReactNode
  }) => {
  const pathname = usePathname();
  const active = pathname === path;
  return (
    <Link href={path} className={active ? "text-[#5cc48a]" : "text-slate-100"}>
      {children}
    </Link>
  );
};

export default ActiveLink;
