import React from 'react'

import {IoLogoTwitter, IoLogoLinkedin, IoLogoGithub} from 'react-icons/io'
import {BsMedium} from 'react-icons/bs'

const TeamCard = (props) => {

    

  return (
    <div className='text-center text-gray-400'>
        <img className='mx-auto mb-4 w-36 h-36 rounded-full' src={props.image} alt={props.name}></img>
        <h3 className='text-xl font-bold tracking-tight text-white'>
            <a href={props.about}>{props.name}</a>
        </h3>
        <span className='text-gray-400'>{props.title}</span>
        <p className='mt-3 mb-4 font-light text-gray-400'>{props.description}</p>
        <ul className='flex justify-center mt-4'>
            
            {(props.twitter ? 
                <li>
                    <a href={props.twitter} className='text-gray-400'>
                        <IoLogoTwitter size={20}/>
                    </a>
                </li> : null
            )}
            {(props.linkedin ? 
                <li>
                    <a href={props.linkedin} className='text-gray-400'>
                        <IoLogoLinkedin size={20}/>
                    </a>
                </li> : null
            )}
            {(props.medium ? 
                <li>
                    <a href={props.medium} className='text-gray-400'>
                        <BsMedium size={20}/>
                    </a>
                </li> : null
            )}
            {(props.github ? 
                <li>
                    <a href={props.github} className='text-gray-400'>
                        <IoLogoGithub size={20}/>
                    </a>
                </li> : null
            )}
            
        </ul>
    </div>
  )
}

export default TeamCard