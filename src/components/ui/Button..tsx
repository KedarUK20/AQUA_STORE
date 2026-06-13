import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, className, ...props }: Props) {
  return (
    <button
      {...props}
      className={`
      px-6
      py-3
      rounded-xl
      transition-all
      duration-300
      bg-cyan-600
      hover:bg-cyan-500
      ${className}
      `}
    >
      {children}
    </button>
  );
}
