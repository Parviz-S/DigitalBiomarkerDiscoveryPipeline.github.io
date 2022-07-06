import React from 'react'

import heroVid from '../assets/video.mp4'

const Hero = () => {
  return (
    <div className="w-full h-[90vh] top-[90px]">
        <video className="object-cover h-full w-full absolute -z-10" src={heroVid} autoPlay loop muted />
        <div className="w-full h-[90%] flex flex-col justify-center items-center text-white px-4 text-center">
            <h1><span className="text-[#b771f4]">Digital</span> <span className="text-[#1acfc0]">Biomarker</span> <span className="text-[#b4b8c0]">Discovery</span> <span className="text-[#33acfe]">Pipeline</span></h1>
            <p className="text-xl py-4">The Digital Biomarker Discovery Pipeline (DBDP) is an open source platform for the development of digital biomarkers.</p>
            <div>
                <button className="m-2">Open dbdp</button>
                <button className="m-2">About</button>
            </div>
        </div>
        <div>
            <p className="text-center text-white text-2xl font-bold">Total Modules Added: 22</p>
        </div>
    </div>
  )
}

export default Hero