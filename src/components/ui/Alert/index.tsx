export interface AlertProps {
  message: string;
  className?: string;
  variant?: "notification" | "success" | "error" | "warning" | "info";
  onclick?: () => void;
}

const Alert = ({
  message,
  className,
  variant = "success",
  onclick,
}: AlertProps) => {
  return (
    <div
      className={`flex items-center justify-between gap-2 rounded px-[18px] py-3 ${
        variant === "notification"
          ? "bg-customBlue-normal"
          : variant === "success"
            ? "bg-customAuxiliary-green"
            : variant === "error"
              ? "bg-customAuxiliary-red"
              : variant === "warning"
                ? "bg-customAuxiliary-yellow"
                : variant === "info"
                  ? "bg-customWhite-dark"
                  : "bg-customBlue-normal" // Default
      } ${className}`}
    >
      <p className={`${variant === "info" ? "text-black" : ""}`}>{message}</p>
      <span
        className={`${variant === "info" ? "font-bold text-black" : ""} cursor-pointer`}
        onClick={onclick}
      >
        ✖
      </span>
    </div>
  );
};

export default Alert;
