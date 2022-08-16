import React from 'react'
import { useEffect, useState } from 'react'

const ModulesContributors = (prop) => {
    
    const [contributors, setContributors] = useState([]);

    useEffect(() => {
        fetch(prop.contributors)
        .then((res) => res.json())
        .then(
            (result) => {
                setContributors(result)
            },
            (error) => {
                console.log(error);
            }
        )
    }, [])


  
    return (
    <div className='flex'>
        {contributors.map((contrib, i) => (
            <a key={i} href={contrib.url} className=""><img src={contrib.avatar_url} alt="..." className="w-10 h-10 rounded-full border-2 border-[#b4b8c0] hover:border-[#33acfe] shadow mr-2"></img></a>
        ))}
    </div>
    )
}

export default ModulesContributors