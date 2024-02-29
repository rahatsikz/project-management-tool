"use client";
import Collaboration from "@/assets/svg/Collaboration";
import Button from "@/components/UI/Button";
import { useSendEmailMutation } from "@/redux/api/inviteApi";
import { isLoggedIn } from "@/service/authService";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import Form from "@/components/Form/Form";
import FormInviteInput from "@/components/Form/FormInviteInput";
import toast from "react-hot-toast";
import { useAppSelector } from "@/redux/hook";

const InvitationPage = () => {
  const { push } = useRouter();
  const isLoging = isLoggedIn();
  const [sendEmail] = useSendEmailMutation();
  const handleSubmit = async (data: any) => {
    try {
      const res = await sendEmail(data).unwrap();
      if (!res?.success) {
        return toast.error("Something went wrong! Please try again later");
      }
      toast.success("Please check your Email");
    } catch (error) {
      toast.error("Something went wrong! Please try again later");
    }
  };

  useEffect(() => {
    if (!isLoging) {
      push("/signin");
    }
  }, [isLoging, push]);

  // ! code to delete from here

  const randomNumber = Math.floor(Math.random() * (1000 - 9 + 1)) + 9;

  return (
    <section>
      <div className='w-full h-[100vh] text-neutral flex flex-wrap items-center justify-center'>
        <div className='bg-main-background flex flex-1 flex-col lg:items-start items-center justify-center  h-full w-full leading-6 px-3 lg:pl-36'>
          <div className='md:w-7/12 w-full lg:w-9/12 md:text-center lg:text-start'>
            <h1 className='text-4xl pb-2'>Invite your team</h1>
            <p className=''>
              You&apos;re all set! Invite your teammates to <br /> collaborate
              with you.
            </p>
          </div>
          <div className='mt-4 md:w-7/12 w-full lg:w-9/12 pl-1 pr-3 lg:pl-0 lg:pr-0'>
            <Form submitHandler={handleSubmit}>
              <FormInviteInput
                name='email'
                type='email'
                placeholder='Enter Email'
              />
              <Button type='submit' className='btn p-4 mt-4'>
                Send
              </Button>
            </Form>
          </div>
          <div className='absolute bottom-[50px]  flex items-center justify-center gap-36 md:gap-60'>
            <div className='flex items-center justify-center'>
              <BiArrowBack size={20} />
              <Button
                variant='transparent'
                className='border-none'
                onClick={() => push("/create-project/project-title")}
              >
                Back
              </Button>
            </div>
            <div className=''>
              <Button
                variant='transparent'
                className='border-none'
                onClick={() => push(`/project/board/${randomNumber}`)}
              >
                Go to board
              </Button>
            </div>
          </div>
        </div>

        <div className='bg-gradient-to-l  from-slate-50 to-cyan-50 dark:from-slate-700 dark:to-slate-900 flex-1 flex-col items-center justify-center h-full w-full p-3 hidden xl:flex'>
          <Collaboration />
        </div>
      </div>
    </section>
  );
};

export default InvitationPage;
