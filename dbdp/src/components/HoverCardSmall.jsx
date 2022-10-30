import React from 'react'

const HoverCardSmall = (props) => {
  return (
    <div className='w-full text-white bg-black px-8 py-16'>
        <div className="grid gap-8 items-start justify-center">
            <div className="relative group">
                <a href={props.url} target='_blank' rel='noreferrer'>
                    <div className='absolute inset-0 max-w-4xl bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 h-[450px]'></div>
                    <div className="relative mx-auto max-w-4xl rounded-3xl bg-black p-10 text-center h-[450px]">
                        <img src={props.logo} className="mb-6 mx-auto w-[60%]" alt="{props.logo}"/>
                        <h2 className="text-2xl font-bold leading-tight text-white">{props.title}</h2>
                        <p className="mt-5 text-sm leading-6 text-white text-justify">{props.description}</p>
                    </div>
                </a>
            </div>
        </div>
    </div>
  )
}

export default HoverCardSmall