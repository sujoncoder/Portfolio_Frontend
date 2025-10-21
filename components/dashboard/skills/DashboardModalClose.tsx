import { X } from 'lucide-react'
import React from 'react'

const DashboardModalClose = ({ onClose }: { onClose?: () => void; }) => {
    return (
        <button
            onClick={onClose}
            className="absolute right -top-3 -right-3 text-gray-400 bg-white/10 border border-white/20 rounded-full p-1 hover:scale-125 cursor-pointer duration-300"
        >
            <X size={20} />
        </button>
    )
};

export default DashboardModalClose;