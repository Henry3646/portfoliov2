import React from 'react'
import ProjectCard from './ProjectCard'

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  links: string[];
  images: string[];
}

function ProjectsSection() {
  const projects: ProjectCardProps[] = [
    {
      title: 'gitGains',
      description: 'gitGains is a minimalist workout tracker designed for lifters who just want to log their progress—no fluff, no distractions. Built for those who know their routine, providing a straightforward way to track lifts and focus on gains.',
      techStack: ['React Native', 'Expo', 'Supabase', 'TypeScript'],
      links: [

      ],
      images: [

      ]
    },
    {
      title: 'MyMeet',
      description: 'gitGains is a minimalist workout tracker designed for lifters who just want to log their progress—no fluff, no distractions. Built for those who know their routine, providing a straightforward way to track lifts and focus on gains.',
      techStack: ['React Native', 'Expo', 'Supabase', 'TypeScript'],
      links: [

      ],
      images: [

      ]
    },
  ]
  return (
    <div className='w-full flex flex-col justify-center items-center py-8'>
      {/* Title */}
      <div className='max-w-[65%] min-w-[50%] py-2'>
        <h2 className='text-4xl font-bold text-white text-left'>Projects</h2>
      </div>
      <div className='pt-12 max-w-[50%] min-w-[50%]'>
        {/* Grid Container */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {projects.map((project: ProjectCardProps , index) => (
            <ProjectCard
              key={index}
              projectInfo={project}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectsSection