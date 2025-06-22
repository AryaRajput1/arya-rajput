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
        <div className='shadow-md relative group'>
            <Image src={imageSrc} alt='project-image' height={400} width={400} />
            <div className='right-0 transition-all duration-500 bottom-0 hidden group-hover:inset-0 group-hover:block absolute bg-gray-800/70 p-3 font-medium text-white'>
                <h1 className='text-center'>{title}</h1>
                <div className='font-normal'>{descrption}</div>
                <div className='flex gap-2 my-2'>
                    <Link href={demoLink} className='px-4 py-1 hover:bg-blue-600 bg-blue-500 cursor-pointer'>Demo</Link>
                    <Link href={githubLink} className='px-4 py-1 hover:bg-red-600 bg-red-500 cursor-pointer'>Code</Link>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
