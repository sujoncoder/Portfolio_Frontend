import Link from 'next/link'


const DashboardLogo = () => {
    return (
        <div className='py-5 hidden sm:block'>
            <Link
                href="/"
                className='text-3xl text-center font-semibold font font-mono text-slate-400'>
                <span>iamsujon.</span>
            </Link>
        </div>
    )
}

export default DashboardLogo