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
        'https://github.com/Henry3646/gitgains'
      ],
      images: [
        '/images/gg-home.png',
        '/images/gg-profile.png',
        '/images/gg-aworkout.png',
        '/images/gg-vworkout.png',
      ]
    },
    {
      title: 'MyMeet',
      description: 'MyMeet is a React Native app (in development) for car and motorcycle enthusiasts to organize, track, and discover local meets. Built with Supabase, it offers event creation, RSVPs, real-time updates, and social sharing through profiles and media. Designed to unite automotive communities, it will expand with in-app messaging and tailored event suggestions.',
      techStack: ['React Native', 'Expo', 'Supabase', 'TypeScript'],
      links: [

      ],
      images: [

      ]
    },
    {
      title: 'Bubble Tasks',
      description: 'A delightful task management app that turns your to-dos into playful bubbles! Manage tasks through satisfying interactions with physics-based bubbles that make productivity fun.',
      techStack: ['React Native', 'Expo', 'Supabase', 'TypeScript'],
      links: [
        'https://github.com/Henry3646/bubbleTasks'
      ],
      images: [
        '/images/bt-home.png',
        '/images/bt-view.png',
        '/images/bt-add.png',
      ]
    }
  ]
  return (
    <div className='w-full flex flex-col justify-center items-center py-8'>
      {/* Title */}
      <div className='w-full md:w-[827px]  py-2'>
        <h2 className=' text-3xl md:text-4xl font-bold text-white text-left ml-4 md:ml-0'>Projects</h2>
      </div>
      <div className='w-full max-w-full md:max-w-3xl lg:max-w-4xl pt-8 md:pt-12'>
        {/* Grid Container */}
        <div className='grid grid-cols-1 px-4 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8'>
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