import React from 'react';
import notetaker from '../images/notetaker.png'
import meme from '../images/meme.png'
import weather from '../images/weather.png'
import quiz from '../images/javaquiz.png'
import dog from '../images/dogdaycare.png'
import background1 from '../images/pastel.jpg'

export default function About() { //portfolio
  return (
    <div>
      <div className="relative">
        <div className="absolute flex top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white text-2xl bg-purple-300/50  border-solid border-2 border-purple-300 rounded-lg">
          <h1 className='bg-purple-300/50 flex justify-between items-center p-8 border-4'>Portfolio</h1>
          <div className="columns-3">
            <div>
              <img className=" aspect-square " src={notetaker} alt='note taker app' />
              <p>note taker</p>
            </div>
            <div>
              <img className="w-full aspect-square " src={meme} alt='note taker app' />
              <p>note taker</p>
            </div>
            <div>
              <img className="w-full aspect-square " src={weather} alt='note taker app' />
              <p>note taker</p>
            </div>
            <div>
              <img className="w-full aspect-square " src={quiz} alt='note taker app' />
              <p>note taker</p>
            </div>
            <div>
              <img className="w-full aspect-square " src={dog} alt='note taker app' />
              <p>note taker</p>
            </div>
            <div>
              <img className="w-full aspect-square " src={notetaker} alt='note taker app' />
              <p>note taker</p>
            </div>
          </div>
        </div>
        <img src={background1} alt="background" />
      </div>
    </div>
  );
}
