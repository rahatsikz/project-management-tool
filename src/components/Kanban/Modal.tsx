import React from "react";

const Modal = (props: any) => {
  return (
    <div
      className='fixed -top-1 left-0 h-full min-h-screen w-full bg-[#00000075] flex justify-center items-center z-20'
      onClick={() => (props.onClose ? props.onClose() : "")}
    >
      <div
        className='overflow-y-auto overflow-x-hidden bg-[#1c1c1c] rounded-2xl shadow-md shadow-black max-h-[98vh] custom-scroll'
        onClick={(event) => event.stopPropagation()}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
