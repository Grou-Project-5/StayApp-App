import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  id?: string;
  label?: string;
  loading?: boolean;
  onClick?: any;
}

function Button({ id, label, loading, onClick, ...props }: ButtonProps) {
  return (
    <button
      id={id}
      className={`${
        loading &&
        "btn w-full mt-4 bg-customcyan text-white disabled:bg-gray-300 disabled:text-gray-500 border-0"
      }`}
      disabled={loading}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
}

export default Button;
