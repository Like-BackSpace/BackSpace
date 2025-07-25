import {CheckCircle2} from "lucide-react";
import {pricingOptions} from "../constants/index.jsx";


function Pricing() {
    return (
        <div className='mt-20 '>
            <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide font-bold text-neutral-200 '>
                Pricing
            </h2>
            <div className='flex flex-wrap mr-30 ml-30'>
                {pricingOptions.map((option, index) => (
                    <div key={index} className='w-full sm:w-1/2 lg:w-1/3 p-2 '>
                        <div className='p-10 border border-neutral-700 rounded-xl '>
                            <p className='text-4xl mb-8 font-bold text-neutral-300'>
                                {option.title}
                                {option.title === 'Pro' && (
                                    <span
                                        className='bg-gradient-to-r from-fuchsia-600 to-pink-800 text-transparent
                                        bg-clip-text text-xl ml-2 mb-4 '> {""}
                                        (Most Popular)
                                   </span>
                                )}
                            </p>
                            <p className='mb-8 '>
                                <span className='text-5xl mt-6 mr-2'>{option.price}</span>
                                <span className='text-neutral-400 tracking-tight'>/Month</span>
                            </p>
                            <ul>
                                {option.features.map((feature,index)=>(
                                    <li key={index} className='mt-8 flex items-center'>
                                        <CheckCircle2/>
                                        <span className='ml-2'>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <a className='inline-flex justify-center items-center text-center w-full mt-20
                            h-12 p-5 tracking-tight font-bold text-xl hover:bg-gradient-to-r from-pink-700 to-fuchsia-800
                             rounded-lg border border-fuchsia-900 transition duration-200 '>Subscribe</a>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Pricing