import React from 'react'
import {features} from "../constants/index.jsx";


const Feature = () => {
    return (
        <div className='relative border-b border-b-neutral-700 min-h-[800px] '>
            <div className='text-center p-3'>

                <h2 className='text-3xl sm:text-5xl lg:text-6xl mt-11 lg:mt-20 tracking-wide'> Easily build
                    <span className='bg-gradient-to-r from-fuchsia-600 to-pink-800 text-transparent bg-clip-text'> your Code</span>
                </h2>
            </div>

            <div className='flex flex-wrap mt-10 lg:mt-20 ml-30 mr-30'>
                {features.map((feature, index) => (
                    <div key={index} className='w-full sm:1/2 lg:w-1/3 '>
                        <div className='flex mr-3 ml-3 mb-10 border-1 rounded-lg border-neutral-700 space-x-4'>
                            <div
                                className='flex mx-6 h-10 w-10  bg-neutral-900 text-lime-500 justify-center items-center rounded-full'>
                                {feature.icon}
                            </div>
                            <div>
                                <h5 className='mt-1 mb-6 text-xl'>{feature.text}</h5>
                                <p className='text-md  mb-20 text-neutral-500 '>{feature.description}</p>
                            </div>
                        </div>
                    </div>))}
            </div>
        </div>)
}

export default Feature