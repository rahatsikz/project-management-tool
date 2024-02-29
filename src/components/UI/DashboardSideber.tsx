"use client";
import React, { useState } from "react";
import Link from "next/link";
import { MenuItem } from "./MenuItem";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import { useAppSelector } from "@/redux/hook";
import { dashboardSidebarItems } from "@/constant/dashboardSidebarItems";
import { getUserInfo } from "@/service/authService";

const DashboardSidebar = () => {
  const { project } = useAppSelector((state) => state.project);
  const [showSidebar, setShowSidebar] = useState<boolean>(true);
  const className =
    "border-r w-[250px] transition-[margin-left] ease-in-out duration-500 ";
  const appendClass = showSidebar ? " ml-0" : " ml-[-250px] ";
  const userInfo = getUserInfo() as any;
  const sidebarItems = dashboardSidebarItems(userInfo?.role)
  return (
    <>
      <div className={`${className}${appendClass} hidden xl:block  dark:bg-gray-800`}>
        <div className='px-4 py-2 flex justify-between items-center gap-x-3'>
          <Link href='/' className='text-gray-900 dark:text-white w-full'>
            {project?.projectName ? project?.projectName : "Default Board"}
          </Link>
          <button className='hover:bg-gray-400 rounded-md p-2'>
            {" "}
            <IoMdArrowDropleft
              onClick={() => {
                setShowSidebar((oldVal) => !oldVal);
              }}
              className='text-2xl text-neutral cursor-pointer'
            />
          </button>
        </div>
        <hr />
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            {sidebarItems.map((item) => (
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
        <div className='h-full w-10 border-r bg-gray-400 dark:bg-gray-800  relative '>
          <IoIosArrowDropright
            onClick={() => {
              setShowSidebar((oldVal) => !oldVal);
            }}
            className='text-3xl text-neutral cursor-pointer absolute top-8 left-[22px] z-10 text-gray-400 dark:text-gray-600 rounded-full '
          />
        </div>
      )}
    </>
  );
};

export default DashboardSidebar;
