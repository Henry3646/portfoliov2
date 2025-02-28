import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import GradientText from '../TextAnimations/GradientText/GradientText';

interface ProjectCardProps {
    title: string;
    description: string;
    techStack: string[];
    links: string[];
    images: string[];
  }

function ProjectCard({ projectInfo }: { projectInfo: ProjectCardProps }) {
  return (
    <div className='flex flex-col bg-[#111] border border-[#333] rounded-xl p-6 hover:bg-[#222] transition-all duration-300 ease-in-out'>
        <div className='w-full flex justify-center px-10'>
            <Carousel className='w-full ' >
                <CarouselContent className='w-full aspect-video'>
                    <CarouselItem>...</CarouselItem>
                    <CarouselItem>...</CarouselItem>
                    <CarouselItem>...</CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
        <h2 className='text-2xl font-bold text-white'>{projectInfo.title}</h2>
        <p className='text-white text-sm opacity-40'>{projectInfo.description}</p>
        <div className='flex flex-row gap-2 mt-4'>
            {projectInfo.techStack.map((tech, index) => (
                <span key={index} className='text-white text-sm bg-[#222] px-2 py-1 rounded-lg'>
                    <GradientText
                        colors={['#74C365', '#74C365' , '#4ECDC4' , '#74C365', '#74C365']}
                        animationSpeed={6}
                        showBorder={false}
                        className='inline'
                    >
                        {tech}
                    </GradientText>
                </span>
            ))}
        </div>
    </div>
  )
}

export default ProjectCard