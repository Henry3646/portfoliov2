'use client'

import React from 'react'
import Squares from './components/Backgrounds/Squares/Squares'
import ShinyText from './components/TextAnimations/ShinyText/ShinyText'
import { Download } from 'lucide-react'
import FadeContent from './components/Animations/FadeContent/FadeContent'
import Socials from './components/Socials'
import Navbar from './components/Navbar'
import SkillsSection from './components/Skills/SkillsSection'
import ProjectsSection from './components/Projects/ProjectsSection'
import WorkSection from './components/Work/WorkSection'
import Footer from './components/Footer'
function page() {
  return (
    <section className="w-screen h-screen">
      {/* Background */}
      <div className="w-full h-full absolute z-[-1]">
        <Squares
          speed={0.5}
          squareSize={40}
          direction='diagonal'
          borderColor='#222'
          hoverFillColor='#222'
        />
         
      </div>
      {/* Socials */}
      
      <Navbar />
      <div className="w-full h-full flex justify-center items-center">
      <FadeContent blur={false} duration={1000} easing='ease-in-out' initialOpacity={0}>
        <div className="flex flex-col items-center justify-center">
          {/* Title */}
          <h2 className="text-6xl font-bold text-white text-center max-w-[65%] ">
            Building <div className='font-bold text-[#74C365] text-6xl inline'>web apps</div>, <div className='font-bold text-[#74C365] text-6xl inline'>mobile experiences</div>, and <div className='font-bold text-[#74C365] text-6xl inline'>everything</div> in between
          </h2>
          <p className="text-white mt-2">
            I&apos;m Henry, a US-based developer specializing in React for full-stack web apps and cross-platform mobile experiences with React Native.
          </p>
          {/* Buttons */}
          <div className="flex flex-row items-center gap-4">
              <button className='bg-[#111] px-4 py-2 rounded-lg mt-4 border-[#222] border hover:bg-[#222] transition-all duration-300 ease-in-out'>
                <ShinyText text='View My Work' disabled={false} speed={2}/>
              </button>
              <button className='px-4 py-2 rounded-lg mt-4 hover:bg-[#222]  transition-all duration-300 ease-in-out'>
                <Download size={24} className='inline-block mr-2' color='#74C365'/>
                Download CV
              </button>
              <Socials />
          </div>

        </div>
      </FadeContent>
      </div>

      <FadeContent blur={false} duration={1000} easing='ease-in-out' initialOpacity={0}>
        <SkillsSection />
      </FadeContent>

      <FadeContent blur={false} duration={1000} easing='ease-in-out' initialOpacity={0}>
        <WorkSection />
      </FadeContent>

      <FadeContent blur={false} duration={1000} easing='ease-in-out' initialOpacity={0}>
        <ProjectsSection />
      </FadeContent>

      <Footer />
    </section>
  )
}

export default page