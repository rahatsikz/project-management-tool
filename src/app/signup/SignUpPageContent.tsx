"use client";
import GoogleSVG from "@/assets/svg/GoogleSVG";
import Button from "@/components/UI/Button";
import React, { useEffect, useState } from "react";
import logo from "@/assets/images/taskhacks-logo-transparent.png";
import Image from "next/image";
import "./style.css";
import toast from "react-hot-toast";
import Link from "next/link";
import Lottie from "react-lottie";
import * as animationData from "@/assets/lottie/wodden_door.json";
import { useRouter } from "next/navigation";
import { useUserCreateMutation } from "@/redux/api/authApi";
import Form from "@/components/Form/Form";
import FormInput from "@/components/Form/FormInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignUpSchema } from "@/schema/auth.schema";
import FormFileInput from "@/components/Form/FormFileInput";
import { ImageUpload } from "@/service/hostInImageBB";

const SignUpPageContent = () => {
  const [doorOpen, setDoorOpen] = useState(false);
  const router = useRouter();
  const [userCreate, { isSuccess, isError }] = useUserCreateMutation();
  const handleSignUp = async (data: any) => {
    // const image = await ImageUpload(data?.image)
    const userData = {
      name: data?.name,
      email: data?.email,
      password: data?.password,
      // profileImg: image?.display_url
    };
    try {
      const res = await userCreate({ ...userData }).unwrap();
      if (!res?.success) {
        return toast.error("Email has already registerd");
      }
      toast.success(res?.message);
      router.push("/signin");
    } catch (err: any) {
      toast.error("Something went Wrong");
    }
  };

  const defaultOptions = {
    loop: false,
    autoplay: doorOpen,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    if (!isError && isSuccess) {
      setDoorOpen(true);
    }
  }, [isError, isSuccess, doorOpen]);

  return (
    <div className='min-h-screen bg-gray-100 dark:bg-black/90  flex justify-center'>
      <div className='max-w-screen-xl m-0 sm:m-10 bg-main-background shadow sm:rounded-lg flex md:flex-col lg:flex-row-reverse justify-center flex-1'>
        <div className='w-full md:w-9/12 mx-auto lg:w-1/2 xl:w-6/12 py-14 px-6'>
          <div className='flex justify-center'>
            <Link href={"/"}>
              <Image alt='logo' src={logo.src} width={200} height={200} />
            </Link>
          </div>
          <div className='mt-12 flex flex-col items-center'>
            <div className='w-full flex-1 mt-8'>
              <div className='my-12 border-b text-center'>
                <div className='leading-none px-2 inline-block text-sm text-secondary tracking-wide font-medium bg-main-background transform translate-y-1/2'>
                  sign up with your email
                </div>
              </div>
              <Form
                submitHandler={handleSignUp}
                resolver={yupResolver(SignUpSchema)}
              >
                <div className='mx-auto lg:max-w-sm  flex flex-col gap-3 dark:text-neutral'>
                  <FormInput
                    name='name'
                    type='text'
                    placeholder='Full Name'
                    required
                  />
                  <FormInput
                    name='email'
                    type='email'
                    placeholder='Email'
                    required
                  />
                  <FormInput
                    name='password'
                    type='password'
                    placeholder='Password'
                    required
                  />
                  <FormInput
                    name='confirmPassword'
                    type='password'
                    placeholder='Confirm Password'
                    required
                  />

                  {/* <FormFileInput
                    name='image'
                  /> */}
                  <Button className='w-full' type='submit'>
                    Sign Up
                  </Button>
                </div>
              </Form>

              <div className='mt-6'>
                <p className='text-center text-secondary'>
                  Already have an account ? &nbsp;
                  <Link href='/signin' className='text-primary '>
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex-1 bg-cyan-500/30 text-center hidden  md:flex  justify-center items-center px-2 max-lg:rounded-b-lg lg:rounded-l-lg'>
          {/* <LoginSVG /> */}

          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
      </div>
    </div>
  );
};

export default SignUpPageContent;
