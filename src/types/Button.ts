import { ReactNode } from "react";
export type ButtonProps = {
  variant?: "solid" | "transparent";
  onClick?: any;
  loading?: boolean;
  type?: "submit" | "reset" | "button";
  children?: ReactNode;
  className?: string;
};
