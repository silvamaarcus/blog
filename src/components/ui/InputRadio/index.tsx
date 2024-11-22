import "./styles.css";

export interface InputProps {
  label: string;
  disable?: boolean;
}

const Input = ({ label, disable }: InputProps) => {
  return (
    <div className="m-4 flex items-center gap-4 p-4">
      <input
        type="radio"
        className="custom-radio"
        disabled={disable}
      />
      <label className="text-customGray-gray_4 text-base">{label}</label>
    </div>
  );
};

export default Input;
