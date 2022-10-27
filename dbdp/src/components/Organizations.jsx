import React from 'react'

import HoverCardSmall from './HoverCardSmall'

import edLogo from'../assets/ED_logo.png';
import gitLogo from'../assets/github_logo_white.png';
import dbdpLogo from'../assets/dbdp-logo-main.png';


const Organizations = () => {
  return (
    <div className="bg-black text-white text-center">
        <div className="max-w-[1240px] mx-auto px-4 py-16 ">
            {/* Card container */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">

                {/* card */}
                <HoverCardSmall 
                logo={gitLogo}
                url='https://github.com/DigitalBiomarkerDiscoveryPipeline/'
                title='GitHub'
                description='Discover more robust digital biomarkers with the DBDP. Start discovering now on GitHub! We believe that not only data, but also computational pipelines and algorithms should operate by the FAIR principles (Findable, Accessible, Interoperable, and Reusable).'
                />

                <HoverCardSmall 
                logo={edLogo}
                url='https://dbdp.org/dbdpED'
                title='Digital Biomarker Discovery Education'
                description='dbdpED is an educational platform for digital biomarker discovery. With tutorials, case studies, and educational videos, dbdpED provides a resource for learning the steps to using mHealth and wearables data to discover digital biomarkers. dbdpED is for all ages and abilities. We believe anyone can discover digital biomarkers!'
                />

                <HoverCardSmall 
                logo={dbdpLogo}
                url='https://dbdp.org/opendbdp'
                title='Open DBDP'
                description="Open DBDP is a partnership between Open mHealth and the Digital Biomarker Discovery Pipeline (DBDP). Combining Open mHealth's interoperable open data standard with the DBDP's platform for transforming that data into indicators of health outcomes will help accelerate research using mHealth and wearables data for digital biomarker discovery. This project is funded through the Chan Zuckerberg Initiative DAF, an advised fund of Silicon Valley Community Foundation."
                />
            </div>
        </div>
    </div>
  )
}

export default Organizations