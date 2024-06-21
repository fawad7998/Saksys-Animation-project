import React from 'react'
import Image from 'next/image'
import img from "@/app/Images/texture.png"
import img1 from "@/app/Images/light-2.png"
import img2 from "@/app/Images/1m.jpg"
import img3 from "@/app/Images/2m.jpg"

function AboutComp() {
    return (
        <>
            <div className=''>
                <div className='flex flex-col'>
                    <div className='pt-28 flex justify-end'>
                        <Image
                            src={img}
                            layout="cover"
                            objectFit="cover"
                            objectPosition="center"
                            priority
                            className="absolute "
                        />
                        <Image
                            src={img1}
                            layout="cover"
                            objectFit="cover"
                            objectPosition="center"
                            priority
                            className="absolute"
                        />

                    </div>
                    <div>
                        <div className='flex pt-16 justify-center gap-1'>
                            <span className='text-red-800 font-bold text-lg'>
                                01//
                            </span>
                            <span className='text-white font-bold text-lg'>
                                ABOUT US
                            </span>
                        </div>

                        <div className='flex pt-10 justify-center gap-1'>
                            <span className='text-white font-bold text-[40px] w-[550px] text-center'>
                                Kimono captures All of Your
                                beautiful memories
                            </span>
                        </div>
                    </div>
                    <div className='flex gap-[100px] '>
                        <div className='w-[200px] h-[700px] pt-16 pl-12'>
                            <Image
                                src={img2}
                                layout="cover"
                                objectFit="cover"
                                objectPosition="center"
                                priority
                                className="absolute"
                            />
                        </div>
                        <div className='text-white relative text-[20px] w-[520px] pt-24 pl-32 flex flex-col gap-3 '>
                            Kimono photography Agency runs wide and deep. Across many markets, geographies & typologies, our team members
                            <span className='text-[16px] text-sm pt-5'>
                                The talent at kimono runs wide range of services. Across many markets, geographies & typologies, our team members are some of the finest people of photographers in the industry wide and deep. From Across many markets, geographies & boundaries. Hire Kimono in your event.
                            </span>
                        </div>
                        <div className='w-[200px] h-[700px] pt-16'>
                            <Image
                                src={img3}
                                layout="cover"
                                objectFit="cover"
                                objectPosition="center"
                                priority
                                className="absolute"
                            />
                        </div>

                    </div>
                    <div className=" text-white flex pt-[880px] pl-10 absolute">
                        <div className="container  mx-auto px-4 flex gap-20">
                            <div>
                                <div className="flex flex-row gap-8 items-center">
                                    <h1 className="text-6xl font-bold">100%</h1>
                                    <span className="text-lg mt-2 w-5">CUSTOMER SATISFACTION</span>
                                </div>
                                <div className="relative pt-5">
                                    <div className="w-[290px] border-b-4 border-gray-400"></div>
                                    <div className="w-[50px] border-b-4 border-red-600 absolute top-0"></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-row gap-8 items-center">
                                    <h1 className="text-6xl font-bold">350+</h1>
                                    <span className="text-lg mt-2 w-5">PHOTOGRAPHY SESSION</span>
                                </div>
                                <div className="relative">
                                    <div className="w-[290px] border-b-4 border-gray-400"></div>
                                    <div className="w-[50px] border-b-4 border-red-600 absolute top-0"></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutComp
