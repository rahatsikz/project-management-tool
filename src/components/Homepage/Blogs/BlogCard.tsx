import Image from "next/image";
import React from "react";

const BlogCard = ({ info }: any) => {

  const { title, date, Image_url, description, author, id } = info;

  return (
    <div
      className='flex flex-col overflow-hidden bg-main-background rounded shadow-lg border text-secondary dark:shadow-slate-900 shadow-slate-200 sm:flex-row cursor-pointer'
      data-aos={id === 2 ? "fade-right" : "fade-left"}
      data-aos-duration='2000'
      data-aos-delay='300'
    >

      {/*  <!-- Image --> */}
      <figure className='flex-1'>
        <Image
          src={Image_url}
          width={400}
          height={400}
          sizes='100vw'
          style={{
            width: "100%",
            height: "auto",
          }}
          alt='card image'
          className='object-cover min-h-full aspect-auto'
        />
      </figure>
      {/*  <!-- Body--> */}
      <div className='flex-1 p-6 sm:mx-6 sm:px-0'>
        <header className='flex gap-4 mb-4'>
          <div>

            <h3 className='text-xl font-medium text-neutral'>{title}</h3>
            <p className='text-sm text-slate-400 mt-2'>

              {" "}
              By {author} , {date}
            </p>
          </div>
        </header>
        <p>{description.slice(0, 150)}...</p>
      </div>
    </div>
  );
};

export default BlogCard;
