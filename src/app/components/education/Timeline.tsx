import React from 'react'

type TimelineProps = {
    title: string
    description: string
}
const Timeline = ({ title, description }: TimelineProps) => {
    return (
        <>
            <article className='h-20 text-white gap-0 hidden lg:flex'>
                <div className='w-1/6 pr-10 text-2xl text-blue-500 h-full border-white border-r font-bold flex items-center justify-end before:absolute before:content[""] before:h-3 before:w-3 before:border-2 before:bg-gray-800 before:border-white before:-right-[7px] before:rounded-full relative'>{title}</div>
                <div className='pl-10 flex items-center'>{description}</div>
            </article>
            <article className='text-white m-10 lg:hidden'>
                <div className='text-xl font-bold text-blue-500 before:absolute before:content[""] before:h-3 before:w-3 before:border-2 before:bg-blue-500 before:border-none before:-left-5 before:top-2 before:rounded-full relative'>{title}</div>
                <div className=''>{description}</div>
            </article>
        </>
    )
}

export default Timeline
