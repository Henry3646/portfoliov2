import React from 'react'
import GradientText from '../TextAnimations/GradientText/GradientText'
import SkillCard from './SkillCard'
import Typescript from '../Icons/Typescript';
import ReactJS from '../Icons/ReactJS';
import NextJS from '../Icons/NextJS';
import Tailwind from '../Icons/Tailwind';
import Supabase from '../Icons/Supabase';
import MongoDB from '../Icons/MongoDB';
import Git from '../Icons/Git';
import NodeJS from '../Icons/NodeJS';

function SkillsSection() {
    const skills = [
        // Frontend Development
        {
          title: "TypeScript",
          subtitle: "Strongly typed JavaScript",
          icon: <Typescript />,
          iconBackground: "#3178C6" // TypeScript blue
        },
        {
          title: "React.js",
          subtitle: "Frontend library",
          icon: <ReactJS />,
          iconBackground: "#61DAFB" // React cyan
        },
        {
          title: "Next.js",
          subtitle: "React framework",
          icon: <NextJS />,
          iconBackground: "#000000" // Next.js black
        },
        {
          title: "Tailwind CSS",
          subtitle: "Utility-first CSS",
          icon: <Tailwind />,
          iconBackground: "#06B6D4" // Tailwind cyan
        },
      
        // Backend & Database
        {
          title: "Supabase",
          subtitle: "Backend-as-a-Service",
          icon: <Supabase />,
          iconBackground: "#3ECF8E" // Supabase green
        },
        {
          title: "Node.js",
          subtitle: "Design & prototyping",
          icon: <NodeJS />,
          iconBackground: "#68A063" // Figma purple
        },
        {
          title: "MongoDB",
          subtitle: "NoSQL database",
          icon: <MongoDB />,
          iconBackground: "#47A248" // MongoDB green
        },
      
        // Mobile Development
        {
          title: "React Native",
          subtitle: "Cross-platform mobile",
          icon: <ReactJS />,
          iconBackground: "#61DAFB" // React Native cyan
        },
      
        // Tools & Infrastructure
        {
          title: "Git",
          subtitle: "Version control",
          icon: <Git />,
          iconBackground: "#F05032" // Git orange
        },
      ];

  return (
    <div className=' w-full flex flex-col justify-center items-center py-18'>
        {/* Title */}
        <div className='max-w-[65%] min-w-[50%] py-6'>
            <h2 className='text-4xl font-bold text-white text-left'>Current Technologies</h2>
            <span className='flex flex-row'>
                <GradientText
                    colors={['#74C365' , '#4ECDC4' , '#74C365' , '#4ECDC4' , '#74C365']}
                    animationSpeed={3}
                    showBorder={false}
                    className='inline'
                >
                    Always evolving • 
                </GradientText>
                <span className='opacity-50 text-white text-lg'>
                    &nbsp;Constantly learning new ways to build better software (currently obsessed with Next.js)
                </span>
            </span>
        </div>
        {/* Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[65%] min-w-[50%] py-6">
            {skills.map((skill, index) => (
                <SkillCard
                  key={index}
                  title={skill.title}
                  subtitle={skill.subtitle}
                  icon={skill.icon}
                  iconBackground={skill.iconBackground}
                />
            ))}
        </div>
    </div>
  )
}

export default SkillsSection