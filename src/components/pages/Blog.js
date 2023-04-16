import React from 'react';
import resume from '../resume/Resume.pdf'
import background1 from '../images/pastel.jpg'

export default function Blog() {//resume
  return (
    <div>
      <div className="relative">
        <a className='absolute flex top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white text-2xl bg-purple-300/50  border-solid border-2 border-purple-300 rounded-lg' 
        href={resume} download>Click to download PDF</a>
        <div>
          <img className='bg-no-repeat bg-cover h-screen w-screen' src={background1} alt="background" />
        </div>
      </div>
    </div>
  )
}