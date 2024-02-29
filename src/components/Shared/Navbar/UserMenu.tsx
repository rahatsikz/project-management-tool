"use client";

import { getUserInfo } from "@/service/authService";
import { logoutUser } from "@/utils/local-storage";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { authKey } from "../../../service/authKey";
import Avatar from "./Avatar";
import BackDrop from "./BackDrop";
import MenuItem from "./MenuItem";
import { useGetUserQuery } from "@/redux/api/authApi";
import toast from "react-hot-toast";

const UserMenu = () => {
  const userInfo = getUserInfo() as any;
  const user = useGetUserQuery(userInfo?.id)
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleLogOut = (authKey: string) => {
    logoutUser(authKey);
    toast.success("User Logout")
    router.push("/");
    router.refresh();
  };

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <>
      <div className='relative z-30'>
        <div
          onClick={toggleOpen}
          className='
        p-2
        border-[1px]
        flex
        flex-row
        items-center
        gap-1
        rounded-full
        cursor-pointer
        hover:shadow-lg
        transition
        text-neutral
        '
        >
          {/* @ts-ignore */}
          <Avatar src={user?.profileImg} />
          <AiFillCaretDown />
        </div>
        {isOpen && (
          <div
            className='absolute
          rounded-md
          shadow-md
          w-[200px]
          bg-white
          overflow-hidden
          right-0
          top-12
          text-sm
          flex
          flex-col
          cursor-pointer
          '
          >
            {userInfo?.role === "admin" ? (
              <div className=''>
                <Link href={"/profile"}>
                  <MenuItem onClick={toggleOpen}>Your Profile</MenuItem>
                </Link>
                <Link href={"/project/board"}>
                  <MenuItem onClick={toggleOpen}>Your Board</MenuItem>
                </Link>
                <Link href={"/admin"}>
                  <MenuItem onClick={toggleOpen}>Admin Dashboard</MenuItem>
                </Link>
                <hr />
                <MenuItem onClick={() => handleLogOut(authKey)}>
                  Logout
                </MenuItem>
              </div>
            ) : userInfo?.role === "user" ? (
              <div className=''>
                <Link href={"/profile"}>
                  <MenuItem onClick={toggleOpen}>Your Profile</MenuItem>
                </Link>
                <Link href={"/project/board"}>
                  <MenuItem onClick={toggleOpen}>Your Board</MenuItem>
                </Link>
                <Link href={"/dashboard"}>
                  <MenuItem onClick={toggleOpen}>Dashboard</MenuItem>
                </Link>
                <hr />
                <MenuItem onClick={() => handleLogOut(authKey)}>
                  Logout
                </MenuItem>
              </div>
            ) : (
              <div className=''>
                <Link href={"/signin"}>
                  <MenuItem onClick={toggleOpen}>Sign In</MenuItem>
                </Link>
                <Link href={"/signup"}>
                  <MenuItem onClick={toggleOpen}>Sign Up</MenuItem>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>

      {isOpen ? <BackDrop onclick={toggleOpen} /> : null}
    </>
  );
};

export default UserMenu;
