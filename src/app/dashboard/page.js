'use client'
import axios from "axios";
import { TiTick } from "react-icons/ti";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { loginUser, setUser } from "../redux/authSlice";

export default function Dashboard() {
    const [title, setTitle] = useState('')
    const [getdata, setData] = useState([])
    const [edit, setEdit] = useState(false)
    const [updatedTitle, setupdatedTitle] = useState('')
    const [selectedpost, setSelectedPost] = useState('')
    const dispatch = useDispatch()
    const postTodo = async () => {
        const res = await axios.post('/api/post-data', { title })
        const data = await res.data;
        if (data.success) {
            toast.success(data.message)
        } else {
            toast.error(data.message)
        }
    }

    const GetTodo = async () => {
        const res = await axios.get('/api/get-data')
        const data = await res.data;
        setData(data.title)
        if (data.success) {
            toast.success(data.message)
        } else {
            toast.error(data.message)
        }
    }

    const DeleteTodo = async (id) => {
        const res = await axios.delete(`/api/delt-todo/${id}`)
        const data = await res.data;

        if (data.success) {
            toast.success(data.message)
        } else {
            toast.error(data.message)
        }
    }

    const UpdateTodo = async (id) => {
        const res = await axios.put(`/api/update-todo/${id}`, { title: updatedTitle })
        const data = await res.data;

        if (data.success) {
            toast.success(data.message)
        } else {
            toast.error(data.message)
        }
    }

    const getUser = async () => {
        const res = await axios.get('/api/get-user')
        const data = await res.data;
        if (data.success) {
            dispatch(loginUser())
            dispatch(setUser(data.User))
        }
    }

    useEffect(() => {
        GetTodo()
        getUser()
    }, [])

    return (
        <>
            <div className=" flex flex-col items-center justify-center ">
                <div className="m-[8rem]">

                    <p className="text-xl font-sans text-center "> TODO APP</p>
                    <div className="flex justify-center items-center ">
                        <input value={title} onChange={(e) => setTitle(e.target.value)} className="p-3 m-2 bg-slate-200 rounded-md outline-none shadow-md border hover:border-purple-400" type="text" placeholder="enter your task " />
                        <button onClick={postTodo} className="p-3 px-6 m-2 bg-purple-400 rounded-md hover:bg-purple-500">Add </button>
                    </div>
                    <div >
                        {
                            getdata.map((i) => {
                                return (
                                    <div className="p-4 px-6 m-2 rounded-md bg-slate-300 mx-10  flex justify-center items-center gap-5">
                                        <p className={`${selectedpost === i._id && edit && "outline-none bg-slate-400"}`} contentEditable={edit} onInput={(e) => setupdatedTitle(e.target.innerText)} >{i.title}</p>
                                        {
                                            edit ? (<TiTick onClick={() => {
                                                UpdateTodo(i._id)
                                                setEdit(!edit)
                                            }} className="cursor-pointer" />) :
                                                (<MdModeEdit onClick={() => {
                                                    setSelectedPost(i._id);
                                                    setEdit(!edit);
                                                }} size={15} color="purple" className="cursor-pointer" />)
                                        }

                                        <MdDelete size={15} onClick={() => DeleteTodo(i._id)} color="red" className="cursor-pointer" />

                                    </div>
                                )
                            })

                        }
                    </div>
                </div>
            </div>

        </>
    );
}
