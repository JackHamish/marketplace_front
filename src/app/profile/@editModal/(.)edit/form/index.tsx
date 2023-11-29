"use client";
import { Input } from "@/components/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { editSchema } from "./constants";
import { Button } from "@/components/button";
import { useCurrentUser, useUpdateUser } from "@/domains/user/hooks";
import { pickBy } from "lodash";
import { ErrorHelpers } from "@/services/error/helpers";
import { toast } from "react-toastify";
import { resetPasswordReq } from "@/domains/user";
import { useRouter } from "next/navigation";

type EditFormData = z.infer<typeof editSchema>;

const EditUserForm = () => {
  const { data: user } = useCurrentUser();
  const router = useRouter();

  const { mutateAsync: updateUserAction } = useUpdateUser();

  const handleClickResetPassword = async () => {
    try {
      const res = await resetPasswordReq(user.email);

      toast.success("Reset link successful send to you email address");
    } catch (error) {
      toast.error(ErrorHelpers.getMessage(error));
    }
  };

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = useForm<EditFormData>({
    resolver: zodResolver(editSchema),
    defaultValues: user,
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      const filteredData = pickBy(data, (value) => value.length > 0);

      await updateUserAction(
        { id: user.id, data: filteredData },
        {
          onSuccess(data, variables, context) {
            toast("Update successful");
            router.back();
          },
        },
      );
    } catch (error) {
      toast.error(ErrorHelpers.getMessage(error));
      reset(data);
    }
  });

  return (
    <form
      onSubmit={onSubmit}
      className="flex w-[460px] flex-col items-center gap-5"
    >
      <h2 className="font-sans text-5xl font-semibold">Update information</h2>

      <div className="mt-10 flex flex-col items-center gap-4">
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
      </div>

      <div className="flex  items-center justify-center gap-5">
        <Button type="submit" disabled={isSubmitting} className="mt-5" fill>
          {isSubmitting ? "Loading..." : "Edit"}
        </Button>

        <Button
          className="mt-5"
          fill={false}
          onClick={handleClickResetPassword}
        >
          Change password ?
        </Button>
      </div>
    </form>
  );
};

export default EditUserForm;
