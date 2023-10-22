"use client";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const SignUpSchema = z.object({
    email: z.string().email(),
    password: z.string().min(3).max(20),
});

type SignUpSchemaType = z.infer<typeof SignUpSchema>;

const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignUpSchemaType>({ resolver: zodResolver(SignUpSchema) });

    return (
        <form className="flex flex-col gap-5 w-[460px]">
            <h2 className="text-5xl font-sans font-semibold">Login</h2>

            <p className="text-xl font-sans mt-5">
                Welcome! enter your details and start creating, collecting and
                selling NFTs.
            </p>

            <div className="flex flex-col gap-4 mt-10">
                <Input icon="/images/icons/mail.svg" placeholder="Username" />
                <Input
                    icon="/images/icons/mail.svg"
                    placeholder="Email Address"
                />
                <Input icon="/images/icons/mail.svg" placeholder="Password" />
                <Input
                    icon="/images/icons/mail.svg"
                    placeholder="Confirm Password"
                />
            </div>

            <Button className="mt-5" fill={true}>
                Login
            </Button>
        </form>
    );
};

export default LoginForm;
