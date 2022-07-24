import React from 'react'

import {IoLogoGithub} from 'react-icons/io'

const ReadyToDiscover = () => {
  return (
    <div className='w-full text-white bg-black px-8 py-16'>
        <div className="grid gap-8 items-start justify-center">
            <div className="relative group">
                <div className="relative mx-auto max-w-xl rounded-3xl bg-black p-20">
                    <IoLogoGithub size={80} className='mb-5'/>
                    <h2 className="text-4xl font-bold leading-tight text-white">Ready to Start Discovering?</h2>
                    <p className="mt-5 text-l leading-8 text-white">Discover more robust digital biomarkers with the DBDP. Start discovering now on GitHub! We believe that not only data, but also computational pipelines and algorithms should operate by the FAIR principles (Findable, Accessible, Interoperable, and Reusable).</p>
                    <div className='pt-6'>
                        <a href="https://github.com/DigitalBiomarkerDiscoveryPipeline" target="_blank" rel="noreferrer">
                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                                DBDP ON GITHUB
                            </button>
                        </a>
                    </div>
                </div>
            
            </div>
        </div>
    </div>
  )
}

export default ReadyToDiscover