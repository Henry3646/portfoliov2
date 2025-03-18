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
            skills: ['React', 'React Native' , 'Typescript', 'Core UI', 'COBOL', 'PHP', 'SOAP APIs'],
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
            skills: ['React', 'Node.js', 'Express', 'MongoDB', 'Docker', 'REST APIs', ],
        },
    ]
  return (
    <div className='w-full flex flex-col justify-center items-center py-8'>
      {/* Title */}
        <div className='w-full md:w-[827px]  py-2'>
            <h2 className=' text-3xl md:text-4xl font-bold text-white text-left ml-4 md:ml-0'>Work Experience</h2>
        </div>
        <div className="w-full max-w-full md:max-w-3xl lg:max-w-4xl pt-8 md:pt-12">
            <div className="grid grid-cols-1 px-4 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
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