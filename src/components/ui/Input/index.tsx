import { useState } from "react";
import "./styles.css";

export interface InputProps {
  placeholder?: string;
  type?: string;
  name?: string;
  required?: boolean;
}

const Input = ({ placeholder, type, name, required }: InputProps) => {
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
    <div className="custom-input-container relative">
      <div
        className={`flex items-center justify-between rounded bg-customBlack-light px-4 py-4 text-white ${
          required && icon === icon_erro
            ? "border-customAuxiliary-red border"
            : required && icon === icon_sucess
              ? "border border-green-500"
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
          className="flex-1 bg-transparent text-white placeholder-customGray-gray_7 outline-none"
        />
        {required && icon && (
          <span
            className={`ml-2 ${
              icon === icon_erro ? "text-customAuxiliary-red" : "text-green-500"
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
