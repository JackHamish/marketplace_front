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

type EditFormData = z.infer<typeof editSchema>;

const EditUserForm = () => {
  const { data } = useCurrentUser();
  const user = data?.data;

  const { mutateAsync: updateUserAction } = useUpdateUser();

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

      delete filteredData.confirmPassword;

      await updateUserAction(
        { id: user.id, data: filteredData },
        {
          onSuccess(data, variables, context) {
            toast("Update successful");
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

      <Button
        type="submit"
        disabled={isSubmitting}
        className="mt-5 transition duration-500 
            hover:scale-95"
        fill
      >
        {isSubmitting ? "Loading..." : "Edit"}
      </Button>
    </form>
  );
};

export default EditUserForm;
