import React from 'react'
import Nav from "./Nav.jsx";
import Video1 from '../assets/Video1.mp4'
import Video2 from '../assets/Video2.mp4'


const Hero = () => {
    return (
        <div className='flex flex-col items-center mt-6 lg:mt-30 '>
            <h1 className='text-4xl font-bold sm:text-6xl lg:text-7xl text-center tracking-wide text-neutral-200'>BackSpace build tools
                <span className='block bg-gradient-to-r from-fuchsia-700 to-pink-700 text-transparent bg-clip-text mt-3 mb-5'> for Developers</span>
            </h1>
<p className='text-center text-lg text-neutral-600 max-w-5xl'> BackSpace crafts powerful tools tailored for modern developers. From debugging utilities to workflow boosters, we
    <span className='block '>help you ship faster, fix smarter, and level up your dev game — one tool at a time.</span>
</p>
            <div className='flex justify-center my-10'>
                <a href='#' className='bg-gradient-to-r from text-lime-600 to-pink-900 py-3 px-4 rounded-md mx-4 font-bold'>
                    Start for Free
                </a>
                <a href='#' className='py-3 mx-3 rounded-md border p-3 hover:'>Documentation</a>
            </div>
            <div className='flex justify-center mt-6 ml-40 mr-40'>
                <video src={Video1}  autoPlay loop muted className='w-1/2 rounded-lg shadow border-b-cyan-500 shadow-fuchsia-600 mx-3 my-4'/>
                <video src={Video2} autoPlay loop muted className='w-1/2 rounded-lg shadow border-b-cyan-500 shadow-fuchsia-600 mx-3 my-4'/>
            </div>
        </div>
    )
}

export default Hero