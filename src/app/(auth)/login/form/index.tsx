"use client";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { loginSchema } from "./constants";
import { signIn } from "next-auth/react";
import Link from "next/link";

import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import z from "zod";

type LoginFormData = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<LoginFormData>({ resolver: zodResolver(loginSchema) });

  const onSubmit = handleSubmit(async (data) => {
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
      callbackUrl: "/about",
    });

    if (!res?.error) {
      router.push("/about");
    } else {
      toast("Something went wrong");
    }
  });

  return (
    <form onSubmit={onSubmit} className="flex w-[460px] flex-col gap-5">
      <h2 className="font-sans text-5xl font-semibold">Login</h2>

      <p className="mt-5 font-sans text-xl">
        Welcome! enter your details and start creating, collecting and selling
        NFTs.
      </p>

      <div className="mt-10 flex flex-col gap-4">
        <Input
          type="email"
          {...register("email")}
          icon="icon-envelop text-friar-gray"
          placeholder="Email Address"
          error={errors.email?.message}
        />
        <Input
          type="password"
          {...register("password")}
          icon="icon-key text-friar-gray"
          placeholder="Password"
          error={errors.password?.message}
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="mt-5 transition duration-500 
                hover:scale-95"
        fill
      >
        {isSubmitting ? "Loading..." : "Login"}
      </Button>

      <Link
        className="max-w-xs text-center font-sans text-sm"
        href={"/register"}
      >
        Don't have account?
      </Link>
    </form>
    
  );
};

export default LoginForm;
