"use client";
import { Input } from "@/components/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { editSchema } from "./constants";
import { Button } from "@/components/button";
import { ErrorHelpers } from "@/services/error/helpers";
import { toast } from "react-toastify";
import { useSearchParams } from "next/navigation";
import { resetPassword } from "@/domains/user";

type EditFormData = z.infer<typeof editSchema>;

const ResetPasswordForm = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = useForm<EditFormData>({
    resolver: zodResolver(editSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (!data.password || !token) return;

      await resetPassword(data.password, token);

      toast("Password successful updated");
    } catch (error) {
      toast.error(ErrorHelpers.getMessage(error));
      reset(data);
    }
  });

  return (
    <form
      onSubmit={onSubmit}
      className="flex w-full flex-col items-center gap-5"
    >
      <h2 className="font-sans text-5xl font-semibold">Reset Password</h2>

      <div className="mt-10 flex flex-col items-center gap-4">
        <Input
          {...register("password")}
          icon="icon-key text-friar-gray"
          type="password"
          placeholder="Password"
          required
          error={errors.password?.message}
        />
        <Input
          {...register("confirmPassword")}
          type="password"
          icon="icon-key text-friar-gray"
          placeholder="Confirm password"
          required
          error={errors.confirmPassword?.message}
        />
      </div>

      <Button type="submit" disabled={isSubmitting} className="mt-5" fill>
        {isSubmitting ? "Loading..." : "Edit"}
      </Button>
    </form>
  );
};

export default ResetPasswordForm;
