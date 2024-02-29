"use client";
import Navbar from "@/components/Shared/Navbar/Navbar";
import Sidebar from "@/components/UI/KanbanSidebar";
import { isLoggedIn } from "@/service/authService";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const BoardLayout = ({ children }: any) => {
  const { push } = useRouter();
  const isLoging = isLoggedIn();
  useEffect(() => {
    if (!isLoging) {
      push("/signin");
    }
  }, [isLoging, push]);

  return (
    <div>
      <Navbar />
      <div className='flex w-full'>
        <Sidebar />
        <div className='w-full'>{children}</div>
      </div>
    </div>
  );
};

export default BoardLayout;
