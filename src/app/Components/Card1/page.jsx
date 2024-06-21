import React from 'react'
import svg1 from "@/app/Images/icon-1.svg"
import Image from 'next/image'
function Card1() {
    return (
        <>
            <div className="flex items-start justify-start">
                <div className="bg-black text-white w-[320px] h-[400px] p-9 rounded-3xl relative flex flex-col items-start">
                    <div>
                        <Image src={svg1} alt="icon" />
                    </div>
                    <span className="mt-7 text-lg">01</span>
                    <h3 className="mt-7 text-3xl font-bold">Wedding Photography</h3>
                </div>
            </div>
        </>
    )
}

export default Card1
