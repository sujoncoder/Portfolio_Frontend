import Link from "next/link";
import { usePathname } from "next/navigation";

const ActiveLink = ({ path, children }) => {
  const pathname = usePathname();
  const active = pathname === path;
  return (
    <Link href={path} className={active ? "text-[#5cc48a]" : "text-slate-100"}>
      {children}
    </Link>
  );
};

export default ActiveLink;
