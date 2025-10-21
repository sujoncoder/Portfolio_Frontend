import React from 'react'


// BACKGROUND BLOBS
const BackgroundBlobs = ({ primary, secondary }: { primary: string, secondary: string }) => {
    return (
        <div className="absolute inset-0 -z-10 pointer-events-none">
            <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${primary}  rounded-full blur-3xl opacity-20`}></div>

            <div className={`absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr ${secondary} rounded-full blur-3xl opacity-15`}></div>
        </div>
    )
}

export default BackgroundBlobs