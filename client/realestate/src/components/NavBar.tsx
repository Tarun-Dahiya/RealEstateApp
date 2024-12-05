import {FC, useState, useEffect} from 'react'
import { Link, useNavigate } from "react-router-dom"
import { FaUser, FaHome } from 'react-icons/fa'

const NavBar: FC = () => {

    const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false)
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('authToken')
        if (token) {
          setIsAuthenticated(true)  // User is logged in
        } else {
          setIsAuthenticated(false)  // User is not logged in
        }
    }, [localStorage.getItem('authToken')])

    const toggleDropdown = (): void => {
        setIsDropDownOpen(!isDropDownOpen)
    }

    const handleClickOutside = (e: MouseEvent) => {
        // Ensure e.target is an instance of Element
        const target = e.target as Element | null
    
        if (target && !target.closest('.dropdown')) {
          setIsDropDownOpen(false)
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside)
        return () => document.removeEventListener('click', handleClickOutside)
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('authToken') // Remove JWT token from localStorage
        setIsAuthenticated(false) // Set logged-out state
        navigate('/login')
    }

    return(
        <nav className='h-16 bg-blue-800 text-white pe-4 border-slate-300 border-b-2 dark:border-slate-800 w-full'>
            <div className="w-full flex items-center justify-between">
                {isAuthenticated ? (<ul className="h-16 flex justify-between list-none p-0 m-0 space-x-4">
                    <li className='p-4'>
                        <Link to='/'>
                            <div className='flex'>
                                <FaHome className="w-4 h-4 mr-2 mt-1 text-white" />
                                <label className='text-white cursor-pointer'>Real Estate</label>
                            </div>
                        </Link>
                    </li>
                    <li className='p-4'>
                        <Link to='/'>
                            <label className='text-white cursor-pointer'>Home</label>
                        </Link>
                    </li>
                    <li className='p-4'>
                        <Link to='/about'>
                            <label className='text-white cursor-pointer'>About</label>
                        </Link>
                    </li>
                    <li className='p-1 dropdown'>
                        <button onClick={toggleDropdown}
                        className="text-white bg-transparent hover:border-transparent focus:outline-none cursor-pointer"
                        aria-expanded={isDropDownOpen ? 'true' : 'false'}>Services</button>
                        {isDropDownOpen && 
                        <ul className='relative left-0 mt-2 p-2 bg-blue-800 text-white rounded-md shadow-lg z-10'>
                            <li className='text-white py-1'>
                                <Link to='/services/listings' className='block px-4 py-2 hover:bg-blue-700'>
                                    <label className='cursor-pointer text-white'>Listings</label>
                                </Link>
                            </li>
                            <li className='text-white py-1'>
                                <Link to='/services/add' className='block px-4 py-2 hover:bg-blue-700'>
                                    <label className='cursor-pointer text-white'>Add</label>
                                </Link>
                            </li>
                            <li className='text-white py-1'>
                                <Link to='/services/edit' className='block px-4 py-2 hover:bg-blue-700'>
                                    <label className='cursor-pointer text-white'>Edit</label>
                                </Link>
                            </li>
                        </ul>}
                    </li>
                    <li className='p-4'>
                        <Link to='/contactus'>
                            <label className='text-white cursor-pointer'>Contact Us</label>
                        </Link>
                    </li>
                </ul>) :
                (<ul className="h-16 flex justify-between list-none p-0 m-0 space-x-4">
                    <li className='p-4'>
                        <Link to='/'>
                            <div className='flex'>
                                <FaHome className="w-4 h-4 mr-2 mt-1 text-white" />
                                <label className='text-white cursor-pointer'>Real Estate</label>
                            </div>
                        </Link>
                    </li>
                </ul>)}
                <div className="flex items-center space-x-4">
                    {isAuthenticated ? (
                        <button onClick={handleLogout} className="flex items-center text-black">
                            <FaUser className="w-4 h-4 mr-2" /> Logout
                        </button>
                    ) : (
                        <Link to="/login" className="text-white flex items-center space-x-2">
                            <FaUser className="w-4 h-4" />
                        </Link>
                    )}
                </div>

            </div>
        </nav>
    )
}

export default NavBar