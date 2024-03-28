"use client"
import React from 'react'
import Link from 'next/link'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../redux/authSlice'
const Navbar = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector((state) => state.auth.isAuth)
    const handleLogout = async () => {
        const res = await axios.get('/api/logout')
        const data = await res.data
        if (data.success) {
            toast.success(data.message)
            window.location.reload()
            dispatch(logoutUser())
        } else {
            toast.error(data.message)
        }
    }
    return (
        <nav className='list-none flex h-16   items-center  justify-between shadow-md m-1   w-full px-5'>
            <div>
                <Link className='text-xl font-serif text-purple-800 font-semibold ' href='/'>Todo APP</Link>
            </div>
            <div>
                {
                    isAuth && <Link className='text-lg font-semibold text-purple-500 hover:text-purple-400' href='/dashboard'> Dashboard  </Link>

                }
                {
                    isAuth ? (
                        <span onClick={handleLogout} className='text-lg cursor-pointer  font-semibold text-purple-500 hover:text-purple-400' >logout </span>
                    ) :
                        (
                            <Link className='text-lg  font-semibold text-purple-500 hover:text-purple-400' href='/login'>Login </Link>

                        )
                }

            </div>

        </nav>
    )
}

export default Navbar
