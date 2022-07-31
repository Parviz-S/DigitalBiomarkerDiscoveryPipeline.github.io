import React from 'react'
import { useEffect, useState } from 'react'
import Table from "../Table";



const Modules = () => {

    const [modules, setModules] = useState([]);

    useEffect(() => {
        fetch("https://api.github.com/orgs/DigitalBiomarkerDiscoveryPipeline/repos")
        .then((res) => res.json())
        .then(
            (result) => {
                console.log(result);
                setModules(result)
            },
            (error) => {
                console.log(error);
            }
        )
    }, [])

    const columns = React.useMemo(
        () => [
            {
                Header: "ID",
                accessor: "id",
            },
            {
                Header: "Name",
                accessor: "name",
            },
            {
                Header: "Description",
                accessor: "description",
            }
        ],
        []
      );


  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
            <div className="">
                <h1 className="text-xl font-semibold">Modules</h1>
            </div>
            <div className="mt-4">
                <Table columns={columns} data={modules} />
            </div>
        </main>
    </div>
  )
}

export default Modules