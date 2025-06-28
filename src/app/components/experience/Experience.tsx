'use client';

import { InfoAboutMe } from '@/app/constants'
import Image from 'next/image'
import React, { useState } from 'react'

const Experience = () => {
    const { experience: { title, subtitle, responsibility } } = InfoAboutMe
    const [showMore, setShowMore] = useState(true)

    const responsibilities = showMore ? responsibility.slice(0, 4): responsibility;

    const buttonMessage = showMore ? '...Show more' : '...Show less'

    return (
        <div className='py-10' id='experience'>
            <h2 className='text-4xl font-bold border-b-1 text-white my-6 py-4'>Experience</h2>
            <div id='about' className='flex justify-between text-white py-4 gap-10 flex-col md:flex-row items-center md:items-start mx-10 md:mx-0'>
                <div className=''>
                    <Image src="/infosys.jpg" width={500} height={900} alt='Infosys building image' />
                </div>
                <div className='flex flex-col gap-6 md:w-2/3 w-full'>
                    <h2 className='text-3xl font-bold'>{title}</h2>
                    <h3 className='text-xl font-semibold'>{subtitle}</h3>
                    <ul className='list-disc px-5'>
                        {
                            responsibilities.map((resp, index) => <li key={index}>{resp}</li>)
                        }
                        <button className='text-blue-500' onClick={() => setShowMore(prev => !prev)}>{buttonMessage}</button>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Experience
