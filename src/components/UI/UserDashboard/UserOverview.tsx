"use client"

import React, { useState } from 'react'
import { MdMapsHomeWork } from "react-icons/md";
import logo from "@/assets/images/taskhacks-logo-transparent.png"
import { HiOutlineViewGrid } from "react-icons/hi";
import { FaRegClock } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import Image from 'next/image';
import ProjectCreateModal from '../Modal/ProjectAddModal';
import UserExistedBoardCard from '../UserExistedBoardCard';
export default function UserOverview() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };
    const items = [
        {
            id: 1,
            label: "Task Hacks",
            path: "/project/board"
        },
        {
            id: 2,
            label: "Dev Hacks",
            path: "/project/board"
        },

    ]

    return (
        <>
            {/* recently view */}

            <div>
                <h1 className='uppercase dark:text-gray-400  text-gray-700 font-semibold flex items-center gap-2'><FaRegClock /> Recently Viewed</h1>
                <hr className='my-2' />
                <div className='flex flex-wrap gap-3 mt-6'>
                    {items.map((item: any) => <UserExistedBoardCard key={item?.id} path={item?.path} label={item?.label} />)}
                </div>
            </div>
            {/* your Workspaces  */}
            <div className='my-20'>
                <h1 className='uppercase dark:text-gray-400 text-gray-700 font-semibold '>Your Workspace</h1>
                <hr className='my-2' />
                {/* nav */}
                <div className='flex items-center justify-between'>
                    <div className='md:flex hidden'>
                        <Image src={logo} width={150} height={150} alt='' />

                    </div>
                    <div className='flex gap-2'>

                        <button
                            type="button"
                            className="flex justify-center items-center gap-1 rounded bg-gray-500 px-4 py-1.5  text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"

                        >
                            <MdMapsHomeWork /> <span>Boards</span>

                        </button>
                        <button
                            type="button"
                            className="flex justify-center items-center gap-1 rounded bg-gray-500 px-4 py-1.5  text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"

                        >
                            <HiOutlineViewGrid /> <span>View</span>

                        </button>
                        <button
                            type="button"
                            className="flex justify-center items-center gap-1 rounded bg-gray-500 px-4 py-1.5  text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"

                        >
                            <FaUser /> <span>Member</span>

                        </button>
                        <button
                            type="button"
                            className="flex justify-center items-center gap-1 rounded bg-gray-500 px-4 py-1.5  text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"

                        >
                            <IoIosSettings /> <span>Setting</span>

                        </button>

                    </div>

                </div>
                <div className='flex flex-wrap gap-3 mt-6'>

                    {items.map((item: any) => <UserExistedBoardCard key={item?.id} path={item?.path} label={item?.label} />)}

                    <div className='cursor-pointer' onClick={openModal}>
                        <div className=" bg-cover-text  before:from-gray-400
     before:to-gray-500 ">
                            <h1 className="text-white text-md font-semibold text-center mt-7">Create new Board</h1>
                        </div>
                    </div>
                </div>
            </div>
            {/* guest workspaces */}
            <div >
                <h1 className='uppercase dark:text-gray-400 text-gray-700 font-semibold '>Guest Workspace </h1>
                <hr className='my-2' />
                {/* nav */}

                <div className='flex flex-wrap gap-3 mt-2'>

                    {items.map((item: any) => <UserExistedBoardCard key={item?.id} path={item?.path} label={item?.label} />)}


                </div>

            </div>
            {isModalOpen && <ProjectCreateModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />}
        </>
    )
}
