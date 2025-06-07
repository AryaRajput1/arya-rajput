import { InfoAboutMe } from '@/app/constants'
import React from 'react'
import Timeline from './Timeline'

const Education = () => {
    const { education } = InfoAboutMe

    return (
        <div className='py-10'>
            <h2 className='text-4xl font-bold border-b-1 text-white my-6 py-4'>Education</h2>
            <div className='w-full'>
                {
                    Object.keys(education).map((key) => <Timeline title={key} key={key} description={education[key]} />)
                }
            </div>
        </div>
    )
}

export default Education
