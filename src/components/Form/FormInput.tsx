"use client";

import { getErrorMessageByPropertyName } from "@/utils/schema-validator";
import { useFormContext, Controller } from "react-hook-form";
interface IInput {
  name: string;
  type?: string;
  value?: string | string[] | undefined;
  id?: string;
  placeholder?: string;
  label?: string;
  required?: boolean;
  readonly?: boolean;
}

const FormInput = ({
  name,
  type,
  value,
  id,
  placeholder,
  label,
  required,
  readonly,
}: IInput) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = getErrorMessageByPropertyName(errors, name);

  return (
    <>
      {label ? (
        <label className='block uppercase tracking-wide dark:text-gray-200  text-gray-700 text-xs mb-1'>
          {label}
        </label>
      ) : null}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <input
            className=' appearance-none w-full px-6 py-3 rounded-md font-medium text-neutral bg-gray-100 border  placeholder-secondary  focus:outline-none focus:border-primary focus:bg-main-background dark:bg-main-background'
            id={id}
            type={type}
            placeholder={placeholder}
            {...field}
            value={value ? value : field.value}
          />
        )}
      />
      <small className='text-red-700 my-0'>{errorMessage}</small>
    </>
  );
};

export default FormInput;
