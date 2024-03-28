'use client'
import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
const Signup = () => {
    const [name, setname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const route = useRouter()
    const HandleSubmit = async (e) => {
        e.preventDefault()
        const res = await axios.post('/api/signup', { name, email, password })
        const data = await res.data;
        if (data.success) {
            toast.success(data.message)
            route.push('/login')
            setname("")
            setEmail("")
            setPassword("")
        }
        else {
            toast.error(data.message)
        }

    }
    return (
        <div className="flex items-center justify-center h-[80vh]">
            <div className="w-full max-w-md">
                <form
                    className="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4"
                    onSubmit={HandleSubmit}
                >
                    <div className="text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-4">
                        Signup To Your Account
                    </div>

                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-normal mb-2"
                            htmlFor="username"
                        >
                            Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="name"
                            type="name"
                            value={name}
                            onChange={(e) => setname(e.target.value)}
                            requipurple
                            placeholder="Name"

                        />
                    </div>

                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-normal mb-2"
                            htmlFor="username"
                        >
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            requipurple
                            placeholder="Email"

                        />
                    </div>

                    <div className="mb-6">
                        <label
                            className="block text-gray-700 text-sm font-normal mb-2"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}

                            requipurple
                            autoComplete="false"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="px-4 py-2 rounded text-white inline-block shadow-lg bg-purple-500 hover:bg-purple-600 focus:bg-purple-700"
                            type="submit"
                        >
                            Sign up
                        </button>
                    </div>
                    <div className="text-xs flex gap-2 mt-2">
                        <span>Or</span>
                        <Link href='/login'>

                            <p className="text-purple-500 hover:underline">
                                you have account login here
                            </p>
                        </Link>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup
