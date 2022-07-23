import React from 'react'

import { IoIosDocument } from 'react-icons/io'
import { IoIosPersonAdd } from 'react-icons/io'
import { IoIosChatboxes } from 'react-icons/io'


import AboutCard from './AboutCard'

const DocumentationSection = () => {
  return (
    <div className="bg-black text-white text-center">
        <div className="max-w-[1240px] mx-auto px-4 py-16 ">
            <h1 className="py-4">Extensive Documentation</h1>
            <p1 className="py-4 text-xl">The DBDP provides extensive user documentation including a User Guide, instructions and documentation for contributors, and monitored issue tracking.</p1>

            {/* Card container */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">

                {/* card */}
                <a href='https://github.com/DigitalBiomarkerDiscoveryPipeline/DBDP/wiki/USER-GUIDE' target='_blank' rel='noreferrer'>
                    <AboutCard icon={<IoIosDocument size={40}/>} heading={"User Guide"} text={"The user guide was created for users, contributors, and digital medicine enthusiasts alike. Instructions for using the DBDP are located in our Wiki."} />
                </a>
                <a href='https://github.com/DigitalBiomarkerDiscoveryPipeline/DBDP/blob/master/CONTRIBUTING.md' target='_blank' rel='noreferrer'>
                    <AboutCard icon={<IoIosPersonAdd size={40}/>} heading={"Contribution Instructions"} text={"If you would like to contribute your digital biomarker to the DBDP, please follow our Instructions for Contribution Guide located in our GitHub."} />
                </a>
                <a href='https://github.com/DigitalBiomarkerDiscoveryPipeline/DBDP/issues' target='_blank' rel='noreferrer'>
                    <AboutCard icon={<IoIosChatboxes size={40}/>} heading={"Monitored Issue Tracking"} text={"Have an idea for a new biomarker? Need help with the current modules? Issue Tracking is monitored by the Big Ideas Lab and we are happy to help!"} />
                </a>

            </div>
        </div>
    </div>
  )
}

export default DocumentationSection