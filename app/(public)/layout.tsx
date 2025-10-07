import PublicSideBar from "@/components/public/sideNavbar/PublicSideBar"

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            {/* LARGER SCREEN - Fixed Position */}
            <aside className="hidden sm:block sm:fixed sm:left-0 sm:top-0 sm:h-screen sm:w-[300px] bg-[#1f2a39] overflow-y-auto">
                <PublicSideBar />
            </aside>

            {/* MAIN PAGE CONTENT - With left margin to avoid sidebar overlap */}
            <main className="w-full min-h-screen bg-[#121821] px-4 sm:px-20 pt-10 pb-20 sm:pb-5 sm:ml-[300px]">
                {children}
            </main>

            {/* AT THE BOTTOM FOR MOBILE MENU */}
            <nav className="fixed w-full bottom-2 left-0 right-0 px-2 sm:hidden z-50">
                <div className="bg-[#1f2a39]/50 border w-[350px] py-1 mx-auto border-neutral-700/50 backdrop-blur-md rounded-full">
                    <PublicSideBar />
                </div>
            </nav>
        </div>
    )
}

export default PublicLayout