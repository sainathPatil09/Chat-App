import React from 'react'
import { useForm } from "react-hook-form"
import axios from 'axios'
import { useAuth } from '../context/AuthProvider'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'

const Signup = () => {
    const [authUser, setAuthUser] = useAuth()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const password = watch("password", "")
    const confirmPassword = watch("confirmPassword", "")
    const validatePasswordMatch = (value) => {
        return value === password || "Password do not match"
    }

    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password,
            confirmPassword: data.confirmPassword
        }
        // console.log(userInfo)
        await axios
            .post('/api/user/signup', userInfo)
            .then((response) => {
                // console.log(response.data)
                if (response.data) {
                    // alert("signup succesfully")
                    toast.success("Signup successfully")
                }
                localStorage.setItem("chatUser", JSON.stringify(response.data))
                setAuthUser(response.data)
                setTimeout(() => {
                    window.location.reload()
                }, 1000);
            })
            .catch((error) => {
                console.log(error)
                if (error) {
                    toast.error("Error " + error.response.data.error)
                }
            })
    }
    return (
        <>
            <div className='flex justify-center h-screen items-center'>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-6 border-2 w-96 border-lime-200 p-8 rounded-lg'>
                    <h1 className='font-semibold text-3xl text-center text-lime-300'>Chati-<span className='text-lime-600'>App</span></h1>
                    <p className='text-2xl text-lime-300'>Signup</p>
                   
                    {/* username */}
                    <label className="input input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                        </svg>
                        <input
                            {...register("fullname", { required: true })}
                            type="text" className="grow" placeholder="fullname" />
                    </label>
                    {errors.fullname && <span className='text-red-500 text-sm font-semibold'>This field is required</span>}
                   
                    {/* email */}
                    <label className="input input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path
                                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                        <input
                            {...register("email", { required: true })}
                            type="text" className="grow" placeholder="Email" />
                    </label>
                    {errors.email && <span className='text-red-500 text-sm font-semibold'>This field is required</span>}
                    
                    {/* password */}
                    <label className="input input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                clipRule="evenodd" />
                        </svg>
                        {/* <input type="password" className="grow" value="password" /> */}
                        <input
                            {...register("password", { required: true })}
                            type="password" className="grow" placeholder="Password" />
                    </label>
                    {errors.password && <span className='text-red-500 text-sm font-semibold'>This field is required</span>}
                   
                    {/*confirm password */}
                    <label className="input input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                clipRule="evenodd" />
                        </svg>
                        {/* <input type="password" className="grow" value="password" /> */}
                        <input
                            {...register("confirmPassword", { required: true, validate: validatePasswordMatch })}
                            type="password" className="grow" placeholder="confirm password" />
                    </label>
                    {errors.confirmPassword && <span className='text-red-500 text-sm font-semibold'>{errors.confirmPassword.message}</span>}
                    <div className='flex justify-between'>
                        <p>Have accout?
                            <Link to='/login'
                                className='text-blue-600 underline cursor-pointer'>
                                Login
                            </Link>
                        </p>
                        <input type="submit" value="Signup" className='text-black px-2 py-1 cursor-pointer rounded-lg bg-lime-500 font-semibold' />
                    </div>
                </form>
            </div>
        </>
    )
}

export default Signup
