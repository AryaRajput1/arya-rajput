'use client';

import { InfoAboutMe } from '@/app/constants'
import React from 'react'
import SkillCard from './SkillCard'

const Skills = () => {
    const { skills } = InfoAboutMe
    return (
        <div className='py-10'>
            <h2 className='text-4xl font-bold border-b-1 text-white my-6 py-4'>Skills</h2>
            <div className='flex flex-wrap justify-center'>
                {
                    skills.map((skill) => <SkillCard {...skill} key={skill.title} />)
                }
            </div>
        </div>
    )
}

export default Skills
