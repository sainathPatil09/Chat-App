import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import axios from 'axios'

const useGetAllUsers = () => {
    const [allUsers, setAllUsers] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getUsers = async()=>{
            setLoading(true)
            try {
                const token = Cookies.get("jwt")
                const response = await axios.get('/api/user/allusers',{
                    credentials : true,
                    headers :{
                        Authorization: `Bearer ${token}`
                    }
                })
                setLoading(false)
                // console.log(response.data)
                setAllUsers(response.data)
                
            } catch (error) {
                console.log('Error in useAllGetUsers : ', error)
            }
        }
    
      getUsers()
    }, [])
    
    return [allUsers, loading]
}

export default useGetAllUsers
