import React from 'react'
import { TbSection } from 'react-icons/tb'
import { BsGrid3X3GapFill } from 'react-icons/bs'
import { GiEarthAmerica } from 'react-icons/gi'

import AboutCard from './AboutCard'

const About = () => {
  return (
    <div className="bg-black text-white text-center">
        <div className="max-w-[1240px] mx-auto px-4 py-16 ">
            <h1 className="py-4">What is DBDP?</h1>
            <p className="py-4 text-xl">The Digital Biomarker Discovery Pipeline (DBDP) is an open source platform for the development of digital biomarkers.</p>

            {/* Card container */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">

                {/* card */}
                <AboutCard icon={<BsGrid3X3GapFill size={40}/>} heading={"End-to-End"} text={"The DBDP provides complete end-to-end digital biomarker development. Modules are dedicated to data pre-processing, data analysis, algorithm development, and validation."} />
                <AboutCard icon={<TbSection size={40}/>} heading={"Modular Framework"} text={"The DBDP is a modular framework, providing both end-to-end complete solutions as well as tools and algorithms for discovery."} />
                <AboutCard icon={<GiEarthAmerica size={40}/>} heading={"Open Source"} text={"The DBDP is open source under the Apache 2.0 License. The DBDP is available in GitHub under a Contributor Code of Conduct."} />

            </div>
        </div>
    </div>
  )
}

export default About