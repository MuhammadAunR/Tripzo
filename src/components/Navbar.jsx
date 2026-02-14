import { Menu, X } from 'lucide-react'
import React, { useState } from 'react'

const Navbar = () => {

    const [navOptions, setNavOptions] = useState(false)

    const showNavOptions = () => {
        setNavOptions(!navOptions)
    }

    return (
        <>
            <nav className='flex justify-between items-center px-20 max-sm:px-7 py-5 bg-linear-to-r from-white to-(--color-primary)'>
                <h1 className='font-bold text-3xl cursor-pointer'>Tripzo</h1>
                <ul className='flex justify-evenly items-center gap-7 max-lg:hidden'>
                    <li className='font-semibold transform transition-all cursor-pointer tracking-wider text-lg hover:text-gray-600'>Destinations</li>
                    <li className='font-semibold transform transition-all cursor-pointer tracking-wider text-lg hover:text-gray-600'>Hotels</li>
                    <li className='font-semibold transform transition-all cursor-pointer tracking-wider text-lg hover:text-gray-600'>Flights</li>
                    <li className='font-semibold transform transition-all cursor-pointer tracking-wider text-lg hover:text-gray-600'>Bookings</li>
                    <button className='font-semibold hover:ring-2 hover:ring-(--color-secondary) py-1 text-lg text-white px-5 rounded-full transition-all ease-linear bg-(--color-secondary) cursor-pointer'>Login</button>
                    <button className='font-semibold hover:ring-2 hover:ring-(--color-secondary) py-1 text-lg text-white px-5 rounded-full transition-all ease-linear bg-(--color-secondary) cursor-pointer'>Signup</button>
                </ul>
                <span onClick={() => showNavOptions()} className='lg:hidden cursor-pointer'>
                    {navOptions ? <X /> : <Menu />}
                </span>
            </nav>
            <section className={`h-fit ${navOptions ? "h-fit p-7" : "h-px"} lg:hidden transition-all duration-500 ease-linear max-sm:px-7 px-20 bg-linear-to-r from-white to-(--color-primary) border-t-2 border-t-gray-600`}>
                <ul className={`flex flex-col gap-3 ${navOptions ? "block" : "hidden"}`}>
                    <li className='font-semibold transform transition-all cursor-pointer tracking-wider text-lg hover:text-gray-600'>Destinations</li>
                    <li className='font-semibold transform transition-all cursor-pointer tracking-wider text-lg hover:text-gray-600'>Hotels</li>
                    <li className='font-semibold transform transition-all cursor-pointer tracking-wider text-lg hover:text-gray-600'>Flights</li>
                    <li className='font-semibold transform transition-all cursor-pointer tracking-wider text-lg hover:text-gray-600'>Bookings</li>
                    <li className='font-semibold transform transition-all cursor-pointer tracking-wider text-lg hover:text-gray-600'>Login</li>
                    <li className='font-semibold transform transition-all cursor-pointer tracking-wider text-lg hover:text-gray-600'>Signup</li>

                </ul>
            </section>
        </>
    )
}

export default Navbar
