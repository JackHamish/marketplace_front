"use client";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { registerSchema } from "./contants";
import { signUp } from "@/domains/auth";
import { useEffect, useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { errorCatch } from "@/services/api";

const RegisterForm = () => {
    const [registerCompleted, setIsRegisterCompleted] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { isSubmitting, errors },
        reset,
    } = useForm({ resolver: zodResolver(registerSchema) });

    const onSubmit = handleSubmit(async (data) => {
        if (data.password !== data.confirmPassword) {
            toast("Password mismatch");

            return;
        }

        try {
            const res = await signUp({
                name: data.name,
                email: data.email,
                password: data.password,
            });
            if (res.status === 201) {
                setIsRegisterCompleted(true);
            }
        } catch (error) {
            const err = errorCatch(error);
            toast(err);
            reset(data);
        }
    });

    if (registerCompleted) {
        return (
            <div className="flex flex-col items-center gap-5 w-[460px]">
                <h2 className="text-4xl font-sans font-semibold">
                    Registration successful!
                </h2>

                <p className="text-xl font-sans mt-5">
                    You can login into yur account.
                </p>
                <Link
                    className=" mt-7 max-w-xs font-sans py-4 px-7 rounded-3xl  border-2 border-heliotrope bg-heliotrope flex justify-center items-center"
                    href="/login"
                >
                    Login
                </Link>
            </div>
        );
    }

    return (
        <form onSubmit={onSubmit} className="flex flex-col gap-5 w-[460px]">
            <h2 className="text-5xl font-sans font-semibold">Create account</h2>

            <p className="text-xl font-sans mt-5">
                Welcome! enter your details and start creating, collecting and
                selling NFTs.
            </p>

            <div className="flex flex-col gap-4 mt-10">
                <Input
                    {...register("name")}
                    icon="/images/icons/mail.svg"
                    placeholder="Username"
                    error={errors.name?.message}
                />
                <Input
                    {...register("email")}
                    icon="/images/icons/mail.svg"
                    type="email"
                    placeholder="Email Address"
                    error={errors.email?.message}
                />
                <Input
                    {...register("password")}
                    icon="/images/icons/mail.svg"
                    type="password"
                    placeholder="Password"
                    error={errors.password?.message}
                />
                <Input
                    {...register("confirmPassword")}
                    type="password"
                    icon="/images/icons/mail.svg"
                    placeholder="Confirm password"
                    error={errors.confirmPassword?.message}
                />
            </div>

            <Button
                type="submit"
                disabled={isSubmitting}
                className="mt-5"
                fill={true}
            >
                {isSubmitting ? "Loading..." : "Register"}
            </Button>
        </form>
    );
};

export default RegisterForm;
