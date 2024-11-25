export interface ButtonProps {
  children: string | React.ReactNode;
  variant?: "primary" | "secondary" | "alternative";
  className?: string;
  disable?: boolean;
  onClick?: () => void;
}

const Button = ({
  children,
  variant = "primary",
  className,
  disable,
  onClick,
}: ButtonProps) => {
  return (
    <div>
      <button
        className={`rounded border-0 px-6 py-2 text-customWhite-light hover:opacity-80 ${
          variant === "primary"
            ? "bg-gradient-1"
            : variant === "secondary"
              ? "border border-customBlue-light bg-transparent"
              : "bg-customBlack-light"
        } ${className}`}
        disabled={disable}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
