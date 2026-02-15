import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import RippleButton from './lightswind/ripple-button'

const Navbar = () => {

    const [navOptions, setNavOptions] = useState(false)

    const showNavOptions = () => {
        setNavOptions(!navOptions)
    }

    return (
        <>
            <nav className='flex justify-between items-center px-20 max-lg:px-7 py-5 bg-linear-to-r from-white to-(--color-primary) 2xl:max-w-385 2xl:mx-auto'>
                <Link to={'/'}>
                    <h1 className='font-bold text-3xl cursor-pointer hover:scale-110 transition-transform ease-linear'>Tripzo</h1>
                </Link>
                <ul className='flex justify-evenly items-center gap-7 max-lg:hidden'>
                    <li className='font-semibold transform transition-all cursor-pointer tracking-wider text-lg hover:text-gray-600'>Destinations</li>
                    <li className='font-semibold transform transition-all cursor-pointer tracking-wider text-lg hover:text-gray-600'>Hotels</li>
                    <li className='font-semibold transform transition-all cursor-pointer tracking-wider text-lg hover:text-gray-600'>Flights</li>
                    <li className='font-semibold transform transition-all cursor-pointer tracking-wider text-lg hover:text-gray-600'>Bookings</li>
                    <Link to={'/login'}>
                        <RippleButton
                            text="Login"
                            bgColor="#df6951"
                            circleColor="#fff1da"
                            width="100px"
                            height="40px"
                        />
                    </Link>
                    <Link to={'/signup'}>
                        <RippleButton
                            text="Signup"
                            bgColor="#df6951"
                            circleColor="#fff1da"
                            width="100px"
                            height="40px"
                        />
                    </Link>
                </ul>
                <span onClick={() => showNavOptions()} className='lg:hidden cursor-pointer'>
                    {navOptions ? <X  /> : <Menu />}
                </span>
            </nav>
            <section className={`h-fit ${navOptions ? "h-fit p-7" : "h-px"} lg:hidden transition-all duration-500 ease-linear max-sm:px-7 px-20 bg-linear-to-r from-white to-(--color-primary) border-t-2 border-t-gray-600`}>
                <ul className={`flex flex-col gap-3 ${navOptions ? "block" : "hidden"}`}>
                    <li className='font-semibold transform transition-all cursor-pointer tracking-wider text-lg hover:text-gray-600'>Destinations</li>
                    <li className='font-semibold transform transition-all cursor-pointer tracking-wider text-lg hover:text-gray-600'>Hotels</li>
                    <li className='font-semibold transform transition-all cursor-pointer tracking-wider text-lg hover:text-gray-600'>Flights</li>
                    <li className='font-semibold transform transition-all cursor-pointer tracking-wider text-lg hover:text-gray-600'>Bookings</li>
                    <li className='font-semibold transform transition-all cursor-pointer tracking-wider text-lg hover:text-gray-600'><Link to={'/login'}>Login</Link></li>
                    <li className='font-semibold transform transition-all cursor-pointer tracking-wider text-lg hover:text-gray-600'><Link to={'/signup'}>Signup</Link></li>

                </ul>
            </section>
        </>
    )
}

export default Navbar
