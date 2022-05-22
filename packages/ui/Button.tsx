import * as React from "react";

interface ButtonProps {
  buttonName: string;
}

export const Button = ({ buttonName }: ButtonProps) => {
  return <button>{buttonName}</button>;
};
