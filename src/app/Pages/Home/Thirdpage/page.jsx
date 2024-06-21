import React from 'react'
import img from "@/app/Images/texture-2.png"
import Image from 'next/image'
import Card1 from '@/app/Components/Card1/page'
function ThirdPage() {
    return (
        <>
            <section className=''>
                <div className='px-14 py-20 flex'>
                    <div>
                        <div className=''>
                            <span className='text-red-800 font-bold text-lg'>
                                01//
                            </span>
                            <span className='text-white font-bold text-lg'>
                                ABOUT US
                            </span>
                        </div>
                        <div className='w-[500px]'>
                            <span className='text-white  font-bold text-[40px] text-center'>
                                Our Photography
                                Services
                            </span>
                        </div>
                    </div>

                    <div className='text-gray-300 pt-12 text-[20px]'>
                        we’re deeply passionate <span className='text-white '>catch your lovely memories in cameras</span> and Convey your love for every moment of life as a whole.
                    </div>
                </div>
                <div>
                    <Image
                        src={img}
                        layout="cover"
                        objectFit="cover"
                        objectPosition="center"
                        priority
                        className="absolute pt-[160px]"
                    />
                    <div className='px-14'>

                        <Card1 />
                    </div>
                </div>
            </section>
        </>
    )
}

export default ThirdPage
