import "./styles.css";

export interface InputCheckboxProps {
  label: string;
  disable?: boolean;
  className?: string;
}

const InputCheckbox = ({ label, disable, className }: InputCheckboxProps) => {
  return (
    <label
      className={`custom-checkbox flex items-center p-4 ${className} border`}
    >
      <input type="checkbox" disabled={disable} />
      <span className="checkmark"></span>
      <span className="text-base text-customGray-gray_4">{label}</span>
    </label>
  );
};

export default InputCheckbox;
