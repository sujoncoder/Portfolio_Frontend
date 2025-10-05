import Image from 'next/image'
import React from 'react'
import { IconPower } from '@tabler/icons-react';

const DashboardProfile = () => {
    return (
        <div className='mx-auto'>
            <div className='rounded-2xl bg-slate-500/10 py-5 px-8 flex flex-col justify-center items-center space-y-3 group'>
                <Image
                    src={"https://i.ibb.co.com/JjpyC37M/cartoon-pic.jpg"}
                    width={50}
                    height={50}
                    alt='profile-pic'
                    className='rounded-full grayscale ring-2 ring-blue-500 group-hover:grayscale-0 duration-300 '
                />

                <span className='font-mono text-slate-400 font-medium'>Sujon Sheikh</span>


                <span className='flex justify-center items-center space-x-2'>
                    <span className='text-lg text-slate-300 font-mono'>Log</span>
                    <IconPower className='text-red-400 bg-red-400/10 rounded-full p-2 w-10 h-10 hover:scale-110 cursor-pointer duration-300 active:text-red-700' />
                    <span className='text-lg text-slate-300 font-mono'>Out</span>
                </span>

            </div>
        </div>
    )
}

export default DashboardProfile