import { Eye, EyeOff } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import RippleButton from '../components/lightswind/ripple-button'

const Login = () => {
    const [passwordVisibility, setPasswordVisibility] = useState(false)
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const handlePasswordVisibility = () => {
        setPasswordVisibility(!passwordVisibility)
    }

    const handleLogin = () => {
        if (formData.password.trim() === "" || !formData.email.includes("@")) {
            toast.error("Input Fields required!")
        } else {
            toast.success("Logged In successfully")
            setFormData({
                email: "",
                password: "",
            })
        }

    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev, [name]: value
        }))
    }

    return (
        <>
            <Toaster />
            <section className='h-screen flex justify-center items-center'>
                <div className='flex flex-col items-center justify-center bg-white gap-10 py-10 rounded-2xl w-fit h-150 px-10'>
                    <Link to={'/'}>
                        <h1 className='font-bold text-5xl'>Tripzo</h1>
                    </Link>
                    <div className='flex flex-col gap-7 items-center'>
                        <div className='flex flex-col items-center justify-center gap-2'>
                            <h2 className='font-bold text-3xl'>Welcome Back</h2>
                            <div className='flex gap-1 items-center justify-center max-sm:flex-col'>
                                <p>New to <strong>Tripzo</strong>? Create an account</p>
                                <Link to={'/signup'} className='text-blue-500 cursor-pointer ease-initial underline-offset-2 underline'>Signup</Link>
                            </div>
                        </div>
                        <label
                            htmlFor="email"
                            className='flex flex-col'>
                            <input
                                required
                                onChange={handleChange}
                                name="email"
                                value={formData.email}
                                id='email'
                                type="email"
                                placeholder="Enter your email"
                                className="bg-white w-80 text-sm text-gray-500 rounded-lg ring-1 ring-gray-300  outline-none pl-2 py-2" />
                        </label>
                        <label
                            htmlFor="password"
                            className='flex flex-col relative'>
                            <span className='absolute right-3 top-2 text-gray-500 cursor-pointer'>
                                <Eye onClick={() => handlePasswordVisibility()} size={20} className={`${passwordVisibility ? "hidden" : "block"}`} />
                                <EyeOff onClick={() => handlePasswordVisibility()} size={20} className={`${passwordVisibility ? "block" : "hidden"}`} />
                            </span>
                            <input
                                minLength={8}
                                name="password"
                                id='password'
                                onChange={handleChange}
                                value={formData.password}
                                type={`${passwordVisibility ? "text" : "password"}`}
                                placeholder="Enter your password"
                                className="bg-white w-80 text-sm     text-gray-500 rounded-lg ring-1 ring-gray-300  outline-none pl-2 py-2" />
                        </label>

                        <div className='flex items-center justify-between w-full gap-2'>
                            <label htmlFor="remember-me" className='flex items-center gap-2 cursor-pointer'>
                                <input type="checkbox" id="remember-me" />
                                Remember me
                            </label>
                            <p className='cursor-pointer text-blue-500'>Forgot Password</p>
                        </div>
                        <div onClick={() => handleLogin()} >
                            <RippleButton
                                text="Login"
                                bgColor="#fff1da"
                                circleColor="#df6951"
                                width="150px"
                                height="50px"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login
