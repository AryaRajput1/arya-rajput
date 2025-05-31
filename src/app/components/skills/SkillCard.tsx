'use client';

import { autoHoverRepeat } from '@/app/utils/inde';
import React, { useEffect } from 'react'

const SkillCard = ({ title, icon: Icon, description }) => {
    useEffect(() => {
        const intervalTimer = autoHoverRepeat('.skill-card');

        return () => {
            clearInterval(intervalTimer)
        };
    }, [])
    return (
        <div
            className="skill-card flex flex-col w-64 bg-gray-900 text-white rounded-xl shadow-xl 
    transition-transform duration-200 ease-in-out transform 
    hover:z-30 hover:scale-105 hover:shadow-2xl 
    cursor-pointer p-6 gap-4 
    -ml-40 first:ml-0 border border-gray-700/50
  "
        >
            <Icon className="w-16 h-16 text-blue-500" />
            <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
            <p className="text-sm text-gray-300 leading-snug">{description}</p>
        </div>

    )
}

export default SkillCard
