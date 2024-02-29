import Link from "next/link";
import React from "react";

const NavList = ({ text, route }: any) => {
  return (
    <li className="flex items-stretch">
      <Link
        href={`/${route}`}
        className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-primary focus:outline-none focus-visible:outline-none px-5 text-neutral"
      >
        {text}
      </Link>
    </li>
  );
};

export default NavList;
