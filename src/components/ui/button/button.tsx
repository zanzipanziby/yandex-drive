import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import s from "./button.module.scss";

type ButtonPropsType<T extends ElementType = "button"> = {
  as?: T;
  children?: ReactNode;
  variant: "primary" | "secondary";
  fullWidth?: boolean;
  className?: string;
} & ComponentPropsWithoutRef<T>;

export const Button = <T extends ElementType = "button">(
  props: ButtonPropsType<T>,
) => {
  const {
    as,
    children,
    variant = "primary",
    className = "",
    fullWidth,

    ...rest
  } = props;
  const Component = as || "button";
  return (
    <Component
      className={`${s[variant]} ${fullWidth ? s.fullWidth : ""} ${className}`}
      {...rest}
    >
      {children}
    </Component>
  );
};
