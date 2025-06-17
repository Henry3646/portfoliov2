'use client'

import React from 'react'
import Squares from './components/Backgrounds/Squares/Squares'
import ShinyText from './components/TextAnimations/ShinyText/ShinyText'
import { Download, Mail } from 'lucide-react'
import FadeContent from './components/Animations/FadeContent/FadeContent'
import Socials from './components/Socials'
import Navbar from './components/Navbar'
import SkillsSection from './components/Skills/SkillsSection'
import ProjectsSection from './components/Projects/ProjectsSection'
import WorkSection from './components/Work/WorkSection'
import Footer from './components/Footer'
import Contact from './components/Contact/Contact'
function page() {
  const smoothScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Adjust this value based on your header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
  
      // Update URL without jumping
      window.history.pushState({}, '', `#${id}`);
    }
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv/HenryArlt_Resume.pdf';
    link.download = 'HenryArlt_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="w-screen h-screen" id='home'>
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
  <FadeContent blur={false} duration={1000} easing='ease-in-out' initialOpacity={0} >
    <div className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center max-w-full md:max-w-[80%] lg:max-w-[65%]">
        Building{' '}
        <span className="inline font-bold text-[#74C365]">
          web apps
        </span>
        ,{' '}
        <span className="inline font-bold text-[#74C365]">
          mobile experiences
        </span>
        , and{' '}
        <span className="inline md:inline font-bold text-[#74C365]">
          everything
        </span>{' '}
        in between
      </h2>

      {/* Subtitle */}
      <p className="text-white mt-4 text-base md:text-lg text-center max-w-[90%] md:max-w-[70%] lg:max-w-[50%]">
        I{"'"}m Henry, a US-based developer specializing in React for full-stack web apps and cross-platform mobile experiences with React Native.
      </p>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row items-center gap-4 mt-6 md:mt-8">
        <button 
          onClick={() => smoothScrollTo('projects')}
        className='bg-[#111] px-6 py-3 md:px-4 md:py-2 rounded-lg border-[#222] border hover:bg-[#222] transition-all duration-300 ease-in-out w-full md:w-auto'>
          <ShinyText text='View My Work' disabled={false} speed={2} className="text-sm md:text-base"/>
        </button>
        
        <button 
          onClick={downloadCV}
          className='px-6 py-3 md:px-4 md:py-2 rounded-lg hover:bg-[#222] transition-all duration-300 ease-in-out w-full md:w-auto text-center'>
          <Download size={20} className='inline-block mr-2' color='#74C365'/>
          <span className="text-sm md:text-base">Download CV</span>
        </button>

        <button 
          onClick={() => smoothScrollTo('contact')}
          className='px-6 py-3 md:px-4 md:py-2 rounded-lg hover:bg-[#222] transition-all duration-300 ease-in-out w-full md:w-auto text-center'>
          <Mail size={20} className='inline-block mr-2' color='#74C365'/>
          <span className="text-sm md:text-base">Contact Me</span>
        </button>
        
        <div className="mt-4 md:mt-0">
          <Socials />
        </div>
      </div>
    </div>
  </FadeContent>
</div>
      <section id='skills'>
        <FadeContent blur={false} duration={1000} easing='ease-in-out' initialOpacity={0}>
          <SkillsSection />
        </FadeContent>
      </section>

      <section id='experience'>
        <FadeContent blur={false} duration={1000} easing='ease-in-out' initialOpacity={0}>
          <WorkSection />
        </FadeContent>
      </section>

      <section id='projects'>
        <FadeContent blur={false} duration={1000} easing='ease-in-out' initialOpacity={0}>
          <ProjectsSection />
        </FadeContent>
      </section>
      
      <section id='contact'>
        <FadeContent blur={false} duration={1000} easing='ease-in-out' initialOpacity={0}>
          <Contact />
        </FadeContent>
      </section>

      <Footer />
    </section>
  )
}

export default page