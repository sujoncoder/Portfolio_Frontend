import React from 'react';
import { Plus, Search } from 'lucide-react';


interface TableControllerProps {
    searchQuery: string;
    setSearchQuery: (v: any) => void;
    categoryFilter: string;
    setCategoryFilter: (v: any) => void;
};

// TABLE CONTROLLER COMPONENT
const TableController = ({ searchQuery, setSearchQuery, categoryFilter, setCategoryFilter }: TableControllerProps) => {
    return (
        <div className="bg-slate-500/10 p-5 rounded-xl my-5 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search projects or tech..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-white/5  rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/10"
                />
            </div>

            {/* Filter and Add Button */}
            <div className="flex justify-center items-center gap-3 w-full sm:w-auto">
                {/* Cute Dropdown - No Arrow, Centered Text */}
                <select
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                    className="flex-1 sm:flex-none px-3 py-2 bg-gradient-to-r from-white/5 to-white/10 border border-white/20 rounded-full text-white font-medium text-center focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 cursor-pointer hover:bg-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-xl shadow-lg appearance-none"
                    style={{
                        backgroundImage: 'none',
                        textAlignLast: 'center'
                    }}
                >
                    <option className='bg-slate-800 text-white' value="all">✨ All Categories</option>
                    <option className='bg-slate-800 text-white' value="frontend">🎨 Frontend</option>
                    <option className='bg-slate-800 text-white' value="fullstack">⚡ Fullstack</option>
                </select>

                {/* Cute Add Button */}
                <button className="group relative px-3 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 border border-blue-500/50 hover:border-blue-500/50 rounded-full transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 active:scale-95 backdrop-blur-xl overflow-hidden">
                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>

                    {/* Button Content */}
                    <div className="relative flex items-center gap-2">
                        <Plus className="w-4 h-4 text-blue-400 group-hover:rotate-90 transition-transform duration-300" />
                        <span className="hidden sm:inline text-slate-100">Add New</span>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default TableController