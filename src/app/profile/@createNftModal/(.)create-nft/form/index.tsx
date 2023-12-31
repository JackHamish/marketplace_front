"use client";
import { z } from "zod";
import { MAX_DESCRIPTION_HEIGHT, createNftSchema } from "./constants";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import Dropzone from "react-dropzone";
import Image from "next/image";
import { toast } from "react-toastify";
import { ErrorHelpers } from "@/services/error/helpers";
import Icon from "@/components/icon";
import { useAddNft } from "@/domains/nft/hooks";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { TextArea } from "@/components/text-area";
import { mergeRefs } from "@/utils/mergeRefs";

type CreateNftFormData = z.infer<typeof createNftSchema>;

const CreateNftForm = () => {
  const { mutateAsync: createNFtAction } = useAddNft();
  const router = useRouter();

  const descriptionInputRef = useRef<HTMLTextAreaElement>(null);

  const handleDescriptionInputStyle = () => {
    const descriptionInput = descriptionInputRef.current;

    if (!descriptionInput) {
      return;
    }

    descriptionInput.style.height = "auto";
    descriptionInput.style.height = `${
      descriptionInput.scrollHeight < MAX_DESCRIPTION_HEIGHT
        ? descriptionInput.scrollHeight
        : MAX_DESCRIPTION_HEIGHT
    }px`;
  };

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
    setValue,
    getValues,
    control,
  } = useForm<CreateNftFormData>({
    resolver: zodResolver(createNftSchema),
  });

  const descriptionRegister = register("description");

  useEffect(() => {
    toast.error(errors.file?.message);
  }, [errors.file]);

  const onSubmit = handleSubmit(async (data) => {
    try {
      await createNFtAction(data, {
        onSuccess(data, variables, context) {
          toast.success("Nft Created");
          router.back();
        },
      });
      setValue("description", "");
      handleDescriptionInputStyle();
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

      <div className="mt-10 flex  items-center gap-5">
        <Controller
          control={control}
          name="file"
          rules={{ required: false }}
          render={({ field: { onChange, onBlur }, fieldState }) => (
            <Dropzone
              noClick
              maxFiles={1}
              maxSize={500000}
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
                <div>
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
                      Must be a .jpg or .png file smaller than 5MB and at least
                      300px by 300px.
                    </span>
                  </div>
                </div>
              )}
            </Dropzone>
          )}
        />

        <div className="flex flex-col gap-8 self-start">
          <Input
            {...register("title")}
            type="text"
            placeholder="Title"
            required
            error={errors.title?.message}
          />

          <TextArea
            {...descriptionRegister}
            ref={mergeRefs(descriptionRegister.ref, descriptionInputRef)}
            onInput={handleDescriptionInputStyle}
            placeholder="Description"
            maxLength={180}
            error={errors.description?.message}
          />
        </div>
      </div>

      <Button type="submit" disabled={isSubmitting} className="mt-5" fill>
        {isSubmitting ? "Loading..." : "Create"}
      </Button>
    </form>
  );
};

export default CreateNftForm;
