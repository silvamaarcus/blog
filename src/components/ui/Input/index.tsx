import { useState } from "react";

export interface InputProps {
  placeholder?: string;
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
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          required={required}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          className={`flex-1 bg-transparent text-white placeholder-customGray-gray_7 outline-none`}
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
