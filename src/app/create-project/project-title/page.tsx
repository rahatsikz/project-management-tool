"use client";
import Button from "@/components/UI/Button";
import { getUserInfo } from "@/service/authService";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import OfficeWork from "@/assets/svg/OfficeWork";
import { useAppDispatch } from "@/redux/hook";
import { setProjectName } from "@/redux/action-reducer/projectSlice/projectSlice";
import Form from "@/components/Form/Form";
import FormInput from "@/components/Form/FormInput";
import { useGetUserQuery } from "@/redux/api/authApi";
import { boardSchema } from "@/schema/board.schema";
import { yupResolver } from "@hookform/resolvers/yup";

const CreateProjectPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const onSubmit = (data: any) => {
    dispatch(setProjectName(data.title));
    router.push("/create-project/invitation");
  };

  const userInfo = getUserInfo() as any;
  const user = useGetUserQuery(userInfo?.id);

  return (
    <>
      <div className='w-full h-[100vh] text-neutral flex flex-wrap items-center justify-center relative'>
        <div className='bg-main-background flex flex-1 flex-col lg:items-start items-center justify-center  h-full w-full leading-6 px-3 lg:pl-36'>
          <div className='md:w-7/12 w-full lg:w-8/12'>
            <h1 className='text-4xl pb-2'>It all starts with the board</h1>
            <p className=''>
              A board is where work happens in Task-Hacks. <br /> You &apos;ll
              find your cards, lists, due dates,
              <br /> and more to keep you organized and on track.
            </p>
          </div>

          <div className='mt-4 w-full'>
            <Form submitHandler={onSubmit} resolver={yupResolver(boardSchema)}>
              <div className='w-full flex flex-col pl-2 pr-4 lg:pl-0 lg:pr-0 items-start md:items-center lg:items-start'>
                <div className='text-black md:w-7/12 w-full lg:w-8/12'>
                  <h4 className='text-neutral'>Enter a board name</h4>
                  <FormInput name='title' label='' type='text' required />
                </div>

                <div className='text-black mt-4 md:w-7/12 w-full lg:w-8/12 '>
                  <h4 className='text-neutral'>Project Creator</h4>
                  <FormInput
                    name='teamLeader'
                    label=''
                    type='text'
                    value={user?.data?.data?.email}
                    readonly
                  />
                </div>
                <div className='md:w-7/12 w-full lg:w-8/12 mt-4'>
                  <Button type='submit' className='btn p-4 mt-4'>
                    Next
                  </Button>
                </div>
              </div>
            </Form>
          </div>
          <div className='absolute bottom-[30px]  flex items-center justify-center gap-36 md:gap-60'>
            <div className='flex items-center justify-center'>
              <BiArrowBack size={20} />
              <Button
                variant='transparent'
                className='border-none'
                onClick={() => router.push("/create-project")}
              >
                Back
              </Button>
            </div>
            {/* <div className=''>
              <Button
                variant='transparent'
                className='border-none'
                onClick={() => push("/create-project/invitation")}
              >
                skip
              </Button>
            </div> */}
          </div>
        </div>

        <div className='bg-gradient-to-l  from-slate-50 to-cyan-50 dark:from-slate-700 dark:to-slate-900 flex-1 flex-col items-center justify-center h-full w-full p-3 hidden xl:flex'>
          <OfficeWork />
        </div>
      </div>
    </>
  );
};

export default CreateProjectPage;
