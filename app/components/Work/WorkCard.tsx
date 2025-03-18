import React from 'react'
import SpotlightCard from '../Components/SpotlightCard/SpotlightCard'
import GradientText from '../TextAnimations/GradientText/GradientText';

interface EmployerInfo {
    company: string;
    position: string;
    duration: string;
    location: string;
    description: string;
    bulletPoints: string[];
    skills: string[];
}

function WorkCard({employerInfo}: {employerInfo: EmployerInfo} ) {
  return (
    <SpotlightCard
  spotlightColor="rgba(116, 195, 101, 0.2)"
  className='flex flex-col justify-between p-4 pt-0 md:p-6 space-y-4'
>
  {/* Company Header */}
  <div className='space-y-2'>
    <div className='flex flex-col md:flex-row md:items-center justify-between'>
      <h3 className='text-xl md:text-2xl font-bold text-white'>
        {employerInfo.company}
      </h3>
      <span className='text-xs md:text-sm text-white opacity-40'>
        {employerInfo.duration}
      </span>
    </div>

    {/* Position & Location */}
    <div className=''>
      <GradientText
        colors={['#74C365', '#4ECDC4', '#74C365', '#4ECDC4', '#74C365']}
        animationSpeed={3}
        showBorder={false}
        className='text-lg md:text-xl'
      >
        {employerInfo.position}
      </GradientText>
      <span className='text-xs md:text-sm text-white opacity-40 block'>
        {employerInfo.location}
      </span>
    </div>
  </div>

  {/* Description */}
  <p className='text-sm md:text-base text-white opacity-80 leading-relaxed'>
    {employerInfo.description}
  </p>

  {/* Bullet Points */}
  <ul className='space-y-2 text-xs md:text-sm opacity-40'>
    {employerInfo.bulletPoints.map((bullet, index) => (
      <li 
        key={index} 
        className='list-disc list-inside pl-2 md:pl-0'
      >
        {bullet}
      </li>
    ))}
  </ul>

  {/* Skills */}
  <div className='flex flex-wrap gap-2 md:gap-3 mt-2 md:mt-4'>
    {employerInfo.skills.map((skill, index) => (
      <span 
        key={index} 
        className='text-xs md:text-sm text-white bg-[#222] px-2 py-1 md:px-3 md:py-1.5 rounded-md'
      >
        {skill}
      </span>
    ))}
  </div>
</SpotlightCard>
  )
}

export default WorkCard