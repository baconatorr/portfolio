import React from 'react'
import Image from 'next/image'
import Accordian from './Accordian'


export default function Home() {
  return (
    <div className="flex justify-center w-full min-h-screen p-4 sm:p-8 md:p-16 lg:p-24">
      <div className="flex flex-col gap-8 sm:gap-12 md:gap-16 max-w-5xl w-full animate-fade-in">

        {/* header */}
        <div className="flex flex-row gap-1 sm:gap-8 items-start">
          <div className="flex flex-col gap-0.5 sm:gap-4 text-left flex-1 min-w-0">
            <div className="font-inter text-lg sm:text-4xl md:text-5xl font-semibold py-0 sm:py-3 md:py-5 italic leading-tight transition-all duration-300 hover:tracking-wide">
              <mark className="transition-all duration-300 hover:bg-blue-100">mason williams</mark>
            </div>
            <div className="font-inter text-xs sm:text-xl md:text-2xl leading-tight transition-all duration-300 hover:font-medium">
              student at DuPont Manual High School <br /> i like helping people learn
            </div>
            <div className="font-inter text-xs sm:text-lg flex items-center gap-1 sm:gap-3 mt-0.5">
              <svg
                className="w-1 h-[2px] sm:w-2 sm:h-[3px] flex-shrink-0"
                viewBox="0 0 100 1"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="0" y1="0" x2="100" y2="0" stroke="currentColor" strokeWidth="0.5" />
              </svg>
              <span className="truncate transition-colors duration-300 hover:text-blue-600">why? i love learning myself</span>
            </div>
          </div>
          <div className="flex-shrink-0">
            <Image 
              src="/photo2.png" 
              alt="Mason Williams" 
              width={200} 
              height={200} 
              className="w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 object-cover rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover-pulse"
            />
          </div>
        </div>

        {/* about me */}
        <div className="flex flex-col gap-2">
          <div className="font-inter font-semibold text-xl sm:text-3xl py-1 sm:py-2 transition-all duration-300 hover:tracking-wide geometric-accent">
            <mark className="transition-all duration-300 hover:bg-blue-100">about me</mark>
          </div>
          <div className="font-inter text-sm sm:text-lg p-1 sm:p-2 leading-relaxed">
             <p>i've always loved learning and teaching. i found my love for teaching in 5th grade, tutoring my sister after school. today, i tutor my friends- ive helped them learn how to code, ran AP stats study sessions, and more. in my free time i like to code (obviously) and study math.</p>
             <p className="mt-3 sm:mt-4">i specifically enjoy web development because it is the most accessible software medium, allowing me to reach people all over the world. my goal in life is to help people learn, and i think software engineering is the best way to do that.</p>
             <p className="mt-3 sm:mt-4">i've recently been exploring things like machine learning and LLMs too. it's exciting to see the potential of these technologies, and maybe one day i'll be able to contribute to them.</p>
             <p className="mt-3 sm:mt-4">in 10 years, i see myself working in the startup space- im obsessed with building innovative things. i love watching my ideas grow into reality, and i think thats a great way to live.</p>
          </div>
        </div>

        {/* projects */}
        <div className="flex flex-col gap-2">
          <div className="font-inter font-semibold text-xl sm:text-3xl py-1 sm:py-2 transition-all duration-300 hover:tracking-wide geometric-accent">
            <mark className="transition-all duration-300 hover:bg-blue-100">heres what i've done</mark>
          </div>
          <Accordian title="satmaxxing" content="sat prep, gamified. built with next.js and supabase. softlaunch hit 500 users" video="/satmaxxing.mp4" link="https://satmaxxing.com" />
          <Accordian title="study or starve" content="study to feed your virtual pet or it dies! built for hack the track hackathon. again next.js" video="/study-or-starve.mp4" link="https://studyorstarve.com"/>
          <Accordian title="prompt injection framework" content="mathematical framework to detect prompt injections attempts using graph and information theory. still in the works."/>
        </div>

        {/* contact */}
        <div className="flex flex-col gap-2">
          <div className="font-inter font-semibold text-xl sm:text-3xl py-1 sm:py-2 transition-all duration-300 hover:tracking-wide geometric-accent">
            <mark className="transition-all duration-300 hover:bg-blue-100">get in touch</mark>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-8 py-2 sm:py-4">
            <a 
              href="mailto:masonhwilliams09@gmail.com"
              className="font-inter text-sm sm:text-lg transition-all duration-300 hover:text-blue-600 hover:tracking-wide underline underline-offset-4 hover:underline-offset-8"
            >
              masonhwilliams09@gmail.com
            </a>
            <a 
              href="https://www.linkedin.com/in/mason-williams-137469356/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-inter text-sm sm:text-lg transition-all duration-300 hover:text-blue-600 hover:tracking-wide underline underline-offset-4 hover:underline-offset-8"
            >
              linkedin ↗
            </a>
          </div>
        </div>

      </div>
    </div>


  )
}
