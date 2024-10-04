import React from 'react'
import { useForm } from "react-hook-form"
import axios from 'axios'
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const Login = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();



    const onSubmit = (data) => {
        // console.log(data)
        const userInfo = {
            email: data.email,
            password: data.password,
        }
        // console.log(userInfo)
        axios
            .post('/api/user/login', userInfo)
            .then((response) => {
                console.log(response.data)
                if (response.data) {
                    toast.success("Login successfully")
                    
                    // alert("Login succesfully")
                }
                localStorage.setItem("chatUser", JSON.stringify(response.data))
                setTimeout(() => {
                        
                    window.location.reload()
                }, 1000);
            })
            .catch((error) => {
                console.log(error.response.data)
                if (error) {
                    
                    toast.error("Error " + error.response.data.error)
                }
            })
    }

    return (
        <>
            <div className='flex justify-center align-middle h-screen items-center'>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-6 border-2 border-lime-200 w-96 p-8 rounded-lg'>
                    <h1 className='font-semibold text-3xl text-center text-lime-300'>Chati-<span className='text-lime-600'>App</span></h1>
                    <p className='text-2xl text-lime-300'>Login</p>

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
                            type="text"
                            className="grow"
                            placeholder="Email"
                        />
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
                            type="password"
                            className="grow"
                            placeholder="Password"
                        />
                    </label>
                    {errors.password && <span className='text-red-500 text-sm font-semibold'>This field is required</span>}

                    <div className='flex justify-between'>
                        <p>
                            New user?
                            <Link to='/signup'
                                className='text-blue-600 underline cursor-pointer'>
                                Signup
                            </Link>
                        </p>
                        <input type="submit" value="Login" className='text-black px-2 py-1 cursor-pointer rounded-lg bg-lime-500 font-semibold' />
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login
