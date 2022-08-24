import Link from 'next/link'
import React from 'react'

interface Posts {
    
}

function Header() {
    
    return (
        <header className='p-5 '>
            <div className='flex justify-between items-center space-x-5 font-bold max-w-7xl'>
                <div>
                    <Link href="/">
                        <a>
                            <h2 className='font-extrabold cursor-pointer text-2xl'>◀▷Sunny-Blog</h2>
                        </a>
                    </Link>

                </div>
                <div>
                    <h3 className='text-white bg-green-600 px-4 py-1 rounded-full'>about</h3>
                    </div>
            </div>

        </header>
    )
};

export default Header