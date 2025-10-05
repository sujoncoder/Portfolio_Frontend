import PublicSideBar from "@/components/public/sideNavbar/PublicSideBar"
import Container from "@/utils/max-width"

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col md:flex-row">
            {/* PublicSideBar LARGER SCREEN */}
            <div className="w-full sm:w-[300px] bg-[#1f2a39]">
                <div className="hidden sm:block sm:sticky sm:h-screen">
                    <PublicSideBar />
                </div>
            </div>


            {/* MAIN PAGE CONTENT */}
            <div className="w-full min-h-screen bg-[#121821] px-4 sm:px-20 pt-10 pb-20 sm:pb-5 overflow-y-auto">
                {children}
            </div>


            {/* PublicSideBar AT THE BOTTOM FOR MOBILE MENU */}
            <div className="fixed w-full mx-auto bottom-2 rounded-full md:hidden bg-[#1f2a39]/50 border border-neutral-700/50 backdrop-blur-md">
                <PublicSideBar />
            </div>
        </div>
    )
}

export default PublicLayout