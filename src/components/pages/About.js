import React from 'react';
import notetaker from '../images/notetaker.png'
import meme from '../images/meme.png'
import weather from '../images/weather.png'
import quiz from '../images/javaquiz.png'
import dog from '../images/dogdaycare.png'
export default function About() { //portfolio
  return (
    <div>
      <h1 className='bg-sky-900 flex justify-between items-center p-8 border-4'>Portfolio</h1>
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

  );
}
