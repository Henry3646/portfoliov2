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
        className='flex flex-col justify-between'
    >
        <div>
            <div className='flex items-center justify-between'>
                <h3 className='text-2xl font-bold text-white'>{employerInfo.company}</h3>
                <span className='text-white text-sm opacity-40'>{employerInfo.duration}</span>      
            </div>
            <GradientText
                colors={['#74C365' , '#4ECDC4' , '#74C365' , '#4ECDC4' , '#74C365']}
                animationSpeed={3}
                showBorder={false}
                className='inline'
            >
                {employerInfo.position}
            </GradientText>
            <span className='text-white text-sm opacity-40'>
                {employerInfo.location}
            </span>
        </div>
        <p className='text-white text-sm mt-4 opacity-80'>
            {employerInfo.description}
        </p>
        <ul className='text-white text-sm mt-4 opacity-40'>
            {employerInfo.bulletPoints.map((bullet, index) => (
                <li key={index} className='list-disc list-inside'>{bullet}</li>
            ))}
        </ul>
        <div className='flex flex-row gap-2 mt-4'>
            {employerInfo.skills.map((skill, index) => (
                <span key={index} className='text-white text-sm bg-[#222] px-2 py-1 rounded-lg'>{skill}</span>
            ))}
        </div>
    </SpotlightCard>
  )
}

export default WorkCard