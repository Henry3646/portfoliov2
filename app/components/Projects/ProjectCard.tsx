import React from 'react'
import Image from 'next/image'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import GradientText from '../TextAnimations/GradientText/GradientText';
import { Link as LinkIcon, Github } from 'lucide-react'

interface ProjectCardProps {
    title: string;
    description: string;
    techStack: string[];
    links: string[];
    images: string[];
  }

function ProjectCard({ projectInfo }: { projectInfo: ProjectCardProps }) {
  return (
    <div className='flex flex-col bg-[#111] border border-[#333] rounded-xl p-6 hover:bg-[#333] transition-all duration-300 ease-in-out justify-between'>
        <div>
            <div className='w-full flex justify-center px-10'>
                <Carousel className='w-full ' opts={{ loop: true, align: 'center' }} >
                    <CarouselContent className='w-full'>
                        {projectInfo.images.map((image, index) => (
                            <CarouselItem key={index} className='basis-1/2'>
                                <Image src={image} alt={projectInfo.title} width={400} height={225} className="w-full h-full object-cover" />
                            </CarouselItem>
                        ))}
                        {projectInfo.images.length === 0 && (
                            <CarouselItem className=''>
                                <div className='w-full h-[225px] flex items-center justify-center'>
                                    <p className='text-white text-sm opacity-40'>No images available for this project</p>
                                </div>
                            </CarouselItem>
                        )}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
            <h2 className='text-2xl font-bold text-white py-4'>{projectInfo.title}</h2>
            <p className='text-white text-sm opacity-40'>{projectInfo.description}</p>
        </div>
        <div className='flex flex-wrap gap-2 md:gap-3 mt-2 md:mt-4'>
            {projectInfo.techStack.map((tech, index) => (
                <span key={index} className='text-xs md:text-sm text-white bg-[#222] px-2 py-1 md:px-3 md:py-1.5 rounded-md'>
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
        <div className='flex gap-4 mt-6'>
            <a href={projectInfo.links[0]} target='_blank' rel="noopener noreferrer" className='text-[#74C365] hover:text-[#4ECDC4] transition-colors'>
                <Github />
            </a>
            <a href={projectInfo.links[1]} target='_blank' rel="noopener noreferrer" className='text-[#74C365] hover:text-[#4ECDC4] transition-colors'>
                <LinkIcon size={24} />
            </a>
        </div>
    </div>
  )
}

export default ProjectCard