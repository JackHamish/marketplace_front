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
import z from "zod";
import CompleteRegistration from "../complete-registration";
import { ErrorHelpers } from "@/services/error/helpers";

type RegisterFormData = z.infer<typeof registerSchema>;

const RegisterForm = () => {
  const [registerCompleted, setIsRegisterCompleted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = useForm<RegisterFormData>({ resolver: zodResolver(registerSchema) });

  const onSubmit = handleSubmit(async (data) => {
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
      const err = ErrorHelpers.getMessage(error);
      toast(err);
      reset(data);
    }
  });

  if (registerCompleted) {
    return <CompleteRegistration />;
  }

  return (
    <form onSubmit={onSubmit} className="flex w-[460px] flex-col gap-5">
      <h2 className="font-sans text-5xl font-semibold">Create account</h2>

      <p className="mt-5 font-sans text-xl">
        Welcome! enter your details and start creating, collecting and selling
        NFTs.
      </p>

      <div className="mt-10 flex flex-col gap-4">
        <Input
          {...register("name")}
          icon="icon-user text-friar-gray"
          placeholder="Username"
          error={errors.name?.message}
        />
        <Input
          {...register("email")}
          icon="icon-envelop text-friar-gray"
          type="email"
          placeholder="Email Address"
          error={errors.email?.message}
        />
        <Input
          {...register("password")}
          icon="icon-key text-friar-gray"
          type="password"
          placeholder="Password"
          error={errors.password?.message}
        />
        <Input
          {...register("confirmPassword")}
          type="password"
          icon="icon-key text-friar-gray"
          placeholder="Confirm password"
          error={errors.confirmPassword?.message}
        />
      </div>

      <Button type="submit" disabled={isSubmitting} className="mt-5" fill>
        {isSubmitting ? "Loading..." : "Register"}
      </Button>
    </form>
  );
};

export default RegisterForm;
