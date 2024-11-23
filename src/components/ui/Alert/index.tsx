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
          ? "bg-blue-600"
          : variant === "success"
            ? "bg-green-600"
            : variant === "error"
              ? "bg-red-600"
              : variant === "warning"
                ? "bg-yellow-600"
                : variant === "info"
                  ? "bg-netral-100"
                  : "bg-blue-600" // Default
      } ${className}`}
    >
      <p className={`${variant === "info" ? "text-black" : ""}`}>{message}</p>
      <span
        className={`${variant === "info" ? "font-bold text-black" : ""} cursor-pointer`}
        onClick={onclick}
      >
        x
      </span>
    </div>
  );
};

export default Alert;
