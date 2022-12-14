import React from 'react'

const Section = () => {
    return (
        <div className='flex justify-between items-center bg-yellow-300 border-y border-black py-10 lg:py-0 max-w-6xl mx-auto'>
            <div className='px-4 sm:px-10 space-y-2'>
                <h2 className='text-2xl sm:text-4xl font-serif max-w-xl'>
                    <span className='underline decoration-black decoration-3 font-serif'>SunnyBlog</span> {""} is a place to write, read, and connect
                </h2>
                <h3 >
                    it's easy and free to post your thinking on any topic and connect with millions leaders
                </h3>
            </div>

            <h2 className='lg:text-[300px] md:text-[200px] text-[0px] mx-2 sm:mx-20'>S</h2>
        </div>
    )
}

export default Section