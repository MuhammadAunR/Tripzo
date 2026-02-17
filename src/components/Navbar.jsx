import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { NavButtons } from './ButtonUi'

const Navbar = () => {

    const [navOptions, setNavOptions] = useState(false)

    const showNavOptions = () => {
        setNavOptions(!navOptions)
    }

    return (
        <>

            <nav className={`flex justify-between items-center px-20 max-lg:px-7 py-5 bg-white/40 backdrop-blur-3xl 2xl:max-w-385 2xl:mx-auto sticky top-0 z-50`}>
                <Link to={'/'}>
                    <h1 className='font-bold text-3xl cursor-pointer hover:scale-110 transition-transform ease-linear'>Tripzo</h1>
                </Link>
                <ul className='flex justify-evenly items-center gap-7 max-lg:hidden'>
                    <li className='font-semibold transform transition-all duration-300 ease-linear cursor-pointer tracking-wider text-lg hover:text-(--color-secondary)'>
                        <a href="#destinations">Destinations</a>
                    </li>
                    <li className='font-semibold transform transition-all duration-300 ease-linear cursor-pointer tracking-wider text-lg hover:text-(--color-secondary)'>Hotels</li>
                    <li className='font-semibold transform transition-all duration-300 ease-linear cursor-pointer tracking-wider text-lg hover:text-(--color-secondary)'>Flights</li>
                    <li className='font-semibold transform transition-all duration-300 ease-linear cursor-pointer tracking-wider text-lg hover:text-(--color-secondary)'>
                        <a href="#bookings">Bookings</a>
                    </li>
                    <Link to={'/login'}>
                        <NavButtons text={'Login'} />
                    </Link>
                    <Link to={'/signup'}>
                        <NavButtons text={'Signup'} />
                    </Link>
                </ul>
                <span onClick={() => showNavOptions()} className='lg:hidden cursor-pointer'>
                    {navOptions ? <X /> : <Menu />}
                </span>
            </nav>
            <ul className={`flex flex-col transition-all duration-500 ease-in-out gap-3 ${navOptions ? "max-h-96 opacity-100 p-7" : "max-h-0 opacity-0 p-0"} sticky top-19 z-50 bg-white/40 backdrop-blur-3xl `}>
                <li className='font-semibold transform transition-all duration-500 ease-linear cursor-pointer tracking-wider text-lg hover:text-black/90'>
                    <a onClick={() => showNavOptions()} href="#destinations">Destinations</a>
                </li>
                <li className='font-semibold transform transition-all duration-500 ease-linear cursor-pointer tracking-wider text-lg hover:text-black/90'>Hotels</li>
                <li className='font-semibold transform transition-all duration-500 ease-linear cursor-pointer tracking-wider text-lg hover:text-black/90'>Flights</li>
                <li className='font-semibold transform transition-all duration-500 ease-linear cursor-pointer tracking-wider text-lg hover:text-white'>
                    <a onClick={() => showNavOptions()} href="#bookings">Bookings</a>
                </li>
                <li className='font-semibold transform transition-all cursor-pointer tracking-wider text-lg hover:text-white duration-500 ease-linear'><Link to={'/login'}>Login</Link></li>
                <li className='font-semibold transform transition-all cursor-pointer tracking-wider text-lg hover:text-white'><Link to={'/signup'}>Signup</Link></li>
            </ul>
        </>
    )
}

export default Navbar
