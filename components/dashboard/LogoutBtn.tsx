import React from 'react'
import { IconLogout } from '@tabler/icons-react';


const LogoutBtn = () => {
    return (
        <button className='bg-red-500/80 hover:bg-red-500/90 duration-300 text-white px-5 py-2 rounded cursor-pointer flex space-x-2 '>
            <span> Logout</span>
            <IconLogout size={20} />
        </button>
    )
}

export default LogoutBtn