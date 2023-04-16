import React from 'react';
import notetaker from '../images/notetaker.png'
import meme from '../images/meme.png'
import weather from '../images/weather.png'
import quiz from '../images/javaquiz.png'
import dog from '../images/dogdaycare.png'
import science from '../images/scienceproject.png'
import background1 from '../images/pastel.jpg'

export default function About() { //portfolio
  return (
    <div>
      <div className="relative">
        <div className="absolute m-5 text-center text-white text-2xl bg-purple-300/50 border-solid border-2 border-purple-300 rounded-lg">
          <h1 className='bg-purple-300/50 text-3xl flex text-center p-8 border-4 border-purple-100'>My Projects</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-3">
          <div className='m-3 '>
            <p className='text-3xl underline underline-offset-8'>Science Project</p>
              <img className="m-2 text-center text-white text-2xl bg-purple-300/50  border-solid border-2 border-purple-300 rounded-lg p-2 aspect-square " src={science} alt='science project' />
              <a className='m-2 text-center text-white text-2xl bg-purple-300  border-solid border-2 border-purple-300 rounded-lg' href="https://github.com/sadapannord/science-project" target="_blank" rel="noreferrer">GitHub</a>
              <a className='m-2 text-center text-white text-2xl bg-purple-300  border-solid border-2 border-purple-300 rounded-lg' href="" target="_blank" rel="noreferrer">Live Site</a>
            </div>
            <div className='m-3 p-3'>
            <p className='text-3xl underline underline-offset-8'>Doggy Daycare</p>
              <img className="m-2 text-center text-white text-2xl bg-purple-300/50  border-solid border-2 border-purple-300 rounded-lg p-2 aspect-square " src={dog} alt='doggy daycare' />
              <a className='m-2 text-center text-white text-2xl bg-purple-300  border-solid border-2 border-purple-300 rounded-lg' href="https://github.com/hannahedwards/dog-daycare.git" target="_blank" rel="noreferrer">GitHub</a>
              <a className='m-2 text-center text-white text-2xl bg-purple-300  border-solid border-2 border-purple-300 rounded-lg' href="https://gentle-fjord-00735.herokuapp.com/" target="_blank" rel="noreferrer">Live Site</a>
            </div>
            <div className='m-3 p-3'>
            <p className='text-3xl underline underline-offset-8'>Note Taker</p>
              <img className="m-2 text-center text-white text-2xl bg-purple-300/50  border-solid border-2 border-purple-300 rounded-lg p-2 aspect-square " src={notetaker} alt='note taker app' />
              <a className='m-2 text-center text-white text-2xl bg-purple-300  border-solid border-2 border-purple-300 rounded-lg' href="https://github.com/hannahedwards/NoteTaker" target="_blank" rel="noreferrer">GitHub</a>
              <a className='m-2 text-center text-white text-2xl bg-purple-300  border-solid border-2 border-purple-300 rounded-lg' href=" https://sheltered-ocean-65831.herokuapp.com/" target="_blank" rel="noreferrer">Live Site</a>
            </div>
            <div className='m-3 p-3'>
            <p className='text-3xl underline underline-offset-8'>Cat Meme Generator </p>
              <img className="m-2 text-center text-white text-2xl bg-purple-300/50  border-solid border-2 border-purple-300 rounded-lg p-2 aspect-square " src={meme} alt='cat memes' />
              <a className='m-2 text-center text-white text-2xl bg-purple-300  border-solid border-2 border-purple-300 rounded-lg' href="https://github.com/Pkrysinski/cat-meme-generator" target="_blank" rel="noreferrer">GitHub</a>
              <a className='m-2 text-center text-white text-2xl bg-purple-300  border-solid border-2 border-purple-300 rounded-lg' href="https://pkrysinski.github.io/cat-meme-generator/" target="_blank" rel="noreferrer">Live Site</a>
            </div>
            <div className='m-3 p-3'>
            <p className='text-3xl underline underline-offset-8'>Weather Dashboard</p>
              <img className="m-2 text-center text-white text-2xl bg-purple-300/50  border-solid border-2 border-purple-300 rounded-lg p-2 aspect-square " src={weather} alt='weather app' />
              <a className='m-2 text-center text-white text-2xl bg-purple-300  border-solid border-2 border-purple-300 rounded-lg' href="https://github.com/hannahedwards/weather-dashboard" target="_blank" rel="noreferrer">GitHub</a>
              <a className='m-2 text-center text-white text-2xl bg-purple-300  border-solid border-2 border-purple-300 rounded-lg' href="https://hannahedwards.github.io/weather-dashboard/" target="_blank" rel="noreferrer">Live Site</a>
            </div>
            <div className='m-3 p-3'>
            <p className='text-3xl underline underline-offset-8'>JavaScript Quiz</p>
              <img className="m-2 text-center text-white text-2xl bg-purple-300/50  border-solid border-2 border-purple-300 rounded-lg p-2 aspect-square " src={quiz} alt='JavaScript quiz' />
              <a className='m-2 text-center text-white text-2xl bg-purple-300  border-solid border-2 border-purple-300 rounded-lg' href="https://github.com/hannahedwards/Javascript-quiz" target="_blank" rel="noreferrer">GitHub</a>
              <a className='m-2 text-center text-white text-2xl bg-purple-300  border-solid border-2 border-purple-300 rounded-lg' href="https://hannahedwards.github.io/Javascript-quiz/" target="_blank" rel="noreferrer">Live Site</a>
            </div>
          </div>
        </div>
        <div>
          <img className='bg-repeat  w-screen' src={background1} alt="background" />
        </div>
      </div>
    </div>
  );
}
