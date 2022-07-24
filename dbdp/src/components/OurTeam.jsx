import React from 'react'

import TeamCard from './TeamCard'

import JD from '../assets/img/team/JD.jpg'
import BB from '../assets/img/team/BB.JPG'
import PS from '../assets/img/team/PS.JPG'
import BL from '../assets/img/team/BL.jpg'
import GS from '../assets/img/team/GS.jpg'
import JK from '../assets/img/team/JK.jpg'
import JS from '../assets/img/team/JS.jpeg'
import KS from '../assets/img/team/KS.jpg'
import LC from '../assets/img/team/LC.jpeg'
import MS from '../assets/img/team/MS.jpg'
import PC from '../assets/img/team/PC.jpg'
import YJ from '../assets/img/team/YJ.jpg'

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
                name={'Jessilyn Dunn, PhD'}
                title={'DBDP Founder'}
                image={JD}
                description={'PI, Big Ideas Lab at Duke'}
                twitter={'https://twitter.com/drjessilyn'}
                linkedin={'https://www.linkedin.com/in/jessilyn-dunn-82803438/'}
                />

                <TeamCard
                name={'Brinnae Bent, PhD'}
                title={'DBDP Lead Developer'}
                image={BB}
                description={'Data Scientist Edge Analytics, previously Duke BME'}
                twitter={'https://twitter.com/RunsData'}
                medium={'https://medium.com/@RunsData'}
                linkedin={'https://www.linkedin.com/in/brinnaebent/'}
                />

                <TeamCard
                name={'Karnika Singh'}
                title={'Co-founder, dbdpED'}
                image={KS}
                description={'PhD student Duke BME'}
                twitter={'https://twitter.com/Karnika_MedTech'}
                medium={'https://medium.com/@karnika.singh_90443'}
                linkedin={'https://www.linkedin.com/in/karnika-singh-376137103/'}
                />

                <TeamCard
                name={'Baiying Lu'}
                title={'Data Wrangler'}
                image={BL}
                description={'MS student Duke BME'}
                twitter={'https://twitter.com/BaiyingL'}
                linkedin={'https://www.linkedin.com/in/baiying-lu-54b1961b7/'}
                />

                <TeamCard
                name={'Geetika Singh'}
                title={'Code Integrator'}
                image={GS}
                description={'MS student Duke BME'}
                twitter={'https://twitter.com/GeetikaSi'}
                />

                <TeamCard
                name={'Peter Cho'}
                title={'Research Liason'}
                image={PC}
                description={'PhD student Duke BME'}
                twitter={'https://twitter.com/PeterJaehoCho'}
                />

                <TeamCard
                name={'Joe Kim'}
                title={'Data Wrangler'}
                image={JK}
                description={'BS student Duke BME & ECE'}
                twitter={'https://twitter.com/Juseong'}
                medium={'https://medium.com/@juseong.kim'}
                linkedin={'https://www.linkedin.com/in/juseong-joe-kim/'}
                />

                <TeamCard
                name={'Lucy Chikwetu'}
                title={'Code Maintainer'}
                image={LC}
                description={'PhD student Duke ECE'}
                />

                <TeamCard
                name={'Mobashir Shandhi, PhD'}
                title={'Code Maintainer'}
                image={MS}
                description={'Post-doc, Big Ideas Lab'}
                twitter={'https://twitter.com/MobashirShandhi'}
                linkedin={'https://www.linkedin.com/in/mobashirshandhi/'}
                />

                <TeamCard 
                name={'Parviz Subkhankulov'}
                title={'Web Developer'} 
                image={PS} 
                description={'Computer Science Duke University'}     
                twitter={'https://twitter.com/subkhankulov_p'}
                medium={'https://medium.com/@subxankulovparviz'}
                linkedin={'https://www.linkedin.com/in/parviz-subkhankulov/'}
                />

                <TeamCard
                name={'Jason Shang'}
                title={'Data Wrangler'}
                image={JS}
                description={'BS student Duke CS & ECE'}
                linkedin={'https://www.linkedin.com/in/jason-shang/'}
                />

                <TeamCard
                name={'Yihang Jiang'}
                title={'Code Maintainer'}
                image={YJ}
                description={'PhD student Duke BME'}
                />

            </div>
        </div>
    </section>
  )
}

export default OurTeam