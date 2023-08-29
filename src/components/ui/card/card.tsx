import { ReactNode } from "react";
import s from "./card.module.scss";

type CardPropsType = {
  children: ReactNode;
  className?: string;
};

export const Card = ({ children, className = "" }: CardPropsType) => {
  
  return <div className={`${s.card} ${className}`}>{children}</div>;
};
