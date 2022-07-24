import React from 'react'

import TeamCard from './TeamCard'

import PS from '../assets/img/team/PS.JPG'

const OurTeam = () => {
  return (
    <section className='bg-black'>
        <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
            {/* Intro Section */}
            <div className='mx-auto max-w-screen-sm text-center mb-8 lg:mb-16'>
                <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-white'>The DBDP Team!</h2>
                <p className='font-light text-gray-400 lg:mb-16 sm:text-xl'>We are a dynamic team passionate about getting digital biomarker discovery tools into your hands!</p>
            </div>

            {/* Grid */}
            <div className='grid gap-8 lf:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>

                <TeamCard 
                name={'Parviz Subkhankulov'}
                image={PS} 
                title={'Web Developer'} 
                description={'Parviz works on the DBDP website. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, iste?'}
                />

            </div>


        </div>
    </section>



    // <div className='w-full text-black bg-black px-8 py-16'>
    //     <div class="grid grid-cols-4 gap-4">
    //         <div className='w-60 p-2 bg-white rounded-xl'>
    //             <img className='h-40 object-cover rounded-xl' src='../assets/img/team/PS.jpg' alt='Parviz Subkankulov'></img>
    //             <div className='p-2'>
    //             <h2 className='text-xl'>Heading</h2>
    //             <p className='text-s'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda amet sint, consequuntur nulla natus corporis harum aut dolore iusto magnam praesentium eum autem ipsa molestiae cum eaque saepe. Quod, porro.</p>
    //             </div>
    //             <div className='m-2'>

    //             </div>
    //         </div>
    //     </div>
    // </div>
  )
}

export default OurTeam