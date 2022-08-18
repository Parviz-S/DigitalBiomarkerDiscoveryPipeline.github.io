import React from 'react'

import bil from '../assets/BIL_logo.png'
import md2k from '../assets/md2k.png'
import czi from '../assets/czi.jpg'
import openmhealth from '../assets/openmhealth.png'

const Footer = () => {
  return (
    <div className="w-full text-white bg-black">
        <div className="px-4 pt-16">
        <div className='flex justify-center py-16'>
            <img src={bil} alt='bil logo'></img>
        </div>

        <div className="max-w-[1240px] mx-auto md:flex">
            <div className="max-w-[620px]">
                <p className='text-xl pt-8'>The DBDP was developed and is curated by the <span className='text-[#00d8ff]'>Big Ideas Lab</span> at Duke University. The BIG IDEAS Lab is developing digital biomarkers for a range of diseases and conditions using a variety of sensors. The DBDP has been made possible in part by grant number 2020-218599 from the Chan Zuckerberg Initiative DAF, an advised fund of Silicon Valley Community Foundation. The DBDP has partnered with Open mHealth and MD2K Cerebral Cortex to open-source digital biomarker development.</p>
            </div>

            <div className="flex flex-col justify-between mx-auto">
                <div className='mb-8'><a href='https://md2k.org/'><img className="max-w-[200px]" src={md2k} alt='md2k logo'></img></a></div>
                <div className='mb-8'><a href='https://chanzuckerberg.com/eoss/proposals/expanding-the-open-mhealth-platform-to-support-digital-biomarker-discovery/'><img className="max-w-[200px]" src={czi} alt='czi logo'></img></a></div>
                <div className='mb-8'><a href='https://openmhealth.org/'><img className="max-w-[200px]" src={openmhealth} alt='openmhealth logo'></img></a></div>
            </div>

        </div>


        <div className='text-center py-4 text-sm opacity-70'>
            <p>&copy; 2022, developed by <a href="dunn.pratt.duke.edu/" target="_blank" className='text-[#00d8ff]'>The Big Ideas Lab</a> at Duke University.</p> 
        </div>

        </div>
    </div>
  )
}

export default Footer