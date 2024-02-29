"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../../../assets/images/taskhacks-logo-transparent.png";
import NavList from "./NavList";
import ThemeSwitcher from "@/components/UI/ThemeSwitcher";
import { useRouter } from "next/navigation";
import UserMenu from "./UserMenu";
import { IoMdAddCircle } from "react-icons/io";
import Button from "@/components/UI/Button";

const Navbar = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const router = useRouter();
  const hamburger = isToggleOpen
    ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45"
    : "";

  return (
    <header className="border-b-1 relative z-20 w-full border-b border-slate-200 bg-main-background shadow-lg shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
      <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
        <nav className="flex h-[5.0rem] items-stretch justify-between font-medium text-slate-700">
          <Link
            href="/"
            className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none w-fit"
          >
            <Image src={logo} alt="logo" width={140} />
          </Link>

          <div className="flex justify-between items-center">
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden ${hamburger}`}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
            >
              <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                <span className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-neutral transition-all duration-300"></span>
                <span className="absolute block h-0.5 w-6 transform rounded-full bg-neutral transition duration-300"></span>
                <span className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-neutral transition-all duration-300"></span>
              </div>
            </button>

            <ul
              className={`absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden overflow-y-auto overscroll-contain bg-main-background px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0 lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-main-background/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${isToggleOpen
                ? "visible opacity-100 backdrop-blur-sm border-b"
                : "invisible opacity-0"
                }`}
            >
              <NavList text="Blog" route="" />
              <NavList text="FAQ" route="" />
              <NavList text="Contact Us" route="contact" />

              <div className="md:hidden flex gap-4 items-center ml-2 my-2 ">
                <p> Switch Theme: </p> <ThemeSwitcher />
              </div>
            </ul>

            <div className='flex items-center gap-2'>
              <div className='ml-auto flex items-center px-4 lg:ml-0 lg:p-0'>
                <Link href={"/create-project"}>
                  <button className="bg-tranparent md:block hidden border-[0.5px] md:px hover:bg-primary text-gray-800 dark:text-gray-100 font-semibold py-2 md:px-4 px-2.5  md:text-sm text-[11px] border-b-4 border-primary hover:text-white hover:border-b-cyan-900 rounded">
                    Create Project
                  </button>
                </Link>
                <Link href={"/create-project"}>
                  <Button className="sm:hidden"><IoMdAddCircle /></Button>
                </Link>

              </div>
              <div className="ml-auto flex items-center px-6 lg:ml-2 lg:p-0">
                <UserMenu />
              </div>
              <div className="md:flex hidden pl-2">
                <ThemeSwitcher />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
