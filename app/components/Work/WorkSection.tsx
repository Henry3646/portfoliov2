import React from 'react'
import WorkCard from './WorkCard'

function WorkSection() {
    const employers = [
        {
            company: 'Table Trac Inc.',
            position: 'Web Developer',
            duration: 'Jul 2024 - Present',
            location: 'Minnetonka, MN',
            description: 'Developed and maintained scalable web applications and mobile solutions for enterprise-level casino management systems.',
            bulletPoints: [
                'Modernize legacy applications with React and Typescript',
                'Develop mobile solutions with React Native',
                'Improved user workflows through UI/UX enhancements',
            ],
            skills: ['React', 'React Native' , 'Typescript', 'Core UI', 'COBOL', 'PHP'],
        },
        {
            company: 'IBM',
            position: 'Full-Stack Developer - Intern',
            location: 'Poughkeepsie, NY',
            duration: 'May 2023 - Aug 2023',
            description: 'Built a full-stack web solution to track user interactions, establishing the foundation for machine learning-powered territory prospecting.',
            bulletPoints: [
                'Built full-stack features for sales analytics',
                "Created dashboards to visualize user interactions",
                'Contributed to Agile team developing machine learning foundations',
            ],
            skills: ['React', 'Node.js', 'Express', 'MongoDB', 'Docker'],
        },
    ]
  return (
    <div className='w-full flex flex-col justify-center items-center py-8'>
      {/* Title */}
        <div className='max-w-[65%] min-w-[50%] py-2'>
            <h2 className='text-4xl font-bold text-white text-left'>Work Experience</h2>
        </div>
        <div className="pt-12 max-w-[50%] min-w-[50%]">
            {/* Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {employers.map((employer, index) => (
                    <WorkCard
                        key={index}
                        employerInfo={employer}
                    />
                ))}
            </div>
        </div>
    </div>
  )
}

export default WorkSection