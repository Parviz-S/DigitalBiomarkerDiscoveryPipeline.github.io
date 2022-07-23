import React, {useState} from 'react'
import {ReactComponent as ReactLogo} from '../assets/logo.svg'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className="w-full h-[90px] bg-black">
        <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
            <div>
                <ReactLogo className="w-[100px]"/>
            </div>
            <div className="hidden md:flex">
                <ul className="flex text-white items-center">
                    <li><a href="github.com" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Github</a></li>
                    <li><a href="twitter.com" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Twitter</a></li>                                                        
                    <li><a href="twitter.com" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Blog</a></li>                                                        
                    <li><a href="twitter.com" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">dbdpED</a></li>
                    <button className="ml-4">Open dbdp</button>  
                </ul>
            </div>

            {/* Hamburger Menu */}
            <div onClick={handleNav} className="block md:hidden">
                {nav ? <AiOutlineClose size={30} className="text-white"/> : <AiOutlineMenu size={30} className="text-white"/>}
            </div>

            {/* Mobile Menu */}
            <div className={nav ? "w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center" : "absolute left-[-100%]"}>
                <ul>
                    <li className="text-2xl">Github</li>
                    <li className="text-2xl">Twitter</li>
                    <li className="text-2xl">Blog</li>
                    <li className="text-2xl">dbdpED</li>
                    <button className="m-8">Open dbdp</button>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar