import React, { useState } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { EmailChip } from "@/components/UI/EmailChip";
import { getErrorMessageByPropertyName } from "@/utils/schema-validator";
import toast from "react-hot-toast";

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

const FormInviteInput = ({
    name,
    type,
    value,
    id,
    placeholder,
    label,
    required,
}: IInput) => {
    const {
        control,
        formState: { errors },
    } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <EmailInput {...field} placeholder={placeholder} type={type} label={label} />
            )}
        />

    );
};

const EmailInput = ({ value, type, onChange, placeholder, label }: any) => {
    const [emails, setEmails] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" || e.key === ",") {
            e.preventDefault();
            const newEmail = inputValue.trim();
            const isExistEmail = emails.find((e: any) => e === newEmail)
            if (isExistEmail) {
                return toast.error("Already use this email")
            }
            if (!isValidEmail(newEmail)) {
                return toast.error("Provide a valid email")
            }
            setEmails([...emails, newEmail]);
            onChange([...emails, newEmail]); // Update the value through onChange
            setInputValue("");
        }
    };

    const handleDelete = (email: string) => {
        setEmails((prevEmails) => prevEmails.filter((e) => e !== email));
        onChange(emails.filter((e) => e !== email)); // Update the value through onChange
    };

    const isValidEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    return (
        <div className="w-full">
            <input
                className="appearance-none w-full px-6 py-3 rounded-lg font-medium bg-gray-100 border  placeholder-secondary  focus:outline-none focus:border-primary focus:bg-main-background dark:bg-main-background"
                type={type}
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
                placeholder={placeholder}
            />
            <div
                className={`${emails.length > 0 ? "flex flex-wrap gap-2 my-4" : "hidden"
                    }`}
            >
                {emails.map((email: any, index: any) => (
                    <EmailChip
                        key={index}
                        email={email}
                        onDelete={handleDelete}
                    />
                ))}
            </div>
        </div>
    );
};

export default FormInviteInput;
