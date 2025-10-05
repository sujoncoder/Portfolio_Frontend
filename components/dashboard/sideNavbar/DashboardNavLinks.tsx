import { IconListLetters, IconLayout2, IconChartColumn, IconShieldCode, IconDeviceGamepad3 } from '@tabler/icons-react';
import DashboardActiveLink from './DashboardActiveLink';
import LogoutBtn from '../LogoutBtn';
import DashboardProfile from './DashboardProfile';


const dashboardLinks = [
    { name: "Dashboard", href: "/dashboard", icon: IconLayout2 },
    { name: "Skills", href: "/dashboard/skills", icon: IconShieldCode },
    { name: "Projects", href: "/dashboard/projects", icon: IconDeviceGamepad3 },
    { name: "Blogs", href: "/dashboard/blogs", icon: IconListLetters },
    { name: "Stats", href: "/dashboard/stats", icon: IconChartColumn },
];

const DashboardNavLinks = () => {
    return (
        <ul className="flex flex-row md:flex-col justify-between gap-0 sm:gap-2 md:my-4">
            {dashboardLinks.map(({ href, icon: Icon, name }) => (
                <DashboardActiveLink path={href} key={name}>
                    <li className="flex items-center gap-5 px-3 sm:px-7 py-2 group">
                        <Icon className="w-8 h-8 sm:w-8 sm:h-8 group-hover:scale-125 duration-300" />
                        <p className="hidden md:block text-lg">{name}</p>
                    </li>
                </DashboardActiveLink>
            ))}


            <div
                className="hidden sm:flex absolute bottom-10 inset-x-0 justify-center items-center mt-8">
                <DashboardProfile />
            </div>
        </ul>
    );
};

export default DashboardNavLinks;