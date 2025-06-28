import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type ProjectCardPropTypes = {
    title: string
    descrption: string
    imageSrc: string
    demoLink: string
    githubLink: string
}

const ProjectCard = ({ title, descrption, imageSrc, demoLink, githubLink }: ProjectCardPropTypes) => {
    return (
        <div className='shadow-lg m-5 hover:scale-105 duration-200 rounded-xl p-2'>
            <Image className='' src={imageSrc} alt='project-image' height={400} width={400} />
            <div className='text-white pt-2 flex flex-col gap-1'>
                <h1 className='font-bold text-xl'>{title}</h1>
                <div className='font-normal text-gray-300 text-sm'>{descrption}</div>
                <div className='flex gap-2 my-2'>
                    <Link href={demoLink} className='px-4 py-1 hover:bg-blue-600 bg-blue-500 cursor-pointer'>Demo</Link>
                    <Link href={githubLink} className='px-4 py-1 hover:bg-red-600 bg-red-500 cursor-pointer'>Code</Link>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
