import "./styles.css";

export interface InputRadioProps {
  label: string;
  disable?: boolean;
  className?: string;
}

const InputRadio = ({ label, disable, className }: InputRadioProps) => {
  return (
    <div className={`flex items-center gap-4 p-4 ${className}`}>
      <input type="radio" className="custom-radio" disabled={disable} />
      <label className="text-base text-customGray-gray_4">{label}</label>
    </div>
  );
};

export default InputRadio;
