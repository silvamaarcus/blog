import "./styles.css";

export interface InputCheckboxProps {
  label: string;
  disable?: boolean;
  className?: string;
}

const InputCheckbox = ({ label, disable, className }: InputCheckboxProps) => {
  return (
    <label className={`custom-checkbox block ${className}`}>
      <input type="checkbox" disabled={disable} />
      <span className="checkmark"></span>
      <span className="text-b3 sm:text-b3Sm text-customGray-gray_4">
        {label}
      </span>
    </label>
  );
};

export default InputCheckbox;
