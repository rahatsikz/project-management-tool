"use client";
import Loader from "@/components/Loadar";
import Button from "@/components/UI/Button";
import { isLoggedIn } from "@/service/authService";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const CreateProjectPage = () => {
  const { push } = useRouter();
  const isLoging = isLoggedIn();
  useEffect(() => {
    if (!isLoging) {
      push("/signin");
    }
  }, [isLoging, push]);

  if (!isLoging) {
    return (
      <div className="">
        {/* <p>Redirecting....</p> */}
        <Loader />
      </div>
    );
  }

  return (
    <div className="w-full h-[100vh] text-neutral flex flex-wrap items-center justify-center">
      <div className="bg-main-background flex flex-1 flex-col lg:items-start items-center justify-center  h-full w-full leading-6 px-3 lg:pl-36">
        <div className="">
          <h1 className="text-3xl pb-4 text-center">Welcome to Task-hacks!</h1>
          <p className="">
            We&apos;re glad you made it. Let&apos;s start organizing <br /> your
            projects so you can get things done.
          </p>
        </div>
        <div className="text-left">
          <Button
            type="button"
            onClick={() => push("/create-project/project-title")}
            className="btn p-4 my-10 bg-primary "
          >
            Build your first Project
          </Button>
        </div>
      </div>

      <div className="bg-gradient-to-l  from-slate-50 to-cyan-50 dark:from-slate-700 dark:to-slate-900 flex-1 flex-col items-center justify-center h-full w-full   hidden lg:flex">
        <div className="self-center">
          <Image
            src="https://trello.com/assets/a7fb768ffd0181cbfc63.svg"
            alt=""
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateProjectPage;
