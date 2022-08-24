import Head from 'next/head'
import React, { FC } from 'react'
import { siteConfig } from '../site.config'
import { layoutChildren } from '../types/type'
import Footer from './Footer'
import Header from './Header'
import Section from './Section'

const Layout:FC<layoutChildren> = ({ children }) => {
    return (
        <div className=" min-h-screen mt-4 max-w-6xl mx-auto">
            <Head>
                <title>{siteConfig.title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            
            <main className='w-full pb-12 text-center'>
                {children}
            </main>

            <Footer /> 
        </div>
    )
}

export default Layout