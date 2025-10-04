import SideBar from "@/components/sideNavbar/SideBar"

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col md:flex-row md:justify-start">
            {/* SIDEBAR LARGER SCREEN */}
            <div className="w-full sm:w-0 md:w-[330px] bg-[#1f2a39]">
                <div className="hidden sm:block md:sticky md:top-0 md:h-screen overflow-y-auto">
                    <SideBar />
                </div>
            </div>

            {/* MAIN PAGE CONTENT */}
            <div className="w-full min-h-screen bg-[#121821] px-4 md:px-10 lg:px-20 py-6 md:py-8 lg:py-10 pb-20 overflow-y-auto">
                {children}
            </div>

            {/* SIDEBAR AT THE BOTTOM FOR MOBILE MENU */}
            <div className="fixed inset-x-0 bottom-0 md:hidden bg-[#1f2a39] z-50 mt-5 py-1">
                <SideBar />
            </div>
        </div>
    )
}

export default PublicLayout