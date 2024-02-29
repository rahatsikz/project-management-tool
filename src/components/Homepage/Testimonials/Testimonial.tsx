"use client";

import Glide from "@glidejs/glide";
import { useEffect } from "react";
import { users } from "@/db/data";
import TestimonialCard from "./TestimonialCard";
type classes = {
  activeNav: string;
};

const Testimonials = () => {
  useEffect(() => {
    const slider = new Glide(".glide-02", {
      type: "carousel",
      focusAt: "center",
      perView: 3,
      autoplay: 2000,
      animationDuration: 1200,
      gap: 24,

      breakpoints: {
        1024: {
          perView: 1,
        },
        640: {
          perView: 1,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);
  return (
    <div className='relative bg-gradient-to-t dark:bg-gradient-to-r from-cyan-50 to-cyan-100 dark:from-slate-700 dark:to-slate-900 pb-24 px-4 md:px-24 overflow-hidden'>
      <h1 className='text-2xl tracking-widest font-bold text-center text-neutral pt-12 pb-10'>
        Hear from Our Happy Customers
      </h1>

      <>
        {/*<!-- Component: Carousel with indicators inside --> */}
        <div className='glide-02 relative w-full'>
          {/*    <!-- Slides --> */}
          <div className='overflow-hidden' data-glide-el='track'>
            <div className='whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0'>
              {users?.map((item: any) => {
                return <TestimonialCard key={item.id} data={item} />;
              })}
            </div>
          </div>

          {/*    <!-- Indicators --> */}
          <div
            className='absolute -bottom-16 flex w-full items-center justify-center gap-2'
            data-glide-el='controls[nav]'
          >
            <button
              className='group p-4'
              data-glide-dir='=0'
              aria-label='goto slide 1'
            >
              <span className='block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none'></span>
            </button>
            <button
              className='group p-4'
              data-glide-dir='=1'
              aria-label='goto slide 2'
            >
              <span className='block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none'></span>
            </button>
            <button
              className='group p-4'
              data-glide-dir='=2'
              aria-label='goto slide 3'
            >
              <span className='block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none'></span>
            </button>
            <button
              className='group p-4'
              data-glide-dir='=3'
              aria-label='goto slide 4'
            >
              <span className='block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none'></span>
            </button>
          </div>
        </div>
      </>
    </div>
  );
};

export default Testimonials;

// export const revalidate = 0;
// import { users } from "../../../data";

// import TestimonialCard from "./TestimonialCard";

// export default async function Testimonials() {
//   return (
//     <div className="bg-sky-500 h-[100vh] relative overflow-hidden flex flex-col items-center justify-around my-8">
//       <div
//         className="
//         grid
//         grid-cols-1
//         sm:grid-cols-2
//         md:grid-cols-3
//         lg:grid-cols-4
//         xl:grid-cols-5
//         2xl:grid-cols-6
//         gap-8
//         px-8
//         "
//       >
//         {users?.map((item: any) => {
//           return <TestimonialCard key={item.id} data={item} />;
//         })}
//       </div>
//     </div>
//   );
// }
