import React, { useState } from "react";

// import { X } from "react-feather";

interface CustomInputProps {
  text: string;
  onSubmit: (value: string) => void;
  displayClass?: string;
  editClass?: string;
  placeholder?: string;
  defaultValue?: string;
  buttonText?: string;
}
const CustomInput = (props: CustomInputProps) => {
  const {
    text,
    onSubmit,
    displayClass,
    editClass,
    placeholder,
    defaultValue,
    buttonText,
  } = props;
  const [isCustomInput, setIsCustomInput] = useState(false);
  const [inputText, setInputText] = useState(defaultValue || "");

  const submission = (e: any) => {
    e.preventDefault();
    if (inputText && onSubmit) {
      setInputText("");
      onSubmit(inputText);
    }
    setIsCustomInput(false);
  };

  return (
    <div className='w-full'>
      {isCustomInput ? (
        <form
          className={`flex flex-col gap-2.5 rounded-2xl ${
            editClass ? editClass : ""
          }`}
          onSubmit={submission}
        >
          <input
            type='text'
            value={inputText}
            className='border-primary border-2 p-2.5 rounded-md outline-none text-base bg-[#1c1c1c] text-white mb-2'
            placeholder={placeholder || text}
            onChange={(event) => setInputText(event.target.value)}
            autoFocus
          />
          <div className='flex items-center justify-between gap-2'>
            <button
              type='submit'
              className='py-1.5 px-5 cursor-pointer rounded-full outline-none bg-primary text-white border-none duration-100 ease-in hover:bg-cyan-600 active:translate-y-0.5'
            >
              {buttonText || "Add"}
            </button>
            <span
              onClick={() => setIsCustomInput(false)}
              className='text-white cursor-pointer bg-primary h-8 w-8 flex justify-center items-center rounded-full'
            >
              X
            </span>
          </div>
        </form>
      ) : (
        <p
          className={`py-1.5 px-3 rounded bg-[#1c1c1c] text-white border-white border cursor-pointer w-full duration-200 ${
            displayClass ? displayClass : ""
          }`}
          onClick={() => setIsCustomInput(true)}
        >
          {text}
        </p>
      )}
    </div>
  );
};

export default CustomInput;
