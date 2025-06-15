'use client';

import { autoHoverRepeat } from '@/app/utils/inde';
import React, { ElementType, useEffect } from 'react'

type SkillCardType = {
    title: string
    icon: ElementType
    description: string
}
const SkillCard = ({ title, icon: Icon, description }: SkillCardType) => {
    useEffect(() => {
        const intervalTimer = autoHoverRepeat('.skill-card');

        return () => {
            clearInterval(intervalTimer)
        };
    }, [])
    return (
        <div
            className="skill-card flex md:flex-col flex-row md:w-64 w-78 h-60 bg-gray-900 text-white rounded-xl shadow-xl 
    transition-transform duration-200 ease-in-out transform 
    hover:z-30 hover:scale-105 hover:shadow-2xl 
    cursor-pointer p-6 gap-4
    md:-ml-40 ml-0 -mt-40 md:mt-0 first:ml-0 first:mt-0 border border-gray-700/50
  "
        >
            <Icon className="w-16 h-16 text-blue-500" />
            <div className='w-1/2 md:w-full'>
                <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
                <p className="text-sm text-gray-300 leading-snug">{description}</p>
            </div>
        </div>

    )
}

export default SkillCard
