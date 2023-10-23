"use client";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { loginSchema } from "./contants";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { errorCatch } from "@/services/api";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const LoginForm = () => {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        reset,
        formState: { isSubmitting, errors },
    } = useForm({ resolver: zodResolver(loginSchema) });

    const onSubmit = handleSubmit(async (data) => {
        const res = await signIn("credentials", {
            email: data.email as string,
            password: data.password as string,
            redirect: false,
            callbackUrl: "/about",
        });

        if (res?.status === 401) {
            toast("Incorrect email or password ");
        }

        if (!res?.error) {
            router.push("/about");
        }
    });

    return (
        <form onSubmit={onSubmit} className="flex flex-col gap-5 w-[460px]">
            <h2 className="text-5xl font-sans font-semibold">Login</h2>

            <p className="text-xl font-sans mt-5">
                Welcome! enter your details and start creating, collecting and
                selling NFTs.
            </p>

            <div className="flex flex-col gap-4 mt-10">
                <Input
                    {...register("email")}
                    icon="/images/icons/mail.svg"
                    placeholder="Email Address"
                    error={errors.email?.message}
                />
                <Input
                    {...register("password")}
                    icon="/images/icons/mail.svg"
                    placeholder="Password"
                    error={errors.password?.message}
                />
            </div>

            <Button
                type="submit"
                disabled={isSubmitting}
                className="mt-5"
                fill={true}
            >
                {isSubmitting ? "Loading..." : "Login"}
            </Button>

            <Link
                className=" max-w-xs text-center text-sm font-sans"
                href={"/register"}
            >
                Don't have account?
            </Link>
        </form>
    );
};

export default LoginForm;
