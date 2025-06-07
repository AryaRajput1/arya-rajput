import React from 'react'

type TimelineProps = {
    title: string
    description: string
}
const Timeline = ({ title, description }: TimelineProps) => {
    return (
        <article className='flex h-20 text-white gap-0'>
            <div className='w-1/6 pr-10 text-2xl text-blue-500 h-full border-white border-r font-bold flex items-center justify-end relative before:absolute before:content[""] before:h-3 before:w-3 before:border-2 before:bg-gray-800 before:border-white before:-right-[7px] before:rounded-full'>{title}</div>
            <div className='pl-10 flex items-center'>{description}</div>
        </article>
    )
}

export default Timeline
