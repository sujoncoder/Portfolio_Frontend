import DashboardLogo from "./DashboardLogo";
import DashboardNavLinks from "./DashboardNavLinks";


const DashboardSideBar = () => {
    return (
        <div className="flex md:flex-col md:h-screen items-center py-1 md:py-0">
            <DashboardLogo />
            <hr className="text-red-400" />
            <DashboardNavLinks />
        </div>
    );
};

export default DashboardSideBar;