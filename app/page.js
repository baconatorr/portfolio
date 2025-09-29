import React from 'react'
import Image from 'next/image'
import Accordian from './Accordian'

import Bg from './Bg';


export default function Home() {
  return (
    <div className="flex justify-center w-full min-h-screen p-24">
      <div className="flex flex-col gap-16 max-w-5xl">

        {/* header */}
        <div className="flex flex-row gap-8">
          <div className="flex flex-col gap-2 text-left">
            <div className="font-inter text-5xl font-semibold py-5 italic">
              <mark>mason williams</mark>
            </div>
            <div className="font-inter text-2xl">
              student at DuPont Manual High School <br /> i like helping people learn
            </div>
            <div className="font-inter text-lg flex items-center gap-3">
              <svg
                className="w-2 h-[3px]"
                viewBox="0 0 100 1"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="0" y1="0" x2="100" y2="0" stroke="currentColor" strokeWidth="0.5" />
              </svg>
              <span>why? i love learning myself</span>
            </div>
          </div>
          <Image src="/photo2.png" alt="Mason Williams" width={200} height={200} />
        </div>

        {/* projects */}
        <div className="flex flex-col gap-2">
          <div className="font-inter font-semibold text-3xl py-2">
            <mark>heres what i've done</mark>
          </div>
          <Accordian title="satmaxxing" content="sat prep, gamified. built with next.js and supabase. softlaunch hit 500 users" video="/satmaxxing.mp4" link="https://satmaxxing.com" />
          <Accordian title="study or starve" content="study to feed your virtual pet or it dies! built for hack the track hackathon. again next.js" video="/study-or-starve.mp4" link="https://study-or-starve.com"/>
          <Accordian title="prompt injection framework" content="mathematical framework to detect prompt injections attempts using graph and information theory. still in the works."/>
        </div>

       <Bg/>

      </div>
    </div>


  )
}
