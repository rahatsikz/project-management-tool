"use client";
import { getErrorMessageByPropertyName } from "@/utils/schema-validator";
import { useFormContext, Controller } from "react-hook-form";
interface ISelectInput {
    name: string;
    type?: string;
    value?: string | string[] | undefined;
    id?: string;
    options: any[],
    placeholder?: string;
    label?: string;
    required?: boolean;
    readonly?: boolean
}

const FormSelectInput = ({
    name,
    type,
    value,
    id,
    placeholder,
    label,
    options,
    required

}: ISelectInput) => {
    const {
        control,
        formState: { errors },
    } = useFormContext();

    const errorMessage = getErrorMessageByPropertyName(errors, name);

    return (
        <>
            {label ? <label className="block uppercase tracking-wide text-gray-800 dark:text-gray-200 text-xs mb-1">
                {label}
            </label> : null}
            <Controller
                control={control}
                name={name}
                render={({ field }) =>
                    <select className=" appearance-none w-full px-6 py-3 rounded-md font-medium bg-gray-100 border  placeholder-secondary  focus:outline-none focus:border-primary focus:bg-main-background dark:bg-main-background" id={id} defaultValue={"select"}   {...field}
                        value={value ? value : field.value} >
                        {options.map(opt => <option key={opt.key}>{opt.value}</option>)}
                    </select>
                }

            />
            <small className="text-red-700 my-0">{errorMessage}</small>
        </>
    );
};

export default FormSelectInput;