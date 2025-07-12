import React from 'react'
import {testimonials} from "../constants/index.jsx";


const Testimonials = () => {
    return (
        <div className='border-t  border-neutral-700 mt-20 tracking-wide '>
            <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center my-10
lg:my-20 font-bold text-neutral-300 '>BackSpaced, Not Erased:
                <span className=' bg-gradient-to-r from-pink-800 to-fuchsia-900 text-transparent bg-clip-text'>
     {""} What They Said</span>
            </h2>
            <div className='flex flex-wrap justify-center ml-30 mr-30'>
                {testimonials.map((testimonials,index )=>(
                    <div key={index} className='w-full sm:w-1/2 lg:w-1/3 px-4 py-2'>
                        <div className='bg-neutral p-6 text-md border border-neutral-700 rounded-xl font-thin'>
                            <p>{testimonials.text}</p>
                            <div className='flex mt-8 items-start'>
                                <img src={testimonials.image} alt='testimonial' className='h-10 w-10 rounded-full mr-4'/>
                                <div>
                                    <h5 className='font-bold text-neutral-200'>{testimonials.user}</h5>

                                    <p className='text-neutral-200'>{testimonials.company}</p>
                                </div>

                            </div>
                        </div>

                    </div>
                ))}
            </div>


        </div>
    )
}

export default Testimonials