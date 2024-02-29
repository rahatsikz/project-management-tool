"use client";

import Button from "@/components/UI/Button";
import { getUserInfo } from "@/service/authService";
import { useRouter } from "next/navigation";
import React from "react";

const CallToAction = () => {
  const userInfo = getUserInfo() as any;
  const router = useRouter();

  const handleNavigate = () => {
    // console.log("Clicked by rahat");
    if (userInfo) {
      router.push("/create-project");
    } else {
      router.push("/signup");
    }
  };
  return (
    <div
      className='px-4 xl:px-0 container mx-auto my-12'
      data-aos='fade-up'
      data-aos-duration='2000'
    >
      <div className='bg-primary flex flex-col items-center rounded-xl py-12'>
        <div className='text-center text-main-background'>
          <h2 className='text-3xl font-bold mb-4'>Supercharge Your Project</h2>
          <p className='mb-8 max-w-xl mx-auto px-2 xl:px-0'>
            Streamline collaboration, enhance productivity, and achieve project
            success with our powerful project management tools
          </p>
        </div>
        <Button
          variant='solid'
          onClick={handleNavigate}
          className='!bg-main-background !text-primary'
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default CallToAction;
