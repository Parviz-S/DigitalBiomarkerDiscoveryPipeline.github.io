import React from 'react'

const Navbar = () => {
  return (
    <div className="w-full h-[90px] bg-black">
        <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
            <div>
                <h1 className="text-[#00d8ff]">dbdp</h1>
            </div>
            <div>
                <ul className="flex text-white items-center">
                    <li>Github</li>
                    <li>Twitter</li>
                    <li>Blog</li>
                    <li>dbdpED</li>
                    <button className="ml-4">Open dbdp</button>  
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar