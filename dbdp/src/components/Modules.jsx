import React from 'react'
import { useEffect, useState } from 'react'

import { IoIosSearch } from 'react-icons/io'

import ModulesContributors from './ModulesContributors';

const Modules = () => {


    const [modules, setModules] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch("https://api.github.com/orgs/DigitalBiomarkerDiscoveryPipeline/repos")
        .then((res) => res.json())
        .then(
            (result) => {
                setModules(result)
            },
            (error) => {
                console.log(error);
            }
        )
    }, [])

  return (
    <>
    <div className="overflow-x-auto">
        <div className="min-w-screen min-h-screen flex items-center justify-center bg-black font-sans overflow-hidden">
            <div className="w-full lg:w-5/6">
                <div className="bg-gray-800 my-6 shadow-lg rounded-lg">
                    <div className='p-4'>
                        <div className='relative mt-1'>
                            <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'><IoIosSearch className='w-5 h-5 text-gray-500 dark:text-gray-400'/></div>
                            <input type={"text"} className="border text-sm rounded-lg block w-80 pl-10 p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder='Search Modules' onChange={e=> setSearch(e.target.value)} />
                            
                        </div>
                    </div>
                    <table className="min-w-max w-full table-auto">
                        <thead>
                            <tr className="text-xs uppercase bg-gray-700 text-gray-400">
                                <th className="py-3 px-6 text-left">Module</th>
                                <th className="py-3 px-6 text-left">Contributors</th>
                                <th className="py-3 px-6 text-left">Category</th>
                                {/* <th className="py-3 px-6 text-center">Actions</th> */}
                            </tr>
                        </thead>
                        {modules.length === 0 ? (
                            <tbody>
                                <tr className="bg-gray-800 border-b border-gray-700 hover:bg-gray-600 text-gray-400">
                                    <td className='py-4 px-6 font-medium text-white whitespace-nowrap'>No Modules Found</td>
                                </tr>
                            </tbody>
                        ) : (
                            <tbody>
                                
                                {modules.filter(name => name.name.toLowerCase().includes(search.toLowerCase()) || name.topics[0].toLowerCase().includes(search.toLowerCase())).map((module, i) => (

                                    <tr key={i} className="bg-gray-800 border-b border-gray-700 hover:bg-gray-600 text-gray-400">
                                        <td className="py-4 px-6 font-medium text-white whitespace-nowrap">
                                            <div className="flex items-center">
                                                <a href={module.html_url}><span className="font-medium hover:text-gray-400">{module.name}</span></a>
                                            </div>
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-3">
                                            <ModulesContributors contributors={module.contributors_url} />
                                        </td>
                                        <td className="py-4 px-6 font-medium whitespace-nowrap">
                                            <div className="flex">
                                                <p>{module.topics[0].slice(2, module.topics[0].length)}</p>
                                            </div>
                                        </td>
                                        {/* ACTIONS TAB */}
                                        {/* <td className="py-3 px-6 text-center">
                                            <div className="flex item-center justify-center">
                                                <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                    </svg>
                                                </div>
                                                <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                    </svg>
                                                </div>
                                                <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </td> */}
                                    </tr>
                                ))}
                                
                            </tbody>
                        )}
                    </table>
                    
                        
                    <div className=" text-gray-400 bg-gray-800 border-b border-gray-700  rounded-b-lg text-center">
                        Pagination >>>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Modules