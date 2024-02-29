import React, { useEffect, useRef } from "react";

const Dropdown = (props: any) => {
  const dropdownRef: any = useRef();

  const handleClick = (event: any) => {
    if (
      dropdownRef &&
      !dropdownRef.current?.contains(event.target) &&
      props.onClose
    )
      props.onClose();
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

  return (
    <div
      ref={dropdownRef}
      className={`absolute right-0 top-[100%] bg-[#292828]
      min-h-10 min-w-20 w-fit h-fit overflow-y-auto z-10 custom-scroll ${
        props.class ? props.class : ""
      }`}
    >
      {props.children}
    </div>
  );
};

export default Dropdown;
