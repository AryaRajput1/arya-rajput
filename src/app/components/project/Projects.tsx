import React from 'react'
import ProjectCard from './ProjectCard'
import { InfoAboutMe } from '@/app/constants'

const Projects = () => {
    const { projects } = InfoAboutMe
    return (
        <div id='projects'>
            <h2 className='text-4xl font-bold border-b-1 text-white my-6 py-4'>Projects</h2>
            <div className='flex flex-wrap flex-col md:flex-row items-center md:items-start'>
                {
                    projects.map(project => <ProjectCard {...project} key={project.title} />)
                }
            </div>
        </div>
    )
}

export default Projects
