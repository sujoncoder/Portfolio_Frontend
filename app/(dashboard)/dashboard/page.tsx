import DashboardHome from "@/components/dashboard/home/DashboardGreeting";
import DashboardTips from "@/components/dashboard/home/DashboardTips";

const DashboardPage = () => {
    return (
        <div className="space-y-5">
            <DashboardHome />
            <DashboardTips />
        </div>
    )
}

export default DashboardPage