"use client";
import React, { useState } from "react";
import Link from "next/link";
import { MenuItem } from "./MenuItem";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import { useAppSelector } from "@/redux/hook";
import { kanbenSidebarItems } from "@/constant/kanbanSidebarItems";

const Sidebar = () => {
  const { project } = useAppSelector((state) => state.project);
  const [showSidebar, setShowSidebar] = useState<boolean>(true);
  const className =
    "border-r w-[250px] transition-[margin-left] ease-in-out duration-500 ";
  const appendClass = showSidebar ? " ml-0" : " ml-[-250px] ";

  return (
    <>
      <div
        className={`${className}${appendClass} hidden xl:block bg-main-background`}
      >
        <div className='px-4 py-2 flex justify-between items-center gap-x-3'>
          <Link href='/' className='text-gray-900 dark:text-white w-full'>
            {project?.projectName ? project?.projectName : "Default Board"}
          </Link>
          <button className='hover:bg-primary rounded-md p-2'>
            <IoMdArrowDropleft
              onClick={() => {
                setShowSidebar((oldVal) => !oldVal);
              }}
              className='text-2xl text-neutral cursor-pointer'
            />
          </button>
        </div>
        <hr />
        <div className='h-full px-3 py-4 overflow-y-auto bg-main-background'>
          <ul className='space-y-2 font-medium'>
            {kanbenSidebarItems.map((item) => (
              <MenuItem
                key={item.key}
                label={item.label}
                path={item.path}
                icon={item.icon}
              />
            ))}
          </ul>
        </div>
      </div>
      {!showSidebar && (
        <div className='h-[100vh] w-10 border-r bg-main-background  relative '>
          <IoIosArrowDropright
            onClick={() => {
              setShowSidebar((oldVal) => !oldVal);
            }}
            className='text-3xl absolute left-1 text-neutral cursor-pointer  top-8  z-10 text-gray-600 dark:text-gray-300 rounded-full '
          />
        </div>
      )}
    </>
  );
};

export default Sidebar;
