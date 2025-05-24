import { ArrowDown } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import FloatingText from '../floatingText/FloatingText'
import StatBar from '../stats/StatBar'

const Hero = () => {
    return (
        <div className='h-screen'>
            <div className='flex flex-col mt-10 items-center md:w-2/3'>
                <div className='md:my-30 my-2 flex flex-col gap-4'>
                    <div className='w-40 h-2 bg-white' aria-hidden></div>
                    <div className='text-white'>
                        <h1 className='text-6xl font-semibold leading-20'>A Web Developer</h1>
                    </div>
                    <div className='text-white'>
                        <FloatingText className='top-20 right-20' key={'Arya'}> Arya</FloatingText>
                        <FloatingText className='top-75 right-20' key={'Rajput'}> Rajput</FloatingText>
                        full‑stack JavaScript developer crafting fast, scalable web apps with React, Next.js, and Node.js. Check out my work and let’s build something great together.
                    </div>
                    <div className='mt-4'>
                        <Link href={'#about'} className='bg-blue-700 inline-block p-4 rounded-full animate-bounce'><ArrowDown className='text-white' height={40} width={40} /></Link>
                    </div>
                </div>
            </div>
            <StatBar/>
        </div>
    )
}

export default Hero
