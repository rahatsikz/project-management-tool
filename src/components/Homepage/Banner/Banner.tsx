"use client";

import Glide from "@glidejs/glide";
import { useEffect } from "react";
import banner1 from "../../../assets/images/banner/banners.gif";

import Image from "next/image";

const Banner = () => {
  const bannerData = [
    {
      image: banner1.src,

      title: "Elevate Your Projects to Success",
      description:
        "Experience seamless project management with our advanced tools and expert guidance. Elevate your projects to new heights of success",
    },
  ];

  useEffect(() => {
    const slider = new Glide(".glide-03", {
      type: "slider",
      focusAt: "center",
      perView: 1,
      autoplay: 7000,
      animationDuration: 700,
      gap: 0,
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <div className='relative w-full glide-03'>
      <div className='overflow-hidden' data-glide-el='track'>
        <ul className='whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0'>
          {bannerData.map((banner, index) => (
            <li key={index}>
              <div
                style={{
                  backgroundPosition: "top",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  width: "100%",

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src={banner.image}
                  width={1920}
                  height={100}
                  alt='banner'
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/*    <!-- Controls --> */}

      <div
        className='absolute bottom-0 flex items-center justify-center w-full gap-2'
        data-glide-el='controls[nav]'
      >
        <button
          className='p-4 group'
          data-glide-dir='=0'
          aria-label='goto slide 1'
        >
          <span className='block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-gray-400 focus:outline-none'></span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
