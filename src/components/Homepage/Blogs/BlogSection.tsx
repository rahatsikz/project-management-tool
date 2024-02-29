"use client";

import { useGetBlogQuery } from "@/redux/api/blogApi";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Image from "next/image";
import { useEffect } from "react";
import BlogCard from "./BlogCard";
// ..

const BlogSection = () => {
  const { data } = useGetBlogQuery(undefined);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='container mx-auto my-12' data-aos-duration='2000'>
      <h1
        className='text-3xl font-bold text-center text-neutral capitalize'
        data-aos='fade-left'
      >
        useful project blogs
      </h1>

      <div className='grid lg:grid-cols-2 gap-8 mt-12 mx-4'>
        {data?.data?.slice(1, 3).map((blog: any) => (
          <BlogCard key={blog.id} info={blog} />
        ))}
      </div>

      <div className='mt-8 mx-4'>
        <div
          data-aos='fade-right'
          data-aos-duration='2000'
          data-aos-delay='300'
        >
          {data?.data?.slice(0, 1).map((blog: any) => (
            <div
              key={blog.id}
              className='flex flex-col overflow-hidden bg-main-background rounded shadow-lg border text-secondary shadow-slate-200 dark:shadow-slate-900 sm:flex-row cursor-pointer'
            >
              {/*  <!-- Image --> */}
              <figure className='flex-1'>
                <Image
                  src={blog.Image_url}
                  width={400}
                  height={400}
                  sizes='100vw'
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  alt='card image'
                  className='object-cover min-h-full aspect-auto lg:aspect-[4/1]'
                />
              </figure>
              {/*  <!-- Body--> */}
              <div className='flex-1 p-6 sm:mx-6 sm:px-0'>
                <header className='flex gap-4 mb-4'>
                  <div>
                    <h3 className='text-xl font-medium text-neutral'>
                      {blog.title}
                    </h3>
                    <p className='text-sm text-slate-400 mt-2'>
                      By {blog.author} , {blog.date}
                    </p>
                  </div>
                </header>
                <p className='hidden lg:block'>{blog?.description}</p>
                <p className='block lg:hidden'>
                  {blog?.description.slice(0, 150)}...
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
