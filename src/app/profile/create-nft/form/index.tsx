"use client";
import { z } from "zod";
import { createNftSchema } from "./constants";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import Dropzone, { useDropzone } from "react-dropzone";
import Image from "next/image";
import { createNft } from "@/domains/nft";
import { toast } from "react-toastify";
import { ErrorHelpers } from "@/services/error/helpers";
import Icon from "@/components/icon";

type CreateNftFormData = z.infer<typeof createNftSchema>;

const CreateNftForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
    setValue,
    control,
  } = useForm<CreateNftFormData>({
    resolver: zodResolver(createNftSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);

    try {
      await createNft(data);
      toast.success("Nft Created");
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
      <h2 className="font-sans text-5xl font-semibold">Create you NFT</h2>

      <div className="mt-10 flex flex-col items-center gap-4">
        <Controller
          control={control}
          name="file"
          rules={{ required: false }}
          render={({ field: { onChange, onBlur }, fieldState }) => (
            <Dropzone
              noClick
              maxFiles={1}
              maxSize={2000000}
              onDrop={async (acceptedFiles) => {
                setValue("file", acceptedFiles[0], {
                  shouldValidate: true,
                });
              }}
            >
              {({
                getRootProps,
                getInputProps,
                open,
                isDragActive,
                acceptedFiles,
              }) => (
                <div className={" p-5"}>
                  <div
                    className={
                      "flex min-h-[300px] min-w-[300px] items-center justify-center rounded-2xl border-2 border-heliotrope"
                    }
                    {...getRootProps()}
                  >
                    {acceptedFiles[0] ? (
                      <Image
                        src={URL.createObjectURL(acceptedFiles[0])}
                        alt="file"
                        width={300}
                        height={300}
                      />
                    ) : (
                      <Icon icon="icon-plus text-9xl text-friar-gray" />
                    )}

                    <input
                      className={""}
                      {...getInputProps({
                        id: "spreadsheet",
                        onChange,
                        onBlur,
                      })}
                    />
                  </div>
                  <div className={"mt-5 flex gap-5"}>
                    <Button fill={false} type="button" onClick={open}>
                      Replace
                    </Button>
                    <span className="max-w-[200px] text-xs text-friar-gray">
                      Must be a .jpg or .png file smaller than 10MB and at least
                      300px by 300px.
                    </span>
                  </div>
                </div>
              )}
            </Dropzone>
          )}
        />

        <Input
          {...register("title")}
          type="text"
          placeholder="Title"
          required
          error={errors.title?.message}
        />
      </div>

      <Button type="submit" disabled={isSubmitting} className="mt-5" fill>
        {isSubmitting ? "Loading..." : "Create"}
      </Button>
    </form>
  );
};

export default CreateNftForm;
