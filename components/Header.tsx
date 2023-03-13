import Link from 'next/link'
import React from 'react'
import BreadCrumb from './BreadCrumb'

function Header() {
    
    return (
        <header className='p-5 relative'>
            {/* <BreadCrumb /> */}
            <div className='flex justify-between items-center space-x-5 font-bold max-w-7xl mt-3'>
                <div>
                    <Link href="/">
                        <a>
                            <h2 className='font-extrabold cursor-pointer text-2xl'>◀▷Kame-Blog</h2>
                        </a>
                    </Link>

                </div>
                <div>
                    <Link href="https://kamei-ryosuke2.vercel.app/">
                        <div className='text-white bg-green-600 hover:bg-green-400 cursor-pointer px-4 py-1 rounded-full'>contact</div>
                    </Link>
                </div>
            </div>

        </header>
    )
};

export default Header