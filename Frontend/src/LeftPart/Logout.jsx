import React, { useState } from 'react'
import { IoMdSearch } from "react-icons/io";
import { CgLogOut } from "react-icons/cg";
import axios from 'axios';
import Cookies from 'js-cookie'
import toast from 'react-hot-toast';

const Logout = () => {
    const [loading, setLoading] = useState(false)
    const handlelogout= async()=>{
        try {
            setLoading(true)
            const res = axios.post('/api/user/logout')
            localStorage.removeItem("chatUser")
            Cookies.remove("jwt")
            setLoading(false)
            
            toast.success("Logged out succesfully");
            // alert("Logged out succesfully")
            setTimeout(() => {
                window.location.reload()
            }, 1000);
        } catch (error) {
            console.log(error, "Error in logout")
        }
    }
    return (
        <>
            <hr />
            <div className='h-[10vh] px-6 py-4 '>
            <CgLogOut onClick={handlelogout} className='hover:bg-gray-600 duration-300 rounded-full p-1' size={40} />
                {/* <div className='px-6 py-4'>
                    <form action="">

                        <div className='flex space-x-3'>
                            <label className="input input-bordered flex items-center gap-2 w-[80%]">
                                <input type="text" className="grow" placeholder="Search" />
                            </label>
                            <button>
                                <IoMdSearch className='hover:bg-gray-600 p-1 rounded-full duration-300' size={40} />

                            </button>
                        </div>
                    </form>
                </div> */}
            </div>
        </>
    )
}

export default Logout
