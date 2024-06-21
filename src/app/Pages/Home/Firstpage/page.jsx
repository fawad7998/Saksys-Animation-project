"use client"
import Navbar from '@/app/Components/Navbar/page'
import React, { useEffect, useRef } from 'react';
import img from "@/app/Images/layer.png"
import img22 from "@/app/Images/layer2.png"
import Image from 'next/image'
import img1 from "@/app/Images/1.jpg"
import img2 from "@/app/Images/2.jpg"
import img3 from "@/app/Images/42.jpg"
import img4 from "@/app/Images/43.jpg"
import img5 from "@/app/Images/44.jpg"
import img6 from "@/app/Images/45.jpg"

function Firstpage() {
    const navItems = [
        { label: 'FB', link: 'https://facebook.com' },
        { label: 'IG', link: 'https://instagram.com' },
        { label: 'YT', link: 'https://youtube.com' },
        { label: 'DR', link: 'https://dribbble.com' },
    ];
    const sliderRef = useRef(null);

    const images = [img1.src, img2.src, img3.src, img4.src, img5.src, img6.src];

    useEffect(() => {
        const slider = sliderRef.current;
        let index = 0;
        const interval = setInterval(() => {
            if (slider) {
                slider.scrollTo({
                    left: (index % images.length) * slider.clientWidth,
                    behavior: 'smooth',
                });
                index += 1;
            }
        }, 100);

        return () => clearInterval(interval);
    }, [images.length]);

    const text = "Desert Loneliness";
    return (
        <>
            <div className='flex h-[500px] relative'>
                <Image
                    src={img}
                    alt="Background Image"
                    layout="cover"
                    // objectFit="cover"
                    objectPosition="center"
                    priority
                    className="absolute"
                    width={700}
                />
                <div className='flex flex-col z-10 relative items-center justify-between w-fit pl-7 pt-7 '>
                    <svg width="31" height="107" viewBox="0 0 31 107" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g transform="rotate(90 15.5 15.5)">
                            <path d="M8.12 21V9.592H10.68V14.248H14.488L18.248 9.592H21.432L16.728 15.288L21.432 21H18.248L14.472 16.328H10.68V21H8.12ZM23.9937 21V9.56H26.5537V21H23.9937ZM30.0706 21V9.56H32.2146L37.5106 13.272H37.5906L42.8866 9.56H45.0306V21H42.4706V12.76L38.8386 15.192V21H36.2786V15.192L32.6306 12.76V21H30.0706ZM69.175 21V9.56H71.767L79.863 17.784V9.56H82.423V21H79.831L71.735 12.76V21H69.175ZM91.7154 21.08C89.678 21.08 88.0994 20.5947 86.9794 19.624C85.8594 18.6427 85.2994 17.192 85.2994 15.272C85.2994 13.3627 85.8594 11.9227 86.9794 10.952C88.0994 9.97067 89.7154 9.48 91.8274 9.48H94.7074C96.8194 9.48 98.4354 9.97067 99.5554 10.952C100.675 11.9227 101.235 13.3627 101.235 15.272C101.235 17.192 100.675 18.6427 99.5554 19.624C98.4354 20.5947 96.846 21.08 94.7874 21.08H91.7154ZM92.0034 11.56C90.8194 11.56 89.8967 11.7733 89.2354 12.2C88.574 12.6267 88.158 13.304 87.9874 14.232H98.5474C98.3767 13.304 97.9607 12.6267 97.2994 12.2C96.638 11.7733 95.7154 11.56 94.5314 11.56H92.0034ZM92.0514 19H94.5314C95.726 19 96.6487 18.7867 97.2994 18.36C97.9607 17.9333 98.3767 17.2507 98.5474 16.312H87.9874C88.158 17.2507 88.574 17.9333 89.2354 18.36C89.8967 18.7867 90.8354 19 92.0514 19Z" fill="white" />
                            <path d="M65.8383 15.5007C65.8383 13.9769 65.4509 12.5421 64.7693 11.2892C64.7575 11.2609 64.7419 11.2335 64.7243 11.209C63.2425 8.55364 60.4326 6.73644 57.1982 6.66504C57.1836 6.66407 57.1679 6.66309 57.1532 6.66407C57.1024 6.66309 57.0515 6.66211 56.9997 6.66211C53.8211 6.66211 51.0297 8.34825 49.4727 10.8736C49.4512 10.9 49.4345 10.9283 49.4208 10.9586C48.6218 12.2868 48.1621 13.8409 48.1621 15.5007C48.1621 17.0245 48.5494 18.4592 49.2311 19.7121C49.2428 19.7405 49.2585 19.7679 49.2761 19.7923C50.7539 22.4418 53.555 24.2571 56.7796 24.3363C56.7914 24.3373 56.8041 24.3383 56.8158 24.3383C56.8236 24.3383 56.8324 24.3373 56.8403 24.3363C56.8931 24.3373 56.9469 24.3383 57.0007 24.3383C60.1793 24.3383 62.9706 22.6521 64.5277 20.1268C64.5492 20.1004 64.5658 20.072 64.5795 20.0417C65.3776 18.7145 65.8383 17.1604 65.8383 15.5007ZM64.2127 19.0832L62.0317 15.3051L60.0238 11.8281H64.1658C64.7331 12.9304 65.0558 14.1784 65.0558 15.5007C65.0558 16.7878 64.7507 18.0035 64.2127 19.0832ZM59.1201 19.1742H54.8793L52.7589 15.5016L54.8793 11.8291H59.1201L61.2405 15.5016L59.1201 19.1742ZM63.7071 11.0457H59.346H55.3312L57.4036 7.4553C60.0316 7.58538 62.332 8.98202 63.7071 11.0457ZM56.496 7.46215L54.314 11.2413L52.3061 14.7182L50.2356 11.1318C51.5872 9.04853 53.8729 7.6245 56.496 7.46215ZM49.7866 11.9191L51.9677 15.6973L53.9756 19.1742H49.8336C49.2663 18.0719 48.9436 16.824 48.9436 15.5016C48.9436 14.2145 49.2477 12.9988 49.7866 11.9191ZM50.2913 19.9566H54.6524H58.6673L56.5948 23.547C53.9668 23.416 51.6664 22.0193 50.2913 19.9566ZM57.5024 23.5392L59.6844 19.76L61.6923 16.2831L63.7628 19.8696C62.4122 21.9538 60.1255 23.3768 57.5024 23.5392Z" fill="white" />
                            <path d="M106.999 9.83742C106.999 9.83644 106.999 9.83546 106.999 9.83448C106.958 7.11455 105.844 4.58729 103.86 2.71923C101.879 0.852149 99.2909 -0.110243 96.5709 0.0100557C96.3597 0.0198361 96.1934 0.195884 96.1973 0.40714C96.2413 3.12903 97.3563 5.65531 99.3368 7.52141C101.209 9.28482 103.623 10.2413 106.176 10.2413C106.19 10.2413 106.204 10.2404 106.217 10.2404V22.9735C106.217 26.0719 103.697 28.5923 100.599 28.5923H98.3588C98.1427 28.5923 97.9676 28.7674 97.9676 28.9836C97.9676 29.1997 98.1427 29.3748 98.3588 29.3748H100.599C104.128 29.3748 107 26.5032 107 22.9735V9.84035C106.999 9.83937 106.999 9.83839 106.999 9.83742ZM106.177 9.45891C103.823 9.45891 101.599 8.5777 99.8738 6.95219C98.1427 5.3218 97.1294 3.1437 96.9935 0.782708C99.3564 0.775862 101.592 1.65708 103.324 3.28845C105.057 4.9208 106.071 7.09988 106.203 9.45891C106.195 9.45891 106.186 9.45891 106.177 9.45891Z" fill="white" />
                            <path d="M7.66295 23.4784C5.7812 21.7061 3.35077 20.7496 0.782433 20.7594V8.02628C0.782433 4.92785 3.30285 2.40743 6.40128 2.40743H8.641C8.85714 2.40743 9.03221 2.23236 9.03221 2.01622C9.03221 1.80007 8.85714 1.625 8.641 1.625H6.40128C2.87153 1.625 0 4.49653 0 8.02628V21.1594C0 21.1604 0 21.1614 0 21.1624C0 21.1633 0 21.1643 0 21.1653C0.0410777 23.8852 1.15507 26.4125 3.13853 28.2805C5.00953 30.044 7.42236 30.9995 9.97504 30.9995C10.1257 30.9995 10.2773 30.9966 10.4289 30.9897C10.6401 30.9799 10.8064 30.8039 10.8025 30.5926C10.7575 27.8707 9.64251 25.3445 7.66295 23.4784ZM3.6745 27.7113C1.94141 26.079 0.928161 23.8999 0.796126 21.5409C3.16299 21.533 5.39488 22.4162 7.12601 24.0476C8.85617 25.678 9.87039 27.8561 10.0054 30.2171C7.64437 30.2229 5.40661 29.3427 3.6745 27.7113Z" fill="white" />
                        </g>
                    </svg>
                    <div className='flex items-end p-[9px] flex-col gap-2 justify-center bg-gray-700 rounded-full w-14 h-14'>
                        <div className='bg-white h-[2px] w-9 '>
                        </div>
                        <div className='bg-white h-[2px] w-9 '>
                        </div>
                        <div className='bg-white h-[2px] w-3 '>
                        </div>

                    </div>
                    <div className='flex flex-col items-center gap-4 text-red-800 font-bold text-2xl'>
                        03
                        <div className='flex flex-col gap-3  '>
                            <div className='bg-white rounded-full w-3 h-3'>
                            </div>
                            <div className='bg-white rounded-full w-3 h-3'>
                            </div>
                            <div className='bg-red-800 rounded-full w-3 h-3'>
                            </div>
                            <div className='bg-white rounded-full w-3 h-3'>
                            </div>
                            <div className='bg-white rounded-full w-3 h-3'>
                            </div>
                            <div className='bg-white rounded-full w-3 h-3'>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="absolute mt-14 w-36 ml-[350px] z-10 flex items-end justify-end text-white text-6xl font-bold">
                    <div class="transform rotate-90 origin-bottom-left">
                        Desert Loneliness
                    </div>
                </div>


                {/* image section*/}
                <div className='flex items-center justify-center w-[1000px] h-[400px] mt-24 ml-44 bg-yellow-50'>
                    <div className="relative overflow-hidden w-[1000px] h-[400px]">
                        <div
                            ref={sliderRef}
                            className="flex transition-all duration-500"
                            style={{ scrollBehavior: 'smooth' }}
                        >
                            {images.map((img, idx) => (
                                <div key={idx} className="w-full flex-shrink-0">
                                    <img src={img} alt={`Slide ${idx}`} className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div >
                {/* image section */}
                <Navbar />

                <div className="fixed top-1/2 transform -translate-y-1/2 right-0 pr-4">

                    <ul className="flex flex-col space-y-4">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a
                                    href={item.link}
                                    className="flex items-center justify-center w-6 h-12 border border-white rounded-full text-white"
                                >
                                    <span className='vertical-text'>
                                        {item.label}
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>


                <Image
                    src={img}
                    alt="Background Image"
                    layout="cover"
                    objectPosition="center"
                    priority
                    className="absolute"
                    width={650}
                />
                <div className='flex justify-end items-end'>
                    <Image
                        src={img22}
                        alt="Background Image"
                        layout="cover"
                        objectPosition="center"
                        priority
                        className="absolute"
                        width={500}
                    />
                </div>

            </div>
        </>
    )
}

export default Firstpage
