import React, { useState } from 'react'
import { IoMdSearch } from "react-icons/io";
import searchLogo from '/search.gif'
import useGetAllUsers from '../context/useGetAllUsers';
import useConversation from '../zustand/useConversation';
import { all } from 'axios';
import toast from 'react-hot-toast';
// import viteLogo from '/vite.svg'

const Search = () => {
    const [search, setSearch] = useState("")
    const [allUsers] = useGetAllUsers();
    const {setSelectedConversation} = useConversation();

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(!search)return;
        const conversation = allUsers.find((user)=>
            user.fullname.toLowerCase().includes(search.toLowerCase()));
        
        console.log(conversation)
        if(conversation){
            setSelectedConversation(conversation);
            setSearch("")
        }
        else{
            setSearch("")
            toast.error("User not found")
            // alert("User not found")
        }
    }
    return (
        <>
            <div className='h-[10vh]'>
                <div className='px-6 py-4 '>
                    <form onSubmit={handleSubmit}>

                        <div className='flex space-x-3'>
                            <label className="input input-bordered flex items-center gap-2 w-[80%]">
                                <input
                                    type="text"
                                    className="grow"
                                    placeholder="Search"
                                    value={search}
                                    onChange={(e)=>setSearch(e.target.value)}
                                />
                            </label>
                            <button>
                                {/* <IoMdSearch className='hover:bg-gray-600 p-1 rounded-full duration-300' size={40} /> */}
                                <img className='w-10 hover:bg-gray-600 p-1 rounded-full duration-300' src={searchLogo} alt="" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Search
