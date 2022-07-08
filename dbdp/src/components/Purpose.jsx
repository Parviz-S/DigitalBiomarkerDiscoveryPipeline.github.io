import React from 'react'
import logo from '../assets/logo.png'

const Purpose = () => {
  return (
    <div>
        <div className="w-full text-white bg-black">
            <div className="max-w-[1240px] mx-auto px-4 py-16 md:flex">
                <div className="max-w-[620px]">
                    <h1 className='py-4'>The Purpose</h1>
                    <p>Digital biomarkers are digitally collected data that are transformed into indicators of health outcomes. Digital biomarkers currently require extensive domain knowledge and computing skills. The purpose of the DBDP is to provide code sets, functions, and algorithms for the entire digital biomarker discovery pipeline to make discovering digital biomarkers more accessible. From the input of wearable sensor data to the development of machine learning and deep learning algorithms, we have provided an open source software resource for the digital biomarker community. For more information, please see our <span className="text-[#00d8ff]">recent publication</span> on the DBDP.</p>
                </div>

                {/* here I have an idea to animate each letter to get bigger on hover and display the word underneath */}
                <div className="flex justify-center w-full py-16 mx-auto">
                    <img className="max-w-[250px]" src={logo} alt='logo'></img>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Purpose