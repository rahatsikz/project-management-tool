"use client";

import Image from "next/image";
// import { Rating } from "@mui/material";

interface TestimonialCardProps {
  data: any;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ data }) => {
  return (
    <div
      className='
        col-span-1
        cursor-pointer
        border-slate-200
        bg-main-background
        dark:bg-slate-900
        transition
        hover:scale-105
        text-center
        p-8
        rounded-lg
             
    '
    >
      <div
        className='
      flex 
      flex-col 
      items-center 
      w-full 
      gap-1'
      >
        <div className=''>
          <Image
            src={data.logo}
            width='30'
            height='30'
            alt={data.name}
            className='rounded-full'
          />
          <p className='my-8 text-neutral p-3 text-base font-medium text-left'>
            {data.comment}
          </p>
          <div className='flex items-center'>
            <Image
              className='rounded-full aspect-square'
              src={data.avatar}
              width='45'
              height='45'
              // objectFit='cover'
              alt={data.name}
            />
            <div className='flex flex-col justify-start items-start ml-5 pb-2'>
              <span className='font-bold text-neutral'>{data.name}</span>
              <span className='text-secondary text-sm'>{data.title}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
