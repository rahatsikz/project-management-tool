"use client";
import React, { useEffect, useState } from "react";
import GoogleSVG from "@/assets/svg/GoogleSVG";
import Button from "@/components/UI/Button";
import logo from "@/assets/images/taskhacks-logo-transparent.png";
import Image from "next/image";
import Link from "next/link";
import Lottie, { Options } from "react-lottie";
import * as animationData from "@/assets/lottie/gate.json";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useGetUserByEmailQuery, useUserLoginMutation } from "@/redux/api/authApi";
import { userLoginInfo } from "@/service/authService";
import Form from "@/components/Form/Form";
import FormInput from "@/components/Form/FormInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignInSchema } from "@/schema/auth.schema";
import { getdecodedData } from "@/utils/jwt";

const AdminLoginForm = () => {
    const router = useRouter();
    const [userLogin] = useUserLoginMutation();
    const handleSignInForm = async (data: any) => {
        try {
            const res = await userLogin({ ...data }).unwrap();
            if (!res?.success) {
                return toast.error("Email is not Registerd")
            }
            const isUser = getdecodedData(res?.data?.token) as any
            if (isUser && isUser.role !== "admin") {
                return toast.error("You are not a Admin")

            }
            toast.success("Admin Logged in");
            userLoginInfo({ accessToken: res?.data?.token });
            router.push("/dashboard/admin");
        } catch (err: any) {
            toast.error(err.message);
        }
    };


    return (
        <div className=''>

            <Form
                submitHandler={handleSignInForm}
                resolver={yupResolver(SignInSchema)}
            ><div className='mx-auto lg:max-w-sm  flex flex-col gap-3 text-neutral'>
                    <FormInput
                        name='email'
                        type='email'
                        placeholder='Email'
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        placeholder='Password'
                        required
                    />
                    <Button className='w-full' type='submit'>
                        Sign In
                    </Button>  </div>
            </Form>


        </div>

    );
};

export default AdminLoginForm;
