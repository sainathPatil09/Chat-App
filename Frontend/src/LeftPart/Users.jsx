import React from 'react'
import User from './User'
import useGetAllUsers from '../context/useGetAllUsers'

const Users = () => {
    const[allUsers, loading] = useGetAllUsers()
    console.log(allUsers)
    return (
        <>
            <div >
                <h1 className='bg-gray-900 px-10 py-2 rounded-md font-semibold text-white'>
                    Message
                </h1>
                <div className='hide-scrollbar overflow-y-auto ' style={{maxHeight: "calc(84vh - 10vh)"}}>

                    { allUsers.map((user, index)=>(
                            <User key={index} user={user}/>
                        ))}
                    
                </div>
            </div>
        </>
    )
}

export default Users
