// 
import React, { useState } from "react";

export interface InputProps {
  placeholder?: string | React.ReactNode; // ReactNode já cobre strings e elementos JSX
  type?: string;
  name?: string;
  required?: boolean;
  className?: string;
}

const Input = ({ placeholder, type, name, required, className }: InputProps) => {
  const [icon, setIcon] = useState<string | null>(null);
  const [value, setValue] = useState<string>("");

  const icon_erro = "✖";
  const icon_sucess = "✔";

  const handleFocus = () => {
    if (required && !value) {
      setIcon(icon_erro);
    }
  };

  const handleBlur = () => {
    if (required && !value) {
      setIcon(null);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);

    if (required) {
      setIcon(inputValue ? icon_sucess : icon_erro);
    }
  };

  return (
    <div className="relative">
      <div
        className={`flex items-center justify-between rounded bg-customBlack-light px-3 py-[10px] text-white ${className} ${
          required && icon === icon_erro
            ? "border border-customAuxiliary-red"
            : required && icon === icon_sucess
            ? "border border-customAuxiliary-green"
            : "border border-transparent"
        }`}
      >
        {/* Placeholder customizado */}
        {placeholder && !value && (
          <div className="absolute left-3 top-[50%] transform -translate-y-[50%] text-customGray-gray_7 pointer-events-none">
            {placeholder}
          </div>
        )}
        <input
          type={type}
          name={name}
          value={value}
          required={required}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          className={`flex-1 bg-transparent text-white placeholder-transparent outline-none`}
        />
        {required && icon && (
          <span
            className={`ml-2 ${
              icon === icon_erro ? "text-customAuxiliary-red" : "text-customAuxiliary-green"
            }`}
          >
            {icon}
          </span>
        )}
      </div>
    </div>
  );
};

export default Input;
