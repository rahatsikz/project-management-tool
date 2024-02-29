"use client";

import { getUserInfo } from "@/service/authService";
import Button from "../UI/Button";


const ProfileForm = () => {
  const userInfo = getUserInfo() as any;

  return (
    <div className="">
      <div className="text-center text-2xl py-4 text-neutral-700">
        Update Your Profile
      </div>

      <div className="mt-4 w-full h-full flex items-center justify-center">
        <Button
          className=""
          type="submit"
        >
          Submit
        </Button>
      </div>
    </div>

  );
};

export default ProfileForm;
