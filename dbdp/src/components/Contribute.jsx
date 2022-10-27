import React from 'react'

const Contribute = () => {
  return (
    <div className='w-full text-white bg-black'>
      <div className='grid grid-cols-2 gap-8 pt-[10%] pb-[5%] pl-10 pr-10 w-[90%] mx-auto'>
        <div className='text-center'>
          <h1 className='mb-10'>Welcome!</h1>
          <p className='mt-5 text-xl text-left'>It’s simple to contribute your efforts on digital biomarker discovery (e.g., codes, datasets) to the DBDP.</p>
          <div className='ml-[25%]'><p className='mt-5 text-left'>1. Read through instructions.</p>
          <p className='mt-2 text-xl text-left'>2. Submit form.</p>
          <p className='mt-2 text-xl italic text-left'>Done!</p></div>
        </div>
        <div className='text-center'>
          <h1 className='mb-10'>Tell us about your code</h1>
          <p className='mt-5 text-xl text-justify'>Click ‘Complete Form’ to be redirected to a separate window to answer a few questions to share your code with DBDP.</p> 
          <p className='mt-5 text-xl text-justify'>It should take a total of ~15 minutes to complete, and we will reach out to you as soon as we review the submitted form.</p>
          <a href="https://forms.gle/jvtbH6Ts1hoUziFa7" target="_blank" rel="noreferrer"><button className="ml-4 bg-gradient-to-r from-[#6a00ff] to-[#00d8ff] py-3 px-7 rounded-3xl mt-5">Complete Form</button> </a>
        </div>
      </div>
    </div>
  )
}

export default Contribute