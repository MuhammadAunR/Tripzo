import { Eye, EyeOff } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import { RegisterButton } from '../components/ButtonUi';

const Signup = () => {
    const [passwordVisibility, setPasswordVisibility] = useState(false)
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev, [name]: value
        }))
    }

    const handleSignup = () => {
        console.log(formData)
        if (formData.firstName.trim() === "" || formData.lastName.trim() === "" || !formData.email.includes("@") || formData.password.trim() === "") {
            toast.error("Input field required!")
        } else {
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                password: "",
            })
            toast.success("Signup Successfully")
        }
    }

    const handlePasswordVisibility = () => {
        setPasswordVisibility(!passwordVisibility)
    }

    return (
        <>
            <Toaster />
            <section className='h-screen flex justify-center items-center'>
                <div className='flex flex-col items-center justify-center gap-10 py-10  rounded-2xl w-fit h-150 px-10'>
                    <Link to={'/'}>
                        <h1 className='font-bold text-5xl'>Tripzo</h1>
                    </Link>
                    <div className='flex flex-col gap-7 items-center'>
                        <div className='flex flex-col items-center justify-center gap-2'>
                            <h2 className='font-bold text-3xl'>Welcome To Tripzo</h2>
                            <div className='flex gap-1 items-center'>
                                <p>Already have an account?</p>
                                <Link to={'/login'} className='text-blue-500 cursor-pointer ease-initial underline-offset-2 underline'>Login</Link>
                            </div>
                        </div>
                        <label
                            htmlFor="first-name"
                            className='flex flex-col'>
                            <input
                                onChange={handleChange}
                                id='first-name'
                                name='firstName'
                                value={formData.firstName}
                                type="text"
                                placeholder="Enter first name"
                                className="bg-white w-80 text-sm text-gray-500 rounded-lg ring-1 ring-gray-300  outline-none pl-2 py-2" />
                        </label>
                        <label
                            htmlFor="last-name"
                            className='flex flex-col'>
                            <input
                                onChange={handleChange}
                                id='last-name'
                                name='lastName'
                                value={formData.lastName}
                                type="text"
                                placeholder="Enter last name"
                                className="bg-white w-80 text-sm text-gray-500 rounded-lg ring-1 ring-gray-300  outline-none pl-2 py-2" />
                        </label>
                        <label
                            htmlFor="email"
                            className='flex flex-col'>
                            <input
                                onChange={handleChange}
                                id='email'
                                name='email'
                                value={formData.email}
                                type="email"
                                placeholder="Enter your email"
                                className="bg-white w-80 text-sm text-gray-500 rounded-lg ring-1 ring-gray-300  outline-none pl-2 py-2" />
                        </label>
                        <label
                            htmlFor="password"
                            className='flex flex-col relative'>
                            <span className='absolute right-2 top-2 text-gray-500 cursor-pointer'>
                                <Eye onClick={() => handlePasswordVisibility()} size={20} className={`${passwordVisibility ? "hidden" : "block"}`} />
                                <EyeOff onClick={() => handlePasswordVisibility()} size={20} className={`${passwordVisibility ? "block" : "hidden"}`} />
                            </span>
                            <input
                                onChange={handleChange}
                                id='password'
                                name='password'
                                value={formData.password}
                                type={`${passwordVisibility ? "text" : "password"}`}
                                placeholder="Enter your password"
                                className="bg-white w-80 text-sm     text-gray-500 rounded-lg ring-1 ring-gray-300  outline-none pl-2 py-2" />
                        </label>
                        <div onClick={() => handleSignup()} >
                            <RegisterButton text={'Signup'} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signup
