"use client";
import React, { useEffect, useState } from "react";
import GoogleSVG from "@/assets/svg/GoogleSVG";
import Button from "@/components/UI/Button";
import logo from "@/assets/images/taskhacks-logo-transparent.png";
import Image from "next/image";
import Link from "next/link";
import Lottie, { Options } from "react-lottie";
import * as animationData from "@/assets/lottie/gate.json";
import Tabs from "@/components/UI/TabContent";
import { tabItems } from "@/constant/tabItems";
const SignInPageContent = () => {
  const defaultOptions: Options = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };


  return (
    <div className='min-h-screen bg-gray-100 dark:bg-black/90  flex justify-center'>
      <div className='max-w-screen-xl m-0 sm:m-10 bg-main-background shadow sm:rounded-lg flex md:flex-col lg:flex-row justify-center flex-1'>
        <div className='w-full md:w-9/12 mx-auto lg:w-1/2 xl:w-6/12 py-28 px-6'>
          <div className='flex justify-center'>
            <Link href={"/"}>
              <Image alt='logo' src={logo.src} width={200} height={200} />
            </Link>
          </div>
          <div className='mt-12 flex flex-col items-center'>
            <div className='w-full flex-1 mt-8'>
              <div className='flex flex-col items-center lg:max-w-xs mx-auto'>
                <Button className='gap-8 w-full' variant='transparent'>
                  <GoogleSVG /> Sign In with Google
                </Button>
              </div>

              <div className='my-12 border-b text-center'>
                <div className='leading-none px-2 inline-block text-sm text-secondary tracking-wide font-medium bg-main-background transform translate-y-1/2'>
                  Or sign in with your email
                </div>
              </div>

              <Tabs tabs={tabItems} />

              <div className='mt-6'>
                <p className='text-center text-secondary'>
                  New to taskhacks ? &nbsp;
                  <Link href='/signup' className='text-primary'>
                    Sign Up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex-1 bg-cyan-500/30 text-center hidden  md:flex  justify-center items-center px-2 rounded-b-lg lg:rounded-r-lg'>
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
      </div>
    </div>
  );
};

export default SignInPageContent;
