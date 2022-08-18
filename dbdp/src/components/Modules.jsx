import React from 'react'
import _ from 'lodash'
import { useEffect, useState } from 'react'

import { IoIosSearch } from 'react-icons/io'

import ModulesContributors from './ModulesContributors';

const Modules = () => {

    const pageSize = 10;

    const [modules, setModules] = useState([]);
    const [search, setSearch] = useState("");
    const [paginatedModules, setPaginatedModules] = useState();
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        fetch("https://api.github.com/orgs/DigitalBiomarkerDiscoveryPipeline/repos")
        .then((res) => res.json())
        .then(
            (result) => {
                setModules(result)
                setPaginatedModules(_(result).slice(0).take(pageSize).value())
            },
            (error) => {
                console.log(error);
            }
        )
    }, [])

    const pageCount = modules ? Math.ceil(modules.length/pageSize) :0;
    if (pageCount === 1) return null;
    const pages = _.range(1, pageCount+1);

    const pagination=(pageNo)=>{
        setCurrentPage(pageNo);
        const startIndex = (pageNo - 1) * pageSize;
        const paginatedModule = _(modules).slice(startIndex).take(pageSize).value();
        setPaginatedModules(paginatedModule);
    }

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
                                
                                {paginatedModules.filter(name => name.name.toLowerCase().includes(search.toLowerCase()) || name.topics[0].toLowerCase().includes(search.toLowerCase())).map((module, i) => (

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
                                    </tr>
                                ))}
                                
                            </tbody>
                        )}
                    </table>
                    
                        
                    <div className=" text-gray-400 bg-gray-800 border-b border-gray-700  rounded-b-lg text-center">
                        <nav className="m-2 relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                            <div href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                            <span className="sr-only">Previous</span>
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            </div>

                            {
                                pages.map((page, i)=>(
                                    <li key ={i} onClick={()=>pagination(page)} aria-current="page" className={
                                        page === currentPage ? "active z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium" : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                                    }> {page} </li>
                                ))
                            }

                            <div href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                            <span className="sr-only">Next</span>
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Modules