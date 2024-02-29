"use client"
import React, { useState } from 'react';
import ImageGallery from '../ImageGallery';
import Form from '@/components/Form/Form';
import FormInput from '@/components/Form/FormInput';
import { yupResolver } from '@hookform/resolvers/yup';
import { boardSchema } from '@/schema/board.schema';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/redux/hook';
import { setProjectName } from '@/redux/action-reducer/projectSlice/projectSlice';



const ProjectCreateModal = ({ setIsModalOpen }: any) => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleCreateBoard = (data: any) => {
        dispatch(setProjectName(data.title));
        router.push("/create-project/invitation");

    }
    return (
        <>

            <div

                className=" dark:border-primary transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none fixed inset-0 flex items-center justify-center z-50"

            >
                <div

                    className={`bg-white dark:bg-gray-800 rounded-md   max-w-[300px]`}
                >
                    <div
                        className="shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] dark:shadow-md dark:shadow-primary  relative flex w-full flex-col rounded-md border-none  bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600"
                    >
                        <div className="flex  items-center justify-end gap-16 rounded-t-md border-b-1 border-neutral-100 border-opacity-100 p-3 dark:border-opacity-50">
                            {/* Modal title */}
                            <h5
                                className="text-md font-medium   leading-normal text-gray-800 dark:text-gray-200"

                            >
                                Create Board
                            </h5>
                            {/* Close button */}
                            <button
                                onClick={closeModal}
                                type="button"
                                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"


                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-6 w-6 text-md font-medium   leading-normal text-gray-800 dark:text-gray-200"
                                >
                                    <path d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <ImageGallery />
                        <div className='p-3'>
                            <Form submitHandler={handleCreateBoard} resolver={yupResolver(boardSchema)}>
                                <div className='flex flex-col gap-1'>
                                    <FormInput name='title' label='Board Title' />
                                    <hr className='my-1' />
                                    <div className="flex flex-shrink-0 flex-wrap items-center justify-end  border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                                        <button
                                            onClick={closeModal}
                                            type="button"
                                            className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"

                                        >
                                            Close
                                        </button>
                                        <button
                                            type="submit"
                                            className="ml-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"

                                        >
                                            Save changes
                                        </button>
                                    </div>
                                </div>

                            </Form>
                        </div>



                        {/* Modal footer */}

                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectCreateModal;
