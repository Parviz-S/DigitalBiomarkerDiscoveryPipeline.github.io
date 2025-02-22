import React from 'react'

const AboutCard = (props) => {
  return (
    <div className="cursor-pointer">
        <div className="inset-0 transform hover:scale-95 transition duration-300">
            <div  className="flex flex-col border rounded-2xl text-left py-8 px-8 h-[300px]">
                <div>
                    <div className={`bg-[#00d8ff] inline-flex p-2 rounded-full`}>{props.icon}</div>
                    <h3 className="text-2xl font-bold py-4">{props.heading}</h3>
                    <p>{props.text}</p>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default AboutCard