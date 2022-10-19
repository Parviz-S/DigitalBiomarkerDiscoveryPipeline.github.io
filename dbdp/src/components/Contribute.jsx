import React from 'react'

const Contribute = () => {
  return (
    <div className='w-full text-white bg-black'>
      <div className='grid grid-cols-2 gap-8 pt-40 pb-30 pl-10 pr-10'>
        <div className='text-center'>
          <h1>Welcome!</h1>
          <p className='mt-5'>It’s simple to contribute your digital biomarker to the DBDP.</p>
          <div className='ml-[25%]'><p className='mt-5 text-left'>1. Read through instructions.</p>
          <p className='mt-2 text-left'>2. Submit form.</p>
          <p className='mt-2 italic text-left'>Done!</p></div>
        </div>
        <div className='text-center'>
          <h1 className=''>Tell us about your code</h1>
          <p className='mt-5 text-justify'>Click ‘Complete Form’ to be redirected to a separate window to answer a few questions to share your code with DBDP.</p> 
          <p className='mt-5 text-justify'>It should take a total of ~15 minutes to complete, and we will reach out to you as soon as we review the submitted form.</p>
          <a href="https://forms.gle/oDWUEHZsk96DmAm48" target="_blank" rel="noreferrer"><button className="ml-4 bg-gradient-to-r from-[#6a00ff] to-[#00d8ff] py-3 px-7 rounded-3xl mt-5">Complete Form</button> </a>
        </div>
      </div>
    </div>
  )
}

export default Contribute