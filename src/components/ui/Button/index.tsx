export interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary";
  className?: string;
  disable?: boolean;
  onClick?: () => void;
}

const Button = ({
  label,
  variant = "primary",
  className,
  disable,
  onClick,
}: ButtonProps) => {
  return (
    <div>
      <button
        className={`rounded px-14 py-3 text-customWhite-light hover:opacity-80 ${
          variant === "primary"
            ? "bg-gradient-1"
            : "border border-customBlue-light bg-transparent"
        } ${className}`}
        disabled={disable}
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;